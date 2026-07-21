# Prompt per design — Brand identity Studio Giovanni Cambria

> ⚠️ **DOCUMENTO STORICO / SUPERATO (2026-05-23).** Prompt one-shot già usato per generare il brand kit. Contiene il posizionamento vecchio AI-centrico ("ripensare il modello di business con l'AI", "Mappa AI") e "25 anni" (il dato corretto è **28**, da Switch 1998). Il brand prodotto è poi evoluto alla **v2** (Manrope + Source Serif 4 + IBM Plex Mono, terra cotta) — vedi `brand-kit/project/brand-guide.md`. **Non è una fonte vigente.**

> Da copiare e incollare in una nuova conversazione Claude (preferibilmente in modalità Artifacts su claude.ai, in modo che possa produrre SVG e mockup HTML/CSS).
> Lingua del prompt: italiano. La risposta verrà generata in italiano.

---

## Il prompt (copiare da qui in basso)

````
Sei un brand designer senior. Devi progettare la brand identity completa di uno studio di consulenza italiano. Lavora in italiano. Produci deliverable concreti (SVG inline per il logo, palette in HEX, mockup in HTML/CSS in artifact), non solo descrizioni.

## 1. Brief

**Cliente:** Giovanni Cambria, consulente freelance con 25 anni di esperienza in business digitale, e-commerce, web marketing, business design.
**Brand:** Studio Giovanni Cambria (personal brand con descrittore "Studio di consulenza"). Dominio: giovannicambria.it.
**Posizionamento dichiarato:**
> "Aiuto chi fa impresa a ripensare il modello di business con l'AI — senza diventare tecnico, senza hype. Case study reali."

**Target primario:** PMI italiane (5-100 dipendenti) in settori tradizionali (arredamento, assicurazioni, noleggio, ambientale, food/horeca). Decision-maker tipico: il titolare. Localizzati prevalentemente in Sicilia e Sud Italia, ma con ambizione nazionale.
**Target secondario:** Professionisti italiani (studi legali, commercialisti, agenzie, freelance evoluti) che vogliono usare l'AI per il proprio lavoro.

**Offerta commerciale che il sito deve sostenere (3 format):**
1. **Mappa AI** — audit strategico one-shot (1-2 settimane, 2.500-4.500€)
2. **Workshop in-house** — 1 giornata team (2.500-4.500€)
3. **Affiancamento progettuale** — ricorrente 3-12 mesi (2.000-4.000€/mese)

**Asset di credibilità:** progetti reali multi-anno (e-commerce, piattaforme digitali), esperienza operativa documentata, Innovation Manager (status MIMIT da confermare).

## 2. Tono di voce visivo (obbligatorio)

- **Editoriale, non product-launch.** Layout magazine, generosa aria bianca, tipografia che fa il lavoro pesante. Vibe: rivista business intelligente (riferimento: *MIT Tech Review*, *Stratechery*, *Internazionale*).
- **No hype, no AI-trendy.** Vietate: estetiche neon/glow/gradient AI-generation, illustrazioni AI-generate, effetti parallax, animazioni esuberanti, popup di mailing list aggressivi.
- **Italiano sobrio.** Riferimento culturale: la tradizione editoriale italiana di rigore tipografico (Mondadori, Adelphi). Non "consulenza siciliana folclorica".
- **Autorevole per sottrazione.** Il sito è uno spazio di lettura, non un funnel.

## 3. Tipografia — vincolo speciale

**Idea concettuale:** giocare sulla coincidenza tra il cognome "Cambria" e il font omonimo Cambria (serif transitional di Microsoft, designed by Jelle Bosma). Questo gioco di parole è il piccolo asset distintivo del brand.

**Limite pratico:** Cambria è licenza Microsoft, non distribuito come web font open-source. Sul sito web servirà una **sostituzione open-source dal feeling transitional simile**. Candidati da valutare e raccomandare:
- **Source Serif 4** (Adobe, OFL) — più vicino strutturalmente
- **Newsreader** (Production Type, OFL) — moderno con personalità editoriale
- **Fraunces** (Undercase, OFL) — opzionale display per titoli, più caratteriale

Scegli **una serif primaria** per i titoli + corpo testo del blog (deve reggere 5-10 minuti di lettura), e **una sans-serif compagna** per UI / metadata / navigation. Candidati sans: **Geist** (by Vercel, OFL), **Inter**, **IBM Plex Sans**.

Nel deliverable: dichiara apertamente la scelta, motiva, fornisci nomi Google Fonts URL o link a OFL.

## 4. Palette colori

Proponi una palette per il sistema:
- 1 colore di base chiaro (sfondo dominante)
- 1 colore di base scuro (testo)
- 1-2 grigi di sistema (testo secondario, bordi)
- **1 solo colore accento** (chiamate all'azione, link, evidenze)

Suggerimento di esplorazione per l'accento (scegli tu, motivando):
- ocra/sienna caldo — richiama Sicilia con sobrietà, non folclore
- verde foresta profondo — calmo, autorevole
- blu notte — convenzionale ma sicuro
- terracotta — caldo italiano

Fornisci tutto in **HEX** + tabella di contrasto WCAG AA per le combinazioni testo/sfondo principali.

## 5. Logo

Progetta il logo dello studio. Deliverable richiesti:
- **Versione primaria** orizzontale "Studio Giovanni Cambria"
- **Versione abbreviata** o monogramma per favicon / profile pic LinkedIn (es. "SGC", "GC", o un simbolo)
- **Versione tipografica pura** (solo lettering, no simbolo) — minimalista, da usare nell'header del sito
- **Versione su sfondo scuro**

Vincoli:
- Niente icone generiche da consulenza (ingranaggi, lampadine, frecce, nodi neurali AI)
- Se usi un simbolo, deve avere giustificazione concettuale legata al posizionamento ("rilettura del modello", "passaggio", "punto di partenza"), non decorativa
- Funziona in nero su bianco, senza colore. Il colore è un "extra", non l'identità.
- Output in **SVG inline** nell'artifact, oltre alla descrizione

## 6. Sistema visivo

Definisci:
- **Scala tipografica** (8 livelli: H1-H6, body, caption) con dimensioni rem e line-height
- **Spaziature** (sistema 4px o 8px)
- **Border radius** (consiglio: nessuno o massimo 4px — coerente con tono editoriale rigoroso)
- **Tono delle immagini** (fotografia documentale b/n? illustrazioni tecniche? icone outline minimal?)

## 7. Mockup di applicazione (in artifact HTML/CSS)

Produci almeno **2 mockup statici renderizzabili** come artifact HTML+Tailwind o HTML+CSS inline:
1. **Sezione hero della homepage** — titolo, sottotitolo, una CTA principale, logo nell'header
2. **Card di un articolo del blog** — titolo, excerpt, data, autore, tag, immagine cover placeholder

Bonus se ce la fai:
- Mockup del **footer**
- **Anteprima post LinkedIn nativo** (riquadro che simula come si vedrebbe un post su LinkedIn con questa identità)
- Mockup di **cover del PDF lead magnet**

## 8. Brand guide — formato output

Produci un documento markdown finale chiamato `brand-guide.md` con:
- Logo (SVG inline) e regole d'uso
- Palette con HEX + RGB + esempi di combinazione
- Tipografia (font scelto, link, scala, esempi)
- Spaziature, radius, principi di layout
- Cosa fare / cosa NON fare (lista, mai più di 5 voci per lato)
- Lista di tutti gli asset da produrre in fase successiva (export logo PNG, favicon, OG image, ecc.)

## 9. Vincoli finali

- **Non generare immagini decorative AI** (illustrazioni, fotografia AI). Usa placeholder grigi nei mockup.
- **Non proporre più di una variante per ogni deliverable.** Voglio una scelta motivata, non un menu. Se hai dubbi rilevanti, esponili in fondo come "decisioni aperte", non come "opzioni A/B/C".
- **Tutto in italiano** (testo nei mockup, motivazioni, commenti).
- **Sii diretto.** Niente preamboli, niente "ecco la mia proposta", entra dentro.

Inizia dal logo e dal sistema tipografico (le decisioni più strutturali), poi palette, poi mockup applicativi, poi brand guide finale.
````

---

## Note per Giovanni (non parte del prompt)

Il prompt sopra è autosufficiente: lo apri in una nuova conversazione su [claude.ai](https://claude.ai) (consigliata la modalità con Artifacts attiva, così Claude può produrre SVG e HTML interattivi), lo incolli intero, e Claude lavora.

Quando ricevi i deliverable, salvali in `site/public/brand/` (logo SVG, esempi PNG) e in `BRAND.md` nella root del progetto. Da lì li integriamo nello sviluppo del sito (variabili CSS Tailwind per palette, link `<head>` per i font, componente `<Logo />`).

Se vuoi che il risultato finale sia direttamente importabile, dopo aver ricevuto la prima risposta puoi aggiungere: *"Ora produci tutto come file scaricabili: un SVG per ogni variante di logo, un file `tokens.css` con le custom property, un `brand-guide.md` completo, e i mockup HTML in file separati."*
