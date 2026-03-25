"use client";

import { useState } from "react";
import Header from "./Header";
import { Locale } from "@/lib/translations";

interface LayoutClientProps {
  children: React.ReactNode;
  locale: Locale;
  translations: Record<string, string>;
}

export default function LayoutClient({
  children,
  locale,
  translations,
}: LayoutClientProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const overlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 40,
    display: isActive ? "block" : "none",
  };

  return (
    <div className="bodyBackground flex flex-col h-screen">
      <Header
        sideNav={isActive}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        locale={locale}
        translations={translations}
      />
      <main className="content flex-grow overflow-auto">{children}</main>
      {isActive && (
        <div
          style={overlayStyle}
          onClick={() => {
            setIsActive(false);
          }}
        ></div>
      )}
    </div>
  );
}
