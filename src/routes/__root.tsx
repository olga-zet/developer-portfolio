import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "../components/PortfolioLayout/PortfolioLayout.tsx";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage.tsx";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
