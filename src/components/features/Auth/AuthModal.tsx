import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import Video from "../../../assets/video/27669-365224683_small.mp4";

interface AuthModalProps {
    onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-3xl h-[550px] bg-white text-black rounded-lg shadow-xl overflow-hidden flex"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Wrapper chứa Form + Welcome để đảm bảo luôn hiển thị */}
                <div className="relative w-full h-full flex">

                    {/* Form Section */}
                    <motion.div
                        className="absolute w-1/2 h-full p-6 bg-white flex flex-col justify-center transition-all duration-500"
                        animate={{ left: isSignUp ? "0%" : "50%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-black"
                            onClick={onClose}
                        >
                            ✖
                        </button>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isSignUp ? "sign-up" : "sign-in"}
                                initial={{ opacity: 0, x: isSignUp ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: isSignUp ? 50 : -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold text-center mb-4">
                                    {isSignUp ? "Sign Up" : "Sign In"}
                                </h2>
                                <form className="space-y-4">
                                    {isSignUp && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
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
                                            placeholder="Enter your password"
                                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        />
                                    </div>
                                    {!isSignUp && (
                                        <div className="text-right">
                                            <button className="text-purple-500 hover:underline">Forgot password?</button>
                                        </div>
                                    )}
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg"
                                    >
                                        {isSignUp ? "Sign Up" : "Sign In"}
                                    </button>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500">OR</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <button
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-black p-3 rounded-lg hover:bg-gray-100"
                        >
                            <FcGoogle size={24} /> {isSignUp ? "Sign up" : "Sign in"} with Google
                        </button>
                        {/* CHUYỂN ĐỔI Sign In / Sign Up */}
                        <div className="text-center mt-4 text-gray-600">
                            {isSignUp ? (
                                <>
                                    Do you have an account?{" "}
                                    <button className="text-purple-500 hover:underline" onClick={() => setIsSignUp(false)}>
                                        Sign in
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don’t have an account?{" "}
                                    <button className="text-purple-500 hover:underline" onClick={() => setIsSignUp(true)}>
                                        Sign up
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Welcome Section */}
                    <motion.div
                        className="absolute w-1/2 h-full bg-gray-100 flex flex-col items-center justify-center text-center p-6 relative transition-all duration-500"
                        animate={{ left: isSignUp ? "50%" : "0%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <video
                            src={Video}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
                        />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isSignUp ? "welcome-signup" : "welcome-signin"}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.4 }}
                                className="relative text-black z-10"
                            >
                                <h1 className="text-3xl font-bold">
                                    {isSignUp ? "Welcome!" : "Welcome Back!"}
                                </h1>
                                <p className="mt-2 text-gray-600">
                                    {isSignUp
                                        ? "Join us and explore amazing features."
                                        : "Sign in to continue your journey."}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default AuthModal;
