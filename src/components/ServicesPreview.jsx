export default function ServicesPreview({ SectionHeading, PremiumIcon, services = [] }) {
  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Premium Engineering Consultancy Services"
        subtitle="World-class technical consultancy for international EPC companies, industrial clients, government organizations, and recruiters."
      />

      <div className="service-grid">
        {services.map((item, index) => (
          <article key={`${item.title}-${index}`} className="service-card">
            <div className="service-header">
              <div className="service-index">0{index + 1}</div>
              <div className="service-icon">
                <PremiumIcon name={item.icon} />
              </div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="service-highlights service-scope-list">
              {item.items.map((point, pointIndex) => (
                <li key={`${item.title}-${pointIndex}`}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
