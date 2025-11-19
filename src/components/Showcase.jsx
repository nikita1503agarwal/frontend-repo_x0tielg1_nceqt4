import { motion } from 'framer-motion'

function Showcase() {
  const projects = [
    { title: 'Immersive Fintech Site', tag: '3D + Web App', img: 'https://images.unsplash.com/photo-1554774853-b415df9eeb92?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Playful SaaS Dashboard', tag: 'Product + Motion', img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1600&auto=format&fit=crop' },
    { title: 'AR-Ready Launch', tag: 'Marketing + 3D', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Work</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Selected projects</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
            >
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover opacity-90 transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-blue-100">{p.tag}</span>
                <p className="mt-2 text-lg font-semibold text-white">{p.title}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
