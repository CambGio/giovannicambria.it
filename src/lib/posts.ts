// Single source of truth per gli articoli del blog.
// Legge i file MDX in content/posts a build time con fs + gray-matter.
// Tutte le funzioni sono sincrone e pensate per Server Component / build-time.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const RUBRICHE = {
  "adozione": "AI al lavoro",
  "anti-hype": "Dove l'AI non serve",
  "casi": "Prima e dopo",
  "storia-metodo": "Storia e metodo",
} as const;

export type RubricaSlug = keyof typeof RUBRICHE;

export function isRubricaSlug(v: unknown): v is RubricaSlug {
  return typeof v === "string" && v in RUBRICHE;
}

export type Articolo = {
  slug: string;
  rubrica: RubricaSlug;
  rubricaLabel: string;
  titolo: string;
  sommario: string;
  data: string; // ISO yyyy-mm-dd
  minuti: number;
  draft?: boolean;
};

const postsDir = path.join(process.cwd(), "content/posts");

export function formattaData(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}

// Validazione minima del frontmatter, con errore esplicito a build time:
// slug, titolo, data e rubrica sono obbligatori; la rubrica deve essere
// una delle tre canoniche.
function validaFrontmatter(file: string, raw: Record<string, unknown>): Articolo {
  const errori: string[] = [];

  if (typeof raw.slug !== "string" || raw.slug.trim() === "") {
    errori.push("slug mancante");
  }
  if (typeof raw.titolo !== "string" || raw.titolo.trim() === "") {
    errori.push("titolo mancante");
  }
  if (typeof raw.data !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(raw.data)) {
    errori.push("data mancante o non in formato yyyy-mm-dd");
  }
  if (raw.rubrica === undefined || raw.rubrica === null || raw.rubrica === "") {
    errori.push("rubrica mancante");
  } else if (!isRubricaSlug(raw.rubrica)) {
    errori.push(
      `rubrica sconosciuta: "${String(raw.rubrica)}" (ammesse: ${Object.keys(RUBRICHE).join(", ")})`,
    );
  }

  if (errori.length > 0) {
    throw new Error(
      `Frontmatter non valido in content/posts/${file}: ${errori.join("; ")}.`,
    );
  }

  const rubrica = raw.rubrica as RubricaSlug;

  return {
    slug: (raw.slug as string).trim(),
    rubrica,
    rubricaLabel: RUBRICHE[rubrica],
    titolo: raw.titolo as string,
    sommario: typeof raw.sommario === "string" ? raw.sommario : "",
    data: raw.data as string,
    minuti: Number(raw.minuti) || 0,
    draft: raw.draft === true,
  };
}

let cache: { frontmatter: Articolo; body: string }[] | null = null;

function leggiTutti(): { frontmatter: Articolo; body: string }[] {
  // Cache solo in produzione: in dev i writer devono vedere le modifiche
  // agli MDX senza riavviare il server.
  if (cache && process.env.NODE_ENV === "production") return cache;

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"));

  cache = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data, content } = matter(raw);
    // YAML interpreta yyyy-mm-dd come Date: normalizziamo a stringa ISO yyyy-mm-dd.
    const fm: Record<string, unknown> = { ...data };
    if (fm.data instanceof Date) {
      fm.data = fm.data.toISOString().slice(0, 10);
    }
    return { frontmatter: validaFrontmatter(file, fm), body: content };
  });

  return cache;
}

// Solo articoli pubblicati, più recente in testa.
export function getAllPosts(): Articolo[] {
  return leggiTutti()
    .map((p) => p.frontmatter)
    .filter((fm) => !fm.draft)
    .sort((a, b) => b.data.localeCompare(a.data));
}

// Solo articoli pubblicati di una rubrica, più recente in testa.
export function getPostsByRubrica(rubrica: RubricaSlug): Articolo[] {
  return getAllPosts().filter((fm) => fm.rubrica === rubrica);
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
