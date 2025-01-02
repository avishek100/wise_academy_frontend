import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./core/public/pages/Home.jsx";
import Login from "./core/public/pages/Login.jsx";
import Signup from "./core/public/pages/Signup.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./core/public/pages/Hero.jsx";

const App = () => {
    return (
        <Router>
            <div className="app-container">

                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/hero" element={<Hero />} />
                        <Route path="home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        {/*<Route path="/signup" element={<Signup />} />*/}

                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
