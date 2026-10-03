
import './App.css'
import About from './components/About'
import Domains from './components/Domains'
import Events from './components/Events'
import Navbar from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Team from './components/Team'
import CTA from './components/CTA'

function App() {

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#111111]">
      <Navbar />

      <main>
        {/* Website sections will go here */}
        <Hero />
        <About />
        <Domains />
        <Events />
        <Projects />
        <Team />
        <CTA />
      </main>
    </div>
  )
}

export default App
