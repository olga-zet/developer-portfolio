import { PageSection } from "./HomePage.styled.ts";
import { HeroSection } from "../HeroSection/HeroSection.tsx";
import { AboutSection } from "../AboutSection/AboutSection.tsx";
import { ProjectsSection } from "../ProjectSection/ProjectSection.tsx";
import { ExperienceSection } from "../ExperienceSection/ExperienceSection.tsx";
import { StackSection } from "../StackSection/StackSection.tsx";
import { ContactSection } from "../ContactSection/ContactSection.tsx";

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
