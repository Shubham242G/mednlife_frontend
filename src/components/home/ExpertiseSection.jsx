import React from "react";
import { motion } from "framer-motion";

const ExpertisePage = () => {
  return (
    <section
      data-theme="light"
      className="relative w-full min-h-screen text-[#17ada1] overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image - Fixed positioning */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/banner1.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center w-full px-6 md:px-16 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-white/90 text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
              Expertise
            </p>

            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8">
              Comprehensive medical legal solutions
            </h1>

            <p className="text-white/85 text-base md:text-lg font-normal leading-relaxed mb-12 max-w-3xl">
              Our expertise across diverse medical practice areas and healthcare sectors
              covers varied and complex legal needs. Backed by extensive experience in
              medical law, we serve healthcare professionals, hospitals, and medical
              institutions with specialized legal services tailored to the healthcare
              industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wider rounded-lg hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3 text-sm"
              >
                EXPLORE PRACTICE AREAS
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
                className="px-8 py-4 border-2 border-white text-white font-semibold tracking-wider rounded-lg hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3 text-sm"
              >
                VIEW FOCUS AREAS
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

export default ExpertisePage;
