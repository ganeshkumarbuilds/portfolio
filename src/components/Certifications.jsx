import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">06</span>
          <h2 className="font-serif text-2xl font-semibold text-ink">Certifications &amp; Hackathons</h2>
        </div>

        <div className="grid gap-3.5">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="flex flex-wrap items-start justify-between gap-4 rounded border border-line bg-card p-4"
            >
              <div className="min-w-[200px] flex-1">
                <div className="text-sm font-semibold text-ink">{c.title}</div>
                <div className="mt-0.5 text-xs text-muted">{c.org}</div>
              </div>
              <div className="whitespace-nowrap font-mono text-sm text-steel">
                {c.date} · <a href={c.link} target="_blank" rel="noopener">Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}