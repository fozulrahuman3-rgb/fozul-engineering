export default function CTA({ SectionHeading }) {
  return (
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="Call To Action"
        title="Ready to strengthen quality performance on your next project?"
        subtitle="Contact FAHEEM Engineering Consultancy to request consultancy support, discuss your project, or start a technical review."
      />

      <div className="contact-card">
        <div className="contact-card-main">
          <p className="section-label">Contact Us</p>
          <h3>Let's discuss your project requirements</h3>
          <p>
            Engage FAHEEM for quality consultancy, inspection strategy, and engineering advisory tailored to your scope, risk profile, and delivery priorities.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
            <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultancy</a>
          </div>
        </div>
      </div>
    </section>
  )
}
