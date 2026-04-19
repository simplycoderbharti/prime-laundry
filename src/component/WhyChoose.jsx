import React, { useEffect, useState, useRef } from "react";
import "./whychoose.css";
import why from "../assets/why-choose-one-img.jpg";
import experienced from '../assets/experienced.png';

/* ✅ COUNTER (smooth + duration control) */
const Counter = ({ target, start, duration = 1200 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const value = Math.min((progress / duration) * target, target);
      setCount(Math.floor(value));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target, duration]);

  return <h3>{count}{target === 99 ? "%" : "+"}</h3>;
};

const WhyChoose = () => {

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef();

  /* ✅ SCROLL TRIGGER (only once) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // ek baar hi chale
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-ui" ref={sectionRef}>

      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-img">
          <img src={why} alt="laundry" />
          <div className="play-btn">▶</div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content">

          <span className="tag">Why Choose Us</span>

          <h2>Our Laundry Services Benefits</h2>

          <p className="desc">
            We provide top-quality laundry services with attention to detail,
            ensuring your clothes are handled with care.
          </p>

          {/* FEATURES */}
          <div className="features">

            <div className="feature">
              <div className="icon"><img src={experienced} alt="experienced"/></div>
              <div>
                <h4>Experienced Professionals</h4>
                <p>Trained experts in fabric care & stain removal.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon green">⚙️</div>
              <div>
                <h4>Modern Equipment</h4>
                <p>Advanced machines for superior cleaning.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon gray">🏷️</div>
              <div>
                <h4>Affordable Pricing</h4>
                <p>Transparent pricing with no hidden cost.</p>
              </div>
            </div>

            <div className="feature">
              <div className="icon blue">🚚</div>
              <div>
                <h4>Fast Turnaround</h4>
                <p>Quick 48-hour service available.</p>
              </div>
            </div>

          </div>

          {/* PROGRESS */}
          <div className="progress-section">

            <div className="progress-item">
              <div className="progress-header">
                <p>Laundry Services</p>
                <span>91%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: "91%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <p>Dry Cleaning Excellence</p>
                <span>78%</span>
              </div>
              <div className="bar">
                <div className="fill" style={{ width: "78%" }}></div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 🔥 COUNTER SECTION */}
      <div className="counter-section">

        <div className="counter-box">
          <Counter target={15} start={startCount} duration={800} />
          <p>Years Experience</p>
        </div>

        <div className="counter-box">
          <Counter target={5000} start={startCount} duration={1500} />
          <p>Happy Customers</p>
        </div>

        <div className="counter-box">
          <Counter target={99} start={startCount} duration={1200} />
          <p>Satisfaction Rate</p>
        </div>

      </div>

    </section>
  );
};

export default WhyChoose;