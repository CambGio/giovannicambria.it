/**
 * Fonte unica del copy dei racconti cliente della pagina /lavoro (Clienti).
 * Testi da redazione/copy-v4/clienti.md (work/), applicati verbatim.
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
      "La collaborazione è iniziata dai processi interni: manuale delle procedure e mansionario. Poi sono arrivate le campagne di lead generation su Google Ads e Meta Ads e un CRM costruito sulle esigenze dell'agenzia. Da lì passano le email, i contatti con clienti e prospect e il canale WhatsApp. Oggi il lavoro continua su due fronti: un agente AI per le chiamate fuori orario e un progetto pilota con Claude Team per gli operatori.",
  },
  {
    slug: "dipaola",
    num: "02",
    nome: "Autonoleggio Di Paola",
    testo:
      "Gli shuttle bus per l'aeroporto di Catania non si prenotavano online. Abbiamo portato online il primo sistema di booking dell'azienda. Quando è servita una piattaforma più solida, ho gestito la scelta del sistema. Poi sono arrivati il CRM Delera, il canale WhatsApp e un nuovo sito aziendale, con le sezioni dedicate allo scuolabus e al noleggio a lungo termine.",
  },
  {
    slug: "lovekasa",
    num: "03",
    nome: "LoveKasa",
    testo:
      "Ho costruito il CRM Delera sul modo in cui LoveKasa segue i clienti: gestione delle richieste, prenotazione delle consulenze nei punti vendita e campagne WhatsApp tramite WhatsApp API. Il nuovo sito è in costruzione. La struttura è pensata per rendere più chiara l'offerta e migliorare la presenza dell'azienda su Google.",
  },
  {
    slug: "empire",
    num: "04",
    nome: "Empire Ricambi",
    testo:
      "Nel 2019 un imprenditore acquista un impianto e avvia una nuova attività. L'ho affiancato fin dal business plan. Abbiamo formato il team, informatizzato i processi e portato online una parte del business con l'e-commerce empirericambi.it. Mi sono occupato anche della selezione del personale e, insieme all'imprenditore, della supply chain.",
  },
  {
    slug: "sinotech",
    num: "05",
    nome: "Sinotech",
    testo:
      "Sinotech vendeva su PrestaShop. Ho gestito la migrazione dell'e-commerce a Shopify. Il nuovo sistema ha reso più semplici le operazioni di vendita e la gestione quotidiana, anche per il marketing.",
  },
];
