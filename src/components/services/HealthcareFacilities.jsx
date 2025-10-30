import React, { useState } from 'react';

const HealthcareFacilitiesPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Design & Construction of Healthcare Facilities
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Navigate the complex regulations and requirements for healthcare facility design and construction with 
            expert guidance from MediLaw.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* What is Design & Construction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Design & Construction of Healthcare Facilities?
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed text-sm">
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
              <button className="mt-6 flex items-center text-teal-600 hover:text-teal-700 font-medium">
                Yes, You're Eligible
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-xl h-[550px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Healthcare Facility</p>
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
            Healthcare facility design and construction requires specialized knowledge of medical regulations, building 
            codes, and operational requirements. MediLaw combines legal expertise with healthcare industry knowledge to 
            guide you through every phase of your facility project. Our team ensures compliance with FGI Guidelines, 
            OSHA standards, ADA requirements, and state-specific regulations while helping you create efficient, 
            patient-centered spaces that meet current needs and adapt to future healthcare delivery models.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized Healthcare Designs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom facility designs tailored to your specific medical specialty, patient population, and 
                operational requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Experienced Construction Consultants</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance from professionals with extensive healthcare construction experience and regulatory 
                knowledge.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Innovative Architecture Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern, evidence-based design approaches that enhance patient outcomes and operational efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive evaluation of your facility needs, site conditions, regulatory requirements, and 
                project goals.
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
                Development of a customized project plan addressing compliance, design, timeline, and budget 
                considerations.
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
                Thorough analysis of applicable building codes, healthcare regulations, and best practices for your 
                facility type.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creation of detailed architectural and engineering plans that meet all regulatory and functional 
                requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Approval</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Assistance with obtaining necessary permits, licenses, and regulatory approvals from all relevant 
                authorities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Construction Oversight</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing monitoring and support during construction to ensure compliance and address any issues 
                that arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Healthcare Facilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Design & Construction of Healthcare Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">General Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive acute care facilities with multiple departments including emergency, surgery, imaging, 
                and inpatient units requiring complex regulatory compliance.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Specialty Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Focused care facilities for specific conditions or populations such as cardiac centers, cancer 
                treatment facilities, or pediatric hospitals.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Outpatient Clinics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ambulatory care centers providing diagnostic, treatment, and minor surgical services without 
                overnight stays.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Diagnostic Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized facilities for imaging and laboratory services requiring specific equipment rooms, 
                shielding, and safety protocols.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Rehabilitation Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Facilities focused on physical therapy, occupational therapy, and recovery services with specialized 
                treatment spaces and equipment.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Long-Term Care Facilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nursing homes and assisted living facilities requiring residential features combined with medical 
                care capabilities and safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designing The Future Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-white/90 text-sm">Healthcare Construction</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Designing The Future of Healthcare Facilities</h2>
              <div className="space-y-4 text-sm leading-relaxed">
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
                title: 'Avoiding Legal Pitfalls in Modern Healthcare', 
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
              Whether you need guidance on structuring healthcare facilities or navigating complex construction 
              regulations, MediLaw offers exceptional legal support so you can focus on patient care. From planning 
              to completion, we're here to protect your investment and ensure regulatory compliance.
            </p>
            <button className="bg-teal-500 hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Connect
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
                Stay informed with our project management system that provides real-time updates on construction 
                progress, regulatory changes, and compliance milestones. Our dashboard gives you actionable insights 
                to keep your facility project on track and within budget.
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

export default HealthcareFacilitiesPage;
