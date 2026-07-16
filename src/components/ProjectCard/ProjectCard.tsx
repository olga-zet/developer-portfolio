import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { ProjectItem } from "../ProjectSection/ProjectSection.data.ts";
import {
  ActionButton,
  ImageFrame,
  ProjectArticle,
  ProjectContent,
  ProjectHeader,
  ProjectImage,
  ProjectMeta,
  ProjectNumber,
  ProjectTags,
  ProjectTitle,
  Tag,
  Type,
} from "./ProjectCard.styled.ts";
import { Description } from "../ProjectSection/ProjectSection.styled.ts";

type ProjectCardProps = {
  projects: ProjectItem[];
};

export const ProjectCard = ({ projects }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <>
      {projects.map((project) => (
        <ProjectArticle key={project.id}>
          <ProjectMeta>
            <ProjectNumber>
              {t(`projects.items.${project.id}.number`)}
            </ProjectNumber>
          </ProjectMeta>

          <ProjectContent>
            <ProjectHeader>
              <div>
                <ProjectTitle>
                  {t(`projects.items.${project.id}.title`)}
                </ProjectTitle>

                <Type>{t(`projects.items.${project.id}.type`)}</Type>
              </div>

              <Description>
                {t(`projects.items.${project.id}.description`)}
              </Description>
            </ProjectHeader>

            <ProjectTags>
              {project.tags.map((tag) => (
                <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
              ))}
            </ProjectTags>
          </ProjectContent>

          <ImageFrame>
            <ProjectImage
              src={project.image}
              alt={t(`projects.items.${project.id}.imageAlt`)}
            />
          </ImageFrame>

          <ActionButton to={project.href} aria-label={t("projects.caseStudy")}>
            <ArrowRight size={24} aria-hidden="true" />
          </ActionButton>
        </ProjectArticle>
      ))}
    </>
  );
};
