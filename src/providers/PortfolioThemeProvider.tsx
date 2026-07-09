import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { PortfolioThemeContext } from "./PortfolioThemeContext";
import { type ThemeMode } from "../styles/theme";
import { darkTheme } from "../styles/darkTheme.ts";
import { lightTheme } from "../styles/lightTheme.ts";

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialThemeMode = (): ThemeMode => {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
};

type PortfolioThemeProviderProps = {
  children: ReactNode;
};

export const PortfolioThemeProvider = ({
  children,
}: PortfolioThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialThemeMode);

  const toggleTheme = useCallback(() => {
    setThemeMode((currentThemeMode) =>
      currentThemeMode === "dark" ? "light" : "dark",
    );
  }, []);

  const theme = useMemo(
    () => (themeMode === "dark" ? darkTheme : lightTheme),
    [themeMode],
  );

  const value = useMemo(
    () => ({
      themeMode,
      toggleTheme,
      setThemeMode,
    }),
    [themeMode, toggleTheme],
  );

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeMode);
    document.documentElement.dataset.theme = themeMode;
  }, [themeMode]);

  return (
    <PortfolioThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PortfolioThemeContext.Provider>
  );
};
