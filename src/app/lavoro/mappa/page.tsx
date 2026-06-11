import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Mappa dell'innovazione · Audit strategico per PMI italiane",
  description:
    "Audit strategico in 1–2 settimane: la mappa del modello di business, 3–5 punti di intervento, roadmap a 6–12 mesi, shortlist di tool con costi. A partire da 2.500 €.",
};

export default function Mappa() {
  return <ServizioScheda slug="mappa" />;
}
