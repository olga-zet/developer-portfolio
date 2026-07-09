import styled from "styled-components";

export const Layout = styled.div`
  min-height: 100vh;
  overflow-x: hidden;

  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.page};

  transition:
    background ${({ theme }) => theme.transitions.normal},
    color ${({ theme }) => theme.transitions.normal};
`;

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.layout.navHeight};
`;
