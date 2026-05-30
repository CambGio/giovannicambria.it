// Single source of truth per gli articoli del blog.
// Legge i file MDX in content/posts a build time con fs + gray-matter.
// Tutte le funzioni sono sincrone e pensate per Server Component / build-time.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type RubricaSlug = "cosa-cambia-se" | "storia-di" | "modelli";

export type Articolo = {
  slug: string;
  rubrica: RubricaSlug;
  rubricaLabel: string;
  titolo: string;
  sommario: string;
  data: string; // ISO yyyy-mm-dd
  minuti: number;
  draft?: boolean;
  featured?: boolean;
};

const postsDir = path.join(process.cwd(), "content/posts");

export function formattaData(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

function leggiTutti(): { frontmatter: Articolo; body: string }[] {
  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    // YAML interpreta yyyy-mm-dd come Date: normalizziamo a stringa ISO yyyy-mm-dd.
    const fm: Record<string, unknown> = { ...data };
    if (fm.data instanceof Date) {
      fm.data = fm.data.toISOString().slice(0, 10);
    }
    return { frontmatter: fm as unknown as Articolo, body: content };
  });
}

// Solo articoli pubblicati, più recente in testa.
export function getAllPosts(): Articolo[] {
  return leggiTutti()
    .map((p) => p.frontmatter)
    .filter((fm) => !fm.draft)
    .sort((a, b) => b.data.localeCompare(a.data));
}

// Nome/forma che i consumer (page.tsx, blog/page.tsx) si aspettano.
export const articoliPerData: Articolo[] = getAllPosts();

export function getPostBySlug(
  slug: string,
): { frontmatter: Articolo; body: string } | null {
  const found = leggiTutti().find((p) => p.frontmatter.slug === slug);
  if (!found) return null;
  return found;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((fm) => fm.slug);
}
