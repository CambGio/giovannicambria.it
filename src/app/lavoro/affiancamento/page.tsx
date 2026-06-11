import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Affiancamento · Consulenza ricorrente per PMI italiane",
  description:
    "Affiancamento progettuale da 3 mesi in su: 3–4 mezze giornate al mese, stand-up settimanale di 30 minuti, formazione del team. A partire da 2.000 € al mese.",
};

export default function Affiancamento() {
  return <ServizioScheda slug="affiancamento" />;
}
