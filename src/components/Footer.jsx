export default function Footer({ socialLinks = [] }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>FAHEEM Engineering Consultancy</h3>
          <p>Premium international engineering consultancy focused on quality, compliance, and project confidence.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">Company</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#services">Consultancy Services</a>
          <a href="#industries-we-serve">Industries We Serve</a>
          <a href="#why-choose">Why Choose FAHEEM</a>
        </div>
        <div>
          <h4>Social Media</h4>
          {socialLinks.map((link, index) => (
            <a key={`${link.label}-${index}`} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
          ))}
        </div>
      </div>
      <p className="footer-copy">© 2026 FAHEEM Engineering Consultancy | All rights reserved.</p>
    </footer>
  )
}
