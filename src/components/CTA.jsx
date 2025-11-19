import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s build something playful and powerful</h2>
        <p className="mt-3 text-blue-100">Tell us about your idea and we’ll respond within 24 hours.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <input className="col-span-1 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
          <input className="col-span-1 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
          <button className="col-span-1 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Get in touch</button>
          <textarea className="sm:col-span-3 mt-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" rows="4" placeholder="A few words about your project" />
        </motion.form>

        <p className="mt-4 text-xs text-blue-200/70">We’ll never share your information. By clicking, you agree to our friendly terms.</p>
      </div>
    </section>
  )
}

export default CTA
