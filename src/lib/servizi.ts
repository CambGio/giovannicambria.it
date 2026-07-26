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
      "Una o due settimane per capire dove l'AI vi ripaga. Anche «non serve» è un risultato: vi risparmia uno strumento comprato a vuoto.",
    perChi:
      "PMI e professionisti che vogliono sapere dove l'AI conviene, prima di metterci soldi.",
    perChiDettaglio: [
      {
        nome: "PMI",
        descrizione:
          "Aziende dove decide il titolare o la direzione, in settori tradizionali: assicurazioni, noleggio, commercio, industria. Avete già pensato che con l'AI c'è qualcosa da fare, ma non sapete da dove cominciare. La Mappa vi dice quali lavori ci guadagnano e in che ordine muoversi.",
      },
      {
        nome: "Professionisti",
        descrizione:
          "Studi legali, commercialisti, agenzie, architetti, consulenti. Per chi lavora da solo o in un piccolo team c'è una versione ridotta: una settimana di lavoro e un documento più snello. Il metodo è lo stesso.",
      },
    ],
    cosaRicevi: [
      "Il documento con la mappa dei vostri processi, nero su bianco",
      "I punti dove conviene intervenire, in ordine di priorità",
      "Un piano per i mesi a venire, coi passi concreti in fila",
      "Una selezione di strumenti agganciata a quei punti",
      "La registrazione dell'incontro finale, da far girare internamente",
    ],
    comeFunziona: [
      {
        nome: "Primo incontro",
        tempo: "un'ora e mezza",
        descrizione:
          "Con chi decide: quali lavori guardiamo, cosa cambia se girano meglio.",
      },
      {
        nome: "Studio dei documenti",
        descrizione:
          "Guardo quello che usate già, i numeri e gli strumenti. Solo dopo si parla di cose nuove.",
      },
      {
        nome: "Interviste interne",
        tempo: "due incontri",
        descrizione:
          "Due conversazioni con chi il lavoro lo fa ogni giorno: chi compila i preventivi, chi risponde al telefono.",
      },
      {
        nome: "Incontro finale",
        tempo: "un'ora e mezza",
        descrizione:
          "Vi presento la mappa e i punti d'intervento, e se ne discute insieme.",
      },
      {
        nome: "Consegna",
        descrizione:
          "Il documento arriva dopo l'incontro finale, con dentro quello che ci siamo detti.",
      },
    ],
    sezioni: [
      {
        titolo: "Com'è andata davvero",
        paragrafi: [
          "Con Amendolia Assicurazioni abbiamo iniziato dalla mappa dei processi interni: un manuale delle procedure e un mansionario. Poi sono arrivate le campagne di lead generation su Google Ads e Meta Ads, insieme a un CRM di marketing costruito sulle loro esigenze. Da lì passano tutti i contatti con clienti e prospect: le email e un canale WhatsApp gestito direttamente dalla piattaforma. Adesso lavoriamo su un agente AI che risponde alle chiamate fuori orario, e su un progetto pilota con Claude Team per gli operatori: strumenti calati sul lavoro di ogni singola persona, il primo passo verso l'adozione in tutta l'azienda. La collaborazione è ancora attiva.",
          "Per Sinotech ho gestito la migrazione dell'e-commerce da PrestaShop a Shopify. Da allora vendere è molto più semplice, anche per chi si occupa del marketing.",
          "Quello che gira già oggi sono siti, CRM, campagne, e-commerce, con dentro i primi pezzi di AI: il canale WhatsApp che risponde dalla piattaforma, l'agente che prende le chiamate fuori orario. I progetti AI più ambiziosi sono in cantiere adesso, non ancora finiti. Su quello che è già in piedi potete giudicarmi subito.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Chi sceglie le persone da intervistare?",
        risposta:
          "Le scegliamo insieme al primo incontro. Servono due punti di vista diversi sullo stesso lavoro: di solito chi vende e chi manda avanti le operazioni, ma dipende da come siete organizzati.",
      },
      {
        domanda: "Cosa dico ai miei dipendenti?",
        risposta:
          "Che vengo a guardare come funziona il lavoro, non come lavorano le persone. Le interviste servono a capire dove il processo perde tempo, e quel tempo di solito lo perdono le persone per prime: quando la cosa è chiara, collaborano volentieri. La presentazione al team la organizziamo insieme, prima che io cominci.",
      },
      {
        domanda: "Cosa devo preparare per il primo incontro?",
        risposta:
          "Niente di nuovo. Bastano i documenti che usate già: il listino e i report che guardate ogni mese.",
      },
      {
        domanda: "Dove finiscono i nostri documenti e le registrazioni?",
        risposta:
          "Restano su un archivio mio, ci accedo solo io e non li vede nessun altro. Firmo un accordo di riservatezza prima di cominciare, se lo volete. A fine lavoro, se preferite, cancello tutto e vi resta solo il documento.",
      },
      {
        domanda: "Prendi provvigioni sugli strumenti che consigli?",
        risposta:
          "No, da nessun fornitore. Il piano che vi consegno lo può eseguire chiunque, anche senza di me.",
      },
      {
        domanda: "E dopo la consegna?",
        risposta:
          "Il documento è vostro: potete seguire il piano da soli o con i fornitori che preferite. Il passo naturale per continuare insieme è l'Affiancamento.",
      },
    ],
    tempi: "una o due settimane",
    href: "/lavoro#mappa",
  },
  {
    slug: "workshop",
    n: "02",
    pagina: "03.2",
    titolo: "Workshop pratico",
    titoloBreve: "Workshop pratico",
    promessa:
      "Una giornata in azienda: il team impara a usare l'AI sul lavoro che ha davanti ogni giorno.",
    perChi:
      "PMI con un team che deve cominciare a usare l'AI sul lavoro di ogni giorno.",
    perChiDettaglio: [
      {
        nome: "La direzione",
        descrizione:
          "Volete una base comune prima di investire in progetti. L'incontro che facciamo prima della giornata serve a calibrarla sul vostro settore.",
      },
      {
        nome: "Il team",
        descrizione:
          "Le persone che gli strumenti li useranno ogni giorno. Nel laboratorio del pomeriggio ognuno porta un caso suo: un preventivo, una mail, un documento che maneggia ogni settimana.",
      },
    ],
    cosaRicevi: [
      "Le dispense e le registrazioni della giornata, che restano al team",
      "Le liste di controllo per rifare da soli il lavoro del laboratorio",
      "La lista dei casi emersi, da cui decidere i passi successivi",
    ],
    comeFunziona: [
      {
        nome: "Incontro preliminare",
        tempo: "un'ora",
        descrizione:
          "Con la direzione: settore, aspettative, casi su cui ha senso lavorare davvero.",
      },
      {
        nome: "Mattina",
        tempo: "quattro ore",
        descrizione:
          "Teoria applicata al vostro settore: cosa cambia per i lavori che fate, con casi che riconoscete al volo.",
      },
      {
        nome: "Pomeriggio",
        tempo: "tre ore",
        descrizione:
          "Laboratorio guidato: ognuno sul proprio lavoro, sui casi scelti prima con la direzione.",
      },
      {
        nome: "Dopo",
        descrizione: "Vi mando tutto il materiale della giornata.",
      },
    ],
    sezioni: [
      {
        titolo: "Da dove viene questa giornata",
        paragrafi: [
          "Con Empire Ricambi ho affiancato l'imprenditore fin dall'inizio: abbiamo formato il team mentre l'azienda si metteva in piedi, e messo in ordine i processi. La formazione delle persone la faccio da anni, dentro percorsi più lunghi di una giornata sola. Qui c'è lo stesso lavoro, stretto in un giorno: le persone escono sapendo usare l'AI sul lavoro che hanno davanti.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Quante persone possono partecipare?",
        risposta:
          "Il formato rende con un gruppo da otto a trenta persone. Fuori da lì il laboratorio perde efficacia: in quei casi ne parliamo e si trova il taglio giusto.",
      },
      {
        domanda: "In azienda o da remoto?",
        risposta:
          "In azienda: il laboratorio sui casi reali rende in presenza. La trasferta entra nel preventivo, in base alla località.",
      },
      {
        domanda: "Il nostro settore è particolare, funziona lo stesso?",
        risposta:
          "Per questo la giornata comincia una settimana prima, con la direzione. La mattina si costruisce sui lavori che fate voi, non su esempi generici.",
      },
    ],
    tempi: "una giornata",
    href: "/lavoro#workshop",
  },
  {
    slug: "affiancamento",
    n: "03",
    pagina: "03.3",
    titolo: "Affiancamento",
    titoloBreve: "Affiancamento",
    promessa:
      "Resto al fianco del team finché il progetto non sta in piedi da solo. Ogni mese si guarda una misura concordata, e da lì si decide se andare avanti.",
    perChi:
      "PMI che sanno già dove intervenire e vogliono portare il progetto fino in fondo, con il team che impara a mandarlo avanti.",
    perChiDettaglio: [
      {
        nome: "PMI con un progetto da mettere in piedi",
        descrizione:
          "Avete deciso dove intervenire e volete qualcuno al fianco mentre si fa, con un ritmo che il team riesce a reggere.",
      },
      {
        nome: "Direzioni che vogliono un team autonomo",
        descrizione:
          "Formo le persone interne mentre si lavora. Quando il lavoro insieme finisce, l'adozione va avanti lo stesso.",
      },
    ],
    cosaRicevi: [
      "Lavoro fatto sul progetto, seduto accanto a chi lo porta avanti",
      "La formazione delle persone sulle attività che restano in casa",
      "Una misura concordata all'inizio, per sapere se sta rendendo",
    ],
    comeFunziona: [
      {
        nome: "Cosa copriamo",
        descrizione:
          "Decidiamo insieme progetto, persone coinvolte e la misura su cui capiremo se sta funzionando. Se c'è già una Mappa dell'adozione, si lavora sul suo piano.",
      },
      {
        nome: "Ogni mese",
        tempo: "tre o quattro mezze giornate",
        descrizione: "Lavoro operativo sul progetto, con il team.",
      },
      {
        nome: "Ogni settimana",
        tempo: "mezz'ora",
        descrizione: "Un punto veloce: cosa è fermo e cosa si fa dopo.",
      },
      {
        nome: "Il punto del mese",
        descrizione:
          "Si guarda la misura concordata: cosa è cambiato, cosa va corretto. Il passo dopo si decide insieme.",
      },
    ],
    sezioni: [
      {
        titolo: "Come iniziamo",
        paragrafi: [
          "In genere il primo passo è una Mappa dell'adozione: una o due settimane in cui vengo a vedere come lavorate, e da lì esce il piano su cui l'affiancamento lavora. È facoltativa: se sapete già dove mettere le mani, si comincia dal progetto.",
        ],
        link: { href: "/lavoro#mappa", label: "Vedi la scheda della Mappa" },
      },
      {
        titolo: "Percorsi in corso",
        paragrafi: [
          "Con Autonoleggio Di Paola abbiamo portato online il loro primo sistema di prenotazione degli shuttle bus per l'aeroporto di Catania. Quando è servito un sistema più solido, della selezione delle piattaforme mi sono occupato io: è quello che usano adesso. Poi è arrivato il CRM Delera, con un canale WhatsApp per parlare con i clienti, e il nuovo sito su misura. Chi cerca lo scuolabus o il noleggio a lungo termine trova tutto sullo stesso sito. Lavoriamo insieme da più di un anno.",
          "Per LoveKasa ho costruito il CRM Delera su come seguono i clienti: le richieste che arrivano, le consulenze da prenotare nei punti vendita. Da lì partono anche le campagne di messaggi su WhatsApp. Le richieste che arrivano diventano consulenze da fissare nei punti vendita. Il primo sito era embrionale; quello nuovo, pensato anche per farsi trovare su Google, lo stiamo costruendo adesso.",
        ],
      },
    ],
    faq: [
      {
        domanda: "Perché la durata minima è di tre mesi?",
        risposta:
          "Perché qui si lavora sulle abitudini del team, non solo sugli strumenti. Sotto i tre mesi il ritmo non fa in tempo a produrre effetti che restano.",
      },
      {
        domanda: "Serve aver fatto prima la Mappa dell'adozione?",
        risposta:
          "Quasi sempre sì: la Mappa dice dove intervenire, l'affiancamento porta il lavoro fino in fondo. Se sapete già dove mettere le mani, si comincia dal progetto.",
      },
      {
        domanda: "Come si capisce se l'adozione funziona?",
        risposta:
          "Si concorda una misura all'inizio: tempo risparmiato, errori in meno, dipende dal caso. La guardiamo insieme ogni mese. Se dopo qualche settimana non si muove, si cambia il modo di lavorarci. O si cambia il pezzo di lavoro.",
      },
      {
        domanda: "Come funziona dopo i primi tre mesi?",
        risposta:
          "Si va di mese in mese, finché il progetto lo richiede. Si chiude con un mese di preavviso, senza penali.",
      },
      {
        domanda: "Il mio team è coinvolto?",
        risposta:
          "Sì: formo le persone sulle attività che restano in casa, così poi andate avanti da soli.",
      },
    ],
    tempi: "da tre mesi in su",
    href: "/lavoro#affiancamento",
  },
];

export function getServizio(slug: ServizioSlug): Servizio {
  const s = SERVIZI.find((x) => x.slug === slug);
  if (!s) throw new Error(`Servizio sconosciuto: ${slug}`);
  return s;
}
