import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 shadow-md">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="src/assets/images/wiseacademy.png"
                        alt="Logo"
                        className="h-20 w-20"
                    />
                    <span className="ml-2 text-lg font-semibold text-black">Wise Academy</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <a
                        href="#"
                        className="text-black font-medium hover:text-white"
                    >
                        Categories
                    </a>
                    <a
                        href="#"
                        className="text-black font-medium hover:text-white"
                    >
                        Bookmarks
                    </a>
                    {/*<a*/}
                    {/*    href="#"*/}
                    {/*    className="text-gray-500 font-medium hover:text-indigo-600"*/}
                    {/*>*/}
                    {/*    Projects*/}
                    {/*</a>*/}
                    {/*<a*/}
                    {/*    href="#"*/}
                    {/*    className="text-gray-500 font-medium hover:text-indigo-600"*/}
                    {/*>*/}
                    {/*    Calendar*/}
                    {/*</a>*/}
                </div>

                {/* Search Bar */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-100 rounded-lg pl-10 pr-4 py-2 text-sm text-black-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-500">
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
                    d="M8 16l4-4m0 0l4 4m-4-4v12"
                />
              </svg>
            </span>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-indigo-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.576-.576L15 17z"
                                />
                            </svg>
                        </button>
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="h-10 w-10 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
