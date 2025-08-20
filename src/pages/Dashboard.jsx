import { Camera } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex justify-center font-primary">
      <div className="flex flex-col w-full max-w-[314px] min-h-screen bg-[#f7f8f9]">
        <div className="bg-white px-4 py-5 border-b border-gray-200 text-sm font-semibold text-gray-800">
          Account Settings
        </div>

        <div className="px-4 py-7">
          <div className="flex items-start">
            <div className="relative">
              <img
                src="src/assets/marry-demo.webp"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center bg-[#6a3ee7] rounded-full border-2 border-[#f7f8f9]">
                <Camera className="text-white w-3 h-3"/>
              </div>
            </div>
            <div className="ml-3">
              <div className="font-semibold text-sm">Marry Doe</div>
              <div className="text-xs text-gray-600">marry@gmail.com</div>
            </div>
          </div>
          <div className="text-xs text-gray-700 font-semibold text-[13px] mt-6">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>
        <hr className="border-t border-dotted border-gray-300 mx-4" />
      </div>
    </div>
  );
}
