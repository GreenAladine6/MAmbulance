import { useEffect, useState, type ReactNode } from "react";
import { coverageCopy, coverageGroups } from "./coverage";
import { BUSINESS, localeContent, localeMeta, type Locale } from "./seo";

const serviceIconPaths: ReactNode[] = [
  <>
    <path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z" />
    <circle cx="7.5" cy="18" r="2" />
    <circle cx="17.5" cy="18" r="2" />
    <path d="M8.5 10v5M6 12.5h5" />
  </>,
  <>
    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-4h6v4" />
    <path d="M12 7v6M9 10h6" />
  </>,
  <>
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="6" r="2" />
    <path d="M7 18h4a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3M9 6H5l2-2M15 18h4l-2 2" />
  </>,
  <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4" />
  </>,
];

function ServiceIcon({ index }: { index: number }) {
  return (
    <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#2878B8] transition-colors group-hover:bg-[#2878B8] group-hover:text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {serviceIconPaths[index]}
      </svg>
    </span>
  );
}

function MapPinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.87 9.87 0 0 0-8.42 15.02L2.3 21.7l4.8-1.26A9.87 9.87 0 1 0 12.04 2Zm0 17.93a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-2.85.75.76-2.78-.2-.31a8.06 8.06 0 1 1 6.69 3.64Zm4.42-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.92a16 16 0 0 0 6 6l1.29-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function getLocale(): Locale {
  const route = window.location.pathname.split("/")[1];
  return route === "ar" || route === "en" ? route : "fr";
}

export default function App() {
  const [locale] = useState<Locale>(getLocale);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCoverage, setOpenCoverage] = useState<Record<string, boolean>>({});
  const c = localeContent[locale];
  const coverage = coverageCopy[locale];
  const meta = localeMeta[locale];
  const rtl = locale === "ar";
  const phone = BUSINESS.phone;
  const phoneNumbers = BUSINESS.phoneNumbers;
  const href = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "#contact";
  const phoneHref = (number: string) => `tel:${number.replace(/[^+\d]/g, "")}`;
  const whatsappHref = (number: string) => `https://wa.me/${number.replace(/\D/g, "")}`;

  useEffect(() => {
    document.documentElement.lang = meta.lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.title = meta.title;
    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.append(description);
    }
    description.content = meta.description;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
  }, [meta, rtl]);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-white text-[#263445]"
      dir={rtl ? "rtl" : "ltr"}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:p-3 focus:text-[#12345A]"
      >
        {c.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-between gap-4 px-5 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center" aria-label={`${BUSINESS.name} — accueil`}>
            <img
              src="/maher-ambulance-logo.svg"
              alt="MAHER Ambulance Tunis — Transport Sanitaire Privé"
              width="1024"
              height="288"
              className="h-auto w-[190px] sm:w-[230px] lg:w-[250px]"
            />
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label={c.navLabel}>
            {c.nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-semibold text-slate-600 hover:text-[#2878B8]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label={c.languageLabel} className="flex gap-2 text-sm font-semibold">
              {(["fr", "ar", "en"] as Locale[]).map((code) => (
                <a
                  key={code}
                  href={`/${code}/${window.location.hash}`}
                  lang={localeMeta[code].lang}
                  hrefLang={localeMeta[code].lang}
                  aria-current={locale === code ? "page" : undefined}
                  className={`rounded-md px-2 py-1 ${locale === code ? "bg-blue-50 text-[#2878B8]" : "text-slate-500"}`}
                >
                  {code.toUpperCase()}
                </a>
              ))}
            </nav>
            <a
              href={href}
              className="rounded-xl bg-[#E63946] px-4 py-3 text-xs font-bold text-white"
            >
              {c.call}
              {phone ? ` · ${phone}` : ""}
            </a>
          </div>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#12345A] focus-visible:outline-offset-2 lg:hidden"
            aria-label={menuOpen ? c.closeMenu : c.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`${menuOpen ? "block" : "hidden"} border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden`}
        >
          <nav aria-label={c.navLabel} className="grid">
            {c.nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3 font-semibold text-[#12345A]"
              >
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label={c.languageLabel} className="mt-4 flex gap-2">
            {(["fr", "ar", "en"] as Locale[]).map((code) => (
              <a
                key={code}
                href={`/${code}/${window.location.hash}`}
                lang={localeMeta[code].lang}
                hrefLang={localeMeta[code].lang}
                aria-current={locale === code ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`min-h-11 flex-1 rounded-lg border px-3 py-2 text-center text-sm font-bold ${locale === code ? "border-[#2878B8] bg-blue-50 text-[#2878B8]" : "border-slate-200 text-slate-600"}`}
              >
                {code.toUpperCase()}
              </a>
            ))}
          </nav>
          <a
            href={href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-[#E63946] px-4 text-sm font-bold text-white"
          >
            {c.call}
            {phone ? ` · ${phone}` : ""}
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="bg-[#F4F8FC]">
          <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-widest text-[#2878B8]">
                {c.kicker}
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-[#12345A] md:text-6xl">
                {c.h1}
              </h1>
              <div className="relative isolate mt-7 overflow-hidden rounded-[28px] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1782835430483-283b2cfb4256?auto=format&fit=crop&w=1200&q=82"
                  alt=""
                  aria-hidden="true"
                  width="1200"
                  height="800"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A233D]/90 via-[#12345A]/75 to-[#12345A]/55" />
                <div className="relative p-6 text-white md:p-7">
                  <p className="text-base leading-7 text-white md:text-lg">{c.intro}</p>
                  <div className="mt-5 grid gap-2">
                    {phoneNumbers.map((number) => (
                      <a
                        key={number}
                        href={phoneHref(number)}
                        className="flex min-h-12 items-center justify-center rounded-xl bg-white/15 px-4 py-3 font-bold text-white ring-1 ring-white/25 backdrop-blur-sm hover:bg-white/25"
                      >
                        <bdi dir="ltr">{number}</bdi>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-slate-500">{c.areaSummary}</p>
            </div>
            <div className="overflow-hidden rounded-[28px] border-8 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1647446732151-5b0cdc252b4d?auto=format&fit=crop&w=1200&q=80"
                alt={c.heroAlt}
                width="1200"
                height="900"
                fetchPriority="high"
                className="h-[360px] w-full object-cover md:h-[520px]"
              />
            </div>
          </div>
        </section>

        <section id="services" className="section-space">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <h2 className="font-heading text-3xl font-bold text-[#12345A] md:text-4xl">
              {c.servicesTitle}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{c.servicesIntro}</p>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {c.services.map((service, index) => (
                <article
                  key={service.title}
                  className="service-card group rounded-2xl border border-slate-200 p-6"
                >
                  <ServiceIcon index={index} />
                  <h3 className="font-heading text-xl font-bold text-[#12345A]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="section-space bg-[#12345A] text-white">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">{c.whyTitle}</h2>
            <p className="mt-5 max-w-3xl leading-7 text-blue-100">{c.whyText}</p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {c.benefits.map((item) => (
                <li key={item} className="rounded-xl border border-white/15 p-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="areas" className="section-space bg-[#F4F8FC]">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <h2 className="font-heading text-3xl font-bold text-[#12345A] md:text-4xl">
              {coverage.title}
            </h2>
            <p className="mt-4 max-w-4xl leading-7 text-slate-600">{coverage.intro}</p>
            <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
              {coverageGroups
                .filter((group) => group.enabled)
                .map((group) => (
                  <details
                    key={group.id}
                    className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow open:shadow-md"
                    onToggle={(event) => {
                      const isOpen = event.currentTarget.open;
                      setOpenCoverage((previous) => ({ ...previous, [group.id]: isOpen }));
                    }}
                  >
                    <summary
                      className="coverage-summary flex min-h-20 cursor-pointer items-center gap-4 rounded-2xl p-5 focus-visible:outline-offset-[-3px]"
                      aria-controls={`coverage-${group.id}-places`}
                      aria-expanded={openCoverage[group.id] ?? false}
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2878B8]">
                        <MapPinIcon />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-heading text-lg font-bold text-[#12345A]">
                          {group.name[locale]}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {group.neighborhoods.filter((place) => place.enabled !== false).length}{" "}
                          {coverage.neighborhoodCount} ·{" "}
                          {group.availability === "listed" ? coverage.listed : coverage.confirm}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className="coverage-chevron h-5 w-5 shrink-0 text-[#2878B8]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </summary>
                    <div
                      id={`coverage-${group.id}-places`}
                      className="border-t border-slate-100 px-5 pb-5 pt-4"
                    >
                      <h3 className="font-heading text-base font-bold text-[#12345A]">
                        {group.heading[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {group.description[locale]}
                      </p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {group.neighborhoods
                          .filter((place) => place.enabled !== false)
                          .map((place) => (
                            <li
                              key={place.name.fr}
                              className="flex min-h-12 items-center justify-between gap-2 rounded-xl bg-[#F4F8FC] px-3 py-2"
                            >
                              <span className="text-sm font-medium text-[#12345A]">
                                {place.name[locale]}
                              </span>
                              <span
                                className="shrink-0 text-end text-[10px] leading-4 text-slate-500"
                                title={
                                  place.classification === "ins-sector"
                                    ? coverage.geographicStatus
                                    : place.classification === "common-name"
                                      ? coverage.commonStatus
                                      : coverage.candidateStatus
                                }
                              >
                                {place.classification === "ins-sector"
                                  ? "INS"
                                  : place.classification === "common-name"
                                    ? coverage.commonStatus
                                    : coverage.candidateStatus}
                              </span>
                            </li>
                          ))}
                      </ul>
                      <p className="mt-4 text-xs leading-5 text-slate-500">
                        {coverage.classificationNote}
                      </p>
                    </div>
                  </details>
                ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-space">
          <div className="mx-auto max-w-[930px] px-5 md:px-8">
            <h2 className="font-heading text-3xl font-bold text-[#12345A]">{c.faqTitle}</h2>
            <div className="mt-8 rounded-2xl border border-slate-200 px-5">
              {c.faqs.map(([question, answer], i) => (
                <div key={question} className="border-b border-slate-200 last:border-0">
                  <h3>
                    <button
                      type="button"
                      className="min-h-16 w-full py-4 text-start font-semibold text-[#12345A]"
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {question}
                    </button>
                  </h3>
                  {openFaq === i && (
                    <p id={`faq-${i}`} className="pb-5 leading-7 text-slate-600">
                      {answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#12345A] px-5 py-20 text-center text-white">
          <h2 className="font-heading text-3xl font-bold md:text-5xl">{c.contactTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-blue-100">{c.contactText}</p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {phoneNumbers.map((number) => (
              <div key={number} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <p className="mb-3 text-lg font-bold">
                  <bdi dir="ltr">{number}</bdi>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={whatsappHref(number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp: ${number}`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-2 text-sm font-bold text-white hover:bg-[#1fbd5b]"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" /> WhatsApp
                  </a>
                  <a
                    href={phoneHref(number)}
                    aria-label={`${c.call}: ${number}`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E63946] px-2 text-sm font-bold text-white hover:bg-[#ca2e3b]"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0" /> {c.call}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-4">
            <p className="text-sm leading-6 text-blue-100">{c.emergencyNote}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <a
                href="tel:190"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold text-white hover:bg-white/10"
              >
                {c.samuLabel} <bdi dir="ltr">190</bdi>
              </a>
              <a
                href="tel:198"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/20 px-4 text-sm font-bold text-white hover:bg-white/10"
              >
                {c.civilProtectionLabel} <bdi dir="ltr">198</bdi>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0A233D] px-5 py-8 text-center text-sm text-blue-100">
        <img
          src="/maher-ambulance-logo.svg"
          alt="MAHER Ambulance Tunis — Transport Sanitaire Privé"
          width="1024"
          height="288"
          loading="lazy"
          className="mx-auto mb-5 h-auto w-[min(100%,360px)] rounded-xl"
        />
        <p>
          {BUSINESS.name} · {c.areaSummary}
        </p>
      </footer>
      <div className="fixed bottom-3 end-3 z-50 grid gap-1.5 rounded-2xl bg-white/95 p-1.5 shadow-lg backdrop-blur-sm sm:bottom-6 sm:end-6">
        {phoneNumbers.map((number) => (
          <div key={number} className="flex items-center gap-2">
            <a
              href={whatsappHref(number)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp: ${number}`}
              title={`WhatsApp: ${number}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white hover:bg-[#1fbd5b]"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={phoneHref(number)}
              aria-label={`${c.call}: ${number}`}
              className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#E63946] px-3 text-xs font-bold text-white hover:bg-[#ca2e3b] sm:px-4 sm:text-sm"
            >
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <span>{c.call}</span>
              <bdi dir="ltr">{number}</bdi>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
