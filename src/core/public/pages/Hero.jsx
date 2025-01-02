import React from "react";

const Hero = () => {
    return (
        <section className="bg-white text-white h-screen flex items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Unlock Your Potential with <span className="text-yellow-300">Wise Academy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black">
                        Discover the best learning resources, books, and video lectures to
                        achieve your dreams. Start your journey today!
                    </p>
                    <div className="space-x-4">
                        <a
                            href="#"
                            className="bg-yellow-300 text-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="bg-blue-500 border-2 dark:border-blue-500 py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-yellow-300
                             transition duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image/Illustration */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="src/assets/images/banner.png" // Replace with your image path
                        alt="Learning Illustration"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
