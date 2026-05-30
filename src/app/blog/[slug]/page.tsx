import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/article-prose/MDXRenderer";
import { formattaData, getAllSlugs, getPostBySlug } from "@/lib/posts";

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
  return {
    title: post.frontmatter.titolo,
    description: post.frontmatter.sommario,
  };
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

  return (
    <article className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-20">
      <header className="mx-auto max-w-[680px]">
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          {frontmatter.rubricaLabel}
        </div>
        <h1 className="mt-4 font-sans text-[34px] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink md:text-[44px]">
          {frontmatter.titolo}
        </h1>
        <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
          {formattaData(frontmatter.data)} · {frontmatter.minuti} min
        </div>
        <hr className="mt-7 border-rule" />
      </header>

      <div className="mt-8">
        <MDXRenderer source={body} />
      </div>
    </article>
  );
}
