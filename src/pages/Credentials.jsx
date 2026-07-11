import { motion } from 'motion/react'

const professionalCredentials = [
  { type: 'Academic qualification', title: 'B.E. Civil Engineering', text: 'Civil engineering academic background supporting technical quality, construction, and infrastructure work.' },
  { type: 'Academic qualification', title: 'Diploma in Civil Engineering', text: 'Foundational technical training supporting construction inspection and civil delivery practice.' },
  { type: 'Professional credential', title: 'Fireproofing Inspector – CFI Level II', text: 'Specialist fireproofing inspection capability for project and quality-control environments.' },
  { type: 'Professional practice', title: 'QA/QC Civil Engineering Leadership', text: 'Senior quality leadership across inspection, documentation, compliance, and execution interfaces.' },
  { type: 'Professional experience', title: '25+ Years of Industry Experience', text: 'Long-term civil QA/QC, construction quality, inspection, and engineering leadership exposure.' },
  { type: 'Regional exposure', title: 'Saudi Arabia and GCC Project Exposure', text: 'Experience supporting quality-critical industrial and infrastructure project environments.' },
]

const competencies = [
  'QA/QC Management', 'Civil Inspection', 'Earthworks and Compaction', 'Concrete Works', 'HDPE Geomembrane', 'Geotextiles and Geocomposites', 'HDPE Pipes', 'Structural Steel', 'Fireproofing', 'Coating', 'Infrastructure', 'Root Cause Analysis', 'NCR / CAPA Management', 'ITP / MAR / RFI / PQP / Method Statements', 'Vendor Surveillance', 'Factory Inspection', 'Quality Audits', 'Project Quality Dashboards',
]

const standards = [
  'ISO 9001 principles', 'ASTM', 'ACI', 'AASHTO', 'Saudi Building Code', 'Project specifications', 'International QA/QC practices', 'Client specifications, including Ma’aden, SABIC, Saudi Aramco, and other major industrial standards where applicable to project experience',
]

const industries = ['Mining', 'Oil & Gas', 'Petrochemical', 'Industrial Facilities', 'Infrastructure', 'Power', 'Water', 'Commercial Construction']

const evidence = ['Degree Certificates', 'Professional Certificates', 'Training Certificates', 'Employer Experience Letters', 'Project References', 'Memberships', 'Company Registration', 'ISO Certification', 'Capability Statement']

function CredentialIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.5 26 9v10.5L16 25 6 19.5V9l10-5.5Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="m11 15 3.2 3.2L21.5 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Credentials() {
  return (
    <main className="credentials-page">
      <section className="credentials-hero">
        <div className="credentials-hero-copy">
          <p className="credentials-eyebrow">FAHEEM / CREDENTIALS</p>
          <h1>Credentials Built on Experience, Standards and Technical Leadership</h1>
          <p>FAHEEM Engineering Consultancy brings together more than 25 years of civil QA/QC, construction quality, inspection, compliance, and engineering leadership across major industrial and infrastructure environments.</p>
        </div>
        <div className="credentials-hero-mark" aria-hidden="true">
          <CredentialIcon />
          <span>Experience<br />Standards<br />Leadership</span>
        </div>
      </section>

      <section className="credentials-section" aria-labelledby="professional-credentials-title">
        <div className="credentials-heading">
          <p>Professional credentials</p>
          <h2 id="professional-credentials-title">Professional background presented with precision.</h2>
          <span>These entries describe qualifications and professional experience. Supporting documents are being organized for progressive verification.</span>
        </div>
        <div className="credentials-professional-grid">
          {professionalCredentials.map((credential, index) => (
            <motion.article className="credentials-professional-card" key={credential.title} initial={false} whileHover={{ y: -5 }} transition={{ duration: 0.22, delay: index * 0.03 }}>
              <div className="credentials-card-icon"><CredentialIcon /></div>
              <p>{credential.type}</p>
              <h3>{credential.title}</h3>
              <span>{credential.text}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="credentials-section credentials-competency-section" aria-labelledby="technical-competencies-title">
        <div className="credentials-heading">
          <p>Core technical competencies</p>
          <h2 id="technical-competencies-title">Applied knowledge for quality-critical project delivery.</h2>
        </div>
        <div className="credentials-competency-grid">
          {competencies.map((competency, index) => (
            <motion.div className="credentials-competency" key={competency} initial={false} whileHover={{ y: -3 }} transition={{ duration: 0.2, delay: index * 0.02 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{competency}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="credentials-section" aria-labelledby="standards-title">
        <div className="credentials-heading">
          <p>Codes & standards familiarity</p>
          <h2 id="standards-title">Working Knowledge / Project Application</h2>
          <span>Standards are presented as working knowledge and project application unless supported by a separate, verified formal certification.</span>
        </div>
        <div className="credentials-standards-list">
          {standards.map((standard) => <div key={standard}><CredentialIcon /><span>{standard}</span></div>)}
        </div>
      </section>

      <section className="credentials-section" aria-labelledby="industry-experience-title">
        <div className="credentials-heading">
          <p>Industry experience</p>
          <h2 id="industry-experience-title">Perspective across demanding built environments.</h2>
        </div>
        <div className="credentials-industry-grid">
          {industries.map((industry, index) => (
            <motion.article className="credentials-industry-card" key={industry} initial={false} whileHover={{ y: -4 }} transition={{ duration: 0.22, delay: index * 0.03 }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{industry}</h3>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="credentials-evidence" aria-labelledby="evidence-title">
        <div className="credentials-heading">
          <p>Evidence & verification</p>
          <h2 id="evidence-title">Documentation that will grow with the consultancy.</h2>
          <span>Verified documents will be added progressively.</span>
        </div>
        <div className="credentials-evidence-grid">
          {evidence.map((item) => <div className="credentials-evidence-item" key={item}><CredentialIcon /><span>{item}</span><em>Pending upload</em></div>)}
        </div>
      </section>

      <section className="credentials-downloads" aria-labelledby="downloads-title">
        <div>
          <p>Downloads</p>
          <h2 id="downloads-title">Access approved professional information.</h2>
          <span>Document availability is clearly indicated to avoid incomplete or unverified downloads.</span>
        </div>
        <div className="credentials-download-actions">
          <button className="button button-secondary" type="button" disabled>Professional Credentials <small>Coming Soon</small></button>
          <a className="button button-primary" href="/Mohamed_Haneefa_Fozul_Rahuman_CV.docx" target="_blank" rel="noreferrer">Download Founder CV <small>DOCX</small></a>
          <a className="button button-secondary" href="/capability-statement.svg" target="_blank" rel="noreferrer">Download Capability Statement</a>
        </div>
      </section>

      <section className="credentials-cta">
        <p>Project confidence</p>
        <h2>Need verified engineering expertise for your project?</h2>
        <div>
          <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
          <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultation</a>
        </div>
      </section>
    </main>
  )
}
