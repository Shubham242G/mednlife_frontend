import React, { useState } from 'react';

const HealthcareStartupAdvisoryPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Healthcare Startup Advisory
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Navigate the complexities of launching and scaling your healthcare venture with comprehensive legal 
            and strategic guidance tailored to the unique challenges of the healthcare industry.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </section>

      {/* What is Healthcare Startup Advisory Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is Healthcare Startup Advisory?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Healthcare Startup Advisory provides comprehensive legal, regulatory, and strategic guidance for 
                  entrepreneurs launching healthcare ventures. This specialized service addresses the unique 
                  challenges of building healthcare businesses, from initial concept through growth and scaling.
                </p>
                <p>
                  Starting a healthcare business requires navigating complex regulations, securing proper licenses, 
                  structuring compliant operations, protecting intellectual property, and managing relationships with 
                  investors, partners, and providers. The healthcare industry presents unique legal challenges that 
                  differ significantly from other sectors.
                </p>
                <p>
                  Healthcare startups face regulatory requirements from multiple agencies, including FDA approvals for 
                  medical devices, HIPAA compliance for health data, state licensing boards, CMS regulations, and 
                  anti-kickback statutes. Each aspect requires specialized expertise to avoid costly mistakes.
                </p>
                <p>
                  Many healthcare entrepreneurs underestimate the complexity of regulatory compliance, leading to 
                  delays, increased costs, or complete business failure. Proper legal foundation from the start 
                  prevents these pitfalls and positions your venture for sustainable growth.
                </p>
                <p>
                  MediLaw specializes in healthcare startup advisory, providing end-to-end support from entity 
                  formation through funding rounds, product launches, and market expansion. We combine legal expertise 
                  with deep healthcare industry knowledge to guide your venture through every stage of development.
                </p>
              </div>
              <button className="mt-8 flex items-center text-white hover:text-teal-100 font-semibold transition-colors duration-300">
                Talk To Our Experts
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-teal-700 font-semibold text-lg">Startup Innovation</p>
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
            MediLaw brings unique expertise at the intersection of healthcare law, business strategy, and startup 
            development. We understand both the legal complexities of healthcare regulation and the practical realities 
            of building a startup. Our team has guided numerous healthcare ventures from concept to successful market 
            entry, helping founders avoid common pitfalls while accelerating growth. We don&apos;t just provide legal 
            advice—we become strategic partners in your success, offering practical guidance that balances compliance 
            requirements with business objectives and growth strategies.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized Startup Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized advisory services tailored to your specific healthcare venture, market, and growth stage.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Legal Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum legal services covering all aspects of healthcare startup formation and operation.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Healthcare Business Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic business guidance informed by deep healthcare industry knowledge and startup experience.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Medical Legal Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable counsel on medical-legal issues unique to healthcare startups and emerging companies.
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
                Comprehensive assessment of your business concept, market opportunity, regulatory requirements, and 
                legal structure needs.
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
                Development of a strategic roadmap addressing legal structure, regulatory compliance, funding, and 
                growth milestones.
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
                Thorough analysis of applicable regulations, market conditions, competitive landscape, and best 
                practices for your sector.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Establishment of proper legal entity, governance structure, contracts, policies, and compliance 
                frameworks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Capitalization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support with fundraising strategy, investor agreements, term sheet negotiation, and equity 
                structuring.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing advisory support for scaling operations, entering new markets, partnerships, and strategic 
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Healthcare Startup Advisory */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Healthcare Startup Advisory
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Structuring and Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entity formation, governance structures, founder agreements, equity allocation, and strategic business 
                planning tailored to healthcare ventures.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Business Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic guidance on market entry, business model validation, operational structure, and growth 
                strategies specific to healthcare markets.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance and Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive regulatory compliance, licensing, HIPAA implementation, fraud and abuse prevention, and 
                ongoing legal support.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensing and Regulatory Approvals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigation of FDA approvals, state licensing requirements, facility certifications, and regulatory 
                submissions for healthcare products and services.
              </p>
            </div>
            <div className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management and Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of risk management frameworks, compliance programs, quality assurance systems, and 
                liability protection strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Your Healthcare Startup Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-28 h-28 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Startup Growth</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Empowering Your Healthcare Startup at Every Stage</h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Launching a healthcare startup requires more than a great idea—it demands navigating complex 
                  regulations, securing proper licenses, structuring compliant operations, and managing investor 
                  relationships. The healthcare regulatory landscape is unforgiving, and mistakes can be costly or 
                  fatal to your venture.
                </p>
                <p className="text-white/95">
                  MediLaw provides comprehensive startup advisory services that combine legal expertise with business 
                  strategy and healthcare industry knowledge. We guide you through entity formation, regulatory 
                  compliance, fundraising, product development, and market launch—ensuring your foundation is solid 
                  and your growth is sustainable.
                </p>
                <p className="text-white/95">
                  From initial concept to successful scale-up, we serve as your strategic partner and trusted advisor. 
                  Our goal isn&apos;t just legal compliance—it&apos;s helping you build a thriving healthcare business that 
                  delivers value to patients while achieving your entrepreneurial vision.
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
                title: 'Essential Legal Steps for Healthcare Startup Success', 
                category: 'Startup', 
                date: 'March 05' 
              },
              { 
                title: 'Navigating Healthcare Regulations for New Ventures', 
                category: 'Compliance', 
                date: 'March 03' 
              },
              { 
                title: 'Funding Strategies for Healthcare Startups', 
                category: 'Business', 
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
            We are here for you: Every Step of Your Healthcare Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you need guidance on launching your healthcare startup or scaling your existing venture, 
            MediLaw offers exceptional legal and strategic support so you can focus on innovation and growth. 
            From entity formation to market expansion, we&apos;re here to ensure your success.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let&apos;s Connect
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
                Empower Your Startup With Strategic Insights
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Stay informed with our startup advisory platform that provides real-time updates on regulatory 
                changes, compliance deadlines, and strategic milestones. Our dashboard gives you actionable insights 
                to grow your healthcare venture with confidence.
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: 'What legal considerations should I be aware of when starting a healthcare business?',
                answer: 'Key considerations include entity structure selection, healthcare licensing requirements, HIPAA compliance, fraud and abuse laws, professional liability, corporate practice of medicine restrictions, employment law, intellectual property protection, and investor agreements. Each aspect requires careful planning and expert guidance.'
              },
              {
                question: 'How can MediLaw assist in navigating healthcare regulations for my startup?',
                answer: 'MediLaw provides comprehensive regulatory guidance including identifying applicable requirements, preparing compliance programs, obtaining necessary licenses and approvals, implementing HIPAA safeguards, structuring compliant business arrangements, and providing ongoing advisory support as regulations evolve.'
              },
              {
                question: 'What are the most common legal pitfalls healthcare startups should avoid?',
                answer: 'Common pitfalls include inadequate entity structure, missing licenses or permits, HIPAA violations, anti-kickback statute violations, inadequate contracts, intellectual property disputes, employment law issues, and failure to maintain proper corporate governance. Proper legal foundation prevents these costly mistakes.'
              },
              {
                question: 'How do I ensure my healthcare startup complies with anti-fraud and abuse laws?',
                answer: 'Compliance requires understanding and avoiding violations of anti-kickback statutes, Stark Law, False Claims Act, and state equivalents. This includes proper structuring of financial relationships, compensation arrangements, referrals, and billing practices. MediLaw helps design compliant business models from the start.'
              },
              {
                question: 'What role does MediLaw play in the strategic planning for healthcare businesses?',
                answer: 'MediLaw serves as both legal counsel and strategic advisor, helping you develop business strategy that balances growth objectives with regulatory requirements. We assist with market analysis, business model validation, partnership structures, funding strategy, and scaling plans tailored to healthcare markets.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-200 hover:border-[#17ada1] transition-all duration-300">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-start hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transform transition-transform mt-0.5 ${
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
                  <div className="px-6 pb-5 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareStartupAdvisoryPage;
