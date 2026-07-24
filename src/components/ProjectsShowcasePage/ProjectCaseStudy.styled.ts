import styled from "styled-components";

const breakpoint = {
  tablet: "1024px",
  mobile: "720px",
  smallMobile: "480px",
};

export const CaseStudyMain = styled.main`
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
`;

export const ContentContainer = styled.div`
  width: min(calc(100% - 48px), 1440px);
  margin-inline: auto;

  @media (max-width: ${breakpoint.mobile}) {
    width: min(calc(100% - 28px), 1440px);
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    width: min(calc(100% - 22px), 1440px);
  }
`;

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */

export const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  padding: clamp(56px, 7vw, 112px) 0 48px;
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    min-height: auto;
    padding: 64px 0 48px;
    align-items: flex-start;
  }

  @media (max-width: ${breakpoint.mobile}) {
    padding: 44px 0 36px;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(460px, 1.22fr);
  gap: clamp(48px, 8vw, 132px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 52px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    gap: 36px;
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

  @media (max-width: ${breakpoint.mobile}) {
    margin-bottom: 20px;
    font-size: 0.66rem;
  }
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(5rem, 9.6vw, 10rem);
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(4rem, 20vw, 6rem);
    line-height: 0.88;
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    font-size: clamp(3.3rem, 19vw, 4.7rem);
  }
`;

export const HeroDescription = styled.p`
  max-width: 530px;
  margin: 42px 0 0;
  font-size: clamp(1rem, 1.3vw, 1.25rem);
  line-height: 1.65;

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 26px;
    font-size: 0.96rem;
    line-height: 1.7;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;

  @media (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    align-items: stretch;
    margin-top: 28px;

    a {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const ButtonBase = styled.a`
  box-sizing: border-box;
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
  letter-spacing: 0.015em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    transform 180ms ease,
    color 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  svg {
    flex: 0 0 auto;
  }

  &:hover {
    transform: translateY(-3px);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 4px;
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    min-height: 50px;
    padding-inline: 18px;
    gap: 16px;
    font-size: 0.68rem;
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
  gap: 7px;
  list-style: none;

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 28px;
  }
`;

export const HeroStackItem = styled.li`
  padding: 9px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 8px 10px;
    font-size: 0.64rem;
  }
`;

export const HeroImageFrame = styled.div`
  position: relative;
  min-width: 0;
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
    margin-top: 4px;
    padding-bottom: 44px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    padding-bottom: 34px;

    &::before {
      width: 88px;
      height: 88px;
      background-size: 10px 10px;
    }
  }
`;

export const HeroImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
  max-height: 650px;
  z-index: 1;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 35px 30px rgb(0 0 0 / 0.22));

  @media (max-width: ${breakpoint.mobile}) {
    filter: drop-shadow(0 22px 22px rgb(0 0 0 / 0.18));
  }
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

  @media (max-width: ${breakpoint.mobile}) {
    right: -22%;
    bottom: -2%;
    height: 27%;
  }
`;

export const HeroMeta = styled.dl`
  margin: 54px 0 0;
  padding-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 42px;
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }
`;

export const HeroMetaItem = styled.div`
  min-width: 0;
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
  overflow-wrap: anywhere;
`;

/* -------------------------------------------------------------------------- */
/*                               COMMON SECTION                               */
/* -------------------------------------------------------------------------- */

export const SectionDivider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: 0;
  background: ${({ theme }) => theme.colors.border.default};
`;

export const SectionHeader = styled.header`
  margin-bottom: clamp(32px, 4vw, 60px);

  @media (max-width: ${breakpoint.mobile}) {
    margin-bottom: 28px;
  }
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
  letter-spacing: -0.015em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(2.55rem, 13vw, 4rem);
    line-height: 0.9;
  }
`;

/* -------------------------------------------------------------------------- */
/*                                  OVERVIEW                                  */
/* -------------------------------------------------------------------------- */

export const OverviewSection = styled.section`
  padding: clamp(78px, 9vw, 150px) 0;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
  }
`;

export const OverviewHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(320px, 0.7fr);
  gap: clamp(48px, 10vw, 180px);
  align-items: end;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    gap: 24px;
  }
`;

export const OverviewContent = styled.p`
  max-width: 560px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: clamp(1rem, 1.25vw, 1.2rem);
  line-height: 1.75;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: 0.96rem;
    line-height: 1.7;
  }
`;

export const OverviewGallery = styled.div`
  margin-top: clamp(48px, 6vw, 92px);
  display: grid;
  grid-template-columns: 1.15fr 0.9fr 0.95fr;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #080808;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
  }

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 38px;
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
    aspect-ratio: 16 / 10;
    object-fit: contain;

    &:not(:last-child) {
      border-right: 0;
      border-bottom: 1px solid rgb(255 255 255 / 0.16);
    }
  }

  @media (max-width: ${breakpoint.mobile}) {
    aspect-ratio: 4 / 3;
  }
`;

/* -------------------------------------------------------------------------- */
/*                            CHALLENGE & SOLUTION                            */
/* -------------------------------------------------------------------------- */

export const ChallengeSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
  }
`;

export const ChallengeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(48px, 8vw, 132px);

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 56px;
  }

  @media (max-width: ${breakpoint.mobile}) {
    gap: 42px;
  }
`;

export const ChallengeColumn = styled.article`
  min-width: 0;
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

  @media (max-width: ${breakpoint.mobile}) {
    padding-left: 18px;

    ${SectionTitle} {
      font-size: clamp(2.2rem, 11vw, 3.4rem);
      line-height: 0.94;
    }

    p {
      margin-top: 22px;
      font-size: 0.94rem;
      line-height: 1.7;
    }
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
    margin-top: 54px;
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`;

export const ChallengeFlowItem = styled.div`
  min-width: 0;
  min-height: 112px;
  padding: 18px;
  display: grid;
  place-items: center;
  align-content: center;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.border.default};

  @media (max-width: ${breakpoint.mobile}) {
    min-height: 100px;
  }
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
  line-height: 1.4;
  letter-spacing: 0.035em;
  overflow-wrap: anywhere;
  text-transform: uppercase;
`;

export const ChallengeFlowArrow = styled.div`
  width: clamp(42px, 6vw, 90px);
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    flex: 0 0 auto;
  }

  @media (max-width: ${breakpoint.mobile}) {
    width: auto;
    transform: rotate(90deg);
  }
`;

/* -------------------------------------------------------------------------- */
/*                                  FEATURES                                  */
/* -------------------------------------------------------------------------- */

export const FeaturesSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  gap: clamp(80px, 10vw, 160px);

  @media (max-width: ${breakpoint.mobile}) {
    gap: 82px;
  }
`;

export const FeatureContent = styled.div`
  position: relative;
  min-width: 0;
`;

export const FeatureImageFrame = styled.div`
  position: relative;
  min-width: 0;
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

  @media (max-width: ${breakpoint.mobile}) {
    &::after {
      inset: 8px;
    }
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
    grid-template-columns: minmax(0, 1fr);
    gap: 38px;

    &:nth-child(even) {
      grid-template-columns: minmax(0, 1fr);

      ${FeatureContent},
      ${FeatureImageFrame} {
        grid-column: auto;
        grid-row: auto;
      }
    }
  }

  @media (max-width: ${breakpoint.mobile}) {
    gap: 28px;
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

  @media (max-width: ${breakpoint.mobile}) {
    font-size: 3.7rem;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.5rem, 4vw, 4.8rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(2rem, 10vw, 3rem);
    line-height: 0.94;
  }
`;

export const FeatureDescription = styled.p`
  max-width: 460px;
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7;

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 18px;
    font-size: 0.94rem;
  }
`;

export const FeatureImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);

  ${FeatureImageFrame}:hover & {
    transform: scale(1.025);
  }

  @media (max-width: ${breakpoint.mobile}) {
    aspect-ratio: 4 / 3;
    object-fit: contain;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    ${FeatureImageFrame}:hover & {
      transform: none;
    }
  }
`;

/* -------------------------------------------------------------------------- */
/*                           TECHNICAL DECISIONS                              */
/* -------------------------------------------------------------------------- */

export const DarkSection = styled.section`
  padding: clamp(78px, 9vw, 144px) 0;
  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.black};

  ${SectionIndex} {
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
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
    margin-top: 38px;
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const TechnicalHeader = styled.h2`
  min-width: 0;
  min-height: 290px;
  margin: 0;
  padding: clamp(28px, 4vw, 58px);
  grid-row: span 2;
  display: flex;
  align-items: flex-start;
  border-right: 1px solid rgb(255 255 255 / 0.2);
  border-bottom: 1px solid rgb(255 255 255 / 0.2);
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.5rem, 5.8vw, 6.6rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.tablet}) {
    min-height: 220px;
    grid-column: 1 / -1;
    grid-row: auto;
  }

  @media (max-width: ${breakpoint.mobile}) {
    min-height: 170px;
    padding: 30px 24px;
    font-size: clamp(3rem, 15vw, 4.5rem);
  }
`;

export const DecisionCard = styled.article`
  min-width: 0;
  min-height: 290px;
  padding: clamp(28px, 3.5vw, 50px);
  border-right: 1px solid rgb(255 255 255 / 0.2);
  border-bottom: 1px solid rgb(255 255 255 / 0.2);

  @media (max-width: ${breakpoint.mobile}) {
    min-height: auto;
    padding: 30px 24px;
  }
`;

export const DecisionHeader = styled.header`
  display: grid;
  gap: 24px;
`;

export const DecisionIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  flex: 0 0 auto;
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
  letter-spacing: 0.035em;
  overflow-wrap: anywhere;
  text-transform: uppercase;
`;

export const DecisionDescription = styled.p`
  margin: 26px 0 0;
  color: rgb(255 255 255 / 0.64);
  font-size: 0.9rem;
  line-height: 1.7;

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 20px;
  }
`;

/* -------------------------------------------------------------------------- */
/*                                  PROCESS                                   */
/* -------------------------------------------------------------------------- */

export const ProcessSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
  }
`;

export const ProcessContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  gap: clamp(28px, 5vw, 80px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 44px;
  }
`;

export const ProcessCard = styled.article`
  min-width: 0;

  p {
    max-width: 490px;
    margin: 18px 0 0;
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.7;
  }

  @media (max-width: ${breakpoint.mobile}) {
    p {
      font-size: 0.94rem;
    }
  }
`;

export const ProcessLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.accent.pink};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ProcessTitle = styled.h3`
  margin: 14px 0 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.6rem, 4vw, 4.6rem);
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(2.2rem, 11vw, 3.2rem);
  }
`;

export const ProcessImageFrame = styled.div`
  margin-top: 38px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: #050505;

  @media (max-width: ${breakpoint.mobile}) {
    margin-top: 28px;
  }
`;

export const ProcessImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  display: block;
  object-fit: cover;

  @media (max-width: ${breakpoint.mobile}) {
    aspect-ratio: 4 / 3;
    object-fit: contain;
  }
`;

export const ProcessArrow = styled.div`
  width: 52px;
  height: 52px;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent.white};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent.pink};

  @media (max-width: ${breakpoint.tablet}) {
    margin-inline: auto;
    transform: rotate(90deg);
  }
`;

/* -------------------------------------------------------------------------- */
/*                                   RESULT                                   */
/* -------------------------------------------------------------------------- */

export const ResultSection = styled.section`
  padding: clamp(78px, 9vw, 145px) 0;

  @media (max-width: ${breakpoint.mobile}) {
    padding: 68px 0;
  }
`;

export const ResultContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.7fr);
  gap: clamp(48px, 8vw, 130px);
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: minmax(0, 1fr);
    gap: 44px;
  }
`;

export const ResultStats = styled.div`
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  color: ${({ theme }) => theme.colors.accent.white};
  background: ${({ theme }) => theme.colors.accent.pink};

  @media (max-width: ${breakpoint.mobile}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StatItem = styled.div`
  min-width: 0;
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
    min-height: 142px;
    padding: 22px 18px;
    border-bottom: 1px solid rgb(255 255 255 / 0.32);

    &:nth-child(2n) {
      border-right: 0;
    }

    &:nth-last-child(-n + 2) {
      border-bottom: 0;
    }
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    min-height: 132px;
    padding: 20px 14px;
  }
`;

export const StatValue = styled.strong`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.4rem, 5vw, 6rem);
  font-weight: 900;
  line-height: 0.8;
  overflow-wrap: anywhere;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(3rem, 14vw, 4.5rem);
  }
`;

export const StatLabel = styled.span`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.66rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0.07em;
  overflow-wrap: anywhere;
  text-transform: uppercase;

  @media (max-width: ${breakpoint.smallMobile}) {
    font-size: 0.58rem;
  }
`;

export const ResultCopy = styled.div`
  min-width: 0;
  display: grid;
  gap: 20px;
`;

export const ResultDescription = styled.p`
  max-width: 520px;
  margin: 0;
  padding-right: clamp(0px, 8vw, 120px);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: ${breakpoint.tablet}) {
    max-width: 680px;
    padding-right: 0;
  }

  @media (max-width: ${breakpoint.mobile}) {
    font-size: 0.94rem;
    line-height: 1.7;
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

/* -------------------------------------------------------------------------- */
/*                                NAVIGATION                                  */
/* -------------------------------------------------------------------------- */

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
      min-height: 150px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
    }
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    ${ContentContainer} {
      min-height: auto;
      padding: 28px 0;
      grid-template-columns: minmax(0, 1fr);
      gap: 20px;
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

  @media (max-width: ${breakpoint.smallMobile}) {
    font-size: 0.6rem;
  }
`;

export const NavigationLinkTitle = styled.strong`
  display: block;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.3rem, 2vw, 2rem);
  font-weight: 900;
  line-height: 1;
  overflow-wrap: anywhere;
  text-transform: uppercase;
  transition: color 180ms ease;

  @media (max-width: ${breakpoint.mobile}) {
    font-size: clamp(1rem, 5vw, 1.45rem);
  }
`;

export const NavigationLink = styled.a`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;

  > span {
    min-width: 0;
  }

  svg {
    flex: 0 0 auto;
  }

  &[data-align="right"] {
    justify-content: flex-end;
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
    width: 100%;
    gap: 9px;
  }

  @media (max-width: ${breakpoint.smallMobile}) {
    padding-block: 6px;

    & + & {
      padding-top: 24px;
      border-top: 1px solid ${({ theme }) => theme.colors.border.default};
    }

    &[data-align="right"] {
      justify-content: flex-start;
      text-align: left;
    }
  }
`;
export const ProcessCategory = styled.span`
  display: block;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ChallengeFlowIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  height: 3.5rem;

  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
