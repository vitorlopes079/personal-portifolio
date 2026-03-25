"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Switcher from "./Switcher";
import Icons from "./Icons";
import { Locale } from "@/lib/translations";

interface DesktopNavProps {
  locale: Locale;
  translations: Record<string, string>;
}

export default function DesktopNav({ locale, translations }: DesktopNavProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === `/${locale}/${path}`;
  };

  return (
    <div className="w-full h-16 flex items-center relative">
      <Switcher currentLocale={locale} />
      <ul className="menu flex justify-center items-center list-none p-0 pl-25 pr-25 w-full h-14 font-montserrat">
        <Link
          href={`/${locale}`}
          className="link text-lg uppercase"
          style={isActive("") ? { fontWeight: "500" } : undefined}
        >
          {translations.Home}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="link text-lg uppercase"
          style={isActive("about") ? { fontWeight: "500" } : undefined}
        >
          {translations.About}
        </Link>
        <Link
          href={`/${locale}/projects`}
          className="link text-lg uppercase"
          style={isActive("projects") ? { fontWeight: "500" } : undefined}
        >
          {translations.Projects}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="link text-lg uppercase"
          style={isActive("contact") ? { fontWeight: "500" } : undefined}
        >
          {translations.Contact}
        </Link>
        <Icons />
      </ul>
    </div>
  );
}
