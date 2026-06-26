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
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
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

const expertiseItems = [
  { icon: 'quality', title: 'Quality Management', description: 'Strategic systems that strengthen compliance, traceability, and quality culture.' },
  { icon: 'inspection', title: 'Inspection & Testing', description: 'Rigorous field and lab oversight for concrete, earthworks, liner, and geosynthetics.' },
  { icon: 'plan', title: 'Project Quality Plan', description: 'Clear quality frameworks aligned with contract, client, and consultant requirements.' },
  { icon: 'plan', title: 'ITP Preparation', description: 'Inspection test plans built for effective execution and audit readiness.' },
  { icon: 'document', title: 'Method Statements', description: 'Practical work methods that are safe, compliant, and easy to implement.' },
  { icon: 'quality', title: 'Material Approval', description: 'Controlled approval workflow for materials, submittals, and vendor release.' },
  { icon: 'inspection', title: 'Vendor Inspection', description: 'Supplier qualification and factory inspection to secure reliable project delivery.' },
  { icon: 'plan', title: 'Site Quality Audits', description: 'Structured audits that protect performance, safety, and long-term value.' },
  { icon: 'quality', title: 'Civil Construction', description: 'Hands-on leadership across infrastructure, industrial, and heavy civil works.' },
  { icon: 'document', title: 'Documentation', description: 'Complete QA/QC records, NCR tracks, and client-ready documentation packages.' },
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

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
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
          <p className="eyebrow">Civil QA/QC | Engineering Assurance | Project Delivery</p>
          <h1>Engineering excellence with uncompromising quality.</h1>
          <p className="hero-subtitle">
            Delivering premium civil QA/QC, inspection, and engineering consultancy services across oil & gas, petrochemical, industrial, and infrastructure projects worldwide.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/Mohamed_Haneefa_Fozul_Rahuman_CV.pdf" download>
              Download Resume
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Us
            </a>
          </div>
          <div className="hero-highlights">
            <span>25+ Years Experience</span>
            <span>Global Delivery</span>
            <span>QA/QC Leadership</span>
            <span>Client Trusted</span>
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
            title="Premium QA/QC leadership for complex civil and industrial projects"
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
            eyebrow="Expertise"
            title="Specialized capabilities for high-value civil quality delivery"
            subtitle="Every service is tailored to improve inspection discipline, compliance, and project performance."
          />

          <div className="card-grid">
            {expertiseItems.map((item, index) => (
              <motion.article
                key={item.title}
                className="info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="info-icon"><PremiumIcon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
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
            <a href="#projects">Projects</a>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">QA/QC Management</a>
            <a href="#services">Inspection Planning</a>
            <a href="#services">Documentation</a>
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
