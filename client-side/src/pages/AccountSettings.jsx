import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";

const AccountSettings = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-6 pt-10 pb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Account Settings
          </h1>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Profile Section */}
        <div className="px-6 py-5 flex items-center gap-4">
          {/* Avatar with camera icon */}
          <div className="relative shrink-0">
            <img
              src={user?.avatar}
              alt={user?.fullName}
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* Camera Badge */}
            <div className="absolute bottom-0 right-0 bg-[#6c25ff] rounded-full w-5 h-5 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7-10h-1.17l-1.24-1.35A1 1 0 0 0 15.86 4H8.14a1 1 0 0 0-.73.32L6.17 5.5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2z" />
              </svg>
            </div>
          </div>

          {/* Name & Email */}
          <div>
            <p className="font-semibold text-gray-900 text-base">
              {user?.fullName}
            </p>
            <p className="text-gray-500 text-sm">{user?.email}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="px-6 pb-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {user?.bio}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300" />

        {/* Logout */}
        <div className="px-6 py-5">
          <button
            onClick={handleLogout}
            className="w-full border border-[#6c25ff] text-[#6c25ff] hover:bg-[#6c25ff] hover:text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default AccountSettings;