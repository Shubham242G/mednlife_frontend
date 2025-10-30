import React from "react";
import { motion } from "framer-motion";

const PeopleSection = () => {
  return (
    <section
      data-theme="light"
      className="relative w-full h-[100vh] bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/people-bg.jpg')",
      }}
    >
      {/* Gradient Overlay — white fading to teal (right side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
            Our People
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight mb-8">
            Experienced medical law advocates
          </h1>

          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-12">
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
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
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
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
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

      {/* Large Transparent Background Text */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-32 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-white/10 text-[8rem] md:text-[16rem] font-bold select-none"
        >
          PEOPLE
        </motion.div>
      </div>
    </section>
  );
};

export default PeopleSection;
