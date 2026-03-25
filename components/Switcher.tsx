"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/translations";

interface SwitcherProps {
  currentLocale: Locale;
}

export default function Switcher({ currentLocale }: SwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isEnglish = currentLocale === "en";

  const handleToggle = () => {
    const newLocale = isEnglish ? "pt" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div
      className="w-20 h-6 responsive1000:w-24 responsive1000:h-8 flex items-center bg-gray-200 rounded-full cursor-pointer absolute right-6 md:left-10"
      onClick={handleToggle}
    >
      <div className="w-1/2 flex justify-center">
        <span className="text-xs font-medium">EN</span>
      </div>
      <div
        className={`absolute bg-gray-900 w-10 h-6 responsive1000:w-12 responsive1000:h-8 rounded-full shadow transform duration-300 ease-in-out ${
          isEnglish ? "translate-x-0" : "translate-x-10 responsive1000:translate-x-12"
        }`}
      ></div>
      <div className="w-1/2 flex justify-center">
        <span className="text-xs responsive1000:text-xs font-medium">PT</span>
      </div>
    </div>
  );
}
