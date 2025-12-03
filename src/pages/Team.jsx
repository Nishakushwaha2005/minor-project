import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

const teamMembers = [
  {
    name: 'Member 1',
    role: 'Cryptography & Security',
    contributions: [
      'Designed the end-to-end encryption model and key lifecycle.',
      'Implemented secure key generation, storage, and rotation.',
      'Documented security assumptions and threat model.',
    ],
  },
  {
    name: 'Member 2',
    role: 'Backend & Real-time Messaging',
    contributions: [
      'Implemented real-time messaging, presence, and delivery guarantees.',
      'Designed API endpoints and message persistence strategy.',
      'Optimized server performance and scalability.',
    ],
  },
  {
    name: 'Member 3',
    role: 'Frontend & UX',
    contributions: [
      'Designed the user interface and component library.',
      'Implemented chat views, room management, and settings.',
      'Conducted usability testing and UI refinements.',
    ],
  },
  {
    name: 'Member 4',
    role: 'DevOps & Quality Assurance',
    contributions: [
      'Set up CI/CD, deployment pipelines, and monitoring.',
      'Managed test plans, automation, and defect tracking.',
      'Prepared documentation and final project report.',
    ],
  },
];

function Team() {
  return (
    <SectionContainer id="team">
      <SectionHeader
        eyebrow="Team"
        title="Team roles and contributions"
        subtitle="SecureChat was developed collaboratively, with each member focusing on a core aspect of the system."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <h2 className="text-sm font-semibold text-slate-100">
              {member.name}
            </h2>
            <p className="mb-2 text-xs font-medium text-primary-300">
              {member.role}
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {member.contributions.map((c) => (
                <li key={c}>• {c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Team;
