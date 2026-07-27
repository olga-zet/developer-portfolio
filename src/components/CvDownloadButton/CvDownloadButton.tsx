import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

import { CvDownloadIcon, CvDownloadLink } from "./CvDownloadButton.styled";

type CvLanguage = "pl" | "en";

const CV_FILES: Record<
  CvLanguage,
  {
    path: string;
    filename: string;
    ariaLabel: string;
  }
> = {
  pl: {
    path: "/cv/olga-zaluska-cv-pl.pdf",
    filename: "Olga-Zaluska-CV-PL.pdf",
    ariaLabel: "Pobierz CV w języku polskim",
  },
  en: {
    path: "/cv/olga-zaluska-cv-en.pdf",
    filename: "Olga-Zaluska-CV-EN.pdf",
    ariaLabel: "Download CV in English",
  },
};

export const CvDownloadButton = () => {
  const { i18n } = useTranslation();

  const language: CvLanguage = i18n.resolvedLanguage?.startsWith("pl")
    ? "pl"
    : "en";

  const cvFile = CV_FILES[language];

  return (
    <CvDownloadLink
      href={cvFile.path}
      download={cvFile.filename}
      aria-label={cvFile.ariaLabel}
    >
      CV
      <CvDownloadIcon aria-hidden="true">
        <Download size={14} strokeWidth={2} />
      </CvDownloadIcon>
    </CvDownloadLink>
  );
};
