import type { Locale } from "@/lib/types";

const dictionaries = {
  tr: () => import("./dictionaries/tr.json").then(module => module.default),
  en: () => import("./dictionaries/en.json").then(module => module.default),
  // Legacy support for old URLs
  "tr-TR": () =>
    import("./dictionaries/tr.json").then(module => module.default),
  "en-US": () =>
    import("./dictionaries/en.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
