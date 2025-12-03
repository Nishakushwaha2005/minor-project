import SectionContainer from '../components/common/SectionContainer.jsx';
import SectionHeader from '../components/common/SectionHeader.jsx';

const categories = [
  {
    name: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
  },
  {
    name: 'Backend (example)',
    items: ['Node.js', 'WebSocket / Socket.io or equivalent', 'RESTful APIs'],
  },
  {
    name: 'Security & Cryptography',
    items: [
      'End-to-end encryption algorithms (e.g., AES, RSA, or modern equivalents)',
      'Secure random key generation',
      'Hashing for integrity verification',
    ],
  },
  {
    name: 'Database & Storage (example)',
    items: ['Relational or NoSQL database', 'Encrypted-at-rest storage'],
  },
  {
    name: 'DevOps & Tools',
    items: ['Git / GitHub', 'CI/CD pipelines', 'Deployment platform (e.g., Vercel/Netlify)'],
  },
];

function ToolsTech() {
  return (
    <SectionContainer id="tools-tech">
      <SectionHeader
        eyebrow="Tools & Technologies"
        title="Stack used to build SecureChat"
        subtitle="A modern, web-based stack for fast iteration and robust security."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
          >
            <h2 className="mb-2 text-sm font-semibold text-slate-100">
              {cat.name}
            </h2>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {cat.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ToolsTech;
