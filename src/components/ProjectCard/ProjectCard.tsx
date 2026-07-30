import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { ProjectItem } from "../../pages/ProjectSection/ProjectSection.data.ts";
import { Description } from "../../pages/ProjectSection/ProjectSection.styled.ts";

import {
  ActionButton,
  DemoLink,
  ImageFrame,
  ProjectActions,
  ProjectArticle,
  ProjectContent,
  ProjectFooter,
  ProjectHeader,
  ProjectImage,
  ProjectMeta,
  ProjectNumber,
  ProjectTags,
  ProjectTitle,
  Tag,
  Type,
} from "./ProjectCard.styled.ts";

type ProjectCardProps = {
  projects: ProjectItem[];
};

export const ProjectCard = ({ projects }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <>
      {projects.map((project) => {
        const title = t(`projects.items.${project.id}.title`);

        return (
          <ProjectArticle key={project.id}>
            <ProjectMeta>
              <ProjectNumber>
                {t(`projects.items.${project.id}.number`)}
              </ProjectNumber>
            </ProjectMeta>

            <ProjectContent>
              <ProjectHeader>
                <div>
                  <ProjectTitle>{title}</ProjectTitle>

                  <Type>{t(`projects.items.${project.id}.type`)}</Type>
                </div>

                <Description>
                  {t(`projects.items.${project.id}.description`)}
                </Description>
              </ProjectHeader>

              <ProjectFooter>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
                  ))}
                </ProjectTags>

                <ProjectActions>
                  {project.demoUrl && (
                    <DemoLink
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t("projects.liveDemo")}: ${title}`}
                    >
                      <span>{t("projects.liveDemo")}</span>

                      <ExternalLink size={15} aria-hidden="true" />
                    </DemoLink>
                  )}

                  <ActionButton
                    to={project.href}
                    aria-label={`${t("projects.caseStudy")}: ${title}`}
                  >
                    <span>{t("projects.caseStudy")}</span>

                    <ArrowRight size={17} aria-hidden="true" />
                  </ActionButton>
                </ProjectActions>
              </ProjectFooter>
            </ProjectContent>

            <ImageFrame>
              <ProjectImage
                src={project.image}
                alt={t(`projects.items.${project.id}.imageAlt`)}
              />
            </ImageFrame>
          </ProjectArticle>
        );
      })}
    </>
  );
};
