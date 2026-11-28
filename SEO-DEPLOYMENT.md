# SEO implementation and deployment notes

## Audit summary

- The site uses React 19, Vite 8 and Tailwind CSS 4. It has French, Arabic and English routes and is deployed as static files through Figma Make.
- Before this work, the built HTML route files had an empty React root, so page text depended on JavaScript. Metadata was partly changed after hydration, and the public sitemap did not consistently match the declared production host.
- Some visible translations contained claims for 24/7 availability, sub-hour arrival, nationwide service, specific vehicle classes/equipment and staff credentials. Those claims were not supported by confirmed business information, so they were removed or replaced with wording that asks customers to confirm availability.
- No physical address, business hours, social profile URLs, GA4 measurement ID or hosting redirect rules are configured. No separate location pages were justified by distinct service information.

## Implemented

- The existing routes `/fr/`, `/ar/` and `/en/` now receive locale-specific static HTML rendered from the React page. The client hydrates that HTML when JavaScript loads.
- Each route has a localized title and description, `lang` and Arabic `dir="rtl"`, canonical URL, reciprocal hreflang links and `x-default`.
- The build generates `robots.txt` and an XML sitemap from the same language route list. The sitemap contains canonical language URLs and their alternates.
- Open Graph and Twitter metadata use the local ambulance hero image. Its actual dimensions are 1672 × 941.
- JSON-LD describes the organization, website and service. It includes the project’s existing business name, phone, email and logo; it omits an address, opening hours, reviews, ratings, coordinates and credentials.
- The coverage section lists Tunis, Le Bardo, El Menzah, Ennasr, Ariana, La Soukra and Mnihla while distinguishing areas that still need address-level confirmation. No thin location landing pages were added.
- Contact links remain `tel:` and `wa.me` links. The supplied GTM container `GTM-MTWRQ2QV` is loaded on all locale routes only after the visitor accepts analytics in the localized preference prompt. The choice is saved and can be changed from the footer. Phone, WhatsApp, language and CTA events go to `dataLayer` and a `meher:analytics` browser event. An optional GA4 ID can be set with `VITE_GA4_ID`.
- Existing WebP images are retained; the hero has explicit intrinsic dimensions and high fetch priority, while below-the-fold images are lazy-loaded. Remote font requests were not added.

## Build and checks

- `npm run build` succeeds and writes `/fr/`, `/ar/`, `/en/`, `robots.txt` and `sitemap.xml` into `dist/`.
- `npx tsc --noEmit` succeeds.
- The project has no test script or existing test suite.
- The production domain could not be checked through the available live page reader, so this report does not claim live HTTP status, redirect, Lighthouse or Search Console results.

## Production setup and manual work

1. Confirm the public canonical host is `https://www.ambulancemeher.tn`. Configure the hosting platform to redirect HTTP and the apex host to HTTPS `www`. Vite's static build cannot create host-level 301 redirects by itself.
2. If the canonical host or primary telephone changes, set `VITE_SITE_URL` and optionally `VITE_PHONE_NUMBER` in the production build environment, then rebuild. Keep the visible phone, WhatsApp, JSON-LD and external profiles consistent.
3. Confirm the business email and telephone numbers, listed service areas, service descriptions, image rights and the exact registered business name before publishing.
4. Confirm the analytics preference prompt meets the privacy rules that apply to visitors. The GTM container ID can be replaced with `VITE_GTM_ID`; set `VITE_GA4_ID` only if adding a separate GA4 tag. Configure GTM to use `phone_click`, `whatsapp_click`, `language_change` and `cta_click`. `form_submit` is reserved for a future form; no form currently exists.
5. Verify the property in Google Search Console, submit `https://www.ambulancemeher.tn/sitemap.xml`, then inspect each language URL and review Google's selected canonical after deployment.
6. Review legitimate backlink opportunities manually: local clinics and hospitals that accept referrals, municipal or regional health directories, professional ambulance/transport associations, and verified local business directories. Do not register or publish until the business approves the details.

## Remaining hosting and business checks

- Confirm that the hosting platform serves the generated directory routes directly and that all three return HTTP 200 without a redirect chain.
- Confirm HTTP/apex redirects, TLS certificate, live `robots.txt`, live sitemap, social image previews, image rights and mobile rendering in the deployed site.
- Business-owner confirmation is needed for operating hours, 24/7 availability, actual service reach at candidate neighborhoods, specialist transport/equipment, address details, official social accounts and any credentials. These are intentionally absent from structured data and unsupported marketing claims were removed.
- Search ranking changes are not immediate or guaranteed by these code updates.
