import React from 'react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
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

  return (
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
        <p style={{ color: 'white', opacity: 0.8, marginBottom: '20px', maxWidth: '600px' }}>
          Join 5,000+ happy customers in Noida Extension who trust us with their premium garments.
        </p>
        <button className="cta-btn" onClick={handleBooking}>Start Your Order Now →</button>
      </div>
    </section>
  );
};

export default AboutCTA;