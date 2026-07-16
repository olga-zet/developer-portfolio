import { useTranslation } from "react-i18next";

import { APPROACH_ITEMS, STACK_GROUPS } from "./StackSection.data";

import { ApproachItemCard } from "./ApproachItemCard/ApproachItemCard";
import { SkillGroupCard } from "./SkillGroupCard/SkillGroupCard";
import { StackIntro } from "./StackIntro/StackIntro";

import {
  Approach,
  ApproachIntro,
  ApproachList,
  ApproachTitle,
  Layout,
  Section,
  SkillGrid,
} from "./StackSection.styled";

export const StackSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="stack">
      <Layout>
        <StackIntro />

        <SkillGrid>
          {STACK_GROUPS.map((group) => (
            <SkillGroupCard key={group.id} group={group} />
          ))}
        </SkillGrid>

        <Approach>
          <ApproachIntro>
            <ApproachTitle>{t("stack.approach.title")}</ApproachTitle>
          </ApproachIntro>

          <ApproachList>
            {APPROACH_ITEMS.map((item) => (
              <ApproachItemCard key={item.id} item={item} />
            ))}
          </ApproachList>
        </Approach>
      </Layout>
    </Section>
  );
};
