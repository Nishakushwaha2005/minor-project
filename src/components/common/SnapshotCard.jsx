function SnapshotCard({ title, caption }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="mb-3 h-40 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950/60" />
      <h3 className="mb-1 text-sm font-semibold text-slate-100">{title}</h3>
      <p className="text-xs text-slate-300">{caption}</p>
    </div>
  );
}

export default SnapshotCard;
