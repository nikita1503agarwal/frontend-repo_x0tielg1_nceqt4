import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Showcase />
        <CTA />
      </main>

      <footer id="about" className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-blue-200/80">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">© {new Date().getFullYear()} SoftScribble. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="/test" className="hover:text-white/90">System Check</a>
              <a href="#services" className="hover:text-white/90">Services</a>
              <a href="#contact" className="hover:text-white/90">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
