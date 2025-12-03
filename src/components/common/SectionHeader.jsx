function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-400">
          {eyebrow}
        </p>
      )}
      <h1 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-slate-300 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
