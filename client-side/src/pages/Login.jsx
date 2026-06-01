import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileFrame from "../components/MobileFrame";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    const result = login(form.email, form.password);

    if (result.success) {
      navigate("/account");
    } else {
      setError(result.message);
    }
  };

  const isReady = form.email.trim() && form.password.trim();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full px-6 pt-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors w-fit mb-6 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            Signin to your <br /> PopX account
          </h1>
          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Email Field */}
          <div className="relative border border-gray-300 rounded-lg px-3 pt-3 pb-2 bg-white">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25ff]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative border border-gray-300 rounded-lg px-3 pt-3 pb-2 bg-white">
            <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25ff]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-xs">{error}</p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!isReady}
            className={`w-full font-semibold py-3.5 rounded-lg mt-2 transition-colors duration-200 cursor-pointer
              ${isReady
                ? "bg-[#6c25ff] hover:bg-[#5a1ee0] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Login;