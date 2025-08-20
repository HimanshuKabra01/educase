import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    name.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen flex justify-center font-primary">
      <div className="flex flex-col bg-[#f7f8f9] w-full max-w-[314px] py-10 pl-6 pr-6 min-h-screen">
        <div className="flex-1">
          <div className="font-bold text-3xl mb-7">
            Create your PopX account
          </div>
          <div className="relative mb-5">
            <div className="border border-gray-300 rounded-md px-3 py-2">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full name"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="relative mb-5">
            <div className="border border-gray-300 rounded-md px-3 py-2">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
                Phone number <span className="text-red-400">*</span>
              </label>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="relative mb-5">
            <div className="border border-gray-300 rounded-md px-3 py-2">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="relative mb-5">
            <div className="border border-gray-300 rounded-md px-3 py-2">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
                Password <span className="text-red-400">*</span>
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="relative mb-5">
            <div className="border border-gray-300 rounded-md px-3 py-2">
              <label className="absolute -top-2 left-3 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6a3ee7]">
                Company Name
              </label>
              <input
                placeholder="Enter company name"
                className="w-full outline-none text-sm bg-transparent"
              />
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">
              Are you an Agency? <span className="text-red-400">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          {isFormValid ? (
            <Link to="/login">
              <button className="w-full bg-[#6a3ee7] text-white font-semibold py-2 rounded hover:bg-[#5832c4] transition">
                Create Account
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 font-semibold py-2 rounded cursor-not-allowed"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </div>
  );
}