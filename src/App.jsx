import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      <div className="h-screen bg-[url('./components/assets/localop.jpg')] bg-cover bg-no-repeat">
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
