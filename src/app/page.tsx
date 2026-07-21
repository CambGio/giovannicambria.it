import Image from "next/image";
import Link from "next/link";
import { articoliPerData, formattaData } from "@/lib/articoli";

// Feed dei post protagonista: al massimo 3, cronologico. Nessuna soglia
// di "griglia": è una lista, non delle card, quindi regge bene da 0 a N.
const POST_IN_HOME = 3;

const PASSI = [
  {
    num: "01",
    slug: "mappa",
    titolo: "Mappa dell'adozione",
    testo:
      "Si parte sempre da qui: un assessment dei tuoi processi che dice dove l'AI porta un ritorno reale, e dove no. L'output è una roadmap con priorità, non un elenco di strumenti. Non si passa al passo dopo senza questa base.",
  },
  {
    num: "02",
    slug: "workshop",
    titolo: "Workshop pratico",
    testo:
      "Se serve portare il team a bordo: una giornata sui casi reali del vostro lavoro, non su una demo preconfezionata. Ci si arriva quando il progetto ha bisogno di persone allineate, non solo di una direzione convinta.",
  },
  {
    num: "03",
    slug: "affiancamento",
    titolo: "Affiancamento",
    testo:
      "Per portare la roadmap a termine: resto al fianco mentre si implementa, con verifiche periodiche su un indicatore concreto. Il team resta autonomo quando il lavoro insieme finisce.",
  },
] as const;

const VALORI = [
  {
    num: "01",
    titolo: "Metodo, non hype",
    testo:
      "L'AI è uno strumento, non una risposta automatica. Prima guardo il processo, poi decido se e dove serve, anche quando la risposta onesta è che non serve.",
  },
  {
    num: "02",
    titolo: "Quasi trent'anni di digitale",
    testo:
      "Dal 1998: e-commerce, web marketing, direzione d'agenzia. Ho visto passare diverse ondate tecnologiche: so distinguere quelle che restano da quelle che passano.",
  },
  {
    num: "03",
    titolo: "Casi reali, con nomi",
    testo:
      "Amendolia Assicurazioni, Autonoleggio Di Paola, Sinotech: risultati verificabili, non case study anonimi. Qui sotto i clienti recenti.",
  },
] as const;

const CLIENTI_RECENTI = [
  {
    src: "/loghi/recenti/amendolia.svg",
    alt: "Amendolia Assicurazioni",
    width: 1500,
    height: 487,
  },
  {
    src: "/loghi/recenti/dipaola.png",
    alt: "Autonoleggio Di Paola",
    width: 2277,
    height: 936,
  },
  { src: "/loghi/recenti/lovekasa.png", alt: "LoveKasa", width: 400, height: 100 },
  { src: "/loghi/recenti/sinotech.png", alt: "Sinotech", width: 1449, height: 310 },
  {
    src: "/loghi/recenti/empirericambi.png",
    alt: "Empire Ricambi",
    width: 2707,
    height: 210,
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
            <span>Manifesto</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            L&apos;AI in azienda non parte dagli strumenti. Parte dai
            processi.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Aiuto PMI e professionisti ad adottare l&apos;intelligenza
            artificiale dove serve al business, e a lasciarla perdere dove non
            serve. Niente hype: quasi trent&apos;anni di digitale applicati
            con buon senso.
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
            <div className="text-etichetta font-mono uppercase text-bosco">
              Come lavoro
            </div>
          </div>
          <p className="mt-5 max-w-[620px] text-[17px] leading-[1.6] text-grigio">
            Un percorso che parte sempre dalla Mappa dell&apos;adozione: ogni
            passo ha un output concreto, non si va avanti senza una base
            solida.
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
            <div className="text-etichetta font-mono uppercase text-bosco">
              Dal blog
            </div>
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
          <div className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Perché lavorare con me</span>
          </div>
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
          <div className="flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco">
            <span className="inline-block h-[2px] w-7 bg-bosco" />
            <span>Clienti recenti</span>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-12 gap-y-8">
            {CLIENTI_RECENTI.map((c) => (
              <Image
                key={c.src}
                src={c.src}
                alt={c.alt}
                width={c.width}
                height={c.height}
                unoptimized={c.src.endsWith(".svg")}
                className="h-8 w-auto md:h-10"
              />
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
              Tre modi di iniziare: la Mappa dell&apos;adozione, il Workshop
              pratico, l&apos;Affiancamento.
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
