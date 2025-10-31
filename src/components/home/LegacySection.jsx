import React from "react";
import { motion } from "framer-motion";

const LegacyPage = () => {
  return (
    <section
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center text-[#17ADA1] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/Stethescope.png')",
      }}
    >
      {/* Same Gradient Overlay as IntroSection */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-[#17ada1]/50" />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-16 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Subtitle */}
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
            Our Legacy
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-[#17ADA1]">
            Two decades of healthcare legal excellence
          </h1>

          {/* Paragraph */}
          <p className="text-[#11897F] text-base md:text-lg font-light leading-relaxed mb-12">
            Since our establishment,{" "}
            <span className="font-medium text-[#17ADA1]">medNlaw</span> has been
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
              className="px-8 py-4 border-2 border-white text-[#A8E7E0] font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
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
              className="px-8 py-4 border-2 border-white text-[#A8E7E0] font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
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

      {/* Transparent Big Year Overlay */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-32 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/10 text-[8rem] md:text-[16rem] font-bold select-none"
        >
          2025
        </motion.div>
      </div>
    </section>
  );
};

export default LegacyPage;
