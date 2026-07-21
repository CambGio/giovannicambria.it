/**
 * Fonte unica del copy commerciale della sezione /lavoro.
 * Scheletro a 3 passi riframato in chiave adozione AI (docs/strategia/09-revisione-v1-2026-07.md
 * §6). Struttura operativa (durate, deliverable) derivata da 05-offerta-commerciale.md; il frame
 * è quello nuovo. Niente prezzi: si parla in call.
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
  href: string;
};

export const SERVIZI: Servizio[] = [
  {
    slug: "mappa",
    n: "01",
    pagina: "03.1",
    titolo: "Mappa dell'adozione",
    titoloBreve: "Mappa dell'adozione",
    promessa:
      "Un assessment per capire dove l'AI serve davvero nei vostri processi — e dove no. Anche \"non serve\" è un risultato.",
    perChi:
      "PMI e professionisti che vogliono sapere se e dove l'AI conviene, prima di spendere in strumenti.",
    perChiDettaglio: [
      {
        nome: "PMI",
        descrizione:
          "Aziende dai 5 ai 100 dipendenti, in settori tradizionali, dove decide il titolare o la direzione. Non sapete da dove iniziare e non volete comprare uno strumento per poi scoprire che non serviva. La Mappa vi dice quali processi guadagnano davvero dall'AI, quali no, e in che ordine muoversi.",
      },
      {
        nome: "Professionisti",
        descrizione:
          "Studi legali, commercialisti, agenzie, architetti, consulenti. Per chi lavora da solo o in piccolo team esiste una versione ridotta: una settimana di lavoro, documento più snello, stesso metodo.",
      },
    ],
    cosaRicevi: [
      "Un documento con la mappa dei vostri processi: dove l'AI produce un ritorno reale, dove no",
      "3–5 punti di intervento, in ordine di priorità",
      "Una roadmap a 6–12 mesi, con i passi concreti per attuarla",
      "Una shortlist di strumenti coerente con i punti individuati, non un elenco generico di tool",
      "La registrazione del workshop di restituzione, da condividere internamente",
    ],
    comeFunziona: [
      {
        nome: "Kick-off",
        tempo: "90 minuti",
        descrizione:
          "Una sessione con chi decide: quali processi guardiamo, cosa cambierebbe se funzionassero meglio.",
      },
      {
        nome: "Analisi documentale",
        descrizione:
          "Studio cosa usate già — numeri, processi, strumenti — prima di proporre qualunque novità.",
      },
      {
        nome: "Interviste interne",
        tempo: "2 incontri",
        descrizione:
          "Due conversazioni con chi vive il processo ogni giorno, non solo con chi lo racconta dall'alto.",
      },
      {
        nome: "Workshop di restituzione",
        tempo: "90 minuti",
        descrizione:
          "Presento la mappa e i punti di intervento — inclusi quelli dove conviene non muoversi. Ne discutiamo insieme; la sessione viene registrata.",
      },
      {
        nome: "Consegna",
        descrizione:
          "Il documento finale: mappa dei processi, punti di intervento, roadmap, shortlist di strumenti.",
      },
    ],
    faq: [
      {
        domanda: "E se poi l'AI non serve?",
        risposta:
          "Succede, ed è un risultato valido. La Mappa può concludere che per voi, oggi, non conviene muoversi: meglio saperlo prima di aver comprato uno strumento che resta inutilizzato.",
      },
      {
        domanda: "Chi sceglie le persone da intervistare?",
        risposta:
          "Le scegliamo insieme al kick-off. Servono due punti di vista diversi sul processo: in genere chi vende e chi gestisce le operazioni, ma dipende dalla vostra struttura.",
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
          "Il perimetro. Per le PMI: 1–2 settimane, due interviste interne, documento più esteso. Per i professionisti: una settimana, documento più snello, stesso metodo.",
      },
      {
        domanda: "E dopo la consegna?",
        risposta:
          "Il documento è vostro: potete eseguire la roadmap da soli o con i fornitori che preferite. Se volete continuare insieme, il passo naturale è l'affiancamento.",
      },
    ],
    tempi: "1–2 settimane",
    href: "/lavoro#mappa",
  },
  {
    slug: "workshop",
    n: "02",
    pagina: "03.2",
    titolo: "Workshop pratico",
    titoloBreve: "Workshop pratico",
    promessa:
      "Una giornata in azienda: il team impara l'AI sul proprio lavoro reale, non su una demo.",
    perChi:
      "PMI con un team da 8 a 30 persone che deve iniziare a usare l'AI sul serio, non solo sentirne parlare.",
    perChiDettaglio: [
      {
        nome: "La direzione",
        descrizione:
          "Volete una base comune prima di investire in progetti. La pre-call con il management calibra la giornata sul vostro settore — inclusi i casi in cui, onestamente, l'AI non è la priorità.",
      },
      {
        nome: "Il team",
        descrizione:
          "Le persone che useranno gli strumenti ogni giorno. Il laboratorio del pomeriggio lavora sui vostri casi reali, non su esercizi da manuale.",
      },
    ],
    cosaRicevi: [
      "Una pre-call di 60 minuti con il management per calibrare i contenuti",
      "Una mattina di teoria applicata al vostro settore, con esempi vicini al vostro lavoro",
      "Un pomeriggio di laboratorio guidato sui casi reali del team",
      "Materiale di follow-up: handout, checklist, replay dei materiali",
      "La lista dei casi d'uso emersi dal laboratorio, utile per decidere i passi successivi — incluso \"nessun passo\"",
    ],
    comeFunziona: [
      {
        nome: "Pre-call",
        tempo: "60 minuti",
        descrizione:
          "Con il management: settore, aspettative, casi su cui ha senso lavorare davvero.",
      },
      {
        nome: "Mattina",
        tempo: "4 ore",
        descrizione:
          "Teoria applicata al vostro settore: cosa cambia per i vostri processi, con esempi vicini al vostro lavoro.",
      },
      {
        nome: "Pomeriggio",
        tempo: "3 ore",
        descrizione:
          "Laboratorio guidato: il team lavora sui propri casi reali, non su demo preconfezionate.",
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
        domanda: "Il workshop serve anche se non siamo sicuri che l'AI ci serva?",
        risposta:
          "Sì, è proprio il punto. Se dal laboratorio emerge che per i vostri casi l'AI non è la priorità del momento, avete comunque chiarezza — e avete risparmiato mesi di tentativi.",
      },
      {
        domanda: "Cosa resta al team dopo la giornata?",
        risposta:
          "L'handout, le checklist e il replay dei materiali. E la lista dei casi d'uso più sentiti, emersa dal laboratorio: spesso è il punto di partenza per un affiancamento.",
      },
    ],
    tempi: "1 giornata",
    href: "/lavoro#workshop",
  },
  {
    slug: "affiancamento",
    n: "03",
    pagina: "03.3",
    titolo: "Affiancamento",
    titoloBreve: "Affiancamento",
    promessa:
      "Adozione continuativa dell'AI nei processi, misurata — non una consulenza a tempo indeterminato.",
    perChi:
      "PMI che hanno già capito dove intervenire (spesso dalla Mappa) e vogliono portare il progetto a termine, con il team che resta autonomo.",
    perChiDettaglio: [
      {
        nome: "PMI con un progetto da portare a terra",
        descrizione:
          "Avete deciso dove intervenire e volete una guida nell'esecuzione: perimetro contenuto, ritmo sostenibile, verifiche periodiche su cosa sta funzionando davvero.",
      },
      {
        nome: "Direzioni che vogliono un team autonomo",
        descrizione:
          "L'affiancamento include la formazione delle persone interne: l'obiettivo è che l'adozione continui anche quando il lavoro insieme finisce.",
      },
    ],
    cosaRicevi: [
      "3–4 mezze giornate al mese di lavoro operativo insieme",
      "Uno stand-up settimanale di 30 minuti per tenere il ritmo",
      "Avanzamento implementativo sul progetto, non solo indicazioni",
      "Formazione del team sulle attività che restano in casa",
      "Una revisione periodica su un indicatore di processo concordato all'inizio, per sapere se l'adozione sta funzionando — non solo se è \"in corso\"",
    ],
    comeFunziona: [
      {
        nome: "Perimetro",
        descrizione:
          "Definiamo progetto, persone coinvolte, ritmo e un indicatore di processo per misurare se l'adozione funziona. Se c'è già una Mappa dell'adozione, si parte dalla sua roadmap.",
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
          "Guardiamo l'indicatore concordato: cosa è cambiato, cosa va corretto. Si decide insieme il passo successivo.",
      },
    ],
    sezioni: [
      {
        titolo: "Come iniziamo",
        paragrafi: [
          "In genere si parte da una Mappa dell'adozione: un assessment di 1–2 settimane che dice dove l'AI serve nei vostri processi e dove no, e diventa la roadmap su cui l'affiancamento lavora. Non è un obbligo, ma evita di passare mesi su un perimetro sbagliato.",
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
        domanda: "Serve aver fatto prima la Mappa dell'adozione?",
        risposta:
          "No, ma è il percorso più frequente: la Mappa definisce dove intervenire, l'affiancamento porta a terra. Se il perimetro è già chiaro, si parte direttamente.",
      },
      {
        domanda: "Come misurate se l'adozione funziona?",
        risposta:
          "Si concorda un indicatore di processo fin dal primo perimetro — tempo risparmiato, errori ridotti, volume gestito, a seconda del caso — e lo rivediamo a ogni revisione periodica. Se l'indicatore non si muove, ne parliamo e correggiamo la rotta: non si continua per inerzia.",
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
    href: "/lavoro#affiancamento",
  },
];

export function getServizio(slug: ServizioSlug): Servizio {
  const s = SERVIZI.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servizio sconosciuto: ${slug}`);
  return s;
}
