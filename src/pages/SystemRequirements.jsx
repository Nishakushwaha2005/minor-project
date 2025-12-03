import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

function SystemRequirements() {
  return (
    <SectionContainer id="system-requirements">
      <SectionHeader
        eyebrow="System Requirements"
        title="System requirements and assumptions"
        subtitle="Hardware, software, and network conditions required to run SecureChat."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Client-side requirements
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Modern web browser with JavaScript enabled.</li>
            <li>• Stable internet connection with low to moderate latency.</li>
            <li>• Support for WebSocket or equivalent real-time protocol.</li>
            <li>• Basic CPU and memory to handle encryption on the client.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-slate-100">
            Server & infrastructure requirements
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Application server runtime (e.g., Node.js) with SSL/TLS.</li>
            <li>• Database server for user accounts and metadata.</li>
            <li>• Message broker or real-time socket server.</li>
            <li>• Monitoring, logging, and backup strategy.</li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}

export default SystemRequirements;
