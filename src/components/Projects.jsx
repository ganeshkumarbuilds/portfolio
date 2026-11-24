import { projects } from '../data/portfolioData'

function ProjectIllustration({ type }) {
  return (
    <div className={'illustration ' + type} aria-hidden="true">
      <svg viewBox="0 0 320 140" fill="none" stroke="currentColor" strokeWidth="1.6">
        {type === 'health' && <g>
          <rect x="97" y="21" width="126" height="96" rx="9" fill="#e0f1e9"/><path d="M97 45h126" /><circle cx="110" cy="33" r="2" fill="currentColor"/><path d="M119 33h19"/>
          <path d="M78 85h50l10-15 12 28 14-44 13 31h65" strokeWidth="3" strokeLinejoin="round"/>
        </g>}
        {type === 'forest' && <g strokeLinejoin="round">
          <path d="M93 45V28h20m94 0h20v17m0 50v17h-20m-94 0H93V95"/>
          <path d="M115 94l24-41 24 41z" fill="#d6ded0"/><path d="M142 96l28-55 28 55z" fill="#bdcdb7"/><path d="M178 95l15-28 15 28z" fill="#e6ecde"/><path d="M170 83v19m-31-17v17m54-15v15"/>
          <path d="M85 74h150" strokeDasharray="4 5"/>
        </g>}
        {type === 'learning' && <g strokeLinejoin="round">
          <path d="M122 68v23q38 29 76 0V68" fill="#ded6ef"/>
          <path d="m96 60 64-29 64 29-64 29z" fill="#ece7fa"/>
          <path d="m160 60 55 4v28"/><circle cx="215" cy="95" r="3" fill="currentColor"/>
        </g>}
      </svg>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="work-section">
      <div className="shell">
        <h2>Selected projects</h2>
        <div className="project-grid">{projects.map(p => (
          <article className="project" key={p.name}>
            <ProjectIllustration type={p.type}/>
            <div className="project-body"><h3>{p.name}</h3><p>{p.summary}</p>
              <ul className="tags" aria-label="Technologies">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
              <div className="project-links"><a href={p.demo} aria-label={p.name + ' live demo'}>Live demo ↗</a><a href={p.github} aria-label={p.name + ' source code'}>Source code ↗</a></div>
            </div>
          </article>
        ))}</div>
      </div>
    </section>
  )
}
