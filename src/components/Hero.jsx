import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Custom 3D Websites, Software and Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg leading-relaxed text-blue-100"
          >
            SoftScribble crafts interactive, playful and modern experiences that feel alive. We blend design, 3D and code to ship beautiful, performant products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#contact" className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Start a Project</a>
            <a href="#work" className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 transition">See Work</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-blue-100/80">
            <div>
              <p className="text-3xl font-bold text-white">50+ </p>
              <p className="text-sm">Projects shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3D </p>
              <p className="text-sm">Interactive hero</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">A+ </p>
              <p className="text-sm">Perf. focused</p>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] w-full md:h-[70vh]">
          <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-slate-900/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" />
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}

export default Hero
