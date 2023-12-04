import ErrorLogo from "@/assets/images/cancel.svg";
import "./ErrorPopup.css";

const ErrorPopup: React.FC = () => {
  return (
    <div role="alert" typeof="error" className="alert-block">
      <div className="">
        <svg width="32" height={32}>
          <image href={ErrorLogo} width="32" height={32} />
        </svg>
      </div>
      <div className="error-text-block">
        <div data-alert-message="true" className="error-text">
          Invalid email address or password. Please try again.
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
