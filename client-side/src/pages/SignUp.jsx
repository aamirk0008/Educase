import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileFrame from "../components/MobileFrame";

const FIELDS = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Marry Doe", required: true },
  { name: "phone", label: "Phone number", type: "tel", placeholder: "Marry Doe", required: true },
  { name: "email", label: "Email address", type: "email", placeholder: "Marry Doe", required: true },
  { name: "password", label: "Password", type: "password", placeholder: "Marry Doe", required: true },
  { name: "company", label: "Company name", type: "text", placeholder: "Marry Doe", required: false },
];

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: true,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password } = form;

    if (!fullName || !phone || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    const result = signup(form);

    if (result.success) {
      navigate("/account");
    } else {
      setError(result.message);
    }
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full px-6 pt-6 pb-6 overflow-y-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors w-fit mb-4 cursor-pointer"
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
            Create your <br /> PopX account
          </h1>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 flex-1">
          {FIELDS.map(({ name, label, type, placeholder, required }) => (
            <div
              key={name}
              className="relative border border-gray-300 rounded-lg px-3 pt-3 pb-2 bg-white"
            >
              <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-[#6c25ff]">
                {label}
                {required && <span className="text-[#6c25ff]">*</span>}
              </label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          ))}

          {/* Agency Radio */}
          <div>
            <p className="text-sm text-gray-800 mb-2">
              Are you an Agency?<span className="text-[#6c25ff]">*</span>
            </p>
            <div className="flex gap-6">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={form.isAgency === (option === "Yes")}
                    onChange={() =>
                      setForm({ ...form, isAgency: option === "Yes" })
                    }
                    className="accent-[#6c25ff] w-4 h-4"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#6c25ff] hover:bg-[#5a1ee0] text-white font-semibold py-3.5 rounded-lg mt-6 transition-colors duration-200 cursor-pointer"
        >
          Create Account
        </button>
      </div>
    </MobileFrame>
  );
};

export default SignUp;