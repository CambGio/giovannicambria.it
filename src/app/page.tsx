import Image from "next/image";
import Link from "next/link";
import { articoliPerData, formattaData } from "@/lib/articoli";

// Feed dei post protagonista: al massimo 3, cronologico. Nessuna soglia
// di "griglia": è una lista, non delle card, quindi regge bene da 0 a N.
const POST_IN_HOME = 3;

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
              href="/lavoro"
              className="inline-flex items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Lavora con me
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
              href="/lavoro"
              className="mt-8 inline-flex items-center gap-3 bg-carta px-6 py-3.5 font-sans text-[14px] font-semibold text-inchiostro transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Vedi i tre modi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
