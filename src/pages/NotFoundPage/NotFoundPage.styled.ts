import { Link } from "@tanstack/react-router";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glitchBefore = keyframes`
  0%,
  72%,
  100% {
    clip-path: inset(0 0 100% 0);
    transform: translate(0);
    opacity: 0;
  }

  74% {
    clip-path: inset(14% 0 66% 0);
    transform: translate(-10px, 1px);
    opacity: 0.9;
  }

  76% {
    clip-path: inset(42% 0 35% 0);
    transform: translate(9px, -1px);
    opacity: 0.85;
  }

  78% {
    clip-path: inset(67% 0 12% 0);
    transform: translate(-6px, 1px);
    opacity: 0.9;
  }

  80% {
    clip-path: inset(25% 0 53% 0);
    transform: translate(5px);
    opacity: 0.7;
  }

  82% {
    clip-path: inset(0 0 100% 0);
    transform: translate(0);
    opacity: 0;
  }
`;

const glitchAfter = keyframes`
  0%,
  80%,
  100% {
    clip-path: inset(100% 0 0 0);
    transform: translate(0);
    opacity: 0;
  }

  82% {
    clip-path: inset(8% 0 73% 0);
    transform: translate(8px, -1px);
    opacity: 0.8;
  }

  84% {
    clip-path: inset(38% 0 39% 0);
    transform: translate(-9px, 2px);
    opacity: 0.95;
  }

  86% {
    clip-path: inset(72% 0 10% 0);
    transform: translate(7px, -2px);
    opacity: 0.75;
  }

  88% {
    clip-path: inset(50% 0 28% 0);
    transform: translate(-4px);
    opacity: 0.85;
  }

  90% {
    clip-path: inset(100% 0 0 0);
    transform: translate(0);
    opacity: 0;
  }
`;

const codeShake = keyframes`
  0%,
  70%,
  100% {
    transform: translateX(0);
  }

  72% {
    transform: translateX(-2px);
  }

  74% {
    transform: translateX(3px);
  }

  76% {
    transform: translateX(-1px);
  }

  78% {
    transform: translateX(0);
  }
`;

const scannerMove = keyframes`
  0% {
    top: 15%;
    opacity: 0;
  }

  15% {
    opacity: 0.75;
  }

  85% {
    opacity: 0.75;
  }

  100% {
    top: 85%;
    opacity: 0;
  }
`;

const barGlitch = keyframes`
  0%,
  78%,
  100% {
    opacity: 0;
    transform: translateX(0) scaleX(0.25);
  }

  80% {
    opacity: 0.9;
    transform: translateX(-17px) scaleX(0.75);
  }

  82% {
    opacity: 1;
    transform: translateX(12px) scaleX(0.45);
  }

  84% {
    opacity: 0.75;
    transform: translateX(-5px) scaleX(0.9);
  }

  86% {
    opacity: 0;
    transform: translateX(0) scaleX(0.25);
  }
`;

export const Page = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: calc(100svh - ${({ theme }) => theme.layout.navHeight});
  min-height: 560px;
  overflow: hidden;
  place-items: center;
  padding: 12px ${({ theme }) => theme.spacing.pageX} 22px;

  background:
    radial-gradient(
      circle at 4% 93%,
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.accent.pink} 14%,
        transparent
      ),
      transparent 25%
    ),
    ${({ theme }) => theme.colors.background.page};

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};

  transition:
    background-color ${({ theme }) => theme.transitions.normal},
    color ${({ theme }) => theme.transitions.normal};

  @media (max-width: 900px) {
    min-height: 520px;
    padding-inline: 24px;
  }

  @media (max-width: 600px) {
    min-height: 500px;
    padding: 10px 18px 18px;
  }
`;

export const Content = styled.main`
  position: relative;
  z-index: 5;
  display: grid;
  width: min(100%, 1120px);
  max-height: 100%;
  justify-items: center;
  align-content: center;
  animation: ${fadeIn} 650ms ease both;
`;

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.13em;

  span {
    padding: 5px 8px;
    background: ${({ theme }) => theme.colors.accent.pink};
    color: ${({ theme }) => theme.colors.text.inverse};
  }

  strong {
    font-weight: 700;
  }

  @media (max-height: 750px) {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    font-size: 0.58rem;
  }
`;

export const ErrorVisual = styled.div`
  position: relative;
  display: grid;
  width: min(90vw, 1000px);
  height: clamp(210px, 29vh, 330px);
  place-items: center;
  isolation: isolate;

  @media (max-height: 760px) {
    height: clamp(190px, 26vh, 260px);
  }

  @media (max-width: 600px) {
    width: 100%;
    height: clamp(180px, 29vh, 230px);
  }
`;

export const ErrorCode = styled.div`
  position: relative;
  z-index: 5;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(9rem, 22vw, 19rem);
  font-weight: 950;
  letter-spacing: -0.07em;
  line-height: 0.76;
  user-select: none;

  animation: ${codeShake} 5.4s infinite;

  &::before,
  &::after {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: attr(data-text);
  }

  &::before {
    z-index: -1;
    color: ${({ theme }) => theme.colors.accent.pink};
    text-shadow: 5px 0 ${({ theme }) => theme.colors.accent.pink};
    animation: ${glitchBefore} 5.4s infinite;
  }

  &::after {
    z-index: 2;
    color: ${({ theme }) => theme.colors.background.page};
    text-shadow:
      -4px 0 ${({ theme }) => theme.colors.background.page},
      7px 0 ${({ theme }) => theme.colors.accent.pink};
    animation: ${glitchAfter} 5.4s 180ms infinite;
  }

  @media (max-height: 760px) {
    font-size: clamp(8rem, 19vw, 15rem);
  }

  @media (max-width: 600px) {
    font-size: clamp(7.8rem, 40vw, 11rem);
  }
`;

export const Scanner = styled.span`
  position: absolute;
  z-index: 9;
  top: 15%;
  left: 21%;
  width: 58%;
  height: 1px;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent,
    ${({ theme }) => theme.colors.accent.pink},
    ${({ theme }) => theme.colors.background.page},
    ${({ theme }) => theme.colors.accent.pink},
    transparent
  );

  box-shadow:
    0 0 8px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.accent.pink} 80%,
        transparent
      ),
    0 0 18px
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.accent.pink} 45%,
        transparent
      );

  animation: ${scannerMove} 4.5s ease-in-out infinite;
`;

export const GlitchBar = styled.span<{ $top: string }>`
  position: absolute;
  z-index: 10;
  top: ${({ $top }) => $top};
  left: 24%;
  width: 52%;
  height: 5px;
  pointer-events: none;

  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.text.primary} 14%,
    ${({ theme }) => theme.colors.accent.pink} 30%,
    ${({ theme }) => theme.colors.background.page} 48%,
    ${({ theme }) => theme.colors.text.primary} 69%,
    transparent 100%
  );

  opacity: 0;
  transform-origin: center;
  animation: ${barGlitch} 5.4s infinite;

  &:nth-of-type(2) {
    animation-delay: 120ms;
  }

  &:nth-of-type(3) {
    animation-delay: 240ms;
  }
`;

export const CodeDecoration = styled.div`
  position: absolute;
  z-index: 11;
  right: 4%;
  bottom: 10%;
  display: grid;
  justify-items: end;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.6;

  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const PageTitle = styled.h1`
  position: relative;
  z-index: 12;
  margin: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1.4rem, 3vw, 2.7rem);
  font-weight: 900;
  letter-spacing: clamp(0.15em, 0.8vw, 0.38em);
  text-align: center;
  text-transform: uppercase;

  &::before {
    display: block;
    width: 82px;
    height: 4px;
    margin: 0 auto 14px;

    background: repeating-linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.accent.pink} 0,
      ${({ theme }) => theme.colors.accent.pink} 3px,
      transparent 3px,
      transparent 7px
    );

    content: "";
  }

  &::after {
    display: block;
    width: 60px;
    height: 3px;
    margin: 14px auto 0;
    background: ${({ theme }) => theme.colors.accent.pink};
    content: "";
  }

  @media (max-height: 750px) {
    &::before {
      margin-bottom: 9px;
    }

    &::after {
      margin-top: 9px;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.35rem;
    letter-spacing: 0.13em;
  }
`;

export const Description = styled.p`
  margin: 16px 0 0;

  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  line-height: 1.5;
  text-align: center;

  @media (max-height: 750px) {
    margin-top: 11px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-top: 22px;

  @media (max-height: 750px) {
    margin-top: 15px;
  }

  @media (max-width: 560px) {
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }
`;

export const BackHomeButton = styled(Link)`
  display: flex;
  min-width: 235px;
  align-items: center;
  justify-content: space-between;
  padding: 17px 23px;

  border: 1px solid ${({ theme }) => theme.colors.accent.black};
  background: ${({ theme }) => theme.colors.accent.black};
  color: ${({ theme }) => theme.colors.accent.white};

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: uppercase;

  transition:
    background-color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  strong {
    color: ${({ theme }) => theme.colors.accent.pink};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 0;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent.pink};
    background: ${({ theme }) => theme.colors.background.surface};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-3px);

    strong {
      transform: translateX(6px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 4px;
  }

  @media (max-height: 750px) {
    padding-block: 14px;
  }

  @media (max-width: 560px) {
    width: min(100%, 290px);
  }
`;

export const ProjectsLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;

  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: uppercase;

  span {
    padding-bottom: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text.primary};

    transition:
      border-color ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};
  }

  strong {
    color: ${({ theme }) => theme.colors.accent.pink};
    font-size: 1.55rem;
    font-weight: 400;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    span {
      border-color: ${({ theme }) => theme.colors.accent.pink};
      color: ${({ theme }) => theme.colors.accent.pink};
    }

    strong {
      transform: translateX(7px);
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 5px;
  }
`;

export const AccentCorner = styled.span`
  position: absolute;
  z-index: 2;
  top: 28px;
  right: 5%;
  width: 48px;
  height: 48px;

  border-top: 2px solid ${({ theme }) => theme.colors.accent.pink};
  border-right: 2px solid ${({ theme }) => theme.colors.accent.pink};

  @media (max-width: 700px) {
    top: 22px;
    right: 22px;
    width: 32px;
    height: 32px;
  }
`;

export const DotGrid = styled.div<{
  $position: "left" | "right";
}>`
  position: absolute;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(6, 3px);
  gap: 8px;

  ${({ $position }) =>
    $position === "left"
      ? css`
          top: 34%;
          left: 5%;
        `
      : css`
          right: 5%;
          bottom: 18%;
        `}

  span {
    width: 3px;
    height: 3px;
    border-radius: 50%;

    background: ${({ theme }) =>
      `color-mix(
        in srgb,
        ${theme.colors.text.primary} 68%,
        transparent
      )`};
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
