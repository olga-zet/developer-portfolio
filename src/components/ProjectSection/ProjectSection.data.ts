export type ProjectId = "tarot" | "cv" | "code4all" | "dashboard";
import TarotApp from "../../assets/projects/tarotApp.png";

export type ProjectItem = {
  id: ProjectId;
  number: string;
  image: string;
  tags: string[];
  href: string;
  demoUrl: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "cv",
    number: "02",
    image: "",
    tags: ["React", "TypeScript", "Styled Components", "PDF"],
    href: "/projects/cv-maker",
    demoUrl: "https://cv-maker-five-brown.vercel.app",
  },
  {
    id: "tarot",
    number: "01",
    image: TarotApp,
    tags: ["React", "TypeScript", "Node.js", "i18n", "PostgreSQL"],
    href: "/projects/tarot-app",
    demoUrl: "https://cv-maker-five-brown.vercel.app",
  },
];
