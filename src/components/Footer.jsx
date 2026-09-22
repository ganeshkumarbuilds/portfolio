import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer id="contact" className="py-10 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 font-serif text-2xl font-semibold text-ink">Let's talk</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          <a href={'mailto:' + profile.email}
            className="rounded border border-gold bg-gold px-3.5 py-1.5 text-sm font-semibold text-[#241B08] hover:bg-goldsoft hover:no-underline"
          >
            {profile.email}
          </a>
          <span className="rounded border border-line bg-card px-3.5 py-1.5 text-sm text-inksoft">
            {profile.phone}
          </span>
          <a href={profile.github}
            target="_blank"
            rel="noopener"
            className="rounded border border-line bg-card px-3.5 py-1.5 text-sm text-inksoft hover:border-steel hover:text-steel hover:no-underline"
          >
            GitHub
          </a>
          <a href={profile.linkedin}
            target="_blank"
            rel="noopener"
            className="rounded border border-line bg-card px-3.5 py-1.5 text-sm text-inksoft hover:border-steel hover:text-steel hover:no-underline"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-5 text-xs text-muted">
          {profile.name} {profile.location}
        </div>
      </div>
    </footer>
  )
}
