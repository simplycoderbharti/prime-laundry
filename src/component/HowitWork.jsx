import React, { useEffect } from "react";
import "./howitWork.css";
import schedule from '../assets/schedule.png'
import Inspect from '../assets/inspect.png'
import clean from '../assets/clean.png'
import deliver from '../assets/deliver.png'
const steps = [
  {
    id: "01",
    img: schedule,
    title: "Schedule",
    desc: "Book online, call us, or drop by. Choose pickup or bring your items to our location",
  },
  {
    id: "02",
    img: Inspect,
    title: "Inspect",
    desc: "We examine each item, identify stains, and determine the best cleaning method",
  },
  {
    id: "03",
    img: clean,
    title: "Clean",
    desc: "Professional cleaning with quality care, pressing, and protective packaging",
  },
  {
    id: "04",
    img: deliver,
    title: "Deliver",
    desc: "Fresh, pressed garments delivered to your door or ready for pickup",
  },
];

const HowItWorks = () => {
  // Scroll-triggered animations removed — no-op effect kept for future use
  useEffect(() => { return () => {}; }, []);

  return (
    <div className="how-container">
      <span className="tag">Pickup & Deliver</span>
      <h2>How It <span className="text-highlight">Works</span></h2>

      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div className="step-item animate-fade-in-up" key={index} style={{animationDelay: `${index * 0.2}s`}}>
            
            {/* Circle */}
            <div className="circle">
              <img src={step.img} alt="" />
              <span className="number">{step.id}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>

          </div>
        ))}
      </div>

      <button className="btn animate-fade-in-up" style={{animationDelay: '1s'}}>Book Our Services Now →</button>
    </div>
  );
};

export default HowItWorks;