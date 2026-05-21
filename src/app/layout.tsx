import type { Metadata } from "next";
import {
  Manrope,
  Source_Serif_4,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import { Masthead } from "@/components/site/Masthead";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const grotesk = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-grotesk",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giovannicambria.it"),
  title: {
    default: "Giovanni Cambria — Studio di consulenza",
    template: "%s · Giovanni Cambria",
  },
  description:
    "Consulente in innovazione dei modelli di business per imprenditori italiani che vogliono capire prima di adottare.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Giovanni Cambria",
    title: "Giovanni Cambria — Studio di consulenza",
    description:
      "Consulente in innovazione dei modelli di business. Tecnologia come mezzo, modello come fine.",
    url: "https://giovannicambria.it",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${grotesk.variable} ${serif.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Masthead />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
