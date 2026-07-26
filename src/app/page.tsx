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

const PASSI = [
  {
    num: "01",
    slug: "mappa",
    titolo: "Mappa dell'adozione",
    testo:
      "Vengo in azienda e guardo come lavorate. Esce una mappa: cosa conviene automatizzare subito, cosa può aspettare, cosa è meglio lasciare com'è.",
  },
  {
    num: "02",
    slug: "workshop",
    titolo: "Workshop pratico",
    testo:
      "Una giornata sul vostro lavoro vero, sui preventivi e sulle mail di questa settimana. Il team esce sapendo fare, non sapendo cos'è l'AI.",
  },
  {
    num: "03",
    slug: "affiancamento",
    titolo: "Affiancamento",
    testo:
      "Resto sul progetto finché cammina da solo. Ogni mese una misura sola, decisa insieme.",
  },
] as const;

const VALORI = [
  {
    num: "01",
    titolo: "Nel digitale dal 1998",
    testo:
      "Ho fondato e diretto la mia agenzia per dieci anni. Poi nove anni in un'agenzia in Lombardia, quattro ruoli fino alla direzione del team. L'AI è la quarta ondata che vedo arrivare. So riconoscere quelle che restano.",
  },
  {
    num: "02",
    titolo: "Il software viene per ultimo",
    testo:
      "Non prendo provvigioni da nessun fornitore. Scelgo lo strumento dopo aver visto come lavorate, non prima.",
  },
  {
    num: "03",
    titolo: "Cinque aziende, con nome e cognome",
    testo:
      "Amendolia Assicurazioni, Autonoleggio Di Paola, LoveKasa, Sinotech, Empire Ricambi. Qui sotto c'è cosa ho fatto per ognuna.",
  },
] as const;

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
    src: "/loghi/recenti/sinotech.png",
    alt: "Sinotech",
    width: 1449,
    height: 310,
    nota: "Sinotech: l'e-commerce passato a Shopify",
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
            resto finché il team li usa da solo. Ho fondato la mia prima
            società di internet a Milazzo nel 1998, l&apos;anno in cui nasceva
            Google, quando in Sicilia eravamo in pochissimi a farlo. Da
            allora il mestiere è lo stesso: far entrare in azienda la
            tecnologia che conviene, quando conviene.
          </p>

          <div className="mt-11 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-9">
            <Link
              href="/contatto"
              className="inline-flex items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Prenota una call
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/percorso"
              className="font-sans text-[15px] font-semibold text-carta underline decoration-carta/50 decoration-2 underline-offset-4 transition-colors hover:decoration-carta"
            >
              Chi sono, in breve <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Come lavoro: il percorso in tre passi, stessa grammatica
          visiva della timeline di /percorso (colonna mono + titolo +
          testo), ma su carta e con link diretti alle schede di /lavoro ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <div className="flex items-baseline justify-between border-t-2 border-bosco pt-7">
            <h2 className="text-etichetta font-mono uppercase text-bosco">
              Come lavoro
            </h2>
          </div>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-grigio">
            Tre passi. Si comincia sempre dal primo.
          </p>

          <ol className="mt-10">
            {PASSI.map((p) => (
              <li key={p.slug} className="border-t border-bosco/20">
                <Link
                  href={`/lavoro#${p.slug}`}
                  className="group grid gap-3 py-8 md:grid-cols-[180px_1fr] md:gap-10 md:py-9"
                >
                  <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-bosco tabular-nums">
                    {p.num}
                  </div>
                  <div>
                    <div className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-inchiostro transition-colors group-hover:text-bosco md:text-[22px]">
                      {p.titolo} <span aria-hidden="true">→</span>
                    </div>
                    <p className="mt-3 max-w-[620px] text-[17px] leading-[1.55] text-grigio">
                      {p.testo}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
            <li className="border-t border-bosco/20" aria-hidden="true" />
          </ol>
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

      {/* ── Perché lavorare con me: tre punti numerati, stessa etichetta
          a bullet-line della hero/chiusura, ma in bosco su carta ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <h2 className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Perché lavorare con me</span>
          </h2>
          <div className="mt-9 grid gap-10 md:grid-cols-3 md:gap-8">
            {VALORI.map((v) => (
              <div key={v.num} className="border-t-2 border-inchiostro pt-6">
                <span className="font-mono text-[13px] text-bosco tabular-nums">
                  {v.num}
                </span>
                <h3 className="mt-3 font-display text-[22px] font-semibold tracking-[-0.015em] text-inchiostro">
                  {v.titolo}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-grigio">
                  {v.testo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clienti recenti: striscia su carta, ponte tra il feed e la
          chiusura bosco. Loghi a colori originali (per dare colore),
          normalizzati in altezza: non in card, non in griglia ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20">
          <h2 className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Clienti recenti</span>
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
