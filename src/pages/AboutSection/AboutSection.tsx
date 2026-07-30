import { useTranslation } from "react-i18next";

import { AboutCareList } from "./AboutCareList/AboutCareList.tsx";
import { AboutTextSection } from "./AboutTextSection/AboutTextSection.tsx";
import { AboutVisual } from "./AboutVisual/AboutVisual.tsx";

import {
  About,
  AboutContent,
  AboutGrid,
  AboutIntro,
  AboutKicker,
  AboutTextBlock,
  SectionTitle,
  TextLead,
  TextParagraph,
} from "./AboutSection.styled.ts";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <About id="about">
      <AboutGrid>
        <AboutIntro>
          <AboutKicker>{t("about.kicker")}</AboutKicker>

          <SectionTitle>
            <span>{t("about.title.first")}</span>
            <span>{t("about.title.second")}</span>
          </SectionTitle>

          <AboutTextBlock>
            <TextLead>{t("about.intro")}</TextLead>

            <TextParagraph>{t("about.shortText")}</TextParagraph>
          </AboutTextBlock>
        </AboutIntro>

        <AboutVisual />

        <AboutContent>
          <AboutTextSection title={t("about.who.title")}>
            <TextParagraph>{t("about.who.text")}</TextParagraph>
          </AboutTextSection>

          <AboutTextSection title={t("about.journey.title")}>
            <TextParagraph>{t("about.journey.textOne")}</TextParagraph>

            <TextParagraph>{t("about.journey.textTwo")}</TextParagraph>
          </AboutTextSection>

          <AboutTextSection title={t("about.care.title")}>
            <AboutCareList />
          </AboutTextSection>
        </AboutContent>
      </AboutGrid>
    </About>
  );
};
