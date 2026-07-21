# 09 — Revisione v1: riallineamento al posizionamento "adozione AI"

- **Data**: 2026-07-21
- **Stato**: spec approvata (brainstorm Giovanni + Claude, sessione 21-07)
- **Sostituisce**: le parti strategiche di `01-posizionamento.md`, `03-piano-editoriale.md`,
  `05-offerta-commerciale.md`, `08-alberatura-sito.md` (che restano come archivio storico,
  con nota "superato da 09" in testa)

---

## 1. Perché questa revisione

Il sito è fermo al posizionamento del 23 maggio ("consulente innovazione modelli di business,
AI come strumento"). Nel frattempo il profilo LinkedIn (progetto
`work/personale/giovannicambria-it/progetti/2026-contenuti-linkedin/`) ha pivotato e validato
un posizionamento nuovo (svolta 21-06, versione definitiva 05-07):

> **Innovation Manager & AI Strategist — adozione dell'AI per PMI e professionisti,
> anti-hype, "parto dai processi, non dagli strumenti".**

La produzione contenuti è viva lì: 12 post in backlog su 4 pillar, 1 pubblicato (AI Act,
15-07), cadenza 2/settimana. Il sito deve riallinearsi a quel posizionamento, non viceversa.

**Fonte di verità del posizionamento: l'about LinkedIn live** (non più `01-posizionamento.md`).

## 2. Obiettivo del sito (deciso)

**Priorità: credibilità.** Chi ti scopre su LinkedIn atterra e trova conferma: chi sei,
il metodo, i casi. Il blog è **archivio dei post LinkedIn**. Lead generation e capture
(newsletter, lead magnet) non sono l'obiettivo della v1.

## 3. Stato attuale verificato (21-07)

- Repo app: `site/.git` → `github.com/CambGio/giovannicambria.it`, branch `main`,
  pulito e allineato a `origin/main` (HEAD `d449330`). Deploy Vercel Hobby, dominio live,
  sito dietro gate `/lock`.
- **10 pagine implementate**: `/`, `/percorso`, `/lavoro` (hub 3 card) + `/lavoro/mappa`,
  `/lavoro/workshop`, `/lavoro/affiancamento`, `/blog`, `/blog/[slug]`, `/contatto`, `/lock`.
  Nav già rinominata "Percorso→Chi sono" (commit `5bdd566`).
- 4 articoli MDX in `site/content/posts/`: AI Act (draft), Amendolia, Matrice 3×3,
  Quattro categorie di costi.
- Copy attuale: interamente sul vecchio frame → **da riscrivere**, non da creare.
- I docs strategici 01–08 nella root del progetto **non sono versionati** (nessun `.git`
  nella root; solo `site/` è repo). Vedi §9.

## 4. Decisioni prese (log del brainstorm)

| # | Decisione | Scelta |
|---|---|---|
| D1 | Lavoro principale del sito | Credibilità; blog come archivio post LinkedIn |
| D2 | Offerta sul sito | **Pagina unica** "Lavora con me"; niente funnel a 3 pagine |
| D3 | Contenuto offerta | **Ripensata in chiave adozione AI** (non solo riscritta) |
| D4 | Meccanica blog | **Archivio leggero**: post quasi com'è, adattamento minimo; espansione solo a posteriori sui pezzi che performano |
| D5 | Articoli esistenti | Tieni AI Act + Amendolia; **parcheggia** (draft: true) Matrice 3×3 e Quattro categorie |
| D6 | Alberatura v1 | 6 pagine (§5); newsletter, lead magnet, /risorse deferiti a v2 |
| D7 | Go-live | Lock via **solo a v1 completa** (tutte le pagine con contenuto approvato) |
| D8 | Direzione visiva (21-07) | **Ibrido B+A**: impatto tipografico su fondo chiaro (Fraunces display, Inter UI, verde foresta unico accento) su struttura content-first (feed dei post in home, offerta come blocchi profondi); scuro solo per momenti singoli. **Brand-kit v2 (Manrope+terracotta) abbandonato**: l'identità è quella già pubblica dei caroselli LinkedIn. Dettaglio in §12 |
| D9 | Form contatto (21-07) | Slitta a **v2** (Resend non tra le dipendenze, dominio non verificato su Aruba); v1 = recapiti diretti |

## 5. Alberatura v1

| Route | Nav | Ruolo |
|---|---|---|
| `/` | — | Promessa (dall'headline LinkedIn), metodo in sintesi, 3 ultimi post, CTA → lavora con me |
| `/percorso` | "Chi sono" | La storia-credibilità: 28 anni di digitale → adozione AI. Attinge da about LinkedIn, doc 02, post pillar "storia&metodo" |
| `/lavoro` | "Lavora con me" | Offerta unica in chiave adozione AI (§6), CTA contatto |
| `/blog` + `/blog/[slug]` | "Blog" | Archivio leggero dei post LinkedIn |
| `/contatto` | "Contatto" | Recapiti diretti (email/tel/LinkedIn); form Resend → v2 (D9) |

**Modifiche strutturali rispetto all'esistente**: le 3 sottopagine `/lavoro/mappa`,
`/lavoro/workshop`, `/lavoro/affiancamento` **si eliminano** (contenuto assorbito nella
pagina `/lavoro`, con redirect 308 verso `/lavoro` per igiene). Si riusa la route `/lavoro`
esistente (nessun rename a `/lavora-con-me`: l'etichetta nav basta).

## 6. Offerta in chiave adozione AI

Scheletro a 3 passi **riframato** (si mantiene la progressione, cambia il contenuto):

1. **Mappa dell'adozione** — assessment: dove l'AI serve davvero nei tuoi processi
   (e dove no — coerenza anti-hype).
2. **Workshop pratico** — il team impara sul proprio lavoro reale, non su demo.
3. **Affiancamento** — adozione continuativa, misurata sui processi.

Tutto su una pagina, CTA unica verso `/contatto`. **Niente prezzi pubblici in v1**
(si parla in call). Il copy si scrive in implementazione e va **approvato da Giovanni**
prima del merge.

## 7. Pipeline blog-archivio

- Post LinkedIn **validato** → entry MDX: titolo proprio (non l'hook da feed), testo
  lievemente adattato, data, fonti citate per esteso.
- A sito live: il link all'articolo va nel **primo commento** del post LinkedIn
  (mai nel corpo — regola già fissata nel progetto LinkedIn).
- **Nessuna automazione in v1**: la pipeline "opzione C" (cron + approval UI) resta
  scoped a dopo il go-live, come da decisione nel progetto LinkedIn.
- Semina iniziale del blog (3 pezzi): AI Act (riallineato al post pubblicato il 15-07),
  Amendolia, Copilot (quando il post 5 esce su LinkedIn).

## 8. Go-live (criteri di uscita v1)

Il gate `/lock` si toglie quando **tutti** questi sono veri:

1. Le 6 pagine hanno contenuto reale approvato da Giovanni.
2. Blog seminato con 3 articoli; Matrice 3×3 e Quattro categorie parcheggiati (draft).
3. Build verde + QA visiva (puppeteer full-page, desktop+mobile).
4. Redirect 308 dalle vecchie sottopagine /lavoro/* attivi.

Da quel momento i post LinkedIn iniziano a linkare gli articoli nel primo commento.

## 9. Igiene repo e docs (task collaterali)

- **Docs non versionati**: i doc strategici della root non stanno in nessun git.
  Raccomandazione da validare al review: spostarli in `site/docs/strategia/` così vivono
  nel repo esistente (un solo repo, già con remote). Alternativa: `git init` alla root
  con `site/` esclusa (due repo annidati — sconsigliato).
- Nota "superato da 09" in testa a `01`, `03`, `05`, `08`.
- Aggiornare `work/personale/giovannicambria-it/progetti/2026-sito/_stato.md`
  (stato 🟢, prossima azione) e `codice.md` se cambia il layout docs.

## 10. Fuori scope v1 (deferiti, non cancellati)

- Newsletter (Resend Audiences) e lead magnet "sette domande" / `/risorse`.
- Form contatto su `/contatto` (D9; prerequisito esterno: verifica dominio Resend su Aruba — SPF/DKIM/DMARC).
- Automazione pubblicazione LinkedIn (opzione C: cron + approval UI `/studio`).
- Espansione SEO degli articoli (solo a posteriori, sui post che performano).
- Foto profilo LinkedIn (blocco nel progetto LinkedIn, non riguarda il sito).

## 11. Rischi e note

- **Anti-blocco**: questo progetto si è già fermato per asticella troppo alta.
  Ogni scelta qui privilegia il percorso più leggero che regge la cadenza reale.
- Il copy nuovo deve suonare come i post LinkedIn (stessa voce: concreto, anti-hype,
  paragrafi corti) — chi clicca dal profilo deve ritrovare la stessa persona.
- Vercel Hobby: il piano vieta l'uso commerciale e il sito ha una pagina-offerta.
  Rischio basso ma reale — da rivalutare al go-live (upgrade Pro o alternativa se serve).

## 12. Direzione di design (decisa 21-07, D8)

**Ibrido B+A** — scelto su ricerca comparativa con screenshot reali
(artifact "Direzioni di design", 6 riferimenti verificati):

- **Trattamento (dalla direzione B)**: la tipografia è il design. Fondo chiaro, scala
  tipografica generosa, spazio negativo, metadati "clinici" che danno ritmo, griglie
  ordinate, UI in bianco/nero col colore solo dove serve. Riferimenti:
  corentinbernadou.com · simon.abranowicz.com · chloescheffe.github.io.
- **Struttura (dalla direzione A)**: content-first. Feed dei post protagonista in home,
  offerta come pochi blocchi profondi, zero decorazione. Riferimenti: tomcritchlow.com ·
  jarango.com.
- **Momenti scuri (dalla direzione C)**: solo puntuali (es. striscia "Lavora con me"),
  mai l'intero sito. Riferimento: isabelmoranta.com.
- **Identità**: **Fraunces** (display) + **Inter** (UI/testo), palette bianco/nero +
  **verde foresta** come unico accento — la stessa identità già pubblica dei caroselli
  LinkedIn (coerenza profilo↔sito). Il **brand-kit v2** (Manrope + Source Serif 4,
  terracotta — mai andato online) è **superato**; `brand-kit/` resta come archivio.
- **Mobile-first**: si progetta e si verifica prima a 390px; border-radius 0 o minimo,
  niente effetti/gradient/glow (anti-hype anche nel vestito).
