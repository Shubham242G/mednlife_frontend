import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-teal-50 via-teal-200 to-teal-300 flex justify-center items-center px-5 py-20 relative overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d7c72]/20 via-transparent to-[#0d7c72]/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-12 md:p-16 relative z-10 border border-white/30"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block text-[#17ada1] text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            Contact MediLaw
          </motion.span>
          <h1 className="text-[#17ada1] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's discuss your healthcare legal needs
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Our team is ready to provide expert guidance on medical law matters.
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-12">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-900 text-sm font-bold mb-3 tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-900 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-900 text-sm font-bold mb-3 tracking-wide">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-900 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400"
              />
            </div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-900 text-sm font-bold mb-3 tracking-wide">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-900 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-900 text-sm font-bold mb-3 tracking-wide">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What can we help you with?"
                required
                className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-900 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="text-gray-900 text-sm font-bold mb-3 tracking-wide">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              rows="6"
              required
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-900 
              focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
              transition-all duration-300 resize-none placeholder:text-gray-400 hover:border-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#17ADA1] to-[#14968C] hover:from-[#14968C] hover:to-[#0d7c72]
            text-white font-bold text-sm tracking-wider rounded-lg 
            hover:shadow-lg transform hover:-translate-y-0.5 
            transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <svg 
              className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            SEND MESSAGE
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.button>

          {/* Form Note */}
          <p className="text-gray-500 text-xs mt-6 text-center">
            We typically respond within 24 hours. For urgent matters, call us directly at +91 98765 43210
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
