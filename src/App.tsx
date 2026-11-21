import { useEffect, useState, type ReactNode } from "react";
import { coverageCopy, coverageGroups } from "./coverage";
import { translations as clientCopy } from "./clientCopy";
import { BUSINESS, localeContent, localeMeta, type Locale } from "./seo";

const serviceIconPaths: ReactNode[] = [
  <>
    <path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z" />
    <circle cx="7.5" cy="18" r="2" />
    <circle cx="17.5" cy="18" r="2" />
    <path d="M8.5 10v5M6 12.5h5" />
  </>,
  <>
    <path d="m3 13 2-5h12l4 5v6H3zM5 8l1.5-4h9L17 8M3 14h18" />
    <circle cx="7" cy="18" r="1.5" />
    <circle cx="17" cy="18" r="1.5" />
  </>,
  <>
    <path d="M4 8h16v11H4zM7 8V5h10v3M7 19v2M17 19v2M8 12h8M12 10v5" />
    <path d="M10 16h4" />
  </>,
];

function LineIcon({ children, className = "h-5 w-5" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ServiceIcon({ index }: { index: number }) {
  return (
    <span className="mb-6 flex size-11 items-center justify-center rounded-lg bg-primary-muted text-primary">
      <LineIcon className="size-5">{serviceIconPaths[index]}</LineIcon>
    </span>
  );
}

function MapPinIcon() {
  return (
    <LineIcon>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </LineIcon>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.87 9.87 0 0 0-8.42 15.02L2.3 21.7l4.8-1.26A9.87 9.87 0 1 0 12.04 2Zm0 17.93a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-2.85.75.76-2.78-.2-.31a8.06 8.06 0 1 1 6.69 3.64Zm4.42-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <LineIcon className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.92a16 16 0 0 0 6 6l1.29-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
    </LineIcon>
  );
}

const galleryImages = [
  { src: "/meher/ambulance-front.webp", alt: ["Ambulance Meher vue avant", "Meher ambulance, front view", "سيارة مهر للإسعاف من الأمام"] },
  { src: "/meher/ambulance-side.webp", alt: ["Ambulance Meher vue latérale", "Meher ambulance, side view", "سيارة مهر للإسعاف من الجانب"] },
  { src: "/meher/ambulance-rear.webp", alt: ["Arrière de l’ambulance Meher", "Rear of the Meher ambulance", "مؤخرة سيارة مهر للإسعاف"] },
  { src: "/meher/ambulance-other-side.webp", alt: ["Véhicule sanitaire Meher", "Meher patient transport vehicle", "سيارة مهر للنقل الصحي"] },
  { src: "/meher/interior.webp", alt: ["Intérieur de l’ambulance Meher", "Interior of the Meher ambulance", "داخل سيارة مهر للإسعاف"] },
  { src: "/meher/interior-one.webp", alt: ["Équipement intérieur de l’ambulance", "Ambulance interior equipment", "تجهيزات سيارة الإسعاف من الداخل"] },
  { src: "/meher/interior-two.webp", alt: ["Espace de soins de l’ambulance Meher", "Care area inside the Meher ambulance", "مساحة الرعاية داخل سيارة مهر"] },
  { src: "/meher/interior-three.webp", alt: ["Aménagement intérieur du véhicule sanitaire", "Patient transport vehicle interior", "التجهيز الداخلي لسيارة النقل الصحي"] },
];

const galleryDescriptions: Record<Locale, { title: string; text: string }[]> = {
  fr: [
    { title: "Prêts pour vos déplacements", text: "Un transport sanitaire organisé avec attention, selon les besoins du patient." },
    { title: "Un trajet pensé pour vous", text: "Nous échangeons avec vous pour préparer le déplacement et ses modalités." },
    { title: "À vos côtés jusqu’à destination", text: "Une prise en charge attentive pour accompagner chaque étape du trajet." },
    { title: "Le bon transport selon votre situation", text: "Ambulance ou transport assis : parlons ensemble de la solution adaptée." },
    { title: "Le bien-être au cœur du trajet", text: "Un espace intérieur aménagé pour accompagner le transport dans de bonnes conditions." },
    { title: "Un environnement équipé", text: "Les équipements varient selon le véhicule et le type de transport demandé." },
    { title: "Une attention à chaque détail", text: "Le confort du patient et la préparation du trajet guident notre organisation." },
    { title: "Votre transport, notre attention", text: "Contactez-nous pour préciser vos besoins et confirmer les disponibilités." },
  ],
  en: [
    { title: "Ready for your journey", text: "Patient transport arranged with care around the needs you share with us." },
    { title: "A journey planned around you", text: "We discuss the trip with you and help prepare its arrangements." },
    { title: "With you all the way", text: "Attentive support to accompany each stage of the journey." },
    { title: "The right transport for your needs", text: "Ambulance or seated transport: let us discuss a suitable option." },
    { title: "Well-being throughout the journey", text: "An interior arranged to support patient transport in suitable conditions." },
    { title: "Purpose-equipped interiors", text: "Equipment varies depending on the vehicle and transport requested." },
    { title: "Care in every detail", text: "Patient comfort and trip preparation guide the way we organize transport." },
    { title: "Your journey, our attention", text: "Tell us what you need and call to confirm availability." },
  ],
  ar: [
    { title: "جاهزون لرحلتكم", text: "ننظم النقل الصحي بعناية وفق احتياجات المريض التي توضحونها لنا." },
    { title: "رحلة نخطط لها معكم", text: "نتحدث معكم للتحضير لمسار الرحلة وتفاصيلها." },
    { title: "مرافقة حتى الوصول", text: "عناية ومتابعة لمرافقة المريض في مختلف مراحل الرحلة." },
    { title: "النقل المناسب لاحتياجاتكم", text: "سيارة إسعاف أو نقل جالس: ناقشوا معنا الخيار الملائم." },
    { title: "راحتكم ورفاهكم في قلب الرحلة", text: "مساحة داخلية مهيأة للمساعدة على نقل المريض في ظروف مناسبة." },
    { title: "تجهيزات مخصصة", text: "تختلف التجهيزات حسب السيارة ونوع النقل المطلوب." },
    { title: "اهتمام بكل التفاصيل", text: "نراعي راحة المريض والتحضير الجيد لتنظيم الرحلة." },
    { title: "رحلتكم محل اهتمامنا", text: "أخبرونا باحتياجاتكم واتصلوا لتأكيد التوفر." },
  ],
};

const trustStats: Record<Locale, { value: string; label: string }[]> = {
  fr: [
    { value: "Catégorie A", label: "Ambulances équipées" },
    { value: "VSL", label: "Transport assis" },
    { value: "Couveuse", label: "Transport spécialisé" },
  ],
  en: [
    { value: "Category A", label: "Equipped ambulances" },
    { value: "VSL", label: "Seated transport" },
    { value: "Incubator", label: "Specialist transport" },
  ],
  ar: [
    { value: "الفئة أ", label: "سيارات إسعاف مجهزة" },
    { value: "VSL", label: "نقل جالس" },
    { value: "حاضنة", label: "نقل متخصص" },
  ],
};

function getLocale(): Locale {
  const route = window.location.pathname.split("/")[1];
  return route === "ar" || route === "en" ? route : "fr";
}

function displayPhone(number: string) {
  return number.replace(/^\+216(\d{2})(\d{3})(\d{3})$/, "+216 $1 $2 $3");
}

export default function App() {
  const [locale] = useState<Locale>(getLocale);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCoverage, setOpenCoverage] = useState<Record<string, boolean>>({});
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
  const c = localeContent[locale];
  const client = clientCopy[locale];
  const coverage = coverageCopy[locale];
  const meta = localeMeta[locale];
  const rtl = locale === "ar";
  const phoneNumbers = BUSINESS.phoneNumbers;
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
    <div className="min-h-screen overflow-x-hidden bg-background pb-36 text-foreground" dir={rtl ? "rtl" : "ltr"}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:p-3 focus:text-foreground"
      >
        {c.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <a href="#home" className="flex shrink-0 items-center" aria-label={`${BUSINESS.name} — ${c.nav[0][0]}`}>
            <img src="/meher/logo.svg" alt="Meher Ambulance Service" className="h-12 w-auto md:h-14" />
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label={c.navLabel}>
            {c.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label={c.languageLabel} className="flex items-center gap-1 border-e border-border pe-3 text-xs font-semibold">
              {(["fr", "en", "ar"] as Locale[]).map((code) => (
                <a
                  key={code}
                  href={`/${code}/${window.location.hash}`}
                  lang={localeMeta[code].lang}
                  hrefLang={localeMeta[code].lang}
                  aria-current={locale === code ? "page" : undefined}
                  className={`rounded-md px-2 py-1.5 uppercase ${locale === code ? "bg-primary-muted text-primary" : "text-muted-foreground hover:text-primary"}`}
                >
                  {code}
                </a>
              ))}
            </nav>
            <a href={phoneHref(phoneNumbers[0])} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <PhoneIcon /> <bdi dir="ltr">{displayPhone(phoneNumbers[0])}</bdi>
            </a>
          </div>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-border text-foreground lg:hidden"
            aria-label={menuOpen ? c.closeMenu : c.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <LineIcon>
              {menuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </LineIcon>
          </button>
        </div>
        <div id="mobile-menu" className={`${menuOpen ? "block" : "hidden"} border-t border-border bg-background px-5 pb-5 pt-3 shadow-lg lg:hidden`}>
          <nav aria-label={c.navLabel} className="grid">
            {c.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 text-start text-sm font-semibold text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label={c.languageLabel} className="mt-4 flex gap-2">
            {(["fr", "en", "ar"] as Locale[]).map((code) => (
              <a
                key={code}
                href={`/${code}/${window.location.hash}`}
                lang={localeMeta[code].lang}
                hrefLang={localeMeta[code].lang}
                aria-current={locale === code ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-11 flex-1 items-center justify-center rounded-lg border text-sm font-bold uppercase ${locale === code ? "border-primary bg-primary-muted text-primary" : "border-border text-muted-foreground"}`}
              >
                {code}
              </a>
            ))}
          </nav>
          <a href={phoneHref(phoneNumbers[0])} onClick={() => setMenuOpen(false)} className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground">
            <PhoneIcon /> {c.call} <bdi dir="ltr">{displayPhone(phoneNumbers[0])}</bdi>
          </a>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero-section relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-zinc-900">
          <img
            src="/meher/ambulance-hero.webp"
            alt=""
            aria-hidden="true"
            width="1680"
            height="945"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(130,0,0,.92)_0%,rgba(150,0,0,.76)_38%,rgba(80,0,0,.27)_70%,rgba(20,20,20,.08)_100%)] rtl:scale-x-[-1]" />
          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-[620px] text-white">
              <span className="hero-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                <span className="size-2 rounded-full bg-red-300" /> {c.kicker}
              </span>
              <h1 className="hero-fade-up text-balance text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                {c.h1}
              </h1>
              <p className="hero-fade-up mt-6 max-w-[54ch] text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
                {c.intro}
              </p>
              <div className="hero-fade-up mt-8 flex flex-wrap gap-3">
                {phoneNumbers.map((number, index) => (
                  <a
                    key={number}
                    href={phoneHref(number)}
                    className={`inline-flex min-h-12 items-center gap-2.5 rounded-lg px-5 py-3 text-sm font-semibold transition-all active:scale-[.98] ${index === 0 ? "bg-white text-primary shadow-lg shadow-black/20 hover:bg-white/90" : "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"}`}
                  >
                    <PhoneIcon /> <bdi dir="ltr">{displayPhone(number)}</bdi>
                  </a>
                ))}
              </div>
              <div className="hero-fade-up mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:gap-7">
                {trustStats[locale].map((stat) => (
                  <div key={stat.value} className="flex flex-col gap-1">
                    <span className="text-lg font-bold leading-tight sm:text-xl">{stat.value}</span>
                    <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-white/70 sm:text-[11px]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section id="services" className="section-space bg-muted">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{c.servicesTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{c.servicesIntro}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {client.services.items.map((service, index) => (
                <article key={service.title} className="group relative flex flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-foreground/5 transition-transform hover:-translate-y-1 sm:p-8">
                  <ServiceIcon index={index} />
                  <span className="mb-2 text-xs font-medium tracking-widest text-primary">0{index + 1}</span>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-4 text-pretty text-sm leading-6 text-muted-foreground">{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section-space">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{client.gallery.heading}</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">{client.gallery.sub}</p>
              </div>
              <a href="#contact" className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-primary hover:underline sm:self-auto">
                {c.call} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {galleryImages.map((image, index) => (
                <figure key={image.src} className="min-w-0">
                  <button
                    type="button"
                    aria-label={image.alt[locale === "fr" ? 0 : locale === "en" ? 1 : 2]}
                    aria-expanded={selectedGalleryImage === index}
                    aria-controls={`gallery-caption-${index}`}
                    onClick={() => setSelectedGalleryImage(selectedGalleryImage === index ? null : index)}
                    className={`group block w-full overflow-hidden rounded-xl text-start transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${selectedGalleryImage === index ? "ring-2 ring-primary shadow-lg" : "ring-1 ring-foreground/5 shadow-sm"}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt[locale === "fr" ? 0 : locale === "en" ? 1 : 2]}
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="800"
                      className={`aspect-square w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${selectedGalleryImage === index ? "scale-[1.04]" : ""}`}
                    />
                  </button>
                  {selectedGalleryImage === index && (
                    <figcaption id={`gallery-caption-${index}`} className="mt-3 animate-[gallery-caption-in_220ms_ease-out] rounded-xl border border-primary/10 bg-card p-3 shadow-sm sm:p-4">
                      <h3 className="text-sm font-semibold text-primary sm:text-base">{galleryDescriptions[locale][index].title}</h3>
                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">{galleryDescriptions[locale][index].text}</p>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-space bg-muted">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <img
              src="/meher/interior-three.webp"
              alt={locale === "fr" ? "Intérieur équipé de l’ambulance Meher" : locale === "en" ? "Equipped interior of the Meher ambulance" : "داخل سيارة مهر المجهزة"}
              loading="lazy"
              decoding="async"
              width="1200"
              height="900"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-foreground/5"
            />
            <div>
              <span className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{BUSINESS.name}</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{client.about.heading}</h2>
              <p className="mt-6 max-w-[55ch] text-pretty leading-7 text-muted-foreground">{c.whyText}</p>
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-foreground/10 pt-6 sm:grid-cols-3">
                {trustStats[locale].map((stat) => (
                  <div key={stat.value}>
                    <div className="text-lg font-semibold text-primary">{stat.value}</div>
                    <div className="mt-1 text-xs leading-5 text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="section-space">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{c.whyTitle}</h2>
              <p className="mt-4 text-muted-foreground">{c.whyText}</p>
            </div>
            <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {c.benefits.map((item) => (
                <li key={item} className="flex min-h-24 items-start gap-3 rounded-xl bg-card p-5 shadow-sm ring-1 ring-foreground/5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-muted text-primary" aria-hidden="true">✓</span>
                  <span className="text-sm leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="criteria" className="section-space bg-muted">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{client.criteria.heading}</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{client.criteria.intro}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {client.criteria.items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-card p-5 shadow-sm ring-1 ring-foreground/5">
                  <span className="mt-0.5 text-primary" aria-hidden="true">✓</span>
                  <span className="text-sm leading-6">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-4xl text-sm leading-6 text-muted-foreground">{client.criteria.note}</p>
          </div>
        </section>

        <section id="areas" className="section-space">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{locale === "fr" ? "Tunis et Grand Tunis" : locale === "en" ? "Tunis and Greater Tunis" : "تونس الكبرى"}</span>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{coverage.title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{coverage.intro}</p>
            </div>
            <div className="grid items-start gap-4 md:grid-cols-2">
              {coverageGroups.filter((group) => group.enabled).map((group) => (
                <details
                  key={group.id}
                  className="group rounded-2xl bg-card shadow-sm ring-1 ring-foreground/10 transition-shadow open:shadow-md"
                  onToggle={(event) => {
                    const isOpen = event.currentTarget.open;
                    setOpenCoverage((previous) => ({ ...previous, [group.id]: isOpen }));
                  }}
                >
                  <summary className="coverage-summary flex min-h-20 cursor-pointer items-center gap-4 rounded-2xl p-5 focus-visible:outline-offset-[-3px]" aria-controls={`coverage-${group.id}-places`} aria-expanded={openCoverage[group.id] ?? false}>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-muted text-primary"><MapPinIcon /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-semibold">{group.name[locale]}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                        {group.neighborhoods.filter((place) => place.enabled !== false).length} {coverage.neighborhoodCount} · {group.availability === "listed" ? coverage.listed : coverage.confirm}
                      </span>
                    </span>
                    <LineIcon className="coverage-chevron size-5 shrink-0 text-primary"><path d="m6 9 6 6 6-6" /></LineIcon>
                  </summary>
                  <div id={`coverage-${group.id}-places`} className="border-t border-border px-5 pb-5 pt-4">
                    <h3 className="text-base font-semibold text-foreground">{group.heading[locale]}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description[locale]}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {group.neighborhoods.filter((place) => place.enabled !== false).map((place) => (
                        <li key={place.name.fr} className="flex min-h-11 items-center justify-between gap-2 rounded-lg bg-muted px-3 py-2">
                          <span className="text-sm font-medium">{place.name[locale]}</span>
                          <span className="shrink-0 text-end text-[10px] leading-4 text-muted-foreground" title={place.classification === "ins-sector" ? coverage.geographicStatus : place.classification === "common-name" ? coverage.commonStatus : coverage.candidateStatus}>
                            {place.classification === "ins-sector" ? "INS" : place.classification === "common-name" ? coverage.commonStatus : coverage.candidateStatus}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs leading-5 text-muted-foreground">{coverage.classificationNote}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-space bg-muted">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{c.faqTitle}</h2>
            <div className="mt-8 divide-y divide-border rounded-2xl bg-card px-5 shadow-sm ring-1 ring-foreground/5 sm:px-7">
              {c.faqs.map(([question, answer], index) => (
                <div key={question}>
                  <h3>
                    <button type="button" className="min-h-16 w-full py-4 text-start font-semibold" aria-expanded={openFaq === index} aria-controls={`faq-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      {question}
                    </button>
                  </h3>
                  {openFaq === index && <p id={`faq-${index}`} className="pb-5 leading-7 text-muted-foreground">{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-space bg-zinc-900 text-zinc-50">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">{c.contactTitle}</h2>
              <p className="mt-5 max-w-[50ch] leading-7 text-zinc-300">{c.contactText}</p>
              <div className="mt-8 space-y-4 text-sm text-zinc-300">
                <p className="flex items-center gap-3"><MapPinIcon /> {locale === "fr" ? "Tunis et zones de couverture à confirmer" : locale === "en" ? "Tunis and service areas confirmed by phone" : "تونس ومناطق يتم تأكيدها هاتفياً"}</p>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-white"><LineIcon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></LineIcon>{BUSINESS.email}</a>
              </div>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-6 text-zinc-300">{c.emergencyNote}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a href="tel:190" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-semibold hover:bg-white/10">{c.samuLabel} <bdi dir="ltr">190</bdi></a>
                  <a href="tel:198" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-semibold hover:bg-white/10">{c.civilProtectionLabel} <bdi dir="ltr">198</bdi></a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-800 p-6 ring-1 ring-white/5 sm:p-8">
              <h3 className="text-xl font-medium">{locale === "fr" ? "Appel direct" : locale === "en" ? "Call directly" : "اتصال مباشر"}</h3>
              <p className="mt-2 text-sm text-zinc-400">{locale === "fr" ? "Appelez pour discuter du trajet et vérifier la disponibilité." : locale === "en" ? "Call to discuss the journey and check availability." : "اتصلوا لمناقشة الرحلة والتحقق من التوفر."}</p>
              <div className="mt-7 space-y-3">
                {phoneNumbers.map((number) => (
                  <a key={number} href={phoneHref(number)} className="flex min-h-14 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-center text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    <PhoneIcon /> <bdi dir="ltr">{displayPhone(number)}</bdi>
                  </a>
                ))}
              </div>
              <p className="mt-5 text-center text-xs uppercase tracking-widest text-zinc-500">{locale === "fr" ? "Disponibilité à confirmer par téléphone" : locale === "en" ? "Please confirm availability by phone" : "يرجى تأكيد التوفر هاتفياً"}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 py-9">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 text-center sm:flex-row sm:px-6 sm:text-start lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img src="/meher/logo.svg" alt="Meher Ambulance Service" className="h-11 w-auto" />
            <p className="text-xs text-muted-foreground">© 2026 {BUSINESS.name}. {c.areaSummary}</p>
          </div>
          <a href={`mailto:${BUSINESS.email}`} className="text-xs text-muted-foreground hover:text-foreground">{BUSINESS.email}</a>
        </div>
      </footer>

      <div className="fixed bottom-3 end-3 z-50 grid gap-1.5 rounded-2xl bg-white/95 p-1.5 shadow-lg backdrop-blur-sm sm:bottom-6 sm:end-6">
        {phoneNumbers.map((number) => (
          <div key={number} className="flex items-center gap-2">
            <a href={whatsappHref(number)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp: ${displayPhone(number)}`} title={`WhatsApp: ${displayPhone(number)}`} className="grid size-11 shrink-0 place-items-center rounded-full bg-[#25D366] text-white hover:bg-[#1fbd5b]">
              <WhatsAppIcon />
            </a>
            <a href={phoneHref(number)} aria-label={`${c.call}: ${displayPhone(number)}`} className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-3 text-xs font-bold text-primary-foreground hover:bg-primary/90 sm:px-4 sm:text-sm">
              <PhoneIcon /> <span>{c.call}</span> <bdi dir="ltr">{displayPhone(number)}</bdi>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
