import type { LucideIcon } from "lucide-react";
import { Briefcase, Bug, Code2, Layers3 } from "lucide-react";

export type HeroHighlightId =
  | "background"
  | "stack"
  | "approach"
  | "availability";

export type HeroHighlight = {
  id: HeroHighlightId;
  number: string;
  icon: LucideIcon;
};

export const HERO_HIGHLIGHTS = [
  {
    id: "background",
    number: "01",
    icon: Bug,
  },
  {
    id: "stack",
    number: "02",
    icon: Code2,
  },
  {
    id: "approach",
    number: "03",
    icon: Layers3,
  },
  {
    id: "availability",
    number: "04",
    icon: Briefcase,
  },
] satisfies readonly HeroHighlight[];
