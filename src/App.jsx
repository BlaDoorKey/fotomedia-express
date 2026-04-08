import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products />}
          />
          <Route
            path="/services"
            element={<Services />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
