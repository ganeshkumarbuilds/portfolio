import { certifications, hackathons } from '../data/portfolioData'

function CertificateList({ heading, entries }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold">{heading}</h3>
      <ul className="grid gap-3">
        {entries.map(({ title, org, date, link }) => (
          <li key={title} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 rounded border border-line bg-card p-4">
            <div>
              <h4 className="text-sm font-semibold text-ink">{title}</h4>
              <p className="mt-1 text-sm text-muted">{org}</p>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
              <span>{date}</span>
              <a className="underline underline-offset-4" href={link} target="_blank" rel="noopener noreferrer" aria-label={'View certificate for ' + title}>View certificate</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line py-12">
      <div className="shell grid gap-6">
        <h2>Certifications &amp; Hackathons</h2>
        <CertificateList heading="Course certifications" entries={certifications} />
        <CertificateList heading="Hackathon participation" entries={hackathons} />
      </div>
    </section>
  )
}
