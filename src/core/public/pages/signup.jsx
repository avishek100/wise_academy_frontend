import React from "react";

const SignUpPage = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-1/2 flex justify-center items-center bg-gray-100">
                <div className="text-center">
                    <img src="src/assets/images/loginlogo.png" alt="Wise Academy Logo" className="w-32 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold text-blue-600">WISE ACADEMY</h1>
                    <p className="text-black mt-2">Learn. Grow. Succeed.</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/2 flex flex-col justify-center items-center">
                <form className="w-3/4 max-w-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Create Your Account</h2>

                    {/* Input Fields */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-white mb-1">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Sign Up
                    </button>

                    {/* Social Login */}
                    <div className="mt-4">
                        <p className="text-center text-sm text-white mb-2">Or sign up with</p>
                        <div className="flex justify-center gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white hover:bg-blue-500">
                                <img src="src/assets/images/facebook.png" alt="Facebook" className="w-5" />
                                Facebook
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white hover:bg-blue-500">
                                <img src="src/assets/images/google.png" alt="Google" className="w-5" />
                                Google
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-white hover:bg-blue-500">
                                <img src="src/assets/images/apple.png" alt="Apple" className="w-5" />
                                Apple
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <a href="/login" className="text-blue-600 hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
