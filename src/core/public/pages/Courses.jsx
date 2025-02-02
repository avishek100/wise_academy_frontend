import { Link } from 'react-router-dom';

function Courses() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold">Courses</h1>
            <Link to="/courses/add" className="bg-green-500 text-white p-2 rounded inline-block mt-4">Add New Course</Link>
            {/* Course list can be displayed here */}
        </div>
    );
}
export default Courses;