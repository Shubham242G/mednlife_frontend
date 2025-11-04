import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { name: "Defence of Medical Negligence Claims", path: "/services/defence-of-medical-negligence-claims" },
  { name: "Labor Law Compliance", path: "/services/labor-law-compliance" },
  { name: "Due Diligence and Valuation", path: "/services/due-diligence-and-valuation" },
  { name: "Design and Construction of Healthcare Facilities", path: "/services/design-and-construction-of-healthcare-facilities" },
  { name: "Intellectual Property Protection", path: "/services/intellectual-property-protection" },
  { name: "Compliance Management", path: "/services/compliance-management" },
  { name: "Licenses & Renewals", path: "/services/licenses-and-renewals" },
  { name: "Accounting Services", path: "/services/accounting-services" },
  { name: "Healthcare Startup Advisory", path: "/services/healthcare-startup-advisory" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section
      data-theme="teal"
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden text-[#17ADA1]"
      style={{
        backgroundImage: "url('/assets/services.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-[#17ADA1]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#3FC6B9] text-sm md:text-base font-light tracking-[0.3em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-[#17ADA1] text-4xl md:text-6xl font-light">
            Expert legal support for every need
          </h2>
        </motion.div>

        {/* Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(23, 173, 161, 0.3)",
              }}
              viewport={{ once: true }}
              onClick={() => navigate(service.path)}
              className="cursor-pointer bg-white/80 backdrop-blur-md border border-[#17ADA1]/20 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:border-[#17ADA1]/60 group"
            >
              <h3 className="text-[#17ADA1] text-xl font-semibold mb-3 group-hover:text-[#11897F] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-[#11897F] text-sm font-light leading-relaxed mb-6">
                Professional legal representation and guidance in {service.name.toLowerCase()} cases.
              </p>
              <div className="flex items-center text-[#17ADA1] group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-light tracking-wider">READ MORE</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
