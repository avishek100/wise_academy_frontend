


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./core/public/pages/Home.jsx";
import Login from "./core/public/pages/Login.jsx";
import Signup from "./core/public/pages/Signup.jsx";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/*<Route path="/signup" element={<SignUpPage />} />*/}
                <Route path="/signup" element={<Signup />} />

            </Routes>
        </Router>
    );
};

export default App;

