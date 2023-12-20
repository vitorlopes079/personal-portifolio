import React from "react";
import { NavLink } from "react-router-dom";

function DesktopNav() {
  return (
    <div className="w-full h-16 flex items-center">
      <ul className="menu flex justify-center  items-center list-none p-0 pl-25 pr-25 w-full h-14 font-montserrat">
        <NavLink
          to="/"
          className="link text-lg  uppercase mr-7.5 "
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="link text-lg  uppercase mr-7.5"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="./projects"
          className="link text-lg uppercase mr-7.5"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className="link text-lg uppercase"
          style={({ isActive }) =>
            isActive ? { fontWeight: "500" } : undefined
          }
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
}

export default DesktopNav;
