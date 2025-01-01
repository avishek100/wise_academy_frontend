import React from "react";

function home() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen p-6">

            {/* Special Offer */}
            <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg mb-6">
                <h2 className="text-lg font-semibold">25% OFF*</h2>
                <p>
                    Today's Special: Get a Discount for Every Course Order only Valid for
                    Today!
                </p>
            </div>

            {/* Categories */}
            <section className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Categories</h3>
                    <a href="#" className="text-blue-500 hover:underline">
                        See All
                    </a>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        3D Design
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        Arts & Humanities
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        Graphic Design
                    </a>
                </div>
            </section>

            {/* Popular Courses */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Popular Courses</h3>
                    <a href="#" className="text-blue-500 hover:underline">
                        See All
                    </a>
                </div>
                {/* Course Filters */}
                <div className="flex space-x-4 mb-4">
                    <a
                        href="#"
                        className="px-4 py-2 bg-blue-500 text-white rounded-full"
                    >
                        All
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        Graphic Design
                    </a>
                    <a
                        href="#"
                        className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                        3D Design
                    </a>
                </div>
                {/* Course Card */}
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <h4 className="font-semibold text-gray-900">
                        Graphic Design Advanced
                    </h4>
                    <p className="text-gray-500 text-sm">
                        Rs 200 | 4.2 ⭐ | 7830 Students
                    </p>
                </div>
            </section>
        </div>
    );
}

export default home;
