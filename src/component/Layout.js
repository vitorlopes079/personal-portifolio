import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const overlayStyle = {
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
      />
      <main className="content flex-grow overflow-auto ">
        <Outlet />
      </main>
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

export default Layout;
