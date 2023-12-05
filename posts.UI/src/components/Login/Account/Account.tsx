import React, { useCallback, useEffect, useState } from "react";
import LoginPopup from "../LoginPopup";
import LogoutPopup from "../LogoutPopup";
import "./Account.css";

const Account: React.FC = () => {
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const handleLoginPopupOpen = useCallback(() => {
    setLoginPopupVisible(true);
  }, []);

  const handleLogoutPopupOpen = useCallback(() => {
    setLogoutPopupVisible(true);
  }, []);

  useEffect(() => {
    setIsAccountVisible(!localStorage.getItem("token"));
  }, [isAccountVisible]);

  return (
    <div className="right-buttons-block">
      <div
        className="account"
        onClick={
          isAccountVisible ? handleLoginPopupOpen : handleLogoutPopupOpen
        }
      >
        <span
          className={`ac-icon-${isAccountVisible ? "login" : "logout"}`}
        ></span>
      </div>

      {loginPopupVisible && (
        <LoginPopup
          setLoginPopupVisible={setLoginPopupVisible}
          setIsAccountVisible={setIsAccountVisible}
        />
      )}
      {logoutPopupVisible && (
        <LogoutPopup
          setLogoutPopupVisible={setLogoutPopupVisible}
          setIsAccountVisible={setIsAccountVisible}
        />
      )}
    </div>
  );
};

export default Account;
