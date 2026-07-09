import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { PROJECTS } from "./ProjectSection.data";

import {
  ActionButton,
  Content,
  Description,
  Eyebrow,
  Header,
  ImageFrame,
  Intro,
  ProjectArticle,
  ProjectContent,
  ProjectHeader,
  ProjectImage,
  ProjectList,
  ProjectMeta,
  ProjectNumber,
  ProjectTags,
  ProjectTitle,
  Section,
  SocialLinks,
  StackItem,
  StackList,
  StackTitle,
  Tag,
  Type,
} from "./ProjectSection.styled";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const techStack = t("projects.stack", {
    returnObjects: true,
  }) as string[];

  return (
    <Section id="projects">
      <Content>
        <Intro>
          <Eyebrow>{t("projects.kicker")}</Eyebrow>

          <Header>
            {t("projects.title.first")}
            <br />
            {t("projects.title.second")}
          </Header>

          <Description>{t("projects.intro")}</Description>

          <StackTitle>{t("projects.stackTitle")}</StackTitle>

          <StackList>
            {techStack.map((item) => (
              <StackItem key={item}>{item}</StackItem>
            ))}
          </StackList>

          <SocialLinks aria-label="Social links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              {/*<Github size={22} />*/}
            </a>

            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </SocialLinks>
        </Intro>

        <ProjectList>
          {PROJECTS.map((project) => (
            <ProjectArticle key={project.id}>
              <ProjectMeta>
                <span>{t(`projects.items.${project.id}.number`)}</span>

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

              <ActionButton
                to={project.href}
                aria-label={t("projects.caseStudy")}
              >
                <ArrowRight size={24} />
              </ActionButton>
            </ProjectArticle>
          ))}
        </ProjectList>
      </Content>
    </Section>
  );
};
