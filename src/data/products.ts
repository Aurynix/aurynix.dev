// Every product on the site comes from this list.
// To add a product: drop a screenshot in /public/products/ and add one object below,
// with its text in every language (`copy.en`, `copy.ar`). No component changes are needed.
// Cards are sorted by `order`.
// Live demo URLs can be overridden at build time with env vars (see .env.example).

import type { Locale } from "@/i18n/config";

export type ProductStatus = "live" | "beta" | "soon";

/** The text of a product, written once per language. */
export type ProductCopy = {
  /** Short category line shown above the name, e.g. "AI lead qualification". */
  tagline: string;
  /** 1–2 sentences. Keep claims to what the product's README says. */
  description: string;
  /** Up to three short key points. */
  highlights: string[];
  /** Describes the screenshot for screen readers. */
  imageAlt: string;
  /** Optional small note under the links, e.g. about a slow first load. */
  note?: string;
};

export type Product = {
  slug: string;
  /** Brand name; the same in every language. */
  name: string;
  status: ProductStatus;
  image: { src: string; width: number; height: number };
  links: {
    /** "Live App" link. Also shown in the screenshot's address bar. */
    app?: string;
    /** "API Docs" link. */
    docs?: string;
    /** "GitHub" link. Leave empty for private repos. */
    github?: string;
  };
  order: number;
  copy: Record<Locale, ProductCopy>;
};

/** A product with its text resolved for one language. */
export type LocalizedProduct = Omit<Product, "copy"> & ProductCopy;

export const products: Product[] = [
  {
    slug: "pulse",
    name: "Aurynix Pulse",
    status: "live",
    image: { src: "/products/pulse.webp", width: 1600, height: 818 },
    links: {
      app: process.env.PULSE_APP_URL || "https://pulse.aurynix.dev",
      docs: "https://pulse-api.aurynix.dev/docs",
      // TODO: add https://github.com/Aurynix/aurynix-pulse once the repo is public (it is private now).
    },
    order: 1,
    copy: {
      en: {
        tagline: "AI lead qualification",
        description:
          "Pulse collects every lead from a web form, Telegram and CSV imports, merges duplicates into one profile, and scores how likely each one is to buy. Hot leads reach the sales team on Telegram right away, with the lead's own words as the reason.",
        highlights: [
          "ML fit score from Apex, blended with LLM intent analysis",
          "Reads Arabic and English, and quotes the lead for every signal",
          "Follow-up reminders and a daily summary, so no lead is forgotten",
        ],
        imageAlt: "Aurynix Pulse leads table, ranked by score with Hot, Warm and Cold tiers",
        note: "The sign-in page has a demo login with sample leads.",
      },
      ar: {
        tagline: "تأهيل العملاء المحتملين بالذكاء الاصطناعي",
        description:
          "يجمع Pulse كل عميل محتمل من نموذج الموقع وتيليجرام وملفات CSV، ويدمج المكرّر منها في ملف واحد، ويقيّم مدى احتمال شرائه. يصل العملاء الأكثر اهتمامًا إلى فريق المبيعات على تيليجرام فورًا، مع كلمات العميل نفسه سببًا لذلك.",
        highlights: [
          "درجة ملاءمة بالتعلم الآلي من Apex، مدمجة مع تحليل النية بنموذج لغوي",
          "يقرأ العربية والإنجليزية، ويقتبس كلام العميل لكل إشارة",
          "تذكيرات بالمتابعة وملخص يومي، حتى لا يُنسى أي عميل",
        ],
        imageAlt: "جدول العملاء المحتملين في Aurynix Pulse مرتّبًا حسب الدرجة بفئات ساخن ودافئ وبارد",
        note: "صفحة تسجيل الدخول فيها حساب تجريبي مع عملاء نموذجيين.",
      },
    },
  },
  {
    slug: "nexus",
    name: "Aurynix Nexus",
    status: "live",
    image: { src: "/products/nexus.webp", width: 1321, height: 817 },
    links: {
      // Previous address, still live: https://aurynix-nexus-web.vercel.app
      app: process.env.NEXUS_APP_URL || "https://nexus.aurynix.dev",
      // TODO: add API docs URL if the Nexus backend docs become public.
      github: "https://github.com/Aurynix/aurynix-nexus-web",
    },
    order: 2,
    copy: {
      en: {
        tagline: "AI business assistant",
        description:
          "An AI assistant you chat with. It answers from your own documents, reads and sends your Gmail, manages your Google Calendar, searches the web, and remembers what you tell it. It always asks before doing anything that leaves the app.",
        highlights: [
          "Answers cite the file and page, with OCR for scanned PDFs",
          "Email and calendar actions wait for your approval",
          "Memory you can see and edit, with your entries taking priority",
        ],
        imageAlt: "Aurynix Nexus chat waiting for approval before adding a meeting to the calendar",
      },
      ar: {
        tagline: "مساعد أعمال بالذكاء الاصطناعي",
        description:
          "مساعد ذكي تتحدث معه. يجيب من مستنداتك، ويقرأ بريدك في Gmail ويرسل منه، ويدير تقويم Google، ويبحث في الويب، ويتذكّر ما تخبره به. ويطلب إذنك دائمًا قبل أي إجراء يخرج من التطبيق.",
        highlights: [
          "الإجابات تذكر الملف والصفحة، مع التعرّف الضوئي على ملفات PDF الممسوحة",
          "إجراءات البريد والتقويم تنتظر موافقتك",
          "ذاكرة يمكنك رؤيتها وتعديلها، ومدخلاتك لها الأولوية",
        ],
        imageAlt: "محادثة في Aurynix Nexus تنتظر الموافقة قبل إضافة اجتماع إلى التقويم",
      },
    },
  },
  {
    slug: "apex",
    name: "Aurynix Apex",
    status: "live",
    image: { src: "/products/apex.webp", width: 1600, height: 829 },
    links: {
      app: process.env.APEX_APP_URL || "https://aurynix-apex-demo.onrender.com",
      docs: "https://aurynix-apex.onrender.com/docs",
      github: "https://github.com/Aurynix/aurynix-apex",
    },
    order: 3,
    copy: {
      en: {
        tagline: "ML lead scoring",
        description:
          "Apex scores every lead with its chance of converting, sorts leads into High, Medium and Low priority, explains why each lead got its score, and monitors itself in production for data and score drift.",
        highlights: [
          "Top 20% of scored leads hold 43% of buyers on held-out test data",
          "Feature and score drift monitoring with PSI",
          "Retraining swaps in a new model only if it beats the current one",
        ],
        imageAlt:
          "Aurynix Apex ranks an uploaded CSV of leads into High, Medium and Low segments with the top reason for each score",
        note: "The demo runs on free hosting and may take ~30–60 seconds to wake up on first load.",
      },
      ar: {
        tagline: "تقييم العملاء المحتملين بالتعلم الآلي",
        description:
          "يمنح Apex كل عميل محتمل نسبة احتمال تحوّله إلى مشترٍ، ويصنّف العملاء إلى أولوية عالية ومتوسطة ومنخفضة، ويشرح سبب كل درجة، ويراقب نفسه في بيئة الإنتاج لرصد انحراف البيانات والدرجات.",
        highlights: [
          "أعلى 20% من العملاء المُقيَّمين يضمّون 43% من المشترين في بيانات اختبار محجوزة",
          "مراقبة انحراف الخصائص والدرجات باستخدام PSI",
          "إعادة التدريب لا تستبدل النموذج إلا إذا تفوّق على الحالي",
        ],
        imageAlt:
          "Aurynix Apex يرتّب ملف CSV مرفوعًا من العملاء المحتملين إلى فئات عالية ومتوسطة ومنخفضة مع السبب الأبرز لكل درجة",
        note: "العرض التجريبي يعمل على استضافة مجانية وقد يستغرق نحو 30–60 ثانية ليبدأ عند أول تحميل.",
      },
    },
  },
];

/** Products sorted by `order`, with text in the given language. */
export function getProducts(locale: Locale): LocalizedProduct[] {
  return [...products]
    .sort((a, b) => a.order - b.order)
    .map(({ copy, ...product }) => ({ ...product, ...copy[locale] }));
}
