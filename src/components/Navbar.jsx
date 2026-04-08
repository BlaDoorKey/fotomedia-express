import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    gsap.from(".nav-link", { 
      duration: 1, 
      y: -20, 
      opacity: 0, 
      stagger: 0.2, 
      ease: "power3.out" 
    });
    gsap.from(".logo", { 
      duration: 1, 
      x: -20, 
      opacity: 0, 
      ease: "power3.out" 
    });
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold tracking-wider logo">
          <div className="flex items-center space-x-2">
            <img src="/Logo.png" alt="logo" width={40} height={40} className="rounded-full" />
            <span>Fotomedia Express</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium nav-link">
            Inicio
          </Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium nav-link">
            Productos
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium nav-link">
            Servicios
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out font-medium nav-link">
            Contáctanos
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold nav-link">
              Inicia Sesión
            </Link>
            <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold nav-link">
              Registrarse
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white p-2 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-20 right-0 bg-gray-800 w-full z-10 rounded-b-lg shadow-xl">
              <Link to="/" className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>Inicio</Link>
              <Link to="/products" className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>Productos</Link>
              <Link to="/services" className="block text-white p-4 border-b border-gray-700 hover:bg-gray-700 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>Servicios</Link>
              <Link to="/contact" className="block text-white p-4 hover:bg-gray-700 transition duration-300 ease-in-out" onClick={toggleMobileMenu}>Contáctanos</Link>
              <div className="p-4">
                <Link to="/login" className="block bg-blue-500 text-center hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold mb-2">Login</Link>
                <Link to="/signup" className="block bg-green-500 text-center hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out font-semibold">Sign Up</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
