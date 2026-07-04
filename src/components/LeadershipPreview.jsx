export default function LeadershipPreview({ SectionHeading, profilePhoto, leadership }) {
  return (
    <section className="section" id="leadership-preview">
      <SectionHeading
        eyebrow="Leadership Preview"
        title="Leadership grounded in technical depth and quality discipline"
        subtitle="Founder leadership supports FAHEEM's company-first mission to deliver dependable engineering consultancy outcomes."
      />

      <div className="contact-card">
        <div className="contact-card-main">
          <p className="section-label">Founder</p>
          <h3>{leadership.founder}</h3>
          <p>{leadership.role} | {leadership.experience}</p>
          <p>{leadership.summary}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={leadership.leadershipHref}>Meet Our Leadership</a>
            <a className="button button-secondary" href={leadership.profileHref} target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
        </div>

        <div className="photo-frame">
          <img src={profilePhoto} alt="Leadership portrait" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
