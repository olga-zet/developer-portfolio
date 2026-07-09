import { Code2, HeartHandshake, Layers3, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import aboutImage from "../../assets/about/about-dark.png";
import {
  About,
  AboutContent,
  AboutGrid,
  AboutImage,
  AboutImageFrame,
  AboutImageLabel,
  AboutIntro,
  AboutKicker,
  AboutTextBlock,
  CareItem,
  CareList,
  ContentLine,
  ImageBadge,
  SectionHeader,
  SectionTitle,
  TextColumn,
  TextLead,
  TextParagraph
} from "./AboutSection.styled.ts";

const careIcons = [Code2, Layers3, Sparkles, HeartHandshake] as const;

export const AboutSection = () => {
  const { t } = useTranslation();

  const careItems = t("about.care.items", {
    returnObjects: true,
  }) as string[];

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

        <AboutImageFrame>
          <ImageBadge>{t("about.imageBadge")}</ImageBadge>

          <AboutImage src={aboutImage} alt={t("about.imageAlt")} />

          <AboutImageLabel $side="left">
            {t("about.imageLabelLeft")}
          </AboutImageLabel>

          <AboutImageLabel $side="right">
            {t("about.imageLabelRight")}
          </AboutImageLabel>
        </AboutImageFrame>

        <AboutContent>
          <TextColumn>
            <SectionHeader>
              <span>{t("about.who.title")}</span>
              <ContentLine />
            </SectionHeader>

            <TextParagraph>{t("about.who.text")}</TextParagraph>
          </TextColumn>

          <TextColumn>
            <SectionHeader>
              <span>{t("about.journey.title")}</span>
              <ContentLine />
            </SectionHeader>

            <TextParagraph>{t("about.journey.textOne")}</TextParagraph>
            <TextParagraph>{t("about.journey.textTwo")}</TextParagraph>
          </TextColumn>

          <TextColumn>
            <SectionHeader>
              <span>{t("about.care.title")}</span>
              <ContentLine />
            </SectionHeader>

            <CareList>
              {careItems.map((item, index) => {
                const Icon = careIcons[index] ?? Sparkles;

                return (
                  <CareItem key={item}>
                    <Icon size={18} strokeWidth={2.2} />
                    <span>{item}</span>
                  </CareItem>
                );
              })}
            </CareList>
          </TextColumn>
        </AboutContent>
      </AboutGrid>
    </About>
  );
};
