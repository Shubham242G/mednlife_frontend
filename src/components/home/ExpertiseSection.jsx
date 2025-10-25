import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
  return (
    <div 
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/expertise-bg.jpg')"
      }}
    >
      {/* Gradient Overlay - White for this section */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-white/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-16 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#17ada1] text-sm font-light tracking-widest mb-6 uppercase">
            Expertise
          </p>
          
          <h1 className="text-[#17ada1] text-6xl font-light leading-tight mb-8">
            Comprehensive medical legal solutions
          </h1>
          
          <p className="text-gray-700 text-lg font-light leading-relaxed mb-12">
            Our expertise across diverse medical practice areas and healthcare sectors covers varied and complex legal needs. Backed by extensive experience in medical law, we serve healthcare professionals, hospitals, and medical institutions with specialized legal services tailored to the healthcare industry.
          </p>

          <div className="flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#17ada1] text-[#17ada1] font-light tracking-wider hover:bg-[#17ada1] hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              EXPLORE PRACTICE AREAS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#17ada1] text-[#17ada1] font-light tracking-wider hover:bg-[#17ada1] hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              VIEW FOCUS AREAS
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

export default ExpertiseSection;
