function SectionContainer({ id, children }) {
  return (
    <section id={id} className="py-12 sm:py-16 md:py-20">
      <div className="container-responsive">{children}</div>
    </section>
  );
}

export default SectionContainer;
