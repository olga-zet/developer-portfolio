import styled from "styled-components";

export const About = styled.section`
  position: relative;

  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  min-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});

  margin: 0 auto;

  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(14rem, 0.58fr) minmax(20rem, 0.92fr) minmax(
      22rem,
      1fr
    );
  grid-template-areas:
    "intro image content"
    "intro image quote";
  align-items: start;
  gap: clamp(2rem, 4vw, 5rem);

  @media (max-width: 1180px) {
    grid-template-columns: minmax(16rem, 0.8fr) minmax(22rem, 1fr);
    grid-template-areas:
      "intro content"
      "image content"
      "image quote";
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "intro"
      "image"
      "content"
      "quote";
  }
`;

export const AboutIntro = styled.div`
  grid-area: intro;
  min-width: 0;
`;

export const AboutKicker = styled.p`
  margin: 0 0 1.1rem;

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const SectionTitle = styled.h2`
  margin: 0;

  display: flex;
  flex-direction: column;

  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(5rem, 8.5vw, 8.3rem);
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.045em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.primary};

  span {
    display: block;
  }

  @media (max-width: 860px) {
    font-size: clamp(4.5rem, 17vw, 7rem);
  }
`;

export const AboutTextBlock = styled.div`
  max-width: 18.5rem;
  margin-top: clamp(1.6rem, 3vw, 3rem);
`;

export const TextLead = styled.p`
  margin: 0;

  font-size: clamp(1rem, 1.2vw, 1.12rem);
  font-weight: 800;
  line-height: 1.45;
  letter-spacing: -0.035em;

  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const TextParagraph = styled.p`
  margin: 1.2rem 0 0;

  font-size: clamp(0.92rem, 1vw, 1rem);
  font-weight: 500;
  line-height: 1.72;
  letter-spacing: -0.025em;

  color: ${({ theme }) => theme.colors.text.secondary};

  &:first-child {
    margin-top: 0;
  }
`;

export const AboutImageFrame = styled.div`
  grid-area: image;
  position: relative;

  padding: clamp(1.2rem, 2vw, 1.7rem);

  display: flex;
  align-items: flex-end;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      transparent 49.8%,
      ${({ theme }) => theme.colors.accent.pink} 49.8%,
      ${({ theme }) => theme.colors.accent.pink} 50.2%,
      transparent 50.2%,
      transparent 100%
    ),
    ${({ theme }) => theme.colors.background.surface};

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: clamp(2rem, 4vw, 4.5rem);
    top: clamp(3rem, 6vw, 6rem);

    width: clamp(8rem, 18vw, 18rem);
    height: clamp(10rem, 22vw, 22rem);

    background-image: radial-gradient(
      ${({ theme }) => theme.colors.accent.pink} 1px,
      transparent 1px
    );
    background-size: 0.7rem 0.7rem;
    opacity: 0.7;
  }

  @media (max-width: 860px) {
    min-height: 34rem;
  }
`;

export const ImageBadge = styled.span`
  position: absolute;
  top: 1.15rem;
  left: 1.15rem;
  z-index: 2;

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const AboutImage = styled.img`
  position: relative;
  z-index: 1;

  width: min(120%, 42rem);
  max-width: none;
  max-height: 100%;

  object-fit: contain;
  object-position: bottom center;

  transform: translateY(1.8rem);

  @media (max-width: 860px) {
    width: min(105%, 36rem);
  }
`;

export const AboutImageLabel = styled.span<{ $side: "left" | "right" }>`
  position: absolute;
  z-index: 2;

  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 1rem;" : "right: 1rem;")}

  transform: translateY(-50%)
  rotate(${({ $side }) => ($side === "left" ? "-90deg" : "90deg")});

  transform-origin: center;

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.muted};
`;

export const AboutContent = styled.div`
  grid-area: content;

  display: grid;
  gap: clamp(2rem, 3.5vw, 3.8rem);
`;

export const TextColumn = styled.div`
  min-width: 0;
`;

export const SectionHeader = styled.h3`
  margin: 0 0 1.4rem;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.4rem;

  font-size: clamp(1.25rem, 1.5vw, 1.65rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.055em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const ContentLine = styled.span`
  display: block;
  height: 1px;
  background: ${({ theme }) => theme.colors.border.default};
`;

export const CareList = styled.ul`
  margin: 0;
  padding: 0;

  display: grid;
  gap: 1rem;

  list-style: none;
`;

export const CareItem = styled.li`
  display: grid;
  grid-template-columns: 1.4rem 1fr;
  align-items: center;
  gap: 0.9rem;

  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: -0.025em;

  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;
