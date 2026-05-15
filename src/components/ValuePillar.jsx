function ValuePillar({ title, description, icon: Icon }) {
  return (
    <article className="border-t-2 border-aurora-gold bg-aurora-panel/60 p-7">
      <Icon className="mb-8 text-aurora-paleGold" size={30} strokeWidth={1.8} />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-7 text-aurora-mist/72">{description}</p>
    </article>
  );
}

export default ValuePillar;
