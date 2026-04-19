import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import Marquee from "../component/Marquee";

export default function Contact() {
  const handleBooking = () => {
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "tel:+919315163536";
    } else {
      window.open(
        "https://wa.me/919315163536?text=Hello%20I%20want%20to%20book%20laundry%20service",
        "_blank"
      );
    }
  };

  const contactOptions = [
    {
      title: "Call Us",
      detail: "+91 93151 63536",
      sub: "Mon - Sun: 9 AM - 9 PM",
      icon: "📞",
      action: () => window.location.href = "tel:+919315163536"
    },
    {
      title: "WhatsApp",
      detail: "Chat with Experts",
      sub: "Instant response for bookings",
      icon: "💬",
      action: handleBooking
    },
    {
      title: "Visit Us",
      detail: "Noida Extension",
      sub: "Gaur City, Uttar Pradesh",
      icon: "📍",
      action: () => window.open("https://maps.google.com", "_blank")
    },
    {
      title: "Email Us",
      detail: "hello@primelaundry.com",
      sub: "For corporate inquiries",
      icon: "✉️",
      action: () => window.location.href = "mailto:hello@primelaundry.com"
    }
  ];

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-overlay"></div>
        <div className="container hero-centered">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="info-card-large"
          >
           
            <h1>How Can We <br /> Help You Today?</h1>
            <p className="desc">
              Whether you have a question about our services or want to schedule a pickup, 
              our team is ready to provide you with the best fabric care experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-info container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">Contact Options</span>
          <h2>Reach Out to Our Team</h2>
        </motion.div>

        <div className="contact-grid-v2">
          {contactOptions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="contact-card-v2"
              onClick={item.action}
            >
              <div className="contact-icon-v2">{item.icon}</div>
              <h4>{item.title}</h4>
              <p className="contact-detail">{item.detail}</p>
              <p className="contact-sub">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="contact-marquee-wrapper">
        <Marquee />
      </div>

      {/* CTA (Unified Design) */}
      <section className="cta-banner">
        <div className="overlay">
          <h1>Ready for the <br /> <span>Prime Experience?</span></h1>
          <button className="cta-btn" onClick={handleBooking}>Schedule a Pickup Now →</button>
        </div>
      </section>
      {/* CONTACT FORM */}
<section className="contact-form-section form-container">

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="form-wrapper"
  >
 <div className="kicker">Get in Touch</div>
    <h2>Send Us a Message</h2>
    <p className="form-sub">
      Have a query or want to book a service? Fill the form and we’ll get back to you.
    </p>

    <form className="contact-form">

      <div className="form-row">
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />
      </div>

      <textarea placeholder="Your Message..." rows="5" required></textarea>

      <button type="submit" className="form-btn">
        Send Message →
      </button>

    </form>

  </motion.div>

</section>
    </div>
    
  );
}