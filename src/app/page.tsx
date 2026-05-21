import Link from "next/link";
import { TAGLINE, TAGLINE_SUB } from "@/lib/site";

const FORMATS = [
  {
    n: "01",
    t: "Mappa dell'innovazione",
    s: "Audit strategico one-shot · 1–2 settimane",
    p: "2.500 – 4.500 €",
  },
  {
    n: "02",
    t: "Workshop in-house",
    s: "Una giornata con il team operativo",
    p: "2.500 – 4.500 €",
  },
  {
    n: "03",
    t: "Affiancamento",
    s: "Ricorrente, 3–12 mesi · KPI verificabili",
    p: "2.000 – 4.000 € / mese",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-[88px]">
          <div>
            <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
              <span className="inline-block h-[2px] w-7 bg-accent" />
              <span className="text-accent">№ 01</span>
              <span className="text-ink-muted">
                — Tecnologia, decisioni, modello di business
              </span>
            </div>

            <h1
              className="font-display font-normal m-0 text-[56px] leading-[0.98] tracking-[-0.035em] md:text-[80px] lg:text-[92px]"
              style={{ fontVariationSettings: '"opsz" 96' }}
            >
              Ripensare
              <br />
              il modello
              <br />
              di business.
            </h1>

            <p className="mt-8 max-w-[560px] font-serif text-[22px] leading-[1.35] md:text-[24px]">
              {TAGLINE}
              <br />
              <span className="text-ink-muted italic">{TAGLINE_SUB}</span>
            </p>

            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] text-ink-muted md:text-[18px]">
              Senza hype, senza slide motivazionali. Case study reali, 25 anni
              di operatività, un metodo che funziona per arredamento,
              assicurazioni, food e noleggio.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/lavoro"
                className="inline-flex items-center gap-3.5 bg-ink px-6 py-4 font-sans text-[15px] font-medium text-paper tracking-[0.02em] transition-colors hover:bg-accent"
              >
                Prenota la Mappa dell&apos;innovazione
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/scritti?cat=case-study"
                className="border-b border-accent pb-0.5 font-serif text-[16px] italic text-ink transition-colors hover:text-accent"
              >
                oppure leggi i tre casi 2025
              </Link>
            </div>
          </div>

          <aside className="border-t border-rule pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-ink-muted">
              Da questo numero
            </div>
            {FORMATS.map((item) => (
              <div
                key={item.n}
                className="grid grid-cols-[40px_1fr] items-baseline gap-5 border-t border-ink py-5 mt-5 first:mt-5"
              >
                <div className="font-mono text-[13px] font-medium tracking-[0.04em] text-accent tabular-nums">
                  {item.n}
                </div>
                <div>
                  <div className="text-[22px] font-medium tracking-[-0.01em]">
                    {item.t}
                  </div>
                  <div className="mt-1 font-sans text-[13px] text-ink-muted">
                    {item.s}
                  </div>
                  <div className="mt-2 font-mono text-[13px] tracking-[0.02em] tabular-nums">
                    {item.p}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-ink" aria-hidden="true" />
          </aside>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 01 — § Apertura</span>
        <span className="hidden md:inline">
          Tipi: Bodoni Moda · Source Serif 4 · IBM Plex
        </span>
        <span>— segue a p. 02</span>
      </div>
    </>
  );
}
