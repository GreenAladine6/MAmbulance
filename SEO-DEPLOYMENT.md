# SEO audit and deployment notes

## Audit findings

- The project is React 19 + Vite 8 with Tailwind CSS 4. It mounts one React application from `src/main.tsx`.
- Rendering is client-side; there is no router, server rendering, static prerenderer, or test script. Static language documents below improve initial metadata and provide crawlable URLs, but the page body still depends on JavaScript.
- Before this update, the site was French-only. The HTML shell had LocalBusiness JSON-LD with an unverified Tunis address and Grand Tunis coverage, and the Figma site configuration emitted `Disallow: /` because indexing was disabled.
- The site used a placeholder telephone number in several components, three remote Unsplash images, and remote Google Fonts. The page had semantic sections and a fixed mobile call action, but no language switcher, RTL handling, or skip link.
- Deployment uses Figma Make's static adapter. No production domain, business telephone, physical address, hours, coordinates, logo asset, or social profile was supplied.
- The installed dependencies match the React/Vite/Tailwind scaffold. No unused runtime dependency was found; runtime dependencies are React and React DOM.

## Implemented

- French, Arabic, and English content is available at `/fr/`, `/ar/`, and `/en/`; each has a distinct title, description, Open Graph locale, canonical link, hreflang set, and Service JSON-LD.
- Arabic uses RTL and Arabic-language copy. Language links retain the current section fragment.
- Service-area copy names Tunis, Le Bardo, and El Menzah 1–9, with availability confirmation language. Unverified Grand Tunis neighborhoods have been removed.
- The owner supplied two numbers; both are centralized in [`src/business.ts`](src/business.ts). `VITE_PHONE_NUMBER` overrides the primary line. Both numbers appear as visible, clickable phone links; the primary number is in the provider telephone field and the second is in its contact point in JSON-LD.
- `VITE_SITE_URL` controls absolute canonical/hreflang URLs and sitemap generation. Without a configured domain, links are site-root-relative and the build omits `sitemap.xml` rather than publishing invalid or guessed URLs.
- `robots.txt` allows crawling. Figma's indexing setting is enabled.
- The hero image has explicit dimensions and high fetch priority. Remote font loading was removed to reduce third-party requests. Focus indicators and a translated skip link were added.

## Production setup

Set these environment variables in the production build environment:

```sh
VITE_SITE_URL=https://your-verified-domain.tld
VITE_PHONE_NUMBER=+21699999999
```

Set `VITE_SITE_URL` to the real HTTPS website domain. `VITE_PHONE_NUMBER` is optional unless the number changes. Rebuild and verify that `/sitemap.xml` lists the three canonical language URLs and `robots.txt` points to it. The generated sitemap URL will be `https://your-verified-domain.tld/sitemap.xml`.

For Search Console, verify domain ownership with the DNS TXT method (or use the HTML tag/file method provided by Search Console), submit the sitemap URL, then inspect `/fr/`, `/ar/`, and `/en/` and confirm their selected canonical URLs. This setup does not claim that Google has indexed the site.

Complete the Google Business Profile with the verified business name, primary phone, actual service areas, hours, and physical location only if customers can visit it. Keep the same details on the site and profile. Do not add ratings, reviews, credentials, emergency response guarantees, or an address until verified. GA4 is not configured because it was not requested and no measurement ID was supplied.

## Remaining limitations

- The website remains client-rendered; meaningful SSR/prerendering would improve reliability for crawlers that do not execute JavaScript.
- The production domain must be supplied before an absolute sitemap can be completed. Google controls whether it displays the phone number in search results; structured data and visible contact information do not guarantee a particular search snippet.
- The hero photo remains a remote Unsplash image rather than a verified, locally optimized ambulance photo. Replace it with a correctly licensed business image when available.
- No Lighthouse score, live structured-data validator, external link check, or Google indexing result is claimed. Build output was checked locally; deployment-specific checks require the production domain.
