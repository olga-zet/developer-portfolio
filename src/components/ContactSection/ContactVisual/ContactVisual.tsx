import { useTranslation } from "react-i18next";

import contactImage from "../../../assets/contact/contact.png";

import {
  ImageStage,
  Lead,
  Title,
  Visual,
  VisualHeader,
  VisualImage,
} from "../ContactSection.styled";

export const ContactVisual = () => {
  const { t } = useTranslation();

  return (
    <Visual>
      <VisualHeader>
        <Title>
          <span>{t("contact.title.first")}</span>
          <strong>{t("contact.title.second")}</strong>
        </Title>

        <Lead>{t("contact.intro")}</Lead>
      </VisualHeader>

      <ImageStage>
        <VisualImage src={contactImage} alt={t("contact.imageAlt")} />
      </ImageStage>
    </Visual>
  );
};
