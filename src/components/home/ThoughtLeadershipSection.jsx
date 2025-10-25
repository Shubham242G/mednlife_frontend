import React from 'react';
import { motion } from 'framer-motion';

const ThoughtLeadershipSection = () => {
  return (
    <div 
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/thought-leadership-bg.jpg')"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17ada1]/95 via-[#17ada1]/80 to-transparent" />

      {/* Content Section */}
      <div className="relative z-10 h-full flex flex-col justify-center px-16 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/80 text-sm font-light tracking-widest mb-6 uppercase">
            Thought Leadership
          </p>
          
          <h1 className="text-white text-6xl font-light leading-tight mb-8">
            Shaping healthcare legal discourse
          </h1>
          
          <p className="text-white/90 text-lg font-light leading-relaxed mb-12">
            We contribute meaningfully to the discourse on medical law developments and healthcare trends. Our team actively authors articles, publishes research papers, conducts seminars for medical professionals, and provides expert commentary on regulatory changes affecting the healthcare sector.
          </p>

          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
            >
              EXPLORE PUBLICATIONS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
            >
              VIEW SEMINARS & EVENTS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
