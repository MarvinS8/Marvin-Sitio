'use client'

import { motion } from 'framer-motion'
import { GitCommit } from 'lucide-react'

const commits = [
  {
    hash: 'a9f3c12',
    date: '2026',
    type: 'feat',
    msg: 'Enterprise QA engineer at Infinitec México',
    desc: 'Playwright, Puppeteer, k6 load testing, Angular + TypeScript, international team collaboration',
    branch: 'main',
    color: 'text-sys-purple',
    borderColor: 'border-sys-purple/30',
    bg: 'bg-sys-purple/5',
    tagBg: 'bg-sys-purple/10 border-sys-purple/30 text-sys-purple',
  },
  {
    hash: 'e7b2d85',
    date: '2025',
    type: 'feat',
    msg: 'Launched Plaza Solaz SaaS — first revenue product',
    desc: 'PWA, WebSockets, PostgreSQL, QR entry system, thermal printer integration, $3k/mo recurring revenue',
    branch: 'main',
    color: 'text-sys-green',
    borderColor: 'border-sys-green/30',
    bg: 'bg-sys-green/5',
    tagBg: 'bg-sys-green/10 border-sys-green/30 text-sys-green',
  },
  {
    hash: 'c4a1f67',
    date: '2025',
    type: 'feat',
    msg: 'Deployed SmartFit Parking — client system',
    desc: 'Industry-adapted PWA with QR scanning and hardware integration for gym access control',
    branch: 'main',
    color: 'text-sys-blue',
    borderColor: 'border-sys-blue/30',
    bg: 'bg-sys-blue/5',
    tagBg: 'bg-sys-blue/10 border-sys-blue/30 text-sys-blue',
  },
  {
    hash: '8d6e3b1',
    date: '2024',
    type: 'feat',
    msg: 'Built Refaccionaria — .NET REST API',
    desc: 'JWT authentication, Swagger documentation, API versioning, Entity Framework, SQL Server',
    branch: 'main',
    color: 'text-sys-amber',
    borderColor: 'border-sys-amber/30',
    bg: 'bg-sys-amber/5',
    tagBg: 'bg-sys-amber/10 border-sys-amber/30 text-sys-amber',
  },
  {
    hash: '1a0b000',
    date: '2023',
    type: 'init',
    msg: 'Started software engineering journey',
    desc: 'First commit — fullstack development, systems thinking, QA mindset begin here',
    branch: 'main',
    color: 'text-sys-muted',
    borderColor: 'border-sys-border',
    bg: '',
    tagBg: 'bg-sys-surface border-sys-border text-sys-muted',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-sys-muted bg-sys-surface border border-sys-border px-2.5 py-1 rounded">
              GIT-LOG
            </span>
            <span className="font-mono text-xs text-sys-subtle">—</span>
            <h2 className="text-2xl font-semibold text-sys-text">Career History</h2>
          </div>

          {/* Git log header */}
          <div className="font-mono text-xs text-sys-muted mb-6 flex gap-6 pb-3 border-b border-sys-border">
            <span>commit</span>
            <span>date</span>
            <span>message</span>
          </div>

          <div className="space-y-3">
            {commits.map((c, i) => (
              <motion.div
                key={c.hash}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-5 border ${c.borderColor} ${c.bg} rounded-lg`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <GitCommit className={`w-3.5 h-3.5 ${c.color} shrink-0`} />
                  <span className={`font-mono text-xs ${c.color}`}>{c.hash}</span>
                  <span className="font-mono text-xs text-sys-subtle">{c.date}</span>
                  <span
                    className={`px-1.5 py-0.5 font-mono text-[10px] border rounded ${c.tagBg}`}
                  >
                    {c.type}
                  </span>
                  <span className="text-xs font-medium text-sys-text">{c.msg}</span>
                </div>
                <p className="text-xs text-sys-muted ml-7 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
