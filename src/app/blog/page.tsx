import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Giovanni Cambria",
  description:
    "Cosa cambia per chi fa impresa, quando cambia la tecnologia. Letture sull'innovazione dei modelli di business per PMI italiane.",
};

export default function Blog() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-32">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 01</span>
          <span className="text-ink-muted">— Il blog</span>
        </div>

        <h1 className="max-w-[920px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[76px]">
          Cosa cambia per chi fa impresa,
          {" "}
          <span className="font-serif italic font-normal text-ink-muted">
            quando cambia la tecnologia.
          </span>
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          Due letture a settimana, sul modello di business più che sul tool. I
          primi articoli stanno arrivando.
        </p>

        <div className="mt-14 border-t-2 border-ink pt-7">
          <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
            Le tre rubriche
          </div>
          <ul className="mt-6 grid gap-px bg-rule md:grid-cols-3">
            {[
              { t: "Cosa cambia se…", d: "La news della settimana, letta in chiave PMI." },
              { t: "Storia di…", d: "Un caso reale di implementazione, raccontato." },
              { t: "Modelli", d: "I framework evergreen, da salvare e rileggere." },
            ].map((r) => (
              <li key={r.t} className="bg-paper p-6">
                <div className="font-sans text-[18px] font-semibold tracking-[-0.01em]">{r.t}</div>
                <div className="mt-2 font-serif text-[15px] leading-[1.5] text-ink-muted">{r.d}</div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 max-w-[620px] font-serif text-[17px] leading-[1.6] text-ink-muted">
          Vuoi essere avvisato quando esce il primo?{" "}
          <Link
            href="/contatto"
            className="font-sans font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Scrivimi
          </Link>{" "}
          e ti aggiungo alla lista.
        </p>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 01 — § Blog</span>
        <span className="hidden md:inline">Tipi: Manrope · Source Serif 4 · IBM Plex Mono</span>
        <span>indice in arrivo</span>
      </div>
    </>
  );
}
