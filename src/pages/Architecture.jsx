import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';
import DiagramBlock from '../components/common/DiagramBlock.jsx';

function Architecture() {
  const architectureLayers = [
    {
      label: 'Client layer',
      detail:
        'Web clients perform encryption/decryption and render the chat UI.',
      badge: 'Browser / Mobile Web',
    },
    {
      label: 'Real-time gateway',
      detail:
        'Manages WebSocket connections, routing encrypted messages between clients.',
      badge: 'Gateway',
    },
    {
      label: 'Application services',
      detail:
        'Handles authentication, room management, profiles, and access control.',
      badge: 'API',
    },
    {
      label: 'Storage layer',
      detail:
        'Securely stores encrypted message payloads and minimal metadata.',
      badge: 'Database',
    },
  ];

  const activityFlow = [
    {
      label: 'User authentication',
      detail: 'User logs in and client fetches necessary keys or certificates.',
    },
    {
      label: 'Key establishment',
      detail:
        'Clients perform key exchange to derive shared session keys for chats.',
    },
    {
      label: 'Message sending',
      detail:
        'Sender encrypts message locally and sends ciphertext through gateway.',
    },
    {
      label: 'Delivery & acknowledgement',
      detail:
        'Server routes ciphertext; recipients decrypt locally and update UI.',
    },
  ];

  return (
    <SectionContainer id="architecture">
      <SectionHeader
        eyebrow="Architecture"
        title="System architecture & core flows"
        subtitle="High-level overview of how SecureChat is structured and how messages flow through the system."
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <DiagramBlock
          title="High-level system architecture"
          description="Layers representing clients, real-time gateway, application services, and storage."
          layers={architectureLayers}
        />
        <DiagramBlock
          title="Secure message activity flow"
          description="Key steps from authentication through encryption, sending, delivery, and decryption."
          layers={activityFlow}
        />
      </div>
    </SectionContainer>
  );
}

export default Architecture;
