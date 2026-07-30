import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
`;

export const Content = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  padding: clamp(4rem, 7vw, 7rem) ${({ theme }) => theme.spacing.pageX}
    clamp(3rem, 6vw, 5rem);
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.55fr);
  gap: clamp(2rem, 6vw, 7rem);
  align-items: end;
  margin-bottom: clamp(3rem, 6vw, 5.5rem);

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const Intro = styled.div`
  min-width: 0;
`;

export const Kicker = styled.p`
  margin: 0 0 clamp(1rem, 2vw, 1.4rem);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.75rem, 1vw, 0.9rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.accent};
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4.5rem, 13vw, 12.5rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 560px) {
    font-size: clamp(3.6rem, 21vw, 6rem);
  }
`;

export const TopText = styled.div`
  max-width: 28rem;
  padding-bottom: clamp(0.35rem, 1vw, 0.8rem);

  &::before {
    content: "";
    display: block;
    width: 2.8rem;
    height: 0.22rem;
    margin-bottom: 1.4rem;
    background: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const Lead = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.96rem, 1.05vw, 1.1rem);
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Layout = styled.div`
  width: 100%;
`;

export const Timeline = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
`;

export const TimelineItem = styled.article`
  display: grid;
  grid-template-columns:
    minmax(6.5rem, 0.16fr)
    minmax(5rem, 0.08fr)
    minmax(0, 1fr)
    minmax(12rem, 0.32fr)
    1.25rem;
  grid-template-areas: "period number content tags arrow";
  gap: clamp(1.25rem, 2.6vw, 2.75rem);
  align-items: start;
  padding: clamp(2rem, 4vw, 3.4rem) 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  > svg {
    grid-area: arrow;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.45rem;
    color: ${({ theme }) => theme.colors.text.accent};
    stroke-width: 1.8;
    transition: transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover > svg {
    transform: translate(0.2rem, -0.2rem);
  }

  @media (max-width: 1040px) {
    grid-template-columns:
      6.5rem
      4.5rem
      minmax(0, 1fr)
      1.25rem;
    grid-template-areas:
      "period number content arrow"
      ". . tags .";
    row-gap: 1.25rem;
  }

  @media (max-width: 680px) {
    grid-template-columns: 4.2rem minmax(0, 1fr) 1.2rem;
    grid-template-areas:
      "period period arrow"
      "number content content"
      ". tags tags";
    column-gap: 1rem;
    row-gap: 1rem;
    padding: 2rem 0;
  }
`;

export const Number = styled.p`
  grid-area: number;
  height: 100%;
  min-height: clamp(5.5rem, 7vw, 7rem);
  margin: 0;
  padding-right: clamp(1rem, 2vw, 1.8rem);
  border-right: 1px solid ${({ theme }) => theme.colors.border.default};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(3.5rem, 5vw, 5.5rem);
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.text.accent};

  @media (max-width: 1040px) {
    font-size: clamp(3.2rem, 6vw, 4.5rem);
  }

  @media (max-width: 680px) {
    min-height: 0;
    padding-right: 0;
    border-right: 0;
    font-size: clamp(3rem, 14vw, 4rem);
  }
`;

export const TimelineText = styled.div`
  grid-area: content;
  min-width: 0;
`;

export const Role = styled.h3`
  max-width: 56rem;
  margin: 0 0 0.7rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2rem, 3.25vw, 3.5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-wrap: balance;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 680px) {
    font-size: clamp(2rem, 9vw, 2.8rem);
  }
`;

export const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.84rem;
  font-weight: 800;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.primary};

  span {
    color: ${({ theme }) => theme.colors.text.accent};
  }
`;

export const Summary = styled.p`
  max-width: 48rem;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.88rem, 1vw, 0.96rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Tags = styled.div`
  grid-area: tags;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.5rem;
  padding-top: 0.3rem;

  @media (max-width: 1040px) {
    padding-top: 0;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.85rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.67rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.015em;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text.secondary};

  transition:
    color ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    border-color: ${({ theme }) => theme.colors.text.accent};
    background: ${({ theme }) => theme.colors.background.surfaceSoft};
  }
`;
export const Period = styled.div`
  grid-area: period;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1.35;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PeriodLine = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  white-space: nowrap;
`;

export const PeriodDot = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
  line-height: 1;
`;
