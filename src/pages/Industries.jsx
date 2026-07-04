import { motion } from 'motion/react'

const industriesPageCards = [
  {
    title: 'Mining',
    description:
      'Quality management for mining facilities, gypsum stacks, earthworks, and industrial infrastructure.',
    icon: 'liner',
  },
  {
    title: 'Oil & Gas',
    description:
      'Construction QA/QC, inspections, technical documentation, and compliance support.',
    icon: 'inspection',
  },
  {
    title: 'Petrochemical',
    description:
      'Quality systems, inspection planning, material verification, and project quality management.',
    icon: 'qa',
  },
  {
    title: 'Infrastructure',
    description:
      'Roads, drainage, utilities, civil works, industrial developments, and public infrastructure.',
    icon: 'earthwork',
  },
  {
    title: 'Water',
    description:
      'Reservoirs, treatment facilities, pipelines, HDPE lining, and environmental engineering support.',
    icon: 'waterproof',
  },
  {
    title: 'Industrial Plants',
    description:
      'Manufacturing facilities, warehouses, processing plants, foundations, and industrial construction.',
    icon: 'quality',
  },
  {
    title: 'Energy',
    description:
      'Power generation facilities, substations, renewable energy support, and industrial utilities.',
    icon: 'repair',
  },
  {
    title: 'Commercial Construction',
    description:
      'Buildings, mixed-use developments, institutional facilities, and quality assurance services.',
    icon: 'plan',
  },
]

const engineeringCapabilities = [
  { title: 'QA/QC Consultancy', icon: 'quality' },
  { title: 'Third Party Inspection', icon: 'inspection' },
  { title: 'Construction Quality Management', icon: 'qa' },
  { title: 'Technical Documentation', icon: 'document' },
  { title: 'Material Compliance', icon: 'checklist' },
  { title: 'Root Cause Analysis', icon: 'analysis' },
  { title: 'Engineering Advisory', icon: 'plan' },
]

const whyClientsChoose = [
  {
    value: '25+ Years Engineering Experience',
    description: 'Depth of technical leadership across quality-critical projects and engineering environments.',
  },
  {
    value: 'International Project Exposure',
    description: 'Delivery support across multi-sector projects with diverse stakeholder interfaces.',
  },
  {
    value: 'Standards-Based Delivery',
    description: 'Execution aligned with recognized standards, specifications, and auditable compliance systems.',
  },
  {
    value: 'Quality-Focused Engineering',
    description: 'Engineering recommendations centered on reliability, constructability, and quality performance.',
  },
  {
    value: 'Risk Reduction',
    description: 'Early quality intervention and governance that reduces defects, delays, and rework exposure.',
  },
  {
    value: 'Client-Centered Consultancy',
    description: 'Practical technical support aligned to client objectives, timelines, and delivery priorities.',
  },
]

const sectionAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Industries({ SectionHeading, PremiumIcon }) {
  return (
    <main>
      <motion.section
        className="hero-section"
        id="industries-hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="hero-background">
          <div className="particle particle-a" />
          <div className="particle particle-b" />
          <div className="particle particle-c" />
          <div className="particle particle-d" />
          <div className="hero-grid" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Industries</p>
          <h1>Engineering Solutions Across Critical Industries</h1>
          <p className="hero-subtitle">
            FAHEEM Engineering Consultancy supports industrial, infrastructure, mining, energy, and commercial projects with professional QA/QC, engineering consultancy, inspection, and quality management services.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="industries-introduction"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Introduction"
          title="Sector-Focused Consultancy for High-Importance Projects"
          subtitle="FAHEEM supports clients with quality-led engineering governance across complex industrial and infrastructure delivery environments."
        />

        <div className="profile-intro-grid">
          <article className="profile-intro-card">
            <h3>Technical Confidence</h3>
            <p>Industry-specific quality support designed to improve reliability, compliance, and engineering outcomes.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Execution Discipline</h3>
            <p>Structured QA/QC systems, inspection planning, and documentation workflows tailored to project demands.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Client Value</h3>
            <p>Practical advisory and quality controls that reduce risk and support long-term project performance.</p>
          </article>
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="industries-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Industries Grid"
          title="Industries Served"
          subtitle="Premium engineering consultancy support across critical sectors and project contexts."
        />

        <div className="industries-grid">
          {industriesPageCards.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="industry-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="service-icon">
                <PremiumIcon name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="industries-capabilities"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Engineering Capabilities"
          title="Capabilities Delivered Across Industries"
          subtitle="Integrated technical capabilities that support quality performance from planning to handover."
        />

        <div className="service-grid">
          {engineeringCapabilities.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="service-header">
                <div className="service-index">0{index + 1}</div>
                <div className="service-icon">
                  <PremiumIcon name={item.icon} />
                </div>
              </div>
              <h3>{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="industries-why-choose"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Why Clients Choose FAHEEM"
          title="Trusted Engineering Consultancy for Demanding Sectors"
          subtitle="Clients choose FAHEEM for quality-focused delivery, standards alignment, and dependable technical support."
        />

        <div className="why-choose-grid">
          {whyClientsChoose.map((item, index) => (
            <article key={`${item.value}-${index}`} className="why-choose-card">
              <h3>{item.value}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="industries-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Call To Action"
          title="Need engineering support for your industry?"
          subtitle="Connect with FAHEEM Engineering Consultancy for project-aligned quality and engineering support."
        />

        <div className="contact-card">
          <div className="contact-card-main">
            <p className="section-label">Industry Support</p>
            <h3>Ready to discuss your industry requirements?</h3>
            <p>Engage with FAHEEM for standards-based, quality-focused engineering consultancy support.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
              <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultation</a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
