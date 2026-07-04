export default function CompanyIntro({ SectionHeading, items = [] }) {
  return (
    <section className="section" id="about">
      <SectionHeading
        eyebrow="Company Introduction"
        title="FAHEEM Engineering Consultancy"
        subtitle="We are a premium engineering consultancy focused on engineering excellence, quality leadership, international standards, and client confidence."
      />

      <div className="profile-intro-grid">
        {items.map((item, index) => (
          <article key={`${item.title}-${index}`} className="profile-intro-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
