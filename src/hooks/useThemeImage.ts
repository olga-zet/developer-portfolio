// src/hooks/useThemeImage.ts
import { useTheme } from "styled-components";

export const useThemeImage = (lightImage: string, darkImage: string) => {
  const { mode } = useTheme();

  return mode === "dark" ? darkImage : lightImage;
};
