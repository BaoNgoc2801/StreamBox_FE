// src/components/layout/Navbar.tsx
import React from "react";
import { Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-full flex items-center justify-between bg-white p-2 shadow-md">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate("/")}
            >
                <div className="bg-purple-500 text-white p-1 rounded">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </div>
                <span className="text-xl font-bold text-gray-800">Stream Box</span>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 mx-4 max-w-xl">
        <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
          <Search className="w-5 h-5"/>
        </span>
                <input
                    type="text"
                    className="w-full py-2 pl-9 pr-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Search..."
                />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
                {/* Sign In */}
                <button
                    onClick={() => navigate("/signIn")}
                    className="text-purple-700 border border-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition-colors flex items-center gap-2"
                >
                    Sign In <User className="w-5 h-5 text-purple-700"/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
