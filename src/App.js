import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Login from "./components/Login";
import JobListing from "./pages/JobLisitng";

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== "/login" && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/announcement" element={<AboutUs />} />
                <Route path="/job-listing" element={<JobListing />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
