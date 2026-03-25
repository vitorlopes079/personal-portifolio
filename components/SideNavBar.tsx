"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icons from "./Icons";
import { Locale } from "@/lib/translations";

interface SideNavBarProps {
  isOpen: boolean;
  closeMenu: () => void;
  locale: Locale;
}

export default function SideNavBar({ isOpen, closeMenu, locale }: SideNavBarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === `/${locale}/${path}`;
  };

  const sidebarStyle: React.CSSProperties = {
    position: "fixed",
    top: "64px",
    left: isOpen ? 0 : "-100%",
    width: "280px",
    height: "100%",
    transition: "left 0.3s ease-in-out",
    zIndex: 50,
    padding: "1rem",
  };

  return (
    <div style={sidebarStyle} className="bg-gray-100 flex flex-col">
      <Link
        href={`/${locale}`}
        onClick={closeMenu}
        style={isActive("") ? { fontWeight: "500" } : undefined}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-gray-200"
      >
        HOME
      </Link>
      <Link
        href={`/${locale}/about`}
        onClick={closeMenu}
        style={isActive("about") ? { fontWeight: "500" } : undefined}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        ABOUT
      </Link>
      <Link
        href={`/${locale}/projects`}
        onClick={closeMenu}
        style={isActive("projects") ? { fontWeight: "500" } : undefined}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        PROJECTS
      </Link>
      <Link
        href={`/${locale}/contact`}
        onClick={closeMenu}
        style={isActive("contact") ? { fontWeight: "500" } : undefined}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        CONTACT
      </Link>
      <Icons />
    </div>
  );
}
