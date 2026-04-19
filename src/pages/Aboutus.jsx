import React, { useEffect } from "react";
import "./aboutus.css";
import { motion } from "framer-motion";
import Marquee from "../component/Marquee";
import logoNew from "../assets/new-logo.png";
import aboutImg from "../assets/about.png";
import scheduleImg from "../assets/schedule.jpg";

export default function Aboutus() {
  useEffect(() => {
    console.log('Aboutus component mounted');
  }, []);
  const handleBooking = () => {
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
  return (
    <div className="aboutUs">

      {/* HERO */}
      <section className="about-hero modern-hero">
        <div className="about-overlay"></div>
        <div className="container hero-centered">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="info-card-large"
          >
            <div className="kicker">Premium Fabric Care</div>
            <h1>Redefining Perfection <br /> in Every Thread</h1>
            <p className="desc">
              Discover the art of meticulous cleaning. We combine artisan expertise 
              with eco-friendly technology to ensure your favorite garments look 
              better and last longer.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary-v2" onClick={handleBooking}>Book Pickup Now —</button>
              <button className="btn-secondary" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>Learn Our Process</button>
            </div>
            <div className="hero-mini-stats">
              <span><strong>5k+</strong> Clients</span>
              <span className="dot">•</span>
              <span><strong>12+</strong> Years</span>
              <span className="dot">•</span>
              <span><strong>100%</strong> Quality</span>
            </div>
          </motion.div>
        </div>
      </section>
    

      {/* STORY */}
      <section className="story container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="subtitle">Our Story & Values</span>
          <h2>Your Trusted Laundry Care Partner</h2>
        </motion.div>

        <div className="story-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story-img"
          >
            {/* Main Image */}
            <img 
              className="main-img" 
              src={aboutImg} 
              alt="Laundry Service" 
              loading="lazy" 
              decoding="async" />

            {/* Top Small Rounded */}
            <motion.div 
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: -6 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="rounded-img top"
            >
              <img 
                src="https://cdn.pixabay.com/photo/2023/04/26/09/23/dry-cleaning-7951977_1280.jpg" 
                alt="Fabric Care" 
                loading="lazy" />
            </motion.div>

            {/* Bottom Small Rounded */}
            <motion.div 
              initial={{ scale: 0, rotate: 15 }}
              whileInView={{ scale: 1, rotate: 4 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="rounded-img bottom"
            >
              <img 
                src="https://cdn.pixabay.com/photo/2023/04/26/09/23/dry-cleaning-7951977_1280.jpg" 
                alt="Ironing" 
                loading="lazy" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="story-text"
          >
            <h3 className="story-title">Crafting Excellence in <br/><span className="text-primary">Fabric Care Since 2010</span></h3>
            <p className="story-description">
              With over a decade of industry expertise, Prime Laundry stands at the intersection of 
              traditional artisan care and cutting-edge eco-friendly technology. We don't just clean 
              garments; we preserve the stories and memories woven into every thread.
            </p>

            <div className="features-list">
              <motion.div whileHover={{ x: 10 }} className="feature-item-inline">
                <div className="feature-icon-wrapper">
                  <span className="icon">01</span>
                </div>
                <div>
                  <h4>Legacy of Trust</h4>
                  <p>Reliable laundry services with years of trusted experience.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="feature-item-inline">
                <div className="feature-icon-wrapper">
                  <span className="icon">02</span>
                </div>
                <div>
                  <h4>Customer Obsession</h4>
                  <p>Thousands of satisfied customers trust our consistency.</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="feature-item-inline">
                <div className="feature-icon-wrapper">
                  <span className="icon">03</span>
                </div>
                <div>
                  <h4>Uncompromising Quality</h4>
                  <p>We ensure top-tier service with attention to every detail.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* TEAM */}
      <section className="team container" style={{textAlign: 'center'}}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="tag">CUSTOMER TESTIMONIALS</p>
          <h2>Our Professional & Friendly Staff</h2>
        </motion.div>

        <div className="team-grid">
          {["Sunil Sharma","Monica Patel","Ramesh Verma","Priya Kumar"].map((name,i)=>(
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="team-card"
            >
              <img 
                src={`https://randomuser.me/api/portraits/${i%2===0?"men":"women"}/${i+20}.jpg`} 
                alt={name} 
                loading="lazy" 
                decoding="async" />
              <h4>{name}</h4>
              <p>Staff Member</p>
              <div className="stars">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready for the <br /> <span>Prime Experience?</span>
          </motion.h1>
          <p style={{ color: 'white', opacity: 0.8, marginBottom: '20px', maxWidth: '600px' }}>Join 5,000+ happy customers in Noida Extension who trust us with their premium garments.</p>
          <button className="cta-btn" onClick={handleBooking}>Start Your Order Now →</button>
        </div>
      </section>

    </div>
  );
}