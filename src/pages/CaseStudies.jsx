import { motion } from 'motion/react'

const caseStudies = [
  {
    id: '01', sector: 'Oil & Gas', location: 'Saudi Arabia',
    title: 'Emergency Concrete Repair of a Seawater Sump During a Critical Shutdown',
    overview: 'A planned shutdown inspection identified extensive concrete deterioration in a seawater return sump. An active Cathodic Protection system made the originally specified epoxy repair mortar unsuitable under the site conditions.',
    scope: 'Cementitious repair mortar was specified in place of epoxy. Controlled halogen light curing, curing compound, and protective coating were incorporated within the shutdown schedule.',
    challenges: 'The replacement material had to remain compatible with the active Cathodic Protection system while meeting the available shutdown and reinstatement window.',
    activities: 'Repair constraints and CP system configuration were assessed. Material options were evaluated for compatibility and early strength development, then deteriorated concrete was removed to sound substrate before controlled repair and curing activities.',
    standards: 'Formal standards were not specified in the available project record. The work was governed by project repair requirements, active Cathodic Protection constraints, and the shutdown schedule.',
    outcome: 'The repair was completed within the shutdown period and the sump returned to service on schedule without compromising the Cathodic Protection system.',
    lessons: 'Repair material selection must account for all active protection systems before a specification is issued. Controlled accelerated curing can support time-critical repair work when properly managed.',
    methods: ['Cementitious Repair Mortar', 'Halogen Light Curing', 'Cathodic Protection', 'Protective Coating'],
  },
  {
    id: '02', sector: 'Oil & Gas', location: 'Saudi Arabia',
    title: 'CFRP Strengthening of a Corroded Seawater Return Sump Wall',
    overview: 'Continuous seawater overflow caused concrete delamination, reinforcement exposure, spalling, and chloride attack in a retaining wall that remained operational throughout the repair.',
    scope: 'Unsound concrete was removed, exposed reinforcement was grit blasted, the CP ribbon was protected, and the repaired wall received full CFRP strengthening.',
    challenges: 'Structural rehabilitation was required without a shutdown. The active Cathodic Protection ribbon needed to be protected throughout the repair sequence.',
    activities: 'The damage extent and CP ribbon routing were mapped. Controlled breaking, reinforcement preparation, CP protection, cementitious repair, curing, and CFRP installation were managed as staged quality hold points.',
    standards: 'Formal standards were not specified in the available project record. The repair followed the documented operational, Cathodic Protection, and structural-rehabilitation requirements.',
    outcome: 'The wall’s structural capacity was restored without interrupting operations, with added confinement and durability support for the marine exposure environment.',
    lessons: 'CFRP can be effective where live structures cannot be taken out of service. Protection of active corrosion-control systems must be a documented hold point.',
    methods: ['CFRP Strengthening', 'Cementitious Repair Mortar', 'Grit Blasting', 'Structural Rehabilitation'],
  },
  {
    id: '03', sector: 'Oil & Gas', location: 'Saudi Arabia',
    title: 'Epoxy Grouting Repair of a Critical Reciprocating Pump Foundation',
    overview: 'Repeated cracking and uplift of epoxy grout beneath a critical reciprocating pump foundation required investigation after previous repairs had not resolved the failure cycle.',
    scope: 'Damaged grout was removed, grout geometry was corrected, perimeter expansion joints were installed, and new epoxy grout was placed to the revised geometry.',
    challenges: 'The project needed to identify the engineering mechanism behind recurring failures rather than repeat a symptom-based repair approach.',
    activities: 'Grout geometry, material properties, and dynamic pump loading were reviewed. The width-to-depth ratio was identified as the key factor, followed by controlled removal, reshaping, joint installation, and void-free regrouting.',
    standards: 'Formal standards were not specified in the available project record. The work used the documented dynamic-load analysis and project-specific foundation repair requirements.',
    outcome: 'No further grout cracking was observed after implementation, and the foundation remained stable during normal reciprocating pump operation.',
    lessons: 'Recurring repair failures require root-cause resolution. Grout geometry is a critical design parameter for dynamically loaded equipment foundations.',
    methods: ['Epoxy Grouting', 'Foundation Geometry Correction', 'Expansion Joints', 'Dynamic Load Analysis'],
  },
  {
    id: '04', sector: 'Mining', location: 'Ras Al Khair, Saudi Arabia',
    title: 'HDPE Liner Quality Control – Gypsum Stack Expansion Phase IV',
    overview: 'A large-scale HDPE liner installation required comprehensive QA/QC oversight to support seam integrity, installation quality, and environmental compliance.',
    scope: 'The QA/QC programme covered subgrade acceptance, liner deployment, seam welding, non-destructive weld testing, anchor trench inspection, defect repair, and final acceptance documentation.',
    challenges: 'The installation scale, site conditions, and containment function required consistent controls across a large area without compromising installation productivity.',
    activities: 'Contractor qualifications, welding-equipment calibration, installer competency, and welding procedures were reviewed. Inspection and test plans were applied across installation stages, including NDT and repair re-testing.',
    standards: 'Project specification and relevant standards were applied. The available record specifically cites GRI requirements for HDPE weld-test acceptance criteria.',
    outcome: 'The liner installation was completed to specification with weld testing requirements met and environmental compliance documentation completed for sign-off.',
    lessons: 'Contractor and welding-procedure qualification are essential at the outset. Consistent NDT across seams is central to demonstrating liner integrity.',
    methods: ['HDPE Geomembrane', 'Thermal Fusion Welding', 'Vacuum Box Testing', 'Air Pressure Testing'],
  },
  {
    id: '05', sector: 'Mining', location: 'Ras Al Khair, Saudi Arabia',
    title: 'Earthwork Compaction Optimisation and Field Density Testing',
    overview: 'SM (Silty Sand) earthworks were prepared as a liner-foundation subgrade. Rapid surface drying before Field Density Testing created a risk of unrepresentative density results.',
    scope: 'A controlled field procedure was introduced to restore representative moisture conditions immediately before testing and to protect approved surfaces with the next earthwork layer.',
    challenges: 'The high-sand, non-plastic material lost surface moisture rapidly under ambient conditions, affecting standard FDT results without reflecting actual compaction achieved.',
    activities: 'Soil classification, Proctor testing, field observations, moisture control, FDT timing, surface protection, and where required, scarification, re-moistening, recompaction, and re-testing were managed under a revised field procedure.',
    standards: 'The available record identifies ASTM D698 Standard Proctor compaction and project density, moisture, layer-thickness, and installation-tolerance requirements.',
    outcome: 'The revised procedure achieved the required density and moisture compliance while eliminating false failures caused by surface drying and maintaining construction productivity.',
    lessons: 'Material-specific behaviour must inform testing procedures. Low-plasticity SM materials require adapted FDT protocols to achieve representative results.',
    methods: ['Field Density Testing', 'Nuclear Density Gauge', 'Proctor Compaction Testing', 'SM Soil Classification'],
  },
  {
    id: '06', sector: 'Mining', location: 'Ras Al Khair, Saudi Arabia',
    title: 'Geosynthetic Layer Inspection for an HDPE Liner System',
    overview: 'A multi-layer system of bi-planar geocomposite, tri-planar geocomposite, and geotextile required independent inspection for material conformance, installation sequence, overlap, and anchorage.',
    scope: 'A layer-by-layer inspection programme introduced documented hold points, delivery-certificate checks, installation verification, defect rework, and re-inspection before each following layer could proceed.',
    challenges: 'Multiple product types and installation stages had to be coordinated with construction progress while maintaining complete documentation across a large installation area.',
    activities: 'Material submittals, delivery certificates, installation sequence, orientation, overlap dimensions, anchor trenches, non-conformance corrections, and hold-point approvals were verified and recorded.',
    standards: 'The available record cites GRI overlap requirements and Saudi Building Code compliance, alongside project-specific installation tolerances and anchorage requirements.',
    outcome: 'The layers were installed in the correct sequence with documented conformance, overlap, and anchorage verification for regulatory and client acceptance.',
    lessons: 'Multi-layer geosynthetic systems need inspection hold points at every layer. Orientation and overlap must be verified in real time before subsequent layers are installed.',
    methods: ['Bi-planar Geocomposite', 'Tri-planar Geocomposite', 'Geotextile Inspection', 'Hold Point Inspection'],
  },
]

function SectionIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.2 16.7 19 6.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default function CaseStudies() {
  return (
    <main className="case-studies-page">
      <section className="case-studies-hero">
        <div>
          <p className="case-studies-eyebrow">FAHEEM / CASE STUDIES</p>
          <h1>Engineering insight applied to critical project challenges.</h1>
          <p>Selected project records demonstrating structured QA/QC, technical investigation, field verification, and practical engineering decision-making.</p>
        </div>
        <div className="case-studies-hero-index" aria-hidden="true"><span>Selected</span><strong>06</strong><small>Project records</small></div>
      </section>

      <section className="case-studies-introduction">
        <p>Case-study approach</p>
        <h2>Technical outcomes, presented with clarity and project context.</h2>
        <span>Project photographs are not currently published. Visual placeholders are used to protect confidentiality while documentation is prepared.</span>
      </section>

      <section className="case-studies-list" aria-label="Selected engineering case studies">
        {caseStudies.map((study, index) => (
          <motion.article className="case-study-card" key={study.id} initial={false} whileHover={{ y: -4 }} transition={{ duration: 0.22, delay: index * 0.025 }}>
            <div className="case-study-visual-placeholder" aria-label="Project imagery placeholder">
              <span>Project imagery</span><strong>{study.id}</strong><small>Confidential / coming soon</small>
            </div>
            <div className="case-study-content">
              <div className="case-study-meta"><span>{study.id}</span><p>{study.sector}</p><em>{study.location}</em></div>
              <h2>{study.title}</h2>
              <div className="case-study-summary-grid">
                <div><h3>Project Overview</h3><p>{study.overview}</p></div>
                <div><h3>Scope</h3><p>{study.scope}</p></div>
              </div>
              <details className="case-study-details">
                <summary>View project method and lessons <span>+</span></summary>
                <div className="case-study-details-grid">
                  <div><h3>Challenges</h3><p>{study.challenges}</p></div>
                  <div><h3>QA/QC Activities</h3><p>{study.activities}</p></div>
                  <div><h3>Standards</h3><p>{study.standards}</p></div>
                  <div><h3>Outcome</h3><p>{study.outcome}</p></div>
                  <div className="case-study-lessons"><h3>Lessons Learned</h3><p>{study.lessons}</p></div>
                </div>
              </details>
              <div className="case-study-methods">
                {study.methods.map((method) => <span key={method}><SectionIcon />{method}</span>)}
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="case-studies-cta">
        <p>Project discussion</p>
        <h2>Need a quality-led response to a complex engineering challenge?</h2>
        <div><a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a><a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultation</a></div>
      </section>
    </main>
  )
}
