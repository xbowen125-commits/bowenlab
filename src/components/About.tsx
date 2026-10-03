export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-aside reveal">
        <span className="section-index">04</span><p className="kicker">About the Lab</p>
        <div className="about-coordinate"><span>BASE</span><strong>BEIJING</strong><small>CHINA / GMT+8</small></div>
      </div>
      <div className="about-content reveal">
        <p className="about-lead">I’m Bowen, an Information Engineering student at Beijing University of Posts and Telecommunications.</p>
        <p>I build AI systems and explore intelligent agents, spatial computing and human-AI interaction.</p>
        <a href="mailto:hello@bowenlab.si" className="text-link">Start a conversation <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
