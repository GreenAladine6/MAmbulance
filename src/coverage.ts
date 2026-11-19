export type CoverageLocale = "fr" | "ar" | "en";

// Geographic-name references checked for this candidate list:
// INS Code géographique tunisien 2012 (sector tables):
// https://www.ins.tn/sites/default/files/publication/pdf/code%20geographique%202012.pdf
// https://www.ins.tn/sites/default/files/publication/pdf/code%20geographique%202012_0.pdf
// MEHAT governorate atlas index: https://www.mehat.gov.tn/fr/principaux-secteurs/amenagement-du-territoire/schemas-directeurs-damenagement-des-territoires-et-atlas-cartographiques/atlas-cartographiques/
// These identify administrative/geographic names, not the ambulance's service coverage.
type Localized = Record<CoverageLocale, string>;
type Neighborhood = {
  /** Set false to temporarily remove a place from the public list. */
  enabled?: boolean;
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
      fr: "Notre service de transport sanitaire dessert Le Bardo et ses secteurs de référence, dont Le Bardo Nord, Le Bardo Sud, Ksar Saïd et Khaznadar. Appelez pour confirmer la prise en charge à votre adresse.",
      ar: "تتوفر خدمة النقل الصحي في الباردو ومناطقه المرجعية، ومنها باردو الشمالي وباردو الجنوبي وقصر السعيد وخزندار. يرجى الاتصال لتأكيد إمكانية التكفل بعنوانكم.",
      en: "Our patient transport service lists Le Bardo and nearby reference areas, including Le Bardo Nord, Le Bardo Sud, Ksar Saïd and Khaznadar. Call to confirm service at your address.",
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
      fr: "Vous recherchez une ambulance privée à El Menzah 1, El Menzah 2, El Menzah 3, El Menzah 4, El Menzah 5, El Menzah 6, El Menzah 7, El Menzah 8 ou El Menzah 9 ? Appelez pour confirmer la disponibilité à votre adresse.",
      ar: "هل تبحثون عن إسعاف خاص في أحياء المنزه من 1 إلى 9؟ اتصلوا لتأكيد التوفر وإمكانية التكفل بعنوانكم.",
      en: "Looking for a private ambulance in El Menzah 1 through El Menzah 9? Call to confirm availability and service at your address.",
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
      fr: "Ennasr 1, Ennasr 2 et Cité Ennasr sont des appellations locales proposées comme repères. La couverture de ces adresses reste à confirmer avant toute réservation.",
      ar: "النصر 1 والنصر 2 وحي النصر أسماء محلية مقترحة كمعالم. يجب تأكيد تغطية هذه العناوين قبل الحجز.",
      en: "Ennasr 1, Ennasr 2 and Cité Ennasr are local names shown as reference points. Service coverage at these addresses must be confirmed before booking.",
    },
    neighborhoods: [
      candidate("Ennasr 1", "النصر 1"),
      candidate("Ennasr 2", "النصر 2"),
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
      fr: "Les noms affichés sont des repères géographiques locaux, pas une confirmation de secteurs administratifs distincts ni de desserte. Vérifiez la couverture de votre adresse avec l’équipe.",
      ar: "الأسماء المعروضة معالم جغرافية محلية، ولا تعني أنها قطاعات إدارية مستقلة أو مناطق مغطاة بالخدمة. يرجى التحقق من تغطية عنوانكم مع الفريق.",
      en: "The names shown are local geographic references, not confirmation of separate administrative sectors or service coverage. Check your address with the team.",
    },
    neighborhoods: [
      candidate("Ariana Ville", "أريانة المدينة", "L’Ariana Ville"),
      candidate("Ariana Soghra", "أريانة الصغرى"),
      candidate("Ariana Supérieure", "أريانة العليا", "Ariana Supérieur"),
      candidate("Nouvelle Ariana", "أريانة الجديدة", "La Nouvelle Ariana"),
      candidate("Borj El Baccouche", "برج البكوش"),
      candidate("Borj Turki", "برج التركي"),
      candidate("Cité des Roses", "حي الورود"),
      candidate("Cité du Jardin", "حي الحديقة"),
      candidate("Cité de la Santé", "حي الصحة"),
      candidate("El Yasmina", "الياسمينة", "El Yasmina"),
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
      candidate("Soukra", "سكرة"),
      candidate("Dar Fadhal", "دار فضال"),
      candidate("El Bessatine", "البساتين"),
      candidate("Chotrana", "شطرانة"),
      candidate("Borj El Ouzir", "برج الوزير"),
      candidate("Ennasim", "النسيم"),
      candidate("Ettaamir", "التعمير"),
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
      fr: "El Mnihla, Errafaha et 15 Octobre figurent dans la nomenclature géographique consultée. La couverture commerciale de ces adresses doit être confirmée avec l’équipe.",
      ar: "المنيهلة والرفاهة و15 أكتوبر واردة في التصنيف الجغرافي الذي تمت مراجعته. يجب تأكيد التغطية التجارية لهذه العناوين مع الفريق.",
      en: "El Mnihla, Errafaha and 15 Octobre appear in the geographic classification consulted. Confirm service coverage at these addresses with the team.",
    },
    neighborhoods: [
      ins("El Mnihla", "المنيهلة"),
      ins("Errafaha", "الرفاهة"),
      ins("15 Octobre", "15 أكتوبر"),
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
      "Notre service de transport sanitaire vous accompagne au Bardo, à El Menzah, à Ennasr, à Ariana et dans les secteurs environnants, selon notre zone réelle de couverture. Le Bardo et El Menzah sont mentionnés ; les autres zones restent à confirmer avec l’équipe avant toute réservation.",
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
      "ترافقكم خدمة النقل الصحي في الباردو والمنزه والنصر وأريانة والمناطق المحيطة، بحسب نطاق التغطية الفعلي. الباردو والمنزه منطقتان مذكورتان؛ أما المناطق الأخرى فيجب تأكيد تغطيتها مع الفريق قبل الحجز.",
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
      "Our patient transport service covers Le Bardo, El Menzah, Ennasr, Ariana and surrounding areas according to our actual service range. Le Bardo and El Menzah are listed; the other areas remain candidates and must be confirmed with the team before booking.",
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
