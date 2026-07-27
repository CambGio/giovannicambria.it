import Link from "next/link";
import type { Metadata } from "next";
import { CLIENTI } from "@/lib/clienti";
import { CITY, EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, VAT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clienti",
  description:
    "Cinque aziende, con nome e cognome. Cosa c'era prima, cosa ho fatto, dove sono adesso.",
  alternates: { canonical: "/lavoro" },
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
}).replace(/</g, "\\u003c");

export default function Lavoro() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* ── Banda-hero bosco: stessa voce della home (spec DESIGN.md,
          lane "Bosco committed") ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
            <span className="inline-block h-[2px] w-7 bg-carta" />
            <span className="text-carta">№ 03</span>
            <span className="text-carta/80">Clienti</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Cinque aziende, con nome e cognome.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Cosa c&apos;era prima, cosa ho fatto, dove sono adesso.
          </p>
        </div>
      </section>

      {/* ── I clienti: stessa grammatica della timeline di /percorso
          (colonna mono + titolo + testo), su carta ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <h2 className="sr-only">I clienti</h2>
          <ol>
            {CLIENTI.map((c) => (
              <li
                key={c.slug}
                className="grid gap-3 border-t border-bosco/20 py-7 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div className="font-mono text-[13px] uppercase tracking-[0.06em] text-bosco tabular-nums">
                  {c.num}
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-semibold leading-[1.2] tracking-[-0.015em] text-inchiostro md:text-[22px]">
                    {c.nome}
                  </h3>
                  <p className="mt-3 max-w-[680px] text-[17px] leading-[1.55] text-grigio">
                    {c.testo}
                  </p>
                </div>
              </li>
            ))}
            <li className="border-t border-bosco/20" aria-hidden="true" />
          </ol>
        </div>
      </section>

      {/* ── CTA finale in bosco: la campata torna a chiudersi nella
          stessa voce della hero ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-28">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sottotitolo text-carta/80">
              Mezz&apos;ora al telefono per dirti se il tuo caso somiglia a
              uno di questi, anche se poi non lavoriamo insieme.
            </p>
            <Link
              href="/contatto"
              className="inline-flex items-center gap-3 bg-carta px-7 py-4 font-sans text-[15px] font-semibold text-inchiostro tracking-[-0.005em] transition-colors hover:bg-inchiostro hover:text-carta"
            >
              Prenota una call
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 03 · § Clienti</span>
        <span className="hidden md:inline">
          Tipi: Fraunces · Inter · IBM Plex Mono
        </span>
        <span>segue a p. 04</span>
      </div>
    </>
  );
}
