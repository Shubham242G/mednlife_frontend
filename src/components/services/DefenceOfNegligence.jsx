import React from "react";
import { CheckCircle, Shield, Users, Scale, Search, MessageCircle } from "lucide-react";

const DefenceAgainstMedicalNegligence = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#17ada1] via-[#17ada1]/80 to-white/95 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Defense Against Medical Negligence
          </h1>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            We offer personalized support and expert legal defense for medical professionals facing medical negligence claims.
          </p>
          <button className="bg-[#0f766e] hover:bg-[#0d9488] text-white px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
            Let's Connect
          </button>
        </div>
      </section>

      {/* What are Medical Negligence Claims */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="bg-[#17ada1] text-white p-10 md:p-12 rounded-xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What are Medical Negligence Claims?
              </h2>
              <div className="space-y-4 leading-relaxed text-sm">
                <p>
                  A medical negligence claim arises when a patient believes a healthcare provider's treatment fell below acceptable standards, causing injury or harm.
                  These claims can be complex, involving medical, ethical, and legal aspects.
                </p>
                <p>
                  At MediLaw, we help doctors, hospitals, and healthcare providers
                  defend themselves against false or exaggerated allegations, ensuring their professional reputation remains protected.
                </p>
              </div>
              <button className="mt-8 flex items-center text-white hover:text-teal-100 font-semibold transition-colors duration-300">
                Talk to Our Experts
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
                    <Shield className="w-16 h-16 text-teal-600" />
                  </div>
                  <p className="text-teal-700 font-semibold text-lg">Medical Defense</p>
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
            Facing medical negligence claims can drain time, money, and confidence. MediLaw provides expert defense, compassionate support, and a proven record
            in protecting healthcare professionals across India.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Shield, title: "Expert Legal Defense", desc: "Specialized healthcare defense from experienced legal professionals." },
              { icon: Users, title: "Comprehensive Support", desc: "End-to-end assistance throughout the entire legal process." },
              { icon: CheckCircle, title: "Safeguarding Your Reputation", desc: "Protecting your professional standing and credibility." },
              { icon: Scale, title: "Proven Track Record", desc: "Successful defense of healthcare providers nationwide." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The MediLaw Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            The MediLaw Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Prevention", 
                desc: "Proactive strategies to minimize risk and prevent negligence claims before they arise.",
                icon: Shield
              },
              { 
                title: "Strategy", 
                desc: "Customized defense strategies tailored to the specific circumstances of your case.",
                icon: Scale
              },
              { 
                title: "Research", 
                desc: "Thorough investigation and medical expert consultation to build a strong defense.",
                icon: Search
              },
              { 
                title: "Support", 
                desc: "Continuous guidance and emotional support throughout the legal proceedings.",
                icon: Users
              },
              { 
                title: "Communication", 
                desc: "Clear, transparent communication keeping you informed at every stage.",
                icon: MessageCircle
              },
              { 
                title: "Collaboration", 
                desc: "Working closely with medical experts and your team to ensure comprehensive defense.",
                icon: CheckCircle
              },
            ].map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Claims */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Types of Medical Negligence Claims
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Misdiagnosis or Delayed Diagnosis",
              "Surgical Errors",
              "Medication Mistakes",
              "Birth Injuries",
              "Failure to Treat",
              "Anesthesia Errors",
            ].map((claim, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 p-8 rounded-xl hover:border-[#17ada1] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900">{claim}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Defending Every Claim Section */}
      <section className="py-20 px-4 bg-[#17ada1] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center backdrop-blur-sm">
              <div className="text-center p-8">
                <div className="w-28 h-28 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-14 h-14 text-white" />
                </div>
                <p className="text-white font-semibold text-lg">Complete Defense</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                MediLaw Defending Every Claim, Every Step
              </h2>
              <div className="space-y-5 text-sm leading-relaxed">
                <p className="text-white/95">
                  Medical negligence claims can be devastating to healthcare professionals, affecting not only their practice but their personal lives and professional reputation.
                </p>
                <p className="text-white/95">
                  Our expert legal team offers comprehensive defense against all types of medical negligence claims. We understand the medical, legal, and ethical complexities involved and provide strategic defense tailored to your specific situation.
                </p>
                <p className="text-white/95">
                  Protect your practice, preserve your reputation, and ensure peace of mind with MediLaw by your side through every stage of the legal process.
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
                title: 'Understanding Medical Negligence Defense Strategies', 
                category: 'Legal Defense', 
                date: 'March 05' 
              },
              { 
                title: 'Protecting Healthcare Professionals Rights', 
                category: 'Medical Law', 
                date: 'March 03' 
              },
              { 
                title: 'Common Misconceptions About Medical Negligence', 
                category: 'Medical', 
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
            We are here for you: Every Step of Your Healthcare Defense Journey
          </h2>
          <p className="text-white/95 leading-relaxed text-base mb-10 max-w-3xl mx-auto">
            Whether you're facing a medical negligence claim or need proactive risk management guidance, MediLaw offers exceptional legal support so you can focus on patient care. From initial consultation to case resolution, we're here to protect your practice and ensure peace of mind.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#17ada1] px-10 py-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-xl inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Consultation
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
                  <Scale className="w-16 h-16 text-teal-600" />
                </div>
                <span className="text-teal-700 font-semibold text-lg">Legal Excellence</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empower Your Practice With Expert Legal Defense
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-base">
                Stay protected with our comprehensive defense strategies that provide peace of mind and allow you to focus on what matters most—providing quality patient care. Our expert team is available 24/7 to address your concerns.
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
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefenceAgainstMedicalNegligence;
