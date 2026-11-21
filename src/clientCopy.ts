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
    badge: "Disponible 24h/24 — 7j/7",
    titleBold1: "Transport en ambulance",
    titleNormal: ", spécialiste du transport sanitaire,\u00a0",
    titleBold2: "partout en\u00a0Tunisie.",
    subtitle:
      "Notre métier est de prendre soin de ceux qui prennent soin des autres. Nous assurons des transports médicalisés rapides, fiables et confortables — urgences, hospitalisations et transferts à travers toute la Tunisie.",
    stats: [
      { value: "< 1h", label: "Intervention rapide" },
      { value: "Catégorie A", label: "Véhicules équipés" },
      { value: "Toute Tunisie", label: "Couverture nationale" },
    ],
  },
  services: {
    heading: "Nos Services de Transport Sanitaire",
    sub: "Trois solutions dédiées à chaque besoin médical, de l'urgence à la consultation programmée.",
    items: [
      {
        title: "Transport en ambulance",
        desc: "Ambulances de catégorie A équipées selon les normes des véhicules d'urgence — adaptées au transport de patients nécessitant de l'oxygène, entrée/sortie d'hôpital, urgences et rapatriement.",
      },
      {
        title: "Transport VSL",
        desc: "Véhicule Sanitaire Léger pour patients à mobilité réduite pouvant voyager assis : consultations, radiothérapie, chimiothérapie, kinésithérapie, dialyse. Spacieux, confortables, climatisés.",
      },
      {
        title: "Transport avec couveuse",
        desc: "Ambulances catégorie A équipées pour le transport des nouveau-nés en couveuse. Environnement chaud et humide reproduisant les conditions de l'utérus maternel.",
      },
    ],
  },
  gallery: {
    heading: "Nos Véhicules & Équipements",
    sub: "Ambulances récentes, intérieurs entièrement équipés : oxygène, brancards, moniteurs et matériel de réanimation.",
  },
  about: {
    heading: "Pourquoi nous faire confiance ?",
    body: "Notre renommée repose sur notre réactivité et notre professionnalisme. Dès votre appel, nous nous déplaçons rapidement dans toutes les régions de Tunisie. Nos ambulanciers diplômés sont formés au secourisme, à la qualité des soins et aux techniques de réanimation.",
    stat1Label: "Intervention après appel",
    stat2Label: "Toutes régions de Tunisie",
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
    body: "Pour toute information ou réservation d'ambulance, contactez-nous. Pour une assistance immédiate, appelez directement un membre de notre équipe — disponible 24h/24 partout en Tunisie.",
    location: "Tunisie — Intervention toutes régions",
    directCallTitle: "Appel Direct",
    directCallSub: "Un membre de notre équipe vous répond immédiatement.",
    availability: "Ligne disponible 24h/24 et 7j/7",
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
    badge: "Available 24/7",
    titleBold1: "Ambulance transport",
    titleNormal: ", healthcare transport specialist,\u00a0",
    titleBold2: "throughout\u00a0Tunisia.",
    subtitle:
      "Our mission is to care for those who care for others. We provide fast, reliable, and comfortable medical transport — emergencies, hospitalizations, and transfers across all of Tunisia.",
    stats: [
      { value: "< 1h", label: "Rapid response" },
      { value: "Category A", label: "Equipped vehicles" },
      { value: "All Tunisia", label: "Nationwide coverage" },
    ],
  },
  services: {
    heading: "Our Medical Transport Services",
    sub: "Three solutions tailored to every medical need, from emergencies to scheduled consultations.",
    items: [
      {
        title: "Ambulance Transport",
        desc: "Category A ambulances equipped to emergency vehicle standards — suitable for patients requiring oxygen, hospital admissions/discharges, emergencies and repatriation.",
      },
      {
        title: "VSL Transport",
        desc: "Light medical vehicle for patients with reduced mobility who can travel seated: consultations, radiotherapy, chemotherapy, physiotherapy, dialysis. Spacious, comfortable, air-conditioned.",
      },
      {
        title: "Incubator Transport",
        desc: "Category A ambulances equipped for transporting newborns in incubators. Warm, humid environment replicating the conditions of the maternal womb.",
      },
    ],
  },
  gallery: {
    heading: "Our Vehicles & Equipment",
    sub: "Modern ambulances, fully equipped interiors: oxygen, stretchers, monitors, and resuscitation equipment.",
  },
  about: {
    heading: "Why Trust Us?",
    body: "Our reputation is built on responsiveness and professionalism. From your first call, we move quickly across all regions of Tunisia. Our certified paramedics are trained in first aid, quality care, and resuscitation techniques.",
    stat1Label: "Response after call",
    stat2Label: "All regions of Tunisia",
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
    body: "For any information or ambulance booking, contact us. For immediate assistance, call a member of our team directly — available 24/7 throughout Tunisia.",
    location: "Tunisia — Covering all regions",
    directCallTitle: "Direct Call",
    directCallSub: "A member of our team will answer you immediately.",
    availability: "Line available 24/7",
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
    badge: "متاح على مدار 24 ساعة / 7 أيام",
    titleBold1: "نقل المرضى بالإسعاف",
    titleNormal: "، متخصصون في النقل الطبي،\u00a0",
    titleBold2: "في جميع أنحاء\u00a0تونس.",
    subtitle:
      "مهمتنا هي الاعتناء بمن يعتنون بالآخرين. نوفر خدمات نقل طبي سريعة وموثوقة ومريحة — للحالات الطارئة والاستشفاء والتحويل عبر كامل تونس.",
    stats: [
      { value: "< 1 ساعة", label: "استجابة سريعة" },
      { value: "الفئة أ", label: "مركبات مجهزة" },
      { value: "كل تونس", label: "تغطية وطنية" },
    ],
  },
  services: {
    heading: "خدمات النقل الطبي",
    sub: "ثلاثة حلول مخصصة لكل احتياج طبي، من حالات الطوارئ إلى المواعيد المقررة.",
    items: [
      {
        title: "النقل بالإسعاف",
        desc: "سيارات إسعاف من الفئة أ مجهزة وفق معايير مركبات الطوارئ — مناسبة لنقل المرضى الذين يحتاجون إلى أكسجين، والدخول والخروج من المستشفى، وحالات الطوارئ والترحيل.",
      },
      {
        title: "نقل VSL",
        desc: "مركبة طبية خفيفة للمرضى ذوي الحركة المحدودة الذين يمكنهم السفر جلوساً: الاستشارات، العلاج الإشعاعي، الكيميائي، الطبيعي، وغسيل الكلى. فسيحة ومريحة ومكيفة.",
      },
      {
        title: "نقل مع الحضانة",
        desc: "سيارات إسعاف من الفئة أ مجهزة لنقل المواليد الجدد في حضانات. بيئة دافئة ورطبة تحاكي ظروف الرحم الأمومي.",
      },
    ],
  },
  gallery: {
    heading: "مركباتنا ومعداتنا",
    sub: "سيارات إسعاف حديثة بداخل مجهز بالكامل: أكسجين، نقالات، أجهزة مراقبة ومعدات الإنعاش.",
  },
  about: {
    heading: "لماذا تثق بنا؟",
    body: "تستند سمعتنا إلى سرعة الاستجابة والاحترافية. منذ اتصالك الأول، نتحرك بسرعة في جميع مناطق تونس. مسعفونا المعتمدون مدربون على الإسعافات الأولية وجودة الرعاية وتقنيات الإنعاش.",
    stat1Label: "استجابة بعد الاتصال",
    stat2Label: "جميع مناطق تونس",
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
    body: "لأي معلومات أو حجز إسعاف، تواصل معنا. للمساعدة الفورية، اتصل مباشرة بأحد أعضاء فريقنا — متاح على مدار الساعة في جميع أنحاء تونس.",
    location: "تونس — تغطية جميع المناطق",
    directCallTitle: "اتصال مباشر",
    directCallSub: "سيجيبك أحد أعضاء فريقنا فوراً.",
    availability: "الخط متاح 24 ساعة / 7 أيام",
  },
  footer: {
    copy: "© 2026 خدمة مهر للإسعاف.",
    legal: "الشروط القانونية",
    privacy: "سياسة الخصوصية",
  },
};

export const translations = { fr, en, ar } as const;
export type T = typeof fr;
