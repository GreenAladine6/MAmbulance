import { useState, type ReactNode } from "react";

const PHONE_DISPLAY = "+216 XX XXX XXX";
const PHONE_LINK = "tel:+216XXXXXXXX";

type IconName =
  | "phone"
  | "shield"
  | "clock"
  | "heart"
  | "hospital"
  | "route"
  | "calendar"
  | "users"
  | "map"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "plus";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    ),
    shield: <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    hospital: (
      <>
        <path d="M3 21h18M5 21V5h14v16M9 9h6M12 6v6M8 15h2M14 15h2" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="5" r="2" />
        <path d="M8 19h3a3 3 0 0 0 3-3V8a3 3 0 0 1 3-3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    map: (
      <>
        <path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15M15 6v15" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#accueil" className="flex items-center gap-3" aria-label="Ambulance Tunis - Accueil">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2878B8] text-white shadow-lg shadow-blue-900/10">
        <span className="absolute h-5 w-1.5 rounded-full bg-white" />
        <span className="absolute h-1.5 w-5 rounded-full bg-white" />
      </span>
      <span>
        <span
          className={`block font-heading text-[15px] font-bold leading-none tracking-[-.01em] ${light ? "text-white" : "text-[#12345A]"}`}
        >
          AMBULANCE TUNIS
        </span>
        <span
          className={`mt-1 block text-[10px] font-semibold uppercase tracking-[.2em] ${light ? "text-blue-200" : "text-[#2878B8]"}`}
        >
          Transport sanitaire privé
        </span>
      </span>
    </a>
  );
}

function CallButton({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={PHONE_LINK}
      className={`call-button ${compact ? "px-4 py-3 text-xs" : "px-6 py-4 text-sm"} ${className}`}
    >
      <Icon name="phone" className={compact ? "h-4 w-4" : "h-5 w-5"} />
      <span>APPELER MAINTENANT</span>
    </a>
  );
}

const services = [
  {
    icon: "heart" as IconName,
    number: "01",
    title: "Transport sanitaire",
    text: "Vos déplacements médicaux dans des conditions adaptées à votre état de santé, avec un accompagnement professionnel.",
  },
  {
    icon: "hospital" as IconName,
    number: "02",
    title: "Hôpitaux & cliniques",
    text: "Transport vers les établissements de santé, centres médicaux et cabinets spécialisés à Tunis et dans les environs.",
  },
  {
    icon: "route" as IconName,
    number: "03",
    title: "Transfert médical",
    text: "Organisation de transferts entre établissements de santé ou vers votre domicile, selon vos besoins.",
  },
  {
    icon: "calendar" as IconName,
    number: "04",
    title: "Rendez-vous médicaux",
    text: "Accompagnement pour vos consultations, examens, séances de soins et rendez-vous programmés.",
  },
];

const benefits = [
  {
    icon: "clock" as IconName,
    title: "Rapidité et réactivité",
    text: "Une prise en charge organisée avec réactivité pour répondre à vos demandes.",
  },
  {
    icon: "shield" as IconName,
    title: "Sécurité avant tout",
    text: "Une attention constante portée à la sécurité du patient pendant le transport.",
  },
  {
    icon: "heart" as IconName,
    title: "Confort et accompagnement",
    text: "Un environnement adapté, avec une approche humaine et bienveillante.",
  },
  {
    icon: "users" as IconName,
    title: "Professionnalisme",
    text: "Une équipe attentive et engagée pour vous accompagner avec sérieux.",
  },
];

const menzah = Array.from({ length: 10 }, (_, i) => `El Menzah ${i + 1}`);
const grandTunis = [
  "Tunis Centre",
  "Ariana",
  "Mnihla",
  "Ennasr",
  "Mutuelleville",
  "Manar",
  "La Marsa",
  "Centre Urbain Nord",
];

const faqs = [
  [
    "Comment contacter une ambulance privée à Tunis ?",
    "Il vous suffit de cliquer sur le bouton Appeler maintenant pour contacter directement notre service par téléphone.",
  ],
  [
    "Intervenez-vous au Bardo ?",
    "Oui, le Bardo fait partie de nos zones de service. Contactez-nous pour organiser votre transport sanitaire.",
  ],
  [
    "Votre ambulance dessert-elle tous les Menzah ?",
    "Nous couvrons les secteurs d'El Menzah selon les disponibilités et les conditions de prise en charge. Contactez-nous pour vérifier votre adresse.",
  ],
  [
    "Proposez-vous le transport vers les cliniques et les hôpitaux ?",
    "Oui, nous organisons des transports sanitaires vers les établissements de santé selon les besoins du patient.",
  ],
  [
    "Peut-on réserver un transport sanitaire à l'avance ?",
    "Contactez-nous pour vérifier les possibilités de planification de votre transport.",
  ],
  [
    "Comment obtenir des informations sur les tarifs ?",
    "Appelez-nous directement pour obtenir des renseignements sur votre demande et les tarifs applicables.",
  ],
];

function SectionTitle({
  eyebrow,
  title,
  text,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-[#E63946]" />
        <span className="text-xs font-bold uppercase tracking-[.2em] text-[#2878B8]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-heading text-3xl font-bold leading-[1.14] tracking-[-.035em] text-[#12345A] md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">{text}</p>}
    </div>
  );
}

function LocationCard({ name, emphasized = false }: { name: string; emphasized?: boolean }) {
  return (
    <a
      href={PHONE_LINK}
      className={`group flex items-center justify-between rounded-xl border p-4 transition hover:-translate-y-0.5 hover:shadow-lg ${emphasized ? "border-[#2878B8] bg-[#2878B8] text-white" : "border-slate-200 bg-white text-[#12345A] hover:border-blue-300"}`}
    >
      <span className="flex items-center gap-3 font-semibold">
        <Icon name="map" className={`h-4 w-4 ${emphasized ? "text-blue-100" : "text-[#E63946]"}`} />
        {name}
      </span>
      <Icon name="arrow" className="h-4 w-4 opacity-50 transition group-hover:translate-x-1" />
    </a>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`border-b border-slate-200 transition ${open ? "bg-white" : ""}`}>
      <button
        className="flex min-h-20 w-full items-center justify-between gap-5 py-5 text-left font-heading text-base font-semibold text-[#12345A] md:text-lg"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-4">
          <span className="text-xs font-bold text-[#2878B8]">0{index + 1}</span>
          {question}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-[#2878B8] transition ${open ? "rotate-45 bg-[#12345A] text-white" : ""}`}
        >
          <Icon name="plus" className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pl-10 pr-14 leading-7 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ["Accueil", "accueil"],
    ["Nos services", "services"],
    ["Pourquoi nous choisir", "pourquoi"],
    ["Zones d'intervention", "zones"],
    ["Contact", "contact"],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#263445]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-semibold text-slate-600 transition hover:text-[#2878B8]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 sm:flex">
            <a href={PHONE_LINK} className="hidden text-right xl:block">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Contact direct
              </span>
              <span className="font-heading text-sm font-bold text-[#12345A]">{PHONE_DISPLAY}</span>
            </a>
            <CallButton compact />
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-[#12345A] sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl sm:hidden">
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-slate-100 py-3 font-semibold text-[#12345A]"
              >
                {label}
              </a>
            ))}
            <CallButton className="mt-4 w-full" />
          </nav>
        )}
      </header>

      <main>
        <section id="accueil" className="relative bg-[#F4F8FC]">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[42%] bg-medical-pattern opacity-60" />
          <div className="relative mx-auto grid min-h-[720px] max-w-[1360px] items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
            <div className="relative z-10 lg:pl-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-[#2878B8] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#35A879] ring-4 ring-green-100" /> Service
                local de transport sanitaire
              </div>
              <h1 className="font-heading text-[42px] font-bold leading-[1.07] tracking-[-.045em] text-[#12345A] md:text-6xl lg:text-[68px]">
                Ambulance Privée à Tunis<span className="text-[#2878B8]">.</span>
                <br />
                <span className="text-slate-500">Votre Santé,</span>
                <br />
                Notre Priorité.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Besoin d’un transport sanitaire à Tunis, au Bardo ou aux Menzah ? Notre équipe vous
                accompagne avec professionnalisme, réactivité et attention, dans les meilleures
                conditions de sécurité et de confort.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {["Intervention rapide", "Transport sécurisé", "Équipe professionnelle"].map(
                  (item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-sm font-semibold text-[#12345A]"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-green-100 text-[#35A879]">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {item}
                    </span>
                  ),
                )}
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a
                  href="#services"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-[#2878B8] px-6 text-sm font-bold text-[#2878B8] transition hover:bg-[#2878B8] hover:text-white"
                >
                  DÉCOUVRIR NOS SERVICES <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Un simple appel suffit pour organiser votre transport sanitaire.
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-blue-200 pt-5 text-sm font-semibold text-[#12345A]">
                <Icon name="map" className="h-5 w-5 text-[#E63946]" /> Tunis · Le Bardo · Les Menzah
                · Grand Tunis
              </div>
            </div>
            <div className="relative lg:h-[610px]">
              <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-3xl border border-blue-200 lg:block" />
              <div className="relative h-[470px] overflow-hidden rounded-[28px] border-[8px] border-white shadow-2xl shadow-blue-950/15 md:h-[560px] lg:h-full">
                <img
                  src="https://images.unsplash.com/photo-1647446732151-5b0cdc252b4d?auto=format&fit=crop&w=1200&q=85"
                  alt="Ambulance moderne en intervention pour un transport sanitaire"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,31,55,.72),transparent_45%)]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#2878B8]">
                      Contact direct
                    </p>
                    <a
                      href={PHONE_LINK}
                      className="mt-1 block font-heading text-xl font-bold text-[#12345A]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                  <a
                    href={PHONE_LINK}
                    className="grid h-12 w-12 place-items-center rounded-full bg-[#E63946] text-white"
                  >
                    <Icon name="phone" />
                  </a>
                </div>
              </div>
              <div className="absolute -right-2 top-8 hidden rounded-2xl bg-[#12345A] p-5 text-white shadow-xl md:block">
                <Icon name="shield" className="mb-3 h-7 w-7 text-blue-300" />
                <p className="font-heading text-sm font-bold">
                  Sécurité &<br />
                  accompagnement
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-space bg-white">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <SectionTitle
              eyebrow="Notre expertise"
              title="Nos Services de Transport Sanitaire"
              text="Des solutions adaptées à vos besoins médicaux, avec une attention particulière portée à votre confort et à votre sécurité."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <span className="absolute right-5 top-4 font-heading text-5xl font-bold text-slate-100">
                    {service.number}
                  </span>
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#2878B8] transition group-hover:bg-[#2878B8] group-hover:text-white">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-8 font-heading text-xl font-bold leading-tight text-[#12345A]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{service.text}</p>
                  <a
                    href={PHONE_LINK}
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2878B8]"
                  >
                    Nous contacter <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#F4F8FC] p-6 md:flex-row md:px-8">
              <p className="font-heading text-lg font-semibold text-[#12345A]">
                Vous avez besoin d’une ambulance ?{" "}
                <span className="text-slate-500">Appelez-nous dès maintenant.</span>
              </p>
              <CallButton compact />
            </div>
          </div>
        </section>

        <section id="pourquoi" className="section-space bg-[#12345A] text-white">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 md:px-8 lg:grid-cols-[.86fr_1.14fr]">
            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1696243144290-792f1f48339e?auto=format&fit=crop&w=1000&q=85"
                  alt="Ambulance équipée pour un transfert médical sécurisé"
                  className="h-[590px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 max-w-[270px] rounded-2xl bg-[#E63946] p-6 shadow-2xl md:-right-8">
                <Icon name="heart" className="mb-3 h-7 w-7" />
                <p className="font-heading text-base font-semibold leading-6">
                  Le patient au cœur de notre engagement.
                </p>
              </div>
            </div>
            <div>
              <SectionTitle
                centered={false}
                eyebrow="Notre engagement"
                title="Pourquoi Choisir Notre Ambulance Privée ?"
              />
              <p className="mt-5 max-w-2xl leading-7 text-blue-100">
                Chaque déplacement médical mérite une attention particulière, de votre prise en
                charge à votre arrivée.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-white/10 bg-white/[.06] p-5 transition hover:bg-white/[.1]"
                  >
                    <Icon name={benefit.icon} className="h-6 w-6 text-blue-300" />
                    <h3 className="mt-5 font-heading text-base font-bold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-blue-100/75">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="zones" className="section-space bg-[#F4F8FC]">
          <div className="mx-auto max-w-[1240px] px-5 md:px-8">
            <SectionTitle
              eyebrow="Proximité locale"
              title="Votre Ambulance Privée à Tunis, au Bardo et dans Tous les Menzah"
              text="Nous répondons aux demandes de transport sanitaire dans plusieurs quartiers de Tunis et du Grand Tunis, selon notre zone réelle de couverture."
            />
            <div className="mt-14 grid gap-8 lg:grid-cols-[.72fr_1.28fr]">
              <div className="relative min-h-[440px] overflow-hidden rounded-[28px] bg-[#12345A] p-8 text-white">
                <div className="map-lines absolute inset-0 opacity-30" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                    <Icon name="map" className="h-7 w-7 text-blue-300" />
                  </span>
                  <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-blue-300">
                    Zone principale
                  </p>
                  <h3 className="mt-3 font-heading text-4xl font-bold">Le Bardo</h3>
                  <ul className="mt-6 space-y-3 text-sm text-blue-100">
                    {[
                      "Ambulance privée Le Bardo",
                      "Transport sanitaire Le Bardo",
                      "Ambulance à proximité du Bardo",
                    ].map((x) => (
                      <li key={x} className="flex gap-3">
                        <Icon name="check" className="h-5 w-5 text-[#35A879]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <a href={PHONE_LINK} className="mt-10 inline-flex items-center gap-2 font-bold">
                    Vérifier la disponibilité <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div>
                <div className="mb-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#2878B8]">
                      Couverture locale
                    </p>
                    <h3 className="mt-1 font-heading text-2xl font-bold text-[#12345A]">
                      Les Menzah
                    </h3>
                  </div>
                  <span className="hidden text-xs text-slate-500 sm:block">
                    Sélectionnez votre secteur
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {menzah.map((name, i) => (
                    <LocationCard
                      key={name}
                      name={name}
                      emphasized={i === 3 || i === 4 || i === 5 || i === 6 || i === 8}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#2878B8]">
                    Selon disponibilité
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-[#12345A]">
                    Grand Tunis & alentours
                  </h3>
                </div>
                <p className="text-xs text-slate-500">Couverture à confirmer par téléphone</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {grandTunis.map((name) => (
                  <LocationCard key={name} name={name} />
                ))}
              </div>
            </div>
            <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-7 text-slate-600">
              Vous recherchez une{" "}
              <strong className="text-[#12345A]">ambulance privée au Bardo</strong>, une ambulance à
              El Menzah 4, 5, 6, 7 ou 9 ? Contactez-nous pour organiser votre transport sanitaire à
              Tunis et dans les zones couvertes du Grand Tunis.
            </p>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1634025130850-1d24389e25c7?auto=format&fit=crop&w=1100&q=85"
                alt="Professionnels auprès d'une ambulance pour accompagner un patient"
                className="h-[520px] w-full rounded-[28px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl md:left-8 md:right-auto md:w-[310px]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#35A879]">
                  Notre approche
                </p>
                <p className="mt-2 font-heading text-lg font-bold text-[#12345A]">
                  Humaine, attentive et rassurante.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <SectionTitle
                centered={false}
                eyebrow="À vos côtés"
                title="Votre Bien-être au Cœur de Notre Mission"
              />
              <p className="mt-7 leading-7 text-slate-600">
                Nous savons que chaque demande de transport sanitaire représente un moment important
                pour le patient et ses proches. Notre priorité est de proposer un accompagnement
                sérieux, humain et rassurant, en accordant une attention particulière au confort et
                à la sécurité de chacun.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Une approche humaine",
                  "Un transport adapté",
                  "Un accompagnement professionnel",
                ].map((x, i) => (
                  <div
                    key={x}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-4"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-[#2878B8]">
                      <Icon
                        name={(["heart", "shield", "users"] as IconName[])[i]}
                        className="h-5 w-5"
                      />
                    </span>
                    <span className="font-heading font-semibold text-[#12345A]">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#F4F8FC]">
          <div className="mx-auto max-w-[930px] px-5 md:px-8">
            <SectionTitle
              eyebrow="Informations utiles"
              title="Questions Fréquentes sur Notre Service d’Ambulance Privée"
            />
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm md:px-8">
              {faqs.map(([q, a], i) => (
                <FAQItem key={q} question={q} answer={a} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[#12345A] py-24 text-center text-white"
        >
          <div className="cta-rings absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-3xl px-5">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
              <Icon name="phone" className="h-7 w-7 text-blue-300" />
            </span>
            <h2 className="mt-7 font-heading text-4xl font-bold tracking-[-.035em] md:text-6xl">
              Besoin d’une Ambulance Privée à Tunis ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-blue-100">
              Ne perdez pas de temps à chercher. Contactez notre équipe pour organiser votre
              transport sanitaire.
            </p>
            <a
              href={PHONE_LINK}
              className="mt-8 inline-block font-heading text-3xl font-bold text-white md:text-4xl"
            >
              {PHONE_DISPLAY}
            </a>
            <div>
              <CallButton className="mt-7 inline-flex" />
            </div>
            <p className="mt-5 text-xs text-blue-200">
              Le contact téléphonique est le moyen le plus direct pour organiser votre demande.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A233D] pb-28 pt-16 text-blue-100 md:pb-8">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo light />
              <p className="mt-5 max-w-md text-sm leading-6 text-blue-100/65">
                Service d’ambulance privée et de transport sanitaire à Tunis, Le Bardo et El Menzah.
                Contactez-nous pour vos besoins de transport médical et de déplacement vers les
                établissements de santé.
              </p>
              <a
                href={PHONE_LINK}
                className="mt-5 inline-flex items-center gap-2 font-heading text-lg font-bold text-white"
              >
                <Icon name="phone" className="h-5 w-5 text-[#E63946]" />
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <h3 className="font-heading font-bold text-white">Navigation</h3>
              <div className="mt-5 space-y-3 text-sm text-blue-100/65">
                {nav.slice(0, 4).map(([x, id]) => (
                  <a className="block hover:text-white" key={id} href={`#${id}`}>
                    {x}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-white">Zones principales</h3>
              <div className="mt-5 space-y-3 text-sm text-blue-100/65">
                <p>Tunis & Le Bardo</p>
                <p>El Menzah 1 à 10</p>
                <p>Grand Tunis</p>
                <p>Couverture sur confirmation</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-blue-100/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Ambulance Tunis. Tous droits réservés.</p>
            <a href="#" className="hover:text-white">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </footer>

      <a
        href={PHONE_LINK}
        className="fixed bottom-3 left-3 right-3 z-50 flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E63946] px-5 font-heading text-sm font-bold text-white shadow-2xl shadow-red-950/30 md:hidden"
      >
        <Icon name="phone" className="h-5 w-5" /> APPELER MAINTENANT{" "}
        <span className="border-l border-white/30 pl-3 text-xs">{PHONE_DISPLAY}</span>
      </a>
    </div>
  );
}
