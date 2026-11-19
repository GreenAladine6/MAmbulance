import { useEffect, useState } from "react";
import { BUSINESS, localeContent, localeMeta, type Locale } from "./seo";

function getLocale(): Locale {
  const route = window.location.pathname.split("/")[1];
  return route === "ar" || route === "en" ? route : "fr";
}

export default function App() {
  const [locale] = useState<Locale>(getLocale);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = localeContent[locale];
  const meta = localeMeta[locale];
  const rtl = locale === "ar";
  const phone = BUSINESS.phone;
  const href = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : "#contact";

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
          <a href="#home" className="font-heading text-lg font-bold text-[#12345A]">
            {BUSINESS.name}
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
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{c.intro}</p>
              <a
                href={href}
                className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-[#E63946] px-7 font-bold text-white"
              >
                {c.call}
                {phone ? ` · ${phone}` : ""}
              </a>
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
              {c.services.map((service) => (
                <article
                  key={service.title}
                  className="service-card rounded-2xl border border-slate-200 p-6"
                >
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
              {c.areasTitle}
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-600">{c.areasText}</p>
            <h3 className="mt-8 font-heading text-xl font-bold text-[#12345A]">{c.bardo}</h3>
            <h3 className="mt-6 font-heading text-xl font-bold text-[#12345A]">{c.menzah}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {Array.from({ length: 9 }, (_, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white p-4 font-semibold text-[#12345A]"
                >
                  {c.menzahUnit} {i + 1}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">{c.coverageNote}</p>
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
          <a
            href={href}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-[#E63946] px-7 font-bold text-white"
          >
            {c.call}
            {phone ? ` · ${phone}` : ""}
          </a>
        </section>
      </main>
      <footer className="bg-[#0A233D] px-5 py-8 text-center text-sm text-blue-100">
        <p>
          {BUSINESS.name} · {c.areaSummary}
        </p>
      </footer>
      <a
        href={href}
        aria-label={phone ? `${c.call}: ${phone}` : c.call}
        className="fixed inset-x-3 bottom-3 z-50 flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#E63946] px-4 font-bold text-white shadow-xl sm:inset-x-auto sm:bottom-6 sm:end-6 sm:min-h-14 sm:px-7"
      >
        {c.call}
        {phone && <bdi dir="ltr">{phone}</bdi>}
      </a>
    </div>
  );
}
