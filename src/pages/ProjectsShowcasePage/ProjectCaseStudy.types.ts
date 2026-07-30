import { Code2, Database, Layers3, LayoutTemplate, ListChecks, LockKeyhole, type LucideIcon } from "lucide-react";
import type { ProjectCaseStudyData } from "./ProjectCaseStudy.data.ts";

export const HERO_META_KEYS = ["role", "year", "type"] as const;

export type LocalizedImage = {
  pl: string;
  en: string;
};

export type ProjectCaseStudyProps = {
  project: ProjectCaseStudyData;
};

export const TECHNICAL_DECISION_ICONS: Record<
  TechnicalDecisionIcon,
  LucideIcon
> = {
  layers: Layers3,
  code: Code2,
  database: Database,
  lock: LockKeyhole,
  form: ListChecks,
  layout: LayoutTemplate,
};

export type TechnicalDecisionIcon =
  | "layers"
  | "code"
  | "database"
  | "lock"
  | "form"
  | "layout";

export type ProjectId = "tarotApp" | "cvMaker";

export type ProjectFlowItem = {
  id: string;
  number: string;
  icon: LucideIcon;
};

export type ProjectFeature = {
  id: string;
  number: string;
  image: string;
};

export type TechnicalDecision = {
  id: string;
  icon: TechnicalDecisionIcon;
};

export type ProjectStat = {
  id: string;
  value: string;
};

export type ProjectDefinition = {
  id: ProjectId;
  slug: string;
  number: string;
  thumbnail: string;
  demoUrl: string;
  repositoryRequestUrl?: string;
  tags: readonly string[];

  images: {
    hero: {
      desktop: string;
    };

    overview: readonly string[];

    process: {
      before: string;
      after: string;
    };

    result?: string | LocalizedImage;
  };

  flow: readonly ProjectFlowItem[];
  features: readonly ProjectFeature[];
  technicalDecisions: readonly TechnicalDecision[];
  stats: readonly ProjectStat[];
};
