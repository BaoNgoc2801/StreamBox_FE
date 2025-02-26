import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
            <button
                onClick={() => navigate("/")}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded"
            >
                Go to Home
            </button>
        </div>
    );
};

export default NotFound;
