import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/register", { name, email, password });
            console.log("Signup successful:", res.data); // Log response
            navigate("/login");
        } catch (err) {
            console.error("Signup error:", err.response?.data || err.message); // Log error
            setError(err.response?.data?.message || "Failed to create account. Try again!");
        }
    };


    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-white flex flex-col justify-center items-center">
                <img src="/public/assets/images/logologin.png" alt="Wise Academy Logo" className="h-45" />
            </div>

            <div className="w-1/2 bg-white flex flex-col justify-center px-16">
                <form className="w-3/4 max-w-md" onSubmit={handleSignup}>
                    <h2 className="text-2xl font-bold text-black mb-4">Create Your Account</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}
                               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                               placeholder="Enter your name" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                               placeholder="Enter your email" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-black mb-1">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                               placeholder="Enter your password" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-black mb-1">Confirm Password</label>
                        <input type="password" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                               placeholder="Confirm your password" required />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
