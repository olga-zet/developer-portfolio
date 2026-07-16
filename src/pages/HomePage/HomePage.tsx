import { PageSection } from "./HomePage.styled.ts";
import { HeroSection } from "../../components/HeroSection/HeroSection.tsx";
import { AboutSection } from "../../components/AboutSection/AboutSection.tsx";
import { ProjectsSection } from "../../components/ProjectSection/ProjectSection.tsx";
import { ExperienceSection } from "../../components/ExperienceSection/ExperienceSection.tsx";
import { StackSection } from "../../components/StackSection/StackSection.tsx";
import { ContactSection } from "../../components/ContactSection/ContactSection.tsx";

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

      <PageSection id="experience">
        <ExperienceSection />
      </PageSection>

      <PageSection id="stack">
        <StackSection />
      </PageSection>

      <PageSection id="contact">
        <ContactSection />
      </PageSection>
    </>
  );
};
