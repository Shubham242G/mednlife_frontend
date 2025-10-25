import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import IntroSection from '../components/home/IntroSection';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ThoughtLeadershipSection from '../components/home/ThoughtLeadershipSection';
import PeopleSection from '../components/home/PeopleSection';
import LegacySection from '../components/home/LegacySection';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const isScrollingRef = useRef(false);

  const sections = [
    { component: IntroSection, name: 'Home' },
    { component: ExpertiseSection, name: 'Expertise' },
    { component: ThoughtLeadershipSection, name: 'Thought Leadership' },
    { component: PeopleSection, name: 'People' },
    { component: LegacySection, name: 'Legacy' }
  ];

  const navigateToSection = useCallback(
    (index) => {
      if (index >= 0 && index < sections.length && index !== currentSection) {
        setDirection(index > currentSection ? 1 : -1);
        setCurrentSection(index);
        setIsMenuOpen(false);
      }
    },
    [currentSection, sections.length]
  );

  // Optimized scroll handler to prevent skipping
  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();

      // Prevent repeated triggers
      if (isScrollingRef.current) return;

      const delta = e.deltaY;

      // Scroll down
      if (delta > 40 && currentSection < sections.length - 1) {
        isScrollingRef.current = true;
        setDirection(1);
        setCurrentSection((prev) => prev + 1);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1300);
      }
      // Scroll up
      else if (delta < -40 && currentSection > 0) {
        isScrollingRef.current = true;
        setDirection(-1);
        setCurrentSection((prev) => prev - 1);

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1300);
      }
    },
    [currentSection, sections.length]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (isScrollingRef.current) return;

      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        isScrollingRef.current = true;
        setDirection(1);
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1300);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        isScrollingRef.current = true;
        setDirection(-1);
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 1300);
      }
    },
    [currentSection, sections.length]
  );

  React.useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  const CurrentSectionComponent = sections[currentSection].component;

  const sectionVariants = {
    initial: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
    }),
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentSection={currentSection}
        navigateToSection={navigateToSection}
        sections={sections}
      />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: currentSection }}
        >
          <CurrentSectionComponent />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Smaller Scroll Indicator */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center scale-90">
        {/* Background line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/30"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        />

        {/* Progress line */}
        <motion.div
          className="absolute w-px bg-white"
          style={{ left: '50%', transform: 'translateX(-50%)', top: 0 }}
          animate={{
            height: `${(currentSection / (sections.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        />

        {/* Dots & Labels */}
        <div className="relative flex flex-col items-center gap-14 py-3">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => navigateToSection(index)}
              className="group flex flex-col items-center gap-2 relative z-10"
            >
              <span
                className={`text-xs font-light transition-colors whitespace-nowrap ${
                  currentSection === index ? 'text-white' : 'text-white/60'
                }`}
              >
                {section.name}
              </span>
              <div
                className={`w-2.5 h-2.5 rounded-full border-[1.5px] transition-all ${
                  currentSection === index
                    ? 'bg-white border-white scale-110'
                    : 'border-white/60 group-hover:border-white group-hover:scale-110'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Down arrow */}
        {currentSection < sections.length - 1 && (
          <motion.button
            onClick={() => navigateToSection(currentSection + 1)}
            className="mt-6 text-white/60 hover:text-white transition-colors relative z-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Home;
