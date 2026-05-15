function CapabilityCard({ title, description, icon: Icon }) {
  return (
    <article className="group border border-aurora-line bg-aurora-panel/70 p-6 shadow-panel transition duration-200 hover:-translate-y-1 hover:border-aurora-gold/60">
      <div className="mb-8 flex h-12 w-12 items-center justify-center border border-aurora-gold/35 bg-aurora-gold/10 text-aurora-paleGold">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-aurora-mist/72">{description}</p>
    </article>
  );
}

export default CapabilityCard;
