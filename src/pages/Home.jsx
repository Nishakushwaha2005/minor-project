import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import Hero from '../components/home/Hero.jsx';
import Highlights from '../components/home/Highlights.jsx';

function Home() {
  return (
    <SectionContainer id="home">
      <SectionHeader
        eyebrow="Introduction"
        title="SecureChat — Encrypted Real-Time Messaging Platform"
        subtitle="A modern, secure messaging solution that combines end-to-end encryption with responsive real-time communication for teams and individuals."
      />
      <div className="mt-10">
        <Hero />
        <Highlights />
      </div>
    </SectionContainer>
  );
}

export default Home;
