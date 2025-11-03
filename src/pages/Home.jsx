import React from "react";
import IntroSection from "../components/home/IntroSection";
import ExpertiseSection from "../components/home/ExpertiseSection";
import PeopleSection from "../components/home/PeopleSection";
import ThoughtLeadershipSection from "../components/home/ThoughtLeadershipSection";
import ContactForm from "../components/home/Contact";

function Home() {
  return (
    <div className="bg-[#f5f1ed]">
      {/* Intro Section */}
      <section className="bg-[#17ada1]">
        <IntroSection />
      </section>

      {/* Expertise Section */}
      <section className="bg-teal-200">
        <ExpertiseSection />
      </section>

      {/* People Section */}
      <section className="bg-teal-200">
        <PeopleSection />
      </section>

      {/* Thought Leadership Section */}
      <section className="bg-teal-200">
        <ThoughtLeadershipSection />
      </section>

      {/* Contact Section */}
      <section className="bg-teal-200">
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
