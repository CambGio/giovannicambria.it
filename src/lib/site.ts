/**
 * Fonte unica di verita del copy site-wide.
 * Ogni stringa identitaria ripetuta nel chrome (layout, masthead,
 * header, footer, mobile nav) vive qui, mai hard-coded nei componenti.
 */

/* Identita */
export const SITE_NAME = "Giovanni Cambria";
export const SITE_DESCRIPTOR = "Studio di consulenza";
export const SITE_TITLE = `${SITE_NAME} · ${SITE_DESCRIPTOR}`;
export const SITE_URL = "https://giovannicambria.it";
export const SITE_DOMAIN = "giovannicambria.it";

/* Tagline ufficiale (2026-05-19). Mai parafrasata, mai tradotta.
 * Le due righe insieme nei contesti istituzionali; solo la prima
 * nei contesti compressi. */
export const TAGLINE = "Consulente in innovazione dei modelli di business.";
export const TAGLINE_SUB =
  "Per imprenditori italiani che vogliono capire prima di adottare.";

/* Description SEO e Open Graph: tagline + sottotitolo, intatti. */
export const SITE_DESCRIPTION = `${TAGLINE} ${TAGLINE_SUB}`;

/* Contatti e dati legali */
export const CITY = "Milazzo";
export const EMAIL = "studio@giovannicambria.it";
export const PHONE_DISPLAY = "+39 328 446 0482";
export const PHONE_TEL = "+393284460482";
export const VAT = "IT 03557470832";
export const LINKEDIN_URL = "https://www.linkedin.com/in/giovannicambria/";
