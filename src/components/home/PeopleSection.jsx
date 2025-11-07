import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PeopleSection = () => {
  return (
    <section className="w-full bg-teal-50 flex justify-center items-center m-0 p-0 overflow-hidden">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center py-20 px-6 md:px-12 lg:px-16">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/assets/the_team.jpg"
            alt="People"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-900"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Healthcare Law Specialists
          </h2>

          <p className="text-gray-700 mb-6 text-lg font-medium">
            We are here for you
          </p>

          <p className="text-gray-800 leading-relaxed text-base md:text-[17px] border-t border-gray-300 pt-4">
            Whether you need guidance in navigating healthcare compliance or
            steering clear from legal complexities, our experienced
            medico-legal experts will provide end-to-end support, offering you
            the peace of mind you deserve.
          </p>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 w-full md:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="w-full mt-8 md:w-auto group relative bg-gradient-to-r from-[#17ADA1] to-[#14968C] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14968C] to-[#0d7c72] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <a href="/about-us#founder">
                <button className="relative w-full sm:w-auto bg-transparent border-2 border-[#17ADA1] text-white px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-medium text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-[#17ADA1]/20 transition-all duration-300 shadow-lg hover:scale-[1.02]">
                  Meet Our Founder
                </button>
              </a>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default PeopleSection;
