import styled, { css } from "styled-components";

export const monoButton = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.68rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Section = styled.section`
  width: 100%;
  min-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});
  padding: clamp(2rem, 4vw, 4rem) ${({ theme }) => theme.spacing.pageX};
  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};

  @media (max-width: 640px) {
    padding: 3rem clamp(1rem, 4vw, 1.5rem);
  }
`;

export const Content = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  margin: 0 auto;
  display: grid;
  grid-template-columns:
    minmax(20rem, 0.42fr)
    minmax(0, 2.2fr);
  gap: clamp(2rem, 4vw, 5rem);
  align-items: start;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: clamp(3rem, 7vw, 5rem);
  }
`;

export const Intro = styled.aside`
  position: sticky;
  top: calc(${({ theme }) => theme.layout.navHeight} + 1.5rem);
  min-width: 0;
  min-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight} - 3rem);
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media (max-width: 1080px) {
    position: static;
    min-height: auto;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 clamp(0.8rem, 1.5vw, 1.25rem);
  ${monoButton};
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const Header = styled.h2`
  max-width: 26rem;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4rem, 6.5vw, 6.5rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 1080px) {
    max-width: 40rem;
    font-size: clamp(5rem, 14vw, 9rem);
  }

  @media (max-width: 640px) {
    font-size: clamp(4rem, 20vw, 6rem);
  }
`;

export const Description = styled.p`
  max-width: 23rem;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.92rem, 1vw, 1.04rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 1080px) {
    max-width: 36rem;
  }
`;

export const StackTitle = styled.h3`
  margin: clamp(2.5rem, 4vw, 4rem) 0 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
  ${monoButton};
  color: ${({ theme }) => theme.colors.text.primary};

  &::after {
    content: " •";
    color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const StackList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 1rem;
  row-gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1080px) {
    max-width: 34rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StackItem = styled.li`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.8rem;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.text.secondary};

  &::before {
    content: "";
    width: 0.38rem;
    height: 0.38rem;
    flex: 0 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    transform: rotate(45deg);
  }
`;

export const ProjectList = styled.div`
  min-width: 0;
  display: grid;
  gap: clamp(1rem, 2vw, 2rem);
`;
