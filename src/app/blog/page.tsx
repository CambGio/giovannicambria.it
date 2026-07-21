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
    "Come le PMI e i professionisti italiani adottano l'intelligenza artificiale nei processi reali: metodo, casi concreti, niente hype.",
  alternates: { canonical: "/blog" },
};

// Descrizioni delle rubriche, in linguaggio da imprenditore.
const RUBRICHE_DESCRIZIONI: Record<RubricaSlug, string> = {
  "adozione":
    "Come le PMI adottano l'AI nei processi reali. Non gli algoritmi: i processi che contano.",
  "anti-hype":
    "Dove l'AI non serve, e cosa usare invece. Il rumore è gratis; il focus costa.",
  "casi":
    "Un lavoro vero, prima e dopo. Il contesto, le scelte, quello che è successo dopo.",
  "storia-metodo":
    "Schemi di ragionamento che restano utili anche quando lo strumento di moda cambia nome.",
};

function CardArticolo({ articolo }: { articolo: Articolo }) {
  return (
    <Link
      href={`/blog/${articolo.slug}`}
      className="group flex flex-col bg-carta p-6 md:p-7"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-bosco">
        {articolo.rubricaLabel}
      </div>
      <div className="mt-3 font-display text-[22px] font-semibold leading-[1.18] tracking-[-0.012em] text-inchiostro transition-colors group-hover:text-bosco">
        {articolo.titolo}
      </div>
      <p className="mt-3 text-[15px] leading-[1.45] text-grigio">
        {articolo.sommario}
      </p>
      <div className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-grigio tabular-nums">
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
  const labelFiltro = filtro ? RUBRICHE[filtro] : null;

  return (
    <>
      {/* ── Banda-testata bosco: stessa voce della home (spec DESIGN.md,
          lane "Bosco committed") ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
            <span className="inline-block h-[2px] w-7 bg-carta" />
            <span className="text-carta">№ 01</span>
            <span className="text-carta/80">Il blog</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            L&apos;adozione dell&apos;AI, senza hype.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Quello che pubblico su LinkedIn, qui in archivio: come le PMI adottano l&apos;AI nei processi reali.
          </p>
        </div>
      </section>

      {/* ── Rubriche e lista su carta: il respiro dopo la testata ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <div className="border-t-2 border-bosco pt-7">
            <div className="text-etichetta font-mono uppercase text-bosco">
              Le quattro rubriche
            </div>
            <ul className="mt-7 grid gap-px bg-inchiostro/10 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(RUBRICHE).map(([slug, label]) => {
                const attiva = filtro === slug;
                return (
                  <li key={slug}>
                    <Link
                      href={attiva ? "/blog" : `/blog?rubrica=${slug}`}
                      aria-current={attiva ? "true" : undefined}
                      className={`flex h-full flex-col p-6 transition-colors ${
                        attiva
                          ? "bg-inchiostro text-carta"
                          : "bg-carta hover:bg-inchiostro/5"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] uppercase tracking-[0.12em] ${
                          attiva ? "text-bosco-chiaro" : "text-bosco"
                        }`}
                      >
                        {attiva ? "Rubrica attiva · mostra tutto" : "Rubrica"}
                      </span>
                      <span className="mt-2 font-display text-[18px] font-semibold tracking-[-0.01em]">
                        {label}
                      </span>
                      <span
                        className={`mt-2 text-[15px] leading-[1.5] ${
                          attiva ? "text-carta/75" : "text-grigio"
                        }`}
                      >
                        {RUBRICHE_DESCRIZIONI[slug as RubricaSlug]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {haArticoli && (
            <div className="mt-14">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t-2 border-bosco pt-7">
                <div className="text-etichetta font-mono uppercase text-bosco">
                  {labelFiltro ?? "Tutti gli articoli"}
                </div>
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio tabular-nums">
                    {articoli.length}{" "}
                    {articoli.length === 1 ? "articolo" : "articoli"}
                  </span>
                  {filtro && (
                    <Link
                      href="/blog"
                      className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
                    >
                      Mostra tutti →
                    </Link>
                  )}
                </div>
              </div>
              {articoli.length > 0 ? (
                <div className="mt-7 grid gap-px bg-inchiostro/10 md:grid-cols-3">
                  {articoli.map((a) => (
                    <CardArticolo key={a.slug} articolo={a} />
                  ))}
                </div>
              ) : (
                <p className="mt-7 max-w-[620px] text-[17px] leading-[1.6] text-grigio">
                  In questa rubrica non c&apos;è ancora niente di pubblicato.{" "}
                  <Link
                    href="/blog"
                    className="font-sans font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
                  >
                    Vedi tutti gli articoli
                  </Link>
                  .
                </p>
              )}
            </div>
          )}

          <p className="mt-14 max-w-[620px] border-t border-inchiostro/10 pt-7 text-[17px] leading-[1.6] text-grigio">
            Vuoi sapere quando esce un articolo nuovo? Niente form, per ora.{" "}
            <Link
              href="/contatto"
              className="font-sans font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
            >
              Scrivimi
            </Link>{" "}
            e ti aggiungo alla lista.
          </p>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 01 · § Blog</span>
        <span className="hidden md:inline">
          Tipi: Fraunces · Inter · IBM Plex Mono
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
