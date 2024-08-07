import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuIconOpen, setIsMenuIconOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuIconOpen(!isMenuIconOpen);
  };

  // Navbar Items
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Posts" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-bg-header text-white fixed top-0 left-0 right-0 z-20">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-white">
          <span className="text-yellow-600">Burma</span> Blog
        </a>
        {/* Navbar items for large screen */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-700 transition"
          >
            Login
          </button>
        </div>
        {/* For Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuIconOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-bg-header ${
            isMenuIconOpen
              ? "fixed top-0 left-0 w-full transition ease-out duration-100"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={path}
                onClick={() => setIsMenuIconOpen(false)}
              >
                {link}
              </NavLink>
            </li>
          ))}
          <li className="text-white">
            <button
              onClick={() => {
                navigate("/signup");
                setIsMenuIconOpen(false);
              }}
              className="w-full text-left"
            >
              Sign Up
            </button>
          </li>
          <li className="text-white">
            <button
              onClick={() => {
                navigate("/login");
                setIsMenuIconOpen(false);
              }}
              className="w-full text-left"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
