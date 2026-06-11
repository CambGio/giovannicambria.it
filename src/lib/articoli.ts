// Shim di re-export: la sorgente di verità è ./posts (lettura MDX a build time).
// Mantenuto perché i consumer esistenti importano da "@/lib/articoli".

export {
  formattaData,
  articoliPerData,
  RUBRICHE,
  isRubricaSlug,
  getAllPosts,
  getPostsByRubrica,
} from "./posts";
export type { Articolo, RubricaSlug } from "./posts";
