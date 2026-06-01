'use client'

import { motion } from 'framer-motion'
import { Globe, Users, BookOpen, BarChart2, Code2, Settings } from 'lucide-react'

function SectionLabel({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-xs text-sys-muted bg-sys-surface border border-sys-border px-2.5 py-1 rounded">
        {id}
      </span>
      <span className="font-mono text-xs text-sys-subtle">—</span>
      <h2 className="text-2xl font-semibold text-sys-text">{label}</h2>
    </div>
  )
}

const qaSkills = [
  { label: 'Playwright E2E Automation', level: 'Active' },
  { label: 'Puppeteer Testing', level: 'Active' },
  { label: 'API Testing', level: 'Active' },
  { label: 'Regression Testing', level: 'Active' },
  { label: 'k6 Load Testing', level: 'Active' },
  { label: 'Bottleneck Analysis', level: 'Active' },
  { label: 'p95 / Error Rate Interpretation', level: 'Active' },
]

const frontendSkills = [
  { label: 'Angular', note: 'Enterprise UI' },
  { label: 'TypeScript', note: 'Strict mode' },
  { label: 'Component Systems', note: 'Design system impl' },
]

const tooling = [
  { label: 'Jira', category: 'PM' },
  { label: 'Confluence', category: 'Docs' },
  { label: 'Odoo', category: 'ERP' },
  { label: 'ISO 27001', category: 'Security' },
  { label: 'ISO 9001', category: 'Quality' },
]

export default function Enterprise() {
  return (
    <section className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="EXP-001" label="Infinitec México" />

          {/* Company context header */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-sys-surface border border-sys-border rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-sm bg-sys-surface-2 border border-sys-border-b flex items-center justify-center">
                <Settings className="w-3.5 h-3.5 text-sys-purple" />
              </div>
              <span className="text-sm font-medium">Infinitec México</span>
            </div>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">QA Engineer & Fullstack Developer Trainee</span>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sys-blue" />
              <span className="text-xs text-sys-muted">Enterprise environment</span>
            </div>
            <div className="ml-auto px-2 py-0.5 text-[10px] font-mono bg-sys-purple/10 border border-sys-purple/20 text-sys-purple rounded">
              CURRENT ROLE
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* QA Engineering */}
            <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-sys-amber" />
                <span className="text-sm font-medium">QA Engineering</span>
              </div>
              <div className="divide-y divide-sys-border">
                {qaSkills.map((s) => (
                  <div key={s.label} className="flex items-center justify-between px-5 py-3">
                    <span className="text-xs text-sys-muted">{s.label}</span>
                    <span className="font-mono text-xs text-sys-green">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend + International */}
            <div className="flex flex-col gap-4">
              <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
                <div className="px-5 py-3.5 border-b border-sys-border flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-sys-blue" />
                  <span className="text-sm font-medium">Frontend Engineering</span>
                </div>
                <div className="divide-y divide-sys-border">
                  {frontendSkills.map((s) => (
                    <div key={s.label} className="flex items-center justify-between px-5 py-3">
                      <span className="text-xs font-medium text-sys-text">{s.label}</span>
                      <span className="text-xs text-sys-muted">{s.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
                <div className="px-5 py-3.5 border-b border-sys-border flex items-center gap-2">
                  <Users className="w-4 h-4 text-sys-green" />
                  <span className="text-sm font-medium">International Collaboration</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Team scope</span>
                    <span className="font-mono text-sys-text">Mexico + India</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Standups</span>
                    <span className="font-mono text-sys-text">English · Daily</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Workflow</span>
                    <span className="font-mono text-sys-text">Agile / Scrum</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise tooling + compliance */}
            <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sys-purple" />
                <span className="text-sm font-medium">Enterprise Tooling</span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-5">
                  {tooling.map((t) => (
                    <div
                      key={t.label}
                      className="px-3 py-2 bg-sys-surface-2 border border-sys-border rounded-lg"
                    >
                      <div className="text-xs font-medium text-sys-text">{t.label}</div>
                      <div className="font-mono text-[10px] text-sys-muted mt-0.5">{t.category}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-sys-border">
                  <div className="font-mono text-xs text-sys-muted mb-3">COMPLIANCE</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sys-green" />
                      <span className="text-xs text-sys-muted">ISO 27001 — Information Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sys-green" />
                      <span className="text-xs text-sys-muted">ISO 9001 — Quality Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
