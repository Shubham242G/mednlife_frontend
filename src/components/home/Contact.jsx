import React, { useState } from 'react';

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
    // Add your form submission logic here
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-5 py-16 bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95">
        {/* Gradient Overlay — white fading to teal (right side) */}
      <div className="absolute inset-0" />
      <div className="max-w-4xl w-full bg-white/98 rounded-xl shadow-2xl p-12 md:p-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-white text-sm font-semibold tracking-[3px] mb-4">
            GET IN TOUCH
          </h2>
          <h1 className="text-cyan-600 text-4xl md:text-5xl font-light mb-5 leading-tight">
            Let's discuss your healthcare legal needs
          </h1>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            Our team is ready to provide expert guidance on medical law matters. 
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label 
                htmlFor="name" 
                className="text-slate-700 text-sm font-semibold mb-2 tracking-wide"
              >
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-slate-700 
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label 
                htmlFor="email" 
                className="text-slate-700 text-sm font-semibold mb-2 tracking-wide"
              >
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-slate-700 
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label 
                htmlFor="phone" 
                className="text-slate-700 text-sm font-semibold mb-2 tracking-wide"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-slate-700 
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label 
                htmlFor="subject" 
                className="text-slate-700 text-sm font-semibold mb-2 tracking-wide"
              >
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-slate-700 
                focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-8">
            <label 
              htmlFor="message" 
              className="text-slate-700 text-sm font-semibold mb-2 tracking-wide"
            >
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
              className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-slate-700 
              focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 
              transition-all duration-300 resize-none placeholder:text-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-cyan-400 to-cyan-600 
            text-white font-semibold text-sm tracking-wider rounded-lg 
            hover:from-cyan-500 hover:to-cyan-700 hover:shadow-lg 
            transform hover:-translate-y-0.5 transition-all duration-300 
            flex items-center justify-center gap-3 group"
          >
            SEND MESSAGE
            <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
