import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatto — Giovanni Cambria",
  description:
    "Raccontami il tuo caso in cinque minuti. Rispondo entro 48 ore lavorative. studio@giovannicambria.it · +39 328 446 0482.",
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
        <div className="mb-7 flex items-center gap-3.5 font-sans text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-accent" />
          <span className="text-accent">№ 04</span>
          <span className="text-ink-muted">— Lavoriamo insieme</span>
        </div>

        <h1 className="max-w-[900px] font-sans font-extrabold text-[44px] leading-[1.0] tracking-[-0.035em] text-ink md:text-[64px] lg:text-[72px]">
          Raccontami il tuo caso in cinque minuti.
        </h1>

        <p className="mt-8 max-w-[620px] font-serif text-[20px] leading-[1.5] text-ink-muted md:text-[22px]">
          Rispondo entro 48 ore lavorative. Se ha senso, ci sentiamo per una
          call di 30 minuti; poi, eventualmente, un preventivo.
        </p>

        <div className="mt-14 grid gap-px border-t border-ink bg-rule md:grid-cols-3">
          {RECAPITI.map((r) => (
            <a
              key={r.label}
              href={r.href}
              className="group bg-paper p-7 transition-colors hover:bg-paper-deep"
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{r.label}</div>
              <div className="mt-3 font-sans text-[18px] font-semibold tracking-[-0.01em] transition-colors group-hover:text-accent">
                {r.value}
              </div>
            </a>
          ))}
        </div>

        <p className="mt-10 max-w-[620px] font-serif text-[16px] leading-[1.6] italic text-ink-muted">
          Il form di contatto guidato è in lavorazione. Nel frattempo, una mail
          con due righe sul tuo caso è più che sufficiente per iniziare.
        </p>

        <div className="mt-9">
          <Link
            href="/lavoro"
            className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted transition-colors hover:text-accent"
          >
            ← vedi prima i tre modi
          </Link>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1280px] items-center justify-between border-t border-rule px-6 py-3.5 md:px-16 font-mono text-[11px] tracking-[0.04em] text-ink-muted"
      >
        <span>P. 04 — § Contatto</span>
        <span className="hidden md:inline">studio@giovannicambria.it · Milazzo</span>
        <span>fine</span>
      </div>
    </>
  );
}
