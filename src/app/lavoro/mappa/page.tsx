import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Mappa dell'innovazione — Giovanni Cambria",
  description:
    "Audit strategico per PMI italiane: dove la tecnologia tocca davvero il tuo modello di business. 1–2 settimane.",
};

export default function Mappa() {
  return <ServizioScheda slug="mappa" />;
}
