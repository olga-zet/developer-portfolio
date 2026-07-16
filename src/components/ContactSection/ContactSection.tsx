import { ContactFormPanel } from "./ContactFormPanel/ContactFormPanel";
import { ContactVisual } from "./ContactVisual/ContactVisual";

import { ContactGrid, Section, SectionInner } from "./ContactSection.styled";

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
