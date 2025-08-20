import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center font-primary">
      <div className="flex flex-col bg-[#f7f8f9] justify-end w-full max-w-[314px] py-10 pl-6 pr-6">
        <div className="flex flex-col text-sm">
          <div>
            <div className="font-bold text-2xl mb-2">Welcome to PopX</div>
            <div className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
          </div>

          <Link to="/signup">
            <button className="w-full bg-[#6c24ff] text-white py-2 rounded cursor-pointer font-semibold mb-2">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="w-full bg-[#cebafb] py-2 rounded cursor-pointer font-semibold">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}