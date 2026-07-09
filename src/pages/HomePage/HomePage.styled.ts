import styled, { css } from "styled-components";

export const PageSection = styled.section<{ $variant?: "hero" }>`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  min-height: calc(100vh - ${({ theme }) => theme.layout.navHeight});
  margin: 0 auto;
  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};

  ${({ $variant, theme }) =>
    $variant === "hero"
      ? css`
          padding: 0 ${theme.spacing.pageX};
        `
      : css`
          padding: ${theme.spacing.sectionY} ${theme.spacing.pageX};
        `}
`;
