import Link from "next/link";
import type { ReactNode } from "react";
import { getServizio, type Servizio, type ServizioSlug } from "@/lib/servizi";
import { CITY, SITE_NAME, SITE_URL } from "@/lib/site";

function jsonLdServizio(s: Servizio): string {
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
  }).replace(/</g, "\\u003c");
}

function Etichetta({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-etichetta font-mono uppercase text-bosco">
      {children}
    </h3>
  );
}

function CtaContatto({ slug }: { slug: ServizioSlug }) {
  return (
    <Link
      href={`/contatto?format=${slug}`}
      className="inline-flex items-center gap-3 bg-inchiostro px-7 py-4 font-sans text-[15px] font-semibold text-carta tracking-[-0.005em] transition-colors hover:bg-bosco"
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
      <section
        id={s.slug}
        className="mx-auto max-w-[1280px] px-6 pb-12 pt-16 md:px-16 md:pt-24 lg:pt-28"
      >
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-bosco">Lavoro</span>
          <span className="text-grigio">· scheda {s.n}</span>
        </div>

        <h2 className="max-w-[900px] text-titolo font-extrabold text-inchiostro">
          {s.titolo}
        </h2>

        <p className="mt-8 max-w-[620px] text-sottotitolo text-grigio">
          {s.promessa}
        </p>

        <dl className="mt-12 grid gap-px border-t border-inchiostro bg-inchiostro/10 md:grid-cols-2">
          <div className="bg-carta p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-grigio">
              Per chi è
            </dt>
            <dd className="mt-3 text-[17px] leading-[1.5]">
              {s.perChi}
            </dd>
          </div>
          <div className="bg-carta p-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-grigio">
              Tempi
            </dt>
            <dd className="mt-3 text-[17px] leading-[1.5]">
              {s.tempi}
            </dd>
          </div>
        </dl>

        <div className="mt-10">
          <CtaContatto slug={s.slug} />
        </div>
      </section>

      {/* Per chi è */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-bosco pt-7">
          <Etichetta>Per chi è</Etichetta>
          <div className="mt-6 grid gap-px border-t border-inchiostro/10 bg-inchiostro/10 md:grid-cols-2">
            {s.perChiDettaglio.map((c) => (
              <div key={c.nome} className="bg-carta py-6 md:pr-10">
                <h4 className="font-sans text-[18px] font-semibold tracking-[-0.01em] text-inchiostro">
                  {c.nome}
                </h4>
                <p className="mt-3 max-w-[520px] text-[16px] leading-[1.6] text-grigio">
                  {c.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa ricevi */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-bosco pt-7">
          <Etichetta>Cosa ricevi</Etichetta>
          <ul className="mt-6 max-w-[760px] divide-y divide-inchiostro/10 border-y border-inchiostro/10">
            {s.cosaRicevi.map((voce) => (
              <li key={voce} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] inline-block h-[2px] w-5 shrink-0 bg-bosco"
                />
                <span className="text-[17px] leading-[1.55] text-inchiostro">
                  {voce}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Come funziona */}
      <section className="mx-auto max-w-[1280px] px-6 pb-14 md:px-16">
        <div className="border-t-2 border-bosco pt-7">
          <Etichetta>Come funziona</Etichetta>
          <ol className="mt-6 max-w-[760px]">
            {s.comeFunziona.map((fase, i) => (
              <li
                key={fase.nome}
                className="flex gap-6 border-t border-inchiostro/10 py-5 first:border-t-0"
              >
                <span className="pt-[3px] font-mono text-[13px] text-bosco tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="font-sans text-[17px] font-semibold tracking-[-0.01em] text-inchiostro">
                      {fase.nome}
                    </h4>
                    {fase.tempo ? (
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-grigio">
                        {fase.tempo}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-[16px] leading-[1.6] text-grigio">
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
          <div className="border-t-2 border-bosco pt-7">
            <Etichetta>{sez.titolo}</Etichetta>
            {sez.paragrafi.map((p) => (
              <p
                key={p}
                className="mt-5 max-w-[680px] text-[17px] leading-[1.6] text-inchiostro"
              >
                {p}
              </p>
            ))}
            {sez.link ? (
              <p className="mt-5">
                <Link
                  href={sez.link.href}
                  className="font-sans text-[15px] font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
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
        <div className="border-t-2 border-bosco pt-7">
          <Etichetta>Domande frequenti</Etichetta>
          <dl className="mt-6 max-w-[760px]">
            {s.faq.map((f) => (
              <div
                key={f.domanda}
                className="border-t border-inchiostro/10 py-5 first:border-t-0"
              >
                <dt className="font-sans text-[17px] font-semibold tracking-[-0.01em] text-inchiostro">
                  {f.domanda}
                </dt>
                <dd className="mt-2 text-[16px] leading-[1.6] text-grigio">
                  {f.risposta}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA finale */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
        <div className="border-t-2 border-bosco pt-7">
          <p className="max-w-[620px] text-[18px] leading-[1.5] text-grigio">
            Scrivimi due righe sul tuo caso: rispondo entro 48 ore lavorative.
          </p>
          <div className="mt-6">
            <CtaContatto slug={s.slug} />
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>
          P. {s.pagina} · § {s.titoloBreve}
        </span>
        <span className="hidden md:inline">
          Tipi: Fraunces · Inter · IBM Plex Mono
        </span>
        <span>scheda servizio</span>
      </div>
    </>
  );
}
