export type Locale = "fr" | "ar" | "en";

export const BUSINESS = {
  name: "Ambulance Tunis",
  phone: import.meta.env.VITE_PHONE_NUMBER ?? "",
  siteUrl: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "",
};

export const localeMeta: Record<Locale, { lang: string; title: string; description: string }> = {
  fr: {
    lang: "fr-TN",
    title: "Ambulance privée à Tunis | Transport sanitaire au Bardo et au Menzah",
    description:
      "Contactez Ambulance Tunis pour organiser un transport sanitaire à Tunis, au Bardo et dans les secteurs d’El Menzah 1 à 9.",
  },
  ar: {
    lang: "ar-TN",
    title: "إسعاف خاص في تونس | نقل صحي بالباردو والمنزه",
    description:
      "اتصلوا بخدمة Ambulance Tunis لتنظيم النقل الصحي في تونس والباردو وأحياء المنزه من 1 إلى 9.",
  },
  en: {
    lang: "en-TN",
    title: "Private Ambulance in Tunis | Patient Transport in Le Bardo and El Menzah",
    description:
      "Contact Ambulance Tunis to arrange patient transport in Tunis, Le Bardo and El Menzah districts 1 to 9.",
  },
};

type LocaleStrings = {
  navLabel: string;
  languageLabel: string;
  call: string;
  skip: string;
  nav: [string, string][];
  kicker: string;
  h1: string;
  intro: string;
  heroAlt: string;
  areaSummary: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; text: string }[];
  whyTitle: string;
  whyText: string;
  benefits: string[];
  areasTitle: string;
  areasText: string;
  bardo: string;
  menzah: string;
  menzahUnit: string;
  coverageNote: string;
  faqTitle: string;
  faqs: [string, string][];
  contactTitle: string;
  contactText: string;
};

export const localeContent = {
  fr: {
    navLabel: "Navigation principale",
    languageLabel: "Choisir la langue",
    call: "Appeler",
    skip: "Aller au contenu",
    nav: [
      ["Accueil", "home"],
      ["Services", "services"],
      ["Pourquoi nous choisir", "why"],
      ["Zones", "areas"],
      ["Contact", "contact"],
    ],
    kicker: "Transport sanitaire privé · Tunis",
    h1: "Ambulance privée à Tunis – Transport sanitaire au Bardo et aux Menzah",
    intro:
      "Vous recherchez une ambulance privée à Tunis ? Contactez notre équipe pour organiser un transport sanitaire, un déplacement entre domicile et établissement de santé ou un rendez-vous médical. La prise en charge est à confirmer selon votre demande et la disponibilité.",
    heroAlt: "Ambulance utilisée pour le transport sanitaire",
    areaSummary: "Tunis · Le Bardo · El Menzah 1 à 9",
    servicesTitle: "Services de transport sanitaire à Tunis",
    servicesIntro:
      "Des déplacements médicaux organisés selon les besoins du patient. Appelez pour discuter des conditions de transport.",
    services: [
      {
        title: "Transport sanitaire",
        text: "Transport de patients dans le cadre d’un déplacement médical planifié, selon les besoins communiqués.",
      },
      {
        title: "Domicile et établissement de santé",
        text: "Organisation d’un trajet entre le domicile, une clinique ou un hôpital à Tunis, sous réserve de disponibilité.",
      },
      {
        title: "Transfert médical",
        text: "Contactez-nous pour discuter d’un transfert entre établissements ou vers votre domicile.",
      },
      {
        title: "Rendez-vous médicaux",
        text: "Transport pour consultation, examen ou rendez-vous médical programmé.",
      },
    ],
    whyTitle: "Un accompagnement attentif",
    whyText:
      "Chaque demande est différente. Contactez l’équipe pour expliquer les besoins du patient et vérifier les modalités du trajet.",
    benefits: [
      "Échange préalable sur le trajet",
      "Attention portée au confort du patient",
      "Organisation selon les besoins communiqués",
      "Disponibilité à confirmer par téléphone",
    ],
    areasTitle: "Ambulance au Bardo et à El Menzah, Tunis",
    areasText:
      "Le service dessert Tunis, Le Bardo et les secteurs d’El Menzah 1 à 9. Contactez-nous pour confirmer la prise en charge de votre adresse et les disponibilités.",
    bardo: "Le Bardo",
    menzah: "El Menzah",
    menzahUnit: "El Menzah",
    coverageNote: "La disponibilité et les modalités de transport se confirment par téléphone.",
    faqTitle: "Questions fréquentes",
    faqs: [
      [
        "Comment réserver une ambulance privée à Tunis ?",
        "Appelez le service pour décrire le trajet, les besoins du patient et vérifier les disponibilités.",
      ],
      [
        "Le service dessert-il Le Bardo et El Menzah ?",
        "Le site indique Le Bardo et les secteurs d’El Menzah 1 à 9. Appelez pour confirmer votre adresse et la disponibilité.",
      ],
      [
        "Puis-je organiser un transport vers un hôpital ou une clinique ?",
        "Contactez l’équipe pour discuter d’un transport vers l’établissement de santé souhaité.",
      ],
      [
        "Peut-on réserver un transport à l’avance ?",
        "Appelez pour vérifier les possibilités de planification.",
      ],
    ],
    contactTitle: "Organiser un transport sanitaire à Tunis",
    contactText: "Appelez pour communiquer votre demande et vérifier les disponibilités.",
  },
  ar: {
    navLabel: "التنقل الرئيسي",
    languageLabel: "اختيار اللغة",
    call: "اتصل بنا",
    skip: "الانتقال إلى المحتوى",
    nav: [
      ["الرئيسية", "home"],
      ["الخدمات", "services"],
      ["لماذا نحن", "why"],
      ["المناطق", "areas"],
      ["اتصل بنا", "contact"],
    ],
    kicker: "نقل صحي خاص · تونس",
    h1: "إسعاف خاص في تونس – خدمات النقل الصحي بالباردو والمنزه",
    intro:
      "هل تبحثون عن سيارة إسعاف خاصة في تونس؟ اتصلوا بفريقنا لتنظيم نقل صحي أو التنقل بين المنزل ومؤسسة صحية أو لموعد طبي. يتم تأكيد إمكانية التكفل حسب الطلب والتوفر.",
    heroAlt: "سيارة إسعاف مخصصة للنقل الصحي",
    areaSummary: "تونس · باردو · المنزه من 1 إلى 9",
    servicesTitle: "خدمات النقل الصحي في تونس",
    servicesIntro: "تنظيم التنقلات الطبية حسب احتياجات المريض. اتصلوا بنا لمناقشة ظروف النقل.",
    services: [
      {
        title: "نقل صحي",
        text: "نقل المرضى في إطار تنقل طبي مبرمج، حسب الاحتياجات التي يتم توضيحها.",
      },
      {
        title: "من المنزل إلى المؤسسة الصحية",
        text: "تنظيم رحلة بين المنزل أو المصحة أو المستشفى في تونس، حسب التوفر.",
      },
      { title: "تحويل طبي", text: "اتصلوا بنا لمناقشة التحويل بين المؤسسات الصحية أو إلى المنزل." },
      { title: "المواعيد الطبية", text: "نقل إلى موعد استشارة أو فحص أو علاج مبرمج." },
    ],
    whyTitle: "مرافقة تراعي احتياجاتكم",
    whyText: "لكل طلب خصوصيته. اتصلوا بالفريق لشرح احتياجات المريض والتحقق من تفاصيل الرحلة.",
    benefits: [
      "مناقشة الرحلة مسبقاً",
      "الاهتمام براحة المريض",
      "تنظيم النقل حسب الاحتياجات الموضحة",
      "تأكيد التوفر عبر الهاتف",
    ],
    areasTitle: "إسعاف خاص بالباردو والمنزه في تونس",
    areasText:
      "تشمل المناطق المذكورة تونس والباردو وأحياء المنزه من 1 إلى 9. اتصلوا لتأكيد إمكانية التكفل بعنوانكم والتوفر.",
    bardo: "الباردو",
    menzah: "المنزه",
    menzahUnit: "المنزه",
    coverageNote: "يتم تأكيد التوفر وظروف النقل عبر الهاتف.",
    faqTitle: "أسئلة شائعة",
    faqs: [
      [
        "كيف أطلب سيارة إسعاف خاصة في تونس؟",
        "اتصلوا بالخدمة واشرحوا مسار الرحلة واحتياجات المريض للتحقق من التوفر.",
      ],
      [
        "هل تشمل الخدمة الباردو والمنزه؟",
        "تذكر الصفحة الباردو وأحياء المنزه من 1 إلى 9. اتصلوا لتأكيد العنوان والتوفر.",
      ],
      [
        "هل يمكن النقل إلى مستشفى أو مصحة؟",
        "اتصلوا بالفريق لمناقشة النقل إلى المؤسسة الصحية المطلوبة.",
      ],
      ["هل يمكن حجز النقل مسبقاً؟", "اتصلوا للتحقق من إمكانية التخطيط المسبق."],
    ],
    contactTitle: "تنظيم نقل صحي في تونس",
    contactText: "اتصلوا لتوضيح طلبكم والتحقق من التوفر.",
  },
  en: {
    navLabel: "Main navigation",
    languageLabel: "Choose language",
    call: "Call us",
    skip: "Skip to content",
    nav: [
      ["Home", "home"],
      ["Services", "services"],
      ["Why choose us", "why"],
      ["Areas", "areas"],
      ["Contact", "contact"],
    ],
    kicker: "Private patient transport · Tunis",
    h1: "Private Ambulance in Tunis – Medical Transport in Le Bardo and El Menzah",
    intro:
      "Looking for a private ambulance in Tunis? Contact our team to arrange patient transport, a journey between home and a health facility, or travel to a medical appointment. Acceptance depends on the request and availability.",
    heroAlt: "Ambulance used for patient transport",
    areaSummary: "Tunis · Le Bardo · El Menzah 1 to 9",
    servicesTitle: "Patient transport services in Tunis",
    servicesIntro:
      "Medical journeys arranged around the patient's needs. Call to discuss transport requirements.",
    services: [
      {
        title: "Patient transport",
        text: "Patient transport for a planned medical journey, based on the needs shared with our team.",
      },
      {
        title: "Home and health facilities",
        text: "Arrange travel between home, a clinic or a hospital in Tunis, subject to availability.",
      },
      {
        title: "Medical transfers",
        text: "Contact us to discuss a transfer between health facilities or to your home.",
      },
      {
        title: "Medical appointments",
        text: "Transport for a scheduled consultation, examination or medical appointment.",
      },
    ],
    whyTitle: "Attentive support",
    whyText:
      "Every request is different. Contact the team to explain the patient's needs and confirm journey arrangements.",
    benefits: [
      "Discuss the journey in advance",
      "Attention to patient comfort",
      "Planning around the stated needs",
      "Availability confirmed by phone",
    ],
    areasTitle: "Ambulance in Le Bardo and El Menzah, Tunis",
    areasText:
      "The listed areas are Tunis, Le Bardo and El Menzah districts 1 to 9. Contact us to confirm your address and availability.",
    bardo: "Le Bardo",
    menzah: "El Menzah",
    menzahUnit: "El Menzah",
    coverageNote: "Availability and transport arrangements are confirmed by phone.",
    faqTitle: "Frequently asked questions",
    faqs: [
      [
        "How can I book a private ambulance in Tunis?",
        "Call the service to describe the journey and patient needs and check availability.",
      ],
      [
        "Does the service cover Le Bardo and El Menzah?",
        "The listed areas include Le Bardo and El Menzah districts 1 to 9. Call to confirm your address and availability.",
      ],
      [
        "Can I arrange transport to a hospital or clinic?",
        "Contact the team to discuss transport to your chosen health facility.",
      ],
      ["Can I arrange transport in advance?", "Call to check scheduling options."],
    ],
    contactTitle: "Arrange patient transport in Tunis",
    contactText: "Call to share your request and check availability.",
  },
} satisfies Record<Locale, LocaleStrings>;
