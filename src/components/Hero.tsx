export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span>Independent Research & Engineering</span><span>EST. 2026</span></div>
        <h1>Building Intelligent<br />Systems.</h1>
        <p className="hero-subtitle">Across AI, Agents and Spatial Computing.</p>
        <p className="hero-description">Bowen Lab is a personal technology lab focused on building practical intelligent systems and exploring new forms of human-AI interaction.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore Projects <span aria-hidden="true">↓</span></a>
          <a className="button button-secondary" href="https://github.com" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="system-visual reveal reveal-delay" aria-hidden="true">
        <div className="visual-label label-top">INTELLIGENCE / 01</div>
        <div className="orbit orbit-outer"><i /><i /><i /></div>
        <div className="orbit orbit-inner"><i /><i /></div>
        <div className="visual-core"><span>B</span><small>SYSTEM<br />ONLINE</small></div>
        <div className="axis axis-x" /><div className="axis axis-y" />
        <div className="visual-label label-bottom">39.9042° N<br />116.4074° E</div>
      </div>
      <div className="hero-meta"><span>BOWEN LAB</span><span>BEIJING / CN</span><span>AI · AGENTS · SPATIAL</span></div>
    </section>
  )
}
