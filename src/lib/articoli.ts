// Articoli "seed" — placeholder realistici (titoli dal piano editoriale) usati
// dalla home front-page finché non arriva la pipeline MDX. Quando i .mdx
// esisteranno, questa sorgente verrà sostituita dalla lettura di content/posts.

export type RubricaSlug = "cosa-cambia-se" | "storia-di" | "modelli";

export type Articolo = {
  slug: string;
  rubrica: RubricaSlug;
  rubricaLabel: string;
  titolo: string;
  sommario: string;
  data: string; // ISO yyyy-mm-dd
  minuti: number;
};

export const ARTICOLI: Articolo[] = [
  {
    slug: "matrice-3x3-innovare-modello",
    rubrica: "modelli",
    rubricaLabel: "Modelli",
    titolo:
      "La matrice 3×3 per decidere dove innovare il modello di business",
    sommario:
      "Un metodo per capire dove la tecnologia tocca davvero il tuo modello — e dove è solo rumore travestito da progresso.",
    data: "2026-05-21",
    minuti: 8,
  },
  {
    slug: "amendolia-preventivazione",
    rubrica: "storia-di",
    rubricaLabel: "Storia di…",
    titolo:
      "Amendolia Assicurazioni: ripensare la preventivazione prima del tool",
    sommario:
      "Un'agenzia siciliana, un processo manuale, e cosa è cambiato guardando il modello prima della tecnologia.",
    data: "2026-05-18",
    minuti: 6,
  },
  {
    slug: "ai-act-pmi-cosa-cambia",
    rubrica: "cosa-cambia-se",
    rubricaLabel: "Cosa cambia se…",
    titolo: "Cosa cambia se l'AI Act entra in vigore per la tua PMI",
    sommario:
      "Le tre cose concrete che cambiano per chi fa marketing e raccoglie dati, lette in chiave operativa.",
    data: "2026-05-14",
    minuti: 4,
  },
  {
    slug: "quattro-categorie-costi",
    rubrica: "modelli",
    rubricaLabel: "Modelli",
    titolo:
      "Le 4 categorie di costi che la tecnologia sta azzerando per le PMI",
    sommario:
      "E le due che non tocca. Dove conviene davvero investire, con esempi concreti dal lavoro nelle PMI italiane.",
    data: "2026-05-11",
    minuti: 8,
  },
];

// Più recente in testa.
export const articoliPerData: Articolo[] = [...ARTICOLI].sort((a, b) =>
  b.data.localeCompare(a.data),
);

export function formattaData(iso: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00`));
}
