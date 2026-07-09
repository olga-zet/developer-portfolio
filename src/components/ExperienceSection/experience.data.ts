export type ExperienceItem = {
  id: "years" | "qa" | "frontend" | "ux";
  progress: number;
  markerAngle: number;
  variant: "classic" | "ticks" | "soft";
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "years",
    progress: 74,
    markerAngle: 4,
    variant: "classic",
  },
  {
    id: "qa",
    progress: 82,
    markerAngle: 32,
    variant: "soft",
  },
  {
    id: "frontend",
    progress: 68,
    markerAngle: 142,
    variant: "ticks",
  },
  {
    id: "ux",
    progress: 76,
    markerAngle: -28,
    variant: "classic",
  },
];
