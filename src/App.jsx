import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import profilePhoto from './assets/profile-photo.jpg'
import engineeringPlant from './assets/engineering-plant.svg'
import siteInspection from './assets/site-inspection.svg'
import projectOperations from './assets/project-operations.svg'
import feLogo from './assets/fe-logo.svg'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Knowledge', href: '#knowledge-center' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects' },
  { value: '15+', label: 'Companies' },
  { value: '4', label: 'Countries' },
  { value: '100%', label: 'Client Satisfaction' },
]

const aboutHighlights = [
  '25+ years of civil QA/QC leadership',
  'Extensive Saudi Arabia project delivery',
  'QA/QC management across oil & gas, petrochemical, industrial, and infrastructure works',
  'Specialist in earthworks, concrete, HDPE liner, geotextile, and civil infrastructure quality systems',
]

const consultancyServices = [
  {
    title: 'Civil QA/QC Consultancy',
    description: 'Independent quality strategy and field support for civil works, ensuring compliance, traceability, and construction confidence.',
    icon: 'quality',
  },
  {
    title: 'Root Cause Failure Analysis',
    description: 'Systematic engineering review of defects, failures, and recurring issues to isolate the real causes and support corrective action.',
    icon: 'analysis',
  },
  {
    title: 'Concrete Crack Investigation',
    description: 'Detailed assessment of crack mechanisms, movement, and structural implications to guide durable repair decisions.',
    icon: 'crack',
  },
  {
    title: 'Structural Condition Assessment',
    description: 'Technical condition reviews for existing assets and concrete structures, with practical recommendations for performance improvement.',
    icon: 'repair',
  },
  {
    title: 'Waterproofing Inspection',
    description: 'Inspection-led review of waterproofing systems, leakage risks, and system performance for long-term reliability.',
    icon: 'waterproof',
  },
  {
    title: 'Rebar Corrosion Assessment',
    description: 'Evaluation of corrosion risk, reinforcement degradation, and protective measures to preserve structural durability.',
    icon: 'corrosion',
  },
  {
    title: 'Concrete Repair Recommendations',
    description: 'Practical repair planning and material guidance for spalling, delamination, and deterioration issues.',
    icon: 'repair',
  },
  {
    title: 'Industrial QA/QC Audits',
    description: 'Structured audits and quality reviews for industrial environments, focused on compliance, control, and operational excellence.',
    icon: 'inspection',
  },
  {
    title: 'HDPE Liner Quality Consultancy',
    description: 'Specialist support for liner system quality, installation assurance, inspection planning, and defect prevention.',
    icon: 'liner',
  },
  {
    title: 'Geotextile & Geomembrane Inspection',
    description: 'Field and technical inspection support for geosynthetic installations, integrity, and performance verification.',
    icon: 'geotextile',
  },
  {
    title: 'Construction Quality Management',
    description: 'Practical quality leadership for site execution, documentation control, and project delivery oversight.',
    icon: 'qa',
  },
  {
    title: 'Project Documentation Review',
    description: 'Review of quality plans, method statements, ITPs, and compliance documentation for project readiness.',
    icon: 'document',
  },
]

const engineeringExpertise = [
  { title: 'Concrete Technology', description: 'Durability, mix design oversight, and performance-based concrete quality strategy.' },
  { title: 'Repair Materials', description: 'Selection and review of repair mortars, grouts, polymer systems, and protective products.' },
  { title: 'Epoxy Systems', description: 'Application guidance and quality assurance for bonding, anchoring, and structural repair systems.' },
  { title: 'Grouting', description: 'Injection, void filling, and stabilization strategies for structural and civil works.' },
  { title: 'Protective Coatings', description: 'Coating system review, surface preparation, and inspection planning for long-term protection.' },
  { title: 'Fireproofing', description: 'Technical support for fire protection systems and inspection readiness on industrial assets.' },
  { title: 'HDPE Liner', description: 'Civil and geosynthetic quality oversight for containment, barrier, and environmental systems.' },
  { title: 'Geotextiles', description: 'Material compatibility, installation quality, and performance verification for geotechnical works.' },
  { title: 'Earthworks', description: 'Compaction, subgrade, and earthwork quality leadership for infrastructure and industrial projects.' },
  { title: 'Structural Concrete', description: 'Inspection and quality control for structural concrete works from placement through cure and handover.' },
]

const knowledgeCenterItems = [
  { title: 'Concrete Crack Investigation', description: 'Diagnostic insight into crack mechanisms, movement, and structural implications for actionable repair planning.', icon: 'crack' },
  { title: 'Root Cause Analysis', description: 'Structured investigation of defects and failures to identify the underlying technical drivers.', icon: 'analysis' },
  { title: 'Rebar Corrosion', description: 'Assessment of corrosion risk, penetration pathways, and reinforcement durability concerns.', icon: 'corrosion' },
  { title: 'Concrete Repair Methods', description: 'Practical repair approaches for spalling, delamination, and material deterioration.', icon: 'repair' },
  { title: 'Waterproofing Failures', description: 'Investigation of leakage, membrane failure, and moisture ingress to support durable remediation.', icon: 'waterproof' },
  { title: 'Epoxy Injection', description: 'Injection-based repair strategies for crack sealing, tensile recovery, and structural continuity.', icon: 'epoxy' },
  { title: 'Grouting Solutions', description: 'Advanced void filling, stabilization, and support methods for civil and structural applications.', icon: 'grout' },
  { title: 'HDPE Liner Engineering', description: 'Engineering guidance for liner system quality, containment performance, and installation assurance.', icon: 'liner' },
  { title: 'Geotextile Systems', description: 'Material selection and quality control support for separation, filtration, and reinforcement functions.', icon: 'geotextile' },
  { title: 'Earthwork Quality Control', description: 'Best-practice oversight for compaction, subgrade, and earthwork execution standards.', icon: 'earthwork' },
  { title: 'Industrial QA/QC Best Practices', description: 'Quality leadership methods to strengthen compliance, traceability, and execution discipline.', icon: 'qa' },
  { title: 'Engineering Inspection Checklists', description: 'Field-ready inspection frameworks for efficiency, consistency, and audit readiness.', icon: 'checklist' },
]

const whyChooseItems = [
  { value: '25+ Years Experience', description: 'A long-standing record of engineering and quality leadership across complex industrial environments.' },
  { value: 'Industrial Projects', description: 'Practical experience supporting major oil, gas, petrochemical, and infrastructure programs.' },
  { value: 'Saudi Arabia Experience', description: 'Deep regional delivery knowledge aligned with local execution, compliance, and site expectations.' },
  { value: 'Engineering Solutions', description: 'A balance of technical reasoning, inspection discipline, and repair strategy development.' },
  { value: 'Quality Leadership', description: 'Structured systems and client-focused leadership that protect performance, safety, and value.' },
]

const caseStudies = [
  {
    id: 1,
    title: 'Seawater Sump Concrete Repair & Durability Restoration',
    industry: 'Industrial & Infrastructure',
    problem: 'Seawater exposure causing accelerated concrete deterioration, rebar corrosion, and spalling in marine sump structure compromising structural integrity.',
    rootCause: 'Inadequate concrete cover, high water-cement ratio concrete, and insufficient protective coating system allowed chloride ingress and carbonation.',
    investigation: 'Half-cell potential mapping, concrete core analysis, petrographic examination, chloride profile testing via drilling, and visual crack pattern documentation.',
    solution: 'Concrete surface preparation, application of cathodic protection system with sacrificial anodes, epoxy coating repair, and protective topcoat application.',
    result: 'Arrested corrosion progression, 15+ year extended service life, improved structural safety, regulatory compliance certification, and maintenance cost reduction.',
    technologies: ['Half-Cell Potential Testing', 'Petrographic Analysis', 'Cathodic Protection', 'Protective Coatings', 'Corrosion Mitigation'],
    background: 'A critical seawater intake sump structure showed signs of accelerated deterioration from 12+ years of direct marine exposure. Chloride-rich seawater ingress had initiated aggressive rebar corrosion and concrete spalling. Independent assessment was required to evaluate structural remaining life and recommend durable remediation.',
    challenge: 'Harsh marine environment with continuous saltwater exposure, structural load continuity requirements, and need for long-term corrosion arrest without major reconstruction.',
    technicalAssessment: 'Electrochemical corrosion rate determination, chloride diffusion modeling using Fick equations, concrete permeability assessment, and rebar degradation trajectory analysis.',
    calculations: 'Corrosion current density calculation (mA/m²), chloride ion diffusion coefficient determination, cathodic protection current requirement estimation, and service life projection modeling.',
    repairMethod: 'Controlled substrate preparation, impressed current cathodic protection installation with reference electrode monitoring, surface preparation to removal of loose concrete, epoxy primer application with corrosion inhibitors, and protective topcoat.',
    lessonsLearned: 'Electrochemical monitoring provides quantitative assessment for marine concrete repair planning. Early intervention with cathodic protection systems delivers superior ROI compared to reactive patching in high-chloride environments.',
  },
  {
    id: 2,
    title: 'CFRP Strengthening of Corroded Concrete Wall & Structural Reinforcement',
    industry: 'Infrastructure & Rehabilitation',
    problem: 'Corroded reinforced concrete wall showing flexural distress, reduced load capacity, and increased deflection risk from long-term exposure and inadequate protective systems.',
    rootCause: 'Rebar corrosion from carbonation and chloride penetration resulted in loss of reinforcement cross-section and loss of composite action between steel and concrete.',
    investigation: 'Ground-penetrating radar, ultrasonic pulse velocity measurement, half-cell potential mapping, concrete core sampling, and structural load testing to determine capacity loss.',
    solution: 'Surface preparation, installation of carbon fiber reinforced polymer (CFRP) sheets bonded with high-modulus epoxy, protective edge sealing, and performance verification testing.',
    result: 'Structural load capacity restored to original design specification, eliminated safety risk, provided 40+ year extended service life, and avoided costly reconstruction.',
    technologies: ['CFRP Composite', 'Epoxy Bonding Systems', 'Load Testing', 'Non-Destructive Testing', 'Structural Strengthening'],
    background: 'An aging reinforced concrete wall exhibited signs of structural inadequacy due to progressive reinforcement corrosion. Load testing confirmed significant capacity loss. CFRP strengthening was proposed as a cost-effective alternative to costly wall reconstruction.',
    challenge: 'Minimizing disruption to operations, ensuring compatibility of repair system with existing concrete, long-term performance reliability in service environment.',
    technicalAssessment: 'Structural capacity analysis, FEA modeling of CFRP/concrete composite action, environmental durability assessment for CFRP systems, and creep/relaxation analysis.',
    calculations: 'Reduced rebar capacity assessment based on corrosion loss, CFRP fiber strain calculations under design loads, composite action verification, and long-term durability projections.',
    repairMethod: 'Surface grinding to remove weathered concrete and ensure clean substrate, epoxy primer application, CFRP sheet installation with controlled pressure and vacuum bagging, edge wrapping with protective coating.',
    lessonsLearned: 'CFRP systems require meticulous surface preparation and environmental protection. Long-term performance depends on epoxy system selection and field application quality control.',
  },
  {
    id: 3,
    title: 'Pump Foundation Epoxy Grouting & Precision Leveling',
    industry: 'Industrial & Manufacturing',
    problem: 'Pump foundation settlement and differential movement causing vibration, misalignment, and operational instability threatening equipment performance and facility safety.',
    rootCause: 'Inadequate soil preparation, excessive void spaces under foundation baseplate, and foundation flexure under dynamic loading led to cumulative settlement.',
    investigation: 'Foundation elevation survey and laser leveling, rebound hammer testing, concrete condition assessment, visual inspection of void spaces, and alignment verification.',
    solution: 'Controlled epoxy grouting under pressure to fill void spaces and restore foundation stiffness, precision releveling to original design elevation, and vibration monitoring system installation.',
    result: 'Foundation settlement arrested, vibration levels reduced 75%, equipment misalignment corrected, operational efficiency restored, and extended equipment service life.',
    technologies: ['Precision Leveling', 'High-Strength Epoxy Grouting', 'Vibration Analysis', 'Laser Alignment', 'Foundation Stiffening'],
    background: 'A critical centrifugal pump installation showed progressive settlement and increasing vibration levels over 5 years. Foundation inspection revealed significant void spaces between baseplate and concrete. Remediation was required to restore precision alignment and eliminate equipment damage risk.',
    challenge: 'Maintaining equipment alignment during grouting, managing pressure injection to prevent uplift forces, ensuring uniform grout distribution without voids.',
    technicalAssessment: 'Soil mechanics analysis of settlement mechanisms, grouting pressure optimization, structural stiffness analysis, and vibration frequency domain analysis.',
    calculations: 'Void volume calculation from laser survey, epoxy injection pressure requirements based on soil bearing capacity, expected stiffness improvement, and vibration amplitude reduction.',
    repairMethod: 'Drilling access holes through baseplate, controlled low-pressure epoxy injection to fill void spaces, pressure monitoring during injection process, precision re-leveling of baseplate to design elevation.',
    lessonsLearned: 'Precision foundation grouting requires careful pressure management to avoid uplift. Real-time settlement monitoring during injection prevents overfilling and surface damage.',
  },
  {
    id: 4,
    title: 'HDPE Liner Installation QA/QC - Comprehensive Containment System',
    industry: 'Environmental & Geotechnical',
    problem: 'Large-scale HDPE liner installation requiring zero defects to ensure long-term environmental containment and regulatory compliance across multiple hectares.',
    rootCause: 'Contractor inexperience with large-area synthetic systems, inadequate quality procedures, and insufficient real-time inspection protocols created defect risk.',
    investigation: 'Contractor qualification audit, equipment capability review, thermal welding procedure development, sample weld pull-testing, and installation method review.',
    solution: 'Comprehensive QA/QC program with daily visual inspection, thermal imaging of 100% weld seams, anchortrench verification, photographic documentation, and defect tracking system.',
    result: 'Installation completed defect-free, zero rework required, full regulatory environmental compliance certification, and reference project for future work.',
    technologies: ['HDPE Geomembrane', 'Thermal Imaging Inspection', 'Ultrasonic Weld Testing', 'Anchor Trench Design', 'Environmental Certification'],
    background: 'A major environmental containment facility required installation of HDPE geomembrane liner over 15+ hectares. Independent QA/QC oversight was critical to ensure system integrity for 30-year design life and meet stringent regulatory requirements.',
    challenge: 'Scale of installation, weather dependency, critical timeline, remote site logistics, and zero tolerance for installation defects.',
    technicalAssessment: 'Subgrade condition assessment, thermal modeling for seasonal variation, weld integrity analysis, anchor design verification, and long-term performance modeling.',
    calculations: 'Differential settlement analysis under load, thermal stress calculations for temperature extremes, anchor load capacity determination, and puncture resistance verification.',
    repairMethod: 'Real-time thermal imaging quality screening, patch application for detected defects using approved overlay methods, re-testing all repairs to original specification.',
    lessonsLearned: 'Contractor pre-qualification and procedure verification are essential for large-scale synthetic installations. Thermal imaging enables real-time defect detection during installation.',
  },
  {
    id: 5,
    title: 'Earthwork Compaction QA/QC & Field Density Testing Optimization',
    industry: 'Infrastructure & Heavy Civil',
    problem: 'Large-scale earthwork operations requiring stringent compaction quality control and field density verification to meet design specifications and project schedule.',
    rootCause: 'Inadequate fill material inspection, inconsistent compaction procedures, and insufficient field density testing led to areas of substandard compaction.',
    investigation: 'Material source verification, borrow pit testing, field density determination via nuclear gauge and sand replacement method, and compaction procedure audit.',
    solution: 'Implemented rigorous QA/QC program with material pre-approval, daily compaction testing at specified intervals, FDT optimization procedures, and documentation control.',
    result: 'Achieved 100% specification compliance, eliminated rework in majority of areas, project schedule maintained, and regulatory inspection approval on first submission.',
    technologies: ['Nuclear Density Gauge', 'Sand Replacement Method', 'Material Testing', 'Compaction Optimization', 'FDT Procedures'],
    background: 'A major infrastructure project required compaction of over 500,000 m³ of fill material to achieve 95% Standard Proctor density. Independent QA/QC oversight was essential to verify quality, maintain schedule, and ensure regulatory compliance.',
    challenge: 'Volume and timeline pressure, variable fill material sources, weather dependency affecting compaction effectiveness, and maintaining consistent testing protocols.',
    technicalAssessment: 'Fill material characterization, optimal moisture content and density determination, compaction equipment performance analysis, and field density testing correlation studies.',
    calculations: 'Target density calculations based on design specifications, moisture content optimization for maximum density, testing frequency requirements based on project scale and risk.',
    repairMethod: 'Identification of deficient areas via systematic FDT program, reworking of substandard areas with optimized procedures, re-testing to verify compliance.',
    lessonsLearned: 'Regular field density testing throughout construction is essential for quality assurance. Early identification of compaction issues prevents costly remediation at project completion.',
  },
  {
    id: 6,
    title: 'Geotextile & Bi-Planar Drainage System Inspection & Verification',
    industry: 'Geotechnical & Environmental',
    problem: 'Complex geotextile and bi-planar drainage system installation requiring verification of material integrity, proper orientation, and drainage effectiveness across multiple layers.',
    rootCause: 'Complex installation geometry, multiple material interfaces, and variable subgrade conditions created inspection and verification challenges.',
    investigation: 'Material batch certificate verification, installation observation and photographic documentation, drainage flow testing, and system performance monitoring.',
    solution: 'Comprehensive inspection program covering material verification, installation methodology audit, proper orientation confirmation, and drainage performance testing.',
    result: 'System verified for design performance specifications, materials confirmed to meet specification requirements, installation documented for regulatory compliance, and long-term performance baseline established.',
    technologies: ['Geotextile Inspection', 'Drainage Flow Testing', 'Material Verification', 'Performance Monitoring', 'Field Documentation'],
    background: 'An environmental containment system required installation of multi-layer geotextile and drainage geocomposite systems. Independent inspection was critical to verify material integrity, proper positioning, and drainage system effectiveness.',
    challenge: 'Complex multi-layer installation, verifying proper overlap and continuity, confirming drainage flow paths, and establishing performance baseline for future monitoring.',
    technicalAssessment: 'Material property verification, drainage permeability testing, bi-planar orientation confirmation, layer interface integrity assessment, and flow capacity verification.',
    calculations: 'Design drainage flow rates versus actual measured flow, permeability verification against specification, drainage layer coverage adequacy, and system redundancy assessment.',
    repairMethod: 'Identification of improper installation via field observation, localized reworking of deficient areas, re-verification of drainage performance, photographic documentation of corrections.',
    lessonsLearned: 'Real-time inspection during geotextile installation prevents costly future system failures. Material batch verification and flow testing provide quantitative performance confirmation.',
  },
]

const futureReadyPages = [
  'Engineering Blog',
  'Knowledge Center',
  'Training Academy',
  'Consultation Booking',
]

const clients = ['Ma\'aden', 'Saudi Chevron Phillips', 'Sadara', 'Samsung Engineering', 'L&T', 'Doosan', 'Sinopec']

const testimonials = [
  {
    quote: 'Their quality leadership brought discipline and confidence to our most complex civil package.',
    name: 'Senior Project Director',
    company: 'Petrochemical Client',
  },
  {
    quote: 'Professional, responsive, and exceptionally focused on inspection quality and client satisfaction.',
    name: 'Operations Manager',
    company: 'Industrial Infrastructure Group',
  },
]

const gallery = [
  { image: engineeringPlant, title: 'Industrial Facility Delivery', label: 'Civil & Process Infrastructure' },
  { image: siteInspection, title: 'Site Inspection Excellence', label: 'Quality Audits & Field Verification' },
  { image: projectOperations, title: 'Engineering Operations', label: 'Turnaround Planning & Execution' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-haneefa-fozul-rahuman' },
  { label: 'WhatsApp', href: 'https://wa.me/966581212378' },
  { label: 'Email', href: 'mailto:fozulur@yahoo.com' },
]

const timelineItems = [
  {
    title: 'QA/QC Manager',
    company: 'Al Yamama Company',
    period: '2026 – Present',
    details: 'Leading QA/QC systems for major civil and geosynthetic works on the Ma’aden Phosphate Gypsum Stack Expansion Phase IV project.',
  },
  {
    title: 'Senior QA/QC Specialist',
    company: 'Major Industrial & Infrastructure Projects',
    period: '2016 – 2025',
    details: 'Delivered quality leadership across petrochemical, industrial, and infrastructure environments with strong client and consultant alignment.',
  },
  {
    title: 'Civil QA/QC Professional',
    company: 'Regional Construction Delivery',
    period: '2000 – 2015',
    details: 'Built strong quality operations in civil construction, materials control, contractor oversight, and site inspection execution.',
  },
]

const projectItems = [
  {
    title: 'Ma’aden Gypsum Stack Expansion Phase IV',
    client: 'Ma’aden',
    location: 'Ras Al Khair, Saudi Arabia',
    scope: 'Quality leadership for earthworks, HDPE liner, geotextile, and geocomposite systems.',
  },
  {
    title: 'Petrochemical Maintenance & Capital Works',
    client: 'Saudi Chevron Phillips',
    location: 'Jubail, Saudi Arabia',
    scope: 'Civil quality management, inspection systems, concrete repair, and structural integrity assurance.',
  },
  {
    title: 'Industrial & Infrastructure Program Delivery',
    client: 'Multiple Clients',
    location: 'Saudi Arabia & India',
    scope: 'Broad QA/QC leadership across heavy civil, industrial, and infrastructure projects.',
  },
]

const certifications = [
  'Level II Coating Inspector (CCI)',
  'Level II Fireproofing Inspector (CFI)',
  'Fireproofing Fundamentals',
  'Civil Concrete Maintenance and Repair',
  'Safety Awareness Training',
  'Investigation, Build and Repair',
]

const skillData = [
  { name: 'Quality Management', value: 96 },
  { name: 'Inspection & Testing', value: 94 },
  { name: 'Material Approval', value: 92 },
  { name: 'Civil Construction', value: 95 },
  { name: 'HDPE / Geosynthetics', value: 90 },
  { name: 'Documentation & Reporting', value: 93 },
]

const sectionAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function PremiumIcon({ name }) {
  switch (name) {
    case 'quality':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 19 6v5c0 4.2-2.9 8-7 10-4.1-2-7-5.8-7-10V6l7-3Z" />
          <path d="m9.5 12 1.7 1.7 3.3-3.5" />
        </svg>
      )
    case 'inspection':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 4h8l4 4v12H6z" />
          <path d="M14 4v4h4" />
          <path d="m9 13 2 2 4-5" />
        </svg>
      )
    case 'plan':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h10" />
          <path d="M7 7h10" />
          <path d="M7 11h6" />
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 15h8" />
        </svg>
      )
    case 'document':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3h6l4 4v14H8z" />
          <path d="M14 3v4h4" />
          <path d="M9 12h6" />
          <path d="M9 16h4" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16" />
          <path d="M12 4c2.5 2.3 4 4.9 4 8s-1.5 5.7-4 8c-2.5-2.3-4-4.9-4-8s1.5-5.7 4-8Z" />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s5-5.2 5-10a5 5 0 1 0-10 0c0 4.8 5 10 5 10Z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      )
    case 'crack':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19c2.4-4 3.8-6.7 5-9 1.2-2.3 2.5-4.2 4-6" />
          <path d="M7 20c2-2.9 3.3-5.7 4.5-8.2 1.2-2.6 2.3-4.7 4.5-7.8" />
        </svg>
      )
    case 'analysis':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" />
          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      )
    case 'corrosion':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 18c0-3.4 2.5-5.8 5-6.8 2.5-1 4.4-2.6 4.4-5.2 0-1.4-.7-2.6-1.9-3.4" />
          <path d="M13 20c0-2.2 1.3-3.8 3.3-4.6 2-0.8 3.7-2 3.7-4.6 0-1.2-.4-2.2-1.1-3" />
        </svg>
      )
    case 'repair':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 6 6 14l4 4 8-8z" />
          <path d="m5 19 3-3" />
          <path d="m16 4 4 4" />
        </svg>
      )
    case 'waterproof':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3c4.4 2.8 7 5.1 7 8.5 0 3.9-3.1 6.8-7 8.5-3.9-1.7-7-4.6-7-8.5C5 8.1 7.6 5.8 12 3Z" />
          <path d="M9 11.5 11 13.5l4-4.5" />
        </svg>
      )
    case 'epoxy':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4h8" />
          <path d="M7 8h10" />
          <path d="M6 12h12" />
          <path d="M5 16h14" />
          <path d="M4 20h16" />
        </svg>
      )
    case 'grout':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 10h8" />
          <path d="M8 14h5" />
        </svg>
      )
    case 'liner':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h14" />
          <path d="M5 12h14" />
          <path d="M5 17h14" />
          <path d="M7 4v16" />
          <path d="M17 4v16" />
        </svg>
      )
    case 'geotextile':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
          <path d="M7 4v16" />
          <path d="M17 4v16" />
        </svg>
      )
    case 'earthwork':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 18h16" />
          <path d="m7 18 2-6 3 3 3-6 2 5" />
        </svg>
      )
    case 'qa':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4h10l2 2v14H8z" />
          <path d="M14 4v4h4" />
          <path d="m10 13 1.8 1.8 3.2-3.6" />
        </svg>
      )
    case 'checklist':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6h11" />
          <path d="M9 12h11" />
          <path d="M9 18h11" />
          <path d="m4 7 1.5 1.5L8 5" />
          <path d="m4 13 1.5 1.5L8 11" />
          <path d="m4 19 1.5 1.5L8 17" />
        </svg>
      )
    default:
      return null
  }
}

function SectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading-center' : ''}`}>
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

function CaseStudyModal({ caseStudy, isOpen, onClose }) {
  if (!isOpen || !caseStudy) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          <div className="modal-header">
            <h2>{caseStudy.title}</h2>
            <div className="modal-meta">
              <span className="modal-badge">{caseStudy.industry}</span>
            </div>
          </div>

          <div className="modal-body">
            <section className="modal-section">
              <h3>Background</h3>
              <p>{caseStudy.background}</p>
            </section>

            <section className="modal-section">
              <h3>Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </section>

            <section className="modal-section">
              <h3>Technical Assessment</h3>
              <p>{caseStudy.technicalAssessment}</p>
            </section>

            <section className="modal-section">
              <h3>Investigation & Analysis</h3>
              <p>{caseStudy.investigation}</p>
            </section>

            <section className="modal-section">
              <h3>Engineering Calculations</h3>
              <p>{caseStudy.calculations}</p>
            </section>

            <section className="modal-section">
              <h3>Repair Method & Implementation</h3>
              <p>{caseStudy.repairMethod}</p>
            </section>

            <section className="modal-section">
              <h3>Lessons Learned</h3>
              <p>{caseStudy.lessonsLearned}</p>
            </section>

            <section className="modal-section">
              <h3>Technologies & Methods Applied</h3>
              <div className="modal-tags">
                {caseStudy.technologies.map((tech) => (
                  <span key={tech} className="modal-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="button button-primary"
              onClick={onClose}
            >
              Close
            </button>
            <a
              className="button button-secondary"
              href="https://wa.me/966581212378"
              target="_blank"
              rel="noreferrer"
            >
              Discuss This Project
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1300)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 220
      let current = 'home'

      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section && section.offsetTop <= offset) {
          current = section.id
        }
      })

      setActiveSection(current)
      setShowBackToTop(window.scrollY > 480)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-shell">
      <AnimatePresence>
        {isLoading ? (
          <motion.div className="loading-screen" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.03 }} transition={{ duration: 0.55 }}>
            <motion.div className="loading-logo" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <img src={feLogo} alt="Fozul Engineering logo" />
              <h1>Fozul Engineering</h1>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        aria-label="Toggle color theme"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <nav className="navbar glass-nav">
        <div className="navbar-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <motion.header id="home" className="hero-section" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="hero-background">
          <div className="particle particle-a" />
          <div className="particle particle-b" />
          <div className="particle particle-c" />
          <div className="particle particle-d" />
          <div className="hero-grid" />
        </div>

        <div className="hero-copy">
          <div className="brand-mark">
            <img src={feLogo} alt="Fozul Engineering FE logo" />
            <div>
              <p className="brand-kicker">Fozul Engineering</p>
              <h2>International Engineering Consultancy</h2>
            </div>
          </div>
          <p className="eyebrow">Engineering Consultancy | QA/QC | Asset Integrity</p>
          <h1>Engineering Quality &amp; Asset Integrity Solutions</h1>
          <p className="hero-subtitle">
            Helping industries solve engineering problems through quality, inspection, root cause analysis and practical repair solutions backed by 25+ years of experience.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Book Consultation
            </a>
            <a className="button button-secondary" href="/Mohamed_Haneefa_Fozul_Rahuman_CV.pdf" download>
              Download CV
            </a>
          </div>
          <div className="hero-highlights">
            <span>25+ Years Experience</span>
            <span>Industrial Projects</span>
            <span>Saudi Arabia Experience</span>
            <span>Engineering Solutions</span>
          </div>
        </div>

        <motion.div className="hero-panel" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="photo-frame">
            <img src={profilePhoto} alt="Mohamed Haneefa Fozul Rahuman portrait" />
          </div>
          <div className="hero-profile-card">
            <h3>Mohamed Haneefa Fozul Rahuman</h3>
            <p>QA/QC Manager | Civil Quality Manager</p>
            <div className="profile-metrics">
              <span>Oil & Gas</span>
              <span>Petrochemical</span>
              <span>Industrial</span>
              <span>Infrastructure</span>
            </div>
          </div>
        </motion.div>
      </motion.header>

      <main>
        <motion.section
          className="section"
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="About"
            title="Engineering consultancy grounded in quality, integrity, and asset performance"
            subtitle="With over two decades of field and management experience, I deliver quality systems that protect schedule, cost, compliance, and long-term asset reliability."
          />

          <div className="about-grid">
            <div className="glass-panel">
              <p>
                As a QA/QC Manager, I bring a senior-level approach to quality control, inspection strategy, documentation discipline, and project quality leadership across oil & gas, petrochemical, industrial, and infrastructure environments.
              </p>
              <ul className="check-list">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="glass-panel">
              <h3>Core professional strengths</h3>
              <div className="chip-list">
                <span>Earthworks</span>
                <span>Concrete</span>
                <span>HDPE Liner</span>
                <span>Geotextile</span>
                <span>Infrastructure</span>
                <span>Industrial Projects</span>
                <span>QA/QC Management</span>
                <span>Saudi Arabia Delivery</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Engineering Consultancy Services"
            title="Premium engineering support for investigations, quality, and repair strategy"
            subtitle="Each engagement is structured to deliver clarity, technical confidence, and practical next steps for asset integrity and performance."
          />

          <div className="service-grid">
            {consultancyServices.map((item, index) => (
              <motion.article
                key={item.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="service-header">
                  <div className="service-index">0{index + 1}</div>
                  <div className="service-icon">
                    <PremiumIcon name={item.icon} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button type="button" className="knowledge-link service-link">Learn More</button>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="expertise"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Engineering Expertise"
            title="Technical depth across concrete, repair systems, coatings, and geosynthetics"
            subtitle="A broad engineering foundation supports inspections, repairs, material recommendations, and quality leadership."
          />

          <div className="expertise-grid">
            {engineeringExpertise.map((item) => (
              <article key={item.title} className="expertise-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="knowledge-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Engineering Knowledge Center"
            title="A premium resource library for engineering insight and practical decision support"
            subtitle="Technical reference material for concrete diagnostics, repair planning, field inspection, and quality leadership."
          />

          <div className="knowledge-grid">
            {knowledgeCenterItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="knowledge-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.03 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="knowledge-icon">
                  <PremiumIcon name={item.icon} />
                </div>
                <div className="knowledge-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button type="button" className="knowledge-link">Read More</button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="why-choose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Why Choose Me"
            title="Trusted by owners, consultants, and project teams for decisive engineering support"
            subtitle="The combination of technical experience, field credibility, and quality leadership helps projects move forward with confidence."
          />

          <div className="why-choose-grid">
            {whyChooseItems.map((item) => (
              <article key={item.value} className="why-choose-card">
                <h3>{item.value}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="case-studies"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Professional Case Studies"
            title="Proven engineering solutions across industries and technical challenges"
            subtitle="Detailed case studies showcasing root cause analysis, technical investigation, engineering calculations, and durable repair methodologies."
          />

          <div className="case-study-grid">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className="case-study-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="case-study-header">
                  <span className="case-study-industry">{study.industry}</span>
                  <h3>{study.title}</h3>
                </div>

                <div className="case-study-content">
                  <div className="case-study-field">
                    <p className="field-label">Engineering Problem</p>
                    <p className="field-value">{study.problem}</p>
                  </div>

                  <div className="case-study-field">
                    <p className="field-label">Root Cause</p>
                    <p className="field-value">{study.rootCause}</p>
                  </div>

                  <div className="case-study-field">
                    <p className="field-label">Technical Investigation</p>
                    <p className="field-value">{study.investigation}</p>
                  </div>

                  <div className="case-study-field">
                    <p className="field-label">Engineering Solution</p>
                    <p className="field-value">{study.solution}</p>
                  </div>

                  <div className="case-study-field">
                    <p className="field-label">Result</p>
                    <p className="field-value">{study.result}</p>
                  </div>

                  <div className="case-study-field">
                    <p className="field-label">Technologies Used</p>
                    <div className="tech-list">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => {
                    setSelectedCaseStudy(study)
                    setShowCaseStudyModal(true)
                  }}
                >
                  Read More
                </button>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="future-ready"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Future Ready Design"
            title="A platform prepared for the next phase of thought leadership"
            subtitle="This space is ready for future content expansion, including technical articles, learning resources, and consultation booking flows."
          />

          <div className="future-ready-grid">
            {futureReadyPages.map((item) => (
              <article key={item} className="future-ready-card">
                <span>Coming Soon</span>
                <h3>{item}</h3>
                <p>Planned for the next stage of the consultancy platform.</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Experience"
            title="A career built on quality leadership and measurable project impact"
            subtitle="From field execution to senior management oversight, each phase has strengthened construction quality and delivery confidence."
          />

          <div className="timeline">
            {timelineItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Project Gallery"
            title="Engineering delivery that reflects discipline, precision, and operational maturity"
            subtitle="A selection of visual storytelling from field execution, site verification, and industrial project environments."
          />

          <div className="gallery-grid">
            {gallery.map((item) => (
              <article key={item.title} className="gallery-card">
                <img src={item.image} alt={item.title} />
                <div className="gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.label}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section" id="testimonials" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionAnimation}>
          <SectionHeading eyebrow="Testimonials" title="Trusted by project teams that value precision and accountability" subtitle="Client feedback reflects the standard of quality, responsiveness, and leadership we bring to each engagement." />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>“{item.quote}”</p>
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.company}</span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Certifications"
            title="Professional credentials that reinforce technical credibility"
            subtitle="A focused combination of inspection, safety, and civil maintenance expertise."
          />

          <div className="chip-list certifications-list">
            {certifications.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Core skills backed by proven delivery and measurable results"
            subtitle="A balanced mix of technical excellence, inspection depth, and quality leadership."
          />

          <div className="skill-list">
            {skillData.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-labels">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="download"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Download Resume"
            title="Access a professional overview of experience, leadership, and project delivery"
            subtitle="A polished summary of civil QA/QC capability, project history, and technical specialization."
          />
          <div className="download-card">
            <a className="button button-primary" href="/Mohamed_Haneefa_Fozul_Rahuman_CV.pdf" download>
              Download PDF Resume
            </a>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="consultation"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Book a Consultation"
            title="Need Professional Engineering Advice?"
            subtitle="I provide online engineering consultation for civil quality, concrete defects, QA/QC, HDPE liner systems, inspections, root cause analysis and repair recommendations."
          />

          <div className="consultation-cta">
            <a className="button button-primary consultation-button" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">
              Book a Consultation
            </a>
          </div>

          <div className="consultation-grid">
            <a className="consultation-card" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">
              <div className="consultation-icon"><PremiumIcon name="quality" /></div>
              <h3>WhatsApp Consultation</h3>
              <p>Quick discussion for urgent engineering support and technical guidance.</p>
            </a>
            <a className="consultation-card" href="mailto:fozulur@yahoo.com">
              <div className="consultation-icon"><PremiumIcon name="document" /></div>
              <h3>Email Consultation</h3>
              <p>Share your project details for a detailed consultation response.</p>
            </a>
            <a className="consultation-card" href="/Mohamed_Haneefa_Fozul_Rahuman_CV.pdf" download>
              <div className="consultation-icon"><PremiumIcon name="plan" /></div>
              <h3>Download CV</h3>
              <p>Review technical experience, credentials, and project background.</p>
            </a>
            <a className="consultation-card" href="https://www.linkedin.com/in/mohamed-haneefa-fozul-rahuman" target="_blank" rel="noreferrer">
              <div className="consultation-icon"><PremiumIcon name="globe" /></div>
              <h3>LinkedIn Profile</h3>
              <p>Connect for professional discussion and engineering collaboration.</p>
            </a>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let’s discuss quality leadership for your next project"
            subtitle="Open for senior civil QA/QC roles, consulting, and project quality advisory opportunities."
          />

          <div className="contact-card">
            <div className="contact-card-main">
              <p className="section-label">Contact</p>
              <h3>Discuss your next engineering or QA/QC requirement</h3>
              <p>Reach out for senior consultancy support, quality leadership, and international project delivery partnerships as QA/QC Manager at Al Yamama Company.</p>
              <div className="contact-actions">
                <a className="button button-primary" href="mailto:fozulur@yahoo.com">Email Us</a>
                <a className="button button-secondary" href="https://www.linkedin.com/in/mohamed-haneefa-fozul-rahuman" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <div className="contact-details">
              <a href="mailto:fozulur@yahoo.com"><PremiumIcon name="document" /> fozulur@yahoo.com</a>
              <a href="https://www.linkedin.com/in/mohamed-haneefa-fozul-rahuman" target="_blank" rel="noreferrer"><PremiumIcon name="globe" /> LinkedIn Profile</a>
              <span><PremiumIcon name="pin" /> Location: Saudi Arabia</span>
            </div>
          </div>
        </motion.section>
      </main>

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        isOpen={showCaseStudyModal}
        onClose={() => {
          setShowCaseStudyModal(false)
          setSelectedCaseStudy(null)
        }}
      />

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button type="button" className="back-to-top" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            ↑
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a className="floating-whatsapp" href="https://wa.me/966581212378" target="_blank" rel="noreferrer" aria-label="Contact via WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 0 0-6.8 12.1L4 20l4-1.2A8 8 0 1 0 12 4Zm0 14.2a6.6 6.6 0 0 1-3.4-.9l-.2-.1-2.4.7.7-2.3-.1-.2A6.6 6.6 0 1 1 12 18.2Zm3.7-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0a5.3 5.3 0 0 1-1.5-.9 5.4 5.4 0 0 1-1-1.2c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3a.3.3 0 0 0 0-.3c-.1-.1-.4-.9-.6-1.3-.1-.3-.2-.3-.4-.3h-.4a.8.8 0 0 0-.6.3 2.4 2.4 0 0 0-.8 1.8c0 .8.4 2 .9 2.7.6 1 1.3 1.6 2.2 2.2.8.4 1.4.6 2 .6.6 0 .9-.2 1.2-.3.4-.2.7-.6.8-1.2 0-.2.2-.6.1-.8l-.2-.2Z" /></svg>
      </a>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>Fozul Engineering</h3>
            <p>Premium engineering consultancy focused on quality, assurance, and project excellence.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#expertise">Expertise</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Consultancy Services</a>
            <a href="#expertise">Engineering Expertise</a>
            <a href="#why-choose">Why Choose Me</a>
          </div>
          <div>
            <h4>Social Media</h4>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
        <p className="footer-copy">© 2026 Mohamed Haneefa Fozul Rahuman | QA/QC Manager, Al Yamama Company</p>
      </footer>
    </div>
  )
}

export default App
