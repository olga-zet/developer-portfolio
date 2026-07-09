import { PageSection } from "./HomePage.styled.ts";
import { HeroSection } from "../../components/HeroSection/HeroSection.tsx";
import { AboutSection } from "../../components/AboutSection/AboutSection.tsx";
import { ProjectsSection } from "../../components/ProjectSection/ProjectSection.tsx";

export const HomePage = () => {
  return (
    <>
      <PageSection id="home">
        <HeroSection />
      </PageSection>

      <PageSection id="about">
        <AboutSection />
      </PageSection>

      <PageSection id="projects">
        <ProjectsSection />
      </PageSection>

      <PageSection id="experience">Experience</PageSection>

      <PageSection id="stack">Stack</PageSection>

      <PageSection id="contact">Contact</PageSection>
    </>
  );
};
