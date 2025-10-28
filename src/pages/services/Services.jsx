import React from "react";

const services = [
  {
    title: "Contested Divorce",
    description:
      "We provide expert legal guidance and representation for contested divorce proceedings, ensuring your rights and interests are protected throughout the process.",
  },
  {
    title: "Mutual Divorce",
    description:
      "Our team assists couples in completing mutual divorce procedures smoothly with minimal court visits and efficient documentation.",
  },
  {
    title: "Child Custody",
    description:
      "We specialize in resolving custody disputes with compassion, focusing on the welfare and emotional security of the child.",
  },
  {
    title: "Alimony & Maintenance",
    description:
      "We help clients secure fair financial settlements, ensuring long-term stability and justice in post-marital financial arrangements.",
  },
  {
    title: "Domestic Violence",
    description:
      "We offer legal assistance and protection for victims of domestic violence, helping you file cases and obtain restraining orders.",
  },
  {
    title: "Dowry Harassment",
    description:
      "Our experienced lawyers handle dowry harassment cases delicately yet assertively, ensuring justice and legal recourse.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-gray-800">
      {/* Top Section */}
      <div className="w-full bg-[#17ada1] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legal Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Expert family law solutions tailored to your needs — handled with professionalism, empathy, and care.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f8fafc] hover:bg-[#17ada1] hover:text-white transition-all duration-300 rounded-2xl shadow-md p-8 cursor-pointer border border-[#e5e7eb]"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-[#17ada1] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
        <p className="text-lg mb-6">
          Get expert advice from our experienced legal team. Schedule a consultation today.
        </p>
        <button
          onClick={() => (window.location.href = "/contact-us")}
          className="bg-white text-[#17ada1] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Services;
