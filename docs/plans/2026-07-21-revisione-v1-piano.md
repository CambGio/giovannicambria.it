# Revisione v1 — Piano di implementazione

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** riallineare il sito al posizionamento "adozione AI" validato su LinkedIn: 6 pagine, offerta a pagina unica, blog = archivio leggero dei post LinkedIn (spec: `docs/strategia/09-revisione-v1-2026-07.md`).

**Architecture:** Next.js App Router già in piedi; il lavoro è riscrittura di dati/copy centralizzati (`src/lib/servizi.ts`, `src/lib/nav.ts`, `src/lib/site.ts`, `src/lib/posts.ts`) + collasso del funnel `/lavoro/*` a pagina unica con redirect 308 + risemina del blog. Nessuna dipendenza nuova.

**Tech Stack:** Next.js 16.2.6 · React 19.2.4 · Tailwind v4 · MDX (gray-matter + next-mdx-remote) · npm.

## Global Constraints

- Repo: `~/code/personale/giovannicambria.it/site` — lavorare su `main`, commit frequenti, **push solo dove il task lo dice**.
- **npm, MAI pnpm** (Next 16 + pnpm rompe il build; c'è `package-lock.json`).
- Gate per ogni task: `npm run build` && `npm run lint` verdi (il frontmatter MDX è validato a build time e un errore fa fallire il build). Il build può flakkare: al primo fallimento ritenta una volta e cattura l'exit code esplicito, mai `| tail` da solo.
- Messaggi commit in italiano, stile del repo: `feat(area): …` / `copy(area): …` / `fix(area): …`.
- **Voce del copy**: come i post LinkedIn — concreto, anti-hype, paragrafi corti, zero gergo, "parto dai processi, non dagli strumenti". Fonte posizionamento: `/Users/giovannicambria/work/personale/giovannicambria-it/progetti/2026-contenuti-linkedin/02-profilo-attuale.md` (versione definitiva 05-07) e i post in `…/2026-contenuti-linkedin/post/`.
- **Checkpoint copy**: nei task marcati 🔍 la bozza va presentata a Giovanni e approvata PRIMA del commit.
- Il sito resta dietro lock (`SITE_PASSWORD`) e `noindex` per tutta l'implementazione. Il go-live (Task 9) parte SOLO su GO esplicito di Giovanni.
- Niente prezzi pubblici: rimuovere i prezzi da UI **e** da JSON-LD.
- **Direzione di design (spec §12, D8)**: ibrido B+A — tipografia protagonista su fondo chiaro (**Fraunces** display + **Inter** UI, palette bianco `#FAFAF8` / nero `#141414` / grigio `#6E6E68` / **verde foresta `#1F5130`** unico accento), struttura content-first, momenti scuri solo puntuali. Border-radius 0 o minimo; vietati gradient/glow/effetti. I token del Task 0 sono la fonte: nessun colore/font hardcoded nei task successivi.
- **Mobile-first**: si implementa e verifica prima a viewport 390px, poi desktop. Ogni checkpoint 🔍 include screenshot mobile E desktop (puppeteer-core + Chrome installato).

---

### Task 0: Design system — Fraunces + Inter, token, chrome 🔍

**Files:**
- Modify: `src/app/layout.tsx` (next/font: Fraunces + Inter come variabili CSS)
- Modify: `src/app/globals.css` (token `@theme` Tailwind v4: palette + font)
- Modify: `src/components/site/Masthead.tsx`, `SiteHeader.tsx`, `MobileNav.tsx`, `SiteFooter.tsx`, `Wordmark.tsx` (restyle del chrome)

**Interfaces:**
- Produces: token Tailwind `carta`/`inchiostro`/`grigio`/`bosco` + font `--font-fraunces`/`--font-inter`, usati da TUTTI i task successivi (mai colori o font hardcoded altrove).

**Riferimenti visivi** (l'implementatore li consulti via WebFetch prima di scrivere CSS): corentinbernadou.com, simon.abranowicz.com, chloescheffe.github.io (trattamento tipografico/griglia) · tomcritchlow.com (struttura content-first). Identità da sposare: template caroselli LinkedIn in `/Users/giovannicambria/work/personale/giovannicambria-it/progetti/2026-contenuti-linkedin/carosello-template/`.

- [ ] **Step 1: Font** — in `src/app/layout.tsx` sostituisci il setup font esistente con:

```tsx
import { Fraunces, Inter } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["opsz"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// sul tag <html>: className={`${fraunces.variable} ${inter.variable}`}
```

- [ ] **Step 2: Token** — in `src/app/globals.css` definisci (adattando ai nomi Tailwind v4 già presenti, sostituendo la palette precedente):

```css
@theme {
  --color-carta: #FAFAF8;
  --color-inchiostro: #141414;
  --color-grigio: #6E6E68;
  --color-bosco: #1F5130;
  --font-display: var(--font-fraunces), Georgia, serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;
}
```

Radius 0; scala tipografica con display generoso (hero `clamp`, tracking stretto sui titoli grandi, letter-spacing largo sulle etichette maiuscole in Inter).

- [ ] **Step 3: Chrome** — restyle mobile-first (prima 390px) di header/nav/footer: wordmark in Fraunces; nav in Inter, etichette con letter-spacing; footer con metadati "clinici" in griglia (email, LinkedIn, P.IVA da `src/lib/site.ts`); accento `bosco` solo su link/stati attivi.

- [ ] **Step 4: Verifica** — `npm run build && npm run lint` verdi; screenshot puppeteer di `/` a 390px e 1440px (il copy è ancora vecchio: si valuta SOLO il sistema — font resi, palette, chrome).

- [ ] **Step 5: 🔍 Checkpoint** — presenta gli screenshot a Giovanni, itera fino a OK sul sistema.

- [ ] **Step 6: Commit** — `git add -A && git commit -m "feat(design): sistema Fraunces+Inter, token carta/inchiostro/bosco, chrome restyle (spec 09 §12)"`

---

### Task 1: Tassonomia blog — rubriche → pillar LinkedIn

**Files:**
- Modify: `src/lib/posts.ts` (mappa `RUBRICHE` + tipo `RubricaSlug`)
- Modify: `src/app/blog/page.tsx` (descrizioni rubriche + H1)
- Modify: i 4 file `content/posts/*.mdx` (campo `rubrica`, + `draft: true` a matrice-3x3)

**Interfaces:**
- Produces: slug rubrica validi = `adozione` | `anti-hype` | `casi` | `storia-metodo` (i task 2 e 8 li usano nel frontmatter).

- [ ] **Step 1: Ridefinisci `RUBRICHE`** in `src/lib/posts.ts` sostituendo le 3 attuali (`cosa-cambia-se`, `storia-di`, `modelli`) con i 4 pillar:

```ts
export const RUBRICHE = {
  "adozione": "AI al lavoro",
  "anti-hype": "Dove l'AI non serve",
  "casi": "Prima e dopo",
  "storia-metodo": "Storia e metodo",
} as const;
```

Adegua `RubricaSlug`/`isRubricaSlug` se derivati. In `src/app/blog/page.tsx` aggiorna le descrizioni hardcoded delle rubriche (una frase ciascuna, tono anti-hype) e l'H1: da "Cosa cambia per chi fa impresa…" a **"L'adozione dell'AI, senza hype."** con sottotitolo che dichiara la natura di archivio: "Quello che pubblico su LinkedIn, qui in archivio: come le PMI adottano l'AI nei processi reali."

- [ ] **Step 2: Aggiorna il frontmatter dei 4 MDX** (il campo `rubrica` deve essere uno slug nuovo, pena build rosso):
  - `ai-act-pmi-cosa-cambia.mdx` → `rubrica: adozione` (resta `draft: true`, lo riscrive il Task 2)
  - `amendolia-preventivazione.mdx` → `rubrica: casi` (resta `draft: true`, lo sistema il Task 2)
  - `matrice-3x3-innovare-modello.mdx` → `rubrica: storia-metodo` + **aggiungi `draft: true`** (parcheggio deciso: D5 della spec)
  - `quattro-categorie-costi.mdx` → `rubrica: anti-hype` (resta `draft: true` — parcheggiato)

- [ ] **Step 3: Verifica**: `npm run build && npm run lint` → verdi. Atteso: blog con 0 articoli pubblici (empty-state già gestito), nessun errore frontmatter.

- [ ] **Step 4: Commit**: `git add -A && git commit -m "feat(blog): rubriche riallineate ai 4 pillar LinkedIn; matrice-3x3 parcheggiata (draft)"`

---

### Task 2: Semina del blog — 3 articoli in chiave archivio 🔍

**Files:**
- Modify: `content/posts/ai-act-pmi-cosa-cambia.mdx`
- Modify: `content/posts/amendolia-preventivazione.mdx`
- Create: `content/posts/copilot-comprato-non-usato.mdx`

**Interfaces:**
- Consumes: rubriche del Task 1. Frontmatter obbligatorio: `slug, titolo, data (YYYY-MM-DD), rubrica`; opzionali `sommario, minuti, draft`.

- [ ] **Step 1: Riscrivi AI Act** allineandolo al post LinkedIn pubblicato il 15-07 (fonte: file del post 4 in `…/2026-contenuti-linkedin/post/` — leggerlo, non citarlo a memoria). Meccanica archivio-leggero (D4): titolo proprio (non l'hook da feed), testo del post lievemente adattato al medium articolo, data = data di pubblicazione LinkedIn, fonti citate per esteso in fondo. Togli `draft: true`.

- [ ] **Step 2: Sistema Amendolia**: passata leggera per coerenza di voce col nuovo frame (è già un caso prima/dopo valido), `rubrica: casi`, togli `draft: true`.

- [ ] **Step 3: Crea l'articolo Copilot** dal post 5 ("Copilot comprato, non usato", fonte in `…/post/`): stessa meccanica, **`draft: true`** — si toglie solo quando il post esce su LinkedIn.

- [ ] **Step 4: 🔍 Checkpoint**: presenta i 3 testi a Giovanni, itera fino a OK.

- [ ] **Step 5: Verifica**: `npm run build && npm run lint` verdi; con 2 articoli pubblici la griglia "Dal blog" in home si attiva (soglia 2).

- [ ] **Step 6: Commit**: `git add content/posts && git commit -m "copy(blog): semina archivio — AI Act e Amendolia pubblici, Copilot in coda (draft)"`

---

### Task 3: Collasso /lavoro a pagina unica + redirect

**Files:**
- Modify: `src/app/lavoro/page.tsx`
- Delete: `src/app/lavoro/mappa/page.tsx`, `src/app/lavoro/workshop/page.tsx`, `src/app/lavoro/affiancamento/page.tsx`
- Modify: `next.config.ts` (redirects), `src/lib/nav.ts` (label)
- Keep: `src/components/site/ServizioScheda.tsx` e `src/lib/servizi.ts` (contenuti riscritti nel Task 4)

**Interfaces:**
- Produces: `/lavoro` unica pagina che renderizza i 3 `Servizio` in sequenza (sezioni ancorate `#mappa`, `#workshop`, `#affiancamento`); redirect 308 `/lavoro/:slug` → `/lavoro#:slug`.

- [ ] **Step 1: Pagina unica**: in `src/app/lavoro/page.tsx` sostituisci le 3 card-link con le 3 schede complete inline (riusa `ServizioScheda` con `slug` in loop su `SERVIZI`, ogni sezione con `id={slug}`). CTA unica finale verso `/contatto`. Rimuovi da `ServizioScheda` il rendering dei campi prezzo (`prezzo`, `prezzoDettaglio`, `prezzoMin`, `prezzoUnita`) e il JSON-LD `Service` con offerta prezzata; in `page.tsx` togli i prezzi dall'`OfferCatalog` JSON-LD (o riducilo a `ProfessionalService` senza offerte).

- [ ] **Step 2: Elimina le 3 sottopagine** e aggiungi in `next.config.ts`:

```ts
async redirects() {
  return ["mappa", "workshop", "affiancamento"].map((s) => ({
    source: `/lavoro/${s}`,
    destination: `/lavoro#${s}`,
    permanent: true, // 308
  }));
},
```

- [ ] **Step 3: Nav**: in `src/lib/nav.ts` label "Lavoro" → **"Lavora con me"** (href invariato `/lavoro`).

- [ ] **Step 4: Verifica**: `npm run build && npm run lint` verdi; `npm run start` (o `next dev`) e controlla con curl che `/lavoro/mappa` risponda 308 verso `/lavoro#mappa`.

- [ ] **Step 5: Commit**: `git add -A && git commit -m "feat(lavoro): pagina unica con 3 passi, via sottopagine (redirect 308), nav 'Lavora con me', niente prezzi pubblici"`

---

### Task 4: Offerta in chiave adozione AI 🔍

**Files:**
- Modify: `src/lib/servizi.ts` (riscrittura contenuti dei 3 elementi `SERVIZI`)
- Modify: `src/app/lavoro/page.tsx` (H1/intro)

**Interfaces:**
- Consumes: shape `Servizio` esistente (slug invariati `mappa`/`workshop`/`affiancamento` — li usano i redirect del Task 3). Campi prezzo: valorizzati a stringa vuota o rimossi dal tipo se non più consumati (preferibile: rimuoverli dal tipo, il Task 3 ha già tolto i consumer).

- [ ] **Step 1: Riscrivi i 3 format** secondo §6 della spec (scheletro a 3 passi riframato):
  1. **Mappa dell'adozione** — assessment: dove l'AI serve davvero nei tuoi processi, e dove no (anti-hype come garanzia).
  2. **Workshop pratico** — il team impara sul proprio lavoro reale, non su demo.
  3. **Affiancamento** — adozione continuativa, misurata sui processi.

  Per ciascuno riscrivi in chiave adozione AI: `titolo, promessa, perChi, perChiDettaglio, cosaRicevi, comeFunziona, faq, tempi`. Niente prezzi. Attingi da `docs/strategia/05-offerta-commerciale.md` SOLO per la struttura operativa (durate, deliverable) — il frame è quello nuovo.

- [ ] **Step 2: H1/intro di `/lavoro`**: da "Tre modi di iniziare." a **"Un percorso, tre passi."** + intro di 2-3 frasi: si parte dai processi, si adotta solo dove serve, si misura.

- [ ] **Step 3: 🔍 Checkpoint**: presenta a Giovanni la pagina completa (testo integrale), itera fino a OK.

- [ ] **Step 4: Verifica**: `npm run build && npm run lint` verdi.

- [ ] **Step 5: Commit**: `git add -A && git commit -m "copy(lavoro): offerta ripensata in chiave adozione AI (spec 09 §6)"`

---

### Task 5: Home — manifesto e pulizia 🔍

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/lib/site.ts` (TAGLINE/description se incoerenti — vedi Task 8)

- [ ] **Step 1: Riscrivi il manifesto** hardcoded (attuale: "Quasi tutti quelli che vendono innovazione vendono un tool…"). Bozza di partenza da raffinare col checkpoint:

  > **L'AI in azienda non parte dagli strumenti. Parte dai processi.**
  > Aiuto PMI e professionisti ad adottare l'intelligenza artificiale dove serve al business — e a lasciarla perdere dove non serve. Niente hype: quasi trent'anni di digitale applicati con buon senso.

  CTA primaria → `/lavoro`, secondaria → `/percorso`. Trattamento (spec §12): hero tipografico d'impatto in Fraunces (il manifesto È il design, niente immagini), e sotto il **feed dei post protagonista** (struttura content-first: lista cronologica ariosa con data/rubrica come metadati in Inter, non card patinate).

- [ ] **Step 2: Rimuovi il blocco newsletter disabilitato** (deferita a v2, D6): via il form, resta la striscia scura "Lavora con me" con CTA.

- [ ] **Step 3: 🔍 Checkpoint**: bozza a Giovanni, itera fino a OK.

- [ ] **Step 4: Verifica**: `npm run build && npm run lint` verdi; con 2 articoli pubblici hero+griglia popolate.

- [ ] **Step 5: Commit**: `git add -A && git commit -m "copy(home): manifesto adozione-AI, via il form newsletter (v2)"`

---

### Task 6: Percorso — la storia verso l'adozione AI 🔍

**Files:**
- Modify: `src/app/percorso/page.tsx` (array `TAPPE` + intro)

- [ ] **Step 1: Riscrivi `TAPPE`**: l'H1 "Nel digitale dal 1998." regge, si tiene. Le 7 tappe vanno ricalibrate perché la traiettoria punti all'oggi: e-commerce → web marketing/SEO/analytics → Innovation Manager → **adozione AI nei processi** (posizione attuale: "Innovation Manager & AI Strategist", 2019–oggi, con Amendolia come caso pubblico citabile). Fonti: `docs/strategia/02-profilo-attuale.md` + `02-profilo-attuale.md` del progetto LinkedIn (più recente, fa fede) + post pillar "storia-metodo".

- [ ] **Step 2: Chiusura della pagina**: paragrafo-ponte "cosa significa per te" + CTA → `/lavoro`.

- [ ] **Step 3: 🔍 Checkpoint**: bozza a Giovanni, itera fino a OK.

- [ ] **Step 4: Verifica + commit**: build/lint verdi; `git add -A && git commit -m "copy(percorso): timeline riallineata alla traiettoria adozione-AI"`

---

### Task 7: Contatto — recapiti diretti puliti

**Files:**
- Modify: `src/app/contatto/page.tsx`

- [ ] **Step 1**: H1 "Raccontami il tuo caso." regge, si tiene. Togli ogni riferimento "form in lavorazione"; la pagina è: 2-3 frasi di invito (cosa scrivere: processo, non tool), poi `RECAPITI` (email/tel/LinkedIn). Il form Resend è **v2** (dipendenza esterna: verifica dominio SPF/DKIM su Aruba non completata — vedi spec §10 aggiornata).

- [ ] **Step 2: Verifica + commit**: build/lint verdi; `git add -A && git commit -m "copy(contatto): recapiti diretti, via i riferimenti al form (v2)"`

---

### Task 8: Coerenza site-wide — site.ts, metadata, footer

**Files:**
- Modify: `src/lib/site.ts` (TAGLINE, description, eventuali claim vecchi)
- Modify: `export const metadata` di `/percorso`, `/lavoro`, `/blog`, `/contatto` + description OG in `layout.tsx`
- Check: `src/components/site/{Masthead,SiteFooter,Wordmark}.tsx` per copy residuo del vecchio frame

- [ ] **Step 1**: passa in rassegna i file elencati e riallinea ogni stringa al nuovo frame (title/description coerenti con headline LinkedIn). Grep di controllo: `grep -rn "modello di business\|modelli di business\|innovare il modello" src/` → 0 risultati attesi a fine task (fuori da `content/posts` parcheggiati).

- [ ] **Step 2: Verifica + commit**: build/lint verdi; `git add -A && git commit -m "copy(site): metadata e copy trasversale riallineati (adozione AI)"`

- [ ] **Step 3: Push per review live**: `git push` (il sito resta dietro lock e noindex — il deploy Vercel serve a Giovanni per la review dal vivo).

---

### Task 9: QA e go-live (SOLO su GO esplicito di Giovanni)

**Files:**
- Create: `src/app/sitemap.ts`
- Modify: `src/app/robots.ts`, `src/app/layout.tsx` (robots), env Vercel (`SITE_PASSWORD`)

- [ ] **Step 1: QA visiva** su deploy locked: puppeteer-core + Chrome installato, full-page desktop+mobile di tutte e 6 le pagine (autoscroll; `--headless --screenshot` da solo non basta). Verifica redirect 308, empty-state, nav mobile.

- [ ] **Step 2: Criteri §8 spec**: 6 pagine approvate ✓ · 3 articoli nel blog (Copilot sbloccato se il post 5 è uscito; altrimenti go-live con 2 e flip successivo) · build verde ✓ · redirect ✓.

- [ ] **Step 3: Apertura**: crea `src/app/sitemap.ts` (home, percorso, lavoro, blog, articoli pubblici, contatto); `robots.ts` → allow all; togli `robots:{index:false}` da `layout.tsx`; commit + push. Poi rimuovi `SITE_PASSWORD` dalle env Vercel (il proxy senza env fa passare tutto) e redeploy.

- [ ] **Step 4: Post go-live**: aggiorna `_stato.md` dei progetti sito e LinkedIn in `work/` (da qui i post linkano gli articoli nel primo commento) + commit selettivo nel repo work.

---

## Self-review (fatta)

- **Copertura spec**: §5 alberatura→T3/T5-T7 · §6 offerta→T4 · §7 pipeline/semina→T1-T2 · §8 go-live→T9 · §9 docs→già fatto (commit `4d291ee`) · §10 out-of-scope rispettato (newsletter/form/automazione fuori).
- **Form contatto → v2**: ratificato da Giovanni il 21-07 (D9 in spec); T7 = recapiti diretti.
- **Design**: direzione ibrido B+A ratificata il 21-07 (D8/§12 in spec) → aggiunto Task 0 (design system), vincoli globali di palette/font/mobile-first, trattamento hero+feed nel Task 5.
- **Tipi**: slug servizi invariati (`mappa/workshop/affiancamento`) coerenti tra T3 (redirect/anchor) e T4 (dati); slug rubriche coerenti tra T1 (definizione) e T2 (frontmatter).
