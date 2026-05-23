import Image from "next/image";
import Link from "next/link";
import homeApertura from "@/assets/home-apertura.png";
import { TAGLINE, TAGLINE_SUB } from "@/lib/site";

const FORMATS = [
  {
    n: "01",
    t: "Mappa dell'innovazione",
    s: "Audit strategico one-shot, 1–2 settimane",
    p: "2.500 / 4.500 €",
    href: "/lavoro/mappa",
  },
  {
    n: "02",
    t: "Workshop in-house",
    s: "Una giornata col team operativo",
    p: "2.500 / 4.500 €",
    href: "/lavoro/workshop",
  },
  {
    n: "03",
    t: "Affiancamento",
    s: "Ricorrente, 3–12 mesi, KPI verificabili",
    p: "2.000 / 4.000 € al mese",
    href: "/lavoro/affiancamento",
  },
];

const TIMELINE = [
  { y: "1998", t: "Switch MultiMedia", s: "Co-fondazione agenzia digitale", weight: "faint" as const },
  { y: "2009", t: "Eureweb", s: "Direzione di una nuova agenzia", weight: "faint" as const },
  { y: "2019", t: "Empire S.r.l.", s: "Direttore marketing, poi Innovation Manager", weight: "medium" as const },
  { y: "2024", t: "Studio di consulenza", s: "Riposizionamento sull'innovazione del modello", weight: "now" as const },
];

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────
       * P. 01 — § Apertura
       * Diptych: testo a sinistra, fotografia documentale a destra.
       * Sotto: strip 3-col dei formati commerciali.
       * ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[6fr_5fr] lg:gap-[80px] lg:items-end">
          <div>
            <SectionKicker n="01" label="Tecnologia, decisioni, modello di business" />

            <h1 className="mt-8 font-sans text-[56px] font-extrabold leading-[0.96] tracking-[-0.04em] text-ink md:text-[72px] lg:text-[84px]">
              Ripensare<br />
              il modello<br />
              di business.
            </h1>

            <p className="mt-9 max-w-[520px] font-serif text-[19px] leading-[1.45] md:text-[21px]">
              {TAGLINE}
              <br />
              <span className="text-ink-muted italic">{TAGLINE_SUB}</span>
            </p>

            <p className="mt-6 max-w-[520px] font-serif text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
              Senza hype, senza slide motivazionali. Case study reali, 28 anni
              di operatività digitale, un metodo che funziona per imprese
              italiane fuori dai poli metropolitani.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/lavoro/mappa"
                className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] font-semibold text-paper tracking-[-0.005em] transition-colors hover:bg-accent"
              >
                Prenota la Mappa dell&apos;innovazione
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/blog?rubrica=storia-di"
                className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
              >
                oppure leggi le storie di lavoro
              </Link>
            </div>
          </div>

          <figure className="flex flex-col">
            <div className="relative aspect-[4/5] w-full bg-ink">
              <Image
                src={homeApertura}
                alt="Interno luminoso di un ufficio italiano: due persone al lavoro su laptop, piante, ampie vetrate verso l'esterno."
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                placeholder="blur"
                className="object-cover object-[65%_center]"
              />
            </div>
            <figcaption className="mt-4 flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between md:gap-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                Foto 01 · Interno aziendale · Italia, 2026
              </span>
              <span className="font-serif text-[13px] italic leading-[1.4] text-ink-muted md:max-w-[260px] md:text-right">
                Le imprese che servo hanno spazi così. Persone, luce, niente
                teatro.
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Strip formati: 3 colonne sotto il diptych, fa da "indice" alla pagina */}
        <div className="mt-20 border-t-2 border-ink pt-8 md:mt-24">
          <div className="flex items-baseline justify-between gap-6">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-muted">
              Da questo numero, tre porte d&apos;ingresso
            </div>
            <Link
              href="/lavoro"
              className="hidden font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent md:inline"
            >
              tutte le schede →
            </Link>
          </div>

          <div className="mt-7 grid gap-px bg-rule md:grid-cols-3">
            {FORMATS.map((item) => (
              <Link
                key={item.n}
                href={item.href}
                className="group flex flex-col bg-paper p-6 transition-colors md:p-7"
              >
                <div className="flex items-baseline justify-between font-mono text-[12px] tracking-[0.04em] text-accent tabular-nums">
                  <span>{item.n}</span>
                  <span className="text-ink-muted">scheda</span>
                </div>
                <div className="mt-5 font-sans text-[22px] font-semibold leading-[1.15] tracking-[-0.014em] transition-colors group-hover:text-accent md:text-[24px]">
                  {item.t}
                </div>
                <div className="mt-2 font-serif text-[15px] leading-[1.45] text-ink-muted">
                  {item.s}
                </div>
                <div className="mt-5 font-mono text-[12px] tracking-[0.02em] tabular-nums">
                  {item.p}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageRule label="P. 01 §  Apertura" next="p. 02" />

      {/* ─────────────────────────────────────────────────────────
       * P. 02 — § Tracce di un mestiere (timeline asimmetrica)
       * ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32">
        <SectionKicker n="02" label="Tracce di un mestiere" />

        <h2 className="mt-8 max-w-[920px] font-sans text-[40px] font-bold leading-[1.04] tracking-[-0.03em] text-ink md:text-[60px]">
          Non sono diventato consulente in innovazione un giorno.
          {" "}
          <span className="font-serif italic font-normal text-ink-muted">
            Ho cominciato nel 1998.
          </span>
        </h2>

        {/* Timeline: barra orizzontale con peso variabile per anno.
            Niente griglia 4-col identica: 1998/2009 tenui, 2018 medio,
            2024 dominante. */}
        <div className="mt-16 grid gap-8 md:grid-cols-12 md:gap-x-6">
          {TIMELINE.map((item) => (
            <TimelineCell key={item.y} item={item} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/percorso"
            className="font-serif text-[16px] italic text-ink decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:underline"
          >
            la storia per intero, in pagina Percorso →
          </Link>
        </div>
      </section>

      <PageRule label="P. 02 §  Tracce" next="p. 03" />

      {/* ─────────────────────────────────────────────────────────
       * P. 03 — § Chi servo (riprova sociale asimmetrica)
       * ───────────────────────────────────────────────────────── */}
      <section className="bg-paper-deep">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32">
          <SectionKicker n="03" label="Chi servo" />

          <div className="mt-8 grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-[88px]">
            <div>
              <h2 className="font-sans text-[40px] font-bold leading-[1.02] tracking-[-0.028em] text-ink md:text-[52px]">
                Sei imprese italiane,
                {" "}
                <span className="font-serif italic font-normal text-ink-muted">dal 2019.</span>
              </h2>
              <p className="mt-7 font-serif text-[19px] leading-[1.55] text-ink-muted">
                Più dieci anni come direttore di agenzia, sei come Innovation
                Manager interno. Settori che hanno in comune una cosa: vivono
                di clienti reali, non di hype.
              </p>

              <div className="mt-8">
                <div className="font-sans text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
                  Settori serviti
                </div>
                <ul className="mt-4 flex flex-col font-serif text-[17px]">
                  {[
                    "Assicurazioni",
                    "E-commerce ricambistica e moda",
                    "Noleggio + viaggi",
                    "Manifatturiero tradizionale",
                    "Servizi professionali",
                  ].map((s) => (
                    <li key={s} className="border-b border-rule py-2.5 leading-tight">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Clienti: 2 grandi nominati + 2 piccoli anonimi.
                Asimmetria intenzionale: chi è autorizzato pesa di più. */}
            <div className="space-y-px">
              <ClientCardLarge
                nome="Empire S.r.l."
                settore="Ricambistica auto, e-commerce"
                meta="Venetico (ME) · dal 2019, in corso"
                tag="01"
              />
              <ClientCardLarge
                nome="Autonoleggio Di Paola"
                settore="Noleggio + viaggi"
                meta="Milazzo (ME) · dal 2024, in corso"
                tag="02"
              />
              <div className="grid grid-cols-2 gap-px bg-rule">
                <ClientCardSmall
                  nome="Agenzia di assicurazioni"
                  meta="Area Milazzo · dal 2024"
                />
                <ClientCardSmall
                  nome="E-commerce abbigliamento sportivo"
                  meta="Milano · 2024 / 2025"
                />
              </div>
            </div>
          </div>

          <p className="mt-12 max-w-[760px] font-serif text-[15px] leading-[1.55] italic text-ink-muted">
            Le testimonianze nominative arriveranno con il consenso esplicito
            di ciascun cliente. Per ora, i numeri e i settori: il posizionamento
            si verifica leggendo i fatti, non le frasi a effetto.
          </p>
        </div>
      </section>

      <PageRule label="P. 03 §  Chi servo" next="p. 04" />

      {/* ─────────────────────────────────────────────────────────
       * P. 04 — § Sette domande prima dell'AI (lead magnet)
       * ───────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32">
          <SectionKicker n="04" label="Risorsa" tone="inverse" />

          <div className="mt-8 grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-[96px] lg:items-end">
            <div>
              <h2 className="font-sans text-[44px] font-bold leading-[1.0] tracking-[-0.035em] md:text-[72px]">
                Sette domande
                <br />
                <span className="font-serif italic font-normal text-[#d6d0c4]">
                  prima dell&apos;AI.
                </span>
              </h2>
              <p className="mt-8 max-w-[540px] font-serif text-[19px] leading-[1.55] text-[#d6d0c4]">
                Un PDF di una ventina di pagine. Sette domande da farsi prima
                di scegliere un tool, una piattaforma, un fornitore. Pensato
                per imprenditori che vogliono evitare di pagare due volte lo
                stesso errore.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/risorse/sette-domande"
                  className="inline-flex items-center gap-3 bg-paper px-7 py-4 font-sans text-[15px] font-semibold text-ink tracking-[-0.005em] transition-colors hover:bg-accent hover:text-paper"
                >
                  Scarica il PDF
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8a857d]">
                  In cambio, la tua email. Niente spam.
                </span>
              </div>
            </div>

            <div className="border border-[#322f29] bg-[#1f1c1a] p-8 md:p-10">
              <div className="font-sans text-[11px] uppercase tracking-[0.16em] font-semibold text-[#8a857d]">
                Indice
              </div>
              <ol className="mt-6 flex flex-col">
                {[
                  "Quale problema risolvo davvero, oggi?",
                  "Chi sta già pagando per averlo risolto?",
                  "Quanto vale risolverlo, in euro?",
                  "Che cosa cambia nel mio modello?",
                  "Il mio team sa farlo girare?",
                  "Quanto costa NON farlo?",
                  "Cosa misuro fra 90 giorni?",
                ].map((q, i) => (
                  <li
                    key={q}
                    className="grid grid-cols-[36px_1fr] items-baseline gap-3 border-t border-[#322f29] py-3.5 first:border-t-0 first:pt-0"
                  >
                    <span className="font-mono text-[12px] text-[#8a857d] tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-[16px] leading-[1.4] text-paper">
                      {q}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <PageRule label="P. 04 §  Sette domande" next="p. 05" />

      {/* ─────────────────────────────────────────────────────────
       * P. 05 — § La lettura del lunedì (newsletter)
       * ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32">
        <SectionKicker n="05" label="Newsletter" />

        <div className="mt-8 grid gap-14 lg:grid-cols-[6fr_5fr] lg:gap-[88px]">
          <div>
            <h2 className="font-sans text-[40px] font-bold leading-[1.0] tracking-[-0.03em] md:text-[64px]">
              La lettura
              <br />
              <span className="font-serif italic font-normal">del lunedì.</span>
            </h2>
            <p className="mt-8 max-w-[520px] font-serif text-[19px] leading-[1.55]">
              Ogni lunedì, una lettura sull&apos;innovazione dei modelli di
              business in Italia. I due articoli della settimana precedente,
              più un dietro-le-quinte che non pubblico altrove. Dieci minuti,
              non un secondo di più.
            </p>
          </div>

          <div className="lg:pl-10 lg:border-l lg:border-rule">
            <div className="font-sans text-[11px] uppercase tracking-[0.16em] font-semibold text-ink-muted">
              Cosa ricevi
            </div>
            <ul className="mt-6 flex flex-col">
              {[
                "I 2 articoli della settimana, riassunti in un paragrafo ciascuno.",
                "Un dietro-le-quinte: una decisione presa, un cliente, una lettura.",
                "Niente pubblicità, niente sponsor, niente sales funnel.",
              ].map((line, i) => (
                <li
                  key={line}
                  className="grid grid-cols-[36px_1fr] items-baseline gap-3 border-t border-rule py-4 last:border-b"
                >
                  <span className="font-mono text-[12px] text-accent tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="font-serif text-[17px] leading-[1.45]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] font-semibold text-paper tracking-[-0.005em] transition-colors hover:bg-accent"
              >
                Iscriviti alla newsletter
                <span aria-hidden="true">→</span>
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                Pausa estiva 10 / 24 agosto
              </span>
            </div>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-4 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 05 §  La lettura del lunedì</span>
        <span className="hidden md:inline">
          Tipi: Manrope · Source Serif 4 · IBM Plex Mono
        </span>
        <span>fine numero</span>
      </div>
    </>
  );
}

/* ───────────────────────────── primitives di pagina ─────────────────────── */

function SectionKicker({
  n,
  label,
  tone = "default",
}: {
  n: string;
  label: string;
  tone?: "default" | "inverse";
}) {
  const muted = tone === "inverse" ? "text-[#8a857d]" : "text-ink-muted";
  return (
    <div className="flex items-center gap-3.5 font-sans text-[11px] uppercase tracking-[0.18em] font-semibold">
      <span className="inline-block h-[2px] w-7 bg-accent" />
      <span className="text-accent">№ {n}</span>
      <span className={muted}>{label}</span>
    </div>
  );
}

function PageRule({ label, next }: { label: string; next: string }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-4 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
    >
      <span>{label}</span>
      <span className="hidden md:inline">segue a {next}</span>
    </div>
  );
}

function TimelineCell({
  item,
}: {
  item: { y: string; t: string; s: string; weight: "faint" | "medium" | "now" };
}) {
  if (item.weight === "now") {
    return (
      <div className="md:col-span-6">
        <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent tabular-nums">
          {item.y} / oggi
        </div>
        <div className="mt-4 font-sans text-[36px] font-bold leading-[1.05] tracking-[-0.025em] md:text-[44px]">
          {item.t}
        </div>
        <div className="mt-3 font-serif text-[17px] leading-[1.45] text-ink-muted">
          {item.s}
        </div>
      </div>
    );
  }
  if (item.weight === "medium") {
    return (
      <div className="md:col-span-3">
        <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent tabular-nums">
          {item.y}
        </div>
        <div className="mt-3 font-sans text-[22px] font-semibold leading-[1.1] tracking-[-0.015em]">
          {item.t}
        </div>
        <div className="mt-2 font-serif text-[14px] leading-[1.45] text-ink-muted">
          {item.s}
        </div>
      </div>
    );
  }
  return (
    <div className="md:col-span-3 lg:col-span-2">
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted tabular-nums">
        {item.y}
      </div>
      <div className="mt-3 font-sans text-[16px] font-semibold leading-[1.15] text-ink-muted">
        {item.t}
      </div>
      <div className="mt-1.5 font-serif text-[13px] leading-[1.45] text-ink-muted">
        {item.s}
      </div>
    </div>
  );
}

function ClientCardLarge({
  nome,
  settore,
  meta,
  tag,
}: {
  nome: string;
  settore: string;
  meta: string;
  tag: string;
}) {
  return (
    <div className="border-t border-ink bg-paper p-7 md:p-9">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-accent tabular-nums">
        <span>Cliente {tag}</span>
        <span className="text-ink-muted">nominato</span>
      </div>
      <div className="mt-4 font-sans text-[28px] font-bold leading-[1.1] tracking-[-0.018em] md:text-[32px]">
        {nome}
      </div>
      <div className="mt-2 font-serif text-[17px]">{settore}</div>
      <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
        {meta}
      </div>
    </div>
  );
}

function ClientCardSmall({ nome, meta }: { nome: string; meta: string }) {
  return (
    <div className="bg-paper p-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        Cliente, anonimo
      </div>
      <div className="mt-3 font-sans text-[18px] font-semibold leading-[1.15] tracking-[-0.012em]">
        {nome}
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
        {meta}
      </div>
    </div>
  );
}
