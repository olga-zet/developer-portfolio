import { useTranslation } from "react-i18next";

import { HeroHighlights } from "./HeroHighlights/HeroHighlights";
import { HeroIntro } from "./HeroIntro/HeroIntro";
import { HeroScrollCue } from "./HeroScrollCue/HeroScrollCue";
import Image from "../../assets/hero.png";

import {
  Hero,
  HeroGrid,
  HeroImage,
  HeroImageFrame,
} from "./HeroSection.styled";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Hero id="home">
      <HeroGrid>
        <HeroIntro />

        <HeroImageFrame>
          <HeroImage src={Image} alt={t("hero.imageAlt")} />
        </HeroImageFrame>
      </HeroGrid>

      <HeroHighlights />

      <HeroScrollCue />
    </Hero>
  );
};
