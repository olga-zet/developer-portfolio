import { ArrowUpRight } from "lucide-react";

import type { ExperienceItem } from "../ExperienceSection.types";

import {
  Meta,
  Number,
  Period,
  PeriodDot,
  PeriodLine,
  Role,
  Summary,
  Tag,
  Tags,
  TimelineItem,
  TimelineText,
} from "../ExperienceSection.styled";

type ExperienceTimelineItemProps = {
  item: ExperienceItem;
};

export const ExperienceTimelineItem = ({
  item,
}: ExperienceTimelineItemProps) => {
  const [periodStart, periodEnd] = item.period;

  return (
    <TimelineItem>
      <Period>
        <PeriodLine>
          {periodStart}
          <PeriodDot aria-hidden="true">•</PeriodDot>
        </PeriodLine>

        {periodEnd && <PeriodLine>{periodEnd}</PeriodLine>}
      </Period>

      <Number aria-hidden="true">{item.number}</Number>

      <TimelineText>
        <Role>{item.role}</Role>

        <Meta>
          {item.company}
          <span aria-hidden="true">—</span>
          {item.location}
        </Meta>

        <Summary>{item.summary}</Summary>
      </TimelineText>

      <Tags aria-label={`${item.role} technologies`}>
        {item.tags.map((tag) => (
          <Tag key={`${item.number}-${tag}`}>{tag}</Tag>
        ))}
      </Tags>

      <ArrowUpRight aria-hidden="true" focusable="false" />
    </TimelineItem>
  );
};
