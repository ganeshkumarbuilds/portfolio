export default function Navbar() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <span className="font-serif text-base font-semibold text-ink">G. K. Chavala</span>
        <div className="flex gap-4 sm:gap-6">
{links.map((link) => (
            
            <a
               key={link.href}
               href={link.href}
               className="text-sm text-inksoft hover:text-gold hover:no-underline"
             >
               {link.label}
             </a>
           ))}
        </div>
      </div>
    </nav>
  )
}