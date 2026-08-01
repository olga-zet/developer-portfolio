// ProjectCaseStudy.data.ts

import CvMakerArchitectureEn from "../../../public/cv-maker/architecture-refinement-en.png";
import CvMakerArchitecturePl from "../../../public/cv-maker/architecture-refinement-pl.png";
import CvMakerFinalCv from "../../../public/cv-maker/final-cv.png";
import CvMakerFormStep from "../../../public/cv-maker/form-step.png";
import CvMakerHero from "../../../public/cv-maker/cv-maker-hero.png";
import CvMakerMultiStepForm from "../../../public/cv-maker/multi-step-form.png";
import CvMakerPrintReadyCv from "../../../public/cv-maker/print-ready-cv.png";
import CvMakerResponsiveCarousel from "../../../public/cv-maker/responsive-carousel.png";
import CvMakerTemplateSelection from "../../../public/cv-maker/template-selection.png";
import CvMakerUserFlow from "../../../public/cv-maker/user-flow.png";

import TarotHeroDesktop from "../../../public/tarot-app/hero-desktop.png";
import TarotOverviewSpread from "../../../public/tarot-app/overview-spread.png";
import TarotOverviewReading from "../../../public/tarot-app/overview-reading.png";
import TarotOverviewLibrary from "../../../public/tarot-app/overview-library.png";
import TarotCardSelection from "../../../public/tarot-app/card-selection.png";
import TarotInterpretation from "../../../public/tarot-app/interpretation.png";
import TarotOverview from "../../../public/tarot-app/overview.png";

import {
  CircleCheckBig,
  ClipboardPenLine,
  FileDown,
  Layers3,
  LayoutGrid,
  LayoutTemplate,
  MessageCircleQuestion,
  Sparkles
} from "lucide-react";

import type { ProjectDefinition } from "./ProjectCaseStudy.types.ts";

export const getArchitectureImage = (language: string): string =>
  language.startsWith("pl") ? CvMakerArchitecturePl : CvMakerArchitectureEn;

export const PROJECTS_BY_SLUG = {
  "tarot-app": {
    id: "tarotApp",
    slug: "tarot-app",
    number: "01",

    thumbnail: "",

    demoUrl: "https://tarot-app-kohl-omega.vercel.app",
    repositoryRequestUrl: "https://github.com/olga-zet",

    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Drizzle ORM",
    ],

    images: {
      hero: {
        desktop: TarotHeroDesktop,
      },

      overview: [
        TarotOverviewSpread,
        TarotOverviewReading,
        TarotOverviewLibrary,
      ],

      process: {
        before: TarotOverview,
        after: TarotInterpretation,
      },

      result: "",
    },

    flow: [
      {
        id: "question",
        number: "01",
        icon: MessageCircleQuestion,
      },
      {
        id: "spread",
        number: "02",
        icon: LayoutGrid,
      },
      {
        id: "cards",
        number: "03",
        icon: Layers3,
      },
      {
        id: "interpretation",
        number: "04",
        icon: Sparkles,
      },
    ],

    features: [
      {
        id: "cardSelection",
        number: "01",
        image: TarotCardSelection,
      },
      {
        id: "aiInterpretation",
        number: "02",
        image: TarotInterpretation,
      },
      {
        id: "celticCross",
        number: "03",
        image: TarotOverviewSpread,
      },
    ],

    technicalDecisions: [
      {
        id: "viewModelMapping",
        icon: "code",
      },
      {
        id: "typedModels",
        icon: "layers",
      },
      {
        id: "apiLayer",
        icon: "database",
      },
      {
        id: "secureAi",
        icon: "lock",
      },
    ],

    stats: [
      {
        id: "cards",
        value: "78",
      },
      {
        id: "spreads",
        value: "3",
      },
      {
        id: "languages",
        value: "2",
      },
      {
        id: "product",
        value: "1",
      },
    ],
  },

  "cv-maker": {
    id: "cvMaker",
    slug: "cv-maker",
    number: "02",

    thumbnail: "/images/projects/cv-maker/thumbnail.webp",

    demoUrl: "https://cv-maker-five-brown.vercel.app/",
    repositoryRequestUrl: "https://github.com/olga-zet",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Styled Components",
      "React Hook Form",
    ],

    images: {
      hero: {
        desktop: CvMakerHero,
      },

      overview: [CvMakerTemplateSelection, CvMakerFormStep, CvMakerFinalCv],

      process: {
        before: CvMakerUserFlow,
        after: CvMakerArchitecturePl,
      },

      result: "/images/projects/cv-maker/process-before.webp",
    },

    flow: [
      {
        id: "template",
        number: "01",
        icon: LayoutTemplate,
      },
      {
        id: "form",
        number: "02",
        icon: ClipboardPenLine,
      },
      {
        id: "validation",
        number: "03",
        icon: CircleCheckBig,
      },
      {
        id: "printPdf",
        number: "04",
        icon: FileDown,
      },
    ],

    features: [
      {
        id: "dynamicTemplateConfiguration",
        number: "01",
        image: CvMakerTemplateSelection,
      },
      {
        id: "multiStepForm",
        number: "02",
        image: CvMakerMultiStepForm,
      },
      {
        id: "responsiveTemplateCarousel",
        number: "03",
        image: CvMakerResponsiveCarousel,
      },
      {
        id: "printReadyCv",
        number: "04",
        image: CvMakerPrintReadyCv,
      },
    ],

    technicalDecisions: [
      {
        id: "schemaDrivenTemplates",
        icon: "layers",
      },
      {
        id: "typedDataModel",
        icon: "code",
      },
      {
        id: "sharedFormContext",
        icon: "form",
      },
      {
        id: "printStyles",
        icon: "layout",
      },
    ],

    stats: [
      {
        id: "templates",
        value: "5",
      },
      {
        id: "steps",
        value: "3",
      },
      {
        id: "dataModel",
        value: "1",
      },
      {
        id: "export",
        value: "PDF",
      },
    ],
  },
} as const satisfies Record<string, ProjectDefinition>;

export type ProjectSlug = keyof typeof PROJECTS_BY_SLUG;

export type ProjectCaseStudyData = (typeof PROJECTS_BY_SLUG)[ProjectSlug];

export const isProjectSlug = (slug: string): slug is ProjectSlug =>
  Object.prototype.hasOwnProperty.call(PROJECTS_BY_SLUG, slug);

export const PROJECTS = Object.values(PROJECTS_BY_SLUG);
