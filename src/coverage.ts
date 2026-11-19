export type CoverageLocale = "fr" | "ar" | "en";

// Geographic-name references checked for this candidate list:
// INS Code géographique tunisien 2012 (sector tables):
// https://www.ins.tn/sites/default/files/publication/pdf/code%20geographique%202012.pdf
// https://www.ins.tn/sites/default/files/publication/pdf/code%20geographique%202012_0.pdf
// MEHAT governorate atlas index: https://www.mehat.gov.tn/fr/principaux-secteurs/amenagement-du-territoire/schemas-directeurs-damenagement-des-territoires-et-atlas-cartographiques/atlas-cartographiques/
// These identify administrative/geographic names, not the ambulance's service coverage.
type Localized = Record<CoverageLocale, string>;
type Neighborhood = {
  name: Localized;
  classification: "ins-sector" | "common-name" | "candidate";
};
export type CoverageGroup = {
  id: string;
  enabled: boolean;
  availability: "listed" | "confirm";
  name: Localized;
  heading: Localized;
  description: Localized;
  neighborhoods: Neighborhood[];
};

const ins = (fr: string, ar: string, en = fr): Neighborhood => ({
  name: { fr, ar, en },
  classification: "ins-sector",
});
const candidate = (fr: string, ar: string, en = fr): Neighborhood => ({
  name: { fr, ar, en },
  classification: "candidate",
});
const commonName = (fr: string, ar: string, en = fr): Neighborhood => ({
  name: { fr, ar, en },
  classification: "common-name",
});

/**
 * Candidate service coverage is controlled here. Keep newly proposed groups
 * visible with an explicit confirmation label until the business confirms
 * whether it can serve those addresses. Raoued stays disabled by default.
 */
export const coverageGroups: CoverageGroup[] = [
  {
    id: "bardo",
    enabled: true,
    availability: "listed",
    name: { fr: "Le Bardo", ar: "الباردو", en: "Le Bardo" },
    heading: {
      fr: "Ambulance privée au Bardo",
      ar: "إسعاف خاص بالباردو",
      en: "Private ambulance in Le Bardo",
    },
    description: {
      fr: "Le Bardo est une zone mentionnée pour le transport sanitaire. Les secteurs ci-dessous sont des repères géographiques ; confirmez la prise en charge de votre adresse par téléphone.",
      ar: "الباردو منطقة مذكورة لخدمات النقل الصحي. الأسماء التالية معالم جغرافية؛ يرجى الاتصال لتأكيد إمكانية التكفل بعنوانكم.",
      en: "Le Bardo is a listed patient-transport area. The names below are geographic references; call to confirm service at your address.",
    },
    neighborhoods: [
      ins("Le Bardo Nord", "باردو الشمالي"),
      ins("Le Bardo Sud", "باردو الجنوبي"),
      ins("Ksar Saïd", "قصر السعيد"),
      ins("Ksar Saïd II", "قصر السعيد الثاني", "Ksar Saïd 2"),
      ins("Bou-Choucha", "بوشوشة"),
      ins("Khaznadar", "خزندار"),
      ins("El Hadika", "الحديقة"),
      ins("Bonne Résidence", "الإقامة الطيبة", "Bonne Residence"),
      ins("El Fath", "الفتح"),
      ins("El Bassatine", "البساتين"),
      ins("Es-Saâda", "السعادة", "Es-Saada"),
      ins("Ksar-El Bortal", "قصر البرطال", "Ksar El Bortal"),
      ins("Ibn Sina", "ابن سينا"),
    ],
  },
  {
    id: "menzah",
    enabled: true,
    availability: "listed",
    name: { fr: "El Menzah", ar: "المنزه", en: "El Menzah" },
    heading: {
      fr: "Ambulance privée à El Menzah",
      ar: "إسعاف خاص بالمنزه",
      en: "Private ambulance in El Menzah",
    },
    description: {
      fr: "Le site mentionne les secteurs d’El Menzah 1 à 9. Appelez pour confirmer la disponibilité et la prise en charge de votre adresse.",
      ar: "تشمل المناطق المذكورة أحياء المنزه من 1 إلى 9. اتصلوا لتأكيد التوفر وإمكانية التكفل بعنوانكم.",
      en: "The site lists El Menzah districts 1 to 9. Call to confirm availability and service at your address.",
    },
    neighborhoods: Array.from({ length: 9 }, (_, index) => {
      const n = index + 1;
      return commonName(`El Menzah ${n}`, `المنزه ${n}`);
    }),
  },
  {
    id: "ennasr",
    enabled: true,
    availability: "confirm",
    name: { fr: "Ennasr", ar: "النصر", en: "Ennasr" },
    heading: {
      fr: "Ambulance privée à Ennasr",
      ar: "إسعاف خاص بالنصر",
      en: "Private ambulance in Ennasr",
    },
    description: {
      fr: "Ennasr 1 et Ennasr 2 figurent comme secteurs géographiques. La couverture commerciale de ces adresses reste à confirmer avant toute réservation.",
      ar: "النصر 1 والنصر 2 منطقتان جغرافيتان. تغطية الخدمة لهذه العناوين غير مؤكدة ويجب التحقق منها قبل الحجز.",
      en: "Ennasr 1 and Ennasr 2 are geographic sectors. Whether the service covers these addresses must be confirmed before booking.",
    },
    neighborhoods: [
      ins("Ennasr 1", "النصر 1"),
      ins("Ennasr 2", "النصر 2"),
      candidate("Cité Ennasr", "حي النصر"),
    ],
  },
  {
    id: "ariana",
    enabled: true,
    availability: "confirm",
    name: { fr: "Ariana", ar: "أريانة", en: "Ariana" },
    heading: {
      fr: "Transport sanitaire à Ariana",
      ar: "نقل صحي بأريانة",
      en: "Patient transport in Ariana",
    },
    description: {
      fr: "Ariana Ville, Ariana Supérieure et Nouvelle Ariana sont des noms géographiques relevés dans les références consultées. Les autres appellations sont des secteurs candidats ; vérifiez la couverture de votre adresse.",
      ar: "أريانة المدينة وأريانة العليا وأريانة الجديدة أسماء جغرافية واردة في المراجع. الأسماء الأخرى مناطق مقترحة؛ يرجى التحقق من تغطية عنوانكم.",
      en: "Ariana Ville, Ariana Supérieure and Nouvelle Ariana appear in the references consulted. Other names are candidate areas; check service at your address.",
    },
    neighborhoods: [
      ins("Ariana Ville", "أريانة المدينة", "L’Ariana Ville"),
      candidate("Ariana Soghra", "أريانة الصغرى"),
      ins("Ariana Supérieure", "أريانة العليا", "Ariana Supérieur"),
      ins("Nouvelle Ariana", "أريانة الجديدة", "La Nouvelle Ariana"),
      candidate("Borj El Baccouche", "برج البكوش"),
      candidate("Borj Turki", "برج التركي"),
      candidate("Cité des Roses", "حي الورود"),
      candidate("Cité du Jardin", "حي الحديقة"),
      candidate("Cité de la Santé", "حي الصحة"),
      ins("El Yasmina", "الياسمينة", "El Yasmina"),
    ],
  },
  {
    id: "soukra",
    enabled: true,
    availability: "confirm",
    name: { fr: "La Soukra", ar: "سكرة", en: "La Soukra" },
    heading: {
      fr: "Transport sanitaire à La Soukra",
      ar: "نقل صحي بسكرة",
      en: "Patient transport in La Soukra",
    },
    description: {
      fr: "Soukra, Dar Fadhal, Chotrana et les secteurs voisins apparaissent comme repères géographiques. Leur desserte par le service doit être confirmée selon votre adresse.",
      ar: "سكرة ودار فضال وشطرانة والمناطق المجاورة معالم جغرافية. يجب تأكيد توفر الخدمة حسب عنوانكم.",
      en: "Soukra, Dar Fadhal, Chotrana and nearby areas are geographic references. Service coverage must be confirmed for your address.",
    },
    neighborhoods: [
      ins("Soukra", "سكرة"),
      ins("Dar Fadhal", "دار فضال"),
      ins("El Bessatine", "البساتين"),
      ins("Chotrana", "شطرانة"),
      ins("Borj El Ouzir", "برج الوزير"),
      ins("Ennasim", "النسيم"),
      ins("Ettaamir", "التعمير"),
    ],
  },
  {
    id: "mnihla",
    enabled: true,
    availability: "confirm",
    name: { fr: "Mnihla", ar: "المنيهلة", en: "Mnihla" },
    heading: {
      fr: "Transport sanitaire à Mnihla",
      ar: "نقل صحي بالمنيهلة",
      en: "Patient transport in Mnihla",
    },
    description: {
      fr: "El Mnihla apparaît dans la nomenclature géographique consultée. Les autres noms sont proposés comme repères locaux ; confirmez la couverture avec l’équipe.",
      ar: "المنيهلة واردة في التصنيف الجغرافي الذي تمت مراجعته. الأسماء الأخرى معالم محلية مقترحة؛ يرجى تأكيد التغطية مع الفريق.",
      en: "El Mnihla appears in the geographic classification consulted. The other names are proposed local references; confirm coverage with the team.",
    },
    neighborhoods: [
      ins("El Mnihla", "المنيهلة"),
      candidate("Errafaha", "الرفاهة"),
      candidate("15 Octobre", "15 أكتوبر"),
      candidate("Cité El Bassatine", "حي البساتين"),
    ],
  },
  {
    id: "raoued",
    enabled: false,
    availability: "confirm",
    name: { fr: "Raoued", ar: "رواد", en: "Raoued" },
    heading: {
      fr: "Transport sanitaire à Raoued",
      ar: "نقل صحي برواد",
      en: "Patient transport in Raoued",
    },
    description: {
      fr: "Zone facultative, désactivée jusqu’à confirmation de la couverture par le client.",
      ar: "منطقة اختيارية، غير مفعلة إلى حين تأكيد التغطية من صاحب الخدمة.",
      en: "Optional area, disabled until the business confirms service coverage.",
    },
    neighborhoods: [
      ins("Raoued", "رواد"),
      ins("El Ghazala", "الغزالة", "Cité Elgazala"),
      ins("Jaafar", "جعفر", "Jaafer"),
      ins("Enkhilet", "النخيلات"),
      ins("Borj Ettouil", "برج الطويل", "Bourj Ettouil"),
    ],
  },
];

export const coverageCopy: Record<
  CoverageLocale,
  {
    title: string;
    intro: string;
    listed: string;
    confirm: string;
    neighborhoodCount: string;
    geographicStatus: string;
    commonStatus: string;
    candidateStatus: string;
    classificationNote: string;
    expand: string;
  }
> = {
  fr: {
    title: "Nos Zones d’Intervention à Tunis et dans le Grand Tunis",
    intro:
      "Le Bardo et El Menzah sont les secteurs mentionnés pour le service. Ennasr, Ariana, La Soukra et Mnihla sont des zones candidates : leur couverture doit être confirmée avec l’équipe avant toute réservation.",
    listed: "Zone mentionnée · disponibilité à confirmer selon l’adresse",
    confirm: "Zone candidate · couverture non confirmée",
    neighborhoodCount: "secteurs",
    geographicStatus: "Secteur INS (nomenclature 2012)",
    commonStatus: "Nom d’usage non listé comme secteur INS",
    candidateStatus: "Nom local à valider",
    classificationNote:
      "Les références INS servent à distinguer les secteurs géographiques ; elles ne confirment pas que le service dessert ces adresses. Appelez pour confirmer chaque trajet.",
    expand: "Voir les secteurs",
  },
  ar: {
    title: "مناطق التدخل في تونس الكبرى",
    intro:
      "الباردو والمنزه منطقتان مذكورتان للخدمة. النصر وأريانة وسكرة والمنيهلة مناطق مقترحة يجب تأكيد تغطيتها مع الفريق قبل الحجز.",
    listed: "منطقة مذكورة · يرجى تأكيد التوفر حسب العنوان",
    confirm: "منطقة مقترحة · التغطية غير مؤكدة",
    neighborhoodCount: "قطاعات",
    geographicStatus: "قطاع حسب تصنيف INS لسنة 2012",
    commonStatus: "اسم متداول غير مدرج كقطاع لدى INS",
    candidateStatus: "اسم محلي يحتاج إلى التثبت",
    classificationNote:
      "تساعد مراجع INS على تمييز المناطق الجغرافية، لكنها لا تؤكد أن الخدمة تغطي هذه العناوين. يرجى الاتصال لتأكيد كل رحلة.",
    expand: "عرض المناطق",
  },
  en: {
    title: "Service Areas in Tunis and Greater Tunis",
    intro:
      "Le Bardo and El Menzah are the areas listed for the service. Ennasr, Ariana, La Soukra and Mnihla are candidate areas; coverage must be confirmed with the team before booking.",
    listed: "Listed area · availability depends on address confirmation",
    confirm: "Candidate area · coverage not confirmed",
    neighborhoodCount: "sectors",
    geographicStatus: "INS sector (2012 classification)",
    commonStatus: "Common name, not listed as an INS sector",
    candidateStatus: "Local name to verify",
    classificationNote:
      "INS references distinguish geographic sectors; they do not confirm that the service covers these addresses. Call to check each journey.",
    expand: "View sectors",
  },
};
