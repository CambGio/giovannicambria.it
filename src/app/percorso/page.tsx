import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono — Giovanni Cambria",
  description:
    "Quasi trent'anni nel digitale: da Switch MultiMedia (1998) agli incarichi di oggi in Sicilia. Le tappe, in sintesi.",
};

type Tappa = {
  periodo: string;
  ruolo: string;
  luogo: string;
  testo: string;
};

const TAPPE: Tappa[] = [
  {
    periodo: "2024 — oggi",
    ruolo: "Amendolia Assicurazioni e Sinotech",
    luogo: "Milazzo, Milano",
    testo:
      "Due incarichi recenti: un'agenzia assicurativa siciliana e un'azienda milanese. Lo stesso metodo, due contesti diversi.",
  },
  {
    periodo: "2019 — oggi",
    ruolo: "Empire S.r.l. — Direttore marketing, poi Innovation Manager (feb 2020)",
    luogo: "Venetico (ME)",
    testo:
      "Co-progettazione della catena del valore col founder e lancio del canale e-commerce empirericambi.it (2021). Il cliente che mi ha dato continuità.",
  },
  {
    periodo: "2019",
    ruolo: "Consulente indipendente + Business Design Academy (Beople)",
    luogo: "Sicilia",
    testo:
      "Torno a lavorare in proprio e do un nome al mestiere: consulente in innovazione dei modelli di business.",
  },
  {
    periodo: "2009 — 2018",
    ruolo: "Eureweb — quattro ruoli, fino a General Team Manager",
    luogo: "Brescia, Salò",
    testo:
      "Dieci anni in una digital agency, per clienti come Pirelli, Citroën, Lenovo, Candy, Sisal. Qui ho imparato che la disciplina vale più del talento isolato.",
  },
  {
    periodo: "1998 — 2007",
    ruolo: "Switch MultiMedia — agenzia digitale propria",
    luogo: "Milazzo",
    testo:
      "Fondata a 27 anni, quando «fare web» in Sicilia era un mestiere senza nome. Dieci anni a fare tutto: vendita, strategia, esecuzione, persone.",
  },
];

export default function Percorso() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 02</span>
          <span className="text-ink-muted">— Il percorso, non il curriculum</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          Quasi trent&apos;anni nel digitale.
        </h1>

        <p className="mt-8 max-w-[560px] font-serif text-[20px] leading-[1.45] text-ink-muted md:text-[22px]">
          Sicilia, Brescia, ancora Sicilia. Le tappe in sintesi — chi vuole il
          racconto lungo lo trova negli articoli del blog.
        </p>

        <ol className="mt-14">
          {TAPPE.map((t) => (
            <li
              key={t.periodo + t.ruolo}
              className="grid gap-3 border-t border-ink py-7 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-accent tabular-nums">
                {t.periodo}
              </div>
              <div>
                <div className="font-sans text-[20px] font-bold leading-[1.2] tracking-[-0.015em] md:text-[22px]">
                  {t.ruolo}
                </div>
                <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted">
                  {t.luogo}
                </div>
                <p className="mt-3 max-w-[620px] font-serif text-[17px] leading-[1.55] text-ink-muted">
                  {t.testo}
                </p>
              </div>
            </li>
          ))}
          <li className="border-t border-ink" aria-hidden="true" />
        </ol>

        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
          <Link
            href="/blog"
            className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
          >
            leggi le storie di lavoro sul blog →
          </Link>
          <Link
            href="/lavoro"
            className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
          >
            oppure vedi come lavoriamo insieme →
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 02 — § Chi sono</span>
        <span className="hidden md:inline">Tipi: Manrope · Source Serif 4 · IBM Plex Mono</span>
        <span>— segue a p. 03</span>
      </div>
    </>
  );
}
