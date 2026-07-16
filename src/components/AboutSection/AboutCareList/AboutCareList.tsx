import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

import { CareItem, CareList } from "../AboutSection.styled";

import { CARE_ICONS } from "./AboutCareList.data";

export const AboutCareList = () => {
  const { t } = useTranslation();

  const careItems = t("about.care.items", {
    returnObjects: true,
  }) as string[];

  return (
    <CareList>
      {careItems.map((item, index) => {
        const Icon = CARE_ICONS[index] ?? Sparkles;

        return (
          <CareItem key={`${item}-${index}`}>
            <Icon size={18} strokeWidth={2.2} aria-hidden="true" />

            <span>{item}</span>
          </CareItem>
        );
      })}
    </CareList>
  );
};
