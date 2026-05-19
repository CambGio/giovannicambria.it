import { TAGLINE } from "@/lib/site";

export function Masthead() {
  return (
    <>
      <div className="bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.04em]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-[10px] md:px-16">
          <span className="shrink-0">giovannicambria.it</span>
          <span className="hidden md:inline truncate text-center">
            {TAGLINE}
          </span>
          <span className="shrink-0">Milazzo</span>
        </div>
      </div>
      <div className="h-[3px] bg-accent" aria-hidden="true" />
    </>
  );
}
