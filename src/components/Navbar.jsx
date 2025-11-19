import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-lg" />
              <div className="text-white">
                <p className="text-lg font-semibold tracking-tight">SoftScribble</p>
                <p className="text-[11px] -mt-1 text-blue-200/70">Custom 3D Web, Software & Apps</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-blue-100 md:flex">
              <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors">Work</button>
              <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">About</button>
              <button onClick={() => scrollTo('contact')} className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-slate-900 shadow hover:opacity-90 transition">Start a Project</button>
            </nav>

            <button className="md:hidden text-blue-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-3 sm:px-6 md:hidden">
              <div className="grid gap-2 text-sm text-blue-100">
                <button onClick={() => scrollTo('services')} className="py-2 text-left hover:text-white">Services</button>
                <button onClick={() => scrollTo('work')} className="py-2 text-left hover:text-white">Work</button>
                <button onClick={() => scrollTo('about')} className="py-2 text-left hover:text-white">About</button>
                <button onClick={() => scrollTo('contact')} className="mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-slate-900">Start a Project</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
