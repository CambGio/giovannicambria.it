# Stack tecnico — v0.2

> Documento di lavoro v0.2 — fonte di verità sullo stack del sito `giovannicambria.it` e della pipeline editoriale + automazione LinkedIn.
> Data prima stesura: 2026-05-15. Aggiornamento corrente: 2026-05-21.
>
> v0.2 (2026-05-21): aggiornate versioni reali (Next.js 16, React 19, Tailwind v4), risolte decisioni iniziali (account Vercel, dominio, CMS), aggiunte le scelte tecniche richieste dall'alberatura `08-alberatura-sito.md` (MDX loader, storage coda LinkedIn, form, schema.org, OG image, cache, sitemap/RSS).

---

## 1. Tesi tecnica

Tre obiettivi servirli con un'unica architettura: sito vetrina + blog editoriale a cadenza 2/sett + automazione di pubblicazione su LinkedIn. Lo stack giusto è quello che minimizza la **frizione fra "ho un'idea" e "è pubblicata"** — non quello tecnicamente più elegante.

La verità tecnica scomoda sull'automazione LinkedIn va detta subito. L'API LinkedIn ufficiale per pubblicare a nome di un utente sul **profilo personale** è accessibile (scope `w_member_social`, prodotto "Share on LinkedIn"), ma impone due vincoli non negoziabili. **Primo**: l'app deve essere collegata a una Company Page LinkedIn, anche minimale. **Secondo**: l'algoritmo LinkedIn penalizza i post che linkano fuori piattaforma, quindi non basta "copia-incolla l'articolo": serve un layer che riscrive il contenuto in formato post nativo e mette il link al blog **nel primo commento**. Questo trasforma l'automazione da semplice "pubblicatore" a piccola pipeline di generation. Coerente, fra l'altro, con il posizionamento "innovazione dei modelli di business" — la pipeline stessa diventa caso d'uso da raccontare.

---

## 2. Stack — quadro sintetico

| Layer | Scelta v0.2 | Note |
|---|---|---|
| Framework | **Next.js 16.2.6** App Router | Già attivo. Convention `proxy.ts` (no `middleware.ts`). |
| UI runtime | **React 19.2.4** | Server Components, Server Actions, `useFormState`. |
| Styling | **Tailwind v4** (`@tailwindcss/postcss`) | Token brand in `@theme inline` di `globals.css`. |
| Hosting | **Vercel** (progetto `giovannicambria-it`) | Auto-deploy on push `main`. Plan Hobby per ora, Pro se servirà. |
| Dominio | **giovannicambria.it** (primario) + **.com** (redirect 308) | Registrati su Aruba, DNS puntati 2026-05-20, SSL Let's Encrypt emesso. |
| Blog content | **MDX in repo Git** (`content/posts/*.mdx`) | Niente CMS. Loader: **velite** (vedi §4.1). |
| Storage asset (PDF, immagini grosse) | **Vercel Blob** | Public + signed URL per PDF gated. |
| Newsletter | **Resend + Resend Audiences + react-email** | Sender `studio@giovannicambria.it`, domain verification su Resend. |
| Form contatto / iscrizione | **Server Actions Next.js + zod + Resend** | Anti-spam: honeypot + Cloudflare Turnstile. Niente `react-hook-form`. |
| Coda approvazione post LinkedIn | **Vercel KV** (Upstash Redis) | Draft + status + timestamp. Schema più ricco solo se serve (allora Postgres). |
| Generazione post LinkedIn nativi | **AI SDK + Vercel AI Gateway** (modello Claude) | Failover, logging, no lock-in. |
| Automazione LinkedIn | **Vercel Cron + LinkedIn Posts API** (`w_member_social`) | Token refresh server-side, alert mail 30gg prima della scadenza refresh token. |
| Schema.org JSON-LD | **Inline TS + `schema-dts`** (devDependency) | Niente libreria runtime. Typing per autocomplete. |
| OG image | **`next/og`** (Satori) | Route Handler dinamica per articolo, template brand. |
| Sitemap / RSS / robots | **File convention Next.js** | `app/sitemap.ts`, `app/feed.xml/route.ts`, `app/robots.ts`. |
| Analytics | **Vercel Web Analytics** | Privacy-first, no cookie banner. |
| Auth area admin | Riuso gate password (`/lock`) | Per sotto-rotta `/studio` futura, niente NextAuth. |

---

## 3. Architettura della pipeline editoriale

Il flusso end-to-end è uno solo, percorso in tre tappe.

**Stesura.** Produco l'articolo come file `.mdx` in `content/posts/`, con front-matter typed da velite (slug, titolo, sottotitolo, data, rubrica, tag, cover, excerpt) e corpo in markdown. Tipicamente lavoro in coppia con Claude: bozza da note → riscrittura → file `.mdx` pronto. Commit + push.

**Pubblicazione web.** Vercel costruisce e deploya. L'articolo è live entro 1-2 minuti dal push. Lo stesso deploy può triggerare la pipeline LinkedIn per i nuovi `.mdx` rilevati (via webhook deploy o cron periodico, decidere in fase 6).

**Pubblicazione LinkedIn.** Il job di generation prende l'articolo, lo riscrive in formato post nativo LinkedIn (hook nelle prime 2 righe, paragrafi corti, no link inline, call-to-action soft) con un prompt strutturato che gira via AI Gateway su Claude. Il post va in stato `draft` su Vercel KV. Da una piccola dashboard sotto `/studio` (rotta protetta dallo stesso gate password) posso: rivedere il draft, modificarlo, approvarlo. Solo dopo l'approvazione manuale, un cron schedulato (o un click "Pubblica ora") invia il post via LinkedIn Posts API, e inserisce il link all'articolo come primo commento.

Il punto critico: **l'approvazione resta umana**. L'AI non posta a nome di Giovanni senza che lui abbia letto. È coerente col posizionamento "no hype" e tutela dal drift del tono di voce. Costo cognitivo: ~2 minuti di review per articolo, ~4 minuti/settimana totali.

---

## 4. Scelte tecniche — dettaglio e motivazione

### 4.1 MDX loader → **velite**

Tre candidati confrontati: `@next/mdx`, `next-mdx-remote`, `velite`.

`@next/mdx` è il più "ufficiale" Next.js, ma sposa il pattern `app/posts/[slug]/page.mdx` un-file-per-articolo che diventa scomodo a 50+ articoli e non supporta nativamente collezioni typed.

`next-mdx-remote` è il classico delle blog community, lettura runtime, ma rinuncia ai typing del frontmatter e costa millisecondi su ogni render se non si fa cache.

`velite` (autore di vfile, mantenuto attivo nel 2025-2026) è un build-time content layer typed: definisce uno schema zod del frontmatter, valida tutti i `.mdx` a build, genera output JSON typed in `.velite/`. Risultato: TypeScript autocomplete su `post.rubrica`, errore di build se un articolo manca di un campo obbligatorio, zero runtime cost. Successore naturale di Contentlayer (fermo da 2024).

Schema frontmatter previsto:

```ts
{
  slug: string,
  titolo: string,
  sottotitolo: string,
  data: Date,
  rubrica: 'cosa-cambia-se' | 'storia-di' | 'modelli',
  tag: string[],
  cover: string | undefined,
  excerpt: string,
  draft: boolean
}
```

Niente `tempoLettura`: calcolato a build da velite plugin a partire dal corpo.

### 4.2 Coda approvazione LinkedIn → **Vercel KV**

Vercel KV (Upstash Redis sotto, provisioning via Vercel Marketplace) è sufficiente per il volume previsto: ~8 articoli/mese → ~8 draft + status. Chiavi tipo `linkedin:draft:[slug]` con valore JSON `{ text, status, createdAt, approvedAt, publishedAt, postUrn }`. Una secondary index `linkedin:queue:pending` come Redis set.

Postgres (Neon via Marketplace) entrerebbe solo se servisse: cronologia delle revisioni di un draft, audit trail multi-utente, query relazionali su archivio post LinkedIn. Nessuno di questi è nei requisiti v1.

Alternativa scartata: **draft in MDX nel repo** (un file `linkedin-drafts/[slug].md` per articolo, status come campo frontmatter, commit per ogni change). Ergonomicamente pulito ma scomodo da approvare/pubblicare da mobile, e mescola contenuto editoriale con stato operativo.

### 4.3 Form contatto + newsletter → **Server Actions + zod + Resend**

React 19 ha `useFormState` + `useFormStatus` nativi. Niente `react-hook-form`. Validation server-side con zod su Server Action, error state via `useFormState`. Submit di `/contatto` → Resend transactional al sender (e a `studio@giovannicambria.it` come notifica interna). Submit di iscrizione newsletter → API Resend Audiences (add contact).

**Anti-spam**: due strati.
- **Honeypot field** invisibile (`<input name="website" />` nascosto): se compilato, scartato.
- **Cloudflare Turnstile** (free, privacy-friendly, no cookie banner). Validation del token lato Server Action prima di processare.

Reject silenzioso degli spam (no 4xx). Rate limit base su KV per IP (max 3 submit/ora per form contatto).

### 4.4 Schema.org → **inline TS + `schema-dts` come devDependency**

Niente libreria runtime. Helper function `buildJsonLd(type, data)` in `src/lib/schema.ts` che ritorna un oggetto typed. Output renderizzato in pagina con `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />`.

`schema-dts` (Google) come `devDependency`: typings ufficiali Schema.org, autocomplete su properties. Zero impatto runtime.

Tipi previsti per pagina:

| Pagina | Tipo Schema.org |
|---|---|
| `/` | `Person` + `ProfessionalService` (root) |
| `/lavoro` | `ProfessionalService` con `hasOfferCatalog` |
| `/lavoro/[format]` | `Service` annidato + `offers.price` |
| `/blog` | `Blog` |
| `/blog/[slug]` | `BlogPosting` (con `author.@type = Person`, `datePublished`, `dateModified`) |
| `/approccio` | `Person` esteso (`alumniOf`, `worksFor`, `knowsAbout`) |
| `/contatto` | `ContactPage` |
| `/risorse/sette-domande` | `WebPage` |
| `/newsletter` | `WebPage` |

### 4.5 OG image dinamica → **`next/og`** (Satori)

Una sola Route Handler `app/blog/[slug]/opengraph-image.tsx` con template visivo:
- Sfondo `paper` brand (vedi `brand-kit/project/brand-guide.md`).
- Titolo in Bodoni Moda 64-72px.
- Rubrica come kicker in IBM Plex Sans uppercase tracking ampio.
- Monogram "GC" in basso a destra in `ink`.
- Format 1200×630.

Per pagine non-articolo (`/`, `/lavoro`, `/approccio`, `/contatto`): OG image statica unica generata a build (file in `public/og-default.png`).

### 4.6 Cache strategy → **default Next 16 + ISR** (no Cache Components subito)

Il sito è quasi tutto statico: homepage, schede `/lavoro/*`, `/approccio`, `/blog`, articoli MDX, `/newsletter`, `/risorse/sette-domande`. Tutto pre-renderizzato a build. Form `/contatto` è una pagina statica con Server Action.

Per `/blog` e `/blog/[slug]`: `revalidate = 3600` (ricostruzione oraria) o on-demand revalidation via webhook deploy. Sufficiente per cadenza 2/sett.

**Cache Components** (`use cache`, `cacheLife`, `cacheTag`) di Next 16 entrano solo quando aggiungeremo `/studio` (coda LinkedIn) con dati dinamici da KV. Allora avranno senso. Adesso sarebbero astrazione prematura.

### 4.7 Sitemap / RSS / robots → **file convention Next.js**

- `app/robots.ts` (esiste già) — `Disallow: /` durante sviluppo, da invertire in produzione al lancio pubblico.
- `app/sitemap.ts` — genera mappa statica + slug MDX iterati da velite output.
- `app/feed.xml/route.ts` — feed RSS 2.0 di tutti gli articoli `/blog`, content-type `application/rss+xml`.

---

## 5. Costi a regime (primi 6 mesi)

Tutti i servizi sopra hanno free tier sufficiente per il caso d'uso descritto. Le voci di costo reali:

- **Dominio .it** + **.com**: ~25-30€/anno totali (Aruba).
- **Anthropic via AI Gateway** per riscrittura post LinkedIn: ~8 articoli/mese × ~1.500 token/articolo = costo trascurabile, sotto 1$/mese.
- **Vercel Hobby**: gratuito. Vercel KV free tier 30k commands/giorno: abbondante. Vercel Blob free tier 500MB store + 1GB download/mese: sufficiente per il PDF lead magnet e poche immagini cover.
- **Resend free tier**: 3.000 email/mese. Newsletter settimanale + transactional restano sotto soglia per il primo anno.
- **Cloudflare Turnstile**: free tier 1M challenges/mese.

Totale realistico nei primi 6 mesi: **5€/mese effettivi** (dominio ammortizzato). Vercel Pro (20$/mese) solo se servirà supporto, più membri, o cron più aggressivi — non subito.

---

## 6. Vincoli e rischi noti

**LinkedIn app verification.** Per il prodotto "Share on LinkedIn" serve Company Page collegata + verification dell'app. La verification di solito è veloce (giorni, non mesi) ma è una variabile di tempo. **Va attivata appena partiamo** (vedi §8).

**Rate limit LinkedIn Posts API.** ~150 chiamate/giorno/membro per posting (limit aggiornato 2025-2026 secondo docs). A 2 articoli/settimana siamo ben sotto soglia.

**Refresh token LinkedIn.** Dura 365 giorni poi va re-autorizzato (login + consent). Va costruito un meccanismo di **alert email 30 giorni prima della scadenza** per evitare blackout. Aggiunta minima al cron, una riga di logica.

**Domain verification Resend.** Va completata su `studio@giovannicambria.it` prima del primo invio newsletter (SPF/DKIM/DMARC su Aruba). Tempo: 30 min + propagazione DNS.

**npm cache corrotta locale.** Quirk noto, vedi `CLAUDE.md` sezione apposita. Workaround `NPM_CONFIG_CACHE=/tmp/npm-cache-fresh` per install.

---

## 7. Decisioni chiuse

### 2026-05-15 — v0.1
- ✅ **Framework**: Next.js App Router su Vercel.
- ✅ **Blog content**: MDX in repo Git, niente CMS.
- ✅ **Newsletter**: Resend.
- ✅ **Storage asset**: Vercel Blob.
- ✅ **Generazione post LinkedIn**: AI SDK + Vercel AI Gateway (Claude).
- ✅ **Analytics**: Vercel Web Analytics.

### 2026-05-19 — domini
- ✅ **Dominio**: `giovannicambria.it` + `.com` registrati su Aruba.

### 2026-05-20 — deploy
- ✅ **Account Vercel + repo + auto-deploy**: progetto `giovannicambria-it`, repo `CambGio/giovannicambria.it` pubblico su GitHub, deploy on push `main`.
- ✅ **DNS**: A `@ → 76.76.21.21` + CNAME `www → cname.vercel-dns.com` su `.it` e `.com`. `.com` redirect 308 a `.it` via Vercel REST API.
- ✅ **SSL**: Let's Encrypt emesso da Vercel.

### 2026-05-21 — v0.2
- ✅ **Next.js 16.2.6 + React 19.2.4 + Tailwind v4** confermato come baseline.
- ✅ **MDX loader: velite** (vedi §4.1).
- ✅ **Coda LinkedIn: Vercel KV** (vedi §4.2). Postgres rimandato.
- ✅ **Form: Server Actions + zod + Resend + Turnstile + honeypot** (vedi §4.3). Niente `react-hook-form`.
- ✅ **Schema.org: inline + `schema-dts`** (vedi §4.4).
- ✅ **OG image: `next/og`** dinamica per articolo, statica per altre pagine (vedi §4.5).
- ✅ **Cache: default Next 16 + ISR**. Cache Components rimandati a `/studio` (vedi §4.6).
- ✅ **Sitemap / RSS / robots: file convention** (vedi §4.7).

---

## 8. Decisioni aperte

- [ ] **Company Page LinkedIn**: esiste già? Se sì, va recuperato il binding all'app. Se no, va creata (prerequisito non aggirabile).
- [ ] **Vercel plan**: Hobby resta sufficiente o passiamo a Pro? Decisione differibile fino a quando non servirà.
- [ ] **Modello AI Gateway** per riscrittura LinkedIn: Claude default ma da scegliere quale tier (Sonnet 4.6 per produzione? Haiku 4.5 per costo?). Decidere quando si scrive il prompt.
- [ ] **Webhook deploy → trigger LinkedIn pipeline**: webhook diretto o cron orario che pesca i nuovi `.mdx`? Decidere in fase 6.

---

## 9. Cosa succede dopo l'OK su stack — ordine di esecuzione

Le fasi 1-3 sono già fatte. Riparto dalla 4.

1. ~~Setup repo Next.js + Vercel~~ — Fatto 2026-05-20.
2. ~~Brand kit + globals.css + layout root~~ — Fatto.
3. ~~Gate password sviluppo + lock page~~ — Fatto.
4. **Scaffold route alberatura `08-alberatura-sito.md`** — Pagine stub per nav 4-voci + sotto-pagine `/lavoro/*` + `/risorse/sette-domande` + `/newsletter`. Mezza giornata.
5. **Pipeline MDX con velite** — Schema frontmatter, parsing, generazione tipi, una pagina di test `/blog/test-articolo` per validare. Mezza giornata.
6. **Form `/contatto` + iscrizione newsletter** — Server Actions, zod, Resend transactional, Turnstile, honeypot. Mezza giornata.
7. **In parallelo, attivazione LinkedIn app** — Verifica Company Page → creazione app → richiesta "Share on LinkedIn" → OAuth flow → primo token. **Da iniziare appena possibile** perché la verification è asincrona.
8. **Pipeline AI Gateway per generazione post nativi** — Prompt, AI SDK, output JSON. Un giorno.
9. **Cron + endpoint LinkedIn publishing + dashboard `/studio`** — Vercel KV per draft+status, UI minimale di approvazione, POST API LinkedIn + commento. Due giorni.
10. **Newsletter Resend + template react-email welcome + first edition** — Mezza giornata.
11. **Lead magnet PDF + landing `/risorse/sette-domande`** — Upload PDF su Vercel Blob, signed URL, form gated, email transactional. Mezza giornata, quando arriverà il PDF reale.
12. **Sitemap + RSS + OG dinamiche + Schema.org** — Mezza giornata.
13. **Rimozione gate password + flip robots + Web Analytics live** — A momento di lancio pubblico.

Stima complessiva: **5-7 giornate effettive** di lavoro tecnico, distribuibili su 2-3 settimane. Il primo articolo MDX pubblicato sul sito può essere live entro la prima settimana, anche prima della pipeline LinkedIn (che è asincrona alla verification dell'app).

---

## 10. Alternative considerate (storico, non più in vigore)

**WordPress + plugin auto-post LinkedIn.** Più semplice all'apparenza, ma manda un segnale "vecchio" incoerente col posizionamento. Plugin LinkedIn affidabili a pagamento (Blog2Social ~10€/mese), e usano lo stesso layer di Buffer/Make sotto. Perdita di controllo sull'algoritmo di riscrittura nativa.

**Ghost (cloud).** Ottimo per blog+newsletter integrata, ma 9$/mese minimo e newsletter su sotto-dominio Ghost. Sito vetrina meno flessibile. Stack meno futureproof in direzione AI-native.

**Substack.** Zero setup, ma divide il brand (substack.com nell'URL) e niente sito vetrina decente.

**Sanity Studio** (CMS). Era nei primi step di v0.1 come ipotesi alternativa, poi superata. MDX in repo è coerente con cadenza 2/sett gestita da una persona sola e con il fatto che Claude opera nativamente sui file.

**Contentlayer** come MDX loader. Manutenzione ferma dal 2024. Velite ne è il successore naturale.

**`react-hook-form`** per i form. Sovradimensionato per 2 form di 6 campi. React 19 nativo basta.

**hCaptcha / reCAPTCHA** per anti-spam. Turnstile (Cloudflare) ha free tier più generoso e nessun cookie banner richiesto.

**NextAuth / Clerk** per la sotto-rotta admin. Sovradimensionato per un utente solo. Gate password esistente (`/lock`) è sufficiente per `/studio`.

**Servizi terzi per LinkedIn** (Buffer, Publer, Make, Zapier). Funzionano ma costano (6-9$/mese) e introducono dipendenza da scheduler che non controllo. Nessuno fa **riscrittura semantica** del contenuto — solo scheduling di testo predefinito. Restano piano B sensato se LinkedIn nega l'app, non piano A.

---

## 11. Sources

- [Next.js 16 — App Router docs](https://nextjs.org/docs/app)
- [Next.js Cache Components (use cache)](https://nextjs.org/docs/app/getting-started/cache-components)
- [Velite — content layer for MDX](https://velite.js.org/)
- [Vercel KV (Upstash Redis Marketplace)](https://vercel.com/marketplace/upstash)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)
- [Resend — domain verification](https://resend.com/docs/dashboard/domains/introduction)
- [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
- [LinkedIn Posts API — Microsoft Learn](https://learn.microsoft.com/en-us/linkedin/marketing/community-management/shares/posts-api?view=li-lms-2026-03)
- [schema-dts — Google typings for Schema.org](https://github.com/google/schema-dts)
