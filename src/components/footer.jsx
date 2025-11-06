import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
<footer className="bg-gradient-to-b from-teal-800 to-teal-900 text-white py-16 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

      <div>
  <img
    src="/assets/white.png"
    alt="MedNLaw"
    className="w-60 mb-4"
  />
  <p className="text-white/70 text-sm leading-relaxed max-w-xs">
    Bridging the gap between medicine and law — empowering healthcare
    professionals through expert legal counsel and strategy.
  </p>
</div>

    {/* Office Locations */}
    <div>
      <h3 className="text-lg font-semibold mb-6 text-[#17ada1]">Our Offices</h3>
      <ul className="space-y-3 text-sm leading-relaxed text-white/80">
        <li>
          <strong>Delhi Office:</strong><br />
          Plot No. 7, Fourth Floor, Arihant Nagar, Punjabi Bagh, New Delhi-110026
        </li>
        <li>
          <strong>Gurgaon Office:</strong><br />
          412, Emaar Colonnade, Golf Course Extension Road, Sector-66, Gurgaon
        </li>
        <li>
          <strong>Noida Office:</strong><br />
          208-209, Tower-E, Alphathum, Noida-201305
        </li>
      </ul>
    </div>

    {/* Solutions */}
    <div>
      <h3 className="text-lg font-semibold mb-6 text-[#17ada1]">Solutions</h3>
      <ul className="space-y-3 text-sm text-white/80">
        <li><Link to="/service/defence-of-medical-negligence-claims" className="hover:text-[#17ada1]">Defence of Medical Negligence</Link></li>
        <li><Link to="/service/compliance-management" className="hover:text-[#17ada1]">Compliance Management</Link></li>
        <li><Link to="/services/labor-law-compliance" className="hover:text-[#17ada1]">Labor Law Compliance</Link></li>
        <li><Link to="/service/licenses-and-renewals" className="hover:text-[#17ada1]">Licenses & Renewals</Link></li>
        <li><Link to="/service/healthcare-startup-advisory" className="hover:text-[#17ada1]">Health Startup Advisory</Link></li>
        <li><Link to="/services/accounting-services" className="hover:text-[#17ada1]">Accounting services</Link></li>
        <li><Link to="/services/intellectual-property-protection" className="hover:text-[#17ada1]">Intellectual Property</Link></li>
        <li><Link to="/services/due-diligence-and-valuation" className="hover:text-[#17ada1]">Due Diligence and Valuation</Link></li>
        <li><Link to="/services/design-and-construction-of-healthcare-facilities" className="hover:text-[#17ada1]">Design and contruction of health facilities</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold mb-6 text-[#17ada1]">Contact Us</h3>
      <ul className="space-y-3 text-sm text-white/80">
        <li>
          <a href="tel:8800141018" className="hover:text-[#17ada1]">
            8800141018
          </a>{" "}
          ||{" "}
          <a href="tel:8596505338" className="hover:text-[#17ada1]">
            8596505338
          </a>
        </li>
        <li>
          <a
            href="mailto:info@mednlaw.in"
            className="hover:text-[#17ada1]"
          >
            info@mednlaw.in
          </a>
        </li>
        <li className="flex gap-4 mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#17ada1]"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/official_mednlaw?igsh=MWlza3liMTBpYTNjZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#17ada1]"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/17Hhe77tao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#17ada1]"
          >
            <Facebook size={20} />
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Divider & Copyright */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-12 border-t border-white/10 pt-6 text-center"
  >
    <p className="text-xs text-white/60 tracking-wider">
      © {new Date().getFullYear()} MedNLaw. All rights reserved.
    </p>
  </motion.div>
</footer>

  );
};

export default Footer;
