'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const pillars = [
  { label: 'Product Thinking', desc: 'Every technical decision has a business consequence. I think in features, not just functions.' },
  { label: 'QA Mindset', desc: 'Quality is built in, not tested in. Observability and failure modes are first-class concerns.' },
  { label: 'Performance Awareness', desc: 'Systems degrade under load in non-obvious ways. Measure first, optimize where it matters.' },
  { label: 'Real Deployments', desc: 'Production is the only honest environment. Ship early, monitor rigorously, iterate.' },
  { label: 'Business Impact', desc: 'Software that doesn\'t generate value or solve a real problem is a liability, not an asset.' },
  { label: 'Security by Default', desc: 'CSRF, JWT, HTTPS, and access control are table stakes — not optional upgrades.' },
]

export default function Philosophy() {
  return (
    <section className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Statement */}
          <div className="max-w-4xl mb-16">
            <div className="font-mono text-xs text-sys-muted mb-6 tracking-widest">
              ENGINEERING PHILOSOPHY
            </div>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-sys-text leading-tight tracking-tight">
              &ldquo;I don&apos;t build websites.
              <br />
              <span className="text-sys-muted">I build systems.&rdquo;</span>
            </blockquote>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-5 bg-sys-surface border border-sys-border rounded-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-1 rounded-full bg-sys-blue" />
                  <span className="text-xs font-semibold text-sys-text">{p.label}</span>
                </div>
                <p className="text-xs text-sys-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-sys-surface border border-sys-border-b rounded-lg">
            <div className="flex-1">
              <div className="text-sm font-semibold text-sys-text mb-1">
                Open to Engineering Opportunities
              </div>
              <div className="text-xs text-sys-muted">
                Fullstack · QA Automation · SaaS Architecture · Remote-friendly · Mexico-based
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:marvinsaidlagunaslopez@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-sys-text text-sys-bg text-sm font-semibold rounded-md hover:bg-sys-text/90 transition-colors"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/MarvinS8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-sys-border-b text-sys-text text-sm font-medium rounded-md hover:bg-sys-surface-2 transition-colors"
              >
                GitHub
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/marvin-said-lagunas-lopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-sys-border-b text-sys-text text-sm font-medium rounded-md hover:bg-sys-surface-2 transition-colors"
              >
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
