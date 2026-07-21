/**
 * Fonte unica del copy commerciale della sezione /lavoro.
 * Contenuti derivati da 05-offerta-commerciale.md (struttura pagine:
 * 08-alberatura-sito.md §3.2-3.5). Prezzi sempre "a partire da".
 */

export type ServizioSlug = "mappa" | "workshop" | "affiancamento";

export type ServizioCluster = {
  /** Etichetta del cluster (es. "PMI", "Professionisti"). */
  nome: string;
  descrizione: string;
};

export type ServizioFase = {
  nome: string;
  /** Durata o cadenza della fase, mostrata come etichetta mono. */
  tempo?: string;
  descrizione: string;
};

export type ServizioFaq = {
  domanda: string;
  risposta: string;
};

export type ServizioSezione = {
  titolo: string;
  paragrafi: string[];
  link?: { href: string; label: string };
};

export type Servizio = {
  slug: ServizioSlug;
  /** Numero d'ordine nell'hub (01, 02, 03). */
  n: string;
  /** Numero di pagina decorativo della scheda (es. "03.1"). */
  pagina: string;
  titolo: string;
  /** Versione corta del titolo, per contesti compressi (barra decorativa). */
  titoloBreve: string;
  promessa: string;
  /** Sintesi a una riga, per card hub e riepilogo in testa alla scheda. */
  perChi: string;
  /** "Per chi è" articolato per cluster, nella scheda. */
  perChiDettaglio: ServizioCluster[];
  cosaRicevi: string[];
  comeFunziona: ServizioFase[];
  faq: ServizioFaq[];
  /** Sezioni narrative specifiche del format (opzionali). */
  sezioni?: ServizioSezione[];
  tempi: string;
  /** Prezzo di vetrina, sempre nella forma "a partire da". */
  prezzo: string;
  /** Distinzione di prezzo per cluster, mostrata nella scheda. */
  prezzoDettaglio?: string;
  /** Prezzo minimo numerico, per i dati strutturati (JSON-LD). */
  prezzoMin: number;
  /** Unità di prezzo per i dati strutturati (es. "giornata", "mese"). */
  prezzoUnita?: string;
  href: string;
};

export const SERVIZI: Servizio[] = [
  {
    slug: "mappa",
    n: "01",
    pagina: "03.1",
    titolo: "Mappa dell'innovazione",
    titoloBreve: "Mappa dell'innovazione",
    promessa: "Un audit strategico per capire da dove iniziare, senza sprechi.",
    perChi:
      "PMI e professionisti che vogliono capire dove la tecnologia tocca il modello.",
    perChiDettaglio: [
      {
        nome: "PMI",
        descrizione:
          "Aziende dai 5 ai 100 dipendenti, in settori tradizionali, dove decide il titolare o la direzione. Volete capire da dove iniziare senza buttare soldi: la Mappa vi dice dove intervenire, in che ordine e con quali costi indicativi.",
      },
      {
        nome: "Professionisti",
        descrizione:
          "Studi legali, commercialisti, agenzie, architetti, consulenti. Per chi compra per sé esiste una versione ridotta: una settimana di lavoro, documento di 8–10 pagine, a partire da 1.500 €.",
      },
    ],
    cosaRicevi: [
      "Un documento di 12–18 pagine con la mappa del vostro modello di business",
      "I 3–5 punti in cui la tecnologia (processi, automazione, dati) può intervenire con il ritorno maggiore",
      "Una roadmap a 6–12 mesi, in ordine di priorità",
      "Una shortlist di tool e integrazioni, con costi indicativi",
      "La registrazione del workshop di restituzione, da condividere internamente",
    ],
    comeFunziona: [
      {
        nome: "Kick-off",
        tempo: "90 minuti",
        descrizione:
          "Una sessione con chi decide: perimetro, obiettivi, documenti da cui partire.",
      },
      {
        nome: "Analisi documentale",
        descrizione:
          "Studio i materiali che avete già: numeri, processi, strumenti in uso.",
      },
      {
        nome: "Interviste interne",
        tempo: "2 incontri",
        descrizione:
          "Due conversazioni con persone che vedono il modello da punti diversi.",
      },
      {
        nome: "Workshop di restituzione",
        tempo: "90 minuti",
        descrizione:
          "Presento mappa e punti di intervento, ne discutiamo insieme. La sessione viene registrata.",
      },
      {
        nome: "Consegna",
        descrizione:
          "Il documento finale: mappa, punti di intervento, roadmap, shortlist di tool con costi.",
      },
    ],
    faq: [
      {
        domanda: "Chi sceglie le persone da intervistare?",
        risposta:
          "Le scegliamo insieme al kick-off. Servono due punti di vista diversi sul modello: in genere chi vende e chi gestisce le operazioni, ma dipende dalla vostra struttura.",
      },
      {
        domanda: "Cosa devo preparare per il kick-off?",
        risposta:
          "Niente di nuovo. Bastano i documenti che usate già: listini, organigramma, report. L'analisi documentale parte da lì.",
      },
      {
        domanda:
          "Che differenza c'è tra la versione per PMI e quella per professionisti?",
        risposta:
          "Il perimetro. Per le PMI: 1–2 settimane, due interviste interne, documento di 12–18 pagine, a partire da 2.500 €. Per i professionisti: una settimana, documento di 8–10 pagine, a partire da 1.500 €.",
      },
      {
        domanda: "E dopo la consegna?",
        risposta:
          "Il documento è vostro: potete eseguire la roadmap da soli o con i fornitori che preferite. Se volete continuare insieme, il passo naturale è l'affiancamento.",
      },
    ],
    tempi: "1–2 settimane",
    prezzo: "a partire da 2.500 €",
    prezzoDettaglio:
      "PMI a partire da 2.500 €; professionisti, versione ridotta, a partire da 1.500 €.",
    prezzoMin: 2500,
    href: "/lavoro/mappa",
  },
  {
    slug: "workshop",
    n: "02",
    pagina: "03.2",
    titolo: "Workshop in-house «Innovazione per il tuo team»",
    titoloBreve: "Workshop in-house",
    promessa:
      "Una giornata in azienda per allineare l'organizzazione prima di partire con i progetti.",
    perChi: "PMI con team da 8 a 30 persone.",
    perChiDettaglio: [
      {
        nome: "La direzione",
        descrizione:
          "PMI con team da 8 a 30 persone che vogliono una base comune prima di investire in progetti. La pre-call con il management serve a calibrare la giornata sul vostro settore.",
      },
      {
        nome: "Il team",
        descrizione:
          "Le persone che dovranno usare strumenti e processi nuovi. Il laboratorio del pomeriggio lavora sui loro casi reali, non su esercizi di catalogo.",
      },
    ],
    cosaRicevi: [
      "Una pre-call di 60 minuti con il management per calibrare i contenuti",
      "4 ore di teoria applicata al vostro settore",
      "3 ore di laboratorio guidato sui casi reali del team",
      "Materiale di follow-up: handout, checklist, replay dei materiali",
      "La lista dei casi d'uso emersi dal laboratorio, utile per decidere i passi successivi",
    ],
    comeFunziona: [
      {
        nome: "Pre-call",
        tempo: "60 minuti",
        descrizione:
          "Con il management: settore, aspettative, casi su cui ha senso lavorare.",
      },
      {
        nome: "Mattina",
        tempo: "4 ore",
        descrizione:
          "Teoria applicata al vostro settore: cosa cambia per il vostro modello, con esempi vicini al vostro lavoro.",
      },
      {
        nome: "Pomeriggio",
        tempo: "3 ore",
        descrizione:
          "Laboratorio guidato: il team lavora sui propri casi reali.",
      },
      {
        nome: "Follow-up",
        descrizione:
          "Handout, checklist e replay dei materiali, più la lista dei casi d'uso emersi.",
      },
    ],
    faq: [
      {
        domanda: "Quante persone possono partecipare?",
        risposta:
          "Il formato funziona da 8 a 30 persone. Fuori da questo intervallo il laboratorio perde efficacia: in quei casi ne parliamo e cerchiamo il taglio giusto.",
      },
      {
        domanda: "In azienda o da remoto?",
        risposta:
          "In azienda: il laboratorio sui casi reali rende in presenza. La trasferta incide sul preventivo, inclusa o esclusa in base alla località.",
      },
      {
        domanda: "Su cosa lavora il laboratorio?",
        risposta:
          "Sui casi del vostro lavoro quotidiano, individuati nella pre-call con il management. Non esercizi astratti: situazioni che il team riconosce.",
      },
      {
        domanda: "Cosa resta al team dopo la giornata?",
        risposta:
          "L'handout, le checklist e il replay dei materiali. E la lista dei casi d'uso più sentiti, emersa dal laboratorio: spesso è il punto di partenza per un affiancamento.",
      },
      {
        domanda: "Da cosa dipende il prezzo finale?",
        risposta:
          "Si parte da 2.500 € a giornata. Contano il numero di partecipanti e la località, con la trasferta inclusa o esclusa.",
      },
    ],
    tempi: "1 giornata",
    prezzo: "a partire da 2.500 € a giornata",
    prezzoMin: 2500,
    prezzoUnita: "giornata",
    href: "/lavoro/workshop",
  },
  {
    slug: "affiancamento",
    n: "03",
    pagina: "03.3",
    titolo: "Affiancamento",
    titoloBreve: "Affiancamento",
    promessa:
      "Un progetto seguito nel tempo: implementazione, formazione del team, revisione dei progressi.",
    perChi: "PMI che hanno deciso dove intervenire e vogliono arrivare in fondo.",
    perChiDettaglio: [
      {
        nome: "PMI con un progetto da portare a terra",
        descrizione:
          "Avete deciso dove intervenire, spesso dopo una Mappa dell'innovazione, e volete una guida nell'esecuzione: perimetro contenuto, ritmo sostenibile.",
      },
      {
        nome: "Direzioni che vogliono un team autonomo",
        descrizione:
          "L'affiancamento include la formazione delle persone interne: l'obiettivo è che le cose continuino a funzionare anche quando il lavoro insieme finisce.",
      },
    ],
    cosaRicevi: [
      "3–4 mezze giornate al mese di lavoro operativo insieme",
      "Uno stand-up settimanale di 30 minuti per tenere il ritmo",
      "Avanzamento implementativo sul progetto, non solo indicazioni",
      "Formazione del team sulle attività che restano in casa",
      "Revisione periodica dei progressi: cosa è stato fatto, cosa si corregge",
    ],
    comeFunziona: [
      {
        nome: "Perimetro",
        descrizione:
          "Definiamo progetto, persone coinvolte e ritmo. Se c'è già una Mappa dell'innovazione, si parte dalla sua roadmap.",
      },
      {
        nome: "Ogni mese",
        tempo: "3–4 mezze giornate",
        descrizione: "Lavoro operativo insieme, sul progetto e con il team.",
      },
      {
        nome: "Ogni settimana",
        tempo: "30 minuti",
        descrizione: "Stand-up: avanzamento, blocchi, prossimi passi.",
      },
      {
        nome: "Revisione",
        descrizione:
          "Si guarda cosa è stato fatto e cosa va corretto, e si decide insieme il passo successivo.",
      },
    ],
    sezioni: [
      {
        titolo: "Come iniziamo",
        paragrafi: [
          "In genere si parte da una Mappa dell'innovazione: un audit di 1–2 settimane che definisce i punti di intervento e la roadmap su cui l'affiancamento lavora. Non è un obbligo, ma evita di passare mesi su un perimetro sbagliato.",
        ],
        link: { href: "/lavoro#mappa", label: "Vedi la scheda della Mappa" },
      },
    ],
    faq: [
      {
        domanda: "Perché la durata minima è di tre mesi?",
        risposta:
          "Perché l'affiancamento lavora su implementazione e abitudini del team. Sotto i tre mesi il ritmo non fa in tempo a produrre effetti che restano.",
      },
      {
        domanda: "Serve aver fatto prima la Mappa dell'innovazione?",
        risposta:
          "No, ma è il percorso più frequente: la Mappa definisce dove intervenire, l'affiancamento porta a terra. Se il perimetro è già chiaro, si parte direttamente.",
      },
      {
        domanda: "Come funziona dopo i primi tre mesi?",
        risposta:
          "L'ingaggio resta mensile e si prosegue finché il progetto lo richiede. La revisione dei progressi serve anche a decidere insieme quando ha senso fermarsi.",
      },
      {
        domanda: "Il mio team è coinvolto?",
        risposta:
          "Sì, è il punto del formato: formo le persone interne sulle attività che restano in casa. L'obiettivo è l'autonomia del team, non la dipendenza dal consulente.",
      },
    ],
    tempi: "da 3 mesi in su",
    prezzo: "a partire da 2.000 € al mese",
    prezzoMin: 2000,
    prezzoUnita: "mese",
    href: "/lavoro/affiancamento",
  },
];

export function getServizio(slug: ServizioSlug): Servizio {
  const s = SERVIZI.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servizio sconosciuto: ${slug}`);
  return s;
}
