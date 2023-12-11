import { useAuth } from "@/contexts/AuthContext";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef } from "react";

interface LoginPopupProps {
  setLogoutPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAccountVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutPopup: React.FC<LoginPopupProps> = ({
  setLogoutPopupVisible,
  setIsAccountVisible,
}) => {
  const { logout } = useAuth();
  const logoutModalRef = useRef(null);

  useOutsideClick(logoutModalRef, () => {
    setLogoutPopupVisible(false);
  });

  const Logout = async () => {
    await logout();

    setLogoutPopupVisible(false);
    setIsAccountVisible(true);
  };

  const onCancel = () => {
    setLogoutPopupVisible(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="block-wrap-main">
        <div
          ref={logoutModalRef}
          className="text-center bg-white p-14 rounded-lg"
        >
          <h3 className="text-lg mb-4">Are you sure you want to log out?</h3>

          <button
            className="border mr-4 border-gray-500 hover:bg-gray-50 text-gray-900 font-bold py-2 px-4 rounded shadow-sm"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="logout-btn border border-gray-500 hover:bg-gray-50 text-gray-900 font-bold py-2 px-4 rounded shadow-sm"
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
