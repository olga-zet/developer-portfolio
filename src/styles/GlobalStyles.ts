import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Cormorant+Garamond:wght@500;600;700&family=IBM+Plex+Mono:wght@500;600;700&family=Inter:wght@400;500;600;700;800;900&family=Permanent+Marker&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    min-height: 100%;
    margin: 0;

    scroll-behavior: smooth;
    scroll-padding-top: ${({ theme }) => theme.layout.navHeight};
  }

  body,
  #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  body {
    min-width: 320px;
    overflow-x: hidden;

    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.page};

    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;

    transition:
      background ${({ theme }) => theme.transitions.normal},
      color ${({ theme }) => theme.transitions.normal};
  }

  button,
  a {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
