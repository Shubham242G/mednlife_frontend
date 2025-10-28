import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[#17ada1] text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Have questions or need expert assistance?  
          We’re here to help guide you every step of the way.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl font-semibold text-[#17ada1] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you have a legal query, a medical concern, or need
              assistance with a medico-legal case, our team is ready to listen.
              Fill out the form, and we’ll get back to you soon.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-[#17ada1]">Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong className="text-[#17ada1]">Email:</strong> contact@mednlaw.com
              </p>
              <p>
                <strong className="text-[#17ada1]">Address:</strong> 123 Med N Law
                Avenue, New Delhi, India
              </p>
            </div>
          </div>

          {/* Right: Static Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold text-[#17ada1] mb-4">
              Send us a message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#17ada1]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#17ada1]"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#17ada1]"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#17ada1]"
            ></textarea>

            <button
              type="button"
              className="w-full bg-[#17ada1] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#149387] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map / CTA Section */}
      <section className="py-16 bg-[#17ada1] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Visit Our Office
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Drop by our office for a consultation or simply to learn more about
          how we can help you navigate your legal and medical challenges.
        </p>
        <div className="w-full h-72 bg-gray-200 rounded-2xl shadow-md mx-auto flex items-center justify-center text-gray-600">
          Google Map Embed / Image Placeholder
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
