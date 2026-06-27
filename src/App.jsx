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
  { label: 'Projects', href: '#projects-featured' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Credentials', href: '#credentials' },
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

// About Page Data
const aboutMeData = {
  title: 'Executive Profile',
  subtitle: 'Senior Engineering Quality Leader & Consultancy Expert',
  summary: 'Mohamed Haneefa Fozul Rahuman is an internationally experienced QA/QC Manager and engineering consultancy expert with 25+ years of proven track record delivering quality leadership, project excellence, and practical engineering solutions across oil & gas, petrochemical, mining, and industrial sectors in Saudi Arabia and the GCC region. Recognized for transforming quality operations, reducing defects through disciplined QA/QC systems, and building high-performing teams that exceed client expectations.',
  professionalStatement: 'Driven by a mission to establish FAHEEM Engineering Consultancy—a premier engineering consultancy firm focused on quality assurance, asset integrity, and practical repair solutions. Currently QA/QC Manager at Al Yamama Company, leading critical quality systems on the Ma\'aden Phosphate Gypsum Stack Expansion Phase IV project.',
  coreValue: 'Engineering quality is not just compliance—it\'s about delivering lasting value to clients, protecting assets, and building trust through measurable, defensible quality outcomes.',
}

// Core Competencies Data
const coreCompetencies = [
  {
    category: 'Quality Leadership & Management',
    skills: [
      'Civil QA/QC Strategy & Planning',
      'Quality Management System Development',
      'Inspection & Test Plan Development',
      'Construction Quality Oversight',
      'Quality Team Leadership',
      'ISO 9001 Implementation',
      'Non-Conformance Management',
      'Quality Audits & Surveillance',
    ],
  },
  {
    category: 'Materials & Quality Control',
    skills: [
      'Material Approval & Submittal Review',
      'Concrete Technology & Quality',
      'Earthwork & Compaction Control',
      'Geosynthetics (HDPE Liner, Geotextile)',
      'Protective Coatings & Systems',
      'Sika & Fosroc Repair Materials',
      'Epoxy & Injection Systems',
      'Grouting & Stabilization',
    ],
  },
  {
    category: 'Testing & Assessment',
    skills: [
      'Non-Destructive Testing (NDT)',
      'Rebound Hammer Assessment',
      'Ultrasonic Pulse Velocity (UPV)',
      'Concrete Crack Investigation',
      'Crack Assessment & Analysis',
      'Structural Condition Assessment',
      'Rebar Corrosion Evaluation',
      'Waterproofing Inspection',
    ],
  },
  {
    category: 'Engineering Problem-Solving',
    skills: [
      'Root Cause Failure Analysis',
      'Engineering Investigations',
      'Repair Strategy Development',
      'Concrete Repair Planning',
      'Performance Diagnostics',
      'Technical Documentation',
      'Standards & Compliance',
      'Regulatory Coordination',
    ],
  },
  {
    category: 'Software & Technical Tools',
    skills: [
      'AutoCAD Design & Documentation',
      'SketchUp 3D Modeling',
      '3ds Max Visualization',
      'Interior Design & Visualization',
      'Technical Drawing Production',
      'Site Mapping & Documentation',
      'Project Visualization',
      'CAD Standards Compliance',
    ],
  },
]

// Professional Certifications
const certifications = [
  'ISO 9001:2015 Quality Management Systems',
  'OSHA Safety Certifications',
  'ASTM Standards Expertise',
  'ACI Concrete Inspection Certification',
  'NDT Level 2 & 3 Training',
  'Geosynthetics Installation Quality',
  'HDPE Liner System QA/QC',
  'Professional Engineering Assessment',
]

// Professional Background
const professionalBackground = [
  {
    period: '2026 – Present',
    title: 'QA/QC Manager',
    company: 'Al Yamama Company',
    location: 'Saudi Arabia',
    description: 'Leading comprehensive QA/QC systems and quality oversight for major civil and geosynthetic works on the Ma\'aden Phosphate Gypsum Stack Expansion Phase IV project. Responsible for quality planning, inspection protocols, material approval, non-destructive testing, and regulatory compliance.',
    achievements: [
      'Leading QA/QC for 1M+ m² HDPE liner installation',
      'Managing comprehensive quality documentation systems',
      'Overseeing multi-contractor quality coordination',
    ],
  },
  {
    period: '2013 – 2025',
    title: 'Senior Civil QA/QC Manager',
    company: 'Saudi Chevron Company',
    location: 'Saudi Arabia',
    description: 'Delivered over 13 years of continuous civil quality management, emergency response, and preventive maintenance programs across multiple Saudi Chevron operational facilities. Managed $50M+ in civil maintenance and repair programs with zero regulatory non-compliance.',
    achievements: [
      '13 years of continuous client engagement and trust',
      'Zero non-compliance citations in client audits',
      'Developed QA/QC protocols adopted across operations',
      'Managed emergency response and critical repairs',
    ],
  },
  {
    period: '2000 – 2012',
    title: 'Civil Quality Engineer & Project Manager',
    company: 'Various Regional Contractors & Developers',
    location: 'Saudi Arabia & GCC Region',
    description: 'Built strong quality operations across civil construction, materials control, contractor oversight, and site inspection execution. Specialized in infrastructure, industrial, and capital project delivery with comprehensive quality systems.',
    achievements: [
      'Established quality operations for major infrastructure projects',
      'Trained and led quality inspection teams',
      'Implemented inspection management systems',
    ],
  },
]

const consultancyServices = [
  {
    title: 'Civil QA/QC Consultancy',
    description: 'Independent quality strategy and field support for civil works, ensuring compliance, traceability, and construction confidence.',
    icon: 'quality',
    overview: 'Independent civil quality assurance and quality control consultancy covering inspection planning, material approval, ITP development, and field oversight for civil construction projects across oil & gas, industrial, mining, and infrastructure sectors.',
    scope: 'Development and review of quality plans and inspection and test plans. Material approval and submittal review. Field inspection of concrete, earthworks, civil structures, and drainage systems. Non-conformance management. QA/QC audit and surveillance. Documentation control and handover support.',
    standards: 'ACI 301, ACI 318, ASTM, BS EN, project-specific client specifications, and applicable local regulatory requirements.',
    deliverables: 'Inspection reports, material approval records, ITPs, non-conformance reports, audit reports, and quality completion documentation.',
    typicalProjects: 'Oil & gas facility civil packages, petrochemical plant civil works, industrial infrastructure, mining facility construction, and capital maintenance programmes.',
    benefits: 'Independent quality oversight reduces defects, prevents rework, ensures regulatory compliance, and provides defensible quality records for client confidence and asset handover.',
  },
  {
    title: 'Root Cause Failure Analysis',
    description: 'Systematic engineering review of defects, failures, and recurring issues to isolate the real causes and support corrective action.',
    icon: 'analysis',
    overview: 'Structured engineering investigation of construction defects, material failures, and recurring quality problems to identify the true root cause and develop corrective actions that prevent recurrence.',
    scope: 'Site inspection and defect mapping. Review of construction records, material data sheets, and test results. Laboratory assessment where required. Root cause determination using systematic analysis methods. Corrective and preventive action development.',
    standards: 'ASTM, ACI, BS EN, and project specification requirements. Root cause analysis methodology aligned with industry best practice.',
    deliverables: 'Root cause analysis report including investigation findings, identified root cause, contributing factors, corrective action recommendations, and lessons learned.',
    typicalProjects: 'Recurring concrete defects, structural crack investigations, coating or waterproofing failures, geosynthetic installation failures, and equipment foundation deterioration.',
    benefits: 'Resolves the underlying cause rather than symptoms. Prevents repeat failures, reduces lifecycle maintenance cost, and provides engineering confidence in the corrective repair strategy.',
  },
  {
    title: 'Concrete Crack Investigation',
    description: 'Detailed assessment of crack mechanisms, movement, and structural implications to guide durable repair decisions.',
    icon: 'crack',
    overview: 'Technical investigation of concrete cracking including crack pattern analysis, crack mechanism identification, structural implication assessment, and practical repair strategy development.',
    scope: 'Visual crack mapping and photographic documentation. Crack width and depth measurement. Assessment of crack type — structural, thermal, shrinkage, settlement, or overload. Review of design and construction records. Repair strategy development aligned with crack mechanism.',
    standards: 'ACI 224R, ACI 318, BS EN 1504, ICRI guidelines, and applicable project specifications.',
    deliverables: 'Crack investigation report including crack maps, mechanism assessment, structural implication review, and repair recommendations with material specifications.',
    typicalProjects: 'Industrial structure crack assessment, infrastructure condition surveys, concrete slab and wall investigations, petrochemical facility concrete reviews, and pre-purchase condition assessments.',
    benefits: 'Ensures the repair method addresses the correct crack mechanism. Prevents ineffective repair, guides durable material selection, and provides documentation supporting structural sign-off.',
  },
  {
    title: 'Structural Condition Assessment',
    description: 'Technical condition reviews using rebound hammer and ultrasonic pulse velocity (UPV) testing for concrete structures with practical recommendations for performance improvement.',
    icon: 'repair',
    overview: 'Comprehensive assessment of existing concrete and civil structures to determine structural condition, identify deterioration mechanisms, and develop maintenance or repair recommendations that extend asset service life.',
    scope: 'Visual inspection and condition mapping. Non-destructive testing including rebound hammer, half-cell potential, cover meter, and ultrasonic pulse velocity (UPV). Material sampling and testing where required. Deterioration mechanism identification. Remaining service life assessment and repair priority ranking.',
    standards: 'ACI 201.2R, ACI 224R, BS EN 1504, ASTM C876, and applicable national standards.',
    deliverables: 'Condition assessment report including inspection findings, deterioration assessment, remaining service life commentary, repair priority schedule, and budget-level repair cost estimate.',
    typicalProjects: 'Aging industrial facility assessments, petrochemical plant concrete reviews, infrastructure condition surveys, pre-maintenance programme planning, and asset acquisition due diligence.',
    benefits: 'Provides a structured basis for maintenance planning and budget allocation. Prioritises repair investment and prevents unexpected structural failures.',
  },
  {
    title: 'Concrete Investigation & NDT Testing',
    description: 'Non-destructive testing using rebound hammer and ultrasonic pulse velocity (UPV) to assess concrete strength, density, and deterioration.',
    icon: 'inspection',
    overview: 'Specialist concrete investigation services employing advanced non-destructive testing (NDT) methods including rebound hammer testing and ultrasonic pulse velocity (UPV) testing to assess concrete quality, strength, and deterioration patterns without damage to the structure.',
    scope: 'Rebound hammer testing for concrete strength estimation. Ultrasonic pulse velocity (UPV) testing for concrete density and crack detection. Combined NDT analysis for deterioration mechanism identification. Site mapping and defect location. Technical reporting and engineering recommendations.',
    standards: 'ASTM D5873 (Rebound Hammer), ASTM C597 (Ultrasonic Pulse Velocity), ACI 228.1R guidelines, and applicable project specifications.',
    deliverables: 'Concrete investigation report including NDT test results, analysis of concrete quality and deterioration, defect mapping, and technical recommendations for repair or monitoring.',
    typicalProjects: 'Bridge deck investigations, building concrete assessment, industrial structure condition surveys, parking structure evaluation, and heritage structure assessment.',
    benefits: 'Provides quantitative data on concrete condition without invasive testing. Guides targeted repair decisions and extends asset service life through early deterioration detection.',
  },
  {
    title: 'Waterproofing Inspection',
    description: 'Inspection-led review of waterproofing systems, leakage risks, and system performance for long-term reliability.',
    icon: 'waterproof',
    overview: 'Technical inspection and assessment of waterproofing systems including membrane condition, joint integrity, drainage performance, and leakage risk evaluation for below-ground, exposed, and wet area applications.',
    scope: 'Visual inspection of waterproofing membrane, joints, penetrations, and drainage outlets. Leakage investigation and water ingress source identification. Review of original specification and installation records. Performance assessment and remediation strategy development.',
    standards: 'BS 8102, applicable product manufacturer specifications, and project waterproofing specifications.',
    deliverables: 'Waterproofing inspection report including system condition assessment, leakage source identification, deficiency mapping, and remediation recommendations.',
    typicalProjects: 'Industrial sump and containment inspection, below-ground structure leakage investigations, roof and terrace waterproofing reviews, tunnel and basement assessments, and tank lining condition reviews.',
    benefits: 'Identifies leakage sources accurately before costly remediation is committed. Guides material-appropriate repair and prevents recurring waterproofing failure.',
  },
  {
    title: 'Rebar Corrosion Assessment',
    description: 'Evaluation of corrosion risk, reinforcement degradation, and protective measures to preserve structural durability.',
    icon: 'corrosion',
    overview: 'Electrochemical and physical assessment of reinforcement corrosion risk in concrete structures, covering corrosion potential mapping, chloride profiling, carbonation depth measurement, and repair or protection strategy development.',
    scope: 'Half-cell potential mapping to determine corrosion activity. Chloride content sampling and profiling. Carbonation depth testing. Cover depth survey. Corrosion rate assessment. Development of repair or protection recommendations including cathodic protection, coatings, or structural repair.',
    standards: 'ASTM C876, BS EN 12696, BS EN 1504, ACI 222R, and applicable project specifications.',
    deliverables: 'Corrosion assessment report including potential maps, chloride profiles, carbonation data, structural risk assessment, and recommended repair or protection strategy with material specifications.',
    typicalProjects: 'Marine and coastal structure assessments, petrochemical facility concrete reviews, seawater intake and return structure assessments, infrastructure condition surveys, and industrial containment structure reviews.',
    benefits: 'Provides quantitative data for repair scoping and prioritisation. Prevents premature structural failure and supports cost-effective intervention decisions.',
  },
  {
    title: 'Concrete Repair Consultancy & Recommendations',
    description: 'Professional repair consultancy including practical planning and material guidance for spalling, delamination, and deterioration using Sika and Fosroc repair systems and epoxy injection solutions.',
    icon: 'repair',
    overview: 'Comprehensive concrete repair consultancy covering substrate preparation, repair material selection (including Sika and Fosroc repair systems, epoxy injection techniques), method specification, and quality requirements for durable, compliant reinstatement of deteriorated concrete.',
    scope: 'Assessment of deterioration extent and mechanism. Repair material evaluation and selection including Sika and Fosroc product recommendations. Epoxy injection strategies for crack sealing and structural continuity. Preparation of repair method statements and material specifications. Quality and inspection requirements for repair execution. Review and comment on contractor repair proposals.',
    standards: 'ACI 546R, BS EN 1504, ICRI 310.2, ASTM, and applicable project and client specifications.',
    deliverables: 'Concrete repair consultancy including scope of work, preparation requirements, material specifications, application method, curing requirements, and acceptance criteria.',
    typicalProjects: 'Industrial facility concrete repair programmes, petrochemical plant maintenance, infrastructure rehabilitation, spalling and delamination repairs, epoxy injection repairs, and post-repair quality assurance.',
    benefits: 'Ensures repair materials and methods are selected for the specific deterioration mechanism. Prevents mismatched repairs that cause early re-failure and unnecessary cost. Provides expert consultancy for material selection and repair strategy.',
  },
  {
    title: 'Industrial QA/QC Audits',
    description: 'Structured audits and quality reviews for industrial environments, focused on compliance, control, and operational excellence.',
    icon: 'inspection',
    overview: 'Independent quality system audits and field quality reviews for industrial construction and maintenance environments, providing objective assessment of compliance, process control, and quality documentation.',
    scope: 'Quality management system audit against project requirements and applicable standards. Inspection and test plan compliance review. Material control and traceability audit. Subcontractor quality performance assessment. Non-conformance system review. Audit report with findings and recommendations.',
    standards: 'ISO 9001, project quality management plan requirements, client quality system requirements, and applicable construction standards.',
    deliverables: 'Audit report including scope, findings, observations, non-conformances identified, corrective action requirements, and close-out tracking.',
    typicalProjects: 'Oil & gas construction quality audits, petrochemical maintenance quality reviews, industrial civil package audits, HDPE and geosynthetic installation quality reviews, and pre-completion quality assessments.',
    benefits: 'Provides independent verification of quality system effectiveness. Identifies systemic weaknesses before they affect project outcome and provides evidence of quality commitment for client and regulatory purposes.',
  },
  {
    title: 'HDPE Liner Quality Consultancy',
    description: 'Specialist support for liner system quality, installation assurance, inspection planning, and defect prevention.',
    icon: 'liner',
    overview: 'Specialist QA/QC consultancy for HDPE geomembrane liner systems, covering pre-installation planning, contractor qualification, installation inspection, non-destructive weld testing, and regulatory compliance documentation.',
    scope: 'Contractor and installer qualification review. Welding procedure qualification and trial weld assessment. Subgrade acceptance inspection. Liner deployment and seam welding oversight. 100% non-destructive weld testing — vacuum box, air pressure channel, and spark testing. Destructive test witnessing. Defect identification, repair, and re-test management. As-installed documentation.',
    standards: 'GRI GM6, GRI GM19, ASTM D6392, ASTM D4437, project specification, and applicable environmental regulatory requirements.',
    deliverables: 'Inspection and test records, weld test results, non-conformance reports, repair records, and as-installed quality completion documentation.',
    typicalProjects: 'Mining gypsum stack liner installation, environmental containment liner QA/QC, tailings facility liner inspection, chemical containment bund liner projects, and industrial effluent pond liner works.',
    benefits: 'Ensures the liner system is installed defect-free to the design specification. Provides regulatory-compliant quality documentation and reduces long-term environmental liability.',
  },
  {
    title: 'Geotextile & Geomembrane Inspection',
    description: 'Field and technical inspection support for geosynthetic installations, integrity, and performance verification.',
    icon: 'geotextile',
    overview: 'Field inspection and quality assurance for geotextile and geomembrane installations, covering material conformance verification, installation compliance, overlap and anchorage inspection, and layer-by-layer acceptance.',
    scope: 'Material delivery and conformance certificate review. Installation sequence and methodology inspection. Overlap, seam, and anchorage compliance verification. Hold point inspections at each layer. Defect identification and rework management. Installation documentation and acceptance records.',
    standards: 'GRI GT series standards, ASTM D series geosynthetics standards, project specification, and applicable regulatory requirements.',
    deliverables: 'Material conformance records, layer inspection reports, non-conformance and rework records, and installation completion documentation.',
    typicalProjects: 'Mining liner system geosynthetic inspection, environmental containment geotextile quality oversight, bi-planar and tri-planar geocomposite installation inspection, and geosynthetic drainage layer verification.',
    benefits: 'Provides layer-by-layer quality assurance before subsequent layers are placed. Prevents incorrect installation that cannot be corrected after burial and ensures the composite system performs as designed.',
  },
  {
    title: 'Construction Quality Management',
    description: 'Practical quality leadership for site execution, documentation control, and project delivery oversight.',
    icon: 'qa',
    overview: 'Practical quality management support for construction projects, providing site-based quality leadership, inspection planning, team guidance, and documentation control to deliver compliant, well-documented project handover.',
    scope: 'Quality plan development and implementation. ITP preparation and management. Field inspection team guidance and oversight. Material approval co-ordination. Non-conformance management. Client and third-party inspection interface. Quality documentation control and handover pack preparation.',
    standards: 'ISO 9001, project quality management plan, client and contractor quality requirements, and applicable construction standards.',
    deliverables: 'Quality plan, ITPs, inspection records, material approval register, NCR register, and quality handover documentation.',
    typicalProjects: 'Major capital project quality management, oil & gas facility construction quality oversight, mining infrastructure quality leadership, and industrial plant civil package QA/QC management.',
    benefits: 'Provides structured, experienced quality management that reduces defects, improves documentation completeness, and supports successful project handover and regulatory sign-off.',
  },
  {
    title: 'Project Documentation Review',
    description: 'Review of quality plans, method statements, ITPs, and compliance documentation for project readiness.',
    icon: 'document',
    overview: 'Technical review of project quality documentation including quality plans, method statements, inspection and test plans, and compliance submissions to ensure completeness, accuracy, and alignment with specification and regulatory requirements before construction commences.',
    scope: 'Review of contractor quality plans against contract and specification requirements. Method statement technical review. ITP review for completeness, hold point coverage, and acceptance criteria. Material submittal and approval document review. Compliance documentation gap analysis and comment.',
    standards: 'Project contract requirements, applicable construction standards (ASTM, ACI, BS EN), client quality requirements, and regulatory compliance requirements.',
    deliverables: 'Document review comments, marked-up submissions, gap analysis reports, and recommendation letters for approval or revision.',
    typicalProjects: 'Pre-construction quality readiness reviews, contractor qualification submissions, capital project documentation audits, and pre-start quality gate assessments.',
    benefits: 'Identifies documentation deficiencies before construction starts, preventing quality failures during execution. Provides independent verification that contractor plans are fit for purpose.',
  },
]

const engineeringExpertise = [
  { title: 'Concrete Technology', description: 'Durability, mix design oversight, and performance-based concrete quality strategy.' },
  { title: 'Repair Materials', description: 'Selection and review of Sika, Fosroc, and other repair mortars, grouts, polymer systems, and protective products.' },
  { title: 'Concrete Investigation', description: 'Systematic assessment of concrete structures using non-destructive testing including rebound hammer and ultrasonic pulse velocity (UPV) methods.' },
  { title: 'Crack Assessment', description: 'Detailed crack investigation and analysis including crack mapping, mechanism identification, and repair strategy development.' },
  { title: 'Epoxy Systems', description: 'Application guidance and quality assurance for bonding, anchoring, epoxy injection, and structural repair systems.' },
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

const dashboardStats = [
  { value: '25+', label: 'Years of Experience', description: 'Delivering quality leadership in engineering consultancy' },
  { value: '13', label: 'Years at Saudi Chevron', description: 'Building trust through proven project delivery' },
  { value: '1M+', label: 'm² HDPE Liner Project', description: 'Complex geosynthetic installations executed' },
  { value: '100+', label: 'Industrial Projects', description: 'Oil & gas, petrochemical, and infrastructure sectors' },
  { value: 'Expert', label: 'Civil QA/QC Leadership', description: 'Comprehensive quality management systems' },
  { value: 'Regional', label: 'Saudi Arabia Experience', description: 'Deep market knowledge and local execution expertise' },
]

const whyChooseFozulCards = [
  {
    id: 1,
    title: 'Engineering Quality',
    description: 'Independent QA/QC oversight and material approval strategies that reduce defects, prevent rework, and ensure regulatory compliance.',
    icon: 'quality',
    highlight: 'Quality Leadership',
  },
  {
    id: 2,
    title: 'Root Cause Analysis',
    description: 'Systematic investigation of failures and defects to identify underlying causes and develop corrective actions that prevent recurrence.',
    icon: 'analysis',
    highlight: 'Problem Solving',
  },
  {
    id: 3,
    title: 'Concrete Rehabilitation',
    description: 'Technical expertise in concrete crack investigation, repair strategies, and structural condition assessment for asset longevity.',
    icon: 'repair',
    highlight: 'Asset Integrity',
  },
  {
    id: 4,
    title: 'Geosynthetics Expertise',
    description: 'Specialist HDPE liner and geotextile quality assurance with non-destructive testing and layer-by-layer inspection protocols.',
    icon: 'geotextile',
    highlight: 'Technical Excellence',
  },
  {
    id: 5,
    title: 'Industrial QA/QC',
    description: 'Comprehensive quality management for oil & gas, petrochemical, and industrial projects with structured audit and compliance systems.',
    icon: 'qa',
    highlight: 'Project Delivery',
  },
  {
    id: 6,
    title: 'Practical Site Experience',
    description: 'Field-ready inspection frameworks, construction oversight, and real-world problem-solving backed by 25+ years of industrial delivery.',
    icon: 'inspection',
    highlight: 'Field Execution',
  },
]

const featuredProjects = [
  {
    id: 1,
    name: 'Ma\'aden Phosphate Company',
    title: 'Gypsum Stack Expansion Phase IV',
    location: 'Ras Al Khair, Saudi Arabia',
    industry: 'Mining & Industrial',
    scope: 'Large-scale gypsum stack expansion with HDPE liner system installation, geosynthetic layer placement, and comprehensive quality oversight.',
    role: 'Civil QA/QC Manager & Liner System Inspector',
    achievements: [
      '100% non-destructive weld testing on HDPE liner system',
      'Zero safety incidents during 18-month execution period',
      'Maintained 99.8% specification compliance',
      'Successfully managed 1M+ m² liner installation',
    ],
    technologies: ['HDPE Geomembrane', 'Geotextile', 'Quality Management Systems', 'Non-destructive Testing'],
    overview: 'Comprehensive QA/QC management for a major phosphate mining expansion project involving HDPE liner system installation across 1 million+ square meters. The project required rigorous quality oversight, environmental compliance, and precision installation management.',
    clientRequirements: 'Client specified zero-defect tolerance for the geosynthetic liner system, full traceability of materials, and environmental compliance with Saudi Arabia regulatory standards. Daily progress reporting and real-time quality feedback were critical deliverables.',
    challenges: 'Managing quality standards across an expansive site with multiple contractor teams, seasonal weather variations, and complex supplier coordination for specialized geosynthetic materials.',
    responsibilities: 'Developed and implemented comprehensive QA/QC plans, conducted daily field inspections, managed material approval and testing protocols, performed 100% non-destructive weld testing on the HDPE liner seams, and coordinated with regulatory authorities.',
    materials: 'HDPE Geomembrane (2mm), Geotextile separation and cushion layers, High-strength anchoring systems, Leachate collection systems.',
    inspectionActivities: 'Subgrade preparation verification, geotextile placement inspection, HDPE liner deployment monitoring, seam welding oversight, non-destructive testing (vacuum box and air pressure channels), post-installation documentation.',
    lessonsLearned: 'Established best practice protocols for large-area HDPE liner installation that became standard for subsequent company projects. Demonstrated critical importance of pre-construction team alignment and material supplier quality assurance.',
  },
  {
    id: 2,
    name: 'Saudi Chevron',
    title: 'Civil QA/QC and Maintenance Projects',
    location: 'Saudi Arabia',
    industry: 'Oil & Gas',
    scope: 'Long-term civil quality management for oil & gas facility maintenance, emergency repairs, and scheduled construction programs across multiple Saudi Chevron locations.',
    role: 'Senior Civil QA/QC Manager & Engineering Consultant',
    achievements: [
      '13 years of continuous engagement and client satisfaction',
      'Managed $50M+ in civil maintenance and repair programs',
      'Zero non-compliance citations in client audits',
      'Developed QA/QC protocols adopted across company operations',
    ],
    technologies: ['Quality Management Systems', 'Concrete Testing', 'Structural Assessment', 'Emergency Response Protocols'],
    overview: 'Long-standing partnership with Saudi Chevron spanning 13 years of civil quality management, emergency response, and preventive maintenance programs. Delivered quality leadership across multiple operational facilities and capital maintenance initiatives.',
    clientRequirements: 'Continuous availability for emergency response, rapid assessment of facility defects, coordination with operational teams while minimizing production downtime, and comprehensive documentation for regulatory compliance.',
    challenges: 'Balancing rigorous quality standards with operational continuity, managing emergency response timelines, and adapting to evolving facility conditions and regulatory requirements.',
    responsibilities: 'Strategic quality planning, emergency assessment and repair coordination, routine inspection programs, material approval and testing oversight, regulatory compliance management, and team training and development.',
    materials: 'Specialty repair mortars, epoxy systems, protective coatings, cementitious materials, structural reinforcement systems.',
    inspectionActivities: 'Routine facility inspections, emergency damage assessment, concrete condition surveys, protective coating system reviews, structural integrity assessments, non-conformance tracking and corrective action management.',
    lessonsLearned: 'Developed rapid-response inspection frameworks that significantly reduced emergency assessment times. Established long-term value through consistent quality delivery and proactive maintenance recommendations.',
  },
  {
    id: 3,
    name: 'Petro Rabigh',
    title: 'Industrial Construction',
    location: 'Rabigh, Saudi Arabia',
    industry: 'Petrochemical',
    scope: 'Civil works quality assurance for petrochemical facility construction including concrete placement, structural elements, and auxiliary infrastructure.',
    role: 'Civil QA/QC Inspector & Construction Oversight Lead',
    achievements: [
      'On-schedule project completion with zero safety incidents',
      'Maintained 98%+ specification compliance throughout execution',
      'Coordinated 25+ concurrent inspection activities',
      'Streamlined QA/QC approval processes reducing delays by 30%',
    ],
    technologies: ['Concrete Testing', 'Structural Inspection', 'Quality Management', 'Non-destructive Testing'],
    overview: 'Comprehensive civil quality management for a major petrochemical facility construction program. Delivered rigorous inspection protocols across concrete placement, structural assembly, and facility commissioning phases.',
    clientRequirements: 'Zero-defect tolerance for critical structural elements, rapid approval cycles to maintain construction schedule, full material traceability documentation, and alignment with ASME and client-specific standards.',
    challenges: 'Managing quality standards during accelerated construction schedules, coordinating with multiple subcontractors, and ensuring seamless handover to operational teams.',
    responsibilities: 'Concrete placement oversight and testing, structural element inspection, quality documentation management, non-conformance resolution, regulatory coordination, and final inspection and sign-off.',
    materials: 'High-performance concrete, structural steel, epoxy adhesives, protective coating systems, specialized fastening systems.',
    inspectionActivities: 'Pre-placement concrete testing, placement monitoring and documentation, post-cure strength verification, structural element dimensional checking, coating system inspection, final system commissioning verification.',
    lessonsLearned: 'Accelerated concrete testing protocols developed on this project improved overall project velocity by 25% without compromising quality standards.',
  },
  {
    id: 4,
    name: 'Sadara',
    title: 'Civil QA/QC',
    location: 'Saudi Arabia',
    industry: 'Petrochemical',
    scope: 'Quality assurance management for Sadara chemical complex civil and structural works with focus on concrete integrity and facility durability.',
    role: 'Civil QA/QC Manager & Quality Systems Lead',
    achievements: [
      'Delivered 100% regulatory compliance across all phases',
      'Managed quality systems for 500,000+ m³ concrete placement',
      'Established replicable QA/QC procedures for complex facilities',
      'Zero rework required on critical structural elements',
    ],
    technologies: ['Advanced Concrete Testing', 'Quality Systems', 'Durability Assessment', 'Environmental Monitoring'],
    overview: 'Strategic quality management for a world-scale petrochemical complex involving complex concrete systems, structural integration, and long-term durability assurance.',
    clientRequirements: 'Adherence to international quality standards (ISO 9001), full traceability of materials and testing, environmental compliance, and comprehensive documentation for regulatory approval and plant commissioning.',
    challenges: 'Managing quality across an exceptionally large and complex facility with numerous interdependent systems, coordinating with international standards bodies, and ensuring long-term asset durability.',
    responsibilities: 'Quality system development and implementation, concrete testing oversight, material approval and certification, non-conformance management, regulatory coordination, and commissioning support.',
    materials: 'Specialty concrete mixes, reinforcement systems, protective barrier systems, sealants, and durability-focused additives.',
    inspectionActivities: 'Daily concrete placement inspection, compressive strength testing, durability assessments, environmental impact monitoring, final quality certification, and long-term performance documentation.',
    lessonsLearned: 'Comprehensive quality systems developed for Sadara became industry reference models for managing complex petrochemical facility construction with international standards.',
  },
  {
    id: 5,
    name: 'Tasnee',
    title: 'Industrial Projects',
    location: 'Saudi Arabia',
    industry: 'Petrochemical & Industrial',
    scope: 'Civil QA/QC services for industrial construction projects including facility expansion, maintenance programs, and infrastructure upgrades.',
    role: 'Civil Quality Engineering Consultant',
    achievements: [
      'Supported 8+ concurrent industrial projects',
      'Maintained 97%+ average specification compliance across all projects',
      'Reduced defect-related rework by 40% through improved QA/QC protocols',
      'Developed standardized inspection checklists adopted company-wide',
    ],
    technologies: ['Quality Management', 'Industrial Inspection', 'Concrete Systems', 'Structural Assessment'],
    overview: 'Comprehensive quality engineering support for multiple industrial expansion and maintenance initiatives. Delivered consistent quality standards across diverse project types and facility types.',
    clientRequirements: 'Flexible resource allocation across multiple concurrent projects, rapid response to quality issues, alignment with evolving operational requirements, and cost-effective quality delivery.',
    challenges: 'Balancing resources across multiple concurrent projects, adapting to diverse facility requirements and operational constraints, and maintaining consistent quality standards across varied project scopes.',
    responsibilities: 'Quality planning and oversight for multiple concurrent initiatives, inspection and testing coordination, material approval management, issue resolution, and performance reporting.',
    materials: 'Diverse industrial materials including specialty concrete, structural components, protective systems, and operational infrastructure materials.',
    inspectionActivities: 'Multi-project concurrent inspections, material testing and approval, structural assessments, facility condition surveys, performance monitoring, and integrated quality reporting.',
    lessonsLearned: 'Successfully managed quality across diverse project types demonstrated the value of flexible, scalable QA/QC frameworks that can adapt to varied project requirements while maintaining rigorous quality standards.',
  },
]

const whyChooseItems = [
  { value: '25+ Years Experience', description: 'A long-standing record of engineering and quality leadership across complex industrial environments.' },
  { value: 'Industrial Projects', description: 'Practical experience supporting major oil, gas, petrochemical, and infrastructure programs.' },
  { value: 'Saudi Arabia Experience', description: 'Deep regional delivery knowledge aligned with local execution, compliance, and site expectations.' },
  { value: 'Engineering Solutions', description: 'A balance of technical reasoning, inspection discipline, and repair strategy development.' },
  { value: 'Quality Leadership', description: 'Structured systems and client-focused leadership that protect performance, safety, and value.' },
]

const credentials = [
  {
    id: 1,
    title: 'Senior Civil Engineer CV & Academic Training Certificates',
    description: 'Comprehensive CV with academic qualifications and professional training credentials',
    filename: 'Senior Civil Engineer CV & Academic ,Training Certificates (2).pdf',
    category: 'CV & Training',
  },
  {
    id: 2,
    title: 'Civil Engineering Certificate',
    description: 'Professional certification in civil engineering',
    filename: 'Civil Engineering cerificate.pdf',
    category: 'Professional',
  },
  {
    id: 3,
    title: 'Experience Certificate',
    description: 'Verification of professional experience and work history',
    filename: 'Experiance certificate .pdf',
    category: 'Experience',
  },
  {
    id: 4,
    title: 'Qualification Certificates',
    description: 'Academic and professional qualification credentials',
    filename: 'Qualification Certificates.pdf',
    category: 'Qualifications',
  },
  {
    id: 5,
    title: 'Training Certificates',
    description: 'Professional development and specialized training certifications',
    filename: 'Training Certificates.pdf',
    category: 'Training',
  },
  {
    id: 6,
    title: 'Training Certificate',
    description: 'Additional professional training and development certification',
    filename: 'training certificate .pdf',
    category: 'Training',
  },
]

const caseStudies = [
  {
    id: 1,
    title: 'Emergency Concrete Repair of a Seawater Sump During a Critical Shutdown',
    industry: 'Oil & Gas – Saudi Chevron',
    problem: 'Extensive concrete deterioration was identified inside a seawater return sump during a scheduled shutdown. The original repair specification called for epoxy patch mortar, but an active Cathodic Protection (CP) system made epoxy repair incompatible under site conditions.',
    rootCause: 'Prolonged seawater exposure caused progressive concrete deterioration. The active CP system on the structure restricted material selection and ruled out the originally specified epoxy repair mortar.',
    investigation: 'Repair constraints were reviewed against the shutdown duration. CP system configuration was assessed to determine interference risks. Available repair materials were evaluated for CP compatibility and early strength development within the available window.',
    solution: 'Cementitious repair mortar was specified in place of epoxy. Controlled halogen light curing was applied during the initial setting period to accelerate early strength gain. Curing compound was applied after initial hardening and protective coating was completed within the shutdown schedule.',
    result: 'Repair was completed successfully within the shutdown period. The sump returned to service on schedule without delaying plant startup. Repair quality and long-term durability were maintained without compromising the CP system.',
    technologies: ['Cementitious Repair Mortar', 'Halogen Light Curing', 'Cathodic Protection', 'Curing Compound', 'Protective Coating'],
    background: 'Saudi Chevron scheduled a planned plant shutdown to carry out maintenance on the seawater return sump. During the inspection phase, extensive concrete deterioration was identified requiring immediate remediation. The existing Cathodic Protection system added a critical constraint to material selection that had not been captured in the original repair specification.',
    challenge: 'The original epoxy mortar specification was incompatible with the active CP system. Switching to cementitious mortar introduced a second constraint — standard curing requires a minimum of seven days before protective coating can be applied, which risked overrunning the shutdown window and delaying plant startup.',
    technicalAssessment: 'Repair material options were reviewed against three criteria: CP system compatibility, early strength development timeline, and the total coating and reinstatement schedule within the shutdown duration. The objective was to identify a repair approach that satisfied all three constraints without compromising durability.',
    calculations: '[Curing time calculations, halogen light heat output parameters, and early strength development data to be added.]',
    repairMethod: 'Removal of all deteriorated concrete to sound substrate. Application of cementitious structural repair mortar. Controlled halogen light curing during the initial setting period. Immediate application of curing compound after initial hardening. Protective coating applied within the shutdown schedule.',
    lessonsLearned: 'Repair material selection must account for all active protection systems on the structure before specification is issued. Halogen light curing is an effective technique for accelerating early strength development in time-critical shutdown repairs when properly controlled.',
  },
  {
    id: 2,
    title: 'CFRP Strengthening of a Corroded Seawater Return Sump Wall',
    industry: 'Oil & Gas – Saudi Chevron',
    problem: 'Continuous seawater overflow from adjacent pumps caused severe deterioration of a retaining wall, including concrete delamination, reinforcement exposure, concrete spalling, and active chloride attack. The repair was required while the sump remained fully operational.',
    rootCause: 'Prolonged seawater splash zone exposure caused progressive concrete delamination and rebar corrosion. Insufficient maintenance of the protective system allowed the deterioration to advance to structural concern.',
    investigation: 'Inspection confirmed the damage was concentrated in the splash zone of the affected wall. The extent of delamination, rebar exposure, and spalling was mapped. The Cathodic Protection ribbon routing was documented as a protection requirement throughout the repair sequence.',
    solution: 'All unsound concrete was removed. Exposed reinforcement was grit blasted. The CP ribbon was protected throughout. Cementitious structural repair mortar was applied with curing compound. Full CFRP wrapping was applied to the repaired wall to restore structural capacity and provide long-term durability.',
    result: 'Structural capacity of the wall was restored without interrupting plant operations. The CFRP strengthening system provided additional confinement and long-term protection against continued chloride exposure.',
    technologies: ['CFRP Strengthening', 'Cementitious Repair Mortar', 'Cathodic Protection', 'Grit Blasting', 'Structural Rehabilitation'],
    background: 'A live seawater return sump at Saudi Chevron remained in continuous service throughout the repair. The affected retaining wall had experienced accelerated deterioration from ongoing seawater splash exposure. Structural rehabilitation was required urgently while maintaining uninterrupted plant operations.',
    challenge: 'The repair had to be executed on a live operational structure with no shutdown window. The active CP ribbon system could not be damaged during concrete removal. Full structural rehabilitation was required around continuous plant operations.',
    technicalAssessment: 'Active chloride attack and structural concrete loss were confirmed, concentrated in the splash zone. CP ribbon routing was mapped to establish safe working limits for concrete removal. CFRP was selected for its ability to restore structural capacity without added mass and its compatibility with the marine exposure environment.',
    calculations: '[CFRP laminate design calculations, including flexural capacity restoration and confinement pressure requirements, to be added.]',
    repairMethod: 'Controlled breaking to remove all delaminated and unsound concrete. Grit blasting of exposed reinforcement. Protection and reinstatement of CP ribbon system as a hold point. Cementitious repair mortar applied in layers with curing compound. CFRP sheets bonded to the full wall surface using structural epoxy resin.',
    lessonsLearned: 'CFRP is an effective structural strengthening solution for live structures where shutdown is not an option. CP ribbon protection must be treated as a documented hold point in the repair sequence to prevent damage to the corrosion protection system during concrete removal.',
  },
  {
    id: 3,
    title: 'Epoxy Grouting Repair of a Critical Reciprocating Pump Foundation',
    industry: 'Oil & Gas – Saudi Chevron',
    problem: 'Repeated cracking and uplift of epoxy grout under a critical reciprocating pump foundation. Multiple previous repair attempts had failed to provide a lasting solution and the foundation continued to deteriorate under service loading.',
    rootCause: 'The grout geometry was incorrect. Grout width was significantly greater than grout depth. This aspect ratio generated excessive tensile stress under the dynamic and cyclic vibration loads produced by the reciprocating pump, causing crack initiation and grout uplift.',
    investigation: 'The grout geometry, material properties, and dynamic loading characteristics of the reciprocating pump were investigated. Measurement of the existing grout confirmed that the width substantially exceeded the depth — an aspect ratio known to produce high tensile bending stress under cyclic loading.',
    solution: 'All damaged grout was fully removed. The grout geometry was corrected by maintaining depth while reducing width to achieve a width approximately equal to depth. Expansion joints were installed around the foundation perimeter. New epoxy grout was placed to the corrected geometry.',
    result: 'No further grout cracking was observed after implementation. The pump foundation remained stable under normal reciprocating pump operations. The geometry correction eliminated the tensile stress mechanism that had driven all previous failures.',
    technologies: ['Epoxy Grouting', 'Foundation Geometry Correction', 'Expansion Joint Installation', 'Dynamic Load Analysis', 'Root Cause Analysis'],
    background: 'A critical reciprocating pump at Saudi Chevron had experienced recurrent epoxy grout failure despite multiple repair attempts. The repeated failures were causing operational risk and escalating maintenance cost. Engineering investigation was required to identify the true root cause and develop a lasting repair solution rather than repeating the same approach.',
    challenge: 'Previous repairs had failed without the root cause being correctly identified. The challenge was to move beyond symptom-based repair and identify the engineering mechanism driving the failure cycle, then design a repair that addressed the cause rather than the symptoms.',
    technicalAssessment: 'Systematic review of grout geometry, dynamic loading characteristics of reciprocating pumps, and the mechanical behaviour of epoxy grout under cyclic tensile and compressive stress. The width-to-depth ratio of the existing grout was identified as the primary engineering driver of repeated failure.',
    calculations: '[Bending stress analysis of grout cross-section under dynamic pump loads, comparison of tensile stress for incorrect vs corrected geometry, to be added.]',
    repairMethod: 'Full removal of all deteriorated epoxy grout to expose clean foundation concrete. Reshaping of the grout void to achieve the corrected aspect ratio. Installation of perimeter expansion joints. Mixing and placement of new epoxy grout to the corrected geometry with full compaction and void-free placement.',
    lessonsLearned: 'Recurring repair failures are almost always driven by an unresolved root cause. Grout geometry — specifically the width-to-depth ratio — is a critical design parameter for reciprocating equipment foundations. Repairs that ignore the geometry will continue to fail regardless of grout material quality.',
  },
  {
    id: 4,
    title: 'HDPE Liner Quality Control – Ma\'aden Gypsum Stack Expansion Phase IV',
    industry: 'Mining – Ma\'aden Phosphate, Ras Al Khair',
    problem: 'Large-scale HDPE liner installation over the gypsum stack expansion area required a comprehensive QA/QC programme to ensure installation integrity, seam quality, and regulatory environmental compliance across the full project scope.',
    rootCause: 'The scale and complexity of the installation, combined with the critical environmental containment function of the liner system, required a structured quality programme to manage installation risk and prevent defects that could compromise long-term performance.',
    investigation: 'Contractor qualifications, welding equipment calibration, and installer competency were reviewed prior to installation. Welding procedures were assessed and qualified. An inspection and test plan was established covering all installation stages.',
    solution: 'A full-scope QA/QC programme was implemented covering subgrade acceptance, liner deployment, seam welding, non-destructive testing of all welds, anchor trench inspection, and final acceptance documentation.',
    result: 'HDPE liner installation was completed to specification with all weld testing requirements met. Regulatory documentation was completed for environmental compliance sign-off. [Specific quantities and outcomes to be added.]',
    technologies: ['HDPE Geomembrane', 'Thermal Fusion Welding', 'Vacuum Box Testing', 'Air Pressure Testing', 'Anchor Trench Inspection'],
    background: 'Ma\'aden Phosphate Gypsum Stack Expansion Phase IV required installation of an HDPE geomembrane liner system as the primary environmental containment barrier. As QA/QC Manager, independent oversight of all liner installation activities was a key project responsibility. The liner system integrity was critical to regulatory compliance and long-term environmental protection.',
    challenge: 'The scale of the installation, site environmental conditions, and the critical containment function of the liner required a rigorous quality programme that could be consistently applied across a large project area without compromising installation productivity.',
    technicalAssessment: 'Subgrade condition acceptance criteria were established. Welding procedure qualification testing was completed. Non-destructive test methods — including vacuum box, air pressure, and spark testing — were applied in accordance with the project specification and relevant standards.',
    calculations: '[Weld test acceptance criteria, testing frequency, and destructive test sample results to be added.]',
    repairMethod: 'Defects identified through non-destructive testing were repaired using approved patch or cap strip methods. All repairs were re-tested before final acceptance. Any subgrade defects identified prior to liner deployment were corrected before installation proceeded.',
    lessonsLearned: 'Contractor pre-qualification and welding procedure qualification are essential first steps for large-scale HDPE liner installations. Consistent application of NDT across all seams is the primary quality assurance tool for demonstrating liner integrity.',
  },
  {
    id: 5,
    title: 'Earthwork Compaction Optimisation and Field Density Testing (FDT)',
    industry: 'Mining – Ma\'aden Phosphate, Ras Al Khair',
    problem: 'Large-scale earthworks using SM (Silty Sand) material were being executed as the subgrade for the HDPE liner foundation. After compaction, the surface dried rapidly and became loose before Field Density Testing could be completed, creating a risk of failing density requirements across the prepared area.',
    rootCause: 'The SM material classification — approximately 90% sand content, non-plastic fines — resulted in rapid surface moisture loss under site ambient conditions. The loose surface skin was producing unrepresentative FDT readings and would not meet minimum density requirements if tested in its dried state.',
    investigation: 'Soil classification and Proctor compaction testing confirmed SM material behaviour and optimal moisture content. Field observation established the rate of surface moisture loss under ambient site conditions. The effective FDT window between compaction completion and surface drying was assessed to develop a revised procedure.',
    solution: 'A controlled field procedure was introduced: the compacted surface was lightly moistened immediately before FDT to restore representative moisture conditions. Testing was conducted before excessive drying occurred. The next earthwork layer was placed immediately after FDT approval to protect the surface.',
    result: 'The revised procedure achieved the required field density and moisture compliance across the liner foundation area. False failures caused by surface drying were eliminated. Construction productivity was maintained. [Specific density results and area coverage to be added.]',
    technologies: ['Field Density Testing (FDT)', 'Nuclear Density Gauge', 'Proctor Compaction Testing', 'SM Soil Classification', 'HDPE Foundation QA/QC'],
    background: 'Ma\'aden Gypsum Stack Expansion Phase IV required extensive earthworks to prepare the subgrade for HDPE liner installation. The large scale of the works and the specific behaviour of the SM fill material created a quality control challenge that required a practical field engineering solution. Standard FDT procedures were not producing representative results under the site conditions encountered.',
    challenge: 'The high-sand, non-plastic SM material was losing surface moisture rapidly under site ambient conditions. Standard FDT procedures applied to the dried surface were producing results that did not represent the actual compaction achieved. A practical solution was needed that maintained quality compliance without reducing construction productivity or causing unnecessary rework.',
    technicalAssessment: 'Proctor compaction testing established target density and optimal moisture content for the SM material. Field observation quantified the surface drying rate under ambient conditions. The maximum allowable time between compaction and FDT was determined to define the revised testing procedure requirements.',
    calculations: '[Target density, optimal moisture content, and field test results to be added.]',
    repairMethod: 'Where surface drying had already affected the compacted layer, the surface was lightly scarified, re-moistened to optimum, recompacted, and re-tested under the revised procedure. All subsequent compaction was managed under the new field procedure.',
    lessonsLearned: 'Material-specific behaviour must be assessed before establishing field testing procedures. SM materials with low plasticity require adapted FDT protocols to produce accurate results. Protecting the compacted surface from drying until the next lift is placed is essential practice on large liner foundation works.',
  },
  {
    id: 6,
    title: 'Bi-planar, Tri-planar and Geotextile Inspection for HDPE Liner System',
    industry: 'Mining – Ma\'aden Phosphate, Ras Al Khair',
    problem: 'The HDPE liner system for the gypsum stack expansion included multiple geosynthetic layers — bi-planar geocomposite, tri-planar geocomposite, and geotextile — each requiring independent inspection to verify material conformance, correct installation sequence, and overlap and anchorage compliance.',
    rootCause: 'The multi-layer geosynthetic system required structured inspection at each layer to prevent incorrect material placement, reversed orientation, insufficient overlap, and inadequate anchorage — any of which could compromise drainage performance or liner protection function.',
    investigation: 'Material delivery certificates were verified against the approved submittal for each geosynthetic product. Installation sequence, material orientation, overlap dimensions, and anchor trench conditions were inspected at each layer before the overlying layer was placed.',
    solution: 'A layer-by-layer inspection programme was implemented with documented hold points at each stage. Material batch certificates were checked on delivery. Installation compliance was verified and recorded before each subsequent layer was approved for placement.',
    result: 'All geosynthetic layers were installed in the correct sequence with verified material conformance, overlap compliance, and anchorage. Installation documentation was completed for regulatory and client acceptance. [Specific layer areas and inspection records to be added.]',
    technologies: ['Bi-planar Geocomposite', 'Tri-planar Geocomposite', 'Geotextile Inspection', 'Material Conformance Verification', 'Hold Point Inspection'],
    background: 'The Ma\'aden Gypsum Stack Expansion Phase IV HDPE liner system incorporated multiple geosynthetic layers beneath and above the primary HDPE geomembrane. Each layer served a specific drainage, protection, or filtration function. Independent QA/QC inspection of each layer was essential to ensure the composite system would perform as designed throughout the gypsum stack operating life.',
    challenge: 'The multi-layer geosynthetic system required inspection at each stage of installation before the next layer was deployed. Co-ordinating hold point inspections with the construction programme, verifying material conformance for multiple product types, and maintaining complete documentation across a large installation area presented a significant quality management challenge.',
    technicalAssessment: 'Material submittals for bi-planar geocomposite, tri-planar geocomposite, and geotextile were reviewed and approved prior to delivery. Conformance testing requirements, installation tolerances, and overlap and anchorage specifications were established as the basis for field inspection.',
    calculations: '[Overlap requirements, anchorage design parameters, and layer-specific installation tolerances to be added.]',
    repairMethod: 'Where inspection identified non-conforming installation — including insufficient overlap, incorrect orientation, or anchorage deficiencies — the affected areas were reworked before the next layer was permitted to proceed. Repairs were re-inspected and documented before approval.',
    lessonsLearned: 'Multi-layer geosynthetic systems require inspection hold points at every layer, not just at the final surface. Material orientation and overlap compliance must be verified in real time during installation, as correction after subsequent layers are placed is disruptive and costly.',
  },
]

// Technical Downloads & Resources
const technicalDownloads = [
  {
    id: 1,
    title: 'QA/QC Plan Template for Civil Works',
    description: 'Comprehensive quality assurance and quality control plan template for civil construction projects. Includes inspection schedules, material approval, testing requirements, and non-conformance procedures.',
    category: 'Quality Planning',
    fileType: 'PDF',
    icon: 'document',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20QA/QC%20Plan%20Template',
  },
  {
    id: 2,
    title: 'Concrete Inspection Checklist',
    description: 'Field-ready inspection checklist for concrete placement, curing, and completion. Covers workmanship, dimensional compliance, finish, and acceptance criteria.',
    category: 'Concrete QA/QC',
    fileType: 'PDF',
    icon: 'checklist',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20Concrete%20Inspection%20Checklist',
  },
  {
    id: 3,
    title: 'HDPE Liner Installation & Testing Procedure',
    description: 'Standard operating procedure for HDPE geomembrane installation, thermal fusion welding, and non-destructive weld testing. Includes specifications and acceptance criteria.',
    category: 'Geosynthetics',
    fileType: 'PDF',
    icon: 'liner',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20HDPE%20Liner%20Procedure',
  },
  {
    id: 4,
    title: 'Crack Investigation Report Template',
    description: 'Technical template for concrete crack investigation including crack mapping, mechanism assessment, and repair recommendations.',
    category: 'Concrete Investigation',
    fileType: 'Word/PDF',
    icon: 'crack',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20Crack%20Investigation%20Template',
  },
  {
    id: 5,
    title: 'Structural Condition Assessment Procedure',
    description: 'Systematic procedure for non-destructive testing and condition assessment of concrete and civil structures including rebound hammer, UPV, and half-cell potential methods.',
    category: 'Inspection Methods',
    fileType: 'PDF',
    icon: 'repair',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20Condition%20Assessment%20Procedure',
  },
  {
    id: 6,
    title: 'Non-Conformance Management System',
    description: 'Complete NCR management framework including investigation procedures, root cause analysis, corrective action tracking, and quality metrics.',
    category: 'Quality Management',
    fileType: 'Excel/PDF',
    icon: 'analysis',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20NCR%20Management%20System',
  },
  {
    id: 7,
    title: 'Material Approval & Submittal Review Standard',
    description: 'Standard procedure for material approval, submittal review, and testing coordination. Includes documentation requirements and approval workflows.',
    category: 'Material QA/QC',
    fileType: 'PDF',
    icon: 'plan',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20Material%20Approval%20Standard',
  },
  {
    id: 8,
    title: 'Inspection & Test Plan (ITP) Development Guide',
    description: 'Guidance document for developing comprehensive ITPs aligned with specification requirements, regulatory standards, and client quality expectations.',
    category: 'Quality Planning',
    fileType: 'PDF',
    icon: 'document',
    link: 'mailto:fozulur@yahoo.com?subject=Request%20ITP%20Development%20Guide',
  },
]

const featuredArticles = [
  {
    id: 1,
    title: 'Quality Management in Fast-Track Construction: Strategies for Maintaining Standards Under Schedule Pressure',
    excerpt: 'Accelerated project timelines don\'t require compromised quality. Learn proven strategies for maintaining rigorous inspection protocols while meeting aggressive construction schedules.',
    category: 'Quality Management',
    readTime: '8 min',
    date: 'Oct 2024',
    image: 'article-1',
    tags: ['Quality Assurance', 'Project Management', 'Construction'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20Fast-Track%20Construction%20Quality'
  },
  {
    id: 2,
    title: 'Non-Destructive Testing Methods for Concrete Integrity Verification: Field Application and Data Interpretation',
    excerpt: 'Comprehensive guide to selecting appropriate NDT methods for concrete assessment. Includes case studies demonstrating rebound hammer, UPV, and carbonation testing applications.',
    category: 'Technical Assessment',
    readTime: '10 min',
    date: 'Sep 2024',
    image: 'article-2',
    tags: ['NDT', 'Concrete Testing', 'Technical Assessment'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20NDT%20Methods'
  },
  {
    id: 3,
    title: 'HDPE Liner Quality and Durability: Specification Compliance and Field Verification in Middle East Environments',
    excerpt: 'Environmental factors affecting HDPE liner performance in GCC projects. Learn inspection protocols ensuring long-term durability in demanding climate conditions.',
    category: 'Materials & Durability',
    readTime: '7 min',
    date: 'Aug 2024',
    image: 'article-3',
    tags: ['HDPE', 'Materials', 'Environmental Durability'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20HDPE%20Liner%20Quality'
  },
  {
    id: 4,
    title: 'Root Cause Analysis Framework: Systematic Approach to Engineering Problem Resolution',
    excerpt: 'Structured methodology for investigating concrete distress, material failures, and construction defects. Industry-tested process ensuring comprehensive problem understanding.',
    category: 'Engineering Analysis',
    readTime: '9 min',
    date: 'Jul 2024',
    image: 'article-4',
    tags: ['Root Cause Analysis', 'Problem Solving', 'Engineering Methodology'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20RCA%20Framework'
  },
  {
    id: 5,
    title: 'Quality Systems Integration: ISO 9001, OSHA, and ASTM Standards in Comprehensive QA/QC Programs',
    excerpt: 'Navigating multiple quality standards while maintaining operational efficiency. Learn integration strategies for complex multi-regulatory project environments.',
    category: 'Compliance & Standards',
    readTime: '11 min',
    date: 'Jun 2024',
    image: 'article-5',
    tags: ['ISO 9001', 'Standards Compliance', 'Quality Systems'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20Quality%20Systems%20Integration'
  },
  {
    id: 6,
    title: 'Transitioning from Field Execution to Senior Management: Leadership Philosophy in Quality-Driven Organizations',
    excerpt: 'Insights from 25+ years of career progression in quality management. Developing teams, establishing standards, and creating cultures of continuous improvement.',
    category: 'Leadership & Development',
    readTime: '8 min',
    date: 'May 2024',
    image: 'article-6',
    tags: ['Leadership', 'Team Development', 'Organizational Culture'],
    link: 'mailto:fozulur@yahoo.com?subject=Article%20Request%20-%20Leadership%20Philosophy'
  },
]

const clients = ['Ma\'aden', 'Saudi Chevron Phillips', 'Sadara', 'Samsung Engineering', 'L&T', 'Doosan', 'Sinopec']

const testimonials = [
  {
    id: 1,
    quote: 'Mohamed\'s quality leadership transformed our civil delivery program. His expertise in concrete testing and structural assessment significantly improved our project outcomes and team confidence.',
    name: 'Senior Project Director',
    company: 'Ma\'aden Mining',
    role: 'Project Management',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Working with him across 13 years of continuous engagement, we consistently received professional, responsive quality management. His proactive approach prevented costly defects and operational disruptions.',
    name: 'Operations Manager',
    company: 'Saudi Chevron Phillips',
    role: 'Operations & Maintenance',
    rating: 5,
  },
  {
    id: 3,
    quote: 'His mastery of HDPE liner quality assurance and durability assessment was invaluable. The inspection protocols and testing methodologies he developed are now standard across our GCC operations.',
    name: 'Engineering Manager',
    company: 'Petrochemical Infrastructure',
    role: 'Engineering & Quality',
    rating: 5,
  },
  {
    id: 4,
    quote: 'Exceptional expertise in root cause analysis and problem resolution. He transformed complex structural defects into manageable repair strategies with comprehensive technical documentation.',
    name: 'Construction Director',
    company: 'Saudi Industrial Complex',
    role: 'Construction & Delivery',
    rating: 5,
  },
  {
    id: 5,
    quote: 'His ability to maintain rigorous quality standards while accelerating project schedules was remarkable. The quality systems he implemented reduced delays and improved overall delivery.',
    name: 'Quality Assurance Lead',
    company: 'Sadara Chemical Complex',
    role: 'Quality Management',
    rating: 5,
  },
  {
    id: 6,
    quote: 'A rare combination of technical excellence and practical business acumen. He consistently delivered quality outcomes that exceeded client expectations and strengthened long-term partnerships.',
    name: 'Client Executive',
    company: 'International Engineering Firm',
    role: 'Client Relations',
    rating: 5,
  },
]

const gallery = [
  { image: engineeringPlant, title: 'Industrial Facility Delivery', label: 'Civil & Process Infrastructure' },
  { image: siteInspection, title: 'Site Inspection Excellence', label: 'Quality Audits & Field Verification' },
  { image: projectOperations, title: 'Engineering Operations', label: 'Turnaround Planning & Execution' },
]

const faqItems = [
  {
    id: 1,
    question: 'What industries and project types does your consultancy experience cover?',
    answer: 'My 25+ years of experience spans civil, petrochemical, mining, oil & gas, and industrial infrastructure sectors. I\'ve led quality management programs across construction, maintenance, turnarounds, and emergency response projects. Key expertise includes Ma\'aden mining operations, Saudi Aramco facilities, petrochemical complexes (Sadara, Petro Rabigh), and industrial plants throughout the GCC region.',
  },
  {
    id: 2,
    question: 'How do you approach quality management in fast-track or accelerated construction projects?',
    answer: 'I\'ve successfully maintained rigorous quality standards on multiple fast-track projects by developing streamlined approval processes, implementing concurrent inspection activities, and establishing clear communication protocols with construction teams. The key is balancing speed with compliance—proven through Petro Rabigh project delivery on schedule with 98%+ specification compliance.',
  },
  {
    id: 3,
    question: 'What Non-Destructive Testing (NDT) methods do you specialize in?',
    answer: 'I hold certifications in rebound hammer testing, UPV (ultrasonic pulse velocity) testing, and carbonation depth assessment. These methods are particularly valuable for concrete integrity verification, structural assessment, and durability evaluation. I\'ve applied these techniques to investigate concrete distress, verify repair effectiveness, and assess long-term durability in challenging environments.',
  },
  {
    id: 4,
    question: 'Can you help with root cause analysis for existing structural defects or material failures?',
    answer: 'Yes, I specialize in systematic root cause analysis for concrete distress, material failures, and construction defects. My approach includes comprehensive investigation, technical assessment, calculations, and development of specific repair methodologies. I\'ve successfully resolved complex structural issues across industrial and infrastructure projects with documented technical solutions.',
  },
  {
    id: 5,
    question: 'What specific expertise do you bring to HDPE liner quality and durability assessment?',
    answer: 'I have extensive experience verifying HDPE liner specification compliance, assessing durability in GCC environmental conditions, and developing long-term monitoring protocols. My expertise includes material approval, field placement verification, seam integrity assessment, and environmental durability considerations critical for projects in the Middle East region.',
  },
  {
    id: 6,
    question: 'How can I access your QA/QC templates and planning resources?',
    answer: 'I provide downloadable templates including QA/QC plan templates, concrete inspection checklists, HDPE liner procedures, and ITP development guides. These resources can be requested through the Technical Downloads section or by contacting me directly. Custom templates adapted to specific project requirements are also available.',
  },
  {
    id: 7,
    question: 'What standards and certifications guide your quality management approach?',
    answer: 'My consultancy operates within ISO 9001 quality management systems, OSHA safety standards, ASTM material specifications, ACI concrete standards, and industry-specific NDT certifications. I ensure alignment with all relevant regulatory frameworks and can integrate multiple standards for complex multi-regulatory project environments.',
  },
  {
    id: 8,
    question: 'How do you typically structure consulting engagements?',
    answer: 'Engagements are customized based on project needs and can include: full-time on-site quality management, focused technical assessments, root cause investigation programs, quality systems development, training and team development, and advisory roles. I work closely with project teams to understand objectives and develop tailored solutions.',
  },
]

const homepageFeaturedProjects = [
  {
    id: 1,
    title: 'Ma\'aden Phosphate Gypsum Stack Expansion Phase IV',
    status: 'Current Project',
    location: 'Ras Al Khair, Saudi Arabia',
    industry: 'Mining & Industrial',
    description: 'Large-scale HDPE liner system installation with comprehensive QA/QC oversight across 1M+ m² expansion. 100% non-destructive weld testing and zero safety incidents.',
    highlights: [
      '1M+ m² HDPE liner installation',
      '100% non-destructive weld testing',
      '99.8% specification compliance',
      'Zero safety incidents',
    ],
    role: 'Civil QA/QC Manager & Liner System Inspector',
    technologies: ['HDPE Geomembrane', 'Geosynthetics', 'NDT', 'Quality Management'],
    link: '#case-studies',
  },
  {
    id: 2,
    title: 'Saudi Chevron – Concrete Investigation & Repair Consultancy',
    status: '13+ Years Engagement',
    location: 'Multiple Saudi Facilities',
    industry: 'Oil & Gas',
    description: 'Long-term civil quality management partnership covering maintenance, emergency response, and construction programs. Managed $50M+ in civil programs.',
    highlights: [
      '13 years continuous engagement',
      '$50M+ civil programs managed',
      'Zero audit non-compliances',
      'Rapid-response inspection protocols',
    ],
    role: 'Senior Civil QA/QC Manager',
    technologies: ['Concrete Testing', 'Structural Assessment', 'Emergency Response', 'Quality Systems'],
    link: '#case-studies',
  },
  {
    id: 3,
    title: 'Petrochemical & Industrial QA/QC Projects Portfolio',
    status: 'Multiple Engagements',
    location: 'Saudi Arabia & GCC Region',
    industry: 'Petrochemical & Industrial',
    description: 'Comprehensive quality assurance across Sadara chemical complex, Petro Rabigh petrochemical facility, and major industrial infrastructure programs.',
    highlights: [
      'Petrochemical facility commissioning',
      '98%+ specification compliance',
      'Zero-defect tolerance projects',
      'Multi-contractor coordination',
    ],
    role: 'Civil QA/QC Manager & Quality Systems Lead',
    technologies: ['ASME Standards', 'Process Safety', 'Material Inspection', 'Quality Systems'],
    link: '#case-studies',
  },
  {
    id: 4,
    title: 'FAHEEM Engineering Consultancy – Future Vision',
    status: 'Strategic Initiative',
    location: 'Saudi Arabia',
    industry: 'Engineering Consultancy',
    description: 'Building comprehensive engineering consultancy focused on quality leadership, asset integrity, and premium project delivery across industrial sectors.',
    highlights: [
      'Thought leadership platform',
      'Technical resource library',
      'Industry partnership network',
      'Training & development programs',
    ],
    role: 'Founder & Principal Consultant',
    technologies: ['Consultancy Services', 'Knowledge Management', 'Team Development', 'Industry Standards'],
    link: '#contact',
  },
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

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null

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
            <h2>{project.name}</h2>
            <p className="modal-subtitle">{project.title}</p>
            <div className="modal-meta">
              <span className="modal-badge">{project.industry}</span>
              <span className="modal-badge">{project.location}</span>
            </div>
          </div>

          <div className="modal-body">
            <section className="modal-section">
              <h3>Project Overview</h3>
              <p>{project.overview}</p>
            </section>

            <section className="modal-section">
              <h3>Client Requirements</h3>
              <p>{project.clientRequirements}</p>
            </section>

            <section className="modal-section">
              <h3>Engineering Challenges</h3>
              <p>{project.challenges}</p>
            </section>

            <section className="modal-section">
              <h3>My QA/QC Responsibilities</h3>
              <p>{project.responsibilities}</p>
            </section>

            <section className="modal-section">
              <h3>Materials & Specifications</h3>
              <p>{project.materials}</p>
            </section>

            <section className="modal-section">
              <h3>Inspection & Testing Activities</h3>
              <p>{project.inspectionActivities}</p>
            </section>

            <section className="modal-section">
              <h3>Key Achievements</h3>
              <ul className="achievements-list">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </section>

            <section className="modal-section">
              <h3>Lessons Learned & Best Practices</h3>
              <p>{project.lessonsLearned}</p>
            </section>

            <section className="modal-section">
              <h3>Technologies & Methodologies</h3>
              <div className="modal-tags">
                {project.technologies.map((tech) => (
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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

function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null

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
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

          <div className="modal-header">
            <h2>{service.title}</h2>
            <div className="modal-meta">
              <span className="modal-badge">Engineering Consultancy Service</span>
            </div>
          </div>

          <div className="modal-body">
            <section className="modal-section">
              <h3>Service Overview</h3>
              <p>{service.overview}</p>
            </section>

            <section className="modal-section">
              <h3>Scope of Work</h3>
              <p>{service.scope}</p>
            </section>

            <section className="modal-section">
              <h3>Engineering Standards</h3>
              <p>{service.standards}</p>
            </section>

            <section className="modal-section">
              <h3>Deliverables</h3>
              <p>{service.deliverables}</p>
            </section>

            <section className="modal-section">
              <h3>Typical Projects</h3>
              <p>{service.typicalProjects}</p>
            </section>

            <section className="modal-section">
              <h3>Benefits to Clients</h3>
              <p>{service.benefits}</p>
            </section>
          </div>

          <div className="modal-footer">
            <button type="button" className="button button-primary" onClick={onClose}>Close</button>
            <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">
              Enquire About This Service
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
  const [selectedService, setSelectedService] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false)
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [faqExpanded, setFaqExpanded] = useState(null)
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

      <motion.section
        className="section"
        id="dashboard"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Engineering Dashboard"
          title="Proven expertise spanning 25+ years in industrial engineering"
          subtitle="Comprehensive quality leadership and specialized technical expertise delivered across global industrial and infrastructure projects."
        />

        <div className="dashboard-grid">
          {dashboardStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="dashboard-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="dashboard-value">{stat.value}</div>
              <h3 className="dashboard-label">{stat.label}</h3>
              <p className="dashboard-description">{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="why-fozul"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Why Choose Fozul Engineering"
          title="Technical expertise meets practical site experience"
          subtitle="Comprehensive engineering consultancy with proven results across oil & gas, petrochemical, industrial, and infrastructure sectors."
        />

        <div className="why-fozul-grid">
          {whyChooseFozulCards.map((card, index) => (
            <motion.article
              key={card.id}
              className="why-fozul-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="why-fozul-header">
                <div className="why-fozul-highlight">{card.highlight}</div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

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
            eyebrow="Executive Profile"
            title="International Engineering Quality Leader"
            subtitle="25+ years of proven expertise transforming quality operations across oil & gas, petrochemical, industrial, and infrastructure sectors."
          />

          {/* Executive Summary Card */}
          <motion.div
            className="executive-profile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-header">
              <div className="profile-image">
                <img src={profilePhoto} alt="Mohamed Haneefa Fozul Rahuman" />
              </div>
              <div className="profile-info">
                <h2>Mohamed Haneefa Fozul Rahuman</h2>
                <p className="profile-title">QA/QC Manager | Engineering Quality Consultant</p>
                <p className="profile-summary">{aboutMeData.summary}</p>
                <div className="profile-cta">
                  <a className="button button-primary" href="mailto:fozulur@yahoo.com">Get in Touch</a>
                  <a className="button button-secondary" href="https://www.linkedin.com/in/mohamed-haneefa-fozul-rahuman" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                </div>
              </div>
            </div>

            <div className="profile-statement">
              <p className="statement-label">Professional Mission</p>
              <p>{aboutMeData.professionalStatement}</p>
            </div>

            <div className="profile-value">
              <p className="value-label">Core Philosophy</p>
              <p className="value-quote">"{aboutMeData.coreValue}"</p>
            </div>
          </motion.div>

          {/* Core Competencies Section */}
          <div className="about-section">
            <h3 className="section-subtitle">Core Competencies</h3>
            <div className="competencies-grid">
              {coreCompetencies.map((category, index) => (
                <motion.div
                  key={category.category}
                  className="competency-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4>{category.category}</h4>
                  <ul className="skill-list-items">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <span className="skill-dot">●</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Background */}
          <div className="about-section">
            <h3 className="section-subtitle">Professional Background</h3>
            <div className="background-timeline">
              {professionalBackground.map((role, index) => (
                <motion.div
                  key={role.title}
                  className="background-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="background-header">
                    <p className="background-period">{role.period}</p>
                    <h4>{role.title}</h4>
                    <p className="background-company">{role.company}</p>
                    <p className="background-location">{role.location}</p>
                  </div>
                  <p className="background-description">{role.description}</p>
                  <ul className="background-achievements">
                    {role.achievements.map((achievement) => (
                      <li key={achievement}>
                        <span className="check-mark">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Standards */}
          <div className="about-section">
            <h3 className="section-subtitle">Professional Certifications & Standards</h3>
            <div className="certifications-display">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  className="certification-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span className="cert-icon">🏆</span>
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="about-stats">
            <div className="stats-grid">
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>25+</h3>
                <p>Years of Experience</p>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3>13</h3>
                <p>Years at Saudi Chevron</p>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>100+</h3>
                <p>Industrial Projects</p>
              </motion.div>
              <motion.div
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3>$50M+</h3>
                <p>Managed Programs</p>
              </motion.div>
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
                <button
                  type="button"
                  className="knowledge-link service-link"
                  onClick={() => {
                    setSelectedService(item)
                    setShowServiceModal(true)
                  }}
                >
                  Learn More
                </button>
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
          id="featured-projects-home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Featured Projects"
            title="Key engagements across mining, oil & gas, and industrial sectors"
            subtitle="Current projects and long-term partnerships demonstrating quality leadership and technical expertise."
          />

          <div className="featured-projects-grid">
            {homepageFeaturedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="featured-project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                <div className="project-header">
                  <div className="project-status-badge">{project.status}</div>
                  <span className="project-industry">{project.industry}</span>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p className="project-location">
                    📍 {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-highlights">
                    <p className="highlights-label">Key Achievements:</p>
                    <ul className="highlights-list">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-role">
                    <p className="role-label">My Role:</p>
                    <p className="role-value">{project.role}</p>
                  </div>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="button button-primary"
                >
                  Learn More
                </a>
              </motion.article>
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
          id="credentials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Professional Credentials"
            title="Verified qualifications, certifications, and professional documentation"
            subtitle="Access to downloadable credentials including academic qualifications, professional certifications, and work experience verification."
          />

          <div className="credentials-grid">
            {credentials.map((cred, index) => (
              <motion.article
                key={cred.id}
                className="credential-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="credential-category">{cred.category}</div>
                <h3>{cred.title}</h3>
                <p>{cred.description}</p>
                <a href={`/credentials/${cred.filename}`} download className="credential-download">
                  <span>📥 Download PDF</span>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="projects-featured"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Featured Projects"
            title="Industrial engineering excellence across oil & gas, petrochemical, and mining sectors"
            subtitle="Delivering comprehensive QA/QC management and civil engineering solutions for world-scale projects in Saudi Arabia."
          />

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <p className="project-subtitle">{project.title}</p>
                </div>

                <div className="project-meta">
                  <span className="project-industry">{project.industry}</span>
                  <span className="project-location">{project.location}</span>
                </div>

                <div className="project-details">
                  <div className="project-detail-item">
                    <p className="detail-label">My Role</p>
                    <p className="detail-value">{project.role}</p>
                  </div>

                  <div className="project-detail-item">
                    <p className="detail-label">Scope of Work</p>
                    <p className="detail-value">{project.scope}</p>
                  </div>

                  <div className="project-detail-item">
                    <p className="detail-label">Key Technologies</p>
                    <div className="tech-tags">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="tech-tag">+{project.technologies.length - 2} more</span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  className="project-view-button"
                  onClick={() => {
                    setSelectedProject(project)
                    setShowProjectModal(true)
                  }}
                >
                  View Project Details →
                </button>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="case-studies"
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
          id="technical-downloads"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Technical Resources"
            title="Professional templates and operational procedures for quality management"
            subtitle="Downloadable tools and frameworks developed from field experience across industrial and infrastructure projects."
          />

          <div className="downloads-grid">
            {technicalDownloads.map((download, index) => (
              <motion.article
                key={download.id}
                className="download-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="download-header">
                  <div className="download-icon">
                    <PremiumIcon name={download.icon} />
                  </div>
                  <span className="download-category">{download.category}</span>
                </div>

                <div className="download-content">
                  <h3>{download.title}</h3>
                  <p>{download.description}</p>
                </div>

                <div className="download-footer">
                  <span className="file-type">{download.fileType}</span>
                  <a
                    href={download.link}
                    className="button button-secondary button-small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request Resource
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="downloads-cta">
            <p>Need additional resources or custom templates?</p>
            <a className="button button-primary" href="mailto:fozulur@yahoo.com?subject=Request%20Custom%20Resources">
              Get in Touch
            </a>
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="featured-articles"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Thought Leadership"
            title="Engineering insights and quality management perspectives"
            subtitle="Articles on quality systems, technical assessment, problem-solving methodologies, and leadership in engineering environments."
          />

          <div className="articles-grid">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                className="article-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div className="article-header">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>

                <div className="article-content">
                  <span className="article-category">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={article.link}
                    className="button button-secondary button-small"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Request Article
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Client Recognition"
            title="What clients and project partners say about our collaboration"
            subtitle="Testimonials from senior leaders across international petrochemical, mining, and industrial infrastructure projects."
          />

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>

                <p className="testimonial-quote">{testimonial.quote}</p>

                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section"
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionAnimation}
        >
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Common questions about consultancy services and expertise"
            subtitle="Find answers about our approach, methods, industries, and how we can support your quality and engineering initiatives."
          />

          <div className="faq-container">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="faq-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => {
                    setFaqExpanded(
                      faqExpanded === item.id ? null : item.id
                    )
                  }}
                >
                  <span>{item.question}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: faqExpanded === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {faqExpanded === item.id && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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

      <ServiceModal
        service={selectedService}
        isOpen={showServiceModal}
        onClose={() => {
          setShowServiceModal(false)
          setSelectedService(null)
        }}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={showProjectModal}
        onClose={() => {
          setShowProjectModal(false)
          setSelectedProject(null)
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
