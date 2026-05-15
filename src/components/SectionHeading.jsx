function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div>
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-aurora-paleGold">
        <span className="h-px w-10 bg-aurora-gold" />
        {eyebrow}
      </p>
      <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-6 max-w-3xl text-lg leading-8 text-aurora-mist/75">{intro}</p>}
    </div>
  );
}

export default SectionHeading;
