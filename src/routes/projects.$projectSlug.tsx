import { createFileRoute, notFound } from "@tanstack/react-router";

import { isProjectSlug, PROJECTS_BY_SLUG } from "../components/ProjectsShowcasePage/ProjectCaseStudy.data.ts";
import { ProjectCaseStudyRoute } from "../components/ProjectsShowcasePage/ProjectCaseStudyRoute.route.tsx";

export const Route = createFileRoute("/projects/$projectSlug")({
  loader: ({ params }) => {
    const { projectSlug } = params;

    if (!isProjectSlug(projectSlug)) {
      throw notFound();
    }

    return PROJECTS_BY_SLUG[projectSlug];
  },

  component: ProjectCaseStudyRoute,
});
