import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatto",
  description:
    "Raccontami il tuo caso per mail, telefono o LinkedIn: bastano poche righe. Rispondo entro 48 ore lavorative. studio@giovannicambria.it · +39 328 446 0482.",
};

const RECAPITI = [
  { label: "Email", value: "studio@giovannicambria.it", href: "mailto:studio@giovannicambria.it" },
  { label: "Telefono", value: "+39 328 446 0482", href: "tel:+393284460482" },
  { label: "LinkedIn", value: "/in/giovannicambria", href: "https://www.linkedin.com/in/giovannicambria/" },
];

export default function Contatto() {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-28">
        <div className="mb-7 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-bosco">№ 04</span>
          <span className="text-grigio">Contatto</span>
        </div>

        <h1 className="max-w-[900px] text-display font-extrabold text-inchiostro">
          Raccontami il tuo caso.
        </h1>

        <p className="mt-8 max-w-[620px] text-sottotitolo text-grigio">
          Raccontami il tuo processo: cosa fai oggi, quanti dati lavori, dove
          la macchina si inceppa. Due o tre righe bastano, non serve un brief
          perfetto. Rispondo entro 48 ore lavorative; se ha senso, ci sentiamo
          per una call.
        </p>

        <div className="mt-14 grid gap-px border-t border-inchiostro bg-inchiostro/10 md:grid-cols-3">
          {RECAPITI.map((r) => (
            <a
              key={r.label}
              href={r.href}
              className="group bg-carta p-7 transition-colors hover:bg-grigio/5"
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-grigio">{r.label}</div>
              <div className="mt-3 font-sans text-[18px] font-semibold tracking-[-0.01em] transition-colors group-hover:text-bosco">
                {r.value}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-9">
          <Link
            href="/lavoro"
            className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
          >
            ← Vedi prima i tre modi
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-inchiostro/10 px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-grigio"
      >
        <span>P. 04 · § Contatto</span>
        <span className="hidden md:inline">studio@giovannicambria.it · Milazzo</span>
        <span>fine</span>
      </div>
    </>
  );
}
