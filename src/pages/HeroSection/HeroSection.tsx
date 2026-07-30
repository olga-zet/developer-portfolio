import { useTranslation } from "react-i18next";

import { HeroHighlights } from "./HeroHighlights/HeroHighlights.tsx";
import { HeroIntro } from "./HeroIntro/HeroIntro.tsx";
import { HeroScrollCue } from "./HeroScrollCue/HeroScrollCue.tsx";
import Image from "../../assets/hero.png";

import {
  Hero,
  HeroGrid,
  HeroImage,
  HeroImageFrame,
} from "./HeroSection.styled.ts";

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
