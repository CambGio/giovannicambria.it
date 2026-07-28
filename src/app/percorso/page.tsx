import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Da dove vengo",
  description:
    "Dal 1998 porto la tecnologia nelle aziende. Prima i siti, poi SEO e marketing digitale. Oggi l'AI.",
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
    ruolo: "Gli inizi: tecnologia prima del mestiere",
    testo: [
      "Ho cominciato da ragazzo, con un VIC 20 e poi un Commodore 64. Da allora ho continuato a provare le tecnologie nuove sul mio lavoro prima di proporle a un cliente.",
    ],
  },
  {
    ruolo: "Gli studi: economia e marketing",
    periodo: "~2000–2002",
    luogo: "Lecce",
    testo: [
      "Ho studiato economia e marketing. La tecnologia, da sola, non vende e non fa funzionare un'azienda. Serve capire anche il mercato, i margini e il modo in cui le persone lavorano.",
      "È da questa combinazione che nasce il mio mestiere.",
    ],
  },
  {
    ruolo: "1998, Milazzo. Switch MultiMedia",
    periodo: "1998–2007",
    luogo: "Milazzo",
    testo: [
      "Ho co-fondato Switch MultiMedia mentre ancora studiavo. In Sicilia internet era agli inizi e le aziende che lavoravano sul web erano pochissime. Siamo partiti dallo sviluppo di siti internet. Poi abbiamo aggiunto il marketing digitale: prima la SEO, poi le campagne a parola chiave.",
    ],
  },
  {
    ruolo: "Poi il marketing, quando il web ha retto",
    testo: [
      "Lì ho visto per la prima volta una tecnologia passare da curiosità a strumento di lavoro quotidiano. Da allora è successo altre tre volte.",
    ],
  },
  {
    ruolo: "2009-2018. Nove anni in Lombardia",
    periodo: "2009–2018",
    luogo: "Salò, Brescia",
    testo: [
      "In Eureweb sono entrato come project manager e sono arrivato a dirigere il team. L'agenzia lavorava per Pirelli, Citroën, Lenovo, Sisal, Candy e Citizen. Ho affiancato l'imprenditore lungo la crescita dell'azienda: da qualche centinaio di migliaia di euro di fatturato a svariati milioni all'anno.",
      "In quegli anni sono nati anche IlPescatoreOnline, e-commerce di pesce fresco con consegna in ventiquattro ore, e Rideook, progetto di bike tour in e-bike sul lago di Garda.",
    ],
  },
  {
    ruolo: "2019. Torno e apro la partita IVA",
    periodo: "2019",
    luogo: "Sicilia",
    testo: [
      "Nel 2019 sono tornato in Sicilia e ho aperto in proprio. Lo stesso anno ho approfondito il business design per le PMI. Il primo cliente è stato Empire Ricambi, dove ho affiancato l'imprenditore dalla fase iniziale fino allo sviluppo dell'e-commerce empirericambi.it.",
    ],
  },
  {
    ruolo: "Adesso",
    testo: [
      "L'AI è la fase più recente di una storia cominciata con internet. Non propongo una tecnologia perché è nuova. Capisco prima dove può servire, la porto nel lavoro e verifico che produca un risultato concreto.",
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
