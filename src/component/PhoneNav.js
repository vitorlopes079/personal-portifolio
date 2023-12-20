import React, { useState } from "react";
import SideNavBar from "./SideNavBar";

function PhoneNav({ sideNav, toggleMenu, closeMenu }) {
  return (
    <div className="h-16 flex items-center">
      <div
        className={`navTrigger ml-5 ${ sideNav ? "active" : ""} flex item`}
        onClick={toggleMenu}
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
      <SideNavBar isOpen={ sideNav} closeMenu={closeMenu} />
    </div>
  );
}

export default PhoneNav;
