import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { AccentPanel, AccentText } from "./HeroScrollCue.styled.ts";


export const HeroScrollCue = () => {
  const { t } = useTranslation();

  return (
    <AccentPanel>
      <AccentText>
        {t("hero.scroll")}

        <ArrowRight size={19} strokeWidth={2.6} aria-hidden="true" />
      </AccentText>
    </AccentPanel>
  );
};
