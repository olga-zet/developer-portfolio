import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  min-width: 0;
  max-width: 34rem;
  padding-bottom: clamp(1rem, 2.5vh, 2.5rem);

  @media (max-width: 980px) {
    max-width: none;
    padding-bottom: 0;
  }

  @media (min-width: 981px) and (max-height: 760px) {
    padding-bottom: 0.75rem;
  }
`;

export const HeroName = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4.5rem, min(9vw, 14vh), 8.6rem);
  font-weight: 900;
  line-height: 0.78;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    display: block;
  }

  @media (max-width: 980px) {
    font-size: clamp(4.4rem, 15vw, 7rem);
    line-height: 0.8;
  }

  @media (max-width: 620px) {
    font-size: clamp(3.4rem, 16.5vw, 5.3rem);
    line-height: 0.83;
    letter-spacing: -0.04em;
  }

  @media (max-width: 390px) {
    font-size: clamp(3rem, 15.8vw, 4rem);
  }

  @media (min-width: 981px) and (max-height: 760px) {
    font-size: clamp(3.8rem, 11.5vh, 6rem);
  }
`;

export const HeroRole = styled.p`
  margin: clamp(0.75rem, 1.6vh, 1.35rem) 0 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1.05rem, min(2vw, 2.5vh), 1.5rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent.pink};

  span {
    margin-left: 0.35rem;
  }

  @media (max-width: 520px) {
    max-width: 18rem;
    font-size: clamp(1rem, 5vw, 1.2rem);
    line-height: 1.2;
  }

  @media (min-width: 981px) and (max-height: 760px) {
    margin-top: 0.65rem;
    font-size: 1rem;
  }
`;

export const Divider = styled.span`
  display: block;
  width: 2.35rem;
  height: 0.2rem;
  margin: clamp(0.8rem, 1.8vh, 1.45rem) 0;
  background: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 520px) {
    width: 2rem;
    height: 0.18rem;
    margin-block: 1.1rem;
  }

  @media (min-width: 981px) and (max-height: 760px) {
    margin-block: 0.75rem;
  }
`;

export const HeroDescription = styled.p`
  max-width: 21rem;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.84rem, min(1vw, 1.65vh), 1rem);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 980px) {
    max-width: 32rem;
    font-size: 1rem;
  }

  @media (max-width: 520px) {
    max-width: 100%;
    font-size: 0.95rem;
  }

  @media (min-width: 981px) and (max-height: 760px) {
    max-width: 19rem;
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export const Cta = styled(Link)`
  width: fit-content;
  margin-top: clamp(1rem, 2.3vh, 2rem);
  padding-bottom: 0.25rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  transition:
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent.pink};
    border-color: ${({ theme }) => theme.colors.accent.pink};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 0.4rem;
  }

  @media (max-width: 520px) {
    min-height: 2.75rem;
    margin-top: 1.5rem;

    font-size: 0.82rem;
  }

  @media (min-width: 981px) and (max-height: 760px) {
    margin-top: 0.9rem;
    font-size: 0.78rem;
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
