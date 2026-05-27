import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-wrapper">

        {/* LEFT */}
        <div className="footer-box highlight-box">
          <h2 className="footer-logo">🏥Nishigandh Clinic and Hospital Shevgaon</h2>
          <p>
            Providing trusted healthcare with modern facilities and 
            compassionate care since 1999.
          </p>

          <div className="footer-badges">
            <span>✔ 24/7 Emergency</span>
            <span>✔ Expert Doctors</span>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-box">
          <h3>Contact Info</h3>
          <p>📍 Shevgaon, Maharashtra</p>
          <p>📞 +912429222251</p>
          <p>✉️ bharat.virkar@yahoo.com</p>

          <a href="tel:+912429222251" className="footer-call">
            📞 Emergency Call
          </a>
        </div>

        {/* SOCIAL */}
        <div className="footer-box">
          <h3>Stay Connected</h3>

       <div className="social-icons">
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">🌐</a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘</a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
</div>
          <p className="footer-note">
            We are always here to help you.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
    <div className="footer-bottom">
  <div className="footer-bottom-content">
    
    <p className="copyright">
      © 2026 <span>Nishigandh Clinic & Hospital</span>. All Rights Reserved.
    </p>

    <p className="developer">
      Designed & Developed by 
      <a href="https://stumaka.com/" target="_blank" rel="noopener noreferrer">
        Stumaka Tech
      </a>
    </p>

  </div>
</div>

    </footer>
  );
}