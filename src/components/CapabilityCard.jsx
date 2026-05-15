function CapabilityCard({ title, description, icon: Icon }) {
  return (
    <article className="group min-w-0 border border-[#3f647b] bg-[#0d2a3f] p-6 shadow-panel transition duration-200 hover:-translate-y-1 hover:border-aurora-gold">
      <div className="mb-8 flex h-12 w-12 items-center justify-center border border-aurora-gold/55 bg-aurora-gold/15 text-aurora-paleGold">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-[#d7e4e5]">{description}</p>
    </article>
  );
}

export default CapabilityCard;
