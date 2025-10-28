import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section
      data-theme="teal"
      className="relative w-full h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/intro-bg.jpg')",
      }}
    >
      {/* Gradient Overlay — matches LegacyPage exactly */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#17ada1]/95 via-[#17ada1]/85 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white/80 text-sm md:text-base font-light tracking-[0.3em] mb-6 uppercase">
            Medical Law Excellence
          </p>

          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Bridging healthcare and legal expertise
          </h1>

          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-12">
            We provide comprehensive legal solutions for healthcare professionals, hospitals,
            and medical institutions. Our expertise spans medical malpractice defense,
            regulatory compliance, healthcare contracts, and institutional governance with
            over two decades of specialized experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-light tracking-wider hover:bg-white hover:text-[#17ada1] transition-all duration-300 flex items-center gap-3"
            >
              SCHEDULE CONSULTATION
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

      {/* Transparent Big Text Overlay (like LegacyPage aesthetic) */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-32 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/10 text-[8rem] md:text-[16rem] font-bold select-none"
        >
          medNlaw
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
