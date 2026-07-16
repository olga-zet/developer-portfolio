import styled from "styled-components";

export const Hero = styled.section`
  position: relative;

  width: 100%;
  height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});

  display: grid;
  grid-template-rows: minmax(0, 1fr) auto auto;

  overflow: clip;

  scroll-margin-top: ${({ theme }) => theme.layout.navHeight};

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};

  @media (max-width: 980px) {
    height: auto;
    min-height: calc(100dvh - ${({ theme }) => theme.layout.navHeight});

    display: flex;
    flex-direction: column;

    padding-top: clamp(2.5rem, 8vw, 4.5rem);

    overflow: hidden;
  }

  @media (max-width: 520px) {
    padding-top: 2.5rem;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-columns:
    minmax(18rem, 0.55fr)
    minmax(0, 1.35fr);

  align-items: center;
  gap: clamp(1.5rem, 3vw, 4rem);

  padding-left: max(
    ${({ theme }) => theme.spacing.pageX},
    calc((100vw - ${({ theme }) => theme.layout.maxWidth}) / 2)
  );

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    align-items: start;

    gap: clamp(2rem, 6vw, 3.5rem);

    padding-inline: clamp(1.25rem, 4vw, ${({ theme }) => theme.spacing.pageX});
  }

  @media (max-width: 520px) {
    gap: 1.75rem;
    padding-inline: 1.25rem;
  }
`;

export const HeroImageFrame = styled.div`
  min-width: 0;
  min-height: 0;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 980px) {
    min-height: 24rem;
    height: auto;

    justify-content: center;
  }

  @media (max-width: 520px) {
    min-height: 19rem;
    margin-top: -0.5rem;
  }
`;

export const HeroImage = styled.img`
  display: block;

  width: min(76rem, 76vw);
  height: auto;
  max-width: none;
  max-height: 100%;

  margin-left: auto;

  object-fit: contain;
  object-position: right bottom;

  transform: translateX(clamp(2rem, 4vw, 5rem));

  @media (max-width: 1300px) {
    width: min(68rem, 72vw);
    transform: translateX(clamp(1.5rem, 3vw, 3.5rem));
  }

  @media (max-width: 1100px) {
    width: min(62rem, 70vw);
    transform: translateX(2rem);
  }

  @media (max-width: 980px) {
    width: min(100%, 44rem);
    max-width: 100%;
    max-height: none;

    margin-inline: auto;

    object-position: center bottom;
    transform: none;
  }

  @media (max-width: 620px) {
    width: min(115%, 34rem);
    max-width: 115%;
  }

  @media (max-width: 390px) {
    width: 112%;
    max-width: 112%;
  }
`;
