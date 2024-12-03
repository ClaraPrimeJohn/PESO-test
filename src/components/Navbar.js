import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import pesoLogo from "../assets/peso-logo.png";
import { CgProfile } from "react-icons/cg";
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { auth } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
       
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            unsubscribe(); 
        };
    }, []);

    // Handle the logout process
    const handleLogout = async () => {
        try {
            await signOut(auth); 
            toast.success("Logged out successfully!", { 
                position: "top-center",
                autoClose: 1000,
            });
            navigate("/"); 
        } catch (error) {
            console.error("Error during sign out:", error);
            toast.error("Error logging out. Please try again.", {
                position: "top-center",
                autoClose: 1000,
            });
        }
    };

    return (
        <div>
            <ToastContainer />

            <header
                className={`bg-white shadow-md px-6 py-2 flex items-center justify-between fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "shadow-md bg-white/80 backdrop-blur-md py-2 text-gray-900"
                    : "bg-transparent py-3"
                    }`}
            >
                <img className="w-16 h-16 rounded-full" src={pesoLogo} alt="logo" />

                <h1 className="font-bold pl-2">Public Employment Service Office</h1>

                {/* Hamburger Menu Button for mobile */}
                <button
                    className="lg:hidden text-3xl text-black"
                    onClick={() => setIsDrawerOpen(true)}
                >
                    <RiMenu3Line />
                </button>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex justify-center items-center w-full space-x-6">
                    <Link to="/" className="text-black nav-effects">Home</Link>
                    <Link to="/about-us" className="text-black nav-effects">About us</Link>
                    <Link to="/announcement" className="text-black nav-effects">Announcement</Link>
                    <Link to="/job-listing" className="text-black nav-effects">Job listing</Link>
                    <Link to="/contact-us" className="text-black nav-effects">Contact us</Link>
                </nav>

                {/* Login/Profile Dropdown */}
                <div className="relative hidden lg:block">
                    {user ? (
                        <button className="flex items-center text-black hover:text-darkblue min-w-max" onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}>
                            {user ? (
                                <img
                                    src={user.photoURL || "https://via.placeholder.com/150"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            ) : (
                                <span>Loading...</span>
                            )}
                             <span className="text-base pl-2">{user.displayName || "Profile"}</span>
                            <RiArrowDropDownLine className={`text-4xl transform transition-transform duration-300 ${isLoginDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                    ) : (
                        // If the user is not logged in, show the login button
                        <Link to="/login" className="flex items-center text-black hover:text-darkblue">
                            <CgProfile className="text-xl mx-2" /> Login
                        </Link>
                    )}
                    {isLoginDropdownOpen && user && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                            <ul className="py-2">
                                <li className="px-4 py-2 cursor-pointer nav-effects">
                                    <Link to="/profile" className="flex items-center space-x-2 w-full">
                                        <CgProfile className="text-2xl" />
                                        <span>Profile</span>
                                    </Link>
                                </li>
                                <li className="px-4 py-2 cursor-pointer nav-effects">
                                    <button onClick={handleLogout} className="flex items-center space-x-2 w-full">
                                        <FaUserEdit className="text-2xl" />
                                        <span>Log out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button className="text-2xl" onClick={() => setIsDrawerOpen(false)}>
                        <RiCloseLine />
                    </button>
                </div>
                <nav className="flex flex-col p-8  h-full space-y-6 text-center">
                    <Link to="/" className="text-black nav-effects  border-b border-gray-300">Home</Link>
                    <Link to="/about-us" className="text-black nav-effects  border-b border-gray-300">About us</Link>
                    <Link to="/announcement" className="text-black nav-effects  border-b border-gray-300">Announcement</Link>
                    <Link to="/job-listing" className="text-black nav-effects  border-b border-gray-300">Job listing</Link>
                    <Link to="/contact-us" className="text-black nav-effects  border-b border-gray-300">Contact us</Link>
                    {/* Login/Profile Dropdown Inside Drawer */}
                    <div>
                        {user ? (
                             <button className="flex items-center space-x-2 text-black hover:text-darkblue min-w-max" onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}>
                             {user ? (
                                 <img
                                     src={user.photoURL || "https://via.placeholder.com/150"}
                                     alt="Profile"
                                     className="w-10 h-10 rounded-full object-cover"
                                 />
                             ) : (
                                 <span>Loading...</span>
                             )}
                             <span className="text-base pl-2">{user.displayName || "Profile"}</span>
                             <RiArrowDropDownLine className={`text-4xl transform transition-transform duration-300 ${isLoginDropdownOpen ? "rotate-180" : ""}`}
                             />
                         </button>
                        ) : (
                            <Link to="/login" className="flex items-center text-black w-full hover:text-darkblue">
                                <CgProfile className="text-xl mr-2" /> Login
                            </Link>
                        )}
                        {isLoginDropdownOpen && user && (
                            <div className="mt-2 w-full bg-white rounded-lg shadow-lg border">
                                <ul className="py-2">
                                    <li className="px-4 py-2 nav-effects">
                                        <Link to="/profile" className="flex items-center space-x-2 w-full">
                                            <CgProfile className="text-2xl" />
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li className="px-4 py-2 nav-effects">
                                        <button onClick={handleLogout} className="flex items-center space-x-2 w-full">
                                            <FaUserEdit className="text-2xl" />
                                            <span>Log out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
