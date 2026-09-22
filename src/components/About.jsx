import { profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="border-b border-line py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-6 flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted">01</span>
          <h2 className="font-serif text-2xl font-semibold text-ink">About</h2>
        </div>
        <p className="max-w-2xl text-base text-inksoft">{profile.about}</p>
      </div>
    </section>
  )
}