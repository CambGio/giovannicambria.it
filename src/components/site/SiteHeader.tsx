import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { MobileNav } from "./MobileNav";
import { NAV } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="border-b border-inchiostro/10">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-auto md:px-16 md:py-[22px]">
        <Link href="/" className="inline-flex items-center" aria-label="Home">
          <Wordmark size={22} />
        </Link>

        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-7 font-sans text-[13px] uppercase tracking-[0.06em] md:gap-10">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-inchiostro transition-colors hover:text-bosco"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
