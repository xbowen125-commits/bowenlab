const entries = [
  { date: '2026.10', project: 'Spatial AI NPC', note: 'Relationship Memory v1.0' },
  { date: '2026.09', project: 'MiniLLM-Serve', note: 'Local inference experiments' },
  { date: '2026.09', project: 'Spatial AI NPC', note: 'Multimodal perception pipeline' },
]

export function LabLog() {
  return (
    <section className="section log-section" id="notes">
      <div className="section-heading reveal">
        <div><span className="section-index">03</span><p className="kicker">Recent Activity</p></div>
        <div><h2>Lab Log</h2><p>Notes from active experiments and prototypes.</p></div>
      </div>
      <div className="log-table reveal">
        <div className="log-header"><span>Date</span><span>Project</span><span>Entry</span><span>Ref.</span></div>
        {entries.map((entry, index) => (
          <article className="log-row" key={`${entry.date}-${entry.note}`}><time>{entry.date}</time><h3>{entry.project}</h3><p>{entry.note}</p><span className="log-ref">LOG-{String(index + 1).padStart(3, '0')}</span></article>
        ))}
      </div>
    </section>
  )
}
