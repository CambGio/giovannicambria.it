"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ACCESS_COOKIE, sha256Hex } from "@/lib/access";

const ONE_MONTH_SECONDS = 60 * 60 * 24 * 30;

export async function unlock(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const fromRaw = String(formData.get("from") ?? "/");
  const target = fromRaw.startsWith("/") && !fromRaw.startsWith("//") ? fromRaw : "/";
  const expected = process.env.SITE_PASSWORD ?? "";

  if (!expected || password !== expected) {
    redirect(`/lock?error=1&from=${encodeURIComponent(target)}`);
  }

  const token = await sha256Hex(expected);
  const cookieStore = await cookies();
  cookieStore.set(ACCESS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: ONE_MONTH_SECONDS,
    path: "/",
  });

  redirect(target);
}
