import type { ReactNode } from "react";

import { Navigation } from "../Navigation/Navigation.tsx";
import { Layout, Main } from "./PortfolioLayout.styled.ts";

type PortfolioLayoutProps = {
  children: ReactNode;
};

export const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return (
    <Layout>
      <Navigation />
      <Main>{children}</Main>
    </Layout>
  );
};
