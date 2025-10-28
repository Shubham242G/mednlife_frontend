import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnTeal, setIsOnTeal] = useState(true);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Services", path: "/services" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const bgColor = window.getComputedStyle(entry.target).backgroundColor;
          const isWhite =
            bgColor === "rgb(255, 255, 255)" ||
            bgColor === "rgb(245, 241, 237)";
          setIsOnTeal(!isWhite);
        });
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  // Force navbar to teal if on standalone white pages
  useEffect(() => {
    if (location.pathname === "/about-us" || location.pathname === "/contact-us") {
      setIsOnTeal(false);
    }
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-300 ${
          isOnTeal ? "bg-[#17ada1] text-white" : "bg-white text-[#17ada1] shadow-md"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={isOnTeal ? "/assets/white.png" : "/assets/logo.png"}
            alt="Logo"
            className="w-[150px]"
          />
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavigation(link.path)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isOnTeal
                  ? "text-white hover:text-gray-200"
                  : "text-[#17ada1] hover:text-[#0e7d74]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`w-6 h-0.5 transition-colors ${
                isOnTeal ? "bg-white" : "bg-[#17ada1]"
              }`}
            />
          ))}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 bg-gradient-to-br from-[#1eb7a9] to-[#91d6c8] text-white 
            flex flex-col items-center justify-center gap-6 z-40"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                className="text-lg font-medium text-white hover:text-gray-200 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
