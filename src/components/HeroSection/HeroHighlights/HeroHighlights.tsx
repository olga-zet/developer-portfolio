import { useTranslation } from "react-i18next";

import { HERO_HIGHLIGHTS } from "./HeroHighlights.data";

import {
  HighlightContent,
  HighlightDescription,
  HighlightIcon,
  HighlightItem,
  HighlightNumber,
  HighlightsList,
  HighlightTitle,
} from "./HeroHighlights.styled";

export const HeroHighlights = () => {
  const { t } = useTranslation();

  return (
    <HighlightsList aria-label={t("hero.highlights.ariaLabel")}>
      {HERO_HIGHLIGHTS.map((item) => {
        const Icon = item.icon;

        return (
          <HighlightItem key={item.id}>
            <HighlightNumber aria-hidden="true">{item.number}</HighlightNumber>

            <HighlightIcon aria-hidden="true">
              <Icon size={19} strokeWidth={1.7} />
            </HighlightIcon>

            <HighlightContent>
              <HighlightTitle>
                {t(`hero.highlights.items.${item.id}.title`)}
              </HighlightTitle>

              <HighlightDescription>
                {t(`hero.highlights.items.${item.id}.description`)}
              </HighlightDescription>
            </HighlightContent>
          </HighlightItem>
        );
      })}
    </HighlightsList>
  );
};
