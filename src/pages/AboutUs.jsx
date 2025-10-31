import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#17ada1] via-[#17ada1]/90 to-[#138f85] text-white px-6 md:px-12 pt-20">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            About <span className="text-white">MediLaw</span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/95">
            Bridging the gap between medical expertise and legal excellence to
            create a better, safer, and more transparent healthcare landscape.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-4xl mx-auto">
            At MediLaw, we are committed to empowering clients through
            knowledge, compassion, and professionalism. Our mission is to bring
            clarity and fairness to cases where medicine and law intersect —
            ensuring every voice is heard and every right is protected.
          </p>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Vision & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest ethical standards in every case, ensuring transparency, honesty, and accountability 
                in all our interactions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace cutting-edge legal strategies and medical insights to deliver solutions that are both 
                effective and forward-thinking.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the human element behind every case, approaching each client with empathy, respect, 
                and genuine care for their wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Legacy
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded with a vision to unite two powerful disciplines — medicine
                  and law — our team has successfully represented hundreds of
                  clients across complex medico-legal issues.
                </p>
                <p>
                  We take pride in building lasting relationships with healthcare professionals, 
                  medical institutions, and patients who trust us to navigate the intricate 
                  intersection of healthcare and legal regulations.
                </p>
                <p>
                  Our legacy is built on unwavering commitment to integrity, innovation, and 
                  measurable impact in the healthcare legal landscape.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="assets/the_team.jpg" className="rounded-md "/>
                <p className="text-teal-700 font-semibold text-lg mt-5">Building Healthcare Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Healthcare Partners" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-[#17ada1] mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Our diverse team of legal experts, medical professionals, and consultants brings together 
            decades of combined experience to serve you better.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Dr. Sarah Johnson", role: "Medical Director & Co-Founder", specialty: "Medical Law Expert" },
              { name: "James Mitchell", role: "Senior Legal Counsel", specialty: "Healthcare Litigation" },
              { name: "Dr. Emily Chen", role: "Compliance Advisor", specialty: "Regulatory Affairs" }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#17ada1] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mb-6 mx-auto flex items-center justify-center shadow-lg">
                  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#17ada1] font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Choose MediLaw?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our unique combination of medical and legal knowledge ensures comprehensive understanding 
                    of your healthcare legal needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand the urgency of healthcare legal matters and respond promptly to protect 
                    your interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Centered Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every client receives personalized attention and tailored solutions designed for their 
                    specific situation.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our success rate and client testimonials speak to our commitment to achieving the best 
                    possible outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#17ada1] to-[#138f85] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-10 leading-relaxed text-white/95">
            Whether you're seeking expert medico-legal guidance or looking to
            collaborate, we're here to help every step of the way.
          </p>
          <button className="bg-white text-[#17ada1] font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center text-sm">
            Contact Us Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
