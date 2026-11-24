import { DEFAULT_PHONE_NUMBERS } from "./business";

export type Locale = "fr" | "ar" | "en";

export const BUSINESS = {
  name: "Meher Ambulance Service",
  email: "contact@meherambulance.tn",
  phoneNumbers: [
    import.meta.env.VITE_PHONE_NUMBER || DEFAULT_PHONE_NUMBERS[0],
    DEFAULT_PHONE_NUMBERS[1],
  ],
  phone: import.meta.env.VITE_PHONE_NUMBER || DEFAULT_PHONE_NUMBERS[0],
  siteUrl: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ?? "https://ambulancemeher.tn",
};

export const localeMeta: Record<Locale, { lang: string; title: string; description: string }> = {
  fr: {
    lang: "fr-TN",
    title: "Meher Ambulance Tunis | Ambulance et transport sanitaire",
    description:
      "Ambulance à Tunis, transport sanitaire, VSL et transport avec couveuse. Appelez Meher Ambulance pour vérifier disponibilité et délai estimé.",
  },
  ar: {
    lang: "ar-TN",
    title: "مهر للإسعاف في تونس | نقل صحي وسيارة إسعاف",
    description:
      "خدمات الإسعاف والنقل الصحي وVSL ونقل الحاضنات في تونس. اتصلوا للتحقق من التوفر والمدة التقديرية.",
  },
  en: {
    lang: "en-TN",
    title: "Meher Ambulance Tunis | Ambulance and Patient Transport",
    description:
      "Ambulance, patient transport, VSL and incubator transport in Tunis. Call Meher Ambulance to confirm availability and estimated wait.",
  },
};

type LocaleStrings = {
  navLabel: string;
  languageLabel: string;
  call: string;
  openMenu: string;
  closeMenu: string;
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
  emergencyNote: string;
  samuLabel: string;
  civilProtectionLabel: string;
};

export const localeContent = {
  fr: {
    navLabel: "Navigation principale",
    languageLabel: "Choisir la langue",
    call: "Appeler maintenant",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    skip: "Aller au contenu",
    nav: [
      ["Accueil", "home"],
      ["Services", "services"],
      ["Galerie", "gallery"],
      ["À propos", "about"],
      ["Pourquoi nous choisir", "why"],
      ["Zones", "areas"],
      ["Contact", "contact"],
    ],
    kicker: "Transport sanitaire privé · Tunis",
    h1: "Ambulance privée à Tunis – Transport sanitaire au Bardo et aux Menzah",
    intro:
      "Besoin d’une ambulance en urgence à Tunis ? Vous cherchez un service d’ambulance rapide au Bardo ou à El Menzah ? Appelez notre équipe pour vérifier la disponibilité et le délai estimé selon votre demande. Pour une urgence vitale, contactez directement le SAMU (190) ou la Protection civile (198).",
    heroAlt: "Ambulance utilisée pour le transport sanitaire",
    areaSummary: "Tunis · Le Bardo · El Menzah 1 à 9",
    servicesTitle: "Ambulance et transport sanitaire urgent à Tunis",
    servicesIntro:
      "Pour une demande urgente de transport sanitaire à Tunis, contactez-nous afin de vérifier si une ambulance privée est disponible et sous quel délai. Les transports programmés sont également organisés selon les besoins du patient.",
    services: [
      {
        title: "Transport sanitaire urgent ou programmé",
        text: "Pour une ambulance en urgence à Tunis, appelez afin de confirmer la disponibilité et le délai estimé. Les trajets médicaux programmés sont aussi organisés selon les besoins communiqués.",
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
      [
        "Proposez-vous un service d’ambulance en urgence à Tunis ?",
        "Pour une demande urgente de transport sanitaire, appelez afin de vérifier la disponibilité et le délai estimé. En cas d’urgence vitale, contactez le SAMU au 190 ou la Protection civile au 198.",
      ],
    ],
    contactTitle: "Ambulance et transport sanitaire en urgence à Tunis",
    contactText: "Appelez pour décrire votre besoin et vérifier la disponibilité d’une ambulance privée ainsi que le délai estimé.",
    emergencyNote: "En cas d’urgence vitale, contactez directement les services publics de secours :",
    samuLabel: "SAMU",
    civilProtectionLabel: "Protection civile",
  },
  ar: {
    navLabel: "التنقل الرئيسي",
    languageLabel: "اختيار اللغة",
    call: "اتصل الآن",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    skip: "الانتقال إلى المحتوى",
    nav: [
      ["الرئيسية", "home"],
      ["الخدمات", "services"],
      ["المعرض", "gallery"],
      ["من نحن", "about"],
      ["لماذا نحن", "why"],
      ["المناطق", "areas"],
      ["اتصل بنا", "contact"],
    ],
    kicker: "نقل صحي خاص · تونس",
    h1: "إسعاف خاص في تونس – خدمات النقل الصحي بالباردو والمنزه",
    intro:
      "هل تحتاجون إلى سيارة إسعاف بشكل عاجل في تونس؟ اتصلوا بفريقنا للتحقق من توفر النقل الصحي والمدة التقديرية حسب الطلب. في الحالات الطبية المهددة للحياة، اتصلوا مباشرة بالإسعاف الطبي (190) أو الحماية المدنية (198).",
    heroAlt: "سيارة إسعاف مخصصة للنقل الصحي",
    areaSummary: "تونس · باردو · المنزه من 1 إلى 9",
    servicesTitle: "سيارة إسعاف ونقل صحي عاجل في تونس",
    servicesIntro: "للطلبات العاجلة للنقل الصحي في تونس، اتصلوا للتحقق من توفر سيارة إسعاف والمدة التقديرية. كما يمكن تنظيم الرحلات الطبية المبرمجة حسب احتياجات المريض.",
    services: [
      {
        title: "نقل صحي عاجل أو مبرمج",
        text: "لطلب سيارة إسعاف بشكل عاجل في تونس، اتصلوا للتحقق من التوفر والمدة التقديرية. كما ننظم الرحلات الطبية المبرمجة حسب الاحتياجات الموضحة.",
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
      ["هل توفرون سيارة إسعاف بشكل عاجل في تونس؟", "للطلبات العاجلة للنقل الصحي، اتصلوا للتحقق من التوفر والمدة التقديرية. في الحالات المهددة للحياة، اتصلوا بالإسعاف الطبي على 190 أو الحماية المدنية على 198."],
    ],
    contactTitle: "سيارة إسعاف ونقل صحي عاجل في تونس",
    contactText: "اتصلوا لشرح احتياجكم والتحقق من توفر سيارة إسعاف والمدة التقديرية.",
    emergencyNote: "في الحالات الطبية المهددة للحياة، اتصلوا مباشرة بخدمات النجدة العمومية:",
    samuLabel: "الإسعاف الطبي SAMU",
    civilProtectionLabel: "الحماية المدنية",
  },
  en: {
    navLabel: "Main navigation",
    languageLabel: "Choose language",
    call: "Call now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    nav: [
      ["Home", "home"],
      ["Services", "services"],
      ["Gallery", "gallery"],
      ["About", "about"],
      ["Why choose us", "why"],
      ["Areas", "areas"],
      ["Contact", "contact"],
    ],
    kicker: "Private patient transport · Tunis",
    h1: "Private Ambulance in Tunis – Medical Transport in Le Bardo and El Menzah",
    intro:
      "Need an ambulance urgently in Tunis? Contact our team to check private patient transport availability and the estimated wait for your request. For a life-threatening emergency, call SAMU (190) or Civil Protection (198) directly.",
    heroAlt: "Ambulance used for patient transport",
    areaSummary: "Tunis · Le Bardo · El Menzah 1 to 9",
    servicesTitle: "Urgent ambulance and patient transport in Tunis",
    servicesIntro:
      "For urgent patient transport in Tunis, call to check whether a private ambulance is available and ask for an estimated wait. Scheduled medical journeys are also arranged around the patient's needs.",
    services: [
      {
        title: "Urgent or scheduled patient transport",
        text: "For an ambulance in an urgent situation in Tunis, call to confirm availability and the estimated wait. Scheduled medical journeys can also be arranged.",
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
      ["Can I request an ambulance urgently in Tunis?", "For urgent patient transport, call to check availability and the estimated wait. For a life-threatening emergency, call SAMU on 190 or Civil Protection on 198."],
    ],
    contactTitle: "Urgent ambulance and patient transport in Tunis",
    contactText: "Call to explain your needs and check private ambulance availability and the estimated wait.",
    emergencyNote: "For a life-threatening medical emergency, contact public emergency services directly:",
    samuLabel: "SAMU",
    civilProtectionLabel: "Civil Protection",
  },
} satisfies Record<Locale, LocaleStrings>;
