'use client'

import { motion } from 'framer-motion'
import {
  Zap, Shield, Wifi, Database, Users, DollarSign,
  ArrowRight, CheckCircle, Globe, Smartphone,
} from 'lucide-react'

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

const businessMetrics = [
  { label: 'Setup Fee', value: '$6,000', unit: 'MXN', icon: DollarSign, color: 'text-sys-green', bg: 'bg-sys-green/10 border-sys-green/20' },
  { label: 'Monthly SaaS', value: '$3,000', unit: 'MXN/mo', icon: DollarSign, color: 'text-sys-amber', bg: 'bg-sys-amber/10 border-sys-amber/20' },
  { label: 'Add-on Modules', value: 'Per', unit: 'Business', icon: Globe, color: 'text-sys-blue', bg: 'bg-sys-blue/10 border-sys-blue/20' },
  { label: 'Deployment', value: 'LIVE', unit: 'Production', icon: Zap, color: 'text-sys-purple', bg: 'bg-sys-purple/10 border-sys-purple/20' },
]

const coreFeatures = [
  { icon: Smartphone, label: 'PWA Offline-first', desc: 'IndexedDB — works without internet' },
  { icon: Wifi, label: 'WebSockets Realtime', desc: 'Live multi-booth synchronization' },
  { icon: Shield, label: 'JWT + CSRF', desc: 'Authentication & CSRF protection' },
  { icon: Users, label: 'Role-Based Access', desc: 'User / Admin / SuperAdmin tiers' },
  { icon: Database, label: 'PostgreSQL', desc: 'Transaction-safe data layer' },
  { icon: Zap, label: 'QR Entry/Exit', desc: 'Thermal printer integration' },
]

const engineeringDecisions = [
  {
    choice: 'WebSockets',
    rationale: 'Multi-booth environments require sub-second synchronization. HTTP polling introduced race conditions at scale.',
    tag: 'Real-time',
    color: 'text-sys-blue',
    borderColor: 'border-sys-blue/20',
    bg: 'bg-sys-blue/5',
  },
  {
    choice: 'PWA / IndexedDB',
    rationale: 'App store distribution is a deployment bottleneck. PWA delivers native-like UX with zero installation and offline capability on commodity hardware.',
    tag: 'Deployment',
    color: 'text-sys-green',
    borderColor: 'border-sys-green/20',
    bg: 'bg-sys-green/5',
  },
  {
    choice: 'PostgreSQL',
    rationale: 'Parking transactions require ACID guarantees. Financial records must be consistent — no eventual consistency tradeoffs acceptable.',
    tag: 'Data Integrity',
    color: 'text-sys-amber',
    borderColor: 'border-sys-amber/20',
    bg: 'bg-sys-amber/5',
  },
  {
    choice: 'Modular Backend',
    rationale: 'Each client deployment needs isolated branches, role configurations, and kill-switch capability — monolith would couple business logic across tenants.',
    tag: 'Architecture',
    color: 'text-sys-purple',
    borderColor: 'border-sys-purple/20',
    bg: 'bg-sys-purple/5',
  },
]

const flowSteps = [
  { label: 'Entry', sub: 'Vehicle arrives', icon: '→' },
  { label: 'QR Scan', sub: 'Booth reads code', icon: '→' },
  { label: 'Validation', sub: 'System verifies', icon: '→' },
  { label: 'Payment', sub: 'Calculate fare', icon: '→' },
  { label: 'Exit', sub: 'Gate opens', icon: null },
]

export default function PlazaSolaz() {
  return (
    <section id="systems" className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="SYSTEM-001" label="Plaza Solaz" />

          {/* System status header */}
          <div className="flex flex-wrap items-center gap-4 mb-10 p-4 bg-sys-surface border border-sys-border rounded-lg">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sys-green pulse-dot" />
              <span className="font-mono text-xs text-sys-green font-medium">PRODUCTION</span>
            </div>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">Parking Management SaaS</span>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">Real customers · Recurring revenue · Live since 2025</span>
            <div className="ml-auto flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-sys-green" />
              <span className="font-mono text-xs text-sys-green">Revenue Active</span>
            </div>
          </div>

          {/* Business metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {businessMetrics.map((m) => (
              <div
                key={m.label}
                className={`p-4 border rounded-lg ${m.bg}`}
              >
                <m.icon className={`w-4 h-4 ${m.color} mb-3`} />
                <div className={`font-mono text-xl font-semibold ${m.color}`}>
                  {m.value}
                </div>
                <div className="font-mono text-xs text-sys-muted mt-0.5">{m.unit}</div>
                <div className="text-xs text-sys-muted mt-2">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {/* Core system */}
            <div className="lg:col-span-2 bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center justify-between">
                <span className="text-sm font-medium">Core System Architecture</span>
                <span className="font-mono text-xs text-sys-muted">6 modules</span>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-3">
                {coreFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex gap-3 p-3 bg-sys-surface-2 border border-sys-border rounded-md"
                  >
                    <f.icon className="w-4 h-4 text-sys-blue mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-medium text-sys-text">{f.label}</div>
                      <div className="text-xs text-sys-muted mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-booth + kill switch */}
            <div className="flex flex-col gap-3">
              <div className="flex-1 bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
                <div className="px-5 py-3.5 border-b border-sys-border">
                  <span className="text-sm font-medium">Multi-Branch Control</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Branch A</span>
                    <span className="font-mono text-sys-green">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Branch B</span>
                    <span className="font-mono text-sys-green">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Kill-Switch</span>
                    <span className="font-mono text-sys-muted">Per Branch</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sys-muted">Excel Export</span>
                    <span className="font-mono text-sys-blue">ENABLED</span>
                  </div>
                </div>
              </div>
              <div className="bg-sys-surface border border-sys-border rounded-lg p-5">
                <div className="font-mono text-xs text-sys-muted mb-2">UPTIME</div>
                <div className="font-mono text-2xl font-semibold text-sys-green">99.8%</div>
                <div className="text-xs text-sys-muted mt-1">30-day rolling average</div>
              </div>
            </div>
          </div>

          {/* Entry/Exit flow */}
          <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden mb-10">
            <div className="px-5 py-3.5 border-b border-sys-border">
              <span className="text-sm font-medium">Operational Flow — Vehicle Lifecycle</span>
            </div>
            <div className="p-6 overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {flowSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-28 p-3 bg-sys-surface-2 border border-sys-border rounded-lg text-center">
                        <div className="text-xs font-semibold text-sys-text">{step.label}</div>
                        <div className="text-[10px] text-sys-muted mt-0.5 font-mono">{step.sub}</div>
                      </div>
                    </div>
                    {step.icon && (
                      <ArrowRight className="w-4 h-4 text-sys-subtle shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Engineering decisions */}
          <div>
            <div className="text-xs font-mono text-sys-muted mb-4 tracking-widest">
              ENGINEERING DECISIONS
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {engineeringDecisions.map((d) => (
                <div
                  key={d.choice}
                  className={`p-5 border ${d.borderColor} ${d.bg} rounded-lg`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-sm font-semibold ${d.color}`}>
                      {d.choice}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono border ${d.borderColor} ${d.color} rounded`}
                    >
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-xs text-sys-muted leading-relaxed">{d.rationale}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
