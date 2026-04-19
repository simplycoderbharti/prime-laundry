import React from "react";
import "./footer.css";
import logo from "../assets/logo.png"; // 👈 apna logo path

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          {/* ✅ LOGO IMAGE */}
          <div className="footer-logo">
            <img src={logo} alt="Prime Dry Logo" style={{ width: "140px" }} />
          </div>

          <p>
            Providing premium laundry and dry cleaning services with a focus on quality, sustainability, and customer convenience.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <p>• Home</p>
          <p>• About Us</p>
          <p>• Our Services</p>
          <p>• Contact Us</p>
        </div>

        <div className="footer-col">
          <h3>Our Location</h3>

          <p>
            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "8px" }} />
            Gaur City 2, Noida Extension, Uttar Pradesh
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "8px" }} />
            +91 9315163536
          </p>

          <p>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "8px" }} />
            support@primedryclean.com
          </p>
        </div>

      </div>

      <div
        className="footer-bottom"
        style={{
          textAlign: "center",
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontSize: "0.9rem",
          opacity: 0.5
        }}
      >
        © 2026 Prime Dry Clean & Laundry Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;