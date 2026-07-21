# DESIGN.md — giovannicambria.it

## Token (fonte: src/app/globals.css, @theme Tailwind v4)
- Colori: `carta #FAFAF8` (fondo) · `inchiostro #141414` (testo) · `grigio #6E6E68`
  (secondario) · `bosco #1F5130` (accento; `bosco-chiaro` per fondi scuri).
- Font: `--font-display` = Fraunces (variable, opsz) · `--font-sans` = Inter ·
  `--font-mono` = IBM Plex Mono (400/500). Heading in Fraunces via `@layer base`.
- Scala: `text-display` clamp(2.75rem→4.75rem) · `text-titolo` clamp(2rem→3rem) ·
  `text-sottotitolo` clamp(1.35rem→1.75rem) · `text-etichetta` 0.72rem/0.14em maiuscolo.
- Radius 0. Vietati: gradient, glow, glassmorphism, side-stripe, em-dash.

## Stato composizione (dopo feedback 21-07)
La scala attuale è il PAVIMENTO, non il tetto: per i momenti-hero si può salire ben oltre
il clamp attuale (aggiungere step, non riusare text-display per tutto). Pesi Fraunces:
usare gli estremi (300 vs 800+), non i medi. Il verde bosco può passare da accento ≤10%
a strategia Committed su superfici intere quando la variante lo richiede.

## Chrome
Masthead (striscia utility) + SiteHeader (wordmark Fraunces + nav Inter maiuscola) +
SiteFooter (griglia metadati studio). MobileNav off-canvas. Tutto tokenizzato.

## Pagine
`/` home (manifesto + feed) · `/percorso` timeline · `/lavoro` offerta 3 passi ·
`/blog` + `/blog/[slug]` archivio · `/contatto` recapiti · `/lock` gate.
Contenuti approvati: nei redesign il copy resta VERBATIM.
