import { motion } from 'motion/react'

const pillars = [
  {
    number: '01',
    title: 'Engineering Integrity',
    text: 'Clear technical judgement, disciplined verification, and recommendations grounded in project reality.',
  },
  {
    number: '02',
    title: 'Quality Leadership',
    text: 'Structured quality governance that helps teams protect compliance, performance, and delivery confidence.',
  },
  {
    number: '03',
    title: 'Practical Delivery',
    text: 'Consultancy support shaped around constructability, site conditions, and the priorities of each engagement.',
  },
]

const capabilities = [
  'QA/QC consultancy and quality systems',
  'Construction quality management',
  'Third-party inspection and material verification',
  'Civil engineering advisory and technical reviews',
  'Geosynthetics and HDPE liner QA/QC',
  'Root cause analysis and technical documentation',
]

const sectors = ['Oil & Gas', 'Mining', 'Industrial Plants', 'Infrastructure', 'Water', 'Energy']

const values = ['Quality', 'Integrity', 'Safety', 'Professionalism', 'Client Partnership']

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function CompanyProfile({ profilePhoto }) {
  return (
    <main className="company-profile">
      <motion.header className="company-profile-hero" initial="hidden" animate="visible" variants={reveal}>
        <div className="company-profile-orbit company-profile-orbit-one" aria-hidden="true" />
        <div className="company-profile-orbit company-profile-orbit-two" aria-hidden="true" />
        <div className="company-profile-hero-copy">
          <p className="company-profile-kicker">FAHEEM / COMPANY PROFILE</p>
          <h1>Engineering assurance for projects that cannot compromise.</h1>
          <p>
            FAHEEM Engineering Consultancy provides quality-led civil engineering support for complex industrial and infrastructure environments across Saudi Arabia and the GCC region.
          </p>
          <div className="company-profile-hero-actions">
            <a className="button button-primary" href="#company-capabilities">Explore capabilities</a>
            <a className="button button-secondary" href="#company-contact">Start a conversation</a>
          </div>
        </div>

        <div className="company-profile-hero-panel">
          <div className="company-profile-portrait-frame">
            <img src={profilePhoto} alt="Mohamed Haneefa Fozul Rahuman, Founder of FAHEEM Engineering Consultancy" />
          </div>
          <div className="company-profile-principal-card">
            <span>Founded & led by</span>
            <strong>Mohamed Haneefa Fozul Rahuman</strong>
            <p>Senior QA/QC Civil Engineer</p>
          </div>
        </div>
      </motion.header>

      <motion.section className="company-profile-section company-profile-introduction" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div className="company-profile-section-heading">
          <p>Our purpose</p>
          <h2>Independent expertise that supports confident decisions.</h2>
        </div>
        <div className="company-profile-introduction-copy">
          <p>
            We work alongside owners, EPC teams, contractors, and operators to establish effective quality controls, resolve technical issues, and build dependable project records from planning through handover.
          </p>
          <p>
            Our approach combines senior engineering experience with practical field awareness—helping clients reduce uncertainty while maintaining the standards their assets demand.
          </p>
        </div>
      </motion.section>

      <motion.section className="company-profile-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div className="company-profile-section-heading">
          <p>How we work</p>
          <h2>Built for rigorous, responsive project delivery.</h2>
        </div>
        <div className="company-profile-pillars">
          {pillars.map((pillar, index) => (
            <motion.article className="company-profile-pillar" key={pillar.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <span>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="company-capabilities" className="company-profile-section company-profile-capabilities" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div className="company-profile-section-heading">
          <p>Core capabilities</p>
          <h2>Technical depth across the quality lifecycle.</h2>
        </div>
        <div className="company-profile-capability-layout">
          <div className="company-profile-statement">
            <span className="company-profile-statement-mark">“</span>
            <p>Quality is not simply a control point. It is a disciplined way of protecting assets, programmes, and client confidence.</p>
          </div>
          <ul className="company-profile-capability-list">
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </ul>
        </div>
      </motion.section>

      <motion.section className="company-profile-section company-profile-sectors" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div className="company-profile-section-heading">
          <p>Where we contribute</p>
          <h2>Sector-aware support for critical assets.</h2>
        </div>
        <div className="company-profile-sector-grid">
          {sectors.map((sector, index) => (
            <motion.div className="company-profile-sector" key={sector} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {sector}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className="company-profile-section company-profile-values" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
        <div className="company-profile-section-heading">
          <p>Our commitments</p>
          <h2>Professional standards in every engagement.</h2>
        </div>
        <div className="company-profile-value-list">
          {values.map((value) => <span key={value}>{value}</span>)}
        </div>
      </motion.section>

      <motion.section id="company-contact" className="company-profile-contact" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal}>
        <p>FAHEEM Engineering Consultancy</p>
        <h2>Let’s establish a stronger quality foundation for your next project.</h2>
        <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact FAHEEM</a>
      </motion.section>
    </main>
  )
}
