import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Conclusion() {
  return (
    <SectionContainer id="conclusion">
      <SectionHeader
        eyebrow="Conclusion"
        title="Conclusion"
        subtitle="Summary of what SecureChat achieves and how it meets the project objectives."
      />
      <div className="mt-6 space-y-3 text-xs text-slate-300">
        <p>
          SecureChat demonstrates that it is possible to combine end-to-end
          encryption with responsive, real-time messaging in a web-based
          environment.
        </p>
        <p>
          The project covers the complete lifecycle from requirements analysis
          and architecture design to implementation, testing, and deployment
          considerations.
        </p>
        <p>
          While built as an academic and exploratory platform, SecureChat
          introduces patterns and design choices that can be adapted to
          production-ready systems with further hardening and scalability work.
        </p>
      </div>
    </SectionContainer>
  );
}

export default Conclusion;
