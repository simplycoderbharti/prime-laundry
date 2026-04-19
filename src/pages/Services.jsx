import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import Marquee from "../component/Marquee";

export default function Services() {
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

  const services = [
    {
      id: "01",
      title: "Premium Dry Cleaning",
      desc: "Specialized care for delicate fabrics, suits, and designer wear using eco-friendly solvents.",
      icon: "👔",
    },
    {
      id: "02",
      title: "Wash & Fold",
      desc: "Everyday laundry processed with premium detergents and perfectly folded for your convenience.",
      icon: "🧺",
    },
    {
      id: "03",
      title: "Steam Pressing",
      desc: "Professional wrinkle removal that gives your clothes a crisp, brand-new appearance.",
      icon: "💨",
    },
    {
      id: "04",
      title: "Shoe Cleaning",
      desc: "Comprehensive cleaning and restoration for sneakers, leather shoes, and luxury footwear.",
      icon: "👟",
    },
    {
      id: "05",
      title: "Home Textiles",
      desc: "Deep cleaning for curtains, bedsheets, blankets, and upholstery to keep your home fresh.",
      icon: "🏠",
    },
    {
      id: "06",
      title: "Leather & Suede",
      desc: "Expert treatment for leather jackets and suede items to maintain texture and color.",
      icon: "🧥",
    },
  ];

  return (
    <div className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <div className="services-overlay"></div>
        <div className="container hero-centered">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="info-card-large"
          >
            <div className="kicker">Expert Care for Every Fabric</div>
            <h1>Our Premium <br /> Laundry Services</h1>
            <p className="desc">
              From delicate silks to heavy home textiles, we provide meticulous 
              care that preserves quality and extends the life of your garments.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary-v2" onClick={handleBooking}>Book Pickup Now —</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="services-list container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">What We Offer</span>
          <h2>Tailored Solutions for Your Needs</h2>
        </motion.div>

        <div className="services-grid-v2">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="service-card-v2"
            >
              <div className="card-number">{service.id}</div>
              <div className="card-icon-v2">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="services-marquee-wrapper">
        <Marquee />
      </div>

      {/* CTA (Unified Design) */}
      <section className="cta-banner">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the <br /> <span>Prime Difference</span>
          </motion.h1>
          <p style={{ color: 'white', opacity: 0.8, marginBottom: '20px', maxWidth: '600px' }}>
            Join thousands of satisfied customers and let us handle your laundry with expert care.
          </p>
          <button className="cta-btn" onClick={handleBooking}>Start Your Order Now →</button>
        </div>
      </section>
    </div>
  );
}