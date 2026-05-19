import type { Metadata } from "next";
import { Wordmark } from "@/components/site/Wordmark";
import { unlock } from "./actions";

export const metadata: Metadata = {
  title: "Accesso",
  robots: { index: false, follow: false },
};

export default async function LockPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; from?: string }>;
}) {
  const { error, from = "/" } = await searchParams;

  return (
    <div className="flex min-h-[calc(100vh-160px)] items-center justify-center px-6 py-16">
      <div className="w-full max-w-[440px]">
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block h-[2px] w-7 bg-accent" aria-hidden="true" />
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-ink-muted">
            Sito in costruzione
          </span>
        </div>

        <h1 className="font-display text-[44px] leading-[1.05] tracking-[-0.03em] font-normal m-0">
          <Wordmark size={44} />
        </h1>

        <p className="mt-5 text-[17px] leading-[1.6] text-ink-muted">
          Stiamo lavorando al sito. L&apos;accesso è temporaneamente riservato.
          Se hai la chiave, inseriscila qui sotto.
        </p>

        <form action={unlock} className="mt-10 flex flex-col gap-4">
          <input type="hidden" name="from" value={from} />
          <label className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium text-ink-muted">
            Chiave d&apos;accesso
            <input
              type="password"
              name="password"
              required
              autoFocus
              autoComplete="off"
              className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-serif text-[18px] text-ink outline-none placeholder:text-ink-muted focus:border-accent"
              placeholder="••••••••"
            />
          </label>

          {error ? (
            <p className="font-sans text-[13px] text-accent">
              Chiave non valida. Riprova.
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center gap-3 self-start bg-ink px-6 py-4 font-sans text-[15px] font-medium text-paper tracking-[0.02em] transition-colors hover:bg-accent"
          >
            Entra
            <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.04em] text-ink-muted">
          studio@giovannicambria.it · Milazzo
        </p>
      </div>
    </div>
  );
}
