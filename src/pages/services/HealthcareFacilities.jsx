import React, { useState } from 'react';

const HealthcareFacilities = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-teal-700 font-bold text-xl">MediLaw</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-teal-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-teal-600">What is MediLaw?</a>
              <a href="#" className="text-gray-700 hover:text-teal-600">Contact Us</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-teal-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-teal-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="text-gray-700 hover:text-teal-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Design & Construction of Healthcare Facilities?
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
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
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl h-[500px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Healthcare Facility Image</p>
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
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Healthcare facility design and construction requires specialized knowledge of medical regulations, building 
            codes, and operational requirements. MediLaw combines legal expertise with healthcare industry knowledge to 
            guide you through every phase of your facility project. Our team ensures compliance with FGI Guidelines, 
            OSHA standards, ADA requirements, and state-specific regulations while helping you create efficient, 
            patient-centered spaces.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Healthcare Designs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom facility designs tailored to your specific medical specialty, patient population, and 
                operational requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Construction Consultants</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance from professionals with extensive healthcare construction experience and regulatory 
                knowledge.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Architecture Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern, evidence-based design approaches that enhance patient outcomes and operational efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Project Management</h3>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Approval</h3>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Design & Construction of Healthcare Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive acute care facilities with multiple departments including emergency, surgery, imaging, 
                and inpatient units requiring complex regulatory compliance.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialty Hospitals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Focused care facilities for specific conditions or populations such as cardiac centers, cancer 
                treatment facilities, or pediatric hospitals.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outpatient Clinics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ambulatory care centers providing diagnostic, treatment, and minor surgical services without 
                overnight stays.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized facilities for imaging and laboratory services requiring specific equipment rooms, 
                shielding, and safety protocols.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rehabilitation Centers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Facilities focused on physical therapy, occupational therapy, and recovery services with specialized 
                treatment spaces and equipment.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
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
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-white/80">Construction Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Designing The Future of Healthcare Facilities</h2>
              <p className="mb-4 text-white/90 leading-relaxed">
                Modern healthcare facilities must balance multiple priorities: patient safety, operational efficiency, 
                regulatory compliance, and healing environments. The design and construction process requires 
                meticulous attention to infection control, accessibility, technology integration, and future 
                adaptability.
              </p>
              <p className="mb-4 text-white/90 leading-relaxed">
                MediLaw understands that every healthcare facility is unique, with specific patient populations, 
                clinical workflows, and community needs. Our expertise spans from small private practices to large 
                hospital systems, ensuring your facility meets current standards while remaining flexible for 
                future growth.
              </p>
              <p className="text-white/90 leading-relaxed">
                We navigate the complex landscape of building codes, healthcare regulations, and accreditation 
                requirements, allowing you to focus on your mission of providing excellent patient care in a 
                safe, efficient, and welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-600 mb-8 font-semibold">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Logo 1</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Logo 2</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Logo 3</span>
            </div>
            <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">Logo 4</span>
            </div>
          </div>
        </div>
      </section>

      {/* MediLaw in Focus */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">MediLaw in Focus</h2>
            <a href="#" className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
              View All
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Complexities of Pay-by-Performance Contracts', category: 'Wellness and Clinics', date: 'March 05' },
              { title: 'Breaking the Barriers of Care', category: 'Telemedicine', date: 'March 03' },
              { title: 'Avoiding Legal Pitfalls', category: 'Medical', date: 'March 03' }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Article {index + 1}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            We are here for you: Every Step of Your Healthcare Compliance Journey
          </h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Whether you need guidance on structuring healthcare facilities or navigating complex construction 
            regulations, MediLaw offers exceptional legal support so you can focus on patient care. From planning 
            to completion, we're here to protect your investment.
          </p>
          <button className="bg-teal-500 hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-gray-500">Team Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Real-Time Actionable Insights
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay informed with our project management system that provides real-time updates on construction 
                progress, regulatory changes, and compliance milestones. Our dashboard gives you actionable insights 
                to keep your facility project on track and within budget.
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: 'What makes designing and constructing healthcare facilities different from other building types?',
                answer: 'Healthcare facilities must meet stringent regulatory requirements for patient safety, infection control, accessibility, and specialized systems. They require compliance with FGI Guidelines, OSHA standards, ADA requirements, and state-specific health codes that don\'t apply to other building types.'
              },
              {
                question: 'What are the key regulatory bodies governing healthcare facility design and construction?',
                answer: 'Key regulatory bodies include the Facility Guidelines Institute (FGI), Centers for Medicare & Medicaid Services (CMS), Joint Commission, state health departments, local building departments, and OSHA. Each has specific requirements that must be met.'
              },
              {
                question: 'How long does the design and construction process typically take for a healthcare facility?',
                answer: 'Timeline varies based on facility size and complexity. Small clinics may take 6-12 months from design to completion, while large hospitals can take 3-5 years. Planning, permitting, and regulatory approval often take as long as construction itself.'
              },
              {
                question: 'What are the most common compliance challenges in healthcare facility construction?',
                answer: 'Common challenges include meeting infection control standards, proper ventilation and air quality systems, medical gas installations, electrical requirements for life safety systems, accessibility compliance, and coordinating multiple regulatory approvals.'
              },
              {
                question: 'How can MediLaw assist with our healthcare facility design and construction project?',
                answer: 'MediLaw provides comprehensive legal and regulatory guidance throughout your project, including compliance review, permit assistance, regulatory approvals, contract review, and ongoing support to ensure your facility meets all requirements from concept to commissioning.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">For Healthcare Providers</a></li>
                <li><a href="#" className="hover:text-white">Healthcare Compliance</a></li>
                <li><a href="#" className="hover:text-white">Facility Design</a></li>
                <li><a href="#" className="hover:text-white">Construction Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact us</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Corporate Office</a></li>
                <li><a href="#" className="hover:text-white">Registered Office</a></li>
                <li><a href="#" className="hover:text-white">Email Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white">Design Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Compliance Resources</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
                <li><a href="#" className="hover:text-white">Webinars</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-white/80 mb-4 md:mb-0">Copyright 2025 MediLaw Inc.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-white/80 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-white/80 hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareFacilities;
