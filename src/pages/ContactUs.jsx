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

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-20 bg-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                title: 'Phone',
                text: '+91 8595650338',
              },
              {
                icon: (
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Email',
                text: 'info@mednlaw.com',
              },
              {
                icon: (
                  <>
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
                title: 'Address',
                text: '412, Emaar Colonande, Golf Course Extension Road, Sector-66, Gurgaon-122018',
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#17ada1]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {info.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{info.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUs;

