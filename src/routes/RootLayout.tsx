import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { PortfolioLayout } from "../components/PortfolioLayout/PortfolioLayout";

export const RootLayout = () => {
  return (
    <>
      <PortfolioLayout>
        <Outlet />
      </PortfolioLayout>

      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
};
