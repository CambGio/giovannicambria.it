const ISSUE = {
  year: "Anno XXVI",
  number: "N. 144",
  date: "Martedì 19 Maggio 2026",
};

export function Masthead() {
  return (
    <>
      <div className="bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.04em]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-[10px] md:px-16">
          <span>giovannicambria.it</span>
          <span className="hidden md:inline">
            {ISSUE.year} · {ISSUE.number} · {ISSUE.date}
          </span>
          <span>Milazzo</span>
        </div>
      </div>
      <div className="h-[3px] bg-accent" aria-hidden="true" />
    </>
  );
}
