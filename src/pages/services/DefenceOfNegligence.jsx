import React from "react";
import { motion } from "framer-motion";

const DefenceOfNegligence = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#17ada1] mb-4">
          Defence of Medical Negligence Claims
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Our legal experts specialize in defending medical professionals against false or exaggerated allegations of negligence. 
          We guide you through every stage — from complaint notice to courtroom representation.
        </p>
      </motion.section>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <img
          src="/images/medical-defence.jpg"
          alt="Medical Defence"
          className="w-full rounded-2xl shadow-md"
        />
      </motion.div>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-700 space-y-6 leading-relaxed"
      >
        <h2 className="text-2xl font-semibold text-[#17ada1]">
          Protecting Healthcare Professionals
        </h2>
        <p>
          We understand the unique pressures faced by healthcare practitioners when confronted with negligence allegations. 
          Our approach combines medical expertise and legal strategy to ensure fair outcomes.
        </p>

        <h3 className="text-xl font-semibold text-[#17ada1] mt-6">
          Our Defence Process
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Thorough case evaluation and documentation analysis.</li>
          <li>Expert witness engagement for testimony.</li>
          <li>Representation before medical councils and courts.</li>
          <li>Negotiation and settlement assistance when appropriate.</li>
        </ul>

        <div className="bg-[#17ada1]/10 p-6 rounded-xl mt-8">
          <h4 className="text-xl font-semibold text-[#17ada1] mb-2">
            Need Legal Support?
          </h4>
          <p>
            Reach out to our expert legal team for a consultation today.
          </p>
          <button className="mt-4 bg-[#17ada1] text-white py-2 px-6 rounded-lg hover:bg-[#149389] transition">
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default DefenceOfNegligence;
