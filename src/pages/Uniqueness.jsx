import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Uniqueness() {
  return (
    <SectionContainer id="uniqueness">
      <SectionHeader
        eyebrow="Uniqueness"
        title="What makes SecureChat different?"
        subtitle="SecureChat is designed as a learning project and a practical platform, with transparency and extensibility from day one."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Design principles
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Security is a default, not an option users must enable.</li>
            <li>
              • Architecture and security assumptions are explicitly documented.
            </li>
            <li>
              • The system is modular: transport, storage, and cryptography are
              loosely coupled.
            </li>
            <li>
              • UX is kept intentionally simple to highlight core concepts.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Educational & practical value
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Demonstrates how end-to-end encryption and real-time messaging
              can coexist.
            </li>
            <li>
              • Suitable as a reference implementation for academic projects.
            </li>
            <li>
              • Clear separation of concerns for easier reasoning and testing.
            </li>
            <li>
              • Designed to be extendable with advanced features in future work.
            </li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Uniqueness;
