// Arabic copy. Same shape as en.ts. Product names and technical terms
// (GitHub, API, CI, Docker, PSI) stay in Latin script.

import type { Dictionary } from "./en";

export const ar: Dictionary = {
  meta: {
    title: "Aurynix — أنظمة ذكاء اصطناعي تعمل في بيئة الإنتاج",
    description:
      "تبني Aurynix منتجات ذكاء اصطناعي تعمل في بيئة الإنتاج لفرق المبيعات والأعمال: Pulse لتأهيل العملاء المحتملين، وNexus مساعدًا ذكيًا للأعمال، وApex لتقييم العملاء المحتملين بالتعلم الآلي.",
  },

  skipLink: "انتقل إلى المحتوى",

  header: {
    navLabel: "القائمة الرئيسية",
    products: "المنتجات",
    how: "كيف نبنيها",
    github: "GitHub",
    contact: "تواصل معنا",
    switchLanguage: "Read this page in English",
  },

  theme: {
    label: "المظهر",
    system: "تلقائي (حسب الجهاز)",
    light: "فاتح",
    dark: "داكن",
  },

  hero: {
    allLive: (n: number) => `${n} منتجات، جميعها تعمل فعليًا في بيئة الإنتاج`,
    someLive: (n: number) => `${n} قيد التشغيل الفعلي`,
    headline: "ذكاء اصطناعي يعمل فعلًا.",
    headlineAccent: "لا عروض تجريبية.",
    description:
      "Aurynix مجموعة من منتجات الذكاء الاصطناعي الجاهزة للإنتاج لفرق المبيعات والأعمال. كل منتج يعمل فعليًا، مع التقييم والمراقبة والاختبارات والنشر الحقيقي.",
    cta: "استكشف المنتجات",
    github: "عرض على GitHub",
  },

  metricsLabel: "النتائج",
  metrics: [
    { value: "2.2×", label: "مشترون أكثر مقارنةً بالترتيب العشوائي (Apex)" },
    { value: "43%", label: "من المشترين ضمن أعلى 20% من العملاء المُقيَّمين (Apex)" },
    { value: "600+", label: "اختبار API يعمل في CI مع كل تغيير (Pulse)" },
    { value: "1 GiB", label: "من الذاكرة يكفي لتشغيل Pulse بالكامل: ست خدمات (Pulse)" },
  ],

  products: {
    eyebrow: "المنتجات",
    title: "منتجات تساعد الفرق على البدء بالأهم أولًا.",
    liveApp: "التطبيق المباشر",
    apiDocs: "توثيق API",
    github: "GitHub",
    linkFor: (name: string) => ` الخاص بـ ${name}`,
    repoFor: (name: string) => ` مستودع ${name}`,
    status: { live: "مباشر", beta: "تجريبي", soon: "قريبًا" },
  },

  how: {
    eyebrow: "كيف نبنيها",
    title: "النموذج 30% فقط من إطلاق الذكاء الاصطناعي. الـ70% الباقية هي ما يبقيه يعمل.",
    model: "النموذج 30%",
    rest: "كل ما حوله 70%",
    pillars: {
      evaluation: {
        title: "التقييم",
        body: "تدقيق تسرّب البيانات، والمعايرة، واختبارات على بيانات محجوزة قبل إطلاق أي نموذج.",
      },
      monitoring: {
        title: "المراقبة",
        body: "رصد الانحراف وتتبّع الأداء الفعلي مقارنةً بنتائج الاختبار الأصلية.",
      },
      security: {
        title: "الأمان",
        body: "موافقة بشرية على الإجراءات الحساسة، وحماية من حقن الأوامر، ورموز وصول مشفّرة.",
      },
      deployment: {
        title: "النشر",
        body: "خدمات في حاويات Docker، وCI مع كل طلب دمج، وبنية تحتية خفيفة.",
      },
    },
  },

  contact: {
    title: "لديك سير عمل يجب أن يتولاه الذكاء الاصطناعي؟",
    body: "أخبرنا بما يستهلك وقت فريقك، وسنعود إليك.",
  },

  footer: {
    navLabel: "روابط التذييل",
    builtBy: "صُنع بواسطة فريق Aurynix.",
    portfolio: "معرض أعمال المؤسس",
  },
};
