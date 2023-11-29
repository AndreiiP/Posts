import EmailLogo from "../assets/images/email.svg";
import PasswordLogo from "../assets/images/lock.svg";

const LoginPopup: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="block-wrap text-center bg-white p-8 rounded-lg">
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
              />
            </div>
          </div>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
