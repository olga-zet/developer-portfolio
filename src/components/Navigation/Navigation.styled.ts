import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ theme }) => theme.layout.navHeight};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.pageX};
  background-color: ${({ theme }) => theme.colors.background.page};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: clamp(1.4rem, 2.6vw, 3rem);
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-self: start;

  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
`;

export const BrandMark = styled.span`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: clamp(2.6rem, 5vw, 4.6rem);
  font-weight: 800;
  line-height: 0.78;
  letter-spacing: 5px;

  text-transform: uppercase;
  font-style: italic;

  transform: rotate(-6deg);

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Nav = styled.nav`
  justify-self: end;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(1rem, 2vw, 2rem);
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: clamp(1.4rem, 3vw, 4rem);

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;

  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.45rem;

    width: 0;
    height: 2px;

    background: ${({ theme }) => theme.colors.accent.pink};
    transition: width ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  &:hover::after,
  &.is-active::after {
    width: 100%;
  }

  &.is-active {
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.45rem;
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;

  width: 2.35rem;
  height: 2.35rem;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.surface};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radii.pill};

  cursor: pointer;

  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
    border-color: ${({ theme }) => theme.colors.accent.pink};
    background: ${({ theme }) => theme.colors.background.surfaceSoft};
  }

  @media (max-width: 860px) {
    display: inline-flex;
  }
`;

export const MobilePanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 19;
  top: ${({ theme }) => theme.layout.navHeight};
  left: 0;
  right: 0;

  display: none;

  background: ${({ theme }) => theme.colors.background.page};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
  box-shadow: 0 1.5rem 4rem ${({ theme }) => theme.colors.shadow.soft};

  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-1rem)"};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  transition:
    transform ${({ theme }) => theme.transitions.normal},
    opacity ${({ theme }) => theme.transitions.normal};

  @media (max-width: 860px) {
    display: block;
  }
`;

export const MobilePanelInner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: 1.4rem ${({ theme }) => theme.spacing.pageX} 1.8rem;

  display: grid;
  gap: 1.15rem;

  ${NavLink} {
    width: fit-content;
    font-size: clamp(1.35rem, 7vw, 2.7rem);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    letter-spacing: -0.06em;
    text-transform: none;
  }
`;
