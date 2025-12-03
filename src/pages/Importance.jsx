import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Importance() {
  return (
    <SectionContainer id="importance">
      <SectionHeader
        eyebrow="Problem Statement"
        title="Why SecureChat matters"
        subtitle="Modern communication is fast, but not always private. SecureChat addresses the growing need for confidential, real-time collaboration."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Current challenges
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Sensitive conversations often pass through centralized servers
              that can be breached, logged, or subpoenaed.
            </li>
            <li>
              • Many messaging tools prioritize convenience over strong
              cryptographic guarantees.
            </li>
            <li>
              • Organizations struggle to balance security, compliance, and
              usability for distributed teams.
            </li>
            <li>
              • Users lack transparency into how and where their data is stored
              and processed.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Objectives of SecureChat
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Provide end-to-end encrypted messaging without sacrificing
              real-time performance.
            </li>
            <li>
              • Offer clear, auditable security properties suitable for academic
              and enterprise review.
            </li>
            <li>
              • Deliver an interface that is intuitive for non-technical users.
            </li>
            <li>
              • Support future extension to voice, video, and external system
              integrations.
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Importance;
