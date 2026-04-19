import React from "react";
import "./about.css";
import service from '../assets/service.png';

const keyFeatures = [
  {
    title: "Eco-Friendly",
    desc: "We use biodegradable solvents that are tough on stains but gentle on the planet.",
    icon: "🌱"
  },
  {
    title: "Expert Care",
    desc: "Our specialists handle delicate fabrics like silk and wool with professional precision.",
    icon: "👔"
  },
  {
    title: "Fast Turnaround",
    desc: "Get your fresh, pressed clothes back within 24-48 hours with our express service.",
    icon: "⚡"
  },
  {
    title: "Hygiene First",
    desc: "Strict sanitized processes ensure your garments are germ-free and fresh.",
    icon: "✨"
  },
];

const About = () => {
  return (
    <section className="about-section-new">
      <div className="about-container-new">
        {/* Introduction Side */}
        <div className="about-intro">
          <span className="about-tag">Premium Care Since 2026</span>
          <h2>Pioneering Perfection in <span className="text-highlight">Garment Care</span></h2>
          <p className="about-description">
            Prime Dry Clean & Laundry Services is Noida Extension's trusted destination for premium garment care. 
            We combine traditional expertise with modern eco-friendly technology to ensure your favorite 
            clothes last longer and look better.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <strong>10k+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Eco-Friendly</span>
            </div>
          </div>
          <button className="about-cta" onClick={() => window.location.href = "tel:+919315163536"}>Learn Our Process</button>
        </div>

        {/* Key Features Side */}
        <div className="features-grid">
          {keyFeatures.map((feature, index) => (
            <div className="feature-card-new" key={index}>
              <div className="feature-icon-new">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;