import Link from "next/link";
import type { ReactNode } from "react";
import { getServizio, type Servizio, type ServizioSlug } from "@/lib/servizi";
import { CITY, SITE_NAME, SITE_URL } from "@/lib/site";

function jsonLdServizio(s: Servizio): string {
  const priceSpecification = {
    "@type": s.prezzoUnita ? "UnitPriceSpecification" : "PriceSpecification",
    minPrice: s.prezzoMin,
    priceCurrency: "EUR",
    ...(s.prezzoUnita ? { unitText: s.prezzoUnita } : {}),
  };
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.titolo,
    description: s.promessa,
    url: `${SITE_URL}${s.href}`,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY,
        addressCountry: "IT",
      },
    },
    areaServed: { "@type": "Country", name: "Italia" },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification,
    },
  }).replace(/</g, "\\u003c");
}

function Etichetta({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-muted">
      {children}
    </h2>
  );
}

function CtaContatto({ slug }: { slug: ServizioSlug }) {
  return (
    <Link
      href={`/contatto?format=${slug}`}
      className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] font-semibold text-paper tracking-[-0.005em] transition-colors hover:bg-accent"
    >
      Raccontami il tuo caso
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export function ServizioScheda({ slug }: { slug: ServizioSlug }) {
  const s = getServizio(slug);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdServizio(s) }}
      />

      {/* Hero locale */}
      <section className="mx-auto max-w-[1280px] px-6 pb-12 pt-16 md:px-16 md:pt-24 lg:pt-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">Lavoro</span>
          <span className="text-ink-muted">· scheda {s.n}</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          {s.titolo}
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          {s.promessa}
        </p>

        <dl className="mt-12 grid gap-px border-t border-ink bg-rule md:grid-cols-3">
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              Per chi è
            </dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">
              {s.perChi}
            </dd>
          </div>
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              Tempi
            </dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">
              {s.tempi}
            </dd>
          </div>
          <div className="bg-paper p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
              Investimento
            </dt>
            <dd className="mt-3 font-serif text-[17px] leading-[1.5]">
              {s.prezzo}
            </dd>
            {s.prezzoDettaglio ? (
              <dd className="mt-2 font-serif text-[14px] leading-[1.5] text-ink-muted">
                {s.prezzoDettaglio}
              </dd>
            ) : null}
          </div>
        </dl>

        <div className="mt-10">
          <CtaContatto slug={s.slug} />
        </div>
      </section>

      {/* Per chi è */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-ink pt-7">
          <Etichetta>Per chi è</Etichetta>
          <div className="mt-6 grid gap-px border-t border-rule bg-rule md:grid-cols-2">
            {s.perChiDettaglio.map((c) => (
              <div key={c.nome} className="bg-paper py-6 md:pr-10">
                <h3 className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-ink">
                  {c.nome}
                </h3>
                <p className="mt-3 max-w-[520px] font-serif text-[16px] leading-[1.6] text-ink-muted">
                  {c.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa ricevi */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-ink pt-7">
          <Etichetta>Cosa ricevi</Etichetta>
          <ul className="mt-6 max-w-[760px] divide-y divide-rule border-y border-rule">
            {s.cosaRicevi.map((voce) => (
              <li key={voce} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] inline-block h-[2px] w-5 shrink-0 bg-accent"
                />
                <span className="font-serif text-[17px] leading-[1.55] text-ink">
                  {voce}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Come funziona */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-ink pt-7">
          <Etichetta>Come funziona</Etichetta>
          <ol className="mt-6 max-w-[760px]">
            {s.comeFunziona.map((fase, i) => (
              <li
                key={fase.nome}
                className="flex gap-6 border-t border-rule py-5 first:border-t-0"
              >
                <span className="pt-[3px] font-mono text-[13px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-sans text-[17px] font-semibold tracking-[-0.01em] text-ink">
                      {fase.nome}
                    </h3>
                    {fase.tempo ? (
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
                        {fase.tempo}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 font-serif text-[16px] leading-[1.6] text-ink-muted">
                    {fase.descrizione}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sezioni narrative specifiche del format */}
      {s.sezioni?.map((sez) => (
        <section
          key={sez.titolo}
          className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16"
        >
          <div className="border-t-2 border-ink pt-7">
            <Etichetta>{sez.titolo}</Etichetta>
            {sez.paragrafi.map((p) => (
              <p
                key={p}
                className="mt-5 max-w-[680px] font-serif text-[17px] leading-[1.6] text-ink"
              >
                {p}
              </p>
            ))}
            {sez.link ? (
              <p className="mt-5">
                <Link
                  href={sez.link.href}
                  className="font-sans text-[15px] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  {sez.link.label} →
                </Link>
              </p>
            ) : null}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-ink pt-7">
          <Etichetta>Domande frequenti</Etichetta>
          <dl className="mt-6 max-w-[760px]">
            {s.faq.map((f) => (
              <div
                key={f.domanda}
                className="border-t border-rule py-5 first:border-t-0"
              >
                <dt className="font-sans text-[17px] font-semibold tracking-[-0.01em] text-ink">
                  {f.domanda}
                </dt>
                <dd className="mt-2 font-serif text-[16px] leading-[1.6] text-ink-muted">
                  {f.risposta}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA finale */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
        <div className="border-t-2 border-ink pt-7">
          <p className="max-w-[620px] font-serif text-[18px] leading-[1.5] text-ink-muted">
            Scrivimi due righe sul tuo caso: rispondo entro 48 ore lavorative.
          </p>
          <div className="mt-6">
            <CtaContatto slug={s.slug} />
          </div>
          <div className="mt-9">
            <Link
              href="/lavoro"
              className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
            >
              ← Tutte le schede
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>
          P. {s.pagina} · § {s.titoloBreve}
        </span>
        <span className="hidden md:inline">
          Tipi: Manrope · Source Serif 4 · IBM Plex Mono
        </span>
        <span>scheda servizio</span>
      </div>
    </>
  );
}
