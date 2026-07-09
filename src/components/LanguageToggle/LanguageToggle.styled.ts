import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;

  padding: 0.5rem 0.7rem;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.subtle};
  border-radius: ${({ theme }) => theme.radii.pill};
  cursor: pointer;

  transition:
    border-color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.background.surfaceSoft};
    border-color: ${({ theme }) => theme.colors.accent.pink};
  }
`;

export const Option = styled.span<{ $active: boolean }>`
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  line-height: 1;
  text-transform: uppercase;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.text.accent : theme.colors.text.muted};
`;

export const Separator = styled.span`
  width: 1px;
  height: 0.75rem;
  background: ${({ theme }) => theme.colors.border.subtle};
`;
