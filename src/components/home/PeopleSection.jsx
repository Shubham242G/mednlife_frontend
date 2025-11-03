import React from "react";
import { motion } from "framer-motion";

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

          <div className="mt-8 h-1.5 w-28 bg-gradient-to-r from-[#0E6F69] to-[#17ADA1] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default PeopleSection;
