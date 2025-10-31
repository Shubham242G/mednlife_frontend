import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (

    <section
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center text-[#17ADA1] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/banner2.png')",
      }}
    >
      {/* EXACT Gradient Overlay from Your OurPeople section */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-[#17ada1]/40" />

      {/* Content */}
      <div className="relative mt-20 z-10 flex flex-col justify-center h-full px-6 md:px-16 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
            Medical Law Excellence
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-[#17ADA1]">
            Bridging healthcare and legal expertise
          </h1>

          <p className="text-[#11897F] text-base md:text-lg font-normal leading-loose tracking-wide mb-12 max-w-4xl">
            We provide comprehensive legal solutions for healthcare professionals, hospitals,
            and medical institutions. Our expertise spans medical malpractice defense,
            regulatory compliance, healthcare contracts, and institutional governance with
            over two decades of specialized experience.{' '}
            <Link
              to="/about"
              className="inline-flex items-center text-sm font-semibold text-black hover:text-[#0d9488] underline underline-offset-4 hover:underline-offset-2 transition-all duration-300 group"
            >
              <svg
                className="w-3.5 h-3.5 mr-1.5 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
              Learn more
            </Link>
          </p>



          {/* Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-[#008000] font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
            >
              EXPLORE OUR SERVICES
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

        {/* Copyright */}
        <div className="absolute bottom-8 left-8">
          <p className="text-white/50 text-xs tracking-wider">© medNlaw 2025</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
