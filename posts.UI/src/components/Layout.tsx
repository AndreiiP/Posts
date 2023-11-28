import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header/Header.css";
import "./Main/Main.css";

const Header: React.FC = () => {
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
              <a className="account" href="#">
                <span className="ac-icon"></span>
              </a>
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
