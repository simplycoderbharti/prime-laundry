import React, { useState } from "react";
import "./home.css";
import { motion } from "framer-motion";
import wash from '../assets/wash.jpg'
import heroImg from '../assets/hero-img.png'
import specialty from '../assets/specialty.png'
import service from '../assets/service.png'
import WhyChoose from "../component/WhyChoose";
import HowItWorks from "../component/HowitWork";
import About from "../component/About";
import QuoteModal from "../component/QuoteModal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
const navigate = useNavigate();
const handleBooking = () => {
  setIsModalOpen(true);
};
const handleBook = () => {
  const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // 📱 Mobile → Call
    window.location.href = "tel:+919315163536";
  } else {
    // 💻 Desktop → WhatsApp
    window.open(
      "https://wa.me/919315163536?text=Hello%20I%20want%20to%20book%20laundry%20service",
      "_blank"
    );
  }
};
  // Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="home">

      {/* HEADER */}
      {/* <header className="header">
        <div className="logo">
          <img src={service} alt="logo" />
          <span>PRIME DRY CLEAN</span>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button onClick={handleBooking}>Book Pickup</button>
      </header> */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-left"
          >
            {/* <div className="small-top">+91 9315163536</div> */}
            <motion.div
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-badge"
            >
              <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_touohxv0.json"  background="transparent"  speed="1"  style={{width: '44px', height: '44px'}}  loop  autoplay></lottie-player>
              <span>30% OFF Your First Order</span>
            </motion.div>
            <h1>
              Your Professional
              <br />
              <span className="highlight">Friendly</span>
              <br />
              Laundromat
            </h1>
            <p className="hero-sub">They handle your garments with the utmost care and attention, ensuring thorough Cleaning, Ironing, and Folding.</p>

            <div className="hero-ctas">
              <button className="btn-primary" onClick={handleBook}>Book Now</button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="about-cta" 
                onClick={handleBooking}
              >
                Learn Our Process <span></span>
              </motion.button>
            </div>
          </motion.div>

          <div className="hero-right">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="image-frame"
            >
              {/* Background Blob SVG */}
              <div className="hero-blob">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                  <path id="blob" d="M390.5,337Q351,424,260.5,406.5Q170,389,106.5,319.5Q43,250,92.5,156.5Q142,63,255,54Q368,45,399,147.5Q430,250,390.5,337Z" fill="var(--primary)" opacity="0.12"></path>
                </svg>
              </div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <img 
                  src={heroImg} 
                  alt="Hero" 
                  className="hero-direct-img" 
                  loading="eager" 
                  fetchpriority="high"
                  width="580"
                  height="580" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES */}
      <section className="services-new">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="tag">Our Services</span>
          <h2>Tailored Solutions for Your <span className="text-highlight">Daily Needs</span></h2>
        </motion.div>

        <div className="services-container">
          {/* LEFT COLUMN */}
          <div className="services-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <div className="text">
                <h3>Dry Cleaning</h3>
                <p>Eco-friendly solvent cleaning for your premium suits and silks.</p>
              </div>
              <img src={wash} className="circle-img" alt="Dry Cleaning" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <div className="text">
                <h3>Specialty Items</h3>
                <p>Wedding gowns, lehengas, and heavy designer wear.</p>
              </div>
              <img src={specialty} className="circle-img" alt="Specialty" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <div className="text">
                <h3>Tailoring</h3>
                <p>Perfect fit adjustments and professional garment repairs.</p>
              </div>
              <img src={service} className="circle-img" alt="Tailoring" />
            </motion.div>
          </div>

          {/* CENTER IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="services-center"
          >
            <img src={service} alt="center" />
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="services-right">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <img src={wash} className="circle-img" alt="Wash & Fold" />
              <div className="text">
                <h3>Wash & Fold</h3>
                <p>Convenient everyday laundry service for busy families.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <img src={specialty} className="circle-img" alt="Commercial" />
              <div className="text">
                <h3>Commercial</h3>
                <p>Bulk laundry services for hotels, spas, and gyms.</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10 }}
              className="service-item"
            >
              <img src={service} className="circle-img" alt="Delivery" />
              <div className="text">
                <h3>Pickup & Delivery</h3>
                <p>Free doorstep pickup and delivery in Noida Extension.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Includes Counter Section) */}
      <WhyChoose />

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get Your Laundry Done Right <br /> <span>30% OFF</span> Your First Order
          </motion.h1>
         <button className="cta-btn" onClick={() => navigate("/contact")}>
  Claim Your Discount →
</button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* GET IN TOUCH */}
      <section id="contact" className="contact">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-container"
        >
          <span className="tag">Get In Touch</span>
          <h2>Ready for <span className="text-highlight">Premium Care?</span></h2>
          <p className="contact-intro">Experience the best laundry and dry cleaning service in Noida Extension. Our team is ready to assist you.</p>
          
          <div className="contact-cards-row">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="contact-card-item"
            >
              <div className="card-icon">📞</div>
              <h3>Call or WhatsApp</h3>
              <p><a href="tel:+919315163536">9315163536</a></p>
              <p><a href="tel:+919667929020">9667929020</a></p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="contact-card-item"
            >
              <div className="card-icon">📍</div>
              <h3>Our Location</h3>
              <p>Gaur City 2, Noida Extension</p>
              <p>Uttar Pradesh, India</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="contact-card-item"
            >
              <div className="card-icon">🕒</div>
              <h3>Working Hours</h3>
              <p>Mon - Sat: 8 AM - 8 PM</p>
              <p>Sunday: Closed</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-action"
          >
            <button className="btn-primary" onClick={handleBooking}>Book Your Pickup Now →</button>
            <div className="form-decoration">✨ Priority Service Guaranteed</div>
          </motion.div>
        </motion.div>
      </section>

      {/* MODAL */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;