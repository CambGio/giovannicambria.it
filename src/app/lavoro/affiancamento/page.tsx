import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Affiancamento — Giovanni Cambria",
  description:
    "Affiancamento progettuale ricorrente per PMI italiane, con KPI verificabili. Da 3 a 12 mesi.",
};

export default function Affiancamento() {
  return <ServizioScheda slug="affiancamento" />;
}
