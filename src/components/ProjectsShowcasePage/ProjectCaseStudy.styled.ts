import styled from "styled-components";

const breakpoint = {
  tablet: "1024px",
  mobile: "720px",
};

export const CaseStudyMain = styled.main`
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
`;

export const ContentContainer = styled.div`
  width: min(100% - 48px, 1440px);
  margin-inline: auto;

  @media (max-width: ${breakpoint.mobile}) {
    width: min(100% - 32px, 1440px);
  }
`;

export const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  padding: clamp(56px, 7vw, 112px) 0 48px;
  display: flex;
  align-items: center;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(460px, 1.22fr);
  gap: clamp(48px, 8vw, 132px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 24px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(5rem, 9.6vw, 10rem);
  font-weight: 900;
  line-height: 0.76;
  letter-spacing: -0.055em;
  text-transform: uppercase;
`;

export const HeroDescription = styled.p`
  max-width: 530px;
  margin: 42px 0 0;
  font-size: clamp(1rem, 1.3vw, 1.25rem);
  line-height: 1.65;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
`;

const ButtonBase = styled.a`
  min-height: 52px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.055em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    transform 180ms ease,
    color 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 4px;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  border-color: ${({ theme }) => theme.colors.accent.pink};
  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.pink};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.background.page};
    background: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const HeroStack = styled.ul`
  margin: 38px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const HeroStackItem = styled.li`
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;

  &:not(:last-child) {
    border-right: 0;
  }

  @media (max-width: ${breakpoint.mobile}) {
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.border.default};
    }
  }
`;

export const HeroImageFrame = styled.div`
  position: relative;
  min-height: 570px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 9%;
    left: -4%;
    width: 130px;
    height: 130px;
    z-index: 0;
    background-image: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.accent.pink} 1.4px,
      transparent 1.5px
    );
    background-size: 12px 12px;
    opacity: 0.55;
  }

  @media (max-width: ${breakpoint.tablet}) {
    min-height: auto;
    margin-top: 20px;
  }
`;

export const HeroImage = styled.img`
  position: relative;
  width: 100%;
  max-height: 650px;
  z-index: 1;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 35px 30px rgb(0 0 0 / 0.22));
`;

export const HeroImageMobileFrame = styled.div`
  position: absolute;
  right: -2%;
  bottom: 5%;
  width: clamp(130px, 18vw, 220px);
  z-index: 2;
`;

export const HeroImageMobile = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 24px 20px rgb(0 0 0 / 0.28));
`;

export const HeroImageDecoration = styled.div`
  position: absolute;
  right: -14%;
  bottom: -10%;
  width: 70%;
  height: 34%;
  z-index: 0;
  background: ${({ theme }) => theme.colors.text.primary};
  clip-path: polygon(
    0 82%,
    13% 52%,
    26% 60%,
    37% 20%,
    49% 49%,
    65% 8%,
    78% 53%,
    100% 30%,
    100% 100%,
    0 100%
  );
  opacity: 0.96;

  @media (max-width: ${breakpoint.tablet}) {
    right: -20%;
    bottom: -6%;
  }
`;

export const HeroMeta = styled.dl`
  margin: 54px 0 0;
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};

  @media (max-width: ${breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

export const HeroMetaItem = styled.div`
  min-height: 82px;
  padding: 0 30px;
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: 0;
  }

  @media (max-width: ${breakpoint.mobile}) {
    min-height: auto;
    padding: 0 0 20px;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
`;

export const HeroMetaLabel = styled.dt`
  margin-bottom: 11px;
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

export const HeroMetaValue = styled.dd`
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const SectionDivider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: 0;
  background: ${({ theme }) => theme.colors.border.default};
`;

export const SectionHeader = styled.header`
  margin-bottom: clamp(32px, 4vw, 60px);
`;

export const SectionIndex = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3rem, 5.8vw, 6.8rem);
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.045em;
  text-transform: uppercase;
`;

export const OverviewSection = styled.section`
  padding: clamp(78px, 9vw, 150px) 0;
`;

export const OverviewHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.7fr);
  gap: clamp(48px, 10vw, 180px);
  align-items: end;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const OverviewContent = styled.p`
  max-width: 560px;
  margin: 0;
  font-size: clamp(1rem, 1.25vw, 1.2rem);
  line-height: 1.75;
`;

export const OverviewGallery = styled.div`
  margin-top: clamp(48px, 6vw, 92px);
  display: grid;
  grid-template-columns: 1.15fr 0.9fr 0.95fr;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #080808;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const OverviewGalleryImage = styled.img`
  width: 100%;
  height: clamp(280px, 31vw, 480px);
  display: block;
  object-fit: cover;

  &:not(:last-child) {
    border-right: 1px solid rgb(255 255 255 / 0.16);
  }

  @media (max-width: ${breakpoint.tablet}) {
    height: auto;
    aspect-ratio: 16 / 9;

    &:not(:last-child) {
      border-right: 0;
      border-bottom: 1px solid rgb(255 255 255 / 0.16);
    }
  }
`;

export const ChallengeSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;
`;

export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(48px, 8vw, 132px);

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ChallengeColumn = styled.article`
  padding-left: 28px;
  border-left: 1px solid ${({ theme }) => theme.colors.border.default};

  ${SectionTitle} {
    font-size: clamp(2.8rem, 4vw, 5.1rem);
  }

  p {
    max-width: 570px;
    margin: 28px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
    line-height: 1.75;
  }
`;

export const ChallengeFlow = styled.div`
  margin-top: clamp(64px, 8vw, 118px);
  display: grid;
  grid-template-columns:
    minmax(120px, 1fr) auto
    minmax(120px, 1fr) auto
    minmax(120px, 1fr) auto
    minmax(120px, 1fr);
  align-items: center;

  @media (max-width: ${breakpoint.mobile}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ChallengeFlowItem = styled.div`
  min-height: 112px;
  display: grid;
  place-items: center;
  align-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const ChallengeFlowNumber = styled.span`
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
`;

export const ChallengeFlowLabel = styled.span`
  margin-top: 11px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

export const ChallengeFlowArrow = styled.div`
  width: clamp(42px, 6vw, 90px);
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: ${breakpoint.mobile}) {
    width: auto;
    transform: rotate(90deg);
  }
`;

export const FeaturesSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  gap: clamp(80px, 10vw, 160px);
`;

export const FeatureContent = styled.div`
  position: relative;
`;

export const FeatureImageFrame = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #050505;

  &::after {
    content: "";
    position: absolute;
    inset: 14px;
    z-index: 1;
    border: 1px solid rgb(255 255 255 / 0.12);
    pointer-events: none;
  }
`;

export const FeatureArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(230px, 0.48fr) minmax(0, 1.2fr);
  gap: clamp(42px, 8vw, 130px);
  align-items: center;

  &:nth-child(even) {
    grid-template-columns: minmax(0, 1.2fr) minmax(230px, 0.48fr);

    ${FeatureContent} {
      grid-column: 2;
      grid-row: 1;
    }

    ${FeatureImageFrame} {
      grid-column: 1;
      grid-row: 1;
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;

    &:nth-child(even) {
      grid-template-columns: 1fr;

      ${FeatureContent},
      ${FeatureImageFrame} {
        grid-column: auto;
        grid-row: auto;
      }
    }
  }
`;

export const FeatureNumber = styled.span`
  display: block;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.5rem, 5vw, 6.5rem);
  font-weight: 900;
  line-height: 0.8;
  opacity: 0.22;
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 4vw, 4.8rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.035em;
  text-transform: uppercase;
`;

export const FeatureDescription = styled.p`
  max-width: 460px;
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;
`;

export const FeatureImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);

  ${FeatureImageFrame}:hover & {
    transform: scale(1.025);
  }
`;

export const DarkSection = styled.section`
  padding: clamp(78px, 9vw, 144px) 0;
  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.black};

  ${SectionIndex} {
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const DarkSectionGrid = styled.div`
  margin-top: clamp(42px, 6vw, 80px);
  display: grid;
  grid-template-columns: 1.1fr repeat(2, minmax(220px, 1fr));
  border-top: 1px solid rgb(255 255 255 / 0.2);
  border-left: 1px solid rgb(255 255 255 / 0.2);

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TechnicalHeader = styled.h2`
  min-height: 290px;
  margin: 0;
  padding: clamp(28px, 4vw, 58px);
  display: flex;
  align-items: flex-start;
  border-right: 1px solid rgb(255 255 255 / 0.2);
  border-bottom: 1px solid rgb(255 255 255 / 0.2);
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.5rem, 5.8vw, 6.6rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: -0.045em;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.tablet}) {
    grid-column: 1 / -1;
    min-height: 220px;
  }
`;

export const DecisionCard = styled.article`
  min-height: 290px;
  padding: clamp(28px, 3.5vw, 50px);
  border-right: 1px solid rgb(255 255 255 / 0.2);
  border-bottom: 1px solid rgb(255 255 255 / 0.2);
`;

export const DecisionHeader = styled.header`
  display: grid;
  gap: 24px;
`;

export const DecisionIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.pink};
  border: 1px solid ${({ theme }) => theme.colors.accent.pink};
`;

export const DecisionTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.055em;
  text-transform: uppercase;
`;

export const DecisionDescription = styled.p`
  margin: 26px 0 0;
  color: rgb(255 255 255 / 0.64);
  font-size: 0.9rem;
  line-height: 1.7;
`;

export const ProcessSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;
`;

export const ProcessContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: clamp(28px, 5vw, 80px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ProcessCard = styled.article`
  p {
    max-width: 490px;
    margin: 18px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.7;
  }
`;

export const ProcessLabel = styled.span`
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ProcessTitle = styled.h3`
  margin: 14px 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.6rem, 4vw, 4.6rem);
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
`;

export const ProcessImageFrame = styled.div`
  margin-top: 38px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #050505;
`;

export const ProcessImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  display: block;
  object-fit: cover;
`;

export const ProcessArrow = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.white};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent.pink};

  @media (max-width: ${breakpoint.tablet}) {
    margin-inline: auto;
    transform: rotate(90deg);
  }
`;

export const ResultSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;
`;

export const ResultContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.7fr);
  gap: clamp(48px, 8vw, 130px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.pink};

  @media (max-width: ${breakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatItem = styled.div`
  min-height: 180px;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-right: 1px solid rgb(255 255 255 / 0.32);

  &:last-child {
    border-right: 0;
  }

  @media (max-width: ${breakpoint.mobile}) {
    min-height: 148px;
    border-bottom: 1px solid rgb(255 255 255 / 0.32);
  }
`;

export const StatValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.4rem, 5vw, 6rem);
  font-weight: 900;
  line-height: 0.8;
`;

export const StatLabel = styled.span`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
`;

export const ResultDescription = styled.p`
  max-width: 520px;
  margin: 0;
  padding-right: clamp(0px, 8vw, 120px);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: ${breakpoint.tablet}) {
    padding-right: 0;
  }
`;

export const ResultIllustration = styled.img`
  position: absolute;
  right: -2%;
  bottom: -42%;
  width: clamp(130px, 18vw, 260px);
  max-height: 240px;
  object-fit: contain;
  pointer-events: none;

  @media (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`;

export const NavigationSection = styled.nav`
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  border-bottom: 10px solid ${({ theme }) => theme.colors.accent.pink};

  ${ContentContainer} {
    min-height: 156px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    ${ContentContainer} {
      min-height: 180px;
      align-items: stretch;
    }
  }
`;

export const NavigationLinkLabel = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const NavigationLinkTitle = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.3rem, 2vw, 2rem);
  line-height: 1;
  text-transform: uppercase;
  transition: color 180ms ease;
`;

export const NavigationLink = styled.a`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  &[data-align="right"] {
    text-align: right;
  }

  &:hover ${NavigationLinkTitle} {
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 6px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    width: 50%;
  }
`;
export const ResultCopy = styled.div`
  display: grid;
  gap: 20px;
`;
