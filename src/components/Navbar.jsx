import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-xl font-semibold">
          <div className="flex space-x-4">
            <img
              src="icono.png"
              alt="logo"
              width={30}
              height={15}
            />
            <p>Fotomedia Express</p>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link
            to="/Products"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Productos
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Servicios
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300 ease-in-out">
            Contactanos
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 w-full">
              <Link
                to="/"
                className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link
                to="/productos"
                className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Productos
              </Link>
              <Link
                to="/services"
                className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-white p-4 hover:bg-gray-700 transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}>
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
