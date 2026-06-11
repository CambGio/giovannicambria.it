import Link from "next/link";
import { articoliPerData, formattaData } from "@/lib/articoli";

// La griglia "Dal blog" compare solo se, oltre all'hero, ci sono almeno
// 2 articoli: con uno solo sembrerebbe monca. Massimo 3 card (spec §4.3).
const SOGLIA_GRIGLIA = 2;

export default function Home() {
  const [hero, ...altri] = articoliPerData;
  const recenti = altri.slice(0, 3);
  const mostraGriglia = recenti.length >= SOGLIA_GRIGLIA;

  return (
    <>
      {hero ? (
        /* ── Front page: articolo in evidenza + manifesto a spalla ── */
        <section className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-[72px]">
            <Link href={`/blog/${hero.slug}`} className="group block">
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                <span className="inline-block h-[2px] w-6 bg-accent" />
                <span className="text-accent">In evidenza</span>
                <span className="text-ink-muted">{hero.rubricaLabel}</span>
              </div>
              <h1 className="mt-4 font-sans text-[34px] font-extrabold leading-[1.02] tracking-[-0.03em] text-ink transition-colors group-hover:text-accent md:text-[44px] lg:text-[50px]">
                {hero.titolo}
              </h1>
              <div className="relative mt-7 aspect-[16/9] w-full bg-placeholder">
                <span className="absolute bottom-4 right-5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted">
                  immagine articolo
                </span>
              </div>
              <p className="mt-6 max-w-[640px] font-serif text-[19px] leading-[1.5] text-ink-muted md:text-[20px]">
                {hero.sommario}
              </p>
              <div className="mt-4 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
                {formattaData(hero.data)} · {hero.minuti} min
              </div>
            </Link>

            <aside className="lg:border-l lg:border-rule lg:pl-[72px]">
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
                <span className="inline-block h-[2px] w-6 bg-accent" />
                <span className="text-accent">Manifesto</span>
              </div>
              <p className="mt-6 font-serif text-[22px] leading-[1.4] text-ink md:text-[24px]">
                Quasi tutti quelli che vendono innovazione vendono un tool. Io
                parto dal modello di business:{" "}
                <span className="italic text-ink-muted">
                  cosa cambia davvero per chi fa impresa.
                </span>
              </p>
              <p className="mt-5 font-serif text-[16px] leading-[1.6] text-ink-muted">
                Niente hype, niente slide motivazionali, niente notizie
                riciclate. Storie vere di lavoro sul campo e 28 anni di
                mestiere nel digitale, per imprese italiane fuori dai poli
                metropolitani.
              </p>
              <div className="mt-7 flex flex-col gap-2.5">
                <Link
                  href="/percorso"
                  className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
                >
                  Chi sono, in breve <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/lavoro"
                  className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
                >
                  Lavora con me <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      ) : (
        /* ── Empty state: nessun articolo pubblicato. Manifesto a tutta
           pagina; hero e griglia nascosti (spec §4, empty state). ── */
        <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 lg:py-32">
          <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
            <span className="inline-block h-[2px] w-6 bg-accent" />
            <span className="text-accent">Manifesto</span>
          </div>
          <h1 className="mt-6 max-w-[920px] font-sans text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink md:text-[46px] lg:text-[54px]">
            Quasi tutti quelli che vendono innovazione vendono un tool. Io
            parto dal modello di business.
          </h1>
          <p className="mt-7 max-w-[680px] font-serif text-[19px] leading-[1.55] text-ink-muted md:text-[21px]">
            Cosa cambia davvero per chi fa impresa: è la domanda da cui parte
            ogni articolo di questo sito. Niente hype, niente slide
            motivazionali, niente notizie riciclate. Storie vere di lavoro sul
            campo e 28 anni di mestiere nel digitale, per imprese italiane
            fuori dai poli metropolitani.
          </p>
          <p className="mt-5 max-w-[680px] font-serif text-[17px] leading-[1.6] text-ink-muted">
            I primi articoli sono in arrivo. Intanto puoi leggere chi sono o
            vedere come lavoro.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:gap-10">
            <Link
              href="/percorso"
              className="font-serif text-[17px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
            >
              Chi sono, in breve <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/lavoro"
              className="font-serif text-[17px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
            >
              Lavora con me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

      {/* ── Ultimi articoli (solo se ce ne sono abbastanza) ── */}
      {hero && mostraGriglia ? (
        <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
          <div className="flex items-baseline justify-between border-t-2 border-ink pt-7">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
              Dal blog
            </div>
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
            >
              Tutti gli articoli <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div
            className={`mt-7 grid gap-px bg-rule ${
              recenti.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {recenti.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col bg-paper p-6 md:p-7"
              >
                <div className="aspect-[16/10] w-full bg-placeholder" />
                <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                  {a.rubricaLabel}
                </div>
                <div className="mt-2 font-sans text-[20px] font-semibold leading-[1.18] tracking-[-0.012em] transition-colors group-hover:text-accent">
                  {a.titolo}
                </div>
                <p className="mt-2 font-serif text-[15px] leading-[1.45] text-ink-muted">
                  {a.sommario}
                </p>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
                  {formattaData(a.data)} · {a.minuti} min
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── Striscia sobria su fondo ink: lavora con me + newsletter ── */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-16">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
                <span className="inline-block h-[2px] w-6 bg-accent-light" />
                <span className="text-accent-light">Lavora con me</span>
              </div>
              <p className="mt-5 font-serif text-[20px] leading-[1.4] text-paper">
                Tre modi di iniziare: la Mappa dell&apos;innovazione, il
                Workshop in-house, l&apos;Affiancamento.
              </p>
              <Link
                href="/lavoro"
                className="mt-6 inline-flex items-center gap-3 bg-paper px-6 py-3.5 font-sans text-[14px] font-semibold text-ink transition-colors hover:bg-accent hover:text-paper"
              >
                Vedi i tre modi <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="md:border-l md:border-paper/20 md:pl-16">
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
                <span className="inline-block h-[2px] w-6 bg-accent-light" />
                <span className="text-accent-light">
                  La lettura del lunedì
                </span>
              </div>
              <p className="mt-5 font-serif text-[18px] leading-[1.45] text-paper/75">
                Una newsletter: ogni lunedì una lettura sull&apos;innovazione
                dei modelli di business in Italia. Il blog non ha calendario,
                la newsletter sì.
              </p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                aria-label="Iscrizione newsletter (in arrivo)"
              >
                <input
                  type="email"
                  disabled
                  placeholder="la-tua@email.it"
                  className="flex-1 border border-paper/30 bg-paper px-4 py-3 font-sans text-[14px] text-ink placeholder:text-ink-muted"
                />
                <button
                  type="button"
                  disabled
                  className="border border-paper/40 px-5 py-3 font-sans text-[14px] font-semibold text-paper/60"
                >
                  Iscriviti
                </button>
              </form>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-paper/50">
                Apertura iscrizioni a breve
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
