import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">02</span>
          <h2 className="font-serif text-2xl font-semibold text-ink">Projects</h2>
        </div>

        <div className="space-y-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="relative rounded-sm border border-line bg-card p-6 before:absolute before:-left-px before:-top-px before:h-3.5 before:w-3.5 before:border-l-2 before:border-t-2 before:border-gold before:content-[''] after:absolute after:-bottom-px after:-right-px after:h-3.5 after:w-3.5 after:border-b-2 after:border-r-2 after:border-gold after:content-['']"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-serif text-xl font-semibold text-ink">{p.name}</h3>
                <div className="flex gap-3.5 whitespace-nowrap font-mono text-sm">
                  <a href={p.github} target="_blank" rel="noopener">GitHub</a>
                  <a href={p.demo} target="_blank" rel="noopener">Live demo</a>
                </div>
              </div>
              <div className="my-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-steel/30 bg-steel/10 px-2 py-0.5 font-mono text-xs text-steel"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-inksoft marker:text-gold">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}