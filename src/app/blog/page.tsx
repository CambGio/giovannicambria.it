import Link from "next/link";
import type { Metadata } from "next";
import {
  articoliPerData,
  formattaData,
  isRubricaSlug,
  RUBRICHE,
} from "@/lib/articoli";
import type { Articolo, RubricaSlug } from "@/lib/articoli";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Cosa cambia per chi fa impresa quando cambia la tecnologia. Letture sull'innovazione dei modelli di business per le PMI italiane.",
  alternates: { canonical: "/blog" },
};

// Descrizioni delle rubriche, in linguaggio da imprenditore.
const RUBRICHE_DESCRIZIONI: Record<RubricaSlug, string> = {
  "cosa-cambia-se":
    "Una novità tecnologica o normativa alla volta, letta per quello che tocca davvero nella tua impresa.",
  "storia-di":
    "Un lavoro vero, raccontato per decisioni: il contesto, le scelte, quello che è successo dopo.",
  modelli:
    "Schemi di ragionamento che restano utili anche quando lo strumento di moda cambia nome.",
};

function CardArticolo({ articolo }: { articolo: Articolo }) {
  return (
    <Link
      href={`/blog/${articolo.slug}`}
      className="group flex flex-col bg-paper p-6 md:p-7"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
        {articolo.rubricaLabel}
      </div>
      <div className="mt-3 font-sans text-[22px] font-semibold leading-[1.18] tracking-[-0.012em] transition-colors group-hover:text-accent">
        {articolo.titolo}
      </div>
      <p className="mt-3 font-serif text-[15px] leading-[1.45] text-ink-muted">
        {articolo.sommario}
      </p>
      <div className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
        {formattaData(articolo.data)} · {articolo.minuti} min
      </div>
    </Link>
  );
}

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ rubrica?: string | string[] }>;
}) {
  const { rubrica } = await searchParams;
  const rubricaParam = Array.isArray(rubrica) ? rubrica[0] : rubrica;
  const filtro: RubricaSlug | null = isRubricaSlug(rubricaParam)
    ? rubricaParam
    : null;

  const tutti = articoliPerData;
  const articoli = filtro ? tutti.filter((a) => a.rubrica === filtro) : tutti;
  const haArticoli = tutti.length > 0;
  const labelFiltro = filtro
    ? RUBRICHE.find((r) => r.slug === filtro)?.label
    : null;

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-32">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 01</span>
          <span className="text-ink-muted">Il blog</span>
        </div>

        <h1 className="max-w-[920px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[76px]">
          Cosa cambia per chi fa impresa{" "}
          <span className="font-serif italic font-normal text-ink-muted">
            quando cambia la tecnologia.
          </span>
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          {haArticoli
            ? "Articoli sul modello di business, più che sul tool. Senza calendario di facciata: pubblico quando ho qualcosa di utile da dire."
            : "Articoli sul modello di business, più che sul tool. I primi pezzi stanno arrivando."}
        </p>

        <div className="mt-14 border-t-2 border-ink pt-7">
          <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
            Le tre rubriche
          </div>
          <ul className="mt-7 grid gap-px bg-rule md:grid-cols-3">
            {RUBRICHE.map((r) => {
              const attiva = filtro === r.slug;
              return (
                <li key={r.slug}>
                  <Link
                    href={attiva ? "/blog" : `/blog?rubrica=${r.slug}`}
                    aria-current={attiva ? "true" : undefined}
                    className={`flex h-full flex-col p-6 transition-colors ${
                      attiva
                        ? "bg-ink text-paper"
                        : "bg-paper hover:bg-paper-deep"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                        attiva ? "text-accent-light" : "text-accent"
                      }`}
                    >
                      {attiva ? "Rubrica attiva · mostra tutto" : "Rubrica"}
                    </span>
                    <span className="mt-2 font-sans text-[18px] font-semibold tracking-[-0.01em]">
                      {r.label}
                    </span>
                    <span
                      className={`mt-2 font-serif text-[15px] leading-[1.5] ${
                        attiva ? "text-paper/75" : "text-ink-muted"
                      }`}
                    >
                      {RUBRICHE_DESCRIZIONI[r.slug]}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {haArticoli && (
          <div className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t-2 border-ink pt-7">
              <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
                {labelFiltro ?? "Tutti gli articoli"}
              </div>
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
                  {articoli.length}{" "}
                  {articoli.length === 1 ? "articolo" : "articoli"}
                </span>
                {filtro && (
                  <Link
                    href="/blog"
                    className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
                  >
                    Mostra tutti →
                  </Link>
                )}
              </div>
            </div>
            {articoli.length > 0 ? (
              <div className="mt-7 grid gap-px bg-rule md:grid-cols-3">
                {articoli.map((a) => (
                  <CardArticolo key={a.slug} articolo={a} />
                ))}
              </div>
            ) : (
              <p className="mt-7 max-w-[620px] font-serif text-[17px] leading-[1.6] text-ink-muted">
                In questa rubrica non c&apos;è ancora niente di pubblicato.{" "}
                <Link
                  href="/blog"
                  className="font-sans font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  Vedi tutti gli articoli
                </Link>
                .
              </p>
            )}
          </div>
        )}

        <p className="mt-14 max-w-[620px] border-t border-rule pt-7 font-serif text-[17px] leading-[1.6] text-ink-muted">
          Vuoi sapere quando esce un articolo nuovo? Niente form, per ora.{" "}
          <Link
            href="/contatto"
            className="font-sans font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            Scrivimi
          </Link>{" "}
          e ti aggiungo alla lista.
        </p>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 01 · § Blog</span>
        <span className="hidden md:inline">
          Tipi: Manrope · Source Serif 4 · IBM Plex Mono
        </span>
        <span>
          {haArticoli
            ? `${tutti.length} ${tutti.length === 1 ? "pubblicato" : "pubblicati"}`
            : "indice in arrivo"}
        </span>
      </div>
    </>
  );
}
