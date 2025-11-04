import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_wfincci";
    const templateID = "contact_form"
    const publicKey = "am1VZPuktoi7yeO5J";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-teal-50 via-teal-200 to-teal-300 flex justify-center items-center px-5 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d7c72]/20 via-transparent to-[#0d7c72]/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-12 md:p-16 relative z-10 border border-white/30"
      >
        <div className="text-center mb-12">
          <motion.span className="inline-block text-[#17ada1] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Contact MediLaw
          </motion.span>
          <h1 className="text-[#17ada1] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let's discuss your healthcare legal needs
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* ✅ Success message */}
        {success && (
          <p className="text-green-700 text-center mb-4 font-medium">
            ✅ Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1]" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email *"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone"
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1]" />
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" required
              className="px-5 py-3.5 border-2 border-gray-300 rounded-lg text-base focus:border-[#17ada1]" />
          </div>

          <textarea name="message" value={formData.message} onChange={handleChange} required rows="6"
            placeholder="Tell us more about your inquiry..."
            className="w-full px-5 py-3.5 border-2 border-gray-300 rounded-lg mb-6 focus:border-[#17ada1] resize-none" />

          <motion.button type="submit" disabled={loading}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white font-bold rounded-lg shadow-lg">
            {loading ? "Sending..." : "SEND MESSAGE →"}
          </motion.button>

          <p className="text-gray-500 text-xs mt-6 text-center">
            We respond within 24 hours. For urgent issues, call +91 98765 43210
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
