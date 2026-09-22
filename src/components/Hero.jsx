import { profile, pipeline } from '../data/portfolioData'

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-line bg-gradient-to-b from-paper to-paper2">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(#15233E0d 1px, transparent 1px), linear-gradient(90deg, #15233E0d 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="relative mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:gap-12 md:py-20">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded border border-line bg-card px-3 py-1 font-mono text-xs text-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
            Open to Software Engineer roles
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <div className="mt-2 font-serif text-xl italic text-steel">{profile.role}</div>
          <p className="mt-4 max-w-md text-inksoft">{profile.tagline}</p>
<div className="mt-6 flex flex-wrap gap-2.5">
            
            <a href={'mailto:' + profile.email}
               className="rounded border border-gold bg-gold px-3.5 py-1.5 text-sm font-semibold text-[#241B08] hover:bg-goldsoft hover:no-underline"
             >
               Email me
             </a>
            
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
            <span className="rounded border border-line bg-card px-3.5 py-1.5 text-sm text-inksoft">
              {profile.location}
            </span>
          </div>
        </div>

        <div className="rounded border border-line bg-card p-5">
          <div className="mb-4 font-mono text-xs text-muted">// how i work on most projects</div>
          <div className="flex flex-col">
            {pipeline.map((stage, i) => (
              <div key={stage.label} className="relative flex gap-3.5 pb-5 last:pb-0">
                {i < pipeline.length - 1 && (
                  <span className="absolute left-[5px] top-4 bottom-[-6px] w-px bg-line"></span>
                )}
                <span
                  className={
                    'relative z-10 mt-1 h-2.5 w-2.5 flex-none rounded-full border-2 bg-paper ' +
                    (stage.accent ? 'border-gold' : 'border-steel')
                  }
                ></span>
                <div>
                  <div className="font-semibold text-ink">{stage.label}</div>
                  <div className="mt-0.5 text-xs text-muted">{stage.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}