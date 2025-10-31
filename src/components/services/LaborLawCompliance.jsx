import React, { useState } from 'react';

const LaborLawCompliance = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Labor Law Compliance
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Stay compliant and focus on patient care while we handle complex labor regulations. From employment 
            contracts to workplace safety, we ensure your practice meets all legal requirements and maintains a 
            fair work environment for your team.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </section>

      {/* Why MediLaw Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Understanding Labor Law Compliance
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Labor laws are designed to protect both hiring entities and employees while ensuring fair treatment. 
                  These laws cover everything from minimum wage and overtime pay to workplace safety standards. All 
                  states have laws on the books that impose workplace safety requirements and prohibit employment 
                  discrimination.
                </p>
                <p>
                  However, navigating labor laws can be complicated, especially when federal and state laws differ. 
                  Healthcare practices face unique challenges including compliance with clinical staff regulations, 
                  credentialing requirements, and healthcare-specific employment laws.
                </p>
                <p>
                  Many small businesses and medical practices don't have internal HR departments or dedicated compliance 
                  teams. MediLaw simplifies labor law compliance so they can focus on providing excellent care and 
                  building their business.
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
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl overflow-hidden shadow-xl h-[450px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-teal-700 font-semibold text-lg">Labor Compliance</p>
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
            Labor laws protect your practice and employees. We navigate federal and state requirements, from wage 
            regulations to anti-discrimination policies. Trusted labor specialists provide expert guidance so you 
            can focus on patient care while staying compliant with evolving laws.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance on labor law compliance and best practices tailored to healthcare organizations.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Labor Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized knowledge in healthcare-specific labor regulations and requirements.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Proactive Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay ahead of regulatory changes with proactive monitoring and timely updates.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Respectful Labor Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure dignified treatment of all employees while maintaining legal compliance.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive assessment of your current labor law compliance status and gap identification.
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
                Development of customized compliance strategies tailored to your practice's unique needs.
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
                In-depth analysis of applicable federal, state, and local labor regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creation and maintenance of required policies, procedures, and employment records.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless integration of compliance measures into your daily operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing assistance and updates to ensure continued compliance with evolving regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Labor Law Compliances */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Labor Law Compliances
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employment Contracts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Properly drafted employment agreements that protect both employer and employee rights while ensuring 
                legal compliance.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wage Regulations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adherence to minimum wage laws, overtime requirements, and proper classification of employees.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workplace Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of OSHA standards and healthcare-specific safety protocols to protect your staff.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compliance with benefits regulations including health insurance, retirement plans, and leave policies.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leave Policies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Management of FMLA, sick leave, vacation time, and other time-off requirements under law.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equal Opportunity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prevention of discrimination and creation of inclusive workplace policies that comply with civil rights laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-28 h-28 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Protection & Compliance</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Safeguarding Those Who Care for Others</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Healthcare providers dedicate their lives to caring for patients. They deserve workplaces that honor 
                  their commitment through fair treatment, safe conditions, and legal protection.
                </p>
                <p className="text-white/95">
                  MediLaw ensures that your practice complies with labor laws while fostering a positive work environment. 
                  We help you navigate complex regulations so you can focus on what matters most: delivering exceptional 
                  patient care.
                </p>
                <p className="text-white/95">
                  From preventing workplace discrimination to ensuring proper wage practices, we safeguard both your 
                  practice and your employees.
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
                title: 'Understanding Healthcare Employment Laws', 
                category: 'Labor Law', 
                date: 'March 05' 
              },
              { 
                title: 'Wage and Hour Compliance Best Practices', 
                category: 'Compliance', 
                date: 'March 03' 
              },
              { 
                title: 'Creating a Fair Workplace Environment', 
                category: 'HR', 
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
            Whether you need guidance on structuring healthcare compliance or updating your forms, MediLaw offers 
            exceptional legal support so you can focus on patient care. From HIPAA requirements to labor law compliance, 
            we're here to protect you.
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
                <span className="text-teal-700 font-semibold text-lg">Team Empowerment</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Real-Time Compliance Insights
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Stay informed with our compliance monitoring system that provides real-time updates on labor law 
                changes affecting your practice. Our dashboard gives you actionable insights to maintain compliance 
                effortlessly.
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

export default LaborLawCompliance;
