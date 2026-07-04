import { leadership } from '../data/leadership'

export default function Leadership({ SectionHeading, PremiumIcon, profilePhoto }) {
  return (
    <main>
      <section className="hero-section" id="leadership-hero">
        <div className="hero-background">
          <div className="particle particle-a" />
          <div className="particle particle-b" />
          <div className="particle particle-c" />
          <div className="particle particle-d" />
          <div className="hero-grid" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">FAHEEM Leadership</p>
          <h1>Leadership Built on Engineering Excellence</h1>
          <p className="hero-subtitle">
            FAHEEM Engineering Consultancy is led by experienced engineering professionals committed to quality, integrity, technical excellence, and long-term client success.
          </p>
        </div>

        <div className="hero-panel">
          <div className="photo-frame">
            <img src={profilePhoto} alt="Professional portrait of Mohamed Haneefa Fozul Rahuman" loading="eager" />
          </div>
          <div className="hero-profile-card">
            <h3>{leadership.founder}</h3>
            <p>{leadership.role} | {leadership.experience}</p>
          </div>
        </div>
      </section>

      <section className="section" id="leadership-introduction">
        <SectionHeading
          eyebrow="Leadership Introduction"
          title="Company Leadership with Client-Focused Engineering Governance"
          subtitle="FAHEEM's leadership model aligns technical quality, compliance confidence, and long-term delivery value for international clients and project stakeholders."
        />
        <div className="profile-intro-grid">
          <article className="profile-intro-card">
            <h3>Engineering Quality Leadership</h3>
            <p>Leadership decisions are grounded in quality-first execution, inspection discipline, and reliable technical governance.</p>
          </article>
          <article className="profile-intro-card">
            <h3>International Delivery Mindset</h3>
            <p>The consultancy approach supports owner, EPC, contractor, and regulatory interfaces across complex project environments.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Technical Integrity</h3>
            <p>Engineering recommendations are made with transparency, standards alignment, and defensible technical judgment.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Long-Term Client Confidence</h3>
            <p>Leadership priorities focus on risk reduction, compliance assurance, and sustained project performance outcomes.</p>
          </article>
        </div>
      </section>

      <section className="section" id="founder-profile">
        <SectionHeading
          eyebrow="Founder Profile"
          title={leadership.founder}
          subtitle={`${leadership.role} | ${leadership.experience}`}
        />

        <div className="about-grid">
          <article className="info-card">
            <div className="info-icon"><PremiumIcon name="quality" /></div>
            <div>
              <h3>Professional Biography</h3>
              <p>{leadership.biography}</p>
            </div>
          </article>
          <article className="info-card">
            <div className="info-icon"><PremiumIcon name="globe" /></div>
            <div>
              <h3>Industries Served</h3>
              <div className="chip-list">
                {leadership.industriesServed.map((industry, index) => (
                  <span key={`${industry}-${index}`}>{industry}</span>
                ))}
              </div>
            </div>
          </article>
        </div>

        <div className="services-subsection">
          <h3 className="section-subtitle">Engineering Expertise</h3>
          <div className="why-choose-grid">
            {leadership.engineeringExpertise.map((item, index) => (
              <article key={`${item}-${index}`} className="why-choose-card">
                <h3>{item}</h3>
                <p>Applied with practical project control, standards compliance, and quality-driven execution support.</p>
              </article>
            ))}
          </div>
        </div>

        <div className="services-subsection">
          <h3 className="section-subtitle">Core Competencies</h3>
          <div className="chip-list">
            {leadership.coreCompetencies.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>

        <div className="services-subsection">
          <h3 className="section-subtitle">Professional Achievements</h3>
          <ul className="service-highlights service-scope-list">
            {leadership.achievements.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="vision-mission">
        <SectionHeading
          eyebrow="Vision & Mission"
          title="Leadership Direction for Sustainable Engineering Value"
          subtitle="FAHEEM leadership is committed to quality-driven growth and responsible project outcomes."
        />
        <div className="about-grid">
          <article className="info-card">
            <div className="info-icon"><PremiumIcon name="globe" /></div>
            <div>
              <h3>Vision</h3>
              <p>{leadership.vision}</p>
            </div>
          </article>
          <article className="info-card">
            <div className="info-icon"><PremiumIcon name="plan" /></div>
            <div>
              <h3>Mission</h3>
              <p>{leadership.mission}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="core-values">
        <SectionHeading
          eyebrow="Core Values"
          title="Values that Shape Leadership Decisions"
          subtitle="Professional values guide technical decisions, team culture, and client partnership quality."
        />
        <div className="chip-list">
          {leadership.coreValues.map((value, index) => (
            <span key={`${value}-${index}`}>{value}</span>
          ))}
        </div>
      </section>

      <section className="section" id="leadership-philosophy">
        <SectionHeading
          eyebrow="Leadership Philosophy"
          title="Engineering Leadership with Technical Integrity"
          subtitle="FAHEEM's leadership philosophy supports measurable quality outcomes and dependable project confidence."
        />
        <div className="why-choose-grid">
          {leadership.philosophy.map((item, index) => (
            <article key={`${item}-${index}`} className="why-choose-card">
              <h3>{item}</h3>
              <p>Integrated into project planning, delivery controls, and continuous performance improvement.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="future-leadership-team">
        <SectionHeading
          eyebrow="Future Leadership Team"
          title="Planned Leadership Expansion"
          subtitle="Future appointments are presented for organizational direction and do not represent confirmed active appointments unless stated."
        />
        <div className="featured-projects-grid">
          {leadership.futureLeadership.map((item, index) => (
            <article key={`${item.title}-${index}`} className="featured-project-card">
              <div className="service-icon"><PremiumIcon name="qa" /></div>
              <div className="project-body">
                <h3>{item.title}</h3>
                <p className="project-description">{item.name}</p>
                <p className="project-description">Status: {item.status}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="leadership-cta">
        <SectionHeading
          eyebrow="Call To Action"
          title="Ready to work with experienced engineering professionals?"
          subtitle="Connect with FAHEEM leadership to discuss quality-focused engineering consultancy for your project portfolio."
        />
        <div className="contact-card">
          <div className="contact-card-main">
            <p className="section-label">Leadership Contact</p>
            <h3>Start your leadership-level technical discussion</h3>
            <p>Engage with FAHEEM for quality strategy, compliance advisory, and professional engineering support.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
              <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Schedule Consultation</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
