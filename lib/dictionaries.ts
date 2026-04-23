import type { Locale } from '@/i18n.config';

// On utilise l'import dynamique, Vercel adore ça et ça ne plante jamais
const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  // Fallback sur le français si la locale n'est pas trouvée
  return dictionaries[locale]?.() ?? dictionaries.fr();
};

export type AppDictionary = Awaited<ReturnType<typeof dictionaries.fr>>;
