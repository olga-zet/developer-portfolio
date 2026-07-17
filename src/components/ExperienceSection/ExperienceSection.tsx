import { useTranslation } from "react-i18next";

import { ExperienceTimelineItem } from "./ExperienceTimelineItem/ExperienceTimelineItem";

import {
  Content,
  Header,
  Intro,
  Kicker,
  Layout,
  Lead,
  Section,
  Timeline,
  Title,
  TopText,
} from "./ExperienceSection.styled";
import type { ExperienceItem } from "./ExperienceSection.types.ts";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  const items = t("experience.items", {
    returnObjects: true,
  }) as ExperienceItem[];

  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Content>
        <Header>
          <Intro>
            <Kicker>{t("experience.kicker")}</Kicker>

            <Title id="experience-title">{t("experience.title")}</Title>
          </Intro>

          <TopText>
            <Lead>{t("experience.lead")}</Lead>
          </TopText>
        </Header>

        <Layout>
          <Timeline>
            {items.map((item) => (
              <ExperienceTimelineItem
                key={`${item.number}-${item.company}`}
                item={item}
              />
            ))}
          </Timeline>
        </Layout>
      </Content>
    </Section>
  );
};
