import type { TFunction } from "i18next";

import { type ProjectCaseStudyData, PROJECTS } from "./ProjectCaseStudy.data";

export type ProjectNavigationItem = {
  href: string;
  label: string;
  title: string;
};

type ProjectNavigation = {
  previous: ProjectNavigationItem;
  next: ProjectNavigationItem;
};

const getProjectTitle = (
  project: ProjectCaseStudyData,
  t: TFunction,
): string => {
  const titleKey = `caseStudies.items.${project.id}.hero.title`;

  return `${t(`${titleKey}.first`)} ${t(`${titleKey}.second`)}`;
};

const getFallbackNavigation = (t: TFunction): ProjectNavigationItem => ({
  href: "/#projects",
  label: t("caseStudies.navigation.backTo"),
  title: t("caseStudies.navigation.allProjects"),
});

const getProjectNavigationItem = (
  project: ProjectCaseStudyData | undefined,
  label: string,
  t: TFunction,
): ProjectNavigationItem => {
  if (!project) {
    return getFallbackNavigation(t);
  }

  return {
    href: `/projects/${project.slug}`,
    label,
    title: getProjectTitle(project, t),
  };
};

export const getProjectNavigation = (
  currentProject: ProjectCaseStudyData,
  t: TFunction,
): ProjectNavigation => {
  const currentProjectIndex = PROJECTS.findIndex(
    ({ slug }) => slug === currentProject.slug,
  );

  const previousProject =
    currentProjectIndex > 0 ? PROJECTS[currentProjectIndex - 1] : undefined;

  const nextProject =
    currentProjectIndex >= 0 && currentProjectIndex < PROJECTS.length - 1
      ? PROJECTS[currentProjectIndex + 1]
      : undefined;

  return {
    previous: getProjectNavigationItem(
      previousProject,
      t("caseStudies.navigation.previous"),
      t,
    ),
    next: getProjectNavigationItem(
      nextProject,
      t("caseStudies.navigation.next"),
      t,
    ),
  };
};
