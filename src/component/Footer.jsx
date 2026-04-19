import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">PRIME <span>DRY CLEAN</span></div>
          <p>Providing premium laundry and dry cleaning services with a focus on quality, sustainability, and customer convenience.</p>
          <div className="socials">
            <div>f</div>
            <div>𝕏</div>
            <div>in</div>
          </div>
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
          <p>📍 Gaur City 2, Noida Extension, Uttar Pradesh</p>
          <p>📞 +91 9315163536</p>
          <p>📧 support@primedryclean.com</p>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem', opacity: 0.5 }}>
        © 2026 Prime Dry Clean & Laundry Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;