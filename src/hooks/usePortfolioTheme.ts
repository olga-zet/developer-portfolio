import { useContext } from "react";

import { PortfolioThemeContext } from "../providers/PortfolioThemeContext";

export const usePortfolioTheme = () => {
  const context = useContext(PortfolioThemeContext);

  if (!context) {
    throw new Error(
      "usePortfolioTheme must be used inside PortfolioThemeProvider",
    );
  }

  return context;
};
