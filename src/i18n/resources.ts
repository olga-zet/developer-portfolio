import { nav } from "./sections/nav";
import { hero } from "./sections/hero";
import { about } from "./sections/about.ts";
import { projects } from "./sections/projects.ts";
import { experience } from "./sections/experience.ts";
import { stack } from "./sections/stack.ts";
import { contact } from "./sections/contact.ts";
import { caseStudies } from "./sections/caseStudies.ts";

export const resources = {
  pl: {
    translation: {
      nav: nav.pl,
      hero: hero.pl,
      about: about.pl,
      projects: projects.pl,
      experience: experience.pl,
      stack: stack.pl,
      contact: contact.pl,
      caseStudies: caseStudies.pl,
    },
  },

  en: {
    translation: {
      nav: nav.en,
      hero: hero.en,
      about: about.en,
      projects: projects.en,
      experience: experience.en,
      stack: stack.en,
      contact: contact.en,
      caseStudies: caseStudies.en,
    },
  },
} as const;

export const DEFAULT_LANGUAGE = "en";
export const FALLBACK_LANGUAGE = "en";

export type AppLanguage = keyof typeof resources;
