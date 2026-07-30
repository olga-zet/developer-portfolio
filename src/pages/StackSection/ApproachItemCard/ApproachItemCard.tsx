import { useTranslation } from "react-i18next";

import { APPROACH_ITEMS } from "../StackSection.data.ts";

import {
  ApproachCard,
  ApproachContent,
  ApproachHeader,
  ApproachIcon,
  ApproachNumber,
} from "../StackSection.styled.ts";

type ApproachItem = (typeof APPROACH_ITEMS)[number];

type ApproachItemCardProps = {
  item: ApproachItem;
};

export const ApproachItemCard = ({ item }: ApproachItemCardProps) => {
  const { t } = useTranslation();

  const Icon = item.icon;

  return (
    <ApproachCard>
      <ApproachHeader>
        <ApproachNumber>{item.number}</ApproachNumber>

        <ApproachIcon aria-hidden="true">
          <Icon size={22} strokeWidth={1.6} />
        </ApproachIcon>
      </ApproachHeader>

      <ApproachContent>
        <h3>{t(`stack.approach.items.${item.id}.title`)}</h3>

        <p>{t(`stack.approach.items.${item.id}.text`)}</p>
      </ApproachContent>
    </ApproachCard>
  );
};
