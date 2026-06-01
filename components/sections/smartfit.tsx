'use client'

import { motion } from 'framer-motion'
import { Wifi, QrCode, Lock, Activity, Zap, Smartphone } from 'lucide-react'

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

const features = [
  {
    icon: Smartphone,
    label: 'Offline-First PWA',
    desc: 'Full functionality without internet — IndexedDB for local state, syncs when online.',
    tag: 'Architecture',
  },
  {
    icon: QrCode,
    label: 'QR Entry System',
    desc: 'Camera-based QR scanning for frictionless member validation at gym entrances.',
    tag: 'Core Feature',
  },
  {
    icon: Lock,
    label: 'Hardware Integration',
    desc: 'Access control system integration — physical barriers triggered by software state.',
    tag: 'Integration',
  },
  {
    icon: Wifi,
    label: 'Real-Time Validation',
    desc: 'Live membership status checks against the gym\'s member database on entry events.',
    tag: 'Real-Time',
  },
  {
    icon: Activity,
    label: 'Gym-Specific Flow',
    desc: 'Operational logic adapted to SmartFit\'s member tiers, access schedules, and visit tracking.',
    tag: 'Domain Logic',
  },
  {
    icon: Zap,
    label: 'Zero Latency UX',
    desc: 'Entry decisions rendered in under 200ms — no gym member waiting at a barrier.',
    tag: 'Performance',
  },
]

const adaptations = [
  { label: 'Member tier validation', value: 'Custom' },
  { label: 'Visit counter integration', value: 'Active' },
  { label: 'Schedule-based access', value: 'Enabled' },
  { label: 'Hardware door relay', value: 'GPIO' },
  { label: 'Offline grace period', value: '72h' },
]

export default function SmartFit() {
  return (
    <section className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="SYSTEM-002" label="SmartFit Parking" />

          <div className="mb-6 px-4 py-3 bg-sys-surface border border-sys-border rounded-lg">
            <p className="text-xs text-sys-muted leading-relaxed">
              Deployed for SmartFit gym — sister system to Plaza Solaz, adapted for gym access control and member validation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Feature grid */}
            <div className="lg:col-span-2 bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center justify-between">
                <span className="text-sm font-medium">Industry-Adapted Operational System</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-sys-blue/10 border border-sys-blue/20 text-sys-blue rounded">
                  CLIENT DEPLOYMENT
                </span>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div
                    key={f.label}
                    className="p-4 bg-sys-surface-2 border border-sys-border rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <f.icon className="w-4 h-4 text-sys-blue" />
                      <span className="font-mono text-[10px] text-sys-muted border border-sys-border px-1.5 py-0.5 rounded">
                        {f.tag}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-sys-text mb-1">{f.label}</div>
                    <div className="text-xs text-sys-muted leading-relaxed">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Adaptations panel */}
            <div className="flex flex-col gap-4">
              <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
                <div className="px-5 py-3.5 border-b border-sys-border">
                  <span className="text-sm font-medium">Domain Adaptations</span>
                </div>
                <div className="divide-y divide-sys-border">
                  {adaptations.map((a) => (
                    <div
                      key={a.label}
                      className="flex items-center justify-between px-5 py-3.5"
                    >
                      <span className="text-xs text-sys-muted">{a.label}</span>
                      <span className="font-mono text-xs text-sys-blue">{a.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sys-surface border border-sys-border rounded-lg p-5">
                <div className="font-mono text-xs text-sys-muted mb-3">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {['PWA', 'IndexedDB', 'WebSockets', 'Node.js', 'PostgreSQL', 'QR API'].map(
                    (t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[10px] font-mono bg-sys-surface-2 border border-sys-border text-sys-muted rounded"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-sys-surface border border-sys-border rounded-lg p-5">
                <div className="font-mono text-xs text-sys-muted mb-1">ENTRY LATENCY</div>
                <div className="font-mono text-2xl font-semibold text-sys-green">&lt;200ms</div>
                <div className="text-xs text-sys-muted mt-1">p95 validation response</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
