import { useTranslation } from "react-i18next";

import heroImage from "../../assets/hero3.png";
import { useThemeImage } from "../../hooks/useThemeImage";

import { HeroHighlights } from "./HeroHighlights/HeroHighlights";
import { HeroIntro } from "./HeroIntro/HeroIntro";
import { HeroScrollCue } from "./HeroScrollCue/HeroScrollCue";

import {
  Hero,
  HeroGrid,
  HeroImage,
  HeroImageFrame,
} from "./HeroSection.styled";

export const HeroSection = () => {
  const { t } = useTranslation();

  const image = useThemeImage(heroImage, heroImage);

  return (
    <Hero id="home">
      <HeroGrid>
        <HeroIntro />

        <HeroImageFrame>
          <HeroImage src={image} alt={t("hero.imageAlt")} />
        </HeroImageFrame>
      </HeroGrid>

      <HeroHighlights />

      <HeroScrollCue />
    </Hero>
  );
};
