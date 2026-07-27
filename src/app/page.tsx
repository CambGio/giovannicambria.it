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
    nota: "Amendolia Assicurazioni: le procedure mappate e il CRM da cui passano clienti e prospect",
  },
  {
    src: "/loghi/recenti/dipaola.png",
    alt: "Autonoleggio Di Paola",
    width: 2277,
    height: 936,
    nota: "Autonoleggio Di Paola: il booking degli shuttle bus per l'aeroporto di Catania e il sito nuovo",
  },
  {
    src: "/loghi/recenti/lovekasa.png",
    alt: "LoveKasa",
    width: 400,
    height: 100,
    nota: "LoveKasa: il CRM del customer care e le campagne WhatsApp",
  },
  {
    src: "/loghi/recenti/empirericambi.png",
    alt: "Empire Ricambi",
    width: 2707,
    height: 210,
    nota: "Empire Ricambi: l'impresa seguita dall'inizio, fino a empirericambi.it",
    // Rapporto ~13:1: a pari altezza diventerebbe 3-5 volte più largo
    // degli altri, quindi lo si vincola in larghezza.
    classe: "h-auto w-28 md:w-36",
  },
  {
    src: "/loghi/recenti/sinotech.png",
    alt: "Sinotech",
    width: 1449,
    height: 310,
    nota: "Sinotech: l'e-commerce passato a Shopify",
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
            Aiuto le PMI a usare l&apos;AI, non a sperimentarla.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Scelgo gli strumenti, li porto dentro il lavoro di ogni giorno e
            resto finché il team li usa da solo.
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
            Nel 1998 ho co-fondato a Milazzo la mia prima società di
            internet, l&apos;anno in cui nasceva Google, quando in Sicilia
            eravamo in pochissimi a farlo. Poi nove anni in Lombardia,
            dentro un&apos;agenzia che lavorava per Pirelli, Citroën, Lenovo
            e Sisal: sono entrato come project manager e sono uscito che
            dirigevo il team. Dal 2019 lavoro in proprio, con le imprese del
            Sud.
          </p>
          <p className="mt-5 max-w-[680px] text-[17px] leading-[1.6] text-grigio">
            È sempre lo stesso mestiere: portare in azienda la tecnologia che
            conviene, quando conviene. Prima il web, adesso l&apos;AI.
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
            Comincio guardando come lavorate, non da uno strumento da
            vendere. Si sistema un lavoro alla volta, e ogni mese si guarda
            una misura sola, decisa insieme. Quando andate avanti da soli, ho
            finito.
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
              Cosa ho fatto per loro <span aria-hidden="true">→</span>
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
              Lavora con me
            </div>
            <p className="mt-5 text-sottotitolo text-carta/80">
              Mezz&apos;ora al telefono sul tuo caso. Esci sapendo dove
              l&apos;AI ti ripaga e dove no, anche se poi non lavoriamo
              insieme.
            </p>
            <Link
              href="/contatto"
              className="mt-8 inline-flex items-center gap-3 bg-carta px-6 py-3.5 font-sans text-[14px] font-semibold text-inchiostro transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Prenota una call <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
