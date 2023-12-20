import React, { useState, useEffect } from "react";

import DesktopNav from "./DesktopNav";
import PhoneNav from "./PhoneNav";

function Header({ sideNav, toggleMenu, closeMenu }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-16 bg-gray-100 flex items-center z-50">
      {isMobile ? (
        <PhoneNav
          sideNav={sideNav}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
      ) : (
        <DesktopNav />
      )}
    </div>
  );
}

export default Header;
