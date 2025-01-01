import React from "react";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center">
                <img
                    src="src/assets/images/logologin.png" // Replace with your logo URL
                    alt="Wise Academy Logo"
                    className="h-45"
                />
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center px-16">
                <form className="w-full">
                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-600" htmlFor="email">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-lg px-10 py-3 bg-white focus:ring-2 focus:ring-blue-500"
                                placeholder="Email"
                            />
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12H3M16 12a4 4 0 110-8 4 4 0 110 8zM16 12l5 5m0 0l-5 5m5-5H3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-gray-600" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className="w-full border border-gray-300 rounded-lg px-10 py-3 bg-white focus:ring-2 focus:ring-blue-500"
                                placeholder="Password"
                            />
                            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 2C10.346 2 9 3.346 9 5v2m6-3c0 1.654-1.346 3-3 3v2m3-5V5m0 14a2 2 0 11-4 0m4 0H8m5 0v-1m0-2v2m-6-2v-3m6 0v1m0 3v2m0-3v-3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mb-6">
                        <a href="#" className="text-blue-500 text-sm">
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                {/* Create Account */}
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-500 font-medium">
                            Create account
                        </a>
                    </p>
                </div>

                {/* Social Login */}
                <div className="mt-8">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center mb-4">
                        <img src="src/assets/images/facebook.png" alt="Facebook" className="w-5 h-5 mr-2" />
                        Login with Facebook
                    </button>
                    <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg flex items-center justify-center mb-4">
                        <img src="src/assets/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
                        Login with Google
                    </button>
                    <button className="w-full bg-black text-white py-2 rounded-lg flex items-center justify-center">
                        <img src="src/assets/images/apple.png" alt="Apple" className="w-5 h-5 mr-2" />
                        Login with Apple
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
