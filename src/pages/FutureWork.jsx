import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

function FutureWork() {
  return (
    <SectionContainer id="future-work">
      <SectionHeader
        eyebrow="Future Work"
        title="Future enhancements and research"
        subtitle="Potential directions to extend SecureChat beyond the current scope."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Technical enhancements
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• End-to-end encrypted voice and video calling.</li>
            <li>• Offline messaging with secure local caching.</li>
            <li>• Support for federation or multi-tenant hosting.</li>
            <li>• Formal verification of cryptographic protocols.</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Usability & research
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Extended usability studies across different user groups.</li>
            <li>• Accessibility audits and improvements.</li>
            <li>• Integration with organizational identity providers.</li>
            <li>• Rich analytics with strong privacy guarantees.</li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

export default FutureWork;
