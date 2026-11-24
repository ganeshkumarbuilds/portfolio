import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-12">
      <div className="shell">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-serif text-2xl font-semibold text-ink">Skills</h2>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded border border-line sm:grid-cols-2">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className={`border-b border-line bg-card p-5 sm:border-r ${
                i % 2 === 1 ? 'sm:border-r-0' : ''
              }`}
            >
              <h3 className="mb-2 font-mono text-sm font-medium text-steel">{s.title}</h3>
              <div className="text-sm leading-relaxed text-inksoft">{s.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}