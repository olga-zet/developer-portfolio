import { useTranslation } from "react-i18next";

import { EXPERIENCE_ITEMS } from "./experience.data";
import * as S from "./ExperienceSection.styled";

const splitTitle = (title: string) => {
  if (title === "QA / Tester") {
    return ["QA /", "Tester"];
  }

  if (title === "UX / Accessibility") {
    return ["UX /", "Accessibility"];
  }

  return [title];
};

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <S.Section id="experience">
      <S.Intro>
        <S.Eyebrow>{t("experience.eyebrow")}</S.Eyebrow>

        <S.Title>
          {t("experience.titleOne")}
          <br />
          {t("experience.titleTwo")}{" "}
          <S.Italic>{t("experience.titleAccent")}</S.Italic>
        </S.Title>

        <S.SummaryLink href="#journey">
          {t("experience.cta")}
          <S.Arrow aria-hidden="true">→</S.Arrow>
        </S.SummaryLink>
      </S.Intro>

      <S.MetricsGrid>
        {EXPERIENCE_ITEMS.map((item) => {
          const title = t(`experience.items.${item.id}.title`);
          const titleLines = splitTitle(title);

          return (
            <S.MetricCard key={item.id}>
              <S.Ring
                $progress={item.progress}
                $variant={item.variant}
                aria-label={`${title} ${t(`experience.items.${item.id}.label`)}`}
              >
                <S.Marker $angle={item.markerAngle} />

                <S.RingContent>
                  <S.MetricTitle>
                    {titleLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </S.MetricTitle>

                  <S.MetricLabel>
                    {t(`experience.items.${item.id}.label`)}
                  </S.MetricLabel>
                </S.RingContent>
              </S.Ring>

              <S.Description>
                {t(`experience.items.${item.id}.description`)}
              </S.Description>
            </S.MetricCard>
          );
        })}
      </S.MetricsGrid>
    </S.Section>
  );
};
