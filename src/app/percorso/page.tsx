import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Nel digitale dal 1998: da Switch MultiMedia (Milazzo) agli incarichi di oggi, passando per Brescia. Le tappe, in sintesi.",
};

type Tappa = {
  periodo: string;
  ruolo: string;
  luogo: string;
  testo: string;
};

const TAPPE: Tappa[] = [
  {
    periodo: "Dal 2024",
    ruolo: "Amendolia Assicurazioni e Autonoleggio Di Paola",
    luogo: "Milazzo",
    testo:
      "Per l'agenzia assicurativa un percorso partito dalla consulenza manageriale e cresciuto fino al CRM, alla lead generation e a un agente vocale per il centralino fuori orario; per l'autonoleggio, il sito con booking dei transfer e la SEO.",
  },
  {
    periodo: "2024–2025",
    ruolo: "Sinotech · migrazione e-commerce",
    luogo: "Milano",
    testo:
      "Migrazione dell'e-commerce da PrestaShop a Shopify, più SEO e Analytics: un anno di lavoro, chiuso a giugno 2025.",
  },
  {
    periodo: "Dal 2019",
    ruolo: "Empire S.r.l. · Direttore marketing, poi Innovation Manager (feb 2020)",
    luogo: "Venetico (ME)",
    testo:
      "Con il founder ho co-progettato la catena del valore e costruito da zero il canale e-commerce: empirericambi.it, su Shopify da aprile 2021.",
  },
  {
    periodo: "2019",
    ruolo: "Consulente indipendente",
    luogo: "Sicilia",
    testo:
      "Torno a lavorare in proprio e, dopo la Digital Masterclass in Business Design per le PMI di Beople, do un nome al mestiere: consulente in innovazione dei modelli di business.",
  },
  {
    periodo: "2009–2018",
    ruolo: "Eureweb · quattro ruoli, fino a General Team Manager",
    luogo: "Brescia, Salò",
    testo:
      "Una digital agency, clienti come Pirelli, Citroën, Lenovo e Candy, un team di oltre venti persone da guidare: qui ho imparato che la disciplina vale più del talento isolato.",
  },
  {
    periodo: "2007–2009",
    ruolo: "Studio Cambria · freelance",
    luogo: "Milazzo",
    testo:
      "Chiusa l'agenzia, resto sul mestiere da solo: clienti diretti e progetti web, prima del salto in una struttura più grande.",
  },
  {
    periodo: "1998–2007",
    ruolo: "Switch MultiMedia · agenzia digitale co-fondata",
    luogo: "Milazzo",
    testo:
      "Co-fondata con un socio quando «fare web» in Sicilia era un mestiere senza nome: vendita, strategia, esecuzione, persone, tutto insieme.",
  },
];

export default function Percorso() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 02</span>
          <span className="text-ink-muted">Chi sono</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          Nel digitale dal 1998.
        </h1>

        <p className="mt-8 max-w-[560px] font-serif text-[20px] leading-[1.45] text-ink-muted md:text-[22px]">
          Sicilia, Brescia, ancora Sicilia. Le tappe in sintesi: chi vuole il
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
            Leggi le storie di lavoro sul blog →
          </Link>
          <Link
            href="/lavoro"
            className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
          >
            Lavora con me →
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 02 · § Chi sono</span>
        <span className="hidden md:inline">Tipi: Manrope · Source Serif 4 · IBM Plex Mono</span>
        <span>segue a p. 03</span>
      </div>
    </>
  );
}
