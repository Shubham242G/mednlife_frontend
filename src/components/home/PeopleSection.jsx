import React from "react";
import { motion } from "framer-motion";

const PeopleSection = () => {
  return (
    <section
      data-theme="light"
      className="relative w-full min-h-screen text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image - Fixed positioning */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/doctor-and-patients.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* STRONGER Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17ada1]/90 via-[#17ada1]/75 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center w-full px-6 md:px-16 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-sm md:text-base font-semibold tracking-[0.3em] mb-6 uppercase">
              Our People
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
              Experienced medical law advocates
            </h1>

            <p className="text-white/95 text-base md:text-lg font-normal leading-loose tracking-wide mb-12 max-w-3xl drop-shadow">
              Our team comprises highly qualified legal professionals with specialized
              expertise in medical and healthcare law. Each attorney brings decades of
              combined experience representing doctors, surgeons, hospitals,
              pharmaceutical companies, and healthcare organizations in complex legal
              matters.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#17ada1] font-bold tracking-wider rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                MEET OUR TEAM
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold tracking-wider rounded-lg hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                VIEW CREDENTIALS
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
