import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articoliPerData, formattaData } from "@/lib/articoli";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Feed dei post protagonista: al massimo 3, cronologico. Nessuna soglia
// di "griglia": è una lista, non delle card, quindi regge bene da 0 a N.
const POST_IN_HOME = 3;

const CLIENTI_RECENTI: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Riga descrittiva sotto il logo. */
  nota: string;
  /** Override di misura per loghi con proporzioni anomale. */
  classe?: string;
}[] = [
  {
    src: "/loghi/recenti/amendolia.svg",
    alt: "Amendolia Assicurazioni",
    width: 1500,
    height: 487,
    nota: "Amendolia Assicurazioni: processi, CRM e gestione dei contatti con clienti e prospect",
  },
  {
    src: "/loghi/recenti/dipaola.png",
    alt: "Autonoleggio Di Paola",
    width: 2277,
    height: 936,
    nota: "Autonoleggio Di Paola: prenotazione online degli shuttle bus e nuovo sito aziendale",
  },
  {
    src: "/loghi/recenti/lovekasa.png",
    alt: "LoveKasa",
    width: 400,
    height: 100,
    nota: "LoveKasa: CRM per la gestione delle richieste e campagne WhatsApp",
  },
  {
    src: "/loghi/recenti/empirericambi.png",
    alt: "Empire Ricambi",
    width: 2707,
    height: 210,
    nota: "Empire Ricambi: affiancamento all'imprenditore fino allo sviluppo dell'e-commerce",
    // Rapporto ~13:1: a pari altezza diventerebbe 3-5 volte più largo
    // degli altri, quindi lo si vincola in larghezza.
    classe: "h-auto w-28 md:w-36",
  },
  {
    src: "/loghi/recenti/sinotech.png",
    alt: "Sinotech",
    width: 1449,
    height: 310,
    nota: "Sinotech: migrazione dell'e-commerce da PrestaShop a Shopify",
  },
];

export default function Home() {
  const post = articoliPerData.slice(0, POST_IN_HOME);

  return (
    <>
      {/* ── Manifesto: bosco pieno, tipografia carta monumentale. Il
          verde smette di essere accento (spec DESIGN.md, lane
          "Bosco committed") ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-carta">
            <span className="inline-block h-[2px] w-7 bg-carta" />
            <span>Consulente indipendente · Milazzo</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Porto l&apos;AI nei processi aziendali.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Individuo dove il lavoro perde tempo, scelgo gli strumenti adatti
            e li integro nei processi. L&apos;obiettivo non è usare più
            tecnologia. È far funzionare meglio l&apos;azienda.
          </p>

          <div className="mt-11 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-9">
            <Link
              href="/contatto"
              className="inline-flex items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Prenota una call
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Chi sono: traiettoria compressa, prosa su carta con link
          di approfondimento a /percorso ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <h2 className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Chi sono</span>
          </h2>
          <p className="mt-7 max-w-[680px] text-[17px] leading-[1.6] text-grigio">
            Dal 1998 lavoro per portare la tecnologia dentro le aziende. Ho
            co-fondato a Milazzo la mia prima società di internet quando in
            Sicilia erano ancora in pochi a occuparsene. Poi ho lavorato per
            nove anni in Lombardia, in un&apos;agenzia con clienti come
            Pirelli, Citroën, Lenovo e Sisal. Sono entrato come project
            manager e sono arrivato a dirigere il team.
          </p>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.6] text-grigio">
            Dal 2019 lavoro come consulente indipendente. Prima il web, la SEO
            e il marketing digitale. Oggi l&apos;AI. Il mestiere è rimasto lo
            stesso: capire dove una tecnologia può produrre valore e portarla
            nel lavoro quotidiano.
          </p>
          <p className="mt-6">
            <Link
              href="/percorso"
              className="font-sans text-[15px] font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
            >
              Da dove vengo <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ── Come lavoro: tre righe, senza pacchetti né numeri ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <div className="flex items-baseline justify-between border-t-2 border-bosco pt-7">
            <h2 className="text-etichetta font-mono uppercase text-bosco">
              Come lavoro
            </h2>
          </div>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-grigio">
            Non parto dallo strumento. Parto dall&apos;azienda. Analizzo i
            processi, individuo il lavoro che assorbe più tempo e scelgo la
            soluzione adatta. Poi la porto dentro l&apos;operatività e verifico
            che venga usata davvero.

            L&apos;AI non si adotta con un annuncio al team. Si adotta quando
            entra nel lavoro e produce un cambiamento verificabile.
          </p>
        </div>
      </section>

      {/* ── Feed dei post: la campata-respiro su carta, ma il bosco
          resta il filo che tiene insieme le righe (regole e
          etichette in bosco, non più in grigio neutro) ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <div className="flex items-baseline justify-between border-t-2 border-bosco pt-7">
            <h2 className="text-etichetta font-mono uppercase text-bosco">
              Dal blog
            </h2>
            {post.length > 0 ? (
              <Link
                href="/blog"
                className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
              >
                Tutti gli articoli <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </div>

          {post.length > 0 ? (
            <ul className="mt-2 divide-y divide-bosco/15 border-b border-bosco/15">
              {post.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group flex flex-col gap-3 py-8 md:py-9"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-grigio tabular-nums">
                      {formattaData(a.data)} · {a.rubricaLabel} · {a.minuti} min
                    </div>
                    <div className="max-w-[820px] font-display text-sottotitolo font-medium text-inchiostro transition-colors group-hover:text-bosco">
                      {a.titolo}
                    </div>
                    <p className="max-w-[640px] text-[16px] leading-[1.6] text-grigio">
                      {a.sommario}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-7 max-w-[560px] text-[17px] leading-[1.6] text-grigio">
              I primi articoli sono in arrivo.
            </p>
          )}
        </div>
      </section>

      {/* ── Clienti: striscia su carta, ponte tra il feed e la chiusura
          bosco. Loghi a colori originali (per dare colore), normalizzati
          in altezza: non in card, non in griglia ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20">
          <h2 className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Clienti</span>
          </h2>
          <div className="mt-9 flex flex-wrap items-start gap-x-12 gap-y-10">
            {CLIENTI_RECENTI.map((c) => (
              <div key={c.src} className="max-w-[280px]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  unoptimized={c.src.endsWith(".svg")}
                  className={c.classe ?? "h-8 w-auto md:h-10"}
                />
                <p className="mt-4 text-[16px] leading-[1.6] text-grigio">
                  {c.nota}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-9">
            <Link
              href="/lavoro"
              className="font-sans text-[15px] font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
            >
              Vedi tutti i progetti <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* ── Chiusura in bosco: la campata apre e chiude nella stessa
          voce, la carta in mezzo è il respiro, non la regola ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-28">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-carta">
              <span className="inline-block h-[2px] w-7 bg-carta" />
              Parliamo del tuo progetto
            </div>
            <p className="mt-5 text-sottotitolo text-carta/80">
              Un confronto sul tuo caso per capire dove l&apos;AI può produrre
              valore e dove invece non serve. Esci con una direzione più
              chiara, anche se poi non lavoriamo insieme.
            </p>
            <Link
              href="/contatto"
              className="mt-8 inline-flex items-center gap-3 bg-carta px-6 py-3.5 font-sans text-[14px] font-semibold text-inchiostro transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Fissa un appuntamento <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
