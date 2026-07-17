// ProjectCaseStudy.data.ts

export type TechnicalDecisionIcon =
  | "layers"
  | "code"
  | "database"
  | "lock"
  | "form"
  | "layout";

type ProjectId = "tarotApp" | "cvMaker";

type ProjectFlowItem = {
  id: string;
  number: string;
};

type ProjectFeature = {
  id: string;
  number: string;
  image: string;
};

type TechnicalDecision = {
  id: string;
  icon: TechnicalDecisionIcon;
};

type ProjectStat = {
  id: string;
  value: string;
};

type ProjectDefinition = {
  id: ProjectId;
  slug: string;
  number: string;

  /**
   * Obraz używany na karcie projektu
   * na stronie głównej portfolio.
   */
  thumbnail: string;

  demoUrl: string;

  /**
   * Może prowadzić np. do sekcji kontaktowej,
   * gdy repozytorium jest prywatne.
   */
  repositoryRequestUrl?: string;

  tags: readonly string[];

  images: {
    hero: {
      desktop: string;
      mobile: string;
    };

    overview: readonly string[];

    process: {
      before: string;
      after: string;
    };

    result?: string;
  };

  flow: readonly ProjectFlowItem[];

  features: readonly ProjectFeature[];

  technicalDecisions: readonly TechnicalDecision[];

  stats: readonly ProjectStat[];
};

export const PROJECTS_BY_SLUG = {
  "tarot-app": {
    id: "tarotApp",
    slug: "tarot-app",
    number: "01",

    thumbnail: "/images/projects/tarot-app/thumbnail.webp",

    demoUrl: "https://your-tarot-app-demo.com",
    repositoryRequestUrl: "/#contact",

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
        desktop: "/images/projects/tarot-app/hero-desktop.webp",
        mobile: "/images/projects/tarot-app/hero-mobile.webp",
      },

      overview: [
        "/images/projects/tarot-app/overview-spread.webp",
        "/images/projects/tarot-app/overview-reading.webp",
        "/images/projects/tarot-app/overview-library.webp",
      ],

      process: {
        before: "/images/projects/tarot-app/process-before.webp",
        after: "/images/projects/tarot-app/process-after.webp",
      },

      result: "/images/projects/tarot-app/result-decoration.webp",
    },

    flow: [
      {
        id: "question",
        number: "01",
      },
      {
        id: "spread",
        number: "02",
      },
      {
        id: "cards",
        number: "03",
      },
      {
        id: "interpretation",
        number: "04",
      },
    ],

    features: [
      {
        id: "cardSelection",
        number: "01",
        image: "/images/projects/tarot-app/card-selection.webp",
      },
      {
        id: "aiInterpretation",
        number: "02",
        image: "/images/projects/tarot-app/interpretation.webp",
      },
      {
        id: "celticCross",
        number: "03",
        image: "/images/projects/tarot-app/celtic-cross.webp",
      },
    ],

    technicalDecisions: [
      {
        id: "configDrivenSpreads",
        icon: "layers",
      },
      {
        id: "typedModels",
        icon: "code",
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

    demoUrl: "https://your-cv-maker-demo.com",
    repositoryRequestUrl: "/#contact",

    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Styled Components",
      "React Hook Form",
    ],

    images: {
      hero: {
        desktop: "/images/projects/cv-maker/hero-desktop.webp",
        mobile: "/images/projects/cv-maker/hero-mobile.webp",
      },

      overview: [
        "/images/projects/cv-maker/overview-editor.webp",
        "/images/projects/cv-maker/overview-preview.webp",
        "/images/projects/cv-maker/overview-templates.webp",
      ],

      process: {
        before: "/images/projects/cv-maker/process-before.webp",
        after: "/images/projects/cv-maker/process-after.webp",
      },

      result: "/images/projects/cv-maker/result-decoration.webp",
    },

    flow: [
      {
        id: "template",
        number: "01",
      },
      {
        id: "details",
        number: "02",
      },
      {
        id: "customize",
        number: "03",
      },
      {
        id: "export",
        number: "04",
      },
    ],

    features: [
      {
        id: "guidedEditor",
        number: "01",
        image: "/images/projects/cv-maker/guided-editor.webp",
      },
      {
        id: "livePreview",
        number: "02",
        image: "/images/projects/cv-maker/live-preview.webp",
      },
      {
        id: "customizationAndExport",
        number: "03",
        image: "/images/projects/cv-maker/customization-export.webp",
      },
    ],

    technicalDecisions: [
      {
        id: "sharedDataModel",
        icon: "database",
      },
      {
        id: "stepBasedForm",
        icon: "form",
      },
      {
        id: "reusableTemplates",
        icon: "layers",
      },
      {
        id: "responsiveInterface",
        icon: "layout",
      },
    ],

    stats: [
      {
        id: "steps",
        value: "3",
      },
      {
        id: "templates",
        value: "3",
      },
      {
        id: "preview",
        value: "Live",
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

/**
 * Przydatne na stronie głównej,
 * gdy chcesz mapować wszystkie projekty.
 */
export const PROJECTS = Object.values(PROJECTS_BY_SLUG);
