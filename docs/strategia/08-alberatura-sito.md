# Alberatura del sito — Giovanni Cambria

> ⚠️ **Superato da [[09-revisione-v1-2026-07]]** (2026-07-21) per le parti strategiche — conservato come archivio storico.

> Documento di lavoro v0.1 — fonte di verità sulla struttura informativa del sito `giovannicambria.it`.
> Data prima stesura: 2026-05-21.
> Obiettivo del sito: **generare lead qualificati** verso i tre format di servizio descritti in `05-offerta-commerciale.md`, alimentati dal blog tecnologia/innovazione descritto in `03-piano-editoriale.md` e dalla redistribuzione automatica dei contenuti su LinkedIn.

---

## 1. Tesi strategica

Il sito non è una vetrina enciclopedica. È un funnel a tre stadi.

- **Top**: il blog cattura traffico organico (Google + LinkedIn) di imprenditori e dirigenti di PMI italiane che cercano risposte su tecnologia e modelli di business.
- **Middle**: il lettore del blog viene convertito in *contatto qualificato* tramite lead magnet (PDF "Sette domande prima dell'AI") + newsletter del lunedì.
- **Bottom**: il contatto qualificato atterra sulle pagine `/lavoro/*` e converte in *richiesta commerciale* attraverso il form `/contatto`.

Tre stadi, tre tipi di pagina, tre tipi di CTA. Tutto il resto è zavorra che non aggiunge lead.

Il **claim** ufficiale (`Consulente in innovazione dei modelli di business. Per imprenditori italiani che vogliono capire prima di adottare.`, vedi `01-posizionamento.md` §2.bis) è un'apertura di posizionamento. Compare sulla homepage e nel meta-titolo del sito, non si ripete su ogni pagina. Le pagine commerciali parlano di *cosa compri*, non di chi sono io.

---

## 2. Mappa pagine

```
/                                Homepage
│
├── /lavoro                      Hub commerciale (3 card → schede)
│   ├── /lavoro/mappa            Format 1 — Mappa dell'innovazione
│   ├── /lavoro/workshop         Format 2 — Workshop in-house "Innovazione per il tuo team"
│   └── /lavoro/affiancamento    Format 3 — Affiancamento (solo sotto-taglio 3a per ora)
│
├── /blog                        Indice articoli, filtro per rubrica
│   └── /blog/[slug]             Singolo articolo (MDX)
│
├── /approccio                   Chi sono, metodo, 28 anni di operatività
│
├── /contatto                    Form "Raccontami il tuo caso in 5 minuti"
│
├── /risorse/sette-domande       Landing lead magnet PDF (gating email)
│
├── /newsletter                  Iscrizione + archivio edizioni
│
└── /lock                        [esistente] gate password sviluppo
```

Pagine tecniche di servizio (non in nav): `robots.txt`, `sitemap.xml`, `feed.xml`, `og-image.png`, eventuali `404.tsx`/`error.tsx`.

### Nav principale

Quattro voci, in quest'ordine: **Lavoro · Blog · Approccio · Contatto**.

Il cambio `Scritti → Blog` rispetto a v0 della nav (vedi `site/src/lib/nav.ts`) è una concessione alla chiarezza per il visitatore non editoriale (target PMI/imprenditore). Il tono editoriale del brand resta espresso nei contenuti, non nel label di navigazione.

### Footer

Quattro colonne, da sinistra a destra: identità (nome, sede Milazzo, P.IVA, mail, telefono), nav rapida (le 4 voci principali), risorse (`/risorse/sette-domande`, `/newsletter`), social (LinkedIn).

Niente menzione MIMIT finché lo status `Innovation Manager` non è confermato (vedi `05-offerta-commerciale.md`).

---

## 3. Per ogni pagina: scopo, sezioni, CTA, SEO

### 3.1 Homepage (`/`)

**Scopo.** Comunicare il posizionamento in 5 secondi e instradare il visitatore su una delle tre direzioni utili: *lavora con me*, *leggi*, *scarica il PDF*. Non vendere subito. Non spiegare tutto.

**Sezioni nell'ordine di scorrimento.**

1. **Hero**: claim ufficiale + sottotitolo. Due CTA, una primaria (`/lavoro`), una secondaria (`/blog`).
2. **Cosa faccio**: 3 card che linkano alle schede `/lavoro/mappa`, `/lavoro/workshop`, `/lavoro/affiancamento`. Una frase di promessa + "a partire da X €" + "Tempi".
3. **Ultimi scritti**: 3 articoli recenti dal blog, ordinati per data. Link a `/blog`.
4. **Lead magnet "Sette domande prima dell'AI"**: card con copertina PDF + form email inline. Link a `/risorse/sette-domande` per chi vuole più contesto.
5. **Newsletter del lunedì**: blocco di iscrizione con un periodo soltanto di promessa ("la lettura del lunedì per imprenditori italiani") + form email. Link a `/newsletter`.
6. **Footer**.

**CTA primaria.** `/lavoro` (commerciale).
**CTA secondarie.** `/blog`, `/risorse/sette-domande`, iscrizione newsletter.

**SEO.**
- Title: `Giovanni Cambria — Consulente in innovazione dei modelli di business`.
- Meta description: 1 frase, 150-160 caratteri, contiene "PMI italiane" e "innovazione modelli di business".
- Schema.org: `Person` (Giovanni Cambria) + `ProfessionalService` (Studio di consulenza).
- H1: il claim ufficiale, intero o in due righe (claim + sub).

---

### 3.2 Hub commerciale `/lavoro`

**Scopo.** Far capire al visitatore che ho **tre porte d'ingresso commerciale, non una**: un audit corto (`mappa`), un workshop in azienda (`workshop`), un affiancamento ricorrente (`affiancamento`). Ognuna serve a un momento diverso del bisogno. Aiutare il visitatore a scegliere quella giusta.

**Sezioni.**

1. **Apertura** (1 paragrafo): "Lavoro con PMI italiane che vogliono innovare il modello di business prima del tool. Ecco tre modi di iniziare." Niente claim, niente bio.
2. **Tre card affiancate**: per ogni format → titolo, una frase di promessa, "Per chi è", "Cosa ricevi", "Tempi", "A partire da X €", CTA `Vedi scheda →` verso la sotto-pagina dedicata.
3. **Tabella di scelta** (opzionale, da decidere in produzione): righe = bisogno espresso dal visitatore ("voglio capire dove iniziare", "voglio allineare il team", "voglio un progetto vero"), colonne = i 3 format, celle = quale format risponde.
4. **CTA finale**: bottone unico verso `/contatto` con copy *"Non sei sicuro di quale format scegliere? Scrivimi."*

**CTA primaria.** `/contatto`.
**CTA secondarie.** Le tre sotto-pagine.

**SEO.**
- Title: `Lavora con me — Giovanni Cambria` (o variante che include "consulenza innovazione PMI").
- Schema.org: `ProfessionalService` con `hasOfferCatalog` che elenca i 3 servizi.

---

### 3.3 Scheda `/lavoro/mappa`

**Scopo.** Vendere il Format 1 (audit "Mappa dell'innovazione") come *modo a basso impegno* per iniziare. È la conversione più probabile dal blog.

**Sezioni.**

1. **Hero locale**: titolo del format + 1 frase di promessa + "A partire da X €" + CTA `/contatto` con campo `format=mappa` precompilato.
2. **Per chi è**: bullet list dei profili target (PMI cluster, professionisti cluster).
3. **Cosa ricevi**: lista di deliverable concreti (workshop 90 min, documento 12-18 pagine, registrazione, ecc., vedi `05-offerta-commerciale.md`).
4. **Tempi**: 1-2 settimane, scomposizione di cosa succede in ognuna.
5. **Come funziona**: 4-5 step (kick-off → analisi → interviste → workshop di restituzione → consegna).
6. **FAQ**: 4-6 domande (chi sceglie le interviste, cosa portare al kick-off, copertura voucher *— solo quando MIMIT confermato*, NDA, lingua delle interviste).
7. **CTA finale**: form contatto inline (versione corta) o bottone a `/contatto`.

**CTA primaria.** `/contatto` con campo nascosto `format=mappa`.

**SEO.**
- Title: `Mappa dell'innovazione — Audit strategico per PMI italiane`.
- Long-tail target: `audit innovazione PMI`, `consulenza innovazione modelli business`.
- Schema.org: `Service` annidato in `ProfessionalService`, con `offers.price`.

---

### 3.4 Scheda `/lavoro/workshop`

**Scopo.** Vendere il Format 2 (workshop in-house) ai decisori di PMI 8-30 persone che vogliono allineare il team prima di partire.

**Sezioni.** Stessa struttura di `/lavoro/mappa`: hero locale → "Per chi è" → "Cosa ricevi" → "Una giornata tipo" (con divisione 4h teoria + 3h laboratorio) → "Logistica" (in azienda vs. remoto, trasferta, numero partecipanti) → FAQ → CTA finale.

**CTA primaria.** `/contatto` con `format=workshop`.

**SEO.**
- Title: `Workshop in-house "Innovazione per il tuo team" — Giovanni Cambria`.
- Long-tail target: `workshop innovazione aziendale`, `formazione team innovazione PMI`.

---

### 3.5 Scheda `/lavoro/affiancamento`

**Scopo.** Vendere il Format 3a (affiancamento "leggero", 3 mesi minimo). Il Format 3b voucher-ready resta in attesa di conferma MIMIT — fino ad allora questa pagina parla **solo** del 3a.

**Sezioni.** Hero locale → "Per chi è" → "Cosa includo" (giornate-uomo/mese, stand-up settimanale, deliverable di avanzamento) → "Durata e prezzo" → "Come iniziamo" (in genere parte da una Mappa dell'innovazione, citazione + link a `/lavoro/mappa`) → FAQ → CTA finale.

**Quando MIMIT sarà confermato**: aggiungere una sezione "Voucher Consulenza Innovazione MIMIT 2026" sotto "Durata e prezzo", con copy condizionale già pronto in `05-offerta-commerciale.md` §"Posizionamento sul sito". Niente pagina dedicata `/lavoro/voucher` per ora (decisione 2026-05-21).

**CTA primaria.** `/contatto` con `format=affiancamento`.

---

### 3.6 Blog `/blog`

**Scopo.** Indice di lettura del blog. Punto di atterraggio per chi arriva da newsletter o LinkedIn cercando "altri articoli".

**Sezioni.**

1. **Hero**: 1 frase che spiega la tesi editoriale di `03-piano-editoriale.md` in versione visitatore ("Cosa cambia per chi fa impresa quando cambia la tecnologia.").
2. **Filtri rubrica**: tre toggle/link orizzontali — *Cosa cambia se…* · *Storia di…* · *Modelli*. MVP: query string `?rubrica=modelli`; archivio dedicato per rubrica solo se serve.
3. **Lista articoli**: card con titolo, rubrica, data, tempo di lettura, 2 righe di estratto. Paginazione o "infinite scroll", da decidere in produzione.
4. **Card newsletter**: a metà lista o in fondo, blocco di iscrizione.

**SEO.**
- Title: `Blog — Innovazione dei modelli di business per PMI italiane`.
- Schema.org: `Blog` con `blogPost` ripetuto.

---

### 3.7 Articolo `/blog/[slug]`

**Scopo.** Convertire il lettore in: (a) iscritto alla newsletter, (b) scaricatore del lead magnet, (c) lettore di altri articoli — in quest'ordine di tepore.

**Sezioni.**

1. **Header**: rubrica + titolo (H1) + sottotitolo + autore + data + tempo lettura.
2. **Corpo MDX**: prosa, immagini, blockquote, callout. Niente sommario click-to-scroll su articoli sotto le 1.500 parole.
3. **CTA in-article (a metà)**: blocco "Sette domande prima dell'AI" → `/risorse/sette-domande`.
4. **Fine articolo**: blocco autore (mini-bio Giovanni con foto) + CTA newsletter (form email inline).
5. **Articoli correlati**: 3 card di articoli stessa rubrica o stessi tag.

**CTA primaria.** Iscrizione newsletter.
**CTA secondaria.** Lead magnet PDF.

**SEO.**
- Title: il titolo dell'articolo + ` — Giovanni Cambria`.
- Meta description: il sottotitolo MDX, oppure il primo paragrafo accorciato.
- Schema.org: `Article` (o `BlogPosting`) con `author.@type = Person`, `datePublished`, `dateModified`.
- URL pattern: `/blog/[slug]` flat. **Niente** `/blog/anno/mese/[slug]` — più stabile, evita redirect futuri.

**Pattern rubrica**: la rubrica diventa un attributo MDX in frontmatter (`rubrica: modelli`), non una sotto-cartella URL.

---

### 3.8 Approccio `/approccio`

**Scopo.** Pagina "chi sono" senza l'effetto autocelebrativo. Posiziona il lettore su *perché* puoi essere credibile a parlare di innovazione: 28 anni di operatività digitale, ruolo Innovation Manager 2018-2024 in Empire S.r.l., formazione FranklinCovey/Cegos + Business Design Academy 2019, casi recenti del 2024 (Amendolia, Sinotech).

**Sezioni.**

1. **Apertura editoriale**: 1 paragrafo in prima persona che inquadra il problema del posizionamento di partenza ("Il 90% dei consulenti AI italiani vende un tool. Io non lavoro così.").
2. **Il metodo**: i 4 livelli di efficacia (Personale, Interpersonale, Manageriale, Organizzativo) eredità Covey/Cegos, applicati come griglia di diagnosi nei progetti. Vedi `wiki/pages/metodi/sette-regole-covey`.
3. **La storia**: timeline narrativa breve — Switch MultiMedia (1998-2007), Eureweb (2009-2018), Empire come Innovation Manager (2018-2024), autonomia 2019+. Non un CV: una sequenza di domande che mi sono fatto.
4. **Cosa NON sono**: bullet list da `01-posizionamento.md` §6 (non prompt engineer, non guru, non enterprise consultant Fortune 500, non news aggregator).
5. **CTA finale**: doppia, una verso `/lavoro`, una verso `/contatto`.

**SEO.**
- Title: `Approccio — Giovanni Cambria`.
- Schema.org: `Person` esteso con `alumniOf`, `worksFor`, `knowsAbout`.

---

### 3.9 Contatto `/contatto`

**Scopo.** Convertire l'interesse in richiesta commerciale qualificata.

**Sezioni.**

1. **Hero**: 1 frase ("Raccontami il tuo caso in 5 minuti. Rispondo entro 48 ore lavorative.").
2. **Form**: 6 campi essenziali. Nome, azienda, settore, dimensione (range), problema percepito (textarea breve), contatto preferito (email/telefono/LinkedIn). Campo nascosto `format` precompilato dalle schede `/lavoro/*`. Submit via Resend o provider equivalente.
3. **Recapiti diretti**: mail `studio@giovannicambria.it`, telefono `+39 328 446 0482`, LinkedIn.
4. **Cosa succede dopo l'invio**: 3 step ("Ti rispondo entro 48h → eventuale call di 30 min → preventivo se ha senso").

**CTA primaria.** Submit del form.

**SEO.**
- Title: `Contatto — Giovanni Cambria`.
- Schema.org: `ContactPage`. Niente Schema su form.

**Note tecniche.** Form serverless via Vercel + Resend. Niente `mailto:` come fallback primario. Honey-pot anti-spam + rate limit base.

---

### 3.10 Lead magnet `/risorse/sette-domande`

**Scopo.** Trasformare un visitatore freddo (atterrato dal blog o da LinkedIn) in iscritto alla mailing list, in cambio del PDF "Sette domande prima dell'AI" (o titolo finale equivalente).

**Sezioni.**

1. **Hero**: cover del PDF + titolo + 1 frase di promessa.
2. **Cosa trovi dentro**: 3-5 bullet di estratto (le sette domande, in versione abbreviata).
3. **Form download**: 2 campi soltanto (email + checkbox consenso). Submit → email transactional Resend con link al PDF su Vercel Blob (URL firmato, scadenza 7 giorni).
4. **Bio mini-Giovanni** sotto: 2 righe + foto.
5. **Cross-sell soft**: 2 card verso `/blog` e `/lavoro`.

**CTA primaria.** Submit del form.

**SEO.**
- Title: `Sette domande prima dell'AI — Guida gratuita per PMI italiane`.
- Meta description: orientata al beneficio ("Scarica il PDF e scopri le 7 domande che ogni imprenditore italiano dovrebbe farsi prima di adottare l'AI in azienda.").
- Schema.org: `WebPage`.
- Robots: indicizzata (a differenza di altre pagine di "thank you" che resteranno noindex).

**Note tecniche.** Storage PDF: Vercel Blob. Distribuzione: URL firmato via email transactional Resend, non download diretto dalla pagina (evita scaricamento senza email).

---

### 3.11 Newsletter `/newsletter`

**Scopo.** Pagina dedicata alla newsletter del lunedì come *prodotto editoriale a sé*, non solo come canale.

**Sezioni.**

1. **Hero**: nome newsletter (placeholder: *"La lettura del lunedì"*) + 1 frase di promessa + form email inline.
2. **Cosa ricevi ogni lunedì**: 3 bullet — i 2 articoli della settimana precedente + 1 "extra dietro le quinte" non pubblicato altrove (decisione 2026-05-16, vedi `03-piano-editoriale.md`).
3. **Archivio**: lista delle ultime 10-20 edizioni con data + titolo + estratto. Ogni edizione è cliccabile e apre l'edizione completa in versione web (renderizzata da Resend Audiences o equivalente, oppure pagina statica generata).
4. **CTA finale**: form email duplicato.

**SEO.**
- Title: `Newsletter del lunedì — Giovanni Cambria`.
- Schema.org: `WebPage`.

**Note tecniche.** Form alimenta una lista Resend (o equivalente). Doppio opt-in. Archivio pubblico ma indicizzato selettivamente — le edizioni "extra dietro le quinte" sono solo per iscritti; sull'archivio web compaiono i 2 articoli ricondivisi + abstract dell'extra.

---

## 4. Flusso di conversione (perché questa alberatura genera lead)

Ipotizzo i tre flussi tipici di un visitatore.

**Flusso A — lettore freddo da Google.** Atterra su `/blog/[slug]` (cercando "AI Act PMI" o simile). Legge l'articolo. A metà incontra la CTA del lead magnet → scarica il PDF, lascia email → entra in lista. Lunedì successivo riceve la newsletter con altri 2 articoli + dietro-le-quinte. Dopo 2-4 settimane di newsletter, clicca su CTA che porta a `/lavoro` → legge una scheda → invia form `/contatto`. Tempo: 4-8 settimane dal primo atterraggio.

**Flusso B — lettore freddo da LinkedIn.** Vede un post nativo nel feed, clicca su "link in commento" → atterra su `/blog/[slug]`. Da qui due varianti: (B1) come A, oppure (B2) salta direttamente a `/lavoro` se l'articolo è una *Storia di…* (case study) che ha "scaldato" il bisogno commerciale. Tempo: 1-4 settimane.

**Flusso C — referral diretto.** Atterra su `/` da un passa-parola o biglietto da visita. Legge claim + 3 card → clicca direttamente sulla scheda `/lavoro/*` pertinente → invia form. Tempo: stessa giornata.

Ogni pagina del sito deve essere ottimizzata per **uno** di questi flussi. Se una pagina non serve nessuno dei tre, va tagliata o riformulata.

---

## 5. Pubblicazione automatica su LinkedIn (interfaccia rispetto al sito)

Il sito è la **fonte canonica**. LinkedIn è il **canale di distribuzione**.

Per ogni articolo `/blog/[slug]` pubblicato:

1. Un job (Vercel Cron) parte 5 minuti dopo la pubblicazione MDX o on-demand.
2. Il job legge il contenuto MDX, lo passa all'AI SDK (Vercel AI Gateway), genera un post LinkedIn nativo (800-1.200 caratteri, hook nelle prime 2 righe, formato definito in `03-piano-editoriale.md`).
3. Il post va in una **coda di approvazione** (UI sotto `/admin` o tabella DB amministrata da me). Niente auto-pubblicazione: l'algoritmo LinkedIn punisce automation pura.
4. Approvazione → pubblicazione via LinkedIn Share API (`w_member_social`), con link al `/blog/[slug]` **nel primo commento**, non nel post.
5. Carosello LinkedIn (per *Modelli* e *Storia di…*): generato manualmente in v1, automatizzato solo in v2.

Vincolo strutturale: l'app LinkedIn deve essere collegata a una Company Page (vedi CLAUDE.md). La company page esiste già.

**Implicazione sull'alberatura.** Niente pagina pubblica `/admin` su nav. Quando arriverà sarà una sotto-app protetta da gate password (riuso del meccanismo `/lock` esistente), su una sotto-rotta tipo `/studio` o `/admin`.

---

## 6. Convenzioni tecniche dell'alberatura

- **URL flat per il blog**: `/blog/[slug]`, niente `/blog/anno/mese/[slug]`.
- **Filtro rubrica**: query string `?rubrica=modelli` come MVP. Sotto-cartella `/blog/rubrica/[name]` solo se diventerà necessario per SEO.
- **Tag tematici**: filtro client-side, non pagine archivio dedicate in v1.
- **Sitemap**: `app/sitemap.ts` autogenerata da pagine + slug MDX.
- **RSS feed**: `app/feed.xml/route.ts`, contiene tutti gli articoli del blog.
- **OG image**: generata dinamicamente con `next/og` per ogni articolo (titolo + rubrica + autore su sfondo brand).
- **Schema.org**: JSON-LD inline in `<script type="application/ld+json">`, generato in layout/pagina. Tipi minimi: `Person`, `ProfessionalService`, `Service`, `BlogPosting`, `WebPage`, `ContactPage`.
- **Robots**: `/`, `/blog/**`, `/lavoro/**`, `/approccio`, `/contatto`, `/risorse/**`, `/newsletter` → indicizzate **dopo** la rimozione del gate sviluppo. Tutto il resto → noindex.

---

## 7. Cosa NON c'è (e perché)

Annoto qui le pagine **escluse** dall'alberatura per evitare creep nelle prossime sessioni.

- **`/case-study` o `/lavori`** come sezione dedicata: i case study vivono come articoli `/blog/[slug]` nella rubrica *Storia di…*. Non duplico.
- **`/voucher` o `/finanziamenti`**: niente pagina dedicata MIMIT finché lo status non è confermato. La leva voucher verrà mostrata come sezione condizionale dentro `/lavoro/affiancamento`.
- **`/about-me` separata da `/approccio`**: una sola pagina identitaria.
- **`/servizi` separata da `/lavoro`**: stesso concetto, evito sinonimi.
- **`/risorse` come hub**: per ora c'è solo `/risorse/sette-domande`. Quando ci saranno 3+ risorse (PDF, template, calculator) si valuterà un hub.
- **`/privacy` e `/cookie-policy`**: richieste da legge (privacy, cookie), saranno aggiunte in fase di pre-lancio. Footer-only, non in nav.

---

## 8. Decisioni chiuse (2026-05-21)

1. ✅ **Tre format = tre pagine separate** sotto `/lavoro/*`, non una pagina lunga con ancore. Motivazione: SEO long-tail, analytics per format.
2. ✅ **Blog si chiama "Blog"** in nav e URL (`Scritti → Blog`). Motivazione: chiarezza per pubblico PMI/imprenditore. Il tono editoriale resta nei contenuti.
3. ✅ **Niente voucher MIMIT come pagina dedicata** finché lo status non è confermato. Sezione condizionale dentro `/lavoro/affiancamento` quando attivabile.
4. ✅ **Newsletter ha pagina dedicata** `/newsletter` con archivio, non solo blocchi di iscrizione.
5. ✅ **URL articoli flat**: `/blog/[slug]`, niente data nell'URL.
6. ✅ **Lead magnet PDF**: distribuito via email transactional Resend con URL firmato Vercel Blob, non download diretto.

## 9. Decisioni aperte

- [ ] **Nome definitivo del lead magnet**: candidato `"Sette domande prima dell'AI"`. Da chiudere quando si scriverà il contenuto reale del PDF.
- [ ] **Nome della newsletter**: placeholder `"La lettura del lunedì"`. Da decidere.
- [ ] **Sotto-rotta admin** per la coda di approvazione LinkedIn: `/studio` vs `/admin` vs altro. Da chiudere quando si farà il modulo automazione.
- [ ] **Articoli correlati a piè di articolo**: scelta su rubrica vs tag. Da chiudere quando ci saranno 5+ articoli pubblicati.
- [ ] **Status MIMIT Innovation Manager**: in conferma su `padigitale.invitalia.it` (vedi `01-posizionamento.md` §7). Determina se aggiungere la sezione voucher in `/lavoro/affiancamento`.

---

## 10. Prossimo step operativo

Implementare lo **scaffold delle route** nel sito (`site/src/app/*`) come pagine stub con titolo, descrizione, CTA placeholder. In ordine di priorità: prima le 4 voci di nav (`/lavoro`, `/blog`, `/approccio`, `/contatto`) per chiudere il sanguinamento di 404 dopo l'unlock; poi le sotto-pagine `/lavoro/*`; infine `/risorse/sette-domande` e `/newsletter`. Il contenuto reale di ogni pagina si scrive in iterazione, non tutto subito.

L'aggiornamento di `site/src/lib/nav.ts` da `Scritti` a `Blog` è il primo micro-task atomico — può andare insieme allo scaffold delle pagine stub.
