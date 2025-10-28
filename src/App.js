import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Navigation from './components/Navigation'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/services/Services';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
