import { useTranslation } from "react-i18next";

import aboutImageDark from "../../../assets/about/about-dark.png";
import aboutImageLight from "../../../assets/about/about-light.png";
import { useThemeImage } from "../../../hooks/useThemeImage";

import {
  AboutImage,
  AboutImageFrame,
  AboutImageLabel,
  ImageBadge,
} from "../AboutSection.styled";

export const AboutVisual = () => {
  const { t } = useTranslation();

  const image = useThemeImage(aboutImageLight, aboutImageDark);

  return (
    <AboutImageFrame>
      <ImageBadge>{t("about.imageBadge")}</ImageBadge>

      <AboutImage src={image} alt={t("about.imageAlt")} />

      <AboutImageLabel $side="left">
        {t("about.imageLabelLeft")}
      </AboutImageLabel>

      <AboutImageLabel $side="right">
        {t("about.imageLabelRight")}
      </AboutImageLabel>
    </AboutImageFrame>
  );
};
