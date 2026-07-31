import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "../components/PortfolioLayout/PortfolioLayout.tsx";

export const Route = createRootRoute({
  component: RootLayout,
});
