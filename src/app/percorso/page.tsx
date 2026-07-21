import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Nel digitale dal 1998: da Switch MultiMedia (Milazzo) a oggi, portando l'AI nei processi di chi lavora con me. Le tappe, in sintesi.",
};

type Logo = { src: string; alt: string; width: number; height: number };

type Tappa = {
  periodo: string;
  ruolo: string;
  luogo: string;
  testo: string;
  loghi?: Logo[];
};

// Materiale d'archivio: alcuni dei clienti gestiti in agenzia nell'era
// Eureweb. La lista è quella confermata da Giovanni; il testo della tappa
// (sopra) cita solo nomi presenti in questa lista.
const LOGHI_EUREWEB: Logo[] = [
  { src: "/loghi/eureweb/sisal.png", alt: "Sisal", width: 538, height: 179 },
  {
    src: "/loghi/eureweb/olimpia-splendid.png",
    alt: "Olimpia Splendid",
    width: 538,
    height: 179,
  },
  { src: "/loghi/eureweb/lenovo.png", alt: "Lenovo", width: 538, height: 179 },
  {
    src: "/loghi/eureweb/piscine-castiglione.png",
    alt: "Piscine Castiglione",
    width: 538,
    height: 179,
  },
  {
    src: "/loghi/eureweb/frescopesce.png",
    alt: "Frescopesce",
    width: 538,
    height: 179,
  },
  {
    src: "/loghi/eureweb/il-pescatore-online.png",
    alt: "Il Pescatore Online",
    width: 538,
    height: 179,
  },
  { src: "/loghi/eureweb/citizen.png", alt: "Citizen", width: 538, height: 179 },
];

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
      "Torno a lavorare in proprio e, dopo la Digital Masterclass in Business Design per le PMI di Beople, do un nome al mestiere che faccio da sempre: consulente d'innovazione. Quel titolo oggi si è allargato: Innovation Manager & AI Strategist.",
  },
  {
    periodo: "2009–2018",
    ruolo: "Eureweb · quattro ruoli, fino a General Team Manager",
    luogo: "Brescia, Salò",
    testo:
      "Una digital agency, clienti come Sisal, Lenovo, Olimpia Splendid e Citizen, un team di oltre venti persone da guidare: qui ho imparato che la disciplina vale più del talento isolato.",
    loghi: LOGHI_EUREWEB,
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
      {/* ── Banda-hero bosco: stessa voce della home (spec DESIGN.md,
          lane "Bosco committed") ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
            <span className="inline-block h-[2px] w-7 bg-carta" />
            <span className="text-carta">№ 02</span>
            <span className="text-carta/80">Chi sono</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Nel digitale dal 1998.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Sicilia, Brescia, ancora Sicilia. Dall&apos;e-commerce al web
            marketing, fino a portare l&apos;AI nei processi di chi lavora con
            me oggi. Le tappe in sintesi: chi vuole il racconto lungo lo trova
            negli articoli del blog.
          </p>
        </div>
      </section>

      {/* ── Timeline su carta: il respiro tra le due bande bosco ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <ol>
            {TAPPE.map((t) => (
              <li
                key={t.periodo + t.ruolo}
                className="grid gap-3 border-t border-bosco/20 py-7 md:grid-cols-[180px_1fr] md:gap-10"
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
                  {t.loghi ? (
                    <div className="mt-6">
                      <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio">
                        Alcuni dei clienti gestiti in agenzia
                      </div>
                      <div className="mt-4 grid max-w-[620px] grid-cols-2 items-center gap-x-8 gap-y-5 sm:grid-cols-3 md:grid-cols-4">
                        {t.loghi.map((l) => (
                          <Image
                            key={l.src}
                            src={l.src}
                            alt={l.alt}
                            width={l.width}
                            height={l.height}
                            className="h-6 w-auto grayscale transition-all duration-300 md:h-7 md:hover:grayscale-0"
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
            <li className="border-t border-bosco/20" aria-hidden="true" />
          </ol>
        </div>
      </section>

      {/* ── Chiusura-ponte + CTA in bosco: la campata torna a chiudersi
          nella stessa voce della hero ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-28">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[620px] text-sottotitolo text-carta/80">
              Quasi trent&apos;anni di digitale oggi si riducono a una domanda
              sola: dove l&apos;intelligenza artificiale serve davvero al tuo
              lavoro, e dove è solo rumore. Prima capiamo questo, poi si
              sceglie lo strumento.
            </p>
            <Link
              href="/lavoro"
              className="inline-flex shrink-0 items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Lavora con me
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-9">
            <Link
              href="/blog"
              className="font-sans text-[15px] font-semibold text-carta underline decoration-carta/50 decoration-2 underline-offset-4 transition-colors hover:decoration-carta"
            >
              Leggi le storie di lavoro sul blog <span aria-hidden="true">→</span>
            </Link>
          </div>
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
