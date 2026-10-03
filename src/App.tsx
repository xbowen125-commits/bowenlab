import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LabLog } from './components/LabLog'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Research } from './components/Research'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Research />
        <LabLog />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
