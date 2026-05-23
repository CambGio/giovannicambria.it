import Link from "next/link";
import { getServizio, type ServizioSlug } from "@/lib/servizi";

export function ServizioScheda({ slug }: { slug: ServizioSlug }) {
  const s = getServizio(slug);
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ {s.n}</span>
          <span className="text-ink-muted">— Lavora con me</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          {s.titolo}
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          {s.promessa}
        </p>

        <dl className="mt-12 grid gap-px border-t border-ink bg-rule md:grid-cols-3">
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Per chi è</dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">{s.perChi}</dd>
          </div>
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Tempi</dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">{s.tempi}</dd>
          </div>
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">Investimento</dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">{s.prezzo}</dd>
          </div>
        </dl>

        <p className="mt-10 max-w-[620px] font-serif text-[16px] leading-[1.6] italic text-ink-muted">
          Il dettaglio completo di deliverable, fasi e FAQ di questa scheda è in
          lavorazione. Per ora, il modo più rapido è scrivermi: rispondo entro
          48 ore lavorative.
        </p>

        <div className="mt-9">
          <Link
            href={`/contatto?format=${s.slug}`}
            className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] font-semibold text-paper tracking-[-0.005em] transition-colors hover:bg-accent"
          >
            Raccontami il tuo caso
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10">
          <Link
            href="/lavoro"
            className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
          >
            ← tutte le schede
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 03 — § {s.titolo}</span>
        <span className="hidden md:inline">Tipi: Manrope · Source Serif 4 · IBM Plex Mono</span>
        <span>scheda servizio</span>
      </div>
    </>
  );
}
