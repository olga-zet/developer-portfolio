import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Cta,
  CtaArrow,
  Divider,
  HeroContent,
  HeroDescription,
  HeroName,
  HeroRole,
} from "./HeroIntro.styled.ts";

export const HeroIntro = () => {
  const { t } = useTranslation();

  return (
    <HeroContent>
      <HeroName>
        <span>{t("hero.firstName")}</span>
        <span>{t("hero.lastName")}</span>
      </HeroName>

      <HeroRole>
        {t("hero.role")}
        <span>{t("hero.code")}</span>
      </HeroRole>
      <Divider />
      <HeroDescription>{t("hero.description")}</HeroDescription>

      <Cta to="/" hash="projects">
        {t("hero.cta")}

        <CtaArrow>
          <ArrowRight size={22} strokeWidth={2.7} aria-hidden="true" />
        </CtaArrow>
      </Cta>
    </HeroContent>
  );
};
