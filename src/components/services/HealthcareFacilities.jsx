import React, { useState } from 'react';

const HealthcareFacilitiesPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Design & Construction of Healthcare Facilities
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Navigate the complex regulations and requirements for healthcare facility design and construction with 
            expert guidance from MediLaw.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </section>

      {/* What is Design & Construction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Design & Construction of Healthcare Facilities?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Designing and constructing healthcare facilities involves creating spaces that meet stringent 
                  regulatory requirements while providing optimal patient care environments. From hospitals and clinics 
                  to specialized treatment centers, every aspect must comply with healthcare building codes, safety 
                  standards, and operational requirements.
                </p>
                <p>
                  Healthcare facility design requires careful planning of patient flow, infection control measures, 
                  medical equipment integration, and accessibility standards. Construction must adhere to specific 
                  guidelines for ventilation, electrical systems, plumbing, and emergency preparedness.
                </p>
                <p>
                  The process involves coordination between architects, engineers, healthcare administrators, and 
                  legal experts to ensure compliance with federal, state, and local regulations including FGI Guidelines, 
                  OSHA requirements, ADA standards, and state health department codes.
                </p>
                <p>
                  Whether you're building a new facility, renovating an existing space, or expanding your practice, 
                  proper planning and regulatory compliance are essential. Healthcare facilities must meet specific 
                  requirements for infection control, patient safety, staff workflow, and emergency response capabilities.
                </p>
                <p>
                  MediLaw provides comprehensive guidance throughout the design and construction process, helping you 
                  navigate complex regulations, obtain necessary permits, and ensure your facility meets all legal and 
                  operational requirements from concept to completion.
                </p>
              </div>
              <button className="mt-8 flex items-center text-white hover:text-teal-100 font-semibold transition-colors duration-300">
                Yes, You're Eligible
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl overflow-hidden shadow-xl h-[550px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-teal-700 font-semibold text-lg">Healthcare Facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MediLaw Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why MediLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 text-base">
            Healthcare facility design and construction requires specialized knowledge of medical regulations, building 
            codes, and operational requirements. MediLaw combines legal expertise with healthcare industry knowledge to 
            guide you through every phase of your facility project. Our team ensures compliance with FGI Guidelines, 
            OSHA standards, ADA requirements, and state-specific regulations while helping you create efficient, 
            patient-centered spaces that meet current needs and adapt to future healthcare delivery models.
          </p>
          <button className="inline-flex items-center bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Schedule a Call
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized Healthcare Designs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom facility designs tailored to your specific medical specialty, patient population, and 
                operational requirements.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Experienced Construction Consultants</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance from professionals with extensive healthcare construction experience and regulatory 
                knowledge.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Innovative Architecture Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern, evidence-based design approaches that enhance patient outcomes and operational efficiency.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">End-to-End Project Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive oversight from initial planning through construction completion and facility 
                commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The MediLaw Approach */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">The MediLaw Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive evaluation of your facility needs, site conditions, regulatory requirements, and 
                project goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Development of a customized project plan addressing compliance, design, timeline, and budget 
                considerations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Thorough analysis of applicable building codes, healthcare regulations, and best practices for your 
                facility type.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creation of detailed architectural and engineering plans that meet all regulatory and functional 
                requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Approval</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Assistance with obtaining necessary permits, licenses, and regulatory approvals from all relevant 
                authorities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construction Oversight</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing monitoring and support during construction to ensure compliance and address any issues 
                that arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Healthcare Facilities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Design & Construction of Healthcare Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive acute care facilities with multiple departments including emergency, surgery, imaging, 
                and inpatient units requiring complex regulatory compliance.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Focused care facilities for specific conditions or populations such as cardiac centers, cancer 
                treatment facilities, or pediatric hospitals.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outpatient Clinics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ambulatory care centers providing diagnostic, treatment, and minor surgical services without 
                overnight stays.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized facilities for imaging and laboratory services requiring specific equipment rooms, 
                shielding, and safety protocols.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rehabilitation Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Facilities focused on physical therapy, occupational therapy, and recovery services with specialized 
                treatment spaces and equipment.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Care Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nursing homes and assisted living facilities requiring residential features combined with medical 
                care capabilities and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designing The Future Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-28 h-28 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Healthcare Construction</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Designing The Future of Healthcare Facilities</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Modern healthcare facilities must balance multiple priorities: patient safety, operational efficiency, 
                  regulatory compliance, and healing environments. The design and construction process requires 
                  meticulous attention to infection control, accessibility, technology integration, and future 
                  adaptability.
                </p>
                <p className="text-white/95">
                  MediLaw understands that every healthcare facility is unique, with specific patient populations, 
                  clinical workflows, and community needs. Our expertise spans from small private practices to large 
                  hospital systems, ensuring your facility meets current standards while remaining flexible for 
                  future growth.
                </p>
                <p className="text-white/95">
                  We navigate the complex landscape of building codes, healthcare regulations, and accreditation 
                  requirements, allowing you to focus on your mission of providing excellent patient care in a 
                  safe, efficient, and welcoming environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-500 mb-10 font-semibold text-sm tracking-wider uppercase">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-12 flex items-center">
                <div className="bg-gray-100 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-sm text-gray-400 font-medium">Partner Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MediLaw in Focus */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">MediLaw in Focus</h2>
            <a href="#" className="text-[#17ada1] hover:text-[#0d9488] font-semibold flex items-center text-sm transition-colors duration-300">
              View All
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Key Considerations in Healthcare Facility Design', 
                category: 'Construction', 
                date: 'March 05' 
              },
              { 
                title: 'Navigating Healthcare Building Regulations', 
                category: 'Compliance', 
                date: 'March 03' 
              },
              { 
                title: 'Modern Healthcare Architecture Trends', 
                category: 'Design', 
                date: 'March 03' 
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 h-48 flex items-center justify-center">
                  <span className="text-teal-400 text-sm font-medium">Article Image</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#17ada1] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug hover:text-[#17ada1] transition-colors duration-300 cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We are here for you: Every Step of Your Healthcare Compliance Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need guidance on structuring healthcare facilities or navigating complex construction 
            regulations, MediLaw offers exceptional legal support so you can focus on patient care. From planning 
            to completion, we're here to protect your investment and ensure regulatory compliance.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Connect
          </button>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl h-[500px] flex items-center justify-center shadow-xl">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-teal-700 font-semibold text-lg">Team Collaboration</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Real-Time Actionable Insights
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Stay informed with our project management system that provides real-time updates on construction 
                progress, regulatory changes, and compliance milestones. Our dashboard gives you actionable insights 
                to keep your facility project on track and within budget.
              </p>
              <form className="space-y-5">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17ada1] focus:border-[#17ada1] text-sm transition-all duration-300"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17ada1] focus:border-[#17ada1] text-sm transition-all duration-300"
                />
                <button type="submit" className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
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

export default HealthcareFacilitiesPage;
