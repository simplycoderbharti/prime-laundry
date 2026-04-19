import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/home.css"; // Reusing header styles
import logo from "../assets/new-logo.png";
import QuoteModal from "./QuoteModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Prime Laundry" loading="eager" width="100" height="80" />
      </Link>
      <nav className={isOpen ? "nav-active" : ""}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/services" onClick={closeMenu}>Our Services</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <button className="mobile-call-btn" onClick={() => window.location.href = "tel:+919315163536"}>
          Call Now: +91 9315163536
        </button>
      </nav>
      <div className="nav-actions">
        <button onClick={() => setIsModalOpen(true)}>
          Get a Quote
        </button>
        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>

    <QuoteModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
    </>
  );
};

export default Navbar;