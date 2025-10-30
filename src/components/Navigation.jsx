import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const services = [
  { name: "Defence of Medical Negligence Claims", path: "/services/defence-of-medical-negligence-claims" },
  { name: "Labor law compliance", path: "/services/labor-law-compliance" },
  { name: "Due Diligence & Valuation", path: "/services/due-diligence-and-valuation" },
  { name: "Design & Construction of Healthcare Facilities", path: "/services/healthcare-facilities" },
  { name: "Child Custody", path: "/services/child-custody" },
  { name: "Cruelty", path: "/services/cruelty" },
  { name: "Judicial Separation", path: "/services/judicial-separation" },
  { name: "Child Visitation", path: "/services/child-visitation" },
  { name: "Annulment of Marriage", path: "/services/annulment-of-marriage" },
  { name: "Mutual Divorce", path: "/services/mutual-divorce" },
];

const Navigation = () => {
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  let hideTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setHovered(false), 150);
  };

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
          <li>
            <Link
              to="/"
              className={`transition-all duration-300 ${
                isActive("/") ? "text-[#17ADA1]" : "hover:text-[#3FC6B9] text-[#11897F]"
              }`}
            >
              Home
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`flex items-center space-x-1 cursor-pointer transition-all duration-300 ${
                location.pathname.startsWith("/services")
                  ? "text-[#17ADA1]"
                  : "hover:text-[#3FC6B9] text-[#11897F]"
              }`}
            >
              <span>Services</span>
              <ChevronDown size={18} />
            </div>

            {hovered && (
              <ul
                className="absolute left-1/2 top-full mt-3 w-[320px]
                -translate-x-1/2 bg-white shadow-xl border rounded-xl py-3
                max-h-[500px] overflow-y-auto text-center"
              >
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(service.path)
                          ? "bg-[#17ADA1] text-white"
                          : "text-[#11897F] hover:bg-gray-100 hover:text-[#17ADA1]"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
