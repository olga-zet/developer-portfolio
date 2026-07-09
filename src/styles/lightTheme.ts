import { sharedTheme } from "./sharedThemes.ts";
import { colors } from "./colors.ts";

export const lightTheme = {
  ...sharedTheme,
  mode: "light",
  colors: {
    background: {
      page: colors.grey[50],
      section: colors.base.white,
      surface: colors.base.white,
      surfaceSoft: colors.grey[200],
      muted: colors.grey[300],
    },

    text: {
      primary: colors.grey[900],
      secondary: colors.grey[800],
      muted: colors.grey[700],
      inverse: colors.base.white,
      accent: colors.pink[500],
    },

    accent: {
      pink: colors.pink[500],
      pinkSoft: colors.pink[100],
      red: colors.red[500],
      redSoft: colors.red[100],
      black: colors.grey[900],
      white: colors.base.white,
    },

    border: {
      subtle: colors.grey[400],
      default: colors.grey[500],
      strong: colors.grey[600],
    },

    navigation: {
      background: colors.grey[50],
      border: colors.grey[400],
      shadow: colors.grey[400],
    },

    shadow: {
      soft: colors.grey[400],
      pink: colors.pink[200],
    },
  },
};
