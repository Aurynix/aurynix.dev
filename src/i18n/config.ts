// Supported languages. The first visit to "/" picks one from the browser's
// language setting (see src/proxy.ts); the language button overrides it.

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that remembers the last language the visitor chose. */
export const LOCALE_COOKIE = "lang";

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);

export const localeMeta: Record<Locale, { name: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  en: { name: "English", dir: "ltr", ogLocale: "en_US" },
  ar: { name: "العربية", dir: "rtl", ogLocale: "ar_AR" },
};
