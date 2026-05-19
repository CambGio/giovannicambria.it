import Link from "next/link";
import { Wordmark } from "./Wordmark";

const NAV = [
  { label: "Lavoro", href: "/lavoro" },
  { label: "Scritti", href: "/scritti" },
  { label: "Approccio", href: "/approccio" },
  { label: "Contatto", href: "/contatto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-16 md:py-[22px]">
        <Link href="/" className="inline-flex items-center" aria-label="Home">
          <Wordmark size={22} />
        </Link>
        <nav aria-label="Principale">
          <ul className="flex items-center gap-6 md:gap-9 font-sans text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
