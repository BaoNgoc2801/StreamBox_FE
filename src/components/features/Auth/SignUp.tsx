// src/pages/Auth/SignUp.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex flex-col md:flex-row"
        >
            <div className="flex w-full md:w-1/2 items-center justify-center bg-[#1f1f2e] p-6">
                <div className="bg-[#2a2a35] w-full max-w-md rounded-lg shadow-md p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6">Create an account</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block mb-1 text-sm">
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full p-3 rounded bg-gray-700 border border-gray-600
                           placeholder-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded bg-gray-700 border border-gray-600
                           placeholder-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 text-sm">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                className="w-full p-3 rounded bg-gray-700 border border-gray-600
                           placeholder-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="re-password" className="block mb-1 text-sm">
                                Confirm Password
                            </label>
                            <input
                                id="re-password"
                                type="re-password"
                                placeholder="Enter your password again"
                                className="w-full p-3 rounded bg-gray-700 border border-gray-600
                           placeholder-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-purple-500"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full p-3 rounded bg-purple-600 hover:bg-purple-700
                         font-semibold transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-600"/>
                        <span className="mx-2 text-gray-400">OR</span>
                        <hr className="flex-grow border-gray-600"/>
                    </div>
                    <button
                        className="w-full p-3 rounded border border-gray-600 flex items-center
                       justify-center gap-2 hover:bg-gray-700 transition-colors"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span>Sign up with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-300 mt-4">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-purple-400 hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>

            <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-gradient-to-tr from-purple-800 to-black p-10">
                <div className="max-w-sm">
                    <h1 className="text-4xl font-bold text-white mb-4">Join Us</h1>
                    <p className="text-gray-200 text-lg">
                        Create your account and start exploring our platform today.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default SignUp;
