import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { MDXComponents } from "mdx/types";

// Mappa componenti: solo utility brand da globals.css @theme.
// Nessun hex inline, nessun border-radius, nessuno step tipografico preset di Tailwind.
const components: MDXComponents = {
  p: (props) => (
    <p
      className="mt-5 font-serif text-[17px] leading-[1.7] text-ink md:text-[18px]"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 font-sans text-[28px] font-extrabold leading-[1.1] tracking-[-0.028em] text-ink md:text-[32px]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-9 font-sans text-[21px] font-bold leading-[1.15] tracking-[-0.02em] text-ink"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent underline decoration-accent underline-offset-4"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-6 font-serif text-[17px] leading-[1.7] text-ink md:text-[18px]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-6 font-serif text-[17px] leading-[1.7] text-ink md:text-[18px]"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  code: (props) => (
    <code
      className="bg-paper-deep px-1.5 py-0.5 font-mono text-[14px] text-ink"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto bg-ink p-5 font-mono text-[13px] leading-[1.6] text-paper"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-rule" />,
  // Tabelle GFM minime: i writer le evitano, ma il renderer non deve
  // degradare se ne arriva una. Solo token brand, niente zebra né radius.
  table: (props) => (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-left" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b-2 border-ink px-3 py-2.5 align-bottom font-sans text-[13px] font-semibold uppercase tracking-[0.04em] text-ink first:pl-0 last:pr-0"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="border-b border-rule px-3 py-2.5 align-top font-serif text-[15px] leading-[1.55] text-ink first:pl-0 last:pr-0"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-accent pl-5 font-serif text-[18px] italic leading-[1.6] text-ink-muted"
      {...props}
    />
  ),
};

export async function MDXRenderer({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
    components,
  });

  return (
    <div className="mx-auto max-w-[680px]">{content}</div>
  );
}
