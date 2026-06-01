import { useNavigate } from "react-router-dom";
import MobileFrame from "../components/MobileFrame";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full px-6 pb-10">
        {/* Top empty space */}
        <div className="flex-1" />

        {/* Bottom content */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to PopX
            </h1>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-[#6c25ff] hover:bg-[#5a1ee0] text-white font-semibold py-3.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-[#ddd8f7] hover:bg-[#cdc6f2] text-[#6c25ff] font-semibold py-3.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Welcome;