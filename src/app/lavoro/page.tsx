import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavoro — Giovanni Cambria",
  description:
    "Vent'anni a costruire modelli di business — da Switch MultiMedia (1998) agli incarichi di oggi in Sicilia. Il percorso, non il curriculum.",
};

type Chapter = {
  n: string;
  period: string;
  place: string;
  title: string;
  body: React.ReactNode;
};

const CHAPTERS: Chapter[] = [
  {
    n: "I",
    period: "1998 — 2007",
    place: "Milazzo",
    title: "Switch MultiMedia, o l'idea di farsi una società.",
    body: (
      <>
        <p>
          Quando ho fondato Switch MultiMedia avevo ventisette anni. Era il
          gennaio del 1998 e «fare web», in Sicilia, era ancora un mestiere
          senza nome. I clienti dovevano essere convinti due volte: la prima che
          un sito serviva davvero, la seconda che era ragionevole farselo fare
          da una società di Milazzo invece che a Milano. Dieci anni dopo — nel
          dicembre 2007 — l'ho chiusa. Avevo trentasei anni e una scuola
          completa.
        </p>
        <p>
          In quegli anni si imparava tutto perché tutto andava fatto: la
          vendita, la strategia, l'esecuzione, le persone, i fornitori, il
          pagamento. Una piccola società multimedia era una palestra durissima
          dove non potevi delegare quello che non sapevi fare, e dove la
          differenza fra chiudere il mese e non chiuderlo si decideva per
          dettagli — un preventivo scritto bene, una telefonata fatta in tempo,
          un collaboratore tenuto vicino quando voleva andarsene.
        </p>
        <p>
          Il capitolo è importante perché definisce un tipo di sguardo. Chi ha
          fatto impresa a 27 anni in un territorio lontano dai poli del
          digitale italiano impara a fidarsi dei modelli che reggono in
          condizioni difficili, non di quelli che funzionano solo dove tutto è
          già pronto. È il filo che ho ritrovato vent'anni dopo davanti
          all'intelligenza artificiale: la stessa diffidenza per ciò che brilla
          a Milano e si spegne in provincia.
        </p>
      </>
    ),
  },
  {
    n: "II",
    period: "2009 — 2018",
    place: "Brescia, Salò",
    title: "Eureweb, dieci anni di agency.",
    body: (
      <>
        <p>
          Dopo Switch ho preso una strada diversa: sono andato a Brescia, in una
          digital media agency che si chiama Eureweb, e ci sono rimasto quasi
          dieci anni. Ho ricoperto quattro ruoli in successione — Project
          Manager SEM dal 2009, poi Team Director dal 2012, Operations Director
          dal 2015, infine General Team Manager fino al dicembre 2018 — e in
          quel periodo Eureweb ha lavorato per clienti che pesano: Pirelli,
          Citroën, Lenovo, Citizen, Candy, Clinians, Sisal.
        </p>
        <p>
          L'agency è una cosa molto diversa dall'impresa propria. Si lavora con
          processi, account, deliverable misurabili, e si scopre presto che il
          90% del valore non è nell'intuizione strategica ma nella regolarità
          con cui le cose vengono consegnate. Per un siciliano che aveva
          imparato a fare tutto da solo, dieci anni a strutturare team, a
          formalizzare metodi, a render conto a clienti enterprise sono stati
          un secondo apprendistato — e probabilmente il più formativo, perché
          mi hanno insegnato che la disciplina vale più del talento isolato.
        </p>
        <p>
          A Salò è anche nato Rideook, una piattaforma di bike touring sul
          Lago di Garda che è stata uno spin-off del lavoro in agency. Era il
          2016 e cominciava già a essere chiaro, almeno per me, che le agenzie
          tradizionali avevano davanti un'evoluzione: i clienti non volevano
          più solo campagne, volevano modelli di business che funzionassero
          digitalmente fin dall'origine. È la domanda che mi sono portato a
          casa quando, alla fine del 2018, ho deciso di tornare a lavorare in
          proprio.
        </p>
      </>
    ),
  },
  {
    n: "III",
    period: "2019 — oggi",
    place: "Sicilia",
    title: "Il ritorno, e il lavoro autonomo.",
    body: (
      <>
        <p>
          Dal gennaio 2019 sono tornato a esercitare come consulente
          indipendente, con base in Sicilia. La prima cosa che ho fatto è
          stata iscrivermi alla Business Design Academy di Beople: avevo
          bisogno di un linguaggio comune per quello che avevo capito facendo,
          e quel master mi ha dato una grammatica. Da lì ho cominciato a
          chiamare il mio mestiere con il suo nome: <em>consulente in
          innovazione dei modelli di business</em>.
        </p>
        <p>
          Il committente che mi ha dato continuità in questi anni è Empire
          S.r.l., una società di Venetico, in provincia di Messina. Empire
          raccoglie veicoli a motore — automobili, rimorchi, mezzi simili —
          per la messa in sicurezza, la demolizione e la rottamazione; i
          componenti recuperati, superati i test di idoneità, vengono
          rimessi sul mercato come ricambi, offline e attraverso i
          principali marketplace europei e il sito{" "}
          <a
            href="https://www.empirericambi.it"
            className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            rel="noopener"
          >
            empirericambi.it
          </a>
          . Sono il loro Innovation Manager dal febbraio 2020 — un ruolo che,
          in una PMI siciliana di questa scala, vuol dire tenere insieme due
          realtà che si parlano poco: un piazzale industriale dove si
          smontano veicoli, e un'operazione e-commerce che cresce su listini,
          marketplace e logistica. Sei anni dentro la stessa azienda sono una
          lente preziosa: si vede da vicino cosa funziona davvero in
          un'impresa italiana media, e cosa è solo marketing per consulenti.
        </p>
        <p>
          È in questi sei anni che ho costruito la convinzione che porto oggi
          nel nuovo studio: l'innovazione non si misura dalla quantità di
          strumenti adottati, ma dalla qualità delle decisioni che permette di
          prendere. Una PMI italiana non ha bisogno di un altro vendor — ne
          ha già troppi. Ha bisogno di qualcuno che le dica, in italiano e
          senza gergo, quali strumenti meritano un test e quali sono rumore
          travestito da progresso.
        </p>
      </>
    ),
  },
  {
    n: "IV",
    period: "2024 — oggi",
    place: "Milazzo, Milano",
    title: "Oggi: Amendolia Assicurazioni e Sinotech.",
    body: (
      <>
        <p>
          Negli ultimi due anni si sono aggiunti due incarichi che raccontano
          bene dove sta andando lo studio. Da aprile 2024 lavoro come
          consulente marketing per Amendolia Assicurazioni, un'agenzia
          assicurativa di Milazzo: un settore meno toccato dalle agenzie
          digital tradizionali, dove la digitalizzazione retail è ancora un
          terreno aperto e dove l'intelligenza artificiale ha applicazioni
          concrete — preventivazione, retention, generazione di contenuti
          informativi per i clienti — che valgono molto di più dei trucchetti
          da social media.
        </p>
        <p>
          Da giugno 2024, in parallelo, seguo Sinotech, un'azienda di Milano,
          come consulente marketing digitale. È un rapporto recente e in
          costruzione, ma è la prova che il nuovo posizionamento regge anche
          fuori dalla Sicilia: imprenditori che vogliono capire prima di
          adottare ci sono ovunque, e parlano una lingua che ho imparato a
          riconoscere prima a Brescia e poi qui.
        </p>
        <p>
          Lo studio Giovanni Cambria nasce dentro questa traiettoria. Non è
          un'agenzia, non è una boutique strategica, non è una scuola: è il
          posto da cui un consulente che ha visto due transizioni — il web fra
          il 1998 e il 2007, l'AI dal 2022 — prova a far prendere agli
          imprenditori italiani decisioni meno reattive e più informate, una
          alla volta.
        </p>
      </>
    ),
  },
];

function Dingbat() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-ink"
    >
      <path
        d="M 18 5.5 A 8 8 0 1 0 18 18.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <line
        x1="18"
        y1="5.5"
        x2="20.5"
        y2="5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
      <line
        x1="18"
        y1="18.5"
        x2="20.5"
        y2="18.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Lavoro() {
  return (
    <>
      {/* §  Cappello editoriale */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-[88px]">
          <div>
            <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
              <span className="inline-block h-[2px] w-7 bg-accent" />
              <span className="text-accent">№ 02</span>
              <span className="text-ink-muted">— Il percorso, non il curriculum</span>
            </div>

            <h1 className="font-sans font-extrabold m-0 text-[48px] leading-[0.98] tracking-[-0.035em] md:text-[68px] lg:text-[80px]">
              Vent&apos;anni a costruire
              <br />
              modelli di business.
            </h1>

            <p className="mt-8 max-w-[560px] font-serif text-[22px] leading-[1.4] md:text-[24px]">
              Sicilia, Brescia, ancora Sicilia. Quattro stagioni — una società
              propria, una grande agency, sei anni dentro una PMI, due nuovi
              incarichi in corso — che spiegano da dove arriva lo studio di
              oggi.
            </p>
          </div>

          <aside className="border-t border-rule pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-ink-muted">
              In questa pagina
            </div>
            {CHAPTERS.map((c) => (
              <div
                key={c.n}
                className="grid grid-cols-[40px_1fr] items-baseline gap-5 border-t border-ink py-5 mt-5"
              >
                <div className="font-mono text-[13px] font-medium tracking-[0.04em] text-accent tabular-nums">
                  {c.n}
                </div>
                <div>
                  <div className="text-[18px] font-medium tracking-[-0.005em] leading-[1.25]">
                    {c.title.replace(/[.,] .*$/, "")}
                  </div>
                  <div className="mt-1 font-mono text-[12px] tracking-[0.04em] tabular-nums text-ink-muted">
                    {c.period} · {c.place}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-ink" aria-hidden="true" />
          </aside>
        </div>
      </section>

      {/* § Capitoli */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        {CHAPTERS.map((c) => (
          <article
            key={c.n}
            className="grid gap-10 border-t border-rule py-16 lg:grid-cols-[5fr_7fr] lg:gap-[88px] lg:py-24"
          >
            <header className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[13px] tracking-[0.04em] text-accent">
                  Capitolo {c.n}
                </span>
                <span className="h-px flex-1 bg-rule" aria-hidden="true" />
              </div>
              <div className="mt-3 font-mono text-[12px] tracking-[0.04em] tabular-nums text-ink-muted">
                {c.period} · {c.place}
              </div>
              <h2 className="mt-5 font-sans font-bold text-[30px] leading-[1.08] tracking-[-0.022em] md:text-[40px]">
                {c.title}
              </h2>
            </header>
            <div className="font-serif text-[18px] leading-[1.7] text-ink space-y-6 md:text-[19px] [&_p]:m-0">
              {c.body}
            </div>
          </article>
        ))}
      </div>

      {/* § Dingbat di chiusura */}
      <div className="mx-auto max-w-[1280px] px-6 pb-12 pt-4 md:px-16 md:pb-16">
        <div className="flex items-center gap-4 border-t border-ink pt-8">
          <Dingbat />
          <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-muted">
            fine del capitolo
          </span>
        </div>
      </div>

      {/* § Link contestuali */}
      <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-16 md:pb-28">
        <div className="grid gap-10 border-t border-rule pt-12 md:grid-cols-3 md:gap-14">
          <Link
            href="/approccio"
            className="group block border-t-2 border-ink pt-5 transition-colors hover:border-accent"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Capitolo successivo
            </div>
            <div className="mt-2 font-sans font-bold text-[22px] leading-[1.15] tracking-[-0.018em] group-hover:text-accent">
              Come lavoro, e con quale metodo.
            </div>
            <div className="mt-2 font-sans text-[13px] text-ink-muted">
              /approccio
            </div>
          </Link>
          <Link
            href="/blog"
            className="group block border-t-2 border-ink pt-5 transition-colors hover:border-accent"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Letture
            </div>
            <div className="mt-2 font-sans font-bold text-[22px] leading-[1.15] tracking-[-0.018em] group-hover:text-accent">
              Cosa scrivo, ogni settimana.
            </div>
            <div className="mt-2 font-sans text-[13px] text-ink-muted">
              /blog
            </div>
          </Link>
          <Link
            href="/contatto"
            className="group block border-t-2 border-ink pt-5 transition-colors hover:border-accent"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Lavoriamo insieme
            </div>
            <div className="mt-2 font-sans font-bold text-[22px] leading-[1.15] tracking-[-0.018em] group-hover:text-accent">
              Mettiamoci in contatto.
            </div>
            <div className="mt-2 font-sans text-[13px] text-ink-muted">
              /contatto
            </div>
          </Link>
        </div>
      </section>

      {/* § Pagina-folio */}
      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 02 — § Lavoro</span>
        <span className="hidden md:inline">
          Tipi: Manrope · Source Serif 4 · IBM Plex Mono
        </span>
        <span>— segue a p. 03</span>
      </div>
    </>
  );
}
