const highlights = [
  {
    title: 'End-to-end encryption',
    body: 'Messages are encrypted on the sender’s device and decrypted only on the recipient’s device.',
  },
  {
    title: 'Real-time experience',
    body: 'Low-latency messaging with presence indicators, read receipts, and typing status.',
  },
  {
    title: 'Role-based access',
    body: 'Fine-grained control over who can create rooms, invite users, and access sensitive channels.',
  },
];

function Highlights() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
        >
          <h3 className="mb-2 text-sm font-semibold text-slate-100">
            {item.title}
          </h3>
          <p className="text-xs text-slate-300">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Highlights;
