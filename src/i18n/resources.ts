import { nav } from "./sections/nav";
import { hero } from "./sections/hero";
import { about } from "./sections/about.ts";
import { projects } from "./sections/projects.ts";

export const resources = {
  pl: {
    translation: {
      nav: nav.pl,
      hero: hero.pl,
      about: about.pl,
      projects: projects.pl,
    },
  },

  en: {
    translation: {
      nav: nav.en,
      hero: hero.en,
      about: about.en,
      projects: projects.en,
    },
  },
} as const;

export const DEFAULT_LANGUAGE = "en";
export const FALLBACK_LANGUAGE = "en";

export type AppLanguage = keyof typeof resources;
