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
        {type === 'code' && <g>
          <path d="M107 70h32q13 0 13-13V46q0-10 11-10h26m-50 34q13 0 13 13v11q0 10 11 10h26"/>
          <rect x="73" y="51" width="41" height="38" rx="8" fill="#ece7fa"/><path d="m90 63-7 7 7 7m8-14 7 7-7 7"/>
          {[36,104].map(y => <g key={y}><rect x="188" y={y-16} width="51" height="32" rx="7" fill="#ece7fa"/><path d={`m204 ${y} 6 6 12-13`} strokeWidth="2.5"/></g>)}
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
