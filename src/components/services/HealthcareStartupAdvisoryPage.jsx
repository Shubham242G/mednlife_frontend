import React, { useState } from 'react';

const HealthcareStartupAdvisoryPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Startup Advisory
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Navigate the complexities of launching and scaling your healthcare venture with comprehensive legal 
            and strategic guidance tailored to the unique challenges of the healthcare industry.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* What is Healthcare Startup Advisory Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-teal-700 text-white p-8 md:p-10 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
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
              <button className="mt-6 flex items-center text-white hover:text-teal-200 font-medium">
                Talk To Our Experts
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Startup Innovation</p>
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
            MediLaw brings unique expertise at the intersection of healthcare law, business strategy, and startup 
            development. We understand both the legal complexities of healthcare regulation and the practical realities 
            of building a startup. Our team has guided numerous healthcare ventures from concept to successful market 
            entry, helping founders avoid common pitfalls while accelerating growth. We don&apos;t just provide legal 
            advice—we become strategic partners in your success, offering practical guidance that balances compliance 
            requirements with business objectives and growth strategies.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personalized Startup Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Customized advisory services tailored to your specific healthcare venture, market, and growth stage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Legal Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Full-spectrum legal services covering all aspects of healthcare startup formation and operation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Healthcare Business Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic business guidance informed by deep healthcare industry knowledge and startup experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Trusted Medical Legal Advisory</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reliable counsel on medical-legal issues unique to healthcare startups and emerging companies.
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
                Comprehensive assessment of your business concept, market opportunity, regulatory requirements, and 
                legal structure needs.
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
                Development of a strategic roadmap addressing legal structure, regulatory compliance, funding, and 
                growth milestones.
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
                Thorough analysis of applicable regulations, market conditions, competitive landscape, and best 
                practices for your sector.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Establishment of proper legal entity, governance structure, contracts, policies, and compliance 
                frameworks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Capitalization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Support with fundraising strategy, investor agreements, term sheet negotiation, and equity 
                structuring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ongoing advisory support for scaling operations, entering new markets, partnerships, and strategic 
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Healthcare Startup Advisory */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Healthcare Startup Advisory
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Structuring and Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entity formation, governance structures, founder agreements, equity allocation, and strategic business 
                planning tailored to healthcare ventures.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Business Consulting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic guidance on market entry, business model validation, operational structure, and growth 
                strategies specific to healthcare markets.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Compliance and Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive regulatory compliance, licensing, HIPAA implementation, fraud and abuse prevention, and 
                ongoing legal support.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Licensing and Regulatory Approvals</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Navigation of FDA approvals, state licensing requirements, facility certifications, and regulatory 
                submissions for healthcare products and services.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk Management and Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of risk management frameworks, compliance programs, quality assurance systems, and 
                liability protection strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Your Healthcare Startup Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-white/90 text-sm">Startup Growth</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Empowering Your Healthcare Startup at Every Stage</h2>
              <div className="space-y-4 text-sm leading-relaxed">
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-gray-600 mb-8 font-semibold text-sm">Trusted by</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-10 flex items-center">
                <div className="bg-gray-100 px-6 py-2 rounded">
                  <span className="text-xs text-gray-400">Partner Logo</span>
                </div>
              </div>
            ))}
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
                title: 'Avoiding the Spectrum of Lost Revenue', 
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We are here for you: Every Step of Your Healthcare Compliance Journey
            </h2>
            <p className="text-white/95 leading-relaxed text-sm mb-8">
              Whether you need guidance on launching your healthcare startup or scaling your existing venture, 
              MediLaw offers exceptional legal and strategic support so you can focus on innovation and growth. 
              From entity formation to market expansion, we&apos;re here to ensure your success.
            </p>
            <button className="bg-teal-500 hover:bg-white hover:text-teal-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let&apos;s Connect
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
                Stay informed with our startup advisory platform that provides real-time updates on regulatory 
                changes, compliance deadlines, and strategic milestones. Our dashboard gives you actionable insights 
                to grow your healthcare venture with confidence.
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
                <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
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
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-start hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-900 pr-4 text-sm leading-relaxed">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transform transition-transform mt-0.5 ${
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
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.answer}</p>
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
