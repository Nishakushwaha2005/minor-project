function FeaturesGrid({ features }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
        >
          <h3 className="mb-2 text-sm font-semibold text-slate-100">
            {feature.title}
          </h3>
          {feature.subtitle && (
            <p className="mb-2 text-xs font-medium text-primary-300">
              {feature.subtitle}
            </p>
          )}
          <p className="mb-3 text-xs text-slate-300">{feature.description}</p>
          {feature.points && (
            <ul className="mt-auto space-y-1 text-xs text-slate-300">
              {feature.points.map((p) => (
                <li key={p} className="flex items-start gap-1.5">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-primary-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default FeaturesGrid;
