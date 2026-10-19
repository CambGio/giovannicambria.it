import Link from "next/link";
import type { Metadata } from "next";
import { EMAIL, SITE_NAME } from "@/lib/site";

/**
 * Home page dei progetti Google Cloud di Giovanni (app «Giovanni Cambria»):
 * Google la chiede pubblica, sul dominio verificato, con la descrizione degli
 * strumenti e il link all'informativa (verifica del brand, 2026-10-19).
 * Se cambia uno strumento o i dati che legge, cambia anche /privacy.
 */
export const metadata: Metadata = {
  title: "Strumenti",
  description:
    "Gli strumenti interni con cui Giovanni Cambria legge i dati Google Ads, Search Console e Analytics dei clienti.",
  alternates: { canonical: "/strumenti" },
};

const STRUMENTI = [
  {
    nome: "Google Ads",
    testo:
      "Legge gli account Google Ads dei clienti che me ne hanno dato accesso: campagne, budget, annunci, keyword, risultati e conversioni. Con il Keyword Planner stimo i volumi di ricerca e i costi delle campagne nuove. Le modifiche alle campagne le applico solo su incarico del cliente.",
  },
  {
    nome: "Search Console e Google Analytics",
    testo:
      "Legge, senza modificare nulla, i dati di Search Console e Google Analytics dei siti dei clienti: ricerche, pagine, clic e visite. Mi servono per gli audit e per i report.",
  },
];

export default function Strumenti() {
  return (
    <section className="bg-carta">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
        <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-grigio">Strumenti</span>
        </div>

        <h1 className="max-w-[880px] font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-inchiostro md:text-[56px]">
          Gli strumenti con cui leggo i dati Google dei clienti.
        </h1>

        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.6] text-inchiostro">
          Per la consulenza uso due strumenti interni che leggono i dati
          Google dei clienti attraverso le API ufficiali. Li ho costruiti io e
          li uso solo io, dal mio computer, con il mio account Google. Non sono
          un servizio aperto ad altri e non prevedono registrazioni.
        </p>

        <div className="mt-12 grid gap-px border-t border-bosco bg-inchiostro/10 md:grid-cols-2">
          {STRUMENTI.map((s) => (
            <div key={s.nome} className="bg-carta p-7">
              <h2 className="font-sans text-[20px] font-semibold tracking-[-0.01em] text-inchiostro">
                {s.nome}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-grigio">
                {s.testo}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-[640px] text-[17px] leading-[1.6] text-inchiostro">
          Come tratto questi dati, dove restano e con chi li condivido lo
          spiega l&apos;
          <Link href="/privacy" className="text-bosco underline underline-offset-4">
            informativa privacy
          </Link>
          .
        </p>

        <p className="mt-5 max-w-[640px] text-[17px] leading-[1.6] text-grigio">
          Per domande: {SITE_NAME},{" "}
          <a href={`mailto:${EMAIL}`} className="text-bosco underline underline-offset-4">
            {EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
