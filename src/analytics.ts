export type AnalyticsEventName =
  | "page_view"
  | "phone_click"
  | "whatsapp_click"
  | "language_change"
  | "cta_click"
  | "form_submit";

const ga4Id = import.meta.env.VITE_GA4_ID?.trim();
const gtmId = import.meta.env.VITE_GTM_ID?.trim() || "GTM-MTWRQ2QV";
let analyticsLoaded = false;

export function enableAnalyticsAfterConsent() {
  if (analyticsLoaded || (!ga4Id && !gtmId)) return;
  analyticsLoaded = true;

  const dataLayer = ((window as Window & { dataLayer?: unknown[] }).dataLayer ??= []);
  if (gtmId) {
    const gtag = (...args: unknown[]) => dataLayer.push(args);
    (window as Window & { gtag?: typeof gtag }).gtag = gtag;
    gtag("js", new Date());
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    document.head.append(script);
  }

  if (ga4Id) {
    const gtag = (...args: unknown[]) => dataLayer.push(args);
    (window as Window & { gtag?: typeof gtag }).gtag = gtag;
    gtag("consent", "default", { analytics_storage: "granted" });
    gtag("js", new Date());
    gtag("config", ga4Id, { send_page_view: false });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
    document.head.append(script);
    trackEvent("page_view", { page_location: window.location.href });
  }
}

export function revokeAnalyticsConsent() {
  if (!analyticsLoaded) return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("consent", "update", { analytics_storage: "denied" });
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push({ event: "meher_analytics_consent", analytics_storage: "denied" });
}

export function trackEvent(name: AnalyticsEventName, details: Record<string, string> = {}) {
  const event = { event: name, ...details };

  // GTM can consume this queue when its script is added after the site's consent setup.
  const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
  dataLayer?.push(event);

  // This event also gives a future consent manager or analytics adapter an integration point.
  window.dispatchEvent(new CustomEvent("meher:analytics", { detail: event }));
}
