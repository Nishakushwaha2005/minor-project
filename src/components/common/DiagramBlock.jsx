function DiagramBlock({ title, description, layers }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
          {description && (
            <p className="mt-1 text-xs text-slate-300">{description}</p>
          )}
        </div>
        <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-400">
          Diagram placeholder
        </span>
      </div>

      <div className="space-y-3">
        {layers.map((layer, index) => (
          <div
            key={layer.label}
            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600/20 text-[11px] font-semibold text-primary-300">
              {index + 1}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-slate-100">
                {layer.label}
              </p>
              {layer.detail && (
                <p className="text-[11px] text-slate-400">{layer.detail}</p>
              )}
            </div>
            {layer.badge && (
              <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">
                {layer.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] text-slate-500">
        Use this block to visually explain architecture components and how data
        flows between them.
      </p>
    </div>
  );
}

export default DiagramBlock;
