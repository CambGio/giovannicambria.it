import Link from "next/link";
import type { Metadata } from "next";
import { ADDRESS, EMAIL, VAT } from "@/lib/site";

/**
 * Informativa (art. 13 GDPR) scritta il 2026-10-19 sul sito com'è: niente
 * moduli né statistiche, un solo cookie tecnico (`site-access`, 30 giorni,
 * src/app/lock/actions.ts), hosting Vercel. Vercel aderisce al DPF secondo
 * la sua privacy notice (letta il 2026-10-19). La sezione sulle API Google è
 * quella che Google legge per verificare il brand: deve dire il vero su cosa
 * leggono gli strumenti, dove restano i dati e con chi si condividono.
 */
export const metadata: Metadata = {
  title: "Informativa privacy",
  description:
    "Come giovannicambria.it tratta i dati tecnici del sito e come Giovanni Cambria usa i dati ricevuti dalle API di Google.",
  alternates: { canonical: "/privacy" },
};

const AGGIORNATA = "19 ottobre 2026";

type Pezzo = string | { testo: string; href: string };
type Blocco = Pezzo[] | { elenco: Pezzo[][] };

const mail: Pezzo = { testo: EMAIL, href: `mailto:${EMAIL}` };

const SEZIONI: { titolo: string; blocchi: Blocco[] }[] = [
  {
    titolo: "Chi è il titolare",
    blocchi: [
      [`Il titolare del trattamento è Giovanni Cambria, ${ADDRESS}, P. IVA ${VAT}.`],
      ["Per qualsiasi domanda sui tuoi dati puoi scrivere a ", mail, "."],
    ],
  },
  {
    titolo: "Il sito",
    blocchi: [
      [
        "Il sito non ha moduli, statistiche di visita o pixel pubblicitari. I caratteri e le immagini arrivano da giovannicambria.it.",
      ],
      [
        "Per consegnarti le pagine, Vercel Inc., che ospita il sito, riceve il tuo indirizzo IP e i dati tecnici del browser e li registra nei suoi log per la sicurezza del servizio. La base giuridica è il legittimo interesse alla sicurezza e al funzionamento del sito (art. 6, par. 1, lett. f GDPR).",
      ],
      [
        "Una parte del sito è riservata. Se inserisci la chiave d'accesso, il browser salva un cookie tecnico, «site-access», che dura 30 giorni e serve solo a non chiederti la chiave di nuovo. Non ci sono altri cookie.",
      ],
      [
        "Vercel ha sede negli Stati Uniti e aderisce all'EU-U.S. Data Privacy Framework, che la Commissione europea ha riconosciuto adeguato con la decisione del 10 luglio 2023. Come conserva i log lo spiega la sua ",
        { testo: "informativa", href: "https://vercel.com/legal/privacy-notice" },
        ".",
      ],
    ],
  },
  {
    titolo: "Gli strumenti che usano le API di Google",
    blocchi: [
      [
        "Per il mio lavoro uso due strumenti interni, descritti nella pagina ",
        { testo: "Strumenti", href: "/strumenti" },
        ": uno per Google Ads, uno per Search Console e Google Analytics. Li uso solo io, dal mio computer, accedendo con il mio account Google. Non sono un servizio aperto ad altri.",
      ],
      ["Leggono soltanto gli account e le proprietà che i clienti hanno condiviso con me:"],
      {
        elenco: [
          [
            "Google Ads: struttura e impostazioni delle campagne, budget, annunci, keyword, risultati e conversioni, e le stime del Keyword Planner, cioè volumi di ricerca e costi previsti;",
          ],
          [
            "Search Console e Google Analytics, in sola lettura: ricerche, pagine, clic, impressioni e visite, in forma aggregata.",
          ],
        ],
      },
      ["Non accedono a Gmail, Drive, ai contatti o ad altri dati dell'account Google."],
      [
        "Uso questi dati per analizzare e pianificare le campagne e la presenza nella ricerca dei clienti, e per preparare i loro report. Le modifiche alle campagne Google Ads le faccio solo su incarico del cliente.",
      ],
      [
        "Le chiavi di accesso rilasciate da Google restano sul mio computer. I dati letti finiscono nelle analisi e nei report del cliente, che conservo nel mio archivio di lavoro per la durata dell'incarico; dopo, il cliente può chiedermi di cancellarli.",
      ],
      [
        "Non vendo questi dati, non li uso per la pubblicità e non li cedo ad altri per i loro scopi. Li ricevono il cliente a cui si riferiscono e i fornitori dei software con cui li elaboro, che li trattano solo per fornirmi il servizio.",
      ],
      [
        "L'uso e il trasferimento ad altre applicazioni delle informazioni ricevute dalle API di Google rispettano le ",
        {
          testo: "Google API Services User Data Policy",
          href: "https://developers.google.com/terms/api-services-user-data-policy",
        },
        ", compresi i requisiti di Limited Use.",
      ],
      [
        "Il cliente può togliermi l'accesso in qualsiasi momento dal suo account Google Ads, da Search Console o da Google Analytics. Il collegamento tra gli strumenti e il mio account Google si revoca da ",
        { testo: "myaccount.google.com/permissions", href: "https://myaccount.google.com/permissions" },
        ".",
      ],
    ],
  },
  {
    titolo: "I tuoi diritti",
    blocchi: [
      [
        "Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, di correggerli o cancellarli, di limitarne il trattamento e di riceverli in un formato leggibile da un computer. Puoi anche opporti al trattamento basato sul legittimo interesse (artt. 15-22 GDPR).",
      ],
      ["Scrivi a ", mail, ": ti rispondo entro un mese."],
      [
        "Se ritieni che i tuoi dati siano trattati in modo non corretto, puoi proporre reclamo al Garante per la protezione dei dati personali (",
        { testo: "garanteprivacy.it", href: "https://www.garanteprivacy.it" },
        ").",
      ],
    ],
  },
];

function Testo({ pezzi }: { pezzi: Pezzo[] }) {
  return (
    <>
      {pezzi.map((p, i) => {
        if (typeof p === "string") return <span key={i}>{p}</span>;
        const classe = "text-bosco underline underline-offset-4";
        return p.href.startsWith("/") ? (
          <Link key={i} href={p.href} className={classe}>
            {p.testo}
          </Link>
        ) : (
          <a key={i} href={p.href} className={classe}>
            {p.testo}
          </a>
        );
      })}
    </>
  );
}

export default function Privacy() {
  return (
    <section className="bg-carta">
      <div className="mx-auto max-w-[760px] px-6 py-16 md:py-24">
        <div className="mb-8 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-grigio">Ultimo aggiornamento: {AGGIORNATA}</span>
        </div>

        <h1 className="font-display text-[40px] leading-[1.08] tracking-[-0.02em] text-inchiostro md:text-[52px]">
          Informativa privacy
        </h1>

        <p className="mt-8 text-[18px] leading-[1.6] text-inchiostro">
          Questa pagina spiega quali dati tratta giovannicambria.it e come uso
          i dati che ricevo dalle API di Google con i miei strumenti di lavoro,
          come chiede l&apos;art. 13 del Regolamento UE 2016/679 (GDPR).
        </p>

        {SEZIONI.map((s) => (
          <div key={s.titolo} className="mt-12">
            <h2 className="font-sans text-[22px] font-semibold tracking-[-0.01em] text-inchiostro">
              {s.titolo}
            </h2>
            {s.blocchi.map((b, i) =>
              Array.isArray(b) ? (
                <p key={i} className="mt-4 text-[17px] leading-[1.65] text-inchiostro/90">
                  <Testo pezzi={b} />
                </p>
              ) : (
                <ul key={i} className="mt-4 flex list-disc flex-col gap-2 pl-6 text-[17px] leading-[1.65] text-inchiostro/90">
                  {b.elenco.map((voce, j) => (
                    <li key={j}>
                      <Testo pezzi={voce} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
