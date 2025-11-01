import React from "react";
import { motion } from "framer-motion";

const LegacyPage = () => {
  return (
    <section
      data-theme="teal"
      className="relative w-full min-h-screen text-white overflow-hidden flex flex-col justify-center"
    >
      {/* Background Image - Fixed positioning */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Stethescope.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* STRONGER Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#17ada1]/60 to-black/50" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center w-full px-6 md:px-16 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Subtitle */}
            <p className="text-white text-sm md:text-base font-semibold tracking-[0.3em] mb-6 uppercase">
              Our Legacy
            </p>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-lg">
              Two decades of healthcare legal excellence
            </h1>

            {/* Paragraph */}
            <p className="text-white/95 text-base md:text-lg font-normal leading-loose tracking-wide mb-12 drop-shadow">
              Since our establishment,{" "}
              <span className="font-bold text-white">MediLaw</span> has been
              at the forefront of medical legal services. We have successfully represented
              hundreds of healthcare professionals and institutions, setting precedents in
              medical malpractice law, establishing best practices in healthcare compliance,
              and earning recognition as trusted advisors to the medical community.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#17ada1] font-bold tracking-wider rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                OUR ACHIEVEMENTS
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
                CASE SUCCESSES
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

export default LegacyPage;
