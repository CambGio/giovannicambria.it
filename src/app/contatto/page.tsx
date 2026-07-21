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
      {/* ── Banda-hero bosco: stessa voce della home (spec DESIGN.md,
          lane "Bosco committed") ── */}
      <section className="bg-bosco">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32 lg:py-40">
          <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
            <span className="inline-block h-[2px] w-7 bg-carta" />
            <span className="text-carta">№ 04</span>
            <span className="text-carta/80">Contatto</span>
          </div>

          <h1 className="max-w-[1080px] text-mega font-black text-carta">
            Raccontami il tuo caso.
          </h1>

          <p className="mt-10 max-w-[640px] text-sottotitolo font-light text-carta/80">
            Raccontami il tuo processo: cosa fai oggi, quanti dati lavori, dove
            la macchina si inceppa. Due o tre righe bastano, non serve un brief
            perfetto. Rispondo entro 48 ore lavorative; se ha senso, ci sentiamo
            per una call.
          </p>
        </div>
      </section>

      {/* ── Recapiti su carta ── */}
      <section className="bg-carta">
        <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
          <p className="max-w-[560px] text-[18px] leading-[1.5] text-inchiostro">
            Scrivimi o chiamami e fissiamo una call di 30 minuti, senza
            impegno: mi racconti il tuo caso, ti dico se e come posso
            aiutarti.
          </p>

          <div className="mt-10 grid gap-px border-t border-inchiostro bg-inchiostro/10 md:grid-cols-3">
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
