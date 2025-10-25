import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = ({ isMenuOpen, setIsMenuOpen, currentSection, navigateToSection, sections }) => {
    return (
        <>
            {/* Main Navbar - Always Transparent */}
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 px-3 md:px-12 py-2 flex justify-between items-center bg-transparent"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigateToSection(0)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="h-[60px] w-[130px] bg-white flex items-center justify-center overflow-hidden">
                        <img
                            src="assets/logo.png"
                            alt="MEDNLAW logo"
                            className="w-[145px]  object-contain"
                        />
                    </div>
                </motion.div>


                {/* Center Navigation Links - Desktop Only */}
                <nav className="hidden lg:flex items-center gap-10">
                    {sections.map((section, index) => (
                        <motion.button
                            key={index}
                            onClick={() => navigateToSection(index)}
                            className={`relative text-sm font-light tracking-wider transition-colors ${currentSection === index
                                ? 'text-white'
                                : 'text-white/70 hover:text-white'
                                }`}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            {section.name}
                            {currentSection === index && (
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                                    layoutId="navbar-indicator"
                                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                                />
                            )}
                        </motion.button>
                    ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Search Icon - Desktop Only */}
                    <motion.button
                        className="hidden md:block text-white hover:text-white/80 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                    </motion.button>

                    {/* Contact Button - Desktop Only */}
                    <motion.button
                        className="hidden lg:block px-6 py-2.5 border border-white/40 text-white text-sm font-light tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        CONTACT US
                    </motion.button>

                    {/* Hamburger Menu - Mobile/Tablet Only */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col gap-1.5 w-7 h-7 md:w-8 md:h-8 justify-center items-center group relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? 45 : 0,
                                y: isMenuOpen ? 7 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 md:w-8 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{
                                opacity: isMenuOpen ? 0 : 1,
                                x: isMenuOpen ? -10 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 md:w-8 h-0.5 bg-white"
                        />
                        <motion.span
                            animate={{
                                rotate: isMenuOpen ? -45 : 0,
                                y: isMenuOpen ? -7 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-7 md:w-8 h-0.5 bg-white"
                        />
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay - Half Screen */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel - Half Width */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                            className="fixed top-0 right-0 bottom-0 w-3/4 sm:w-2/3 md:w-1/2 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 z-50 shadow-2xl lg:hidden"
                        >
                            <div className="h-full flex flex-col">
                                {/* Menu Header with Close Button */}
                                <div className="px-6 md:px-12 py-6 md:py-8 border-b border-white/10 flex justify-between items-center">
                                    <motion.h2
                                        className="text-white text-2xl md:text-3xl font-light tracking-wide"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Menu
                                    </motion.h2>

                                    {/* Close Button */}
                                    <motion.button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Menu Items */}
                                <nav className="flex-1 flex flex-col justify-center px-6 md:px-12 gap-4 md:gap-6">
                                    {sections.map((section, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => navigateToSection(index)}
                                            className={`text-left group ${currentSection === index ? 'text-white' : 'text-white/50'
                                                }`}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <motion.span
                                                    className={`text-xs md:text-sm font-light ${currentSection === index ? 'text-white/70' : 'text-white/30'
                                                        }`}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.1 * index + 0.2 }}
                                                >
                                                    0{index + 1}
                                                </motion.span>
                                                <span className="text-2xl md:text-3xl font-light tracking-wide transition-all group-hover:tracking-wider">
                                                    {section.name}
                                                </span>
                                            </div>
                                            <motion.div
                                                className={`h-px mt-1 md:mt-2 transition-all ${currentSection === index
                                                    ? 'bg-white w-16 md:w-20'
                                                    : 'bg-white/20 w-0 group-hover:w-16 md:group-hover:w-20 group-hover:bg-white/50'
                                                    }`}
                                            />
                                        </motion.button>
                                    ))}
                                </nav>

                                {/* Menu Footer */}
                                <motion.div
                                    className="px-6 md:px-12 py-6 md:py-8 border-t border-white/10 flex flex-col gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <motion.button
                                            className="px-6 py-3 border border-white text-white text-sm font-light tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 text-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            GET IN TOUCH
                                        </motion.button>
                                        <motion.button
                                            className="px-6 py-3 bg-white text-blue-900 text-sm font-light tracking-wider hover:bg-white/90 transition-all duration-300 text-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            SCHEDULE CALL
                                        </motion.button>
                                    </div>
                                    <div className="flex gap-6 mt-2 justify-center sm:justify-start">
                                        {['linkedin', 'twitter', 'facebook'].map((social, i) => (
                                            <motion.button
                                                key={social}
                                                className="text-white/60 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, y: -2 }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + i * 0.1 }}
                                            >
                                                <div className="w-5 h-5 border border-white/60 rounded-full flex items-center justify-center">
                                                    <span className="text-xs capitalize">{social[0]}</span>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
