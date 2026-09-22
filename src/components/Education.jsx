import { education, outreach } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="border-b border-line py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">05</span>
          <h2 className="font-serif text-2xl font-semibold text-ink">Education</h2>
        </div>

        {education.map((e) => (
          <div key={e.title} className="mb-4">
            <h3 className="text-base font-semibold text-ink">{e.title}</h3>
            <div className="mt-0.5 text-sm text-muted">{e.meta}</div>
          </div>
        ))}

        <div>
          <h3 className="text-base font-semibold text-ink">{outreach.title}</h3>
          <div className="mt-0.5 text-sm text-muted">{outreach.date}</div>
          <p className="mt-1.5 max-w-2xl text-sm text-inksoft">{outreach.desc}</p>
        </div>
      </div>
    </section>
  )
}