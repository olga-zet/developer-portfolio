import styled from "styled-components";

export const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  min-height: 2.35rem;
  padding: 0.2rem 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radii.pill};

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.surface};

  cursor: pointer;

  transition:
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast},
    transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.strong};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.pink};
    outline-offset: 3px;
  }
`;

export const ToggleIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.accent};
`;

export const ToggleLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
