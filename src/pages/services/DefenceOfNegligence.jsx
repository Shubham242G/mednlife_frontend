import React from "react";
import { CheckCircle, Shield, Users, Scale, Search, MessageCircle } from "lucide-react";

const DefenceAgainstMedicalNegligence = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#0E5340] text-white text-center py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Defense Against Medical Negligence
          </h1>
          <p className="text-lg mb-8">
            We offer personalized support and expert legal defense for medical professionals facing medical negligence claims.
          </p>
          <button className="bg-white text-[#0E5340] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Let’s Connect
          </button>
        </div>
      </section>

      {/* What are Medical Negligence Claims */}
      <section className="flex flex-col md:flex-row items-center gap-10 py-20 px-6 md:px-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0E5340]">
            What are Medical Negligence Claims?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A medical negligence claim arises when a patient believes a healthcare provider’s treatment fell below acceptable standards, causing injury or harm.
            These claims can be complex, involving medical, ethical, and legal aspects. At MednLaw, we help doctors, hospitals, and healthcare providers
            defend themselves against false or exaggerated allegations, ensuring their professional reputation remains protected.
          </p>
          <button className="bg-[#0E5340] text-white px-5 py-2 rounded-md hover:bg-[#0b4636] transition">
            Talk to Our Experts
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/medical-gavel.jpg"
            alt="Medical Negligence"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why MednLaw */}
      <section className="bg-gray-50 py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#0E5340]">
          Why MednLaw?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Facing medical negligence claims can drain time, money, and confidence. MednLaw provides expert defense, compassionate support, and a proven record
          in protecting healthcare professionals across India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Expert Legal Defense" },
            { icon: Users, title: "Comprehensive Support" },
            { icon: CheckCircle, title: "Safeguarding Your Reputation" },
            { icon: Scale, title: "Proven Track Record" },
          ].map(({ icon: Icon, title }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <Icon className="text-[#0E5340] mb-3 mx-auto" size={32} />
              <h3 className="font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* The MednLaw Approach */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#0E5340]">
          The MednLaw Approach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Prevention",
            "Strategy",
            "Research",
            "Support",
            "Communication",
            "Collaboration",
          ].map((title, i) => (
            <div
              key={i}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow transition"
            >
              <h4 className="font-semibold mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">
                We provide structured strategies to safeguard professionals at every stage of the claim.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of Claims */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-[#0E5340] text-center">
          Types of Medical Negligence Claims
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Misdiagnosis or Delayed Diagnosis",
            "Surgical Errors",
            "Medication Mistakes",
            "Birth Injuries",
            "Failure to Treat",
          ].map((claim, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="font-medium text-gray-700">{claim}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0E5340] text-white text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4">
          MednLaw Defending Every Claim, Every Step
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100">
          Our expert legal team offers comprehensive defense against all medical negligence claims.
          Protect your practice, preserve your reputation, and ensure peace of mind.
        </p>
        <button className="bg-white text-[#0E5340] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Schedule a Consultation
        </button>
      </section>
    </div>
  );
};

export default DefenceAgainstMedicalNegligence;
