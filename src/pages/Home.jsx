import React from 'react';
import IntroSection from '../components/home/IntroSection'
import ExpertiseSection from '../components/home/ExpertiseSection';
import LegacySection from '../components/home/LegacySection';
import PeopleSection from '../components/home/PeopleSection'
import ThoughtLeadershipSection from '../components/home/ThoughtLeadershipSection'
import ContactForm from '../components/home/Contact';
function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1ed]">
  <section className="bg-[#17ada1] min-h-screen">
    <IntroSection />
  </section>
  <section className="bg-white min-h-screen">
    <ExpertiseSection />
  </section>
  <section className="bg-[#f5f1ed] min-h-screen">
    <LegacySection />
  </section>
  <section className="bg-white min-h-screen">
    <PeopleSection />
  </section>
  <section className="bg-[#17ada1] min-h-screen">
    <ThoughtLeadershipSection />
  </section>
  <section className="bg-white min-h-screen">
    <ContactForm />
  </section>
</div>
  );
}

export default Home;