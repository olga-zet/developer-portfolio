import { ContactFormPanel } from "./ContactFormPanel/ContactFormPanel.tsx";
import { ContactVisual } from "./ContactVisual/ContactVisual.tsx";

import { ContactGrid, Section, SectionInner } from "./ContactSection.styled.ts";

export const ContactSection = () => {
  return (
    <Section id="contact">
      <SectionInner>
        <ContactGrid>
          <ContactVisual />
          <ContactFormPanel />
        </ContactGrid>
      </SectionInner>
    </Section>
  );
};
