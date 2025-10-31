import React, { useState } from 'react';

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
    <div className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-[#17ada1] text-sm font-bold tracking-[3px] mb-4">
            GET IN TOUCH
          </h2>
          <h1 className="text-gray-900 text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Let's discuss your healthcare legal needs
          </h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
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
                className="text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-700 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label 
                htmlFor="email" 
                className="text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-700 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label 
                htmlFor="phone" 
                className="text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-700 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col">
              <label 
                htmlFor="subject" 
                className="text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
                className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-700 
                focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
                transition-all duration-300 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col mb-8">
            <label 
              htmlFor="message" 
              className="text-gray-700 text-sm font-semibold mb-2 tracking-wide"
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
              className="px-4 py-3.5 border-2 border-gray-300 rounded-lg text-base text-gray-700 
              focus:outline-none focus:border-[#17ada1] focus:ring-2 focus:ring-teal-200 
              transition-all duration-300 resize-none placeholder:text-gray-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-[#0f766e] hover:bg-[#0d9488]
            text-white font-bold text-sm tracking-wider rounded-lg 
            hover:shadow-xl transform hover:-translate-y-0.5 
            transition-all duration-300 flex items-center justify-center gap-3 group"
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

// Main Contact Us Page
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#17ada1] via-[#17ada1]/90 to-[#138f85] text-white px-6 md:px-12 pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/95">
            Have questions or need expert assistance?  
            We're here to help guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you have a legal query, a medical concern, or need
              assistance with a medico-legal case, our team is ready to listen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
              <p className="text-gray-600 text-lg">+91 98765 43210</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <p className="text-gray-600 text-lg">contact@medilaw.com</p>
            </div>

            {/* Address */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Address</h3>
              <p className="text-gray-600 text-lg">123 MediLaw Avenue<br />New Delhi, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <ContactForm />
      </section>

      {/* Office Hours */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Office Hours</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-semibold">Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-semibold">Saturday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">Sunday</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our Office
          </h2>
          <p className="text-xl mb-12 leading-relaxed text-white/95 max-w-3xl mx-auto">
            Drop by our office for a consultation or simply to learn more about
            how we can help you navigate your legal and medical challenges.
          </p>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-gray-600 font-semibold">Google Map Integration</p>
              <p className="text-gray-500 text-sm mt-2">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Legal Consultation?</h3>
            <p className="text-gray-700 mb-6">For urgent medico-legal matters, call our 24/7 hotline</p>
            <a href="tel:+919876543210" className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Emergency Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
