// Shim di re-export: la sorgente di verità è ora ./posts (lettura MDX a build time).
// Mantenuto perché i consumer esistenti importano da "@/lib/articoli".

export { formattaData, articoliPerData } from "./posts";
export type { Articolo, RubricaSlug } from "./posts";
