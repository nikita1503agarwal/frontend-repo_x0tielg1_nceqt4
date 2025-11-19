import { Code, Boxes, PenTool, Smartphone, Trophy, Rocket } from 'lucide-react'

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
      <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{desc}</p>
    </div>
  )
}

function Services() {
  const items = [
    { icon: Boxes, title: '3D Websites', desc: 'Interactive Spline three.js powered sites that wow and convert.' },
    { icon: Code, title: 'Web Apps', desc: 'Production React frontends with fast APIs, auth and dashboards.' },
    { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS & Android apps with shared code and native polish.' },
    { icon: PenTool, title: 'Design', desc: 'Brand systems, product design and motion for a cohesive feel.' },
    { icon: Rocket, title: 'Launch', desc: 'CI/CD, analytics and performance tuning from day one.' },
    { icon: Trophy, title: 'Care', desc: 'Iterative improvements and support to keep you winning.' },
  ]

  return (
    <section id="services" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Services</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">From concept to code</h2>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <ServiceCard key={i.title} icon={i.icon} title={i.title} desc={i.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
