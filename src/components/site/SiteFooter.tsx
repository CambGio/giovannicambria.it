import Link from "next/link";
import { Wordmark } from "./Wordmark";

type Col = { title: string; items: { label: string; href: string }[] };

const COLS: Col[] = [
  {
    title: "Studio",
    items: [
      { label: "Approccio", href: "/approccio" },
      { label: "Tre format", href: "/lavoro" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Lavoro",
    items: [
      { label: "Mappa dell'innovazione", href: "/lavoro/mappa" },
      { label: "Workshop in-house", href: "/lavoro/workshop" },
      { label: "Affiancamento", href: "/lavoro/affiancamento" },
      { label: "Case study", href: "/blog?rubrica=storia-di" },
    ],
  },
  {
    title: "Contatto",
    items: [
      { label: "studio@giovannicambria.it", href: "mailto:studio@giovannicambria.it" },
      { label: "+39 328 446 0482", href: "tel:+393284460482" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/giovannicambria/" },
      { label: "Milazzo", href: "/contatto" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="h-[3px] bg-accent" aria-hidden="true" />
      <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-7 md:px-16">
        <div className="grid gap-10 border-b border-[#322F2A] pb-9 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-16">
          <div>
            <div className="mb-5">
              <Wordmark size={26} color="var(--color-paper)" />
            </div>
            <p className="font-display italic text-[22px] leading-[1.35] text-[#d9d4c8] max-w-[460px] tracking-[-0.012em]">
              Lo studio è un piccolo spazio di lettura. Non promette
              trasformazioni: promette di guardare il modello insieme, con calma
              e numeri.
            </p>
          </div>
          {COLS.map((col) => (
            <FootCol key={col.title} col={col} />
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.04em] text-[#9a9690] md:flex-row md:justify-between">
          <span>© 2026 Giovanni Cambria — P. IVA IT 03557470832</span>
          <span>Studio di consulenza · Milazzo</span>
          <span>Sito sobrio · 0 cookie di profilazione</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ col }: { col: Col }) {
  return (
    <div>
      <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-[#9a9690]">
        {col.title}
      </div>
      <ul className="flex flex-col gap-[10px]">
        {col.items.map((item) => (
          <li key={item.label} className="font-serif text-[17px] text-paper">
            <Link href={item.href} className="hover:text-accent-light">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
