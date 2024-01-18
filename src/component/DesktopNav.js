import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";
import { useTranslation } from "react-i18next";
import Icons from "./Icons";

function DesktopNav() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-16 flex items-center relative">
      <Switcher />
      <ul className="menu flex justify-center items-center list-none p-0 pl-25 pr-25 w-full h-14 font-montserrat">
        <NavLink
          to="/"
          className="link text-lg uppercase "
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          {t("Home")}
        </NavLink>
        <NavLink
          to="/about"
          className="link text-lg uppercase"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          {t("About")}
        </NavLink>
        <NavLink
          to="./projects"
          className="link text-lg uppercase"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          {t("Projects")}
        </NavLink>
        <NavLink
          to="/contact"
          className="link text-lg uppercase"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          {t("Contact")}
        </NavLink>
        <Icons />
      </ul>
    </div>
  );
}

export default DesktopNav;
