import { useTranslation } from "react-i18next";

import { ProjectCard } from "../ProjectCard/ProjectCard";
import { PROJECTS } from "./ProjectSection.data";

import {
  Content,
  Description,
  Eyebrow,
  Header,
  Intro,
  ProjectList,
  Section,
  StackItem,
  StackList,
  StackTitle,
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
        </Intro>

        <ProjectList>
          <ProjectCard projects={PROJECTS} />
        </ProjectList>
      </Content>
    </Section>
  );
};
