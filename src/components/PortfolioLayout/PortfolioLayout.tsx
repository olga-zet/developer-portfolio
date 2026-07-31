import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Layout, Main } from "./PortfolioLayout.styled.ts";
import { Navigation } from "../Navigation/Navigation.tsx";

export const RootLayout = () => {
  return (
    <>
      <Layout>
        <Navigation />
        <Main>
          <Outlet />
        </Main>
      </Layout>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
};
