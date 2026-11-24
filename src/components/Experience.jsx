import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-12">
      <div className="shell">
        <div className="mb-6 flex items-baseline gap-3">
          <h2 className="font-serif text-2xl font-semibold text-ink">Experience</h2>
        </div>

        {experience.map((xp) => (
          <div key={xp.role} className="grid grid-cols-1 gap-1.5 sm:grid-cols-[140px_1fr] sm:gap-5">
            <div className="pt-1 font-mono text-sm text-muted">{xp.date}</div>
            <div>
              <h3 className="text-lg font-semibold text-ink">{xp.role}</h3>
              <div className="mb-2.5 font-medium text-steel">{xp.org}</div>
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-inksoft marker:text-gold">
                {xp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}