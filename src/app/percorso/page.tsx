import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Da dove vengo",
  description:
    "Faccio entrare la tecnologia nelle aziende dal 1998. Prima i siti, poi la SEO e le campagne, adesso l'AI.",
  alternates: { canonical: "/percorso" },
};

type Tappa = {
  ruolo: string;
  periodo?: string;
  luogo?: string;
  testo: string[];
};

const TAPPE: Tappa[] = [
  {
    ruolo: "Prima del mestiere, la passione",
    testo: [
      "Ho cominciato da ragazzo, con un VIC 20 e poi un Commodore 64. Da allora sono sempre stato quello che prova le cose nuove per primo. Non è cambiato niente: gli strumenti di AI li uso sul mio lavoro mesi prima di proporli a un cliente.",
    ],
  },
  {
    ruolo: "Gli studi: economia, non informatica",
    periodo: "~2000–2002",
    luogo: "Lecce",
    testo: [
      "Ho studiato economia e marketing. È la metà che serve davvero, perché la tecnologia da sola non vende niente e non fa funzionare nessuna azienda. Le due cose insieme sono diventate il mio mestiere.",
    ],
  },
  {
    ruolo: "1998, Milazzo. Switch MultiMedia",
    periodo: "1998–2007",
    luogo: "Milazzo",
    testo: [
      "Mentre ancora studiavo ho incontrato altri imprenditori e insieme abbiamo fondato Switch MultiMedia. Per la Sicilia di allora era roba avveniristica: internet lo faceva quasi nessuno, e noi aprivamo una società per farlo. Google nasceva lo stesso anno. Siamo partiti dallo sviluppo di siti internet, e l'ho amministrata per dieci anni.",
    ],
  },
  {
    ruolo: "Poi il marketing, quando il web ha retto",
    testo: [
      "Man mano che l'infrastruttura si completava abbiamo aggiunto il marketing digitale. Prima la SEO, poi la conseguenza logica: le campagne a parola chiave. Lì ho visto per la prima volta una tecnologia passare da curiosità a strumento di lavoro quotidiano. Da allora è successo altre tre volte.",
    ],
  },
  {
    ruolo: "2009-2018. Nove anni in Lombardia",
    periodo: "2009–2018",
    luogo: "Salò, Brescia",
    testo: [
      "Sono entrato in Eureweb come project manager e sono uscito che dirigevo il team: quattro ruoli in nove anni. L'agenzia lavorava per Pirelli, Citroën, Lenovo, Sisal, Candy, Citizen. Ho affiancato l'imprenditore lungo tutta la crescita, e in quegli anni l'azienda è passata da qualche centinaio di migliaia di euro di fatturato a svariati milioni all'anno.",
      "Lì dentro sono nati IlPescatoreOnline, che nel 2014 consegnava pesce fresco in ventiquattro ore tenendo la catena del freddo, e Rideook, i tour in bici elettrica sul lago di Garda.",
    ],
  },
  {
    ruolo: "2019. Torno e apro la partita IVA",
    periodo: "2019",
    luogo: "Sicilia",
    testo: [
      "Sono tornato in Sicilia e ho aperto in proprio. Lo stesso anno ho preso un master in business design per le PMI: sapevo già con chi volevo lavorare. Il primo cliente è stato Empire, dove ho affiancato l'imprenditore dall'inizio, dal business plan fino a empirericambi.it.",
    ],
  },
  {
    ruolo: "Adesso",
    testo: [
      "L'AI è la quarta ondata che vedo arrivare, e le prime tre mi hanno insegnato a riconoscere quelle che restano. Faccio la stessa cosa che facevo nel 1998: prendo una tecnologia nuova e la porto dentro il lavoro di un'azienda, un pezzo alla volta.",
    ],
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
            <span className="text-carta/80">Da dove vengo</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Faccio entrare la tecnologia nelle aziende dal 1998.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Prima i siti, poi la SEO e le campagne, adesso l&apos;AI. Cambia
            lo strumento, non il mestiere.
          </p>
        </div>
      </section>

      {/* ── Timeline su carta: il respiro tra le due bande bosco ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <h2 className="sr-only">Le tappe</h2>
          <ol>
            {TAPPE.map((t) => (
              <li
                key={t.ruolo}
                className="grid gap-3 border-t border-bosco/20 py-7 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-bosco tabular-nums">
                  {t.periodo}
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-inchiostro md:text-[22px]">
                    {t.ruolo}
                  </h3>
                  {t.luogo ? (
                    <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.06em] text-grigio">
                      {t.luogo}
                    </div>
                  ) : null}
                  {t.testo.map((p, i) => (
                    <p
                      key={i}
                      className="mt-3 max-w-[620px] text-[17px] leading-[1.55] text-grigio"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            ))}
            <li className="border-t border-bosco/20" aria-hidden="true" />
          </ol>
        </div>
      </section>

      {/* ── Chiusura + CTA in bosco: la campata torna a chiudersi nella
          stessa voce della hero. Nessuna ripresa dell'antitesi-firma, già
          usata come sottotitolo ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-28">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-9">
            <Link
              href="/contatto"
              className="inline-flex items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Prenota una call
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/lavoro"
              className="font-sans text-[15px] font-semibold text-carta underline decoration-carta/50 decoration-2 underline-offset-4 transition-colors hover:decoration-carta"
            >
              Cosa ho fatto per i miei clienti <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 02 · § Da dove vengo</span>
        <span className="hidden md:inline">Tipi: Fraunces · Inter · IBM Plex Mono</span>
        <span>segue a p. 03</span>
      </div>
    </>
  );
}
