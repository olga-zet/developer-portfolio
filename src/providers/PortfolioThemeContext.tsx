import { createContext } from "react";

import type { ThemeMode } from "../styles/theme";

export type PortfolioThemeContextValue = {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const PortfolioThemeContext =
  createContext<PortfolioThemeContextValue | null>(null);
