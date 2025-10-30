import React, { useState } from 'react';

const LaborLawCompliance = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Labor Law Compliance
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Stay compliant and focus on patient care while we handle complex labor regulations. From employment 
            contracts to workplace safety, we ensure your practice meets all legal requirements and maintains a 
            fair work environment for your team.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Why MediLaw Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Labor laws are designed to protect both hiring entities and employees while ensuring fair treatment. 
                These laws cover everything from minimum wage and overtime pay to workplace safety standards. All 
                states have laws on the books that impose workplace safety requirements and prohibit employment 
                discrimination. However, navigating labor laws can be complicated, especially when federal and state 
                laws differ.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Many small businesses and medical practices don't have internal HR departments or dedicated compliance 
                teams. MediLaw simplifies labor law compliance so they can focus on providing excellent care and 
                building their business.
              </p>
              <button className="flex items-center text-teal-600 hover:text-teal-700 font-medium">
                Yes, You're Eligible
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-xl h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-16 h-16 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Labor Law Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MediLaw Title */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why MediLaw?</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Labor laws protect your practice and employees. We navigate federal and state requirements, from wage 
            regulations to anti-discrimination policies. Trusted labor specialists provide expert guidance so you 
            can focus on patient care while staying compliant with evolving laws.
          </p>
          <button className="mt-6 flex items-center justify-center mx-auto bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trusted Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert guidance on labor law compliance and best practices tailored to healthcare organizations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Labor Expertise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized knowledge in healthcare-specific labor regulations and requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stay ahead of regulatory changes with proactive monitoring and timely updates.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respectful Labor Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensure dignified treatment of all employees while maintaining legal compliance.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evaluation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive assessment of your current labor law compliance status and gap identification.
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
                Development of customized compliance strategies tailored to your practice's unique needs.
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
                In-depth analysis of applicable federal, state, and local labor regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creation and maintenance of required policies, procedures, and employment records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless integration of compliance measures into your daily operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Types of Labor Law Compliances</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employment Contracts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Properly drafted employment agreements that protect both employer and employee rights while ensuring 
                legal compliance.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wage Regulations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adherence to minimum wage laws, overtime requirements, and proper classification of employees.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workplace Safety</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of OSHA standards and healthcare-specific safety protocols to protect your staff.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compliance with benefits regulations including health insurance, retirement plans, and leave policies.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leave Policies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Management of FMLA, sick leave, vacation time, and other time-off requirements under law.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Equal Opportunity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prevention of discrimination and creation of inclusive workplace policies that comply with civil rights laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <p className="text-white/80">Gavel Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Safeguarding Those Who Care for Others</h2>
              <p className="mb-4 text-white/90 leading-relaxed">
                Healthcare providers dedicate their lives to caring for patients. They deserve workplaces that honor 
                their commitment through fair treatment, safe conditions, and legal protection.
              </p>
              <p className="mb-4 text-white/90 leading-relaxed">
                MediLaw ensures that your practice complies with labor laws while fostering a positive work environment. 
                We help you navigate complex regulations so you can focus on what matters most: delivering exceptional 
                patient care.
              </p>
              <p className="text-white/90 leading-relaxed">
                From preventing workplace discrimination to ensuring proper wage practices, we safeguard both your 
                practice and your employees.
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
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
            <div className="w-24 h-12 bg-gray-200 rounded"></div>
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
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Article Image {item}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    Category
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Article Title {item}
                  </h3>
                  <p className="text-gray-500 text-sm">March 0{item}</p>
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
            Whether you need guidance on structuring healthcare compliance or updating your forms, MediLaw offers 
            exceptional legal support so you can focus on patient care. From HIPAA requirements to labor law compliance, 
            we're here to protect you.
          </p>
          <button className="bg-teal-500 hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Let's Connect
          </button>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-400">Team Image</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Real-Time Actionable Insights
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay informed with our compliance monitoring system that provides real-time updates on labor law 
                changes affecting your practice. Our dashboard gives you actionable insights to maintain compliance 
                effortlessly.
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
              'Labor law compliance for healthcare involves meeting federal and state labor regulations, including employment contracts, wage standards, workplace safety, and anti-discrimination policies.',
              'How is labor compliance for healthcare different?',
              'What are the primary labor laws affecting healthcare providers?',
              'How does employer-provided health insurance for my employees fit in healthcare-specific labor laws?',
              'How can MediLaw assist with ongoing labor law compliance?'
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900 pr-4">{question}</span>
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
                    <p className="text-gray-600">
                      Answer content for this question would go here with detailed information about labor law compliance.
                    </p>
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
                <li><a href="#" className="hover:text-white">Risk Management</a></li>
                <li><a href="#" className="hover:text-white">Legal Advisory</a></li>
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
                <li><a href="#" className="hover:text-white">Legal Resources</a></li>
                <li><a href="#" className="hover:text-white">Compliance Guides</a></li>
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

export default LaborLawCompliance;
