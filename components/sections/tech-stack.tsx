'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Frontend',
    id: 'FE',
    color: 'text-sys-blue',
    borderColor: 'border-sys-blue/20',
    bg: 'bg-sys-blue/5',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    id: 'BE',
    color: 'text-sys-green',
    borderColor: 'border-sys-green/20',
    bg: 'bg-sys-green/5',
    items: ['Node.js', 'Express', '.NET / C#', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Databases',
    id: 'DB',
    color: 'text-sys-amber',
    borderColor: 'border-sys-amber/20',
    bg: 'bg-sys-amber/5',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'IndexedDB', 'Redis (recommended)'],
  },
  {
    label: 'QA & Performance',
    id: 'QA',
    color: 'text-sys-purple',
    borderColor: 'border-sys-purple/20',
    bg: 'bg-sys-purple/5',
    items: ['Playwright', 'Puppeteer', 'k6', 'API Testing', 'Regression Testing'],
  },
  {
    label: 'Infrastructure',
    id: 'OPS',
    color: 'text-sys-cyan',
    borderColor: 'border-sys-cyan/20',
    bg: 'bg-sys-cyan/5',
    items: ['Railway', 'Vercel', 'DigitalOcean', 'Docker', 'Nginx'],
  },
  {
    label: 'Security',
    id: 'SEC',
    color: 'text-sys-red',
    borderColor: 'border-sys-red/20',
    bg: 'bg-sys-red/5',
    items: ['JWT', 'CSRF Protection', 'Certbot', 'Vaultwarden', 'ngrok'],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-sys-muted bg-sys-surface border border-sys-border px-2.5 py-1 rounded">
              SYS-STACK
            </span>
            <span className="font-mono text-xs text-sys-subtle">—</span>
            <h2 className="text-2xl font-semibold text-sys-text">Technology Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`p-5 border ${cat.borderColor} ${cat.bg} rounded-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-sys-text">{cat.label}</span>
                  <span
                    className={`font-mono text-[10px] border ${cat.borderColor} ${cat.color} px-1.5 py-0.5 rounded`}
                  >
                    {cat.id}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs bg-sys-surface border border-sys-border text-sys-muted rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
