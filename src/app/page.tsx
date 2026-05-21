import Link from "next/link";
import { TAGLINE, TAGLINE_SUB } from "@/lib/site";

const FORMATS = [
  {
    n: "01",
    t: "Mappa dell'innovazione",
    s: "Audit strategico one-shot · 1–2 settimane",
    p: "2.500 – 4.500 €",
    href: "/lavoro/mappa",
  },
  {
    n: "02",
    t: "Workshop in-house",
    s: "Una giornata con il team operativo",
    p: "2.500 – 4.500 €",
    href: "/lavoro/workshop",
  },
  {
    n: "03",
    t: "Affiancamento",
    s: "Ricorrente, 3–12 mesi · KPI verificabili",
    p: "2.000 – 4.000 € / mese",
    href: "/lavoro/affiancamento",
  },
];

const TIMELINE = [
  { y: "1998", t: "Switch MultiMedia", s: "Co-fondazione agenzia digitale" },
  { y: "2009", t: "Eureweb", s: "Direzione di una nuova agenzia" },
  { y: "2018", t: "Innovation Manager", s: "Empire S.r.l. — PMI siciliana" },
  { y: "2024", t: "Studio di consulenza", s: "Riposizionamento sull'innovazione del modello" },
];

const CLIENTI = [
  {
    nome: "Empire S.r.l.",
    settore: "Ricambistica auto · e-commerce",
    luogo: "Venetico (ME)",
    arco: "dal 2019, in corso",
  },
  {
    nome: "Autonoleggio Di Paola",
    settore: "Noleggio + viaggi",
    luogo: "Milazzo (ME)",
    arco: "dal 2024, in corso",
  },
  {
    nome: "Agenzia di assicurazioni",
    settore: "Brokeraggio assicurativo",
    luogo: "Area Milazzo (ME)",
    arco: "dal 2024, in corso",
    anonimo: true,
  },
  {
    nome: "E-commerce abbigliamento sportivo",
    settore: "Replatforming Shopify",
    luogo: "Milano",
    arco: "2024 – 2025",
    anonimo: true,
  },
];

const SETTORI = [
  "Assicurazioni",
  "E-commerce",
  "Noleggio",
  "Manifatturiero tradizionale",
  "Servizi professionali",
];

export default function Home() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────── */}
      {/* P. 01 — § Apertura                                       */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-[88px]">
          <div>
            <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
              <span className="inline-block h-[2px] w-7 bg-accent" />
              <span className="text-accent">№ 01</span>
              <span className="text-ink-muted">
                — Tecnologia, decisioni, modello di business
              </span>
            </div>

            <h1
              className="font-display font-normal m-0 text-[56px] leading-[0.98] tracking-[-0.035em] md:text-[80px] lg:text-[92px]"
              style={{ fontVariationSettings: '"opsz" 96' }}
            >
              Ripensare
              <br />
              il modello
              <br />
              di business.
            </h1>

            <p className="mt-8 max-w-[560px] font-serif text-[22px] leading-[1.35] md:text-[24px]">
              {TAGLINE}
              <br />
              <span className="text-ink-muted italic">{TAGLINE_SUB}</span>
            </p>

            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] text-ink-muted md:text-[18px]">
              Senza hype, senza slide motivazionali. Case study reali, 28 anni
              di operatività digitale, un metodo che funziona per imprese
              italiane fuori dai poli metropolitani.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/lavoro/mappa"
                className="inline-flex items-center gap-3.5 bg-ink px-6 py-4 font-sans text-[15px] font-medium text-paper tracking-[0.02em] transition-colors hover:bg-accent"
              >
                Prenota la Mappa dell&apos;innovazione
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/blog?rubrica=storia-di"
                className="border-b border-accent pb-0.5 font-serif text-[16px] italic text-ink transition-colors hover:text-accent"
              >
                oppure leggi le storie di lavoro
              </Link>
            </div>
          </div>

          <aside className="border-t border-rule pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-ink-muted">
              Da questo numero
            </div>
            {FORMATS.map((item) => (
              <Link
                key={item.n}
                href={item.href}
                className="group grid grid-cols-[40px_1fr] items-baseline gap-5 border-t border-ink py-5 mt-5 first:mt-5 transition-colors"
              >
                <div className="font-mono text-[13px] font-medium tracking-[0.04em] text-accent tabular-nums">
                  {item.n}
                </div>
                <div>
                  <div className="text-[22px] font-medium tracking-[-0.01em] transition-colors group-hover:text-accent">
                    {item.t}
                  </div>
                  <div className="mt-1 font-sans text-[13px] text-ink-muted">
                    {item.s}
                  </div>
                  <div className="mt-2 font-mono text-[13px] tracking-[0.02em] tabular-nums">
                    {item.p}
                  </div>
                </div>
              </Link>
            ))}
            <div className="border-t border-ink" aria-hidden="true" />
          </aside>
        </div>
      </section>

      <PageRule label="P. 01 — § Apertura" next="p. 02" />

      {/* ─────────────────────────────────────────────────────── */}
      {/* P. 02 — § Tracce (timeline)                              */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-24">
        <SectionKicker n="02" label="Tracce di un mestiere" />

        <h2
          className="mt-6 max-w-[920px] font-display font-normal text-[40px] leading-[1.05] tracking-[-0.025em] md:text-[56px]"
          style={{ fontVariationSettings: '"opsz" 72' }}
        >
          Non sono diventato consulente in innovazione un giorno.
          <span className="italic text-ink-muted"> Ho cominciato nel 1998.</span>
        </h2>

        <div className="mt-14 grid gap-px bg-rule md:grid-cols-4">
          {TIMELINE.map((item) => (
            <div key={item.y} className="bg-paper p-6 md:p-7">
              <div className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent tabular-nums">
                {item.y}
              </div>
              <div className="mt-3 font-display text-[26px] leading-[1.1] tracking-[-0.015em]">
                {item.t}
              </div>
              <div className="mt-2 font-serif text-[15px] leading-[1.45] text-ink-muted">
                {item.s}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/approccio"
            className="border-b border-accent pb-0.5 font-serif text-[16px] italic text-ink transition-colors hover:text-accent"
          >
            la storia per intero, in pagina Approccio →
          </Link>
        </div>
      </section>

      <PageRule label="P. 02 — § Tracce" next="p. 03" />

      {/* ─────────────────────────────────────────────────────── */}
      {/* P. 03 — § Chi servo (riprova sociale)                    */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-24">
        <SectionKicker n="03" label="Chi servo" />

        <div className="mt-6 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-[88px]">
          <div>
            <h2
              className="font-display font-normal text-[40px] leading-[1.04] tracking-[-0.025em] md:text-[52px]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Sei imprese italiane, dal 2019.
            </h2>
            <p className="mt-6 font-serif text-[19px] leading-[1.55] text-ink-muted">
              Più dieci anni come direttore di agenzia e sei come Innovation
              Manager interno. Settori che hanno in comune una cosa: vivono di
              clienti reali, non di hype.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {SETTORI.map((s) => (
                <span
                  key={s}
                  className="border border-rule px-3 py-1.5 font-sans text-[12px] uppercase tracking-[0.1em] text-ink-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-px bg-rule sm:grid-cols-2">
            {CLIENTI.map((c) => (
              <div
                key={c.nome}
                className="bg-paper p-6 md:p-7"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {c.anonimo ? "Cliente (anonimo)" : "Cliente"}
                </div>
                <div className="mt-3 font-display text-[24px] leading-[1.12] tracking-[-0.012em]">
                  {c.nome}
                </div>
                <div className="mt-2 font-serif text-[15px] leading-[1.5]">
                  {c.settore}
                </div>
                <div className="mt-3 flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted tabular-nums">
                  <span>{c.luogo}</span>
                  <span>{c.arco}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-[760px] font-serif text-[15px] leading-[1.55] italic text-ink-muted">
          Le testimonianze nominative arriveranno con il consenso esplicito di
          ciascun cliente. Per ora, i numeri e i settori — perché il
          posizionamento si verifica leggendo i fatti, non le frasi a effetto.
        </p>
      </section>

      <PageRule label="P. 03 — § Chi servo" next="p. 04" />

      {/* ─────────────────────────────────────────────────────── */}
      {/* P. 04 — § Sette domande (lead magnet)                    */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-24">
          <SectionKicker n="04" label="Risorsa" tone="inverse" />

          <div className="mt-6 grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-[88px] lg:items-center">
            <div>
              <h2
                className="font-display font-normal text-[40px] leading-[1.04] tracking-[-0.025em] md:text-[60px]"
                style={{ fontVariationSettings: '"opsz" 72' }}
              >
                Sette domande
                <br />
                <span className="italic text-[#d9d4c8]">prima dell&apos;AI.</span>
              </h2>
              <p className="mt-7 max-w-[540px] font-serif text-[19px] leading-[1.55] text-[#d9d4c8]">
                Un PDF di una ventina di pagine. Sette domande da farsi prima
                di scegliere un tool, una piattaforma o un fornitore. Pensato
                per imprenditori italiani che vogliono evitare di pagare due
                volte lo stesso errore.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/risorse/sette-domande"
                  className="inline-flex items-center gap-3.5 bg-paper px-6 py-4 font-sans text-[15px] font-medium text-ink tracking-[0.02em] transition-colors hover:bg-accent hover:text-paper"
                >
                  Scarica il PDF
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#9a9690]">
                  In cambio, la tua email. Niente spam.
                </span>
              </div>
            </div>

            <div className="border border-[#322F2A] p-7 md:p-9">
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#9a9690]">
                Indice
              </div>
              <ol className="mt-5 flex flex-col gap-3 font-serif text-[16px] leading-[1.4]">
                {[
                  "Quale problema risolvo davvero, oggi?",
                  "Chi sta già pagando per averlo risolto?",
                  "Quanto vale risolverlo, in euro?",
                  "Che cosa cambia nel mio modello?",
                  "Il mio team sa farlo girare?",
                  "Quanto costa NON farlo?",
                  "Cosa misuro fra 90 giorni?",
                ].map((q, i) => (
                  <li key={q} className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-[#9a9690] tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="text-paper">{q}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <PageRule label="P. 04 — § Sette domande" next="p. 05" />

      {/* ─────────────────────────────────────────────────────── */}
      {/* P. 05 — § La lettura del lunedì (newsletter)             */}
      {/* ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-16 md:py-24">
        <SectionKicker n="05" label="Newsletter" />

        <div className="mt-6 grid gap-10 lg:grid-cols-[6fr_6fr] lg:gap-[88px]">
          <div>
            <h2
              className="font-display font-normal text-[40px] leading-[1.04] tracking-[-0.025em] md:text-[56px]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              La lettura
              <br />
              <span className="italic">del lunedì.</span>
            </h2>
            <p className="mt-6 font-serif text-[19px] leading-[1.55]">
              Ogni lunedì, una lettura sull&apos;innovazione dei modelli di
              business in Italia. I due articoli della settimana precedente,
              più un dietro-le-quinte che non pubblico altrove. Dieci minuti,
              non un secondo di più.
            </p>
          </div>

          <div className="lg:pl-6 lg:border-l lg:border-rule">
            <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-muted">
              Cosa ricevi
            </div>
            <ul className="mt-5 flex flex-col gap-4 font-serif text-[17px] leading-[1.5]">
              <li className="grid grid-cols-[28px_1fr] gap-3">
                <span className="font-mono text-[12px] text-accent tabular-nums pt-1">01</span>
                <span>I 2 articoli della settimana, riassunti in un paragrafo ciascuno.</span>
              </li>
              <li className="grid grid-cols-[28px_1fr] gap-3">
                <span className="font-mono text-[12px] text-accent tabular-nums pt-1">02</span>
                <span>Un dietro-le-quinte: una decisione presa, un cliente, una lettura.</span>
              </li>
              <li className="grid grid-cols-[28px_1fr] gap-3">
                <span className="font-mono text-[12px] text-accent tabular-nums pt-1">03</span>
                <span>Niente pubblicità, niente sponsor, niente sales funnel.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-3.5 bg-ink px-6 py-4 font-sans text-[15px] font-medium text-paper tracking-[0.02em] transition-colors hover:bg-accent"
              >
                Iscriviti alla newsletter
                <span aria-hidden="true">→</span>
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                Pausa estiva 10–24 agosto
              </span>
            </div>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 05 — § La lettura del lunedì</span>
        <span className="hidden md:inline">
          Tipi: Bodoni Moda · Source Serif 4 · IBM Plex
        </span>
        <span>— fine numero</span>
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
  const muted = tone === "inverse" ? "text-[#9a9690]" : "text-ink-muted";
  return (
    <div className="flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
      <span className="inline-block h-[2px] w-7 bg-accent" />
      <span className="text-accent">№ {n}</span>
      <span className={muted}>— {label}</span>
    </div>
  );
}

function PageRule({ label, next }: { label: string; next: string }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
    >
      <span>{label}</span>
      <span className="hidden md:inline">— segue a {next}</span>
    </div>
  );
}
