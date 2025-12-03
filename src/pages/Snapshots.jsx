import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import SnapshotCard from '../components/common/SnapshotCard.jsx';

function Snapshots() {
  return (
    <SectionContainer id="snapshots">
      <SectionHeader
        eyebrow="Snapshots"
        title="User interface snapshots"
        subtitle="Placeholder cards for key UI screens from the SecureChat implementation."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <SnapshotCard
          title="Login & onboarding"
          caption="Screen for secure login and new user onboarding."
        />
        <SnapshotCard
          title="Chat room view"
          caption="Real-time encrypted group conversation interface."
        />
        <SnapshotCard
          title="Settings & security"
          caption="Panel for device management, keys, and security preferences."
        />
      </div>
      <p className="mt-4 text-xs text-slate-400">
        Replace these placeholders with real screenshots from the running
        SecureChat application captured in your project.
      </p>
    </SectionContainer>
  );
}

export default Snapshots;
