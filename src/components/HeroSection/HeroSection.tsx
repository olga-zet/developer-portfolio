import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import heroImage from "../../assets/hero3.png";
import {
  AccentPanel,
  AccentText,
  Cta,
  CtaArrow,
  Divider,
  Hero,
  HeroContent,
  HeroDescription,
  HeroGrid,
  HeroImage,
  HeroImageFrame,
  HeroName,
  HeroRole,
} from "./HeroSection.styled.ts";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Hero id="home">
      <HeroGrid>
        <HeroContent>
          <HeroName>
            <span>{t("hero.firstName")}</span>
            <span>{t("hero.lastName")}</span>
          </HeroName>

          <HeroRole>
            {t("hero.role")} <span>{t("hero.code")}</span>
          </HeroRole>

          <Divider />

          <HeroDescription>{t("hero.description")}</HeroDescription>

          <Cta to="/" hash="projects">
            {t("hero.cta")}
            <CtaArrow>
              <ArrowRight size={22} strokeWidth={2.7} />
            </CtaArrow>
          </Cta>
        </HeroContent>

        <HeroImageFrame>
          <HeroImage src={heroImage} alt={t("hero.imageAlt")} />
        </HeroImageFrame>
      </HeroGrid>

      <AccentPanel>
        <AccentText>
          {t("hero.scroll")}
          <ArrowRight size={20} strokeWidth={2.6} />
        </AccentText>
      </AccentPanel>
    </Hero>
  );
};
