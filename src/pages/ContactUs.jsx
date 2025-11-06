import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/home/Contact';


// Main Page
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex flex-col justify-center items-center text-center text-white px-6 md:px-12 pt-20 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/contact.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />

        {/* Gradient overlay */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.2),_transparent_70%)]"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Get in Touch</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/95 max-w-3xl mx-auto">
            Have questions or need expert assistance? We're here to guide you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-20 bg-white bg-gradient-to-b from-white via-white/80 to-[#17ADA1]/40">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUs;

