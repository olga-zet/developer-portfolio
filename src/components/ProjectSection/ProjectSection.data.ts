export type ProjectId = "luna" | "cv" | "code4all" | "dashboard";

export type ProjectItem = {
  id: ProjectId;
  number: string;
  image: string;
  tags: string[];
  href: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "luna",
    number: "01",
    image: "",
    tags: ["React", "TypeScript", "Styled Components", "i18n"],
    href: "/projects/luna-tarot",
  },
  {
    id: "cv",
    number: "02",
    image: "",
    tags: ["React", "TypeScript", "Styled Components", "PDF"],
    href: "/projects/cv-maker",
  },
  {
    id: "code4all",
    number: "03",
    image: "",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    href: "/projects/code4all",
  },
  {
    id: "dashboard",
    number: "04",
    image: "",
    tags: ["React", "TypeScript", "TanStack Query", "Node.js"],
    href: "/projects/dashboard",
  },
];

export const TECH_STACK = [
  "React",
  "TypeScript",
  "Styled Components",
  "TanStack Query",
  "Node.js",
  "Drizzle ORM",
  "PostgreSQL",
  "i18n",
];
