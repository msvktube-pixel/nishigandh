import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} height={40} width={110} alt="" />
        {/* <span>Nishigandh Hospital</span> */}
      </div>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav activeMenu" : "nav"}>
        <ul className="nav-links">

          <li>
            <NavLink 
              to="/" 
              onClick={() => setMenuOpen(false)}   // 👈 ADD THIS
              className={({ isActive }) => isActive ? "link active" : "link"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/about" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "link active" : "link"}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/services" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "link active" : "link"}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/gallery" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "link active" : "link"}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "link active" : "link"}
            >
              Contact
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}