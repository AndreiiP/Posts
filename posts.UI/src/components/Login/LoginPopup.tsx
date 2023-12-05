import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import authService from "@/services/authService";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import LoginForm from "./LoginForm";
import StatusCodes from "http-status-codes";

interface LoginPopupProps {
  setLoginPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAccountVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({
  setLoginPopupVisible,
  setIsAccountVisible,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [hasEmailError, setEmailError] = useState<boolean>(false);
  const [hasPasswordError, setPasswordError] = useState<boolean>(false);

  const passwordLength = 2;

  const loginModalRef = useRef(null);

  useOutsideClick(loginModalRef, () => {
    setLoginPopupVisible(false);
  });

  const handlePasswordChange = () => {
    if (password.length >= passwordLength) {
      setPasswordError(false);
    }
  };

  const handleEmailChange = () => {
    if (email.length >= 0) {
      setEmailError(false);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm(email, password)) {
      return;
    }

    try {
      const response = await authService.login(email, password);
      if (response.status === StatusCodes.OK) {
        setLoginPopupVisible(false);
        setIsAccountVisible(false);
      }
    } catch (error) {
      setIsErrorVisible(true);
    }
  };

  const validateForm = (email: string, password: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password ? password.length > passwordLength : false;

    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    return isEmailValid && isPasswordValid;
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="block-wrap-main">
        <div ref={loginModalRef} className="block-wrap">
          {isErrorVisible && <ErrorPopup />}
          <LoginForm
            onSubmit={handleLogin}
            onEmailChange={(value) => {
              setEmail(value);
              handleEmailChange();
            }}
            onPasswordChange={(value) => {
              setPassword(value);
              handlePasswordChange();
            }}
            hasEmailError={hasEmailError}
            hasPasswordError={hasPasswordError}
            passwordLength={passwordLength + 1}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
