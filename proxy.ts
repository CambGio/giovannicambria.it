import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, sha256Hex } from "@/lib/access";

const NOINDEX = "noindex, nofollow, noarchive, nosnippet";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/lock")) {
    return withNoindex(NextResponse.next());
  }

  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return withNoindex(NextResponse.next());
  }

  const expected = await sha256Hex(password);
  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
  if (cookie === expected) {
    return withNoindex(NextResponse.next());
  }

  const url = req.nextUrl.clone();
  url.pathname = "/lock";
  url.searchParams.set("from", pathname);
  return withNoindex(NextResponse.redirect(url));
}

function withNoindex(res: NextResponse) {
  res.headers.set("X-Robots-Tag", NOINDEX);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
