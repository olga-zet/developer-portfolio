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
  gap: 1rem;
`;

export const ProjectTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 3vw, 3.6rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.primary};
`;
export const Tag = styled.span`
  padding: 0.42rem 0.6rem;
  ${monoButton};
  font-size: 0.58rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.background.surface} 82%,
    transparent
  );
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const Type = styled.p`
  margin: 0.45rem 0 0;
  ${monoButton};
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.4rem;
`;

export const ActionButton = styled(Link)`
  width: 3.4rem;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  color: ${({ theme }) => theme.colors.background.page};
  background: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent.white};
    background: ${({ theme }) => theme.colors.accent.pink};
    transform: translateX(4px);
  }

  @media (max-width: 720px) {
    justify-self: start;
  }
`;

export const ProjectMeta = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.8rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 5.82rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: 720px) {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    border-right: 0;
  }
`;

export const ProjectContent = styled.div`
  min-width: 0;
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
    minmax(18rem, 1.4fr)
    minmax(13rem, 0.9fr)
    4.5rem;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;
  padding-bottom: clamp(1.5rem, 2.5vw, 2.2rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: 1180px) {
    grid-template-columns: 4rem minmax(0, 1fr) 4rem;

    ${ProjectContent} {
      grid-column: 2 / 3;
    }

    ${ImageFrame} {
      grid-column: 2 / 3;
    }

    ${ActionButton} {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
      align-self: center;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;

    ${ProjectMeta},
    ${ProjectContent},
    ${ImageFrame},
    ${ActionButton} {
      grid-column: 1 / -1;
    }

    ${ActionButton} {
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
