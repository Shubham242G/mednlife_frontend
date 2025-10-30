import React, { useState } from 'react';

const IntellectualPropertyPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intellectual Property Protection
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Safeguard your medical innovations, research, and proprietary methods with comprehensive IP protection 
            strategies tailored for healthcare professionals.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Talk To Our Experts
          </button>
        </div>
      </section>

      {/* What is IP Protection Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-teal-700 text-white p-8 md:p-10 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                What is Intellectual Property Protection?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Intellectual property (IP) protection safeguards the creative works, innovations, and proprietary 
                  information that give healthcare providers a competitive advantage. In the medical field, IP can 
                  include patented medical devices, proprietary treatment protocols, software applications, research 
                  data, branding elements, and trade secrets.
                </p>
                <p>
                  Healthcare professionals invest significant time and resources developing new techniques, 
                  technologies, and processes. Without proper IP protection, these innovations remain vulnerable 
                  to unauthorized use or replication by competitors.
                </p>
                <p>
                  IP protection encompasses several legal mechanisms: patents for inventions and processes, trademarks 
                  for brand identity, copyrights for original works, and trade secret protection for confidential 
                  business information. Each type serves a distinct purpose in preserving your intellectual assets.
                </p>
                <p>
                  The healthcare industry faces unique IP challenges, including navigating FDA regulations, managing 
                  clinical trial data, protecting patient privacy while sharing research, and addressing complex 
                  licensing agreements with institutions and partners.
                </p>
                <p>
                  MediLaw specializes in healthcare IP protection, helping medical professionals identify protectable 
                  assets, file appropriate applications, enforce IP rights, and defend against infringement. We ensure 
                  your innovations remain exclusively yours while maintaining compliance with healthcare regulations.
                </p>
              </div>
              <button className="mt-6 flex items-center text-white hover:text-teal-200 font-medium">
                Let's Discuss
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-xl h-[550px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">IP Protection Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MediLaw Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why MediLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 text-sm">
            Protecting intellectual property in healthcare requires specialized legal knowledge that bridges medical 
            innovation and IP law. MediLaw's team understands both the technical aspects of medical innovations and 
            the legal frameworks protecting them. We've helped countless healthcare providers secure patents for 
            medical devices, protect proprietary treatment methods, register trademarks for their practices, and 
            defend against IP infringement. Our expertise ensures your innovations remain protected while you focus 
            on patient care and advancing medical science.
          </p>
          <button className="flex items-center justify-center mx-auto bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Schedule a Call
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare-Centric Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deep understanding of medical innovations, clinical practices, and healthcare-specific IP challenges.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tailored Legal Strategies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized IP protection approaches designed for your specific practice, innovations, and business goals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proactive Risk Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prevention-focused strategies to identify vulnerabilities and protect your IP before issues arise.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum IP services from initial assessment through registration, enforcement, and defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MediLaw Approach */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The MediLaw Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive assessment of your intellectual property assets, innovation potential, and protection needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Development of tailored IP protection strategies aligned with your business objectives and growth plans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thorough prior art searches, trademark availability checks, and competitive landscape analysis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Preparation and filing of patent applications, trademark registrations, and copyright documentation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Protection</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of trade secret protocols, confidentiality agreements, and ongoing IP monitoring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enforcement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Active defense of your IP rights through cease and desist actions, litigation, and infringement resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of IP Protection */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Design & Construction of Healthcare Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Patents for Healthcare Innovations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protection for medical devices, treatment methods, pharmaceutical formulations, diagnostic tools, 
                and innovative healthcare technologies.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trademarks for Healthcare Brands</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Registration and protection of practice names, logos, slogans, service marks, and brand identities 
                unique to your healthcare business.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Copyrights for Medical Research and Content</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protection for original research papers, educational materials, software code, patient education 
                content, and proprietary documentation.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design Rights for Medical Devices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protection for the aesthetic and functional design of medical equipment, devices, and healthcare 
                products.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trade Secrets for Healthcare Practices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Confidentiality protection for proprietary processes, patient databases, business strategies, and 
                competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protecting Your Vision Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-white/90 text-sm">IP Protection Shield</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Protecting Your Vision, Safeguarding Your Success</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-white/95">
                  Innovation drives healthcare forward. Whether you've developed a groundbreaking medical device, 
                  created a unique treatment protocol, or built a recognizable brand, your intellectual property 
                  represents years of investment, research, and dedication.
                </p>
                <p className="text-white/95">
                  Without proper protection, competitors can replicate your innovations, dilute your brand, or 
                  misappropriate your research. MediLaw provides comprehensive IP protection that secures your 
                  competitive advantages while ensuring compliance with healthcare regulations.
                </p>
                <p className="text-white/95">
                  From initial concept through commercialization, we safeguard your intellectual assets with strategic 
                  patent filings, trademark registrations, licensing agreements, and enforcement actions. Your 
                  innovations deserve protection—we make sure they get it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-600 mb-8 font-semibold text-sm">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-10 flex items-center">
              <div className="bg-gray-100 px-6 py-2 rounded">
                <span className="text-xs text-gray-400">Partner Logo</span>
              </div>
            </div>
            <div className="h-10 flex items-center">
              <div className="bg-gray-100 px-6 py-2 rounded">
                <span className="text-xs text-gray-400">Partner Logo</span>
              </div>
            </div>
            <div className="h-10 flex items-center">
              <div className="bg-gray-100 px-6 py-2 rounded">
                <span className="text-xs text-gray-400">Partner Logo</span>
              </div>
            </div>
            <div className="h-10 flex items-center">
              <div className="bg-gray-100 px-6 py-2 rounded">
                <span className="text-xs text-gray-400">Partner Logo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MediLaw in Focus */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">MediLaw in Focus</h2>
            <a href="#" className="text-teal-600 hover:text-teal-700 font-medium flex items-center text-sm">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Complexities of Pay-by-Performance Contracts and Liability Implications', 
                category: 'Wellness and Clinics', 
                date: 'March 05' 
              },
              { 
                title: 'Breaking the Barriers of Care', 
                category: 'Telemedicine', 
                date: 'March 03' 
              },
              { 
                title: 'Legal Framework for Biosimilar Medications', 
                category: 'Medical', 
                date: 'March 03' 
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-40 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Article Image</span>
                </div>
                <div className="p-5">
                  <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Green Background */}
      <section className="py-16 px-4 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We are here for you: Every Step of Your Healthcare Compliance Journey
            </h2>
            <p className="text-white/95 leading-relaxed text-sm mb-8">
              Whether you need guidance on protecting healthcare innovations or defending against IP infringement, 
              MediLaw offers exceptional legal support so you can focus on advancing medical care. From patent 
              applications to trademark enforcement, we're here to protect your intellectual property.
            </p>
            <button className="bg-teal-500 hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">Team Collaboration</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Real-Time Actionable Insights
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Stay informed with our IP management system that provides real-time updates on patent applications, 
                trademark registrations, and potential infringement alerts. Our dashboard gives you actionable insights 
                to protect and maximize the value of your intellectual property portfolio.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IntellectualPropertyPage;
