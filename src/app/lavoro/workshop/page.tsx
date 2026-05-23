import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Workshop in-house — Giovanni Cambria",
  description:
    "Una giornata col team per allineare l'organizzazione sull'innovazione del modello, prima di partire con i progetti.",
};

export default function Workshop() {
  return <ServizioScheda slug="workshop" />;
}
