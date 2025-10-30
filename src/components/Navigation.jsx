import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  let hideTimeout;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className={`w-[170px] h-auto transition-all duration-500`}
          />
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center space-x-10 relative font-medium transition-colors duration-500">
          {/* SERVICES DROPDOWN */}
          <li>
            <Link
              to="/services"
              className={`transition-all duration-300 ${
                isActive("/services")
                  ? "text-[#17ADA1]"
                  : "hover:text-[#3FC6B9] text-[#11897F]"
              }`}
            >
              Services
            </Link>
          </li>

          {/* OTHER LINKS */}
          <li>
            <Link
              to="/about-us"
              className={`transition-all duration-300 ${
                isActive("/about-us")
                  ? "text-[#17ADA1]"
                  : "hover:text-[#3FC6B9] text-[#11897F]"
              }`}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/contact-us"
              className={`transition-all duration-300 ${
                isActive("/contact-us")
                  ? "text-[#17ADA1]"
                  : "hover:text-[#3FC6B9] text-[#11897F]"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
