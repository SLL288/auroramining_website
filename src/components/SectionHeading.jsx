function SectionHeading({ eyebrow, title, intro, tone = "dark" }) {
  const isLight = tone === "light";

  return (
    <div>
      <p
        className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
          isLight ? "text-aurora-navy" : "text-aurora-paleGold"
        }`}
      >
        <span className="h-px w-10 bg-aurora-gold" />
        {eyebrow}
      </p>
      <h2
        className={`max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          isLight ? "text-aurora-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-3xl text-lg leading-8 ${isLight ? "text-aurora-slate" : "text-aurora-mist/75"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
