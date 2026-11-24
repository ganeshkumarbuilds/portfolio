export default function Navbar() {
  return (
    <nav aria-label="Main navigation" className="navbar">
      <div className="shell nav-inner">
        <a className="brand" href="#about"><span className="monogram">GC</span>Ganesh Chavala</a>
        <div className="nav-links">
          <a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </nav>
  )
}
