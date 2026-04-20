import React, { useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import Marquee from "../component/Marquee";
import emailjs from "@emailjs/browser";

// ✅ FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {

  // ✅ state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // ✅ validation
  const validate = () => {
    let err = {};
    if (!formData.name.trim()) err.name = "Name required";
    if (!formData.phone.match(/^\d{10}$/)) err.phone = "Valid number required";
    if (!formData.address.trim()) err.address = "Address required";
    if (!formData.message.trim()) err.message = "Message required";
    return err;
  };

  // ✅ submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.send(
      "service_9dwgpfv",
      "template_j39n781",
      {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        message: formData.message
      },
      "NRqZk4Nff8L_TufdT"
    )
    .then(() => {
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", address: "", message: "" });
      }, 3000);
    })
    .catch(() => {
      alert("Failed ❌");
    });
  };

  // ✅ icons updated
  const contactOptions = [
    {
      title: "Call Us",
      detail: "+91 93151 63536",
      sub: "Mon - Sun: 9 AM - 9 PM",
      icon: <FontAwesomeIcon icon={faPhone} />,
      action: () => window.location.href = "tel:+919315163536"
    },
    {
      title: "WhatsApp",
      detail: "Chat with Experts",
      sub: "Instant response for bookings",
      icon: <FontAwesomeIcon icon={faWhatsapp} />,
      action: handleBooking
    },
    {
      title: "Visit Us",
      detail: "Noida Extension",
      sub: "Gaur City, Uttar Pradesh",
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      action: () => window.open("https://maps.google.com", "_blank")
    },
    {
      title: "Email Us",
      detail: "hello@primelaundry.com",
      sub: "For corporate inquiries",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
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
              our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="contact-info container">
        <div className="contact-grid-v2">
          {contactOptions.map((item, index) => (
            <motion.div 
              key={index}
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

      {/* FORM */}
      <section className="contact-form-section form-container">
        <div className="form-wrapper">

          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e)=>setFormData({...formData,name:e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e)=>setFormData({...formData,phone:e.target.value})}
                />
              </div>

              {/* ✅ Address added */}
              <input
                type="text"
                placeholder="Your Address"
                value={formData.address}
                onChange={(e)=>setFormData({...formData,address:e.target.value})}
              />

              <textarea
                placeholder="Your Message..."
                rows="5"
                value={formData.message}
                onChange={(e)=>setFormData({...formData,message:e.target.value})}
              ></textarea>

              <button type="submit" className="form-btn">
                Send Message →
              </button>

            </form>
          ) : (
            <h3 style={{textAlign:"center"}}>Message Sent ✅</h3>
          )}

        </div>
      </section>

    </div>
  );
}