import { useTranslation } from "react-i18next";

import { METER_SEGMENTS, STACK_GROUPS } from "../StackSection.data";

import {
  CardHeader,
  CardIcon,
  CardLabel,
  CardMeta,
  CardTitle,
  Meter,
  MeterBlock,
  SkillCard,
  SkillItem,
  SkillList,
} from "../StackSection.styled";

type SkillGroup = (typeof STACK_GROUPS)[number];

type SkillGroupCardProps = {
  group: SkillGroup;
};

export const SkillGroupCard = ({ group }: SkillGroupCardProps) => {
  const { t } = useTranslation();

  const Icon = group.icon;

  return (
    <SkillCard>
      <CardHeader>
        <CardMeta>
          <span>{group.number}</span>

          <CardIcon aria-hidden="true">
            <Icon size={24} strokeWidth={1.7} />
          </CardIcon>
        </CardMeta>

        <div>
          <CardTitle>{t(`stack.groups.${group.id}.title`)}</CardTitle>

          <CardLabel>{t(`stack.groups.${group.id}.label`)}</CardLabel>
        </div>
      </CardHeader>

      <SkillList>
        {group.items.map((item) => (
          <SkillItem key={`${group.id}-${item}`}>{item}</SkillItem>
        ))}
      </SkillList>

      <Meter aria-hidden="true">
        {Array.from({ length: METER_SEGMENTS }, (_, index) => (
          <MeterBlock
            key={`${group.id}-${index}`}
            $active={index < group.level}
          />
        ))}
      </Meter>
    </SkillCard>
  );
};
