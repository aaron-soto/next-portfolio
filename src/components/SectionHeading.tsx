const SectionHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-white/70 text-sm mb-8">{description}</p>
    </>
  )
};


export default SectionHeading;