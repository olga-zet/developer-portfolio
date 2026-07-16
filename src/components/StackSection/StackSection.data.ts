import type { LucideIcon } from "lucide-react";
import {
  Braces,
  Brush,
  Database,
  Gem,
  GitBranch,
  Layers3,
  Rocket,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type StackGroupId =
  | "frontend"
  | "styling"
  | "stateData"
  | "testing"
  | "backend";

export type ApproachId = "structure" | "logic" | "quality" | "detail";

export type StackGroup = {
  id: StackGroupId;
  number: string;
  icon: LucideIcon;
  items: string[];
  level: number;
};

export type ApproachItem = {
  id: ApproachId;
  number: string;
  icon: LucideIcon;
};

export const STACK_GROUPS: StackGroup[] = [
  {
    id: "frontend",
    number: "01",
    icon: Braces,
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    level: 5,
  },
  {
    id: "styling",
    number: "02",
    icon: Brush,
    items: ["styled-components", "Responsive Design", "GSAP"],
    level: 4,
  },
  {
    id: "stateData",
    number: "03",
    icon: Database,
    items: [
      "Redux",
      "TanStack Query",
      "Axios",
      "React Context",
      "React Hook Form",
    ],
    level: 4,
  },
  {
    id: "testing",
    number: "04",
    icon: ShieldCheck,
    items: ["Cypress", "Protractor", "Cucumber", "Jest", "Postman"],
    level: 5,
  },
  {
    id: "backend",
    number: "05",
    icon: Server,
    items: ["Node.js", "Express", "REST API", "PostgreSQL", "Drizzle ORM"],
    level: 2,
  },
];

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    id: "structure",
    number: "01",
    icon: Layers3,
  },
  {
    id: "logic",
    number: "02",
    icon: GitBranch,
  },
  {
    id: "quality",
    number: "03",
    icon: Rocket,
  },
  {
    id: "detail",
    number: "04",
    icon: Gem,
  },
];

export const METER_SEGMENTS = 6;

export const DECORATIVE_ICON = Wrench;
