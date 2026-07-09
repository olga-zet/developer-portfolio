import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./i18n/index";

import { PortfolioThemeProvider } from "./providers/PortfolioThemeProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioThemeProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </PortfolioThemeProvider>
  </StrictMode>,
);
