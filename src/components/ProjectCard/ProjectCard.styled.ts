import styled from "styled-components";
import { Link } from "@tanstack/react-router";

import { monoButton } from "../ProjectSection/ProjectSection.styled.ts";

export const ProjectNumber = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3.8rem, 5vw, 5.8rem);
  line-height: 0.8;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProjectHeader = styled.div`
  display: grid;
  gap: clamp(1.5rem, 2.4vw, 2.2rem);
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 3vw, 3.6rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Type = styled.p`
  margin: 0.45rem 0 0;
  ${monoButton};
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const Tag = styled.span`
  padding: 0.42rem 0.6rem;
  ${monoButton};
  font-size: 0.58rem;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text.primary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.background.surface} 82%,
    transparent
  );
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const ProjectMeta = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.8rem;
  padding-right: clamp(1rem, 2vw, 2rem);
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: 720px) {
    display: flex;
    align-items: baseline;
    padding-right: 0;
    border-right: 0;
  }
`;

export const ProjectContent = styled.div`
  min-width: 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: clamp(2rem, 3vw, 3rem);
`;

export const ProjectFooter = styled.div`
  display: grid;
  gap: 1.25rem;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const ProjectActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const projectButtonStyles = `
  min-height: 2.85rem;
  padding: 0.75rem 1.15rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  svg {
    flex-shrink: 0;
    transition: transform 180ms ease;
  }

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }
`;

export const DemoLink = styled.a`
  ${projectButtonStyles};
  font-family: ${({ theme }) => theme.fonts.mono};

  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.pink};
  border: 1px solid ${({ theme }) => theme.colors.accent.pink};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
    background: transparent;
    transform: translateY(-2px);

    svg {
      transform: translate(2px, -2px);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ActionButton = styled(Link)`
  ${projectButtonStyles};
  font-family: ${({ theme }) => theme.fonts.mono};

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.strong};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.white};
    background: ${({ theme }) => theme.colors.text.primary};
    border-color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-2px);

    svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ImageFrame = styled.div`
  position: relative;
  overflow: hidden;

  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};

  box-shadow: 0 18px 45px
    color-mix(
      in srgb,
      ${({ theme }) => theme.colors.shadow.soft} 42%,
      transparent
    );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    border-style: solid;
    border-width: 0 3.2rem 3.2rem 0;
    border-color: transparent ${({ theme }) => theme.colors.accent.pink}
      transparent transparent;
  }
`;

export const ProjectArticle = styled.article`
  display: grid;
  grid-template-columns:
    5rem
    minmax(20rem, 1.35fr)
    minmax(16rem, 0.9fr);
  gap: clamp(1.5rem, 3vw, 3.5rem);
  align-items: center;

  padding-block: clamp(2rem, 3vw, 3.5rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  &:first-child {
    padding-top: 0;
  }

  @media (max-width: 1180px) {
    grid-template-columns: 4rem minmax(0, 1fr);

    ${ProjectMeta} {
      grid-column: 1;
      grid-row: 1 / 3;
    }

    ${ProjectContent} {
      grid-column: 2;
      grid-row: 1;
    }

    ${ImageFrame} {
      grid-column: 2;
      grid-row: 2;
      max-width: 38rem;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;

    ${ProjectMeta},
    ${ProjectContent},
    ${ImageFrame} {
      grid-column: 1;
      grid-row: auto;
    }
  }
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 7;
  object-fit: cover;

  filter: saturate(0.92) contrast(1.04);

  transition:
    transform 220ms ease,
    filter 220ms ease;

  ${ProjectArticle}:hover & {
    transform: scale(1.025);
    filter: saturate(1) contrast(1.08);
  }
`;
