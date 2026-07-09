export const projects = {
  pl: {
    kicker: "Projects / selected work",

    title: {
      first: "Selected",
      second: "projects",
    },

    intro:
      "Aplikacje frontendowe budowane w React, TypeScript i z dbałością o logikę produktu oraz detal.",

    stackTitle: "Tech stack",

    caseStudy: "View case study",
    privateRepo: "Private repository",

    stack: [
      "React",
      "TypeScript",
      "Styled Components",
      "TanStack Query",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "i18n",
    ],

    items: {
      luna: {
        number: "01",
        title: "Luna Tarot",
        type: "Web app",
        description:
          "Nowoczesna aplikacja tarotowa z intuicyjnymi rozkładami, historią odczytów i interpretacjami AI.",
        tags: ["React", "TypeScript", "Styled Components", "i18n"],
        imageAlt: "Podgląd projektu Luna Tarot",
      },

      cv: {
        number: "02",
        title: "CV Maker",
        type: "Web app",
        description:
          "Generator CV z live preview, personalizacją wyglądu i eksportem do PDF.",
        tags: ["React", "TypeScript", "Styled Components", "PDF"],
        imageAlt: "Podgląd projektu CV Maker",
      },

      code4all: {
        number: "03",
        title: "Code4All",
        type: "Education platform",
        description:
          "Platforma edukacyjna ucząca podstaw programowania przez proste ścieżki, zadania i praktykę.",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        imageAlt: "Podgląd projektu Code4All",
      },

      dashboard: {
        number: "04",
        title: "Dashboard / Admin Panel",
        type: "Fullstack",
        description:
          "Panel administracyjny z analityką, zarządzaniem użytkownikami i monitoringiem systemu.",
        tags: ["React", "TypeScript", "TanStack Query", "Node.js"],
        imageAlt: "Podgląd projektu dashboard",
      },
    },
  },

  en: {
    kicker: "Projects / selected work",

    title: {
      first: "Selected",
      second: "projects",
    },

    intro:
      "Frontend applications built with React, TypeScript and attention to product logic and detail.",

    stackTitle: "Tech stack",

    caseStudy: "View case study",
    privateRepo: "Private repository",

    stack: [
      "React",
      "TypeScript",
      "Styled Components",
      "TanStack Query",
      "Node.js",
      "Drizzle ORM",
      "PostgreSQL",
      "i18n",
    ],

    items: {
      luna: {
        number: "01",
        title: "Luna Tarot",
        type: "Web app",
        description:
          "A modern tarot reading app with intuitive spreads, reading history and AI-powered interpretations.",
        tags: ["React", "TypeScript", "Styled Components", "i18n"],
        imageAlt: "Luna Tarot project preview",
      },

      cv: {
        number: "02",
        title: "CV Maker",
        type: "Web app",
        description:
          "A CV builder with live preview, visual customization and PDF export.",
        tags: ["React", "TypeScript", "Styled Components", "PDF"],
        imageAlt: "CV Maker project preview",
      },

      code4all: {
        number: "03",
        title: "Code4All",
        type: "Education platform",
        description:
          "An educational platform for learning coding fundamentals through simple paths, tasks and practice.",
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        imageAlt: "Code4All project preview",
      },

      dashboard: {
        number: "04",
        title: "Dashboard / Admin Panel",
        type: "Fullstack",
        description:
          "Admin dashboard with analytics, user management and system monitoring.",
        tags: ["React", "TypeScript", "TanStack Query", "Node.js"],
        imageAlt: "Dashboard project preview",
      },
    },
  },
} as const;
