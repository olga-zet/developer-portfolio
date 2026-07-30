// ProjectCaseStudyRoute.tsx

import { getRouteApi } from "@tanstack/react-router";

import { ProjectCaseStudy } from "./ProjectCaseStudy.tsx";

const routeApi = getRouteApi("/projects/$projectSlug");

export const ProjectCaseStudyRoute = () => {
  const project = routeApi.useLoaderData();

  return <ProjectCaseStudy project={project} />;
};
