import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header/Header.css";
import "./Main/Main.css";
import LoginPopup from "./Login/LoginPopup";

const Header: React.FC = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleAccountClick = () => {
    setPopupVisible(true);
  };

  return (
    <>
      <header className="header">
        <div className="container l">
          <div className="main-header-row">
            <div className="burger-logo-block">
              <a className="logo" href="#"></a>
            </div>
            <div className="menu-desktop">
              <NavLink className="menu-item hover-animation" to="/post">
                <div>
                  <span>Posts</span>
                </div>
              </NavLink>
              <NavLink className="menu-item hover-animation" to="/news">
                <div>
                  <span>News</span>
                </div>
              </NavLink>
            </div>
            <div className="right-buttons-block">
              <div className="account" onClick={handleAccountClick}>
                <span className="ac-icon"></span>
              </div>
              {popupVisible && <LoginPopup setPopupVisible={setPopupVisible} />}
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
