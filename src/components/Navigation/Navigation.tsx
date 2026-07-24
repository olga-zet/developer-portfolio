import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  Brand,
  BrandMark,
  Header,
  MobileMenuButton,
  MobilePanel,
  MobilePanelInner,
  Nav,
  NavActions,
  NavLink,
  NavLinks,
} from "./Navigation.styled.ts";
import { NAV_ITEMS } from "./Navigation.data.ts";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle.tsx";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.tsx";
import { CvDownloadButton } from "../CvDownloadButton/CvDownloadButton.tsx";

const BRAND_INITIALS = "OZ";
const BRAND_LABEL = "Olga Załuska portfolio";

const getNavigationTarget = (to: string) => {
  const [pathname, hash] = to.split("#");

  return {
    pathname: pathname || "/",
    hash: hash || undefined,
  };
};

export const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  };

  return (
    <Header>
      <Brand
        to="/"
        hash="home"
        aria-label={BRAND_LABEL}
        onClick={closeMobileMenu}
      >
        <BrandMark>
          {BRAND_INITIALS}
          <span>.</span>
        </BrandMark>
      </Brand>

      <Nav aria-label={t("nav.ariaLabel", "Main navigation")}>
        <NavLinks>
          {NAV_ITEMS.map(({ to, labelKey }) => {
            const { pathname, hash } = getNavigationTarget(to);

            return (
              <NavLink key={to} to={pathname} hash={hash}>
                {t(labelKey)}
              </NavLink>
            );
          })}
        </NavLinks>

        <NavActions>
          <CvDownloadButton />
          <ThemeToggle />
          <LanguageToggle />

          <MobileMenuButton
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </MobileMenuButton>
        </NavActions>
      </Nav>

      <MobilePanel id="mobile-navigation" $isOpen={isMobileMenuOpen}>
        <MobilePanelInner>
          {NAV_ITEMS.map(({ to, labelKey }) => {
            const { pathname, hash } = getNavigationTarget(to);

            return (
              <NavLink
                key={to}
                to={pathname}
                hash={hash}
                onClick={closeMobileMenu}
              >
                {t(labelKey)}
              </NavLink>
            );
          })}
        </MobilePanelInner>
      </MobilePanel>
    </Header>
  );
};
