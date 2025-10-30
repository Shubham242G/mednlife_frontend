import React, { useState } from 'react';

const ComplianceManagementPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Compliance Management
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Navigate complex healthcare regulations with confidence through comprehensive compliance management 
            solutions tailored to your practice.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* What is Compliance Management Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-teal-700 text-white p-8 md:p-10 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                What is Compliance Management?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  Compliance management in healthcare involves implementing systematic processes to ensure your 
                  practice adheres to all applicable federal, state, and local regulations. This encompasses 
                  HIPAA privacy requirements, billing practices, employment laws, safety standards, and 
                  accreditation criteria.
                </p>
                <p>
                  Healthcare providers face an increasingly complex regulatory landscape with overlapping requirements 
                  from multiple agencies including CMS, OCR, OSHA, and state health departments. Non-compliance can 
                  result in significant penalties, legal liability, reputation damage, and even loss of licensure.
                </p>
                <p>
                  Effective compliance management requires ongoing monitoring of regulatory changes, staff training, 
                  policy development and updates, internal audits, risk assessments, and corrective action plans. 
                  It&apos;s not a one-time project but a continuous commitment to meeting legal and ethical obligations.
                </p>
                <p>
                  Many healthcare practices struggle to maintain compliance due to limited resources, staff turnover, 
                  and the constantly evolving regulatory environment. Without dedicated compliance expertise, practices 
                  risk costly violations and operational disruptions.
                </p>
                <p>
                  MediLaw provides comprehensive compliance management services that proactively identify risks, 
                  implement robust compliance programs, conduct regular audits, and ensure your practice stays ahead 
                  of regulatory requirements. We transform compliance from a burden into a strategic advantage.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Compliance Management</p>
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
            MediLaw provides the most trusted partner in compliance management for healthcare providers. Our deep 
            understanding of healthcare regulations combined with practical compliance experience ensures your practice 
            meets all legal requirements without unnecessary burden. We don&apos;t just tell you what to do—we work alongside 
            you to implement sustainable compliance programs that protect your practice, your patients, and your 
            reputation. From HIPAA compliance to billing practices, we provide comprehensive solutions that keep you 
            compliant and focused on patient care.
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
              <h3 className="text-lg font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Specialized healthcare compliance expertise from professionals who understand medical regulations 
                and practical implementation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tailored compliance programs designed for your specific practice type, size, and regulatory requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Proactive identification and management of compliance risks before they become costly violations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">End-To-End Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive assistance from initial assessment through ongoing monitoring and audit support.
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
                Comprehensive assessment of your current compliance status, identifying gaps and areas of risk 
                across all regulatory domains.
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
                Development of customized compliance strategies and action plans that address your specific needs 
                and priorities.
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
                Ongoing monitoring of regulatory changes and best practices to keep your compliance program current 
                and effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Systematic rollout of policies, procedures, and training programs to embed compliance throughout 
                your organization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Communication</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear communication of compliance requirements and expectations to all staff members and stakeholders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Continuous guidance and assistance to maintain compliance, address issues, and adapt to new requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Compliance Management */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Compliance Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adherence to federal, state, and local healthcare regulations including CMS requirements, state 
                licensing laws, and federal privacy rules.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Licensing and Accreditation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintenance of professional licenses, facility certifications, and accreditation standards from 
                bodies like Joint Commission and state boards.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk Management Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Implementation of policies and procedures to identify, assess, and mitigate operational and 
                clinical risks across your practice.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Patient Data Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protection of patient information through HIPAA-compliant policies, security measures, and breach 
                response protocols.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Operational Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Day-to-day adherence to internal policies, quality standards, and operational protocols that support 
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Compliance, Our Commitment Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-lg h-80 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-6">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-white/90 text-sm">Compliance Goals</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Compliance, Our Commitment</h2>
              <div className="space-y-4 text-sm leading-relaxed">
                <p className="text-white/95">
                  Healthcare compliance isn&apos;t just about avoiding penalties—it&apos;s about building a foundation of 
                  trust, quality, and operational excellence. Every regulation exists to protect patients, ensure 
                  quality care, and maintain the integrity of healthcare delivery.
                </p>
                <p className="text-white/95">
                  MediLaw understands that compliance can feel overwhelming, especially for small and mid-sized 
                  practices without dedicated compliance staff. That&apos;s why we&apos;ve developed comprehensive, practical 
                  solutions that make compliance manageable and sustainable.
                </p>
                <p className="text-white/95">
                  We don&apos;t just hand you a binder of policies—we become your compliance partner, working alongside 
                  you to implement systems that work for your practice, train your staff, and maintain ongoing 
                  compliance. Your success in compliance is our commitment, and we&apos;re with you every step of the way.
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
              Whether you need guidance on structuring healthcare compliance or maintaining regulatory standards, 
              MediLaw offers exceptional legal support so you can focus on patient care. From HIPAA requirements 
              to operational compliance, we&apos;re here to protect your practice and ensure peace of mind.
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
                Stay informed with our compliance management system that provides real-time updates on regulatory 
                changes, audit findings, and compliance metrics. Our dashboard gives you actionable insights to 
                maintain compliance effortlessly and demonstrate your commitment to quality care.
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
    </div>
  );
};

export default ComplianceManagementPage;
