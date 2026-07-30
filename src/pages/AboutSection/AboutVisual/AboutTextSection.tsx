import type { ReactNode } from "react";

import {
  ContentLine,
  SectionHeader,
  TextColumn,
} from "../AboutSection.styled.ts";

type AboutTextSectionProps = {
  title: string;
  children: ReactNode;
};

export const AboutTextSection = ({
  title,
  children,
}: AboutTextSectionProps) => {
  return (
    <TextColumn>
      <SectionHeader>
        <span>{title}</span>
        <ContentLine />
      </SectionHeader>

      {children}
    </TextColumn>
  );
};
