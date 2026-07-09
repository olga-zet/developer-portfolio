import styled, { css } from "styled-components";
import { Link } from "@tanstack/react-router";

const monoButton = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Section = styled.section`
  min-height: 100vh;
  padding: clamp(1.5rem, 2.5vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text.primary};
  ${({ theme }) => theme.colors.background.page};
`;

export const TopBar = styled.header`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding-bottom: clamp(3rem, 5vw, 5.5rem);

  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(2rem, 5vw, 6rem);

  @media (max-width: 860px) {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3rem, 5vw, 4.6rem);
  line-height: 0.8;
  letter-spacing: -0.08em;

  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  span {
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(1.8rem, 4vw, 4.8rem);

  @media (max-width: 980px) {
    gap: 1.6rem;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  padding-bottom: 0.75rem;

  ${monoButton};

  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;

    width: ${({ $active }) => ($active ? "2.6rem" : "0")};
    height: 2px;

    background: ${({ theme }) => theme.colors.accent.pink};
    transform: translateX(-50%);
    transition: width 180ms ease;
  }

  &:hover::after {
    width: 2.6rem;
  }
`;

export const IntroLine = styled.span`
  ${monoButton};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Content = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(17rem, 0.9fr) minmax(0, 2.4fr);
  gap: clamp(3rem, 5vw, 7rem);
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.aside`
  position: sticky;
  top: 2rem;

  min-height: calc(100vh - 7rem);

  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    position: static;
    min-height: auto;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 1.5rem;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const Header = styled.h1`
  max-width: 34rem;
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(5.2rem, 9vw, 10.5rem);
  line-height: 0.88;
  letter-spacing: -0.035em;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  max-width: 25rem;
  margin: 0;

  font-size: clamp(0.95rem, 1vw, 1.05rem);
  line-height: 1.65;

  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const StackTitle = styled.h2`
  margin: clamp(3rem, 5vw, 5rem) 0 1rem;
  padding-top: 1.5rem;

  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};

  ${monoButton};

  color: ${({ theme }) => theme.colors.text.primary};

  &::after {
    content: " •";
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const StackList = styled.ul`
  display: grid;
  gap: 0.75rem;

  margin: 0;
  padding: 0;

  list-style: none;
`;

export const StackItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  font-size: 0.86rem;

  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: "";

    width: 0.45rem;
    height: 0.45rem;

    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    transform: rotate(45deg);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.4rem;

  margin-top: auto;
  padding-top: 4rem;

  a {
    display: inline-flex;

    color: ${({ theme }) => theme.colors.text.primary};

    transition:
      color 180ms ease,
      transform 180ms ease;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
    transform: translateY(-2px);
  }

  @media (max-width: 1080px) {
    margin-top: 0;
    padding-top: 2rem;
  }
`;

export const ProjectList = styled.div`
  display: grid;
`;

export const ProjectMeta = styled.div`
  align-self: stretch;

  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.8rem;

  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 0.82rem;
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

export const ProjectNumber = styled.p`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3.8rem, 5vw, 5.8rem);
  line-height: 0.8;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProjectContent = styled.div`
  min-width: 0;
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

export const ActionButton = styled(Link)`
  width: 3.4rem;
  height: 3.4rem;

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

export const ProjectArticle = styled.article`
  display: grid;
  grid-template-columns: 5rem minmax(13rem, 0.9fr) minmax(18rem, 1.4fr) 4.5rem;
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: center;

  padding: clamp(1.5rem, 2.5vw, 2.2rem) 0;

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
