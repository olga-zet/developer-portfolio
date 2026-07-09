import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  max-height: calc(100dvh - 140px);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 2;
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(18rem, 0.55fr) minmax(0, 1.35fr);
  align-items: center;
  gap: clamp(1.5rem, 3vw, 4rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    align-items: start;
    padding-top: clamp(2rem, 6vw, 4rem);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;

  min-width: 0;
  padding-bottom: clamp(2rem, 4vw, 4rem);

  @media (max-width: 980px) {
    padding-bottom: 0;
  }
`;

export const HeroName = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(5.3rem, 9.1vw, 8.6rem);
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: -0.075em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    display: block;
  }

  @media (max-width: 980px) {
    font-size: clamp(4.5rem, 16vw, 7rem);
  }

  @media (max-width: 520px) {
    font-size: clamp(3.7rem, 18vw, 5.4rem);
  }
`;

export const HeroRole = styled.p`
  margin: clamp(1.1rem, 1.5vw, 1.5rem) 0 0;
  font-size: clamp(1.35rem, 2vw, 2rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.055em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent.pink};

  span {
    margin-left: 0.35rem;
  }
`;

export const Divider = styled.span`
  display: block;
  width: 2.35rem;
  height: 0.22rem;
  margin: clamp(1.1rem, 1.8vw, 1.7rem) 0;
  background: ${({ theme }) => theme.colors.text.primary};
`;

export const HeroDescription = styled.p`
  max-width: 18rem;
  margin: 0;
  font-size: clamp(0.9rem, 1vw, 1rem);
  line-height: 1.65;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Cta = styled(Link)`
  width: fit-content;
  margin-top: clamp(1.5rem, 2vw, 2.4rem);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.colors.text.primary};
  padding-bottom: 0.25rem;

  transition:
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
    border-color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const CtaArrow = styled.span`
  display: inline-flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.accent.pink};

  transition: transform ${({ theme }) => theme.transitions.fast};

  ${Cta}:hover & {
    transform: translateX(0.4rem);
  }
`;

export const HeroImageFrame = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  overflow: visible;

  @media (max-width: 980px) {
    justify-content: center;
    height: auto;
  }
`;

export const HeroImage = styled.img`
  width: min(72rem, 72vw);
  max-width: none;
  max-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight} - 5rem);
  object-fit: contain;
  object-position: right bottom;
  transform: translateX(3.5rem);

  @media (max-width: 1200px) {
    width: min(62rem, 68vw);
    transform: translateX(2rem);
  }

  @media (max-width: 980px) {
    width: min(100%, 44rem);
    max-width: 100%;
    max-height: 42dvh;
    transform: none;
  }
`;

export const AccentPanel = styled.div`
  position: relative;
  z-index: 4;
  width: 100vw;
  min-height: clamp(3.8rem, 7vw, 5.3rem);
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${({ theme }) => theme.spacing.pageX};
  background: ${({ theme }) => theme.colors.accent.pink};
  pointer-events: none;
`;

export const AccentText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.68rem, 0.9vw, 0.82rem);
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.accent.white};

  svg {
    flex: 0 0 auto;
  }
`;
