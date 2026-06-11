import Link from "next/link";
import type { Metadata } from "next";
import { SERVIZI } from "@/lib/servizi";
import {
  CITY,
  EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  VAT,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Lavoro",
  description:
    "Tre modi di iniziare: la Mappa dell'innovazione, il Workshop in-house, l'Affiancamento. Consulenza per PMI italiane.",
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: `${SITE_URL}/lavoro`,
  email: EMAIL,
  vatID: VAT,
  address: {
    "@type": "PostalAddress",
    addressLocality: CITY,
    addressCountry: "IT",
  },
  areaServed: { "@type": "Country", name: "Italia" },
  founder: { "@type": "Person", name: SITE_NAME },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servizi di consulenza",
    itemListElement: SERVIZI.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.titolo,
        description: s.promessa,
        url: `${SITE_URL}${s.href}`,
      },
      priceSpecification: {
        "@type": s.prezzoUnita ? "UnitPriceSpecification" : "PriceSpecification",
        minPrice: s.prezzoMin,
        priceCurrency: "EUR",
        ...(s.prezzoUnita ? { unitText: s.prezzoUnita } : {}),
      },
    })),
  },
}).replace(/</g, "\\u003c");

export default function Lavoro() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 03</span>
          <span className="text-ink-muted">Lavoro</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          Tre modi di iniziare.
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          Lavoro con PMI italiane che vogliono innovare il modello di business
          prima del tool. Tre porte d&apos;ingresso, per momenti diversi del
          bisogno.
        </p>

        <div className="mt-14 grid gap-px bg-rule md:grid-cols-3">
          {SERVIZI.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex flex-col bg-paper p-7 transition-colors md:p-8"
            >
              <div className="flex items-baseline justify-between font-mono text-[12px] tracking-[0.04em] text-accent tabular-nums">
                <span>{s.n}</span>
                <span className="text-ink-muted">scheda</span>
              </div>
              <h2 className="mt-5 font-sans text-[24px] font-semibold leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-accent">
                {s.titolo}
              </h2>
              <p className="mt-3 font-serif text-[16px] leading-[1.5] text-ink-muted">
                {s.promessa}
              </p>
              <div className="mt-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  Per chi è
                </div>
                <p className="mt-1.5 font-serif text-[15px] leading-[1.5] text-ink">
                  {s.perChi}
                </p>
              </div>
              <div className="mt-6 grid gap-1.5 font-mono text-[12px] uppercase tracking-[0.04em] text-ink-muted tabular-nums">
                <span>{s.tempi}</span>
                <span>{s.prezzo}</span>
              </div>
              <div className="mt-auto pt-6 font-serif text-[15px] italic text-ink decoration-accent decoration-2 underline-offset-[5px] transition-colors group-hover:text-accent group-hover:underline">
                Vedi scheda →
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 border-t-2 border-ink pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-[20px] leading-[1.4] text-ink">
            Non sai quale scegliere?
          </p>
          <Link
            href="/contatto"
            className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-sans text-[15px] font-semibold text-paper tracking-[-0.005em] transition-colors hover:bg-accent"
          >
            Scrivimi
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 03 · § Lavoro</span>
        <span className="hidden md:inline">
          Tipi: Manrope · Source Serif 4 · IBM Plex Mono
        </span>
        <span>segue a p. 04</span>
      </div>
    </>
  );
}
