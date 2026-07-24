import styled from "styled-components";

export const CvDownloadIcon = styled.span`
  display: grid;
  place-items: center;

  color: ${({ theme }) => theme.colors.accent.pink};

  transform: translateY(-1px);
  transition: transform 180ms ease;
`;

export const CvDownloadLink = styled.a`
  position: relative;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  padding: 8px 10px;

  color: ${({ theme }) => theme.colors.text.primary};

  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    content: "";

    position: absolute;
    right: 0;
    bottom: 2px;
    left: 0;

    height: 2px;

    background-color: ${({ theme }) => theme.colors.accent.pink};

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 200ms ease;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover ${CvDownloadIcon} {
    transform: translateY(2px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 4px;
  }
`;
