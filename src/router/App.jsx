import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "../Companants/ScrollToTop";   // ✅ correct
import Navbar from "../Companants/Navbar";
import Footer from "../Companants/Footer";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Services from "../pages/Services/Services";

export default function App() {
  return (
    <Router>

      {/* Scroll Fix */}
      <ScrollToTop />

      {/* Layout */}
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>

    </Router>
  );
}