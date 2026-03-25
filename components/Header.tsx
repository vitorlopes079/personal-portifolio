"use client";

import { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import PhoneNav from "./PhoneNav";
import { Locale } from "@/lib/translations";

interface HeaderProps {
  sideNav: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  locale: Locale;
  translations: Record<string, string>;
}

export default function Header({
  sideNav,
  toggleMenu,
  closeMenu,
  locale,
  translations,
}: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-16 bg-gray-100 flex items-center z-50">
      {isMobile ? (
        <div>
          <PhoneNav
            sideNav={sideNav}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            locale={locale}
          />
        </div>
      ) : (
        <DesktopNav locale={locale} translations={translations} />
      )}
    </div>
  );
}
