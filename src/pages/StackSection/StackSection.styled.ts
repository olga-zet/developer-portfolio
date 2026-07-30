import styled, { css } from "styled-components";

const upperText = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Section = styled.section`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sectionY}
    ${({ theme }) => theme.spacing.pageX};
  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns:
    minmax(18rem, 0.7fr)
    minmax(34rem, 1.6fr);
  grid-template-areas:
    "intro skills"
    "approach approach";
  gap: clamp(1.5rem, 3vw, 3rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: minmax(16rem, 0.75fr) minmax(0, 1.4fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "intro"
      "skills"
      "approach";
  }
`;
export const Intro = styled.div`
  grid-area: intro;
  align-self: start;
  min-height: clamp(34rem, 48vw, 46rem);
  display: flex;
  flex-direction: column;

  @media (max-width: 860px) {
    min-height: auto;
  }

  h2 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(4.8rem, 8vw, 8.6rem);
    line-height: 0.9;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Badge = styled.p`
  margin: 0 0 1.5rem;
  ${upperText};
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const Lead = styled.p`
  max-width: 24rem;
  margin: clamp(1.5rem, 3vw, 2.2rem) 0 0;
  font-size: clamp(1rem, 1.2vw, 1.12rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: "";
    display: block;
    width: 3rem;
    height: 0.18rem;
    margin-bottom: 1.8rem;
    background: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const QuoteBox = styled.aside`
  margin-top: auto;
  padding-top: clamp(3rem, 6vw, 6rem);
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 860px) {
    margin-top: 0;
    padding-top: 2rem;
  }
`;

export const QuoteIcon = styled.div`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const QuoteText = styled.p`
  max-width: 21rem;
  margin: 0;
  font-size: clamp(0.96rem, 1.05vw, 1.05rem);
  line-height: 1.65;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const QuoteAuthor = styled.p`
  margin: 1.4rem 0 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SkillGrid = styled.div`
  grid-area: skills;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.9rem, 1.4vw, 1.2rem);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.article`
  min-height: 14.2rem;
  padding: clamp(1.2rem, 1.8vw, 1.5rem);
  display: flex;
  flex-direction: column;
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.background.surface} 82%,
    transparent
  );
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-0.16rem);
    border-color: ${({ theme }) => theme.colors.accent.pink};
    box-shadow: 0 1.2rem 2.5rem
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.shadow.soft} 22%,
        transparent
      );
  }

  &:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    min-height: 12rem;
  }

  @media (max-width: 640px) {
    &:last-child:nth-child(odd) {
      grid-column: auto;
    }
  }
`;

export const CardHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    ${upperText};
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const CardIcon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.text.primary};
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(1rem, 1.2vw, 1.15rem);
  font-weight: 850;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardLabel = styled.p`
  margin: 0.2rem 0 0;
  ${upperText};
  font-size: 0.58rem;
  color: ${({ theme }) => theme.colors.text.muted};
`;

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
`;

export const SkillItem = styled.li`
  padding: 0.42rem 0.68rem;
  font-size: 0.78rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.surfaceSoft};
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const Meter = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.3rem;
  margin-top: auto;
  padding-top: 1.4rem;
`;

export const MeterBlock = styled.span<{ $active?: boolean }>`
  height: 0.34rem;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accent.pink : theme.colors.background.muted};
`;

export const Approach = styled.div`
  grid-area: approach;
  margin-top: clamp(1rem, 2vw, 1.4rem);
  padding: clamp(1.2rem, 2vw, 1.8rem);
  display: grid;
  grid-template-columns: minmax(12rem, 0.42fr) minmax(0, 1.58fr);
  gap: clamp(1.5rem, 3vw, 3rem);
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.background.surface} 82%,
    transparent
  );

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ApproachIntro = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: 980px) {
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
    padding-bottom: 1rem;
  }
`;

export const ApproachTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.1rem, 3.8vw, 3.8rem);
  line-height: 0.95;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  &::after {
    content: " —";
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const ApproachList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ApproachCard = styled.article`
  padding: 0 1.25rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border.subtle};

  &:first-child {
    border-left: 0;
  }

  @media (max-width: 640px) {
    padding: 1.25rem 0;
    border-left: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};

    &:first-child {
      border-top: 0;
    }
  }
`;

export const ApproachHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ApproachNumber = styled.span`
  ${upperText};
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const ApproachIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;

export const ApproachContent = styled.div`
  h3 {
    margin: 0 0 0.55rem;
    ${upperText};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
