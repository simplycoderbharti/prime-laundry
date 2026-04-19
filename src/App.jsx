import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./pages/responsive.css";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <MainRoutes />

      <Footer />
    </Router>
  );
}

function MainRoutes() {
  const location = useLocation();
  // simple fade-in on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    const container = document.querySelector('#page-content');
    if (!container) return;
    container.classList.add('page-fade-enter');
    requestAnimationFrame(() => container.classList.add('page-fade-enter-active'));
    const t = setTimeout(() => {
      container.classList.remove('page-fade-enter', 'page-fade-enter-active');
    }, 520);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div id="page-content">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;