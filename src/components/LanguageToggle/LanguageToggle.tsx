import { useTranslation } from "react-i18next";

import * as S from "./LanguageToggle.styled";

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language === "pl" ? "pl" : "en";

  const handleChangeLanguage = () => {
    const nextLanguage = currentLanguage === "pl" ? "en" : "pl";

    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <S.Button
      type="button"
      onClick={handleChangeLanguage}
      aria-label={t("language.label")}
    >
      <S.Option $active={currentLanguage === "en"}>EN</S.Option>
      <S.Separator />
      <S.Option $active={currentLanguage === "pl"}>PL</S.Option>
    </S.Button>
  );
};
