import React from 'react';
import EmailLogo from "@/assets/images/email.svg";
import PasswordLogo from "@/assets/images/lock.svg";

interface LoginFormProps {
  onSubmit: (event: React.FormEvent) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  hasEmailError: boolean;
  hasPasswordError: boolean;
  passwordLength: number
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onEmailChange,
  onPasswordChange,
  hasEmailError,
  hasPasswordError,
  passwordLength
}) => {
  return (
    <form name="loginForm" onSubmit={onSubmit}>
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
            onChange={(e) => {
              onEmailChange(e.target.value);
            }}
          />
        </div>
        <div className={hasEmailError ? "visible-error-message-email" : "hidden-error-message"}>
          Enter a valid email
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
            onChange={(e) => {
              onPasswordChange(e.target.value);
            }}
          />
        </div>
        <div className={hasPasswordError ? "visible-error-message-password" : "hidden-error-message"}>
          The password must be at least {passwordLength} characters long
        </div>
      </div>
      
      <button className="login-btn">Login</button>
    </form>
  );
};

export default LoginForm;
