import { useRef, useState } from "react";
import EmailLogo from "@/assets/images/email.svg";
import PasswordLogo from "@/assets/images/lock.svg";
import useOutsideClick from "@/hooks/useOutsideClick";
import authService from "@/services/authService";

interface LoginPopupProps {
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setPopupVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginModalRef = useRef(null);

  useOutsideClick(loginModalRef, () => {
    setPopupVisible(false);
  });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await authService.login(email, password);
      if (response === 200) {
        setPopupVisible(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={loginModalRef}
        className="block-wrap text-center bg-white p-8 rounded-lg"
      >
        <form name="loginForm" onSubmit={handleLogin}>
          <div className="login-wrap">
            <div className="login-email-block">
              <label className="login-label">Email address</label>
              <div className="login-input-block">
                <svg className="email-svg">
                  <image href={EmailLogo} className="email-svg" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input-text-email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="login-password-block">
              <label className="login-label">Password</label>
              <div className="login-input-block">
                <svg className="password-svg">
                  <image href={PasswordLogo} className="password-svg" />
                </svg>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input-text-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
