import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/new-logo.png';
import './QuoteModal.css';
import emailjs from '@emailjs/browser';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Reset form after a delay or handle logic
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);
    } else {
      setErrors(validationErrors);
    }
  };

const handleForm = (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length === 0) {

    console.log("📤 Sending data:", formData);

    emailjs.send(
      "service_upfrttp",   // ✅ UPDATED SERVICE ID
      "template_mjj6mws",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      },
      "81pPMIuvmvjAPpb_T"
    )
    .then((response) => {
      console.log("✅ Email Sent:", response);

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({ name: '', email: '', phone: '' });
      }, 3000);

    })
    .catch((error) => {
      console.error("❌ Email Error:", error);

      alert("Email send failed ❌");

      // fallback WhatsApp
      const message = `New Lead:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;

      const phoneNumber = "91XXXXXXXXXX";
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });

  } else {
    console.log("⚠️ Validation Errors:", validationErrors);
    setErrors(validationErrors);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-wrapper">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ x: "-50%", y: "-48%", opacity: 0, scale: 0.95 }}
            animate={{ x: "-50%", y: "-50%", opacity: 1, scale: 1 }}
            exit={{ x: "-50%", y: "-48%", opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-container"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-content">
              {!isSubmitted ? (
                <>
                  <div className="modal-header">
                    <div className="modal-icon logo-wrapper">
                      <img src={logo} alt="Prime Laundry Logo" className="modal-logo-img" />
                    </div>
                    <h2 className="modal-title">
                      Claim Your <span>Exclusive Offer</span>
                    </h2>
                    <p className="modal-description">
                      Join 10k+ happy clients. Get your 30% OFF coupon sent instantly to your phone.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>

                    <button
                      type="submit"
                      className="submit-btn"
                      onClick={handleForm}
                    >
                      Get My Coupon
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="success-container"
                >
                  <div className="success-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="success-title">You're All Set!</h2>
                  <p className="success-description">
                    Success! Check your messages. We've sent the code to <strong>{formData.phone}</strong>.
                  </p>
                  <p className="success-footer">Closing Shortly</p>
                </motion.div>
              )}
            </div>

            {/* Bottom Decor */}
            <div className="bottom-decor" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
