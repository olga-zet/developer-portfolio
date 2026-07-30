import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Badge,
  Intro,
  Lead,
  QuoteAuthor,
  QuoteBox,
  QuoteIcon,
  QuoteText,
} from "../StackSection.styled.ts";

export const StackIntro = () => {
  const { t } = useTranslation();

  return (
    <Intro>
      <Badge>{t("stack.kicker")}</Badge>

      <h2>
        {t("stack.title.first")}
        <br />
        {t("stack.title.second")}
      </h2>

      <Lead>{t("stack.intro")}</Lead>

      <QuoteBox>
        <QuoteIcon aria-hidden="true">
          <Quote size={34} strokeWidth={1.5} />
        </QuoteIcon>

        <QuoteText>{t("stack.quote.text")}</QuoteText>

        <QuoteAuthor>{t("stack.quote.author")}</QuoteAuthor>
      </QuoteBox>
    </Intro>
  );
};
