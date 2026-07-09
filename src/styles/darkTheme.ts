import { sharedTheme } from "./sharedThemes.ts";
import { colors } from "./colors.ts";

export const darkTheme = {
  ...sharedTheme,
  mode: "dark",
  colors: {
    background: {
      page: colors.charcoal[700],
      section: colors.charcoal[600],
      surface: colors.charcoal[500],
      surfaceSoft: colors.charcoal[400],
      muted: colors.charcoal[300],
    },

    text: {
      primary: colors.grey[50],
      secondary: colors.grey[500],
      muted: colors.grey[600],
      inverse: colors.charcoal[700],
      accent: colors.pink[500],
    },

    accent: {
      pink: colors.pink[500],
      pinkSoft: colors.pink[900],
      red: colors.red[300],
      redSoft: colors.red[900],
      black: colors.charcoal[700],
      white: colors.grey[50],
    },

    border: {
      subtle: colors.charcoal[200],
      default: colors.charcoal[100],
      strong: colors.charcoal[50],
    },

    navigation: {
      background: colors.charcoal[700],
      border: colors.charcoal[200],
      shadow: colors.charcoal[900],
    },

    shadow: {
      soft: colors.charcoal[900],
      pink: colors.pink[900],
    },
  },
};
