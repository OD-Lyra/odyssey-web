import { i18n, type Locale } from "../i18n.config";

const dictionaries = {
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
} as const;

export type AppDictionary = Awaited<ReturnType<(typeof dictionaries)["fr"]>>;

export async function getDictionary(locale: Locale) {
  const safeLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
  return dictionaries[safeLocale]();
}
