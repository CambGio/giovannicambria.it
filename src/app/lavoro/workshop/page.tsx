import type { Metadata } from "next";
import { ServizioScheda } from "@/components/site/ServizioScheda";

export const metadata: Metadata = {
  title: "Workshop in-house «Innovazione per il tuo team»",
  description:
    "Una giornata in azienda per team da 8 a 30 persone: 4 ore di teoria applicata al vostro settore e 3 ore di laboratorio sui casi reali. A partire da 2.500 € a giornata.",
};

export default function Workshop() {
  return <ServizioScheda slug="workshop" />;
}
