import Link from "next/link";
import { articoliPerData, formattaData } from "@/lib/articoli";

export default function Home() {
  const [hero, ...altri] = articoliPerData;

  return (
    <>
      {/* ── Front page: articolo in evidenza + manifesto ── */}
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
              Il 90% di chi vende innovazione vende un tool. Io parto dal
              modello di business:{" "}
              <span className="italic text-ink-muted">
                cosa cambia davvero per chi fa impresa.
              </span>
            </p>
            <p className="mt-5 font-serif text-[16px] leading-[1.6] text-ink-muted">
              Niente hype, niente slide motivazionali. Case study reali e 28
              anni di operatività digitale, per imprese italiane fuori dai poli
              metropolitani.
            </p>
            <div className="mt-7 flex flex-col gap-2.5">
              <Link
                href="/percorso"
                className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
              >
                chi sono, in breve →
              </Link>
              <Link
                href="/lavoro"
                className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent hover:underline"
              >
                come lavoriamo insieme →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Ultimi articoli ── */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
        <div className="flex items-baseline justify-between border-t-2 border-ink pt-7">
          <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
            Dal blog
          </div>
          <Link
            href="/blog"
            className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
          >
            tutti gli articoli →
          </Link>
        </div>
        <div className="mt-7 grid gap-px bg-rule md:grid-cols-3">
          {altri.map((a) => (
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

      {/* ── Striscia sobria: lavora con me + newsletter ── */}
      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-16">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
                <span className="inline-block h-[2px] w-6 bg-accent" />
                <span className="text-accent">Lavora con me</span>
              </div>
              <p className="mt-5 font-serif text-[20px] leading-[1.4] text-ink">
                Tre modi di iniziare: la Mappa dell&apos;innovazione, il
                Workshop in-house, l&apos;Affiancamento.
              </p>
              <Link
                href="/lavoro"
                className="mt-6 inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-sans text-[14px] font-semibold text-paper transition-colors hover:bg-accent"
              >
                Vedi i tre format <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="md:border-l md:border-rule md:pl-16">
              <div className="flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.16em] font-semibold">
                <span className="inline-block h-[2px] w-6 bg-accent" />
                <span className="text-accent">La lettura del lunedì</span>
              </div>
              <p className="mt-5 font-serif text-[18px] leading-[1.45] text-ink-muted">
                Ogni lunedì, una lettura sull&apos;innovazione dei modelli di
                business in Italia. Dieci minuti, non un secondo di più.
              </p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                aria-label="Iscrizione newsletter (in arrivo)"
              >
                <input
                  type="email"
                  disabled
                  placeholder="la-tua@email.it"
                  className="flex-1 border border-rule bg-paper px-4 py-3 font-sans text-[14px] text-ink placeholder:text-ink-muted"
                />
                <button
                  type="button"
                  disabled
                  className="border border-ink px-5 py-3 font-sans text-[14px] font-semibold text-ink-muted"
                >
                  Iscriviti
                </button>
              </form>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted">
                Apertura iscrizioni a breve
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
