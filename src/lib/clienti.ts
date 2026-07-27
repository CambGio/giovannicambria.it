/**
 * Fonte unica del copy dei racconti cliente della pagina /lavoro (Clienti).
 * Testi da redazione/copy-v3/clienti.md (work/), applicati verbatim.
 * `src/lib/servizi.ts` e `ServizioScheda` restano intatti ma non più
 * importati da nessuna pagina: la sezione schede-servizio è stata rimossa
 * dall'architettura v2 (vedi work/.../architettura-v2.md).
 */

export type Cliente = {
  slug: string;
  /** Numero d'ordine nella pagina (01..05). */
  num: string;
  nome: string;
  testo: string;
};

export const CLIENTI: Cliente[] = [
  {
    slug: "amendolia",
    num: "01",
    nome: "Amendolia Assicurazioni",
    testo:
      "Aprile 2024. Abbiamo cominciato dai processi interni: manuale delle procedure, mansionario. Poi sono arrivate le campagne di lead generation su Google Ads e Meta Ads, e un CRM di marketing costruito sulle loro esigenze. Da lì passano tutti i contatti con clienti e prospect: le email, e un canale WhatsApp gestito direttamente dalla piattaforma. Adesso lavoriamo su due fronti: un agente AI che risponde alle chiamate fuori orario, e un progetto pilota con Claude Team per gli operatori. Strumenti calati sul lavoro di ogni persona: il primo passo verso l'adozione in tutta l'azienda. La collaborazione è ancora attiva.",
  },
  {
    slug: "dipaola",
    num: "02",
    nome: "Autonoleggio Di Paola",
    testo:
      "Gli shuttle bus per l'aeroporto di Catania non si prenotavano online. Abbiamo portato online il loro primo sistema di booking. Quando è servito un sistema più solido, la scelta della piattaforma l'ho fatta io: è quella che usano adesso. È arrivato anche il CRM Delera, con un canale WhatsApp per parlare con i clienti. Da poco un nuovo sito, totalmente su misura: chi cerca lo scuolabus o il noleggio a lungo termine trova tutto nello stesso posto. Lavoriamo insieme da più di un anno.",
  },
  {
    slug: "lovekasa",
    num: "03",
    nome: "LoveKasa",
    testo:
      "Ho costruito il CRM Delera su come LoveKasa segue i clienti: pipeline delle richieste, consulenze da prenotare nei punti vendita. Da lì partono le campagne di messaggi WhatsApp, via WhatsApp API dalla stessa piattaforma. Il primo sito era embrionale. Quello nuovo, pensato anche per farsi trovare su Google, lo stiamo costruendo adesso. Lavoriamo insieme ancora oggi.",
  },
  {
    slug: "empire",
    num: "04",
    nome: "Empire Ricambi",
    testo:
      "Nel 2019 un imprenditore acquista un impianto e comincia da zero. L'ho affiancato fin dal business plan. Abbiamo formato il team e informatizzato i processi. Mi sono occupato della selezione del personale. Abbiamo portato online una parte del business con l'e-commerce empirericambi.it. Insieme abbiamo disegnato tutta la supply chain. La collaborazione è durata cinque anni, dal 2019 al 2024. Empirericambi.it è ancora online.",
  },
  {
    slug: "sinotech",
    num: "05",
    nome: "Sinotech",
    testo:
      "Sinotech vendeva su PrestaShop. Ho gestito la migrazione dell'e-commerce a Shopify. Da allora vendere è più semplice, anche per chi si occupa del marketing. La collaborazione è durata un anno, da giugno 2024 a giugno 2025. Oggi il negozio è online su Shopify.",
  },
];
