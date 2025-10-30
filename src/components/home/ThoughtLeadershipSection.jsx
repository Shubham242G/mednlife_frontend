import React from 'react';
import { motion } from 'framer-motion';

const ThoughtLeadershipSection = () => {
  return (
    <div
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center text-[#17ADA1]"
      style={{
        backgroundImage: "url('/images/thought-leadership-bg.jpg')",
      }}
    >
      {/* Gradient Overlay — matches LegacyPage */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#17ADA1]/40" />

      {/* Content Section */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Subtitle */}
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
            Thought Leadership
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-[#17ADA1]">
            Shaping healthcare legal discourse
          </h1>

          {/* Paragraph */}
          <p className="text-[#11897F] text-base md:text-lg font-light leading-relaxed mb-12">
            We contribute meaningfully to the discourse on medical law developments and healthcare trends. 
            Our team actively authors articles, publishes research papers, conducts seminars for medical professionals, 
            and provides expert commentary on regulatory changes affecting the healthcare sector.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-[#A8E7E0] font-light tracking-wider hover:bg-white hover:text-[#17ADA1] transition-all duration-300 flex items-center gap-3"
            >
              EXPLORE PUBLICATIONS
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
              className="px-8 py-4 border-2 border-white text-[#A8E7E0] font-light tracking-wider hover:bg-white hover:text-[#17ADA1] transition-all duration-300 flex items-center gap-3"
            >
              VIEW SEMINARS & EVENTS
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
  );
};

export default ThoughtLeadershipSection;
