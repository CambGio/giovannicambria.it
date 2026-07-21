import Link from "next/link";
import type { Metadata } from "next";
import { SERVIZI } from "@/lib/servizi";
import { ServizioScheda } from "@/components/site/ServizioScheda";
import { CITY, EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL, VAT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lavoro",
  description:
    "Un percorso in tre passi per adottare l'AI nei processi: Mappa dell'adozione, Workshop pratico, Affiancamento. Niente hype, solo dove serve.",
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
            <span className="text-carta/80">Lavoro</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Un percorso, tre passi.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Si parte dai processi, non dagli strumenti: guardiamo insieme dove
            l&apos;AI cambia davvero il vostro lavoro, e dove no. La si adotta
            solo lì. Poi si misura, per sapere se sta funzionando, non solo se
            è partita.
          </p>

          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-carta/70">
            È un percorso modulare, con un solo punto fisso: la Mappa
            dell&apos;adozione. Da lì, se ha senso, si aggiungono il Workshop
            pratico e l&apos;Affiancamento: ogni passo ha un output tangibile,
            non solo slide. Non si passa al passo successivo senza una base
            solida.
          </p>
        </div>
      </section>

      {SERVIZI.map((s) => (
        <ServizioScheda key={s.slug} slug={s.slug} />
      ))}

      {/* ── CTA finale in bosco: la campata torna a chiudersi nella
          stessa voce della hero ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-28">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sottotitolo text-carta/80">
              Non sai quale scegliere?
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
        <span>P. 03 · § Lavoro</span>
        <span className="hidden md:inline">
          Tipi: Fraunces · Inter · IBM Plex Mono
        </span>
        <span>segue a p. 04</span>
      </div>
    </>
  );
}
