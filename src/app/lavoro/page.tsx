import Link from "next/link";
import type { Metadata } from "next";
import { SERVIZI } from "@/lib/servizi";

export const metadata: Metadata = {
  title: "Lavoro — Giovanni Cambria",
  description:
    "Tre modi di lavorare insieme sull'innovazione del modello di business: la Mappa, il Workshop in-house, l'Affiancamento.",
};

export default function Lavoro() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 03</span>
          <span className="text-ink-muted">— Lavora con me</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          Tre modi di iniziare.
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          Lavoro con PMI italiane che vogliono innovare il modello di business
          prima del tool. Tre porte d&apos;ingresso, per momenti diversi del
          bisogno.
        </p>

        <div className="mt-14 grid gap-px bg-rule md:grid-cols-3">
          {SERVIZI.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex flex-col bg-paper p-7 transition-colors md:p-8"
            >
              <div className="flex items-baseline justify-between font-mono text-[12px] tracking-[0.04em] text-accent tabular-nums">
                <span>{s.n}</span>
                <span className="text-ink-muted">scheda</span>
              </div>
              <div className="mt-5 font-sans text-[24px] font-semibold leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-accent">
                {s.titolo}
              </div>
              <div className="mt-3 font-serif text-[16px] leading-[1.5] text-ink-muted">
                {s.promessa}
              </div>
              <div className="mt-6 grid gap-1.5 font-mono text-[12px] uppercase tracking-[0.04em] text-ink-muted tabular-nums">
                <span>{s.tempi}</span>
                <span>{s.prezzo}</span>
              </div>
              <div className="mt-6 font-serif text-[15px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors group-hover:text-accent group-hover:underline">
                Vedi scheda →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border-t-2 border-ink pt-7">
          <p className="font-serif text-[18px] leading-[1.5] text-ink-muted">
            Non sei sicuro di quale sia il taglio giusto per il tuo caso?{" "}
            <Link
              href="/contatto"
              className="not-italic font-sans font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
            >
              Scrivimi, ne parliamo.
            </Link>
          </p>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 03 — § Lavoro</span>
        <span className="hidden md:inline">Tipi: Manrope · Source Serif 4 · IBM Plex Mono</span>
        <span>— segue a p. 04</span>
      </div>
    </>
  );
}
