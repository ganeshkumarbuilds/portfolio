import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <Hero />
      <main id="main">
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}