import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[#17ada1] text-white px-6 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          About <span className="text-white">Med N Law</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl">
          Bridging the gap between medical expertise and legal excellence to
          create a better, safer, and more transparent world.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#17ada1] mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At Med N Law, we are committed to empowering clients through
            knowledge, compassion, and professionalism. Our mission is to bring
            clarity and fairness to cases where medicine and law intersect —
            ensuring every voice is heard and every right is protected.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold text-[#17ada1] mb-4">
              Our Legacy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to unite two powerful disciplines — medicine
              and law — our team has successfully represented hundreds of
              clients across complex medico-legal issues. We take pride in
              integrity, innovation, and impact.
            </p>
          </div>
          <div className="w-full h-72 bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-lg">
            {/* Placeholder Image */}
            Image / Illustration Here
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#17ada1] mb-12">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold text-[#17ada1]">
                  Member Name
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Position / Specialization
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#17ada1] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether you’re seeking expert medico-legal guidance or looking to
          collaborate, we’re here to help every step of the way.
        </p>
        <button className="bg-white text-[#17ada1] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
