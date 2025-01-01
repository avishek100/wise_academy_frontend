import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyWebsite</h1>
        <p className="text-gray-600 text-lg mb-6">Build amazing websites with Tailwind CSS and React</p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
