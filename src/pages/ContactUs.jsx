import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full py-20 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-teal-100">
        <div className="text-center mb-10">
          <h2 className="text-[#17ada1] text-sm font-bold tracking-[4px] mb-3 uppercase">
            Get In Touch
          </h2>
          <h1
            className="text-gray-900 text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let’s Discuss Your Healthcare Legal Needs
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Our team is ready to provide expert guidance on medical law matters.
            Fill out the form below and we’ll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'name', label: 'Full Name *', placeholder: 'Your full name', type: 'text', required: true },
              { id: 'email', label: 'Email Address *', placeholder: 'your.email@example.com', type: 'email', required: true }
            ].map((field) => (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="text-gray-700 text-sm font-semibold mb-2 tracking-wide">
                  {field.label}
                </label>
                <input
                  {...field}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base text-gray-700
                  focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 'phone', label: 'Phone Number', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
              { id: 'subject', label: 'Subject *', placeholder: 'What can we help you with?', type: 'text', required: true }
            ].map((field) => (
              <div key={field.id} className="flex flex-col">
                <label htmlFor={field.id} className="text-gray-700 text-sm font-semibold mb-2 tracking-wide">
                  {field.label}
                </label>
                <input
                  {...field}
                  name={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base text-gray-700
                  focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 text-sm font-semibold mb-2 tracking-wide">
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
              className="px-4 py-3.5 border-2 border-gray-200 rounded-lg text-base text-gray-700
              focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-100 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] 
            text-white font-bold text-sm tracking-wider rounded-lg hover:shadow-xl 
            transform transition-all duration-300 flex items-center justify-center gap-2"
          >
            SEND MESSAGE
            <span className="text-lg">→</span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

// Main Page
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#17ada1] via-[#14968c] to-[#0d7c72] text-white px-6 md:px-12 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/95 max-w-3xl mx-auto">
            Have questions or need expert assistance? We’re here to guide you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6 md:px-20 bg-teal-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Whether you have a legal query or need medico-legal assistance, our experts are ready to help.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                title: 'Phone',
                text: '+91 98765 43210',
              },
              {
                icon: (
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: 'Email',
                text: 'contact@medilaw.com',
              },
              {
                icon: (
                  <>
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
                title: 'Address',
                text: '123 MediLaw Avenue\nNew Delhi, India',
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

