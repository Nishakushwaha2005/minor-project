import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import FeaturesGrid from '../components/common/FeaturesGrid.jsx';

const features = [
  {
    title: 'End-to-end encryption',
    subtitle: 'Message-level security',
    description:
      'All messages are encrypted on the client and decrypted only on the recipient’s devices.',
    points: [
      'Unique keys per user and per conversation.',
      'Forward secrecy with key rotation.',
      'Encrypted attachments and metadata minimization.',
    ],
  },
  {
    title: 'Real-time messaging',
    subtitle: 'Low-latency delivery',
    description:
      'Bi-directional communication using websockets or similar real-time transport.',
    points: [
      'Online / offline presence indicators.',
      'Typing indicators and read receipts.',
      'Graceful reconnection and message queueing.',
    ],
  },
  {
    title: 'Secure group chats',
    subtitle: 'Team collaboration',
    description:
      'Encrypted group rooms for teams, departments, and project-based communication.',
    points: [
      'Role-based permissions within rooms.',
      'Invitation and join policies.',
      'Server never sees plaintext content.',
    ],
  },
  {
    title: 'Device & session management',
    subtitle: 'Multi-device safety',
    description:
      'Users can review and revoke active sessions and devices linked to their account.',
    points: [
      'Session-level keys and fingerprints.',
      'Suspicious login notifications.',
      'Manual verification between peers.',
    ],
  },
  {
    title: 'Audit-ready logging',
    subtitle: 'Privacy-preserving insights',
    description:
      'Logs events (not message bodies) to support compliance and troubleshooting.',
    points: [
      'Event-based logging for joins, leaves, and configuration changes.',
      'No storage of decrypted message content.',
      'Configurable retention policies.',
    ],
  },
  {
    title: 'Extensible architecture',
    subtitle: 'Future integrations',
    description:
      'Clean separation of concerns enables integration with identity providers and external tools.',
    points: [
      'API-first design for external clients.',
      'Modular service boundaries.',
      'Prepared for future voice/video features.',
    ],
  },
];

function Features() {
  return (
    <SectionContainer id="features">
      <SectionHeader
        eyebrow="Features"
        title="Core features of SecureChat"
        subtitle="A focused set of capabilities that make secure, real-time communication practical."
      />
      <FeaturesGrid features={features} />
    </SectionContainer>
  );
}

export default Features;
