import { Moon, Sun } from "lucide-react";

import { ToggleButton, ToggleIcon, ToggleLabel } from "./ThemeToggle.styled";
import { usePortfolioTheme } from "../../hooks/usePortfolioTheme";

export const ThemeToggle = () => {
  const { themeMode, toggleTheme } = usePortfolioTheme();

  const isDark = themeMode === "dark";

  return (
    <ToggleButton
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <ToggleIcon>{isDark ? <Sun size={16} /> : <Moon size={16} />}</ToggleIcon>
      <ToggleLabel>{isDark ? "Light" : "Dark"}</ToggleLabel>
    </ToggleButton>
  );
};
