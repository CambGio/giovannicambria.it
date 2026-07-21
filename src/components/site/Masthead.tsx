import { CITY, SITE_DOMAIN, TAGLINE } from "@/lib/site";

export function Masthead() {
  return (
    <div className="bg-inchiostro text-carta font-sans text-[11px] uppercase tracking-[0.08em]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-[10px] md:px-16">
        <span className="shrink-0">{SITE_DOMAIN}</span>
        <span className="hidden md:inline truncate text-center text-carta/70">
          {TAGLINE}
        </span>
        <span className="shrink-0">{CITY}</span>
      </div>
    </div>
  );
}
