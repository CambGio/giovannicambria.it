import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/article-prose/MDXRenderer";
import {
  formattaData,
  getAllSlugs,
  getPostBySlug,
  getPostsByRubrica,
} from "@/lib/posts";
import type { Articolo } from "@/lib/posts";
import { TAGLINE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { titolo, sommario, data } = post.frontmatter;
  return {
    title: titolo,
    description: sommario,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: titolo,
      description: sommario,
      url: `/blog/${slug}`,
      siteName: "Giovanni Cambria",
      locale: "it_IT",
      publishedTime: data,
      authors: ["Giovanni Cambria"],
    },
    twitter: {
      card: "summary",
      title: titolo,
      description: sommario,
    },
  };
}

function CardCorrelato({ articolo }: { articolo: Articolo }) {
  return (
    <Link
      href={`/blog/${articolo.slug}`}
      className="group flex flex-col bg-carta p-6 md:p-7"
    >
      <div className="font-display text-[19px] font-semibold leading-[1.2] tracking-[-0.012em] text-inchiostro transition-colors group-hover:text-bosco">
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

export default async function ArticoloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { frontmatter, body } = post;
  const correlati = getPostsByRubrica(frontmatter.rubrica)
    .filter((a) => a.slug !== frontmatter.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20">
      <header className="mx-auto max-w-[680px]">
        <Link
          href="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
        >
          ← Tutti gli articoli
        </Link>
        <div className="mt-7">
          <Link
            href={`/blog?rubrica=${frontmatter.rubrica}`}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-bosco transition-colors hover:text-inchiostro"
          >
            {frontmatter.rubricaLabel}
          </Link>
        </div>
        <h1 className="mt-4 max-w-[680px] text-titolo font-extrabold text-inchiostro">
          {frontmatter.titolo}
        </h1>
        {frontmatter.sommario && (
          <p className="mt-4 text-sottotitolo text-grigio">
            {frontmatter.sommario}
          </p>
        )}
        <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-grigio tabular-nums">
          {formattaData(frontmatter.data)} · {frontmatter.minuti} min
        </div>
        <hr className="mt-7 border-inchiostro/10" />
      </header>

      <div className="mt-8">
        <MDXRenderer source={body} />
      </div>

      <footer className="mx-auto mt-14 max-w-[680px]">
        <div className="border-t-2 border-inchiostro pt-7">
          <div className="text-etichetta font-mono uppercase text-grigio">
            L&apos;autore
          </div>
          <div className="mt-4 font-sans text-[18px] font-bold tracking-[-0.012em] text-inchiostro">
            Giovanni Cambria
          </div>
          <p className="mt-2 max-w-[560px] text-[16px] leading-[1.6] text-grigio">
            {TAGLINE} Lavoro nel digitale dal 1998, oggi dal mio studio di
            Milazzo.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
            <Link
              href="/percorso"
              className="font-display text-[16px] italic text-inchiostro decoration-bosco decoration-2 underline-offset-[5px] transition-colors hover:text-bosco hover:underline"
            >
              Chi sono →
            </Link>
            <Link
              href="/contatto"
              className="font-display text-[16px] italic text-inchiostro decoration-bosco decoration-2 underline-offset-[5px] transition-colors hover:text-bosco hover:underline"
            >
              Scrivimi →
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-inchiostro/10 pt-7 text-[17px] leading-[1.6] text-grigio">
          Vuoi sapere quando esce il prossimo articolo? Niente form, per ora.{" "}
          <Link
            href="/contatto"
            className="font-sans font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
          >
            Scrivimi
          </Link>{" "}
          e ti aggiungo alla lista.
        </p>
      </footer>

      {correlati.length > 0 && (
        <section className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t-2 border-inchiostro pt-7">
            <div className="text-etichetta font-mono uppercase text-grigio">
              Nella stessa rubrica
            </div>
            <Link
              href={`/blog?rubrica=${frontmatter.rubrica}`}
              className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
            >
              Tutta la rubrica →
            </Link>
          </div>
          <div className="mt-7 grid gap-px bg-inchiostro/10 md:grid-cols-3">
            {correlati.map((a) => (
              <CardCorrelato key={a.slug} articolo={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
