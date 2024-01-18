import React from "react";
import SideNavBar from "./SideNavBar";
import Switcher from "./Switcher";

function PhoneNav({ sideNav, toggleMenu, closeMenu }) {
  return (
    
    <div className="h-16 w-full flex items-center ">
      <div
        className={`navTrigger ml-5 ${sideNav ? "active" : ""} flex item`}
        onClick={toggleMenu}
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
      <SideNavBar isOpen={sideNav} closeMenu={closeMenu} />
      <Switcher />
    </div>
    
    
    
  );
}

export default PhoneNav;
