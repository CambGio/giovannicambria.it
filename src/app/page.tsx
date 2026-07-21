import Link from "next/link";
import { articoliPerData, formattaData } from "@/lib/articoli";

// Feed dei post protagonista: al massimo 3, cronologico. Nessuna soglia
// di "griglia": è una lista, non delle card, quindi regge bene da 0 a N.
const POST_IN_HOME = 3;

export default function Home() {
  const post = articoliPerData.slice(0, POST_IN_HOME);

  return (
    <>
      {/* ── Manifesto: il testo È il design, niente immagini (spec §12) ── */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24 lg:py-32">
        <div className="mb-7 flex items-center gap-3.5 font-mono text-[12px] uppercase tracking-[0.18em] font-medium">
          <span className="inline-block h-[2px] w-7 bg-bosco" />
          <span className="text-bosco">Manifesto</span>
        </div>

        <h1 className="max-w-[980px] text-display font-extrabold text-inchiostro">
          L&apos;AI in azienda non parte dagli strumenti. Parte dai processi.
        </h1>

        <p className="mt-8 max-w-[680px] text-sottotitolo text-grigio">
          Aiuto PMI e professionisti ad adottare l&apos;intelligenza
          artificiale dove serve al business, e a lasciarla perdere dove non
          serve. Niente hype: quasi trent&apos;anni di digitale applicati con
          buon senso.
        </p>

        <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="/lavoro"
            className="inline-flex items-center gap-3 bg-inchiostro px-7 py-4 font-sans text-[15px] font-semibold text-carta tracking-[-0.005em] transition-colors hover:bg-bosco"
          >
            Lavora con me
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/percorso"
            className="font-sans text-[15px] font-semibold text-inchiostro underline decoration-bosco decoration-2 underline-offset-4 transition-colors hover:text-bosco"
          >
            Chi sono, in breve <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Feed dei post: content-first, lista cronologica ariosa ── */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-16 md:pb-24">
        <div className="flex items-baseline justify-between border-t-2 border-inchiostro pt-7">
          <div className="text-etichetta font-mono uppercase text-grigio">
            Dal blog
          </div>
          {post.length > 0 ? (
            <Link
              href="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.06em] text-grigio transition-colors hover:text-bosco"
            >
              Tutti gli articoli <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>

        {post.length > 0 ? (
          <ul className="mt-2 divide-y divide-inchiostro/10 border-b border-inchiostro/10">
            {post.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/blog/${a.slug}`}
                  className="group flex flex-col gap-3 py-8 md:py-9"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-grigio tabular-nums">
                    {formattaData(a.data)} · {a.rubricaLabel} · {a.minuti} min
                  </div>
                  <div className="max-w-[820px] font-display text-sottotitolo font-medium text-inchiostro transition-colors group-hover:text-bosco">
                    {a.titolo}
                  </div>
                  <p className="max-w-[640px] text-[16px] leading-[1.6] text-grigio">
                    {a.sommario}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-7 max-w-[560px] text-[17px] leading-[1.6] text-grigio">
            I primi articoli sono in arrivo.
          </p>
        )}
      </section>

      {/* ── Momento scuro puntuale: lavora con me (spec §12) ── */}
      <section className="bg-inchiostro">
        <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-16 md:py-16">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] font-medium text-bosco-chiaro">
              <span className="inline-block h-[2px] w-7 bg-bosco-chiaro" />
              Lavora con me
            </div>
            <p className="mt-5 text-sottotitolo text-carta">
              Tre modi di iniziare: la Mappa dell&apos;adozione, il Workshop
              pratico, l&apos;Affiancamento.
            </p>
            <Link
              href="/lavoro"
              className="mt-7 inline-flex items-center gap-3 bg-carta px-6 py-3.5 font-sans text-[14px] font-semibold text-inchiostro transition-colors hover:bg-bosco hover:text-carta"
            >
              Vedi i tre modi <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
