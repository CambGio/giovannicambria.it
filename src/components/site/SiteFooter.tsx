import Link from "next/link";
import { Wordmark } from "./Wordmark";
import {
  CITY,
  EMAIL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_DESCRIPTOR,
  SITE_NAME,
  VAT,
} from "@/lib/site";

type Col = { title: string; items: { label: string; href: string }[] };

const COLS: Col[] = [
  {
    title: "Studio",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Chi sono", href: "/percorso" },
      { label: "Lavoro", href: "/lavoro" },
    ],
  },
  {
    title: "Lavoro",
    items: [
      { label: "Mappa dell'adozione", href: "/lavoro#mappa" },
      { label: "Workshop pratico", href: "/lavoro#workshop" },
      { label: "Affiancamento", href: "/lavoro#affiancamento" },
      { label: "Case study", href: "/blog?rubrica=casi" },
    ],
  },
  {
    title: "Contatto",
    items: [
      { label: EMAIL, href: `mailto:${EMAIL}` },
      { label: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: CITY, href: "/contatto" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inchiostro text-carta">
      <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-7 md:px-16">
        <div className="grid gap-10 border-b border-carta/15 pb-9 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-16">
          <div>
            <div className="mb-5">
              <Wordmark size={26} color="var(--color-carta)" />
            </div>
            <p className="font-display italic text-[22px] leading-[1.35] text-carta/85 max-w-[460px] tracking-[-0.005em]">
              Lo studio è un piccolo spazio di lettura. Non prometto
              trasformazioni: prometto di guardare i processi insieme, con
              calma e numeri.
            </p>
          </div>
          {COLS.map((col) => (
            <FootCol key={col.title} col={col} />
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 font-sans text-[11px] uppercase tracking-[0.08em] text-carta/60 md:flex-row md:justify-between">
          <span>
            © {year} {SITE_NAME} · P. IVA {VAT}
          </span>
          <span>
            {SITE_DESCRIPTOR} · {CITY}
          </span>
          <span>Sito sobrio · 0 cookie di profilazione</span>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ col }: { col: Col }) {
  return (
    <div>
      <div className="mb-4 font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-carta/60">
        {col.title}
      </div>
      <ul className="flex flex-col gap-[10px]">
        {col.items.map((item) => (
          <li key={item.label} className="font-display text-[17px] text-carta">
            <Link href={item.href} className="hover:text-bosco-chiaro">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
