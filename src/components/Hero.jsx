export default function Hero({ feLogo, profilePhoto }) {
  return (
    <header id="home" className="hero-section">
      <div className="hero-copy">
        <div className="brand-mark">
          <img src={feLogo} alt="FAHEEM Engineering Consultancy FE logo" loading="eager" />
          <div>
            <p className="brand-kicker">FAHEEM Engineering Consultancy</p>
            <h2>International Engineering Consultancy</h2>
          </div>
        </div>
        <p className="eyebrow">Professional Engineering Consultancy</p>
        <h1>Engineering Confidence for Critical Infrastructure</h1>
        <p className="hero-subtitle">
          FAHEEM Engineering Consultancy provides premium QA/QC, inspection, construction quality management, and engineering advisory solutions across industrial sectors.
        </p>
      </div>

      <div className="hero-panel">
        <div className="photo-frame">
          <img src={profilePhoto} alt="Leadership portrait" loading="eager" />
        </div>
      </div>
    </header>
  )
}
