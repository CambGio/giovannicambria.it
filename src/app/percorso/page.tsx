import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Nel digitale dal 1998: da Switch MultiMedia (Milazzo) a oggi, portando l'AI nei processi di chi lavora con me. Le tappe, in sintesi.",
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
      "Per l'agenzia assicurativa un percorso partito dalla consulenza manageriale e cresciuto fino al CRM, alla lead generation e a un agente vocale per il centralino fuori orario; per l'autonoleggio, il sito con booking dei transfer e la SEO. Lo stesso metodo su entrambi: prima capire il processo, poi decidere se e dove serve l'AI.",
  },
  {
    periodo: "2024–2025",
    ruolo: "Sinotech · migrazione e-commerce",
    luogo: "Milano",
    testo:
      "Migrazione dell'e-commerce da PrestaShop a Shopify, più SEO e Analytics: un anno di lavoro, chiuso a giugno 2025.",
  },
  {
    periodo: "2019–2024",
    ruolo: "Empire S.r.l. · Consulente di direzione",
    luogo: "Venetico (ME)",
    testo:
      "Con il founder ho co-progettato la catena del valore e costruito da zero il canale e-commerce: empirericambi.it, su Shopify da aprile 2021.",
  },
  {
    periodo: "2019",
    ruolo: "Consulente indipendente",
    luogo: "Sicilia",
    testo:
      "Torno a lavorare in proprio e, dopo la Digital Masterclass in Business Design per le PMI di Beople, do un nome al mestiere: consulente in innovazione dei modelli di business. Un titolo che oggi si è allargato: Innovation Manager & AI Strategist.",
  },
  {
    periodo: "2009–2018",
    ruolo: "Eureweb · quattro ruoli, fino a General Team Manager",
    luogo: "Brescia, Salò",
    testo:
      "Una digital agency, clienti come Pirelli, Citroën, Lenovo e Candy, un team di oltre venti persone da guidare: qui ho imparato che la disciplina vale più del talento isolato.",
  },
  {
    periodo: "2008–2009",
    ruolo: "Web marketing · in proprio",
    luogo: "Milazzo",
    testo:
      "Chiusa l'agenzia, un anno da solo con clienti diretti e progetti web, prima del salto in una struttura più grande.",
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
        <div className="mb-7 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-bosco">№ 02</span>
          <span className="text-grigio">Chi sono</span>
        </div>

        <h1 className="max-w-[900px] text-display font-extrabold text-inchiostro">
          Nel digitale dal 1998.
        </h1>

        <p className="mt-8 max-w-[620px] text-sottotitolo text-grigio">
          Sicilia, Brescia, ancora Sicilia. Dall&apos;e-commerce al web
          marketing, fino a portare l&apos;AI nei processi di chi lavora con
          me oggi. Le tappe in sintesi: chi vuole il racconto lungo lo trova
          negli articoli del blog.
        </p>

        <ol className="mt-14">
          {TAPPE.map((t) => (
            <li
              key={t.periodo + t.ruolo}
              className="grid gap-3 border-t border-inchiostro py-7 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-bosco tabular-nums">
                {t.periodo}
              </div>
              <div>
                <div className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-inchiostro md:text-[22px]">
                  {t.ruolo}
                </div>
                <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-grigio">
                  {t.luogo}
                </div>
                <p className="mt-3 max-w-[620px] text-[17px] leading-[1.55] text-grigio">
                  {t.testo}
                </p>
              </div>
            </li>
          ))}
          <li className="border-t border-inchiostro" aria-hidden="true" />
        </ol>

        <div className="mt-14 flex flex-col items-start gap-6 border-t-2 border-inchiostro pt-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[560px] text-sottotitolo text-inchiostro">
            Quasi trent&apos;anni di digitale oggi si riducono a una domanda
            sola: dove l&apos;intelligenza artificiale serve davvero al tuo
            lavoro, e dove è solo rumore. Prima capiamo questo, poi si
            sceglie lo strumento.
          </p>
          <Link
            href="/lavoro"
            className="inline-flex shrink-0 items-center gap-3 bg-inchiostro px-7 py-4 font-sans text-[15px] font-semibold text-carta tracking-[-0.005em] transition-colors hover:bg-bosco"
          >
            Lavora con me
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-7">
          <Link
            href="/blog"
            className="font-sans text-[15px] font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
          >
            Leggi le storie di lavoro sul blog →
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 02 · § Chi sono</span>
        <span className="hidden md:inline">Tipi: Fraunces · Inter · IBM Plex Mono</span>
        <span>segue a p. 03</span>
      </div>
    </>
  );
}
