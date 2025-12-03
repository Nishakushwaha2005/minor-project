const defaultColumns = ['Capability', 'SecureChat', 'Traditional Chat App'];
const defaultRows = [
  {
    capability: 'End-to-end encryption by default',
    securechat: 'Enabled for all private and group chats',
    traditional: 'Optional or limited to private chats',
  },
  {
    capability: 'Key management',
    securechat: 'Per-device keys with secure rotation',
    traditional: 'Centralized or opaque key storage',
  },
  {
    capability: 'Real-time delivery',
    securechat: 'Sub-150 ms in typical conditions',
    traditional: 'Variable; can degrade under load',
  },
  {
    capability: 'Auditability & logging',
    securechat: 'Privacy-preserving event logs',
    traditional: 'Often logs full payloads on server',
  },
];

function ComparisonTable({ columns = defaultColumns, rows = defaultRows }) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-xs text-slate-200">
          <thead className="bg-slate-900/90">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.capability}
                className="border-t border-slate-800/80 odd:bg-slate-900/60"
              >
                <td className="px-4 py-3 text-slate-100">{row.capability}</td>
                <td className="px-4 py-3 text-primary-200">{row.securechat}</td>
                <td className="px-4 py-3 text-slate-300">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComparisonTable;
