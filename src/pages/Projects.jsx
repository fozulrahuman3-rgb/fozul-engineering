import { motion } from 'motion/react'

const projectCategories = [
  {
    title: 'Mining & Industrial Facilities',
    description: 'Quality governance for industrial developments, mining facilities, and containment-related civil scopes.',
    icon: 'quality',
  },
  {
    title: 'Oil & Gas Infrastructure',
    description: 'Construction QA/QC, technical verification, and compliance-focused inspection delivery.',
    icon: 'inspection',
  },
  {
    title: 'Petrochemical Construction',
    description: 'Quality systems support for technically demanding petrochemical civil and structural packages.',
    icon: 'qa',
  },
  {
    title: 'HDPE & Geosynthetics',
    description: 'Installation quality, welding verification, and field testing discipline for long-term performance.',
    icon: 'liner',
  },
  {
    title: 'Earthworks',
    description: 'Earthwork control, compaction verification, and site quality monitoring for critical foundations.',
    icon: 'earthwork',
  },
  {
    title: 'Concrete & Structural Engineering',
    description: 'Concrete quality assurance, structural inspection, and durability-focused engineering support.',
    icon: 'repair',
  },
  {
    title: 'Infrastructure Development',
    description: 'Roads, drainage, utilities, and public infrastructure quality support with standards alignment.',
    icon: 'plan',
  },
  {
    title: 'Construction Quality Management',
    description: 'Project-wide quality planning, tracking, documentation, and compliance readiness programs.',
    icon: 'checklist',
  },
]

const engineeringExpertise = [
  { title: 'QA/QC Consultancy', icon: 'quality' },
  { title: 'Third-Party Inspection', icon: 'inspection' },
  { title: 'Material Compliance', icon: 'document' },
  { title: 'Inspection & Test Plans', icon: 'checklist' },
  { title: 'Technical Documentation', icon: 'document' },
  { title: 'Root Cause Analysis', icon: 'analysis' },
  { title: 'Vendor Surveillance', icon: 'globe' },
  { title: 'Construction Quality Management', icon: 'qa' },
]

const caseStudies = [
  {
    title: 'Mining Containment Quality Program',
    challenge: 'Quality consistency across large-area installation interfaces and contractor teams.',
    approach: 'Applied stage-wise inspection hold points, welding checks, and traceable records for each handover segment.',
    lesson: 'Early coordination between engineering, QA/QC, and execution teams reduces rework and supports approval confidence.',
  },
  {
    title: 'Oil & Gas Civil Works Compliance Review',
    challenge: 'Multiple civil scopes required unified documentation quality and inspection alignment.',
    approach: 'Established a consolidated documentation workflow with clear inspection checklists and corrective action tracking.',
    lesson: 'Structured documentation control improves audit readiness and accelerates stakeholder sign-off.',
  },
  {
    title: 'Concrete Defect Investigation Support',
    challenge: 'Recurring field defects required technical diagnosis and corrective planning.',
    approach: 'Performed root cause review, testing correlation, and targeted corrective method recommendations.',
    lesson: 'Data-supported defect analysis leads to more durable corrective outcomes and lower repeat issues.',
  },
]

const projectDeliveryApproach = [
  {
    title: 'Define Quality Requirements',
    description: 'Project standards, specifications, and quality objectives are translated into actionable controls.',
  },
  {
    title: 'Plan Inspection and Controls',
    description: 'Inspection and Test Plans, checklists, and hold points are aligned with project milestones.',
  },
  {
    title: 'Execute and Verify',
    description: 'Site inspections, material verification, and quality reviews are coordinated for traceable compliance.',
  },
  {
    title: 'Improve and Close Out',
    description: 'Findings are analyzed, corrective actions tracked, and lessons captured to strengthen delivery quality.',
  },
]

const sectionAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Projects({ SectionHeading, PremiumIcon }) {
  return (
    <main>
      <motion.section
        className="hero-section"
        id="projects-hero"
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
          <p className="eyebrow">Projects & Case Studies</p>
          <h1>Engineering Delivery Across Critical Project Environments</h1>
          <p className="hero-subtitle">
            FAHEEM Engineering Consultancy delivers quality-led engineering support across industrial sectors through disciplined QA/QC systems, inspection governance, and technical advisory.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="projects-overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Projects Overview"
          title="Engineering Capabilities Presented Through Project Categories"
          subtitle="This page highlights project-focused technical expertise and quality management capabilities for international clients, EPC contractors, industrial companies, and government organizations."
        />
        <div className="profile-intro-grid">
          <article className="profile-intro-card">
            <h3>Engineering Focus</h3>
            <p>Project support is centered on quality performance, compliance confidence, and constructability outcomes.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Quality Governance</h3>
            <p>Inspection control, documentation discipline, and standards-based delivery are embedded in execution.</p>
          </article>
          <article className="profile-intro-card">
            <h3>Client Value</h3>
            <p>Technical decisions are aligned with risk reduction, delivery reliability, and measurable project performance.</p>
          </article>
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="project-categories"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Project Categories"
          title="Sectors and Project Types Supported"
          subtitle="Representative engineering categories where FAHEEM provides quality-led consultancy and project support."
        />

        <div className="featured-projects-grid">
          {projectCategories.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              className="featured-project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.015 }}
            >
              <div className="service-icon">
                <PremiumIcon name={item.icon} />
              </div>
              <div className="project-body">
                <h3>{item.title}</h3>
                <p className="project-description">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="engineering-expertise"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Engineering Expertise"
          title="Core Project Quality Expertise"
          subtitle="Technical capabilities applied across project life cycles to strengthen quality and compliance outcomes."
        />

        <div className="service-grid">
          {engineeringExpertise.map((item, index) => (
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
        id="selected-case-studies"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Selected Case Studies"
          title="Concise Engineering Examples and Lessons Learned"
          subtitle="Examples are presented in a professional format focused on technical process and quality outcomes without confidential detail."
        />

        <div className="why-choose-grid">
          {caseStudies.map((item, index) => (
            <article key={`${item.title}-${index}`} className="why-choose-card">
              <h3>{item.title}</h3>
              <p><strong>Challenge:</strong> {item.challenge}</p>
              <p><strong>Approach:</strong> {item.approach}</p>
              <p><strong>Lesson Learned:</strong> {item.lesson}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="project-delivery-approach"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Project Delivery Approach"
          title="Structured Delivery from Planning to Closeout"
          subtitle="A practical, quality-centered delivery approach that supports dependable project outcomes."
        />

        <div className="profile-intro-grid">
          {projectDeliveryApproach.map((item, index) => (
            <article key={`${item.title}-${index}`} className="profile-intro-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="projects-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Call To Action"
          title="Ready to discuss your engineering project?"
          subtitle="Connect with FAHEEM Engineering Consultancy to align quality strategy, inspection governance, and project delivery objectives."
        />

        <div className="contact-card">
          <div className="contact-card-main">
            <p className="section-label">Project Engagement</p>
            <h3>Start your project-focused engineering discussion</h3>
            <p>Engage FAHEEM for quality-led engineering consultancy support tailored to your project category and delivery priorities.</p>
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
