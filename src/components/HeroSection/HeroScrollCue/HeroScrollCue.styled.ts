import styled from "styled-components";

export const AccentPanel = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  min-height: clamp(2.65rem, 5vh, 3.35rem);
  padding-inline: max(
    ${({ theme }) => theme.spacing.pageX},
    calc((100vw - ${({ theme }) => theme.layout.maxWidth}) / 2)
  );

  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${({ theme }) => theme.colors.accent.pink};
  pointer-events: none;

  @media (max-width: 980px) {
    min-height: 3.5rem;
    padding-inline: clamp(1.25rem, 4vw, 2.5rem);
  }

  @media (max-width: 520px) {
    padding-inline: 1.25rem;
    justify-content: flex-start;
  }
`;

export const AccentText = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(0.62rem, 0.8vw, 0.76rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent.white};

  svg {
    flex: 0 0 auto;
  }

  @media (max-width: 520px) {
    gap: 0.7rem;
    font-size: 0.66rem;
    letter-spacing: 0.06em;
  }
`;
