import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

interface SignUpModalProps {
    onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="w-full max-w-2xl bg-white text-black rounded-lg shadow-xl overflow-hidden flex"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-1/2 bg-gray-100 flex items-center justify-center">
                    <img src="https://lottie.host/1b7a95a3-456a-4a8c-8c3a-b1e5df7a73df/B3hNvE.json" alt="Sign Up Animation" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 p-6 relative">
                    <button
                        className="absolute top-3 right-3 text-gray-600 hover:text-black"
                        onClick={onClose}
                    >
                        ✖
                    </button>
                    <h2 className="text-2xl font-bold text-center mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>
                    <form className="space-y-4">
                        {!isSignIn && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                placeholder={isSignIn ? "Enter your password" : "Create a password"}
                                className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg"
                        >
                            {isSignIn ? "Sign In" : "Sign Up"}
                        </button>
                    </form>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300"/>
                        <span className="mx-2 text-gray-500">OR</span>
                        <hr className="flex-grow border-gray-300"/>
                    </div>
                    <button
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-black p-3 rounded-lg hover:bg-gray-100"
                    >
                        <FcGoogle size={24} /> {isSignIn ? "Sign in with Google" : "Sign up with Google"}
                    </button>
                    <div className="text-center mt-4 text-gray-600">
                        {isSignIn ? "Don't have an account?" : "Already have an account?"}
                        <button
                            className="text-purple-500 hover:underline"
                            onClick={() => setIsSignIn(!isSignIn)}
                        >
                            {isSignIn ? "Sign up" : "Sign in"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SignUpModal;