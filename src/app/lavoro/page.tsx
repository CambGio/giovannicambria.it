import Link from "next/link";
import type { Metadata } from "next";
import { SERVIZI } from "@/lib/servizi";
import { ServizioScheda } from "@/components/site/ServizioScheda";
import { CITY, EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, VAT } from "@/lib/site";

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
}).replace(/</g, "\\u003c");

export default function Lavoro() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-bosco">№ 03</span>
          <span className="text-grigio">Lavoro</span>
        </div>

        <h1 className="max-w-[900px] text-display font-extrabold text-inchiostro">
          Tre modi di iniziare.
        </h1>

        <p className="mt-8 max-w-[620px] text-sottotitolo text-grigio">
          Lavoro con PMI italiane che vogliono innovare il modello di business
          prima del tool. Tre porte d&apos;ingresso, per momenti diversi del
          bisogno.
        </p>
      </section>

      {SERVIZI.map((s) => (
        <ServizioScheda key={s.slug} slug={s.slug} />
      ))}

      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
        <div className="flex flex-col items-start gap-6 border-t-2 border-inchiostro pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-sottotitolo text-inchiostro">
            Non sai quale scegliere?
          </p>
          <Link
            href="/contatto"
            className="inline-flex items-center gap-3 bg-inchiostro px-7 py-4 font-sans text-[15px] font-semibold text-carta tracking-[-0.005em] transition-colors hover:bg-bosco"
          >
            Scrivimi
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 03 · § Lavoro</span>
        <span className="hidden md:inline">
          Tipi: Fraunces · Inter · IBM Plex Mono
        </span>
        <span>segue a p. 04</span>
      </div>
    </>
  );
}
