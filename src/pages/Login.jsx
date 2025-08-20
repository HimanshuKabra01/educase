import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen flex justify-center font-primary">
      <div className="flex flex-col bg-[#f7f8f9] w-full max-w-[314px] py-10 pl-6 pr-6">
        <div className="font-bold text-3xl mb-3">
          Sign in to your PopX account
        </div>
        <div className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
        <div className="relative mb-4">
          <div className="border border-gray-300 rounded-md px-3 py-2">
            <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>
        <div className="relative mb-6">
          <div className="border border-gray-300 rounded-md px-3 py-2">
            <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>
        {isFormValid ? (
          <Link to="/dashboard">
            <button className="w-full bg-[#6a3ee7] text-white font-semibold py-2 rounded hover:bg-[#5832c4] transition">
              Login
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-500 font-semibold py-2 rounded cursor-not-allowed"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}