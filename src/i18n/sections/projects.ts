export const projects = {
  pl: {
    kicker: "Projects / selected work",

    title: {
      first: "Wybrane",
      second: "projekty",
    },

    intro:
      "Lubię moment, w którym pomysł zaczyna działać naprawdę. Krok po kroku zamieniam go w aplikację — od logiki produktu i struktury kodu po interfejs, który jest intuicyjny, spójny i przyjemny w użyciu.",

    stackTitle: "Tech stack",
    liveDemo: "Zobacz demo",
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
      tarot: {
        number: "01",
        title: "Tarot App",
        type: "Web app",
        description:
          "Cyfrowe doświadczenie inspirowane tarotem, w którym wybór kart, dopracowane rozkłady i interpretacje AI tworzą spójną, intuicyjną całość.",
        tags: ["React", "TypeScript", "Node.js", "i18n", "PostgreSQL"],
        imageAlt: "Podgląd projektu Tarot App",
      },

      cv: {
        number: "02",
        title: "CV Maker",
        type: "Web app",
        description:
          "Aplikacja, która krok po kroku pomaga stworzyć dopracowane CV — z podglądem zmian na żywo, personalizacją wyglądu i gotowym plikiem PDF.",
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
      "What I enjoy most is the moment when an idea starts to truly come to life. Step by step, I turn it into an application — from product logic and code structure to an interface that feels intuitive, cohesive, and enjoyable to use.",

    stackTitle: "Tech stack",
    liveDemo: "Live demo",
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
      tarot: {
        number: "01",
        title: "Tarot App",
        type: "Web app",
        description:
          "A digital experience inspired by tarot, where card selection, thoughtfully designed spreads, and AI-powered interpretations come together in one cohesive and intuitive journey.",
        tags: ["React", "TypeScript", "Node.js", "i18n", "PostgreSQL"],
        imageAlt: "Tarot App project preview",
      },

      cv: {
        number: "02",
        title: "CV Maker",
        type: "Web app",
        description:
          "An application that guides users step by step through creating a polished CV - with live preview, visual customization, and PDF export.",
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
