import React from "react";
import { NavLink } from "react-router-dom";

function SideNavBar({ isOpen, closeMenu }) {
  const sidebarStyle = {
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
      <NavLink
        to="/"
        onClick={closeMenu}
        style={({ isActive }) => (isActive ? { fontWeight: "500" } : undefined)}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        onClick={closeMenu}
        style={({ isActive }) => (isActive ? { fontWeight: "500" } : undefined)}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="./projects"
        onClick={closeMenu}
        style={({ isActive }) => (isActive ? { fontWeight: "500" } : undefined)}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        PROJECTS
      </NavLink>
      <NavLink
        to="/contact"
        onClick={closeMenu}
        style={({ isActive }) => (isActive ? { fontWeight: "500" } : undefined)}
        className="mb-2 font-montserrat hover:bg-gray-200 px-4 py-2 rounded cursor-pointer border-b border-b-2 border-gray-200"
      >
        CONTACT
      </NavLink>
    </div>
  );
}

export default SideNavBar;
