export default function IndustriesPreview({ SectionHeading, PremiumIcon, industries = [] }) {
  return (
    <section className="section" id="industries-we-serve">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Sector-focused consultancy for complex engineering environments"
        subtitle="We support owners, EPC teams, and contractors across demanding industrial and infrastructure sectors."
      />

      <div className="industries-grid">
        {industries.map((item, index) => (
          <article key={`${item.name}-${index}`} className="industry-card">
            <div className="service-icon">
              <PremiumIcon name={item.icon} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
