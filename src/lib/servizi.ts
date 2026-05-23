export type ServizioSlug = "mappa" | "workshop" | "affiancamento";

export type Servizio = {
  slug: ServizioSlug;
  n: string;
  titolo: string;
  promessa: string;
  perChi: string;
  tempi: string;
  prezzo: string;
  href: string;
};

export const SERVIZI: Servizio[] = [
  {
    slug: "mappa",
    n: "01",
    titolo: "Mappa dell'innovazione",
    promessa: "Un audit strategico per capire da dove iniziare, senza sprechi.",
    perChi: "PMI e professionisti che vogliono capire dove la tecnologia tocca il modello.",
    tempi: "1–2 settimane",
    prezzo: "a partire da 2.500 €",
    href: "/lavoro/mappa",
  },
  {
    slug: "workshop",
    n: "02",
    titolo: "Workshop in-house",
    promessa: "Una giornata col team per allineare l'organizzazione prima di partire.",
    perChi: "PMI con team da 8 a 30 persone.",
    tempi: "1 giornata",
    prezzo: "a partire da 2.500 €",
    href: "/lavoro/workshop",
  },
  {
    slug: "affiancamento",
    n: "03",
    titolo: "Affiancamento",
    promessa: "Un progetto vero, seguito nel tempo, con KPI verificabili.",
    perChi: "PMI che vogliono portare a casa un risultato misurabile.",
    tempi: "3–12 mesi",
    prezzo: "a partire da 2.000 € / mese",
    href: "/lavoro/affiancamento",
  },
];

export function getServizio(slug: ServizioSlug): Servizio {
  const s = SERVIZI.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servizio sconosciuto: ${slug}`);
  return s;
}
