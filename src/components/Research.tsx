const directions = [
  ['Spatial Intelligence', 'Intelligence that understands, reasons about and acts within physical and virtual space.'],
  ['Multimodal Interaction', 'Systems that perceive and communicate through vision, voice and natural behavior.'],
  ['AI Agents', 'Goal-directed software capable of reasoning, using tools and adapting over time.'],
  ['LLM Systems', 'Practical model infrastructure, inference pipelines and dependable AI applications.'],
  ['NPC Memory & Behavior', 'Persistent characters shaped by memory, context and evolving relationships.'],
  ['Human-AI Interaction', 'New interaction patterns that make intelligent systems useful, legible and humane.'],
]

export function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="section-heading reveal">
        <div><span className="section-index">02</span><p className="kicker">Research Map</p></div>
        <div><h2>Explorations</h2><p>Questions guiding the lab’s current work.</p></div>
      </div>
      <div className="research-list">
        {directions.map(([title, description], index) => (
          <article className="research-row reveal" key={title}><span className="research-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="research-glyph" aria-hidden="true">＋</span></article>
        ))}
      </div>
    </section>
  )
}
