export type Lang = "fr" | "en" | "ar";

export const LANGS: {
  code: Lang;
  label: string;
  flag: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ar", label: "العربية", flag: "🇹🇳", dir: "rtl" },
];

const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    gallery: "Galerie",
    about: "À Propos",
    contact: "Contact",
    call: "Appeler",
  },
  hero: {
    badge: "Transport sanitaire privé · Tunis",
    titleBold1: "Transport en ambulance",
    titleNormal: " et transport de patients,\u00a0",
    titleBold2: "à Tunis.",
    subtitle:
      "Meher Ambulance organise des trajets de transport sanitaire à Tunis. Appelez pour décrire le déplacement et confirmer la disponibilité selon les besoins du patient.",
    stats: [
      { value: "Tunis", label: "Zone indiquée" },
      { value: "Sur demande", label: "Trajets organisés" },
      { value: "Par téléphone", label: "Disponibilité à confirmer" },
    ],
  },
  services: {
    heading: "Nos Services de Transport Sanitaire",
    sub: "Contactez-nous pour discuter du trajet et des besoins du patient.",
    items: [
      {
        title: "Transport en ambulance",
        desc: "Appelez pour décrire le trajet, les besoins du patient et vérifier la disponibilité d'une ambulance.",
      },
      {
        title: "Transport sanitaire programmé",
        desc: "Les déplacements médicaux planifiés peuvent être discutés avec l'équipe selon les besoins communiqués.",
      },
      {
        title: "Transfert entre établissements",
        desc: "Contactez l'équipe pour discuter d'un transfert entre un établissement de santé et le domicile ou un autre établissement.",
      },
    ],
  },
  gallery: {
    heading: "Nos Véhicules & Équipements",
    sub: "Quelques vues des véhicules de Meher Ambulance.",
  },
  about: {
    heading: "Pourquoi nous faire confiance ?",
    body: "Appelez Meher Ambulance pour échanger sur le trajet, les besoins du patient et les modalités de transport.",
    stat1Label: "Disponibilité à confirmer",
    stat2Label: "Zones à vérifier par téléphone",
  },
  criteria: {
    heading: "Quel mode de déplacement pour votre proche ?",
    intro:
      "C'est le médecin qui détermine le mode de transport approprié en fonction de l'état de santé et du degré d'autonomie du patient. Une ambulance est requise si la situation exige impérativement :",
    items: [
      "Une position allongée ou semi-allongée",
      "Une surveillance continue par un professionnel qualifié",
      "Le transport sur un brancard ou porté",
      "Des conditions d'asepsie optimales",
    ],
    note: "À défaut, le médecin prescrira un transport en VSL ou en taxi. Une « prescription médicale de transport » sera délivrée, pouvant être établie a posteriori en cas d'urgence.",
  },
  contact: {
    heading: "Contactez-nous",
    body: "Pour toute information ou réservation, appelez afin de discuter du trajet et de confirmer la disponibilité.",
    location: "Tunis — couverture à confirmer selon l'adresse",
    directCallTitle: "Appel Direct",
    directCallSub: "Un membre de notre équipe vous répond immédiatement.",
    availability: "Disponibilité à confirmer par téléphone",
  },
  footer: {
    copy: "© 2026 Meher Ambulance Service.",
    legal: "Mentions Légales",
    privacy: "Confidentialité",
  },
};

const en = {
  nav: {
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    about: "About",
    contact: "Contact",
    call: "Call",
  },
  hero: {
    badge: "Private patient transport · Tunis",
    titleBold1: "Ambulance transport",
    titleNormal: " and patient transport,\u00a0",
    titleBold2: "in Tunis.",
    subtitle:
      "Meher Ambulance arranges patient transport in Tunis. Call to discuss the journey and confirm availability around the patient's needs.",
    stats: [
      { value: "Tunis", label: "Listed area" },
      { value: "On request", label: "Journeys arranged" },
      { value: "By phone", label: "Confirm availability" },
    ],
  },
  services: {
    heading: "Our Medical Transport Services",
    sub: "Contact us to discuss the journey and the patient's needs.",
    items: [
      {
        title: "Ambulance Transport",
        desc: "Call to describe the journey and patient needs and check ambulance availability.",
      },
      {
        title: "Scheduled medical transport",
        desc: "Planned medical journeys can be discussed with the team around the needs you share.",
      },
      {
        title: "Transfers between facilities",
        desc: "Contact the team to discuss a transfer between a health facility, home, or another facility.",
      },
    ],
  },
  gallery: {
    heading: "Our Vehicles & Equipment",
    sub: "A few views of Meher Ambulance vehicles.",
  },
  about: {
    heading: "Why Trust Us?",
    body: "Call Meher Ambulance to discuss the journey, the patient's needs, and transport arrangements.",
    stat1Label: "Availability to confirm",
    stat2Label: "Check areas by phone",
  },
  criteria: {
    heading: "Which Transport for Your Loved One?",
    intro:
      "The doctor determines the appropriate mode of transport based on the patient's health condition and degree of autonomy. An ambulance is required if the situation requires:",
    items: [
      "A lying or semi-reclined position",
      "Continuous monitoring by a qualified professional",
      "Transport on a stretcher or carried",
      "Optimal aseptic conditions",
    ],
    note: "Otherwise, the doctor will prescribe VSL or taxi transport. A 'medical transport prescription' will be issued, which can be established retroactively in emergencies.",
  },
  contact: {
    heading: "Contact Us",
    body: "For information or a booking, call to discuss the journey and confirm availability.",
    location: "Tunis — confirm coverage for your address",
    directCallTitle: "Direct Call",
    directCallSub: "A member of our team will answer you immediately.",
    availability: "Confirm availability by phone",
  },
  footer: {
    copy: "© 2026 Meher Ambulance Service.",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
  },
};

const ar = {
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    gallery: "المعرض",
    about: "من نحن",
    contact: "اتصل",
    call: "اتصل",
  },
  hero: {
    badge: "نقل صحي خاص · تونس",
    titleBold1: "نقل المرضى بالإسعاف",
    titleNormal: " والنقل الصحي،\u00a0",
    titleBold2: "في تونس.",
    subtitle:
      "تنظم مهر للإسعاف رحلات النقل الصحي في تونس. اتصلوا لشرح الرحلة والتحقق من التوفر وفق احتياجات المريض.",
    stats: [
      { value: "تونس", label: "منطقة مذكورة" },
      { value: "حسب الطلب", label: "تنظيم الرحلات" },
      { value: "عبر الهاتف", label: "تأكيد التوفر" },
    ],
  },
  services: {
    heading: "خدمات النقل الطبي",
    sub: "اتصلوا لمناقشة الرحلة واحتياجات المريض.",
    items: [
      {
        title: "النقل بالإسعاف",
        desc: "اتصلوا لشرح الرحلة واحتياجات المريض والتحقق من توفر سيارة إسعاف.",
      },
      {
        title: "النقل الصحي المبرمج",
        desc: "يمكنكم مناقشة الرحلات الطبية المبرمجة مع الفريق وفق الاحتياجات التي توضحونها.",
      },
      {
        title: "النقل بين المؤسسات الصحية",
        desc: "اتصلوا بالفريق لمناقشة النقل بين مؤسسة صحية والمنزل أو مؤسسة أخرى.",
      },
    ],
  },
  gallery: {
    heading: "مركباتنا ومعداتنا",
    sub: "بعض الصور لمركبات مهر للإسعاف.",
  },
  about: {
    heading: "لماذا تثق بنا؟",
    body: "اتصلوا بمهر للإسعاف لمناقشة الرحلة واحتياجات المريض وتفاصيل النقل.",
    stat1Label: "التوفر يحتاج إلى تأكيد",
    stat2Label: "تأكيد المناطق عبر الهاتف",
  },
  criteria: {
    heading: "ما وسيلة النقل المناسبة لذويك؟",
    intro:
      "يحدد الطبيب وسيلة النقل المناسبة بناءً على الحالة الصحية للمريض ودرجة استقلاليته. يُطلب الإسعاف إذا كانت الحالة تستوجب:",
    items: [
      "وضعية الاستلقاء أو شبه الاستلقاء",
      "المراقبة المستمرة من قبل متخصص مؤهل",
      "النقل على نقالة أو محمولاً",
      "ظروف تعقيم مثلى",
    ],
    note: "خلاف ذلك، يصف الطبيب نقلاً بـ VSL أو سيارة أجرة. ستُصدر وصفة نقل طبي يمكن إصدارها بأثر رجعي في حالات الطوارئ.",
  },
  contact: {
    heading: "اتصل بنا",
    body: "للمعلومات أو الحجز، اتصلوا لمناقشة الرحلة والتحقق من التوفر.",
    location: "تونس — يرجى تأكيد التغطية حسب العنوان",
    directCallTitle: "اتصال مباشر",
    directCallSub: "سيجيبك أحد أعضاء فريقنا فوراً.",
    availability: "يرجى تأكيد التوفر عبر الهاتف",
  },
  footer: {
    copy: "© 2026 خدمة مهر للإسعاف.",
    legal: "الشروط القانونية",
    privacy: "سياسة الخصوصية",
  },
};

export const translations = { fr, en, ar } as const;
export type T = typeof fr;
