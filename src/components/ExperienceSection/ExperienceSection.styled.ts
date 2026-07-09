import styled, { css } from "styled-components";

const RING_SIZE = "clamp(12.8rem, 12vw, 17.2rem)";

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(18rem, 0.72fr) minmax(0, 2.8fr);
  gap: clamp(3rem, 4vw, 6rem);
  align-items: start;

  padding: clamp(3.4rem, 5vw, 6rem) 0 clamp(3rem, 4vw, 4.8rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.div`
  max-width: 25rem;
`;

export const Eyebrow = styled.p`
  margin: 0 0 1.8rem;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.36em;
  line-height: 1.4;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Title = styled.h2`
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3.35rem, 4.8vw, 5.7rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.052em;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Italic = styled.em`
  font-style: italic;
  font-weight: 400;
`;

export const SummaryLink = styled.a`
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 2rem;

  margin-top: clamp(3rem, 4vw, 5rem);
  padding-bottom: 0.7rem;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  line-height: 1;
  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.text.primary};

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.text.primary},
      ${({ theme }) => theme.colors.text.primary} 68%,
      transparent 68%
    );

    opacity: 0.7;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.burgundy};
  }
`;

export const Arrow = styled.span`
  font-size: 1.15rem;
  letter-spacing: 0;
  transform: translateY(-1px);
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: start;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 4.2rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    row-gap: 3.8rem;
  }
`;

export const MetricCard = styled.article`
  position: relative;

  display: grid;
  justify-items: center;
  gap: 1.8rem;

  min-width: 0;
  padding: 0 clamp(1.3rem, 2vw, 2.7rem);

  text-align: center;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border.subtle};
  }

  @media (max-width: 1240px) {
    &:nth-child(3) {
      border-left: 0;
    }
  }

  @media (max-width: 680px) {
    padding: 0;
    border-left: 0 !important;
  }
`;

type RingProps = {
  $progress: number;
  $variant: "classic" | "ticks" | "soft";
};

export const Ring = styled.div<RingProps>`
  position: relative;

  display: grid;
  place-items: center;

  width: ${RING_SIZE};
  aspect-ratio: 1;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      ${({ theme }) => theme.colors.background.paper} 0 55%,
      transparent 56%
    ),
    conic-gradient(
      from -92deg,
      ${({ theme }) => theme.colors.accent.burgundy} 0
        ${({ $progress }) => $progress}%,
      ${({ theme }) => theme.colors.accent.goldSoft}
        ${({ $progress }) => $progress}%
        calc(${({ $progress }) => $progress}% + 8%),
      rgba(30, 27, 24, 0.1) calc(${({ $progress }) => $progress}% + 8%) 100%
    );

  box-shadow:
    inset 0 0 0 1px rgba(30, 27, 24, 0.12),
    inset 0 0 0 0.9rem rgba(252, 250, 247, 0.9),
    inset 0 0 0 1.05rem rgba(184, 135, 70, 0.14),
    0 2.4rem 5.2rem rgba(30, 27, 24, 0.05);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    pointer-events: none;
  }

  &::before {
    inset: -0.55rem;

    background: repeating-conic-gradient(
      from 0deg,
      rgba(30, 27, 24, 0.2) 0deg 0.7deg,
      transparent 0.7deg 5.5deg
    );

    opacity: 0.46;
  }

  &::after {
    inset: 1.05rem;
    border: 1px dotted rgba(30, 27, 24, 0.24);
  }

  ${({ $variant }) =>
    $variant === "ticks" &&
    css`
      &::before {
        inset: -0.8rem;

        background: repeating-conic-gradient(
          from 0deg,
          rgba(184, 135, 70, 0.42) 0deg 1deg,
          transparent 1deg 4deg
        );

        opacity: 0.62;
      }
    `}

  ${({ $variant, $progress, theme }) =>
    $variant === "soft" &&
    css`
      background:
        radial-gradient(
          circle,
          ${theme.colors.background.paper} 0 56%,
          transparent 57%
        ),
        conic-gradient(
          from -112deg,
          rgba(184, 135, 70, 0.42) 0 24%,
          ${theme.colors.accent.burgundy} 24% ${$progress}%,
          rgba(30, 27, 24, 0.09) ${$progress}% 100%
        );
    `}
`;

type MarkerProps = {
  $angle: number;
};

export const Marker = styled.span<MarkerProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;

  width: 0.62rem;
  height: 0.62rem;

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent.burgundy};

  box-shadow:
    0 0 0 0.32rem ${({ theme }) => theme.colors.background.paper},
    0 0 0 0.43rem rgba(184, 135, 70, 0.45);

  transform: rotate(${({ $angle }) => $angle}deg)
    translate(calc(${RING_SIZE} / 2))
    rotate(calc(${({ $angle }) => $angle}deg * -1));
`;

export const RingContent = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  justify-items: center;
  gap: 0.8rem;

  max-width: 72%;
`;

export const MetricTitle = styled.h3`
  display: grid;
  gap: 0.08em;

  margin: 0;

  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 2.45vw, 3.45rem);
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: -0.048em;

  color: ${({ theme }) => theme.colors.accent.burgundy};

  span {
    display: block;
  }
`;

export const MetricLabel = styled.p`
  max-width: 10rem;
  margin: 0;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.26em;
  line-height: 1.55;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  max-width: 18rem;
  margin: 0 auto;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1.02rem, 0.9vw, 1.18rem);
  font-weight: 400;
  line-height: 1.5;

  color: ${({ theme }) => theme.colors.text.secondary};
`;
