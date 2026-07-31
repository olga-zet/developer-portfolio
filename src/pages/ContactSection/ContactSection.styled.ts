import styled, { css } from "styled-components";

const uppercaseText = css`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.66rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const focusVisibleStyles = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 3px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});
  padding: clamp(0.75rem, 1.6vh, 1.25rem) ${({ theme }) => theme.spacing.pageX};
  box-sizing: border-box;
  overflow: hidden;
  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};

  @media (max-width: 1080px) {
    height: auto;
    min-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});
    overflow: visible;
  }

  @media (max-width: 640px) {
    padding: 1rem clamp(1rem, 4vw, 1.5rem);
  }
`;

export const SectionInner = styled.div`
  width: min(100%, ${({ theme }) => theme.layout.maxWidth});
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

export const ContactGrid = styled.div`
  width: 100%;
  height: 100%;
  min-height: 0;
  display: grid;
  grid-template-columns:
    minmax(0, 1.48fr)
    minmax(23rem, 0.78fr);
  align-items: stretch;

  @media (max-width: 1080px) {
    height: auto;
    grid-template-columns: 1fr;
    gap: clamp(2rem, 6vw, 4rem);
  }
`;

export const Visual = styled.div`
  min-width: 0;
  min-height: 0;
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: clamp(0.75rem, 1.5vh, 1.4rem);
  padding: clamp(1.5rem, 3vh, 3rem) clamp(1.5rem, 3.5vw, 4rem) 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.page};

  @media (max-width: 1080px) {
    height: auto;
    min-height: 48rem;
    grid-template-rows: auto minmax(28rem, 1fr);
  }

  @media (max-width: 640px) {
    min-height: 42rem;
    grid-template-rows: auto minmax(23rem, 1fr);
    gap: 1rem;
    padding: 1.5rem 1.25rem 0;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    padding-top: 1.25rem;
    gap: 0.5rem;
  }
`;

export const VisualHeader = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: clamp(0.8rem, 1.5vw, 1.5rem);
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(4.8rem, 9.5vh, 8.5rem);
  font-weight: 900;
  line-height: 0.76;
  letter-spacing: -0.065em;
  text-transform: uppercase;

  span,
  strong {
    display: block;
    font: inherit;
  }

  span {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  strong {
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: 1080px) {
    font-size: clamp(5.5rem, 14vw, 9rem);
  }

  @media (max-width: 640px) {
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: clamp(4.5rem, 20vw, 6.8rem);
    line-height: 0.78;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    font-size: clamp(4rem, 8.5vh, 6rem);
  }
`;

export const Lead = styled.p`
  width: min(100%, 30rem);
  margin: clamp(0.9rem, 1.7vh, 1.5rem) 0 0;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.88rem, 1.45vh, 1.05rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.secondary};

  @media (max-width: 1080px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    margin-top: 1.25rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    width: min(100%, 27rem);
    margin-top: 0.75rem;
    font-size: 0.84rem;
    line-height: 1.5;
  }
`;

export const ImageStage = styled.div`
  min-width: 0;
  min-height: 0;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  overflow: hidden;
  pointer-events: none;

  @media (max-width: 1080px) {
    min-height: clamp(28rem, 58vw, 43rem);
  }

  @media (max-width: 640px) {
    min-height: clamp(23rem, 90vw, 31rem);
  }
`;

export const VisualImage = styled.img`
  display: block;
  width: min(116%, 66rem);
  height: 100%;
  max-width: none;
  max-height: 100%;
  object-fit: contain;
  object-position: center bottom;
  filter: drop-shadow(
    0 1.5rem 2.5rem
      color-mix(
        in srgb,
        ${({ theme }) => theme.colors.shadow.soft} 20%,
        transparent
      )
  );

  @media (max-width: 1280px) {
    width: min(120%, 59rem);
  }

  @media (max-width: 1080px) {
    width: min(100%, 55rem);
    height: auto;
    max-height: 42rem;
  }

  @media (max-width: 640px) {
    width: min(128%, 36rem);
    max-height: 30rem;
  }
`;

export const FormPanel = styled.aside`
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.4rem, 2.8vh, 2.8rem) clamp(1.5rem, 2.8vw, 3rem);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.strong};
  background: color-mix(
    in srgb,
    ${({ theme }) => theme.colors.background.surface} 36%,
    ${({ theme }) => theme.colors.background.page}
  );

  &::before {
    content: "";
    position: absolute;
    top: clamp(1.4rem, 2.8vh, 2.8rem);
    left: -1px;
    width: 4px;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: 1080px) {
    height: auto;
    padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 6vw, 4rem);
    overflow: visible;
  }

  @media (max-width: 640px) {
    padding: 2.5rem 1.25rem;

    &::before {
      top: 2.5rem;
    }
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    padding: 1.1rem clamp(1.5rem, 2.5vw, 2.5rem);

    &::before {
      top: 1.1rem;
      height: 2rem;
    }
  }
`;

export const FormEyebrow = styled.p`
  margin: 0 0 clamp(0.65rem, 1.2vh, 1rem);
  ${uppercaseText};
  color: ${({ theme }) => theme.colors.accent.pink};

  @media (min-width: 1081px) and (max-height: 760px) {
    margin-bottom: 0.45rem;
  }
`;

export const FormHeading = styled.h3`
  margin: 0 0 clamp(1.1rem, 2.1vh, 1.8rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(2.6rem, 5vh, 4.3rem);
    font-weight: 900;
    line-height: 0.88;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  em {
    position: relative;
    width: fit-content;
    margin-top: 0.35rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: clamp(1.45rem, 2.8vh, 2.4rem);
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: ${({ theme }) => theme.colors.text.primary};

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -0.4rem;
      width: 72%;
      height: 2px;
      background: ${({ theme }) => theme.colors.accent.pink};
      transform: rotate(-1.5deg);
      transform-origin: right;
    }
  }

  @media (max-width: 1080px) {
    margin-bottom: 2.5rem;

    span {
      font-size: clamp(3.1rem, 8vw, 5rem);
    }

    em {
      font-size: clamp(1.9rem, 5vw, 3rem);
    }
  }

  @media (max-width: 640px) {
    span {
      font-size: clamp(2.5rem, 12vw, 3rem);
    }

    em {
      font-size: clamp(1.75rem, 9vw, 2.5rem);
    }
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    margin-bottom: 0.9rem;

    span {
      font-size: clamp(2.2rem, 4.4vh, 3.2rem);
    }

    em {
      margin-top: 0.2rem;
      font-size: clamp(1.3rem, 2.5vh, 1.8rem);
    }
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  min-width: 0;
`;

export const FormGrid = styled.div`
  display: grid;
  gap: clamp(0.65rem, 1.15vh, 0.95rem);

  @media (min-width: 1081px) and (max-height: 760px) {
    gap: 0.5rem;
  }
`;

export const Field = styled.div`
  min-width: 0;

  display: grid;
  gap: 0.32rem;
`;

export const FieldError = styled.div`
  min-height: 1rem;
  margin-top: 0.4rem;

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.68rem;
  line-height: 1.4;

  color: ${({ theme }) => theme.colors.accent.red};

  &:empty {
    display: none;
  }

  p {
    margin: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.45rem;

  margin-bottom: 0.6rem;

  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FieldNumber = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
`;

const fieldStyles = css`
  width: 100%;
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: 0;
  outline: none;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.9rem;

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
    opacity: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.strong};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent.pink};
    box-shadow: inset 3px 0 0 ${({ theme }) => theme.colors.accent.pink};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  ${focusVisibleStyles};
`;

export const Input = styled.input`
  ${fieldStyles};
  height: clamp(3.1rem, 5.5vh, 3.75rem);
  padding: 0 1rem;

  @media (max-width: 1080px) {
    height: 4rem;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    height: 2.8rem;
  }
`;

export const Textarea = styled.textarea`
  ${fieldStyles};
  min-height: clamp(5.2rem, 11vh, 7rem);
  padding: 0.9rem 1rem;
  line-height: 1.5;
  resize: none;

  @media (max-width: 1080px) {
    min-height: 9rem;
    resize: vertical;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    min-height: 4.6rem;
    padding-block: 0.7rem;
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  width: 100%;
  min-height: clamp(3.4rem, 6.2vh, 4.1rem);
  margin-top: clamp(0.7rem, 1.3vh, 1.1rem);
  padding: 0 4rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 0;
  cursor: pointer;
  ${uppercaseText};
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ theme }) => theme.colors.text.primary};

  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  svg {
    position: absolute;
    right: 1.5rem;
    color: ${({ theme }) => theme.colors.accent.pink};

    transition:
      color ${({ theme }) => theme.transitions.fast},
      transform ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent.white};
    background: ${({ theme }) => theme.colors.accent.pink};
    border-color: ${({ theme }) => theme.colors.accent.pink};
    transform: translateY(-2px);

    svg {
      color: currentColor;
      transform: translateX(0.35rem);
    }
  }

  &:active {
    transform: translateY(0);
  }

  ${focusVisibleStyles};

  @media (max-width: 1080px) {
    min-height: 4.2rem;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    min-height: 3rem;
    margin-top: 0.6rem;
  }
`;

export const FormNote = styled.p`
  margin: clamp(0.5rem, 0.9vh, 0.75rem) 0 0;
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(0.68rem, 1.15vh, 0.78rem);
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.muted};

  svg {
    flex: 0 0 auto;
    margin-top: 0.02rem;
    color: ${({ theme }) => theme.colors.accent.pink};
  }

  @media (max-width: 1080px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1081px) and (max-height: 760px) {
    margin-top: 0.4rem;
    font-size: 0.65rem;
  }
`;
