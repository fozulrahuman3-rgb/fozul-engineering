export default function WhyFaheem({ SectionHeading, items = [] }) {
  return (
    <section className="section" id="why-choose">
      <SectionHeading
        eyebrow="Why Choose FAHEEM"
        title="Business value delivered through engineering quality leadership"
        subtitle="Our consultancy model is built to reduce risk, strengthen compliance, and improve project confidence."
      />

      <div className="why-choose-grid">
        {items.map((item, index) => (
          <article key={`${item.value}-${index}`} className="why-choose-card">
            <h3>{item.value}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
