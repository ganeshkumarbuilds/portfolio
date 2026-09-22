import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <Hero />
      <main>
        <About />
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