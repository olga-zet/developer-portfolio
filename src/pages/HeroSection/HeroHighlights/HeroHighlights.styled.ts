import styled from "styled-components";

export const HighlightsList = styled.ul`
  position: relative;
  z-index: 5;
  width: 100%;
  margin: 0;
  padding-block: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-inline: max(
    ${({ theme }) => theme.spacing.pageX},
    calc((100vw - ${({ theme }) => theme.layout.maxWidth}) / 2)
  );

  list-style: none;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
  border-top: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    padding-inline: 1.25rem;
  }
`;

export const HighlightItem = styled.li`
  min-width: 0;
  min-height: clamp(7rem, 11vh, 8.5rem);
  display: grid;
  grid-template-columns:
    auto
    auto
    minmax(0, 1fr);
  align-items: center;
  gap: clamp(0.85rem, 1.3vw, 1.3rem);
  padding: clamp(1.25rem, 2.2vh, 1.8rem) clamp(1rem, 1.8vw, 1.8rem);
  border-right: 1px solid ${({ theme }) => theme.colors.border.subtle};
  &:last-child {
    border-right: 0;
  }

  @media (max-width: 1080px) {
    min-height: 7rem;

    &:nth-child(2n) {
      border-right: 0;
    }
    &:nth-child(-n + 2) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};
    }
  }

  @media (max-width: 620px) {
    min-height: 6.5rem;
    padding-block: 1.3rem;
    padding-inline: 0;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.subtle};

    &:last-child {
      border-bottom: 0;
    }
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    min-height: 6.5rem;
    padding-block: 1rem;
  }
`;

export const HighlightNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, min(3.3vw, 5vh), 3.3rem);
  font-weight: 900;
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.accent.pink};
`;

export const HighlightIcon = styled.span`
  width: clamp(2.8rem, min(4vw, 5.8vh), 3.5rem);
  height: clamp(2.8rem, min(4vw, 5.8vh), 3.5rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};
  ${HighlightItem}:hover & {
    color: ${({ theme }) => theme.colors.accent.white};
    background: ${({ theme }) => theme.colors.accent.pink};
    border-color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const HighlightContent = styled.div`
  min-width: 0;
`;

export const HighlightTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.75rem, 0.95vw, 0.9rem);
  font-weight: 900;
  line-height: 1.25;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HighlightDescription = styled.p`
  max-width: 16rem;
  margin: 0.4rem 0 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.68rem, 0.82vw, 0.8rem);
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 620px) {
    max-width: 25rem;
    font-size: 0.78rem;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    margin-top: 0.25rem;

    font-size: 0.65rem;
    line-height: 1.35;
  }
`;
