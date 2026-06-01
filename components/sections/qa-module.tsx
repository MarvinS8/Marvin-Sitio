'use client'

import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle, CheckCircle, Activity, Database, Cpu } from 'lucide-react'

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

const stages = [
  { label: 'Stage 1', users: 10, duration: '1m', p95: '320ms', errorRate: '0%', status: 'ok' },
  { label: 'Stage 2', users: 30, duration: '2m', p95: '510ms', errorRate: '2.1%', status: 'ok' },
  { label: 'Stage 3', users: 50, duration: '3m', p95: '1.2s', errorRate: '8.4%', status: 'warn' },
  { label: 'Stage 4', users: 100, duration: '3m', p95: '8.7s', errorRate: '22.0%', status: 'warn' },
  { label: 'Stage 5', users: 200, duration: '2m', p95: '23.12s', errorRate: '38.41%', status: 'crit' },
]

const insights = [
  {
    icon: Database,
    label: 'Session Layer Bottleneck',
    desc: 'CodeIgniter ci_session without caching saturates at ~50 concurrent users.',
    action: 'Implement Redis session storage',
    severity: 'critical',
  },
  {
    icon: Cpu,
    label: 'DB Connection Pool Exhaustion',
    desc: 'No pooling config — new connection per request degrades p95 at load.',
    action: 'Add PgBouncer or pg pool configuration',
    severity: 'high',
  },
  {
    icon: Activity,
    label: 'AJAX Login Flow Verified',
    desc: 'CSRF token extraction and session cookie handling correctly simulated.',
    action: 'Authentication flow is production-accurate',
    severity: 'info',
  },
]

const strategySteps = [
  'Extract CSRF token from login page response',
  'Authenticate with session cookies via AJAX',
  'Maintain CodeIgniter ci_session across requests',
  'Ramp load progressively: 10 → 50 → 200 VUs',
  'Measure p95, error rate, and dashboard success rate',
]

export default function QAModule() {
  const maxUsers = 200

  return (
    <section id="experience" className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="QA-001" label="Performance Engineering" />

          {/* System header */}
          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-sys-surface border border-sys-border rounded-lg">
            <span className="font-mono text-xs text-sys-amber font-medium">REWARDIX — Load Testing Analysis</span>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">k6 · 5-Stage Ramp · CSRF-Aware Auth</span>
            <div className="ml-auto flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-sys-amber" />
              <span className="font-mono text-xs text-sys-amber">BOTTLENECK IDENTIFIED</span>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="p-4 bg-sys-surface border border-sys-red/30 bg-sys-red/5 rounded-lg">
              <div className="font-mono text-xs text-sys-muted mb-1">p95 PEAK</div>
              <div className="font-mono text-2xl font-semibold text-sys-red">23.12s</div>
              <div className="text-xs text-sys-muted mt-1">Stage 5 · 200 users</div>
            </div>
            <div className="p-4 bg-sys-surface border border-sys-amber/30 bg-sys-amber/5 rounded-lg">
              <div className="font-mono text-xs text-sys-muted mb-1">ERROR RATE</div>
              <div className="font-mono text-2xl font-semibold text-sys-amber">38.41%</div>
              <div className="text-xs text-sys-muted mt-1">Session layer failure</div>
            </div>
            <div className="p-4 bg-sys-surface border border-sys-green/30 bg-sys-green/5 rounded-lg">
              <div className="font-mono text-xs text-sys-muted mb-1">DASHBOARD OK</div>
              <div className="font-mono text-2xl font-semibold text-sys-green">94%</div>
              <div className="text-xs text-sys-muted mt-1">Post-auth success rate</div>
            </div>
            <div className="p-4 bg-sys-surface border border-sys-blue/30 bg-sys-blue/5 rounded-lg">
              <div className="font-mono text-xs text-sys-muted mb-1">BOTTLENECK</div>
              <div className="font-mono text-lg font-semibold text-sys-blue leading-tight">Session</div>
              <div className="text-xs text-sys-muted mt-1">No Redis caching</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Load test stages */}
            <div className="lg:col-span-2 bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center justify-between">
                <span className="text-sm font-medium">Load Test — Stage Results</span>
                <span className="font-mono text-xs text-sys-muted">k6 · 5 stages</span>
              </div>

              {/* Visual bars — scrollable on mobile */}
              <div className="overflow-x-auto">
                <div className="p-5 space-y-3 min-w-[360px]">
                  {stages.map((s) => {
                    const pct = (s.users / maxUsers) * 100
                    const barColor =
                      s.status === 'crit'
                        ? 'bg-sys-red'
                        : s.status === 'warn'
                        ? 'bg-sys-amber'
                        : 'bg-sys-green'
                    const textColor =
                      s.status === 'crit'
                        ? 'text-sys-red'
                        : s.status === 'warn'
                        ? 'text-sys-amber'
                        : 'text-sys-green'

                    return (
                      <div key={s.label} className="flex items-center gap-3">
                        <div className="w-14 font-mono text-xs text-sys-muted shrink-0">{s.label}</div>
                        <div className="flex-1 h-5 bg-sys-surface-2 border border-sys-border rounded overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full ${barColor} opacity-80`}
                          />
                        </div>
                        <div className="w-8 font-mono text-xs text-sys-muted shrink-0">{s.users}</div>
                        <div className={`w-14 font-mono text-xs ${textColor} shrink-0`}>{s.p95}</div>
                        <div className={`w-12 font-mono text-xs ${textColor} shrink-0`}>{s.errorRate}</div>
                      </div>
                    )
                  })}
                  <div className="flex items-center gap-3 pt-1 border-t border-sys-border mt-1">
                    <div className="w-14" />
                    <div className="flex-1 font-mono text-[10px] text-sys-subtle">LOAD</div>
                    <div className="w-8 font-mono text-[10px] text-sys-subtle">VUs</div>
                    <div className="w-14 font-mono text-[10px] text-sys-subtle">p95</div>
                    <div className="w-12 font-mono text-[10px] text-sys-subtle">err%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing strategy */}
            <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border">
                <span className="text-sm font-medium">Testing Strategy</span>
              </div>
              <div className="p-5 space-y-2">
                {strategySteps.map((step, i) => (
                  <div key={i} className="flex gap-3 text-xs">
                    <span className="font-mono text-sys-subtle shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sys-muted leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div>
            <div className="font-mono text-xs text-sys-muted mb-4 tracking-widest">
              DIAGNOSIS & RECOMMENDATIONS
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {insights.map((ins) => {
                const colors =
                  ins.severity === 'critical'
                    ? { border: 'border-sys-red/30', bg: 'bg-sys-red/5', icon: 'text-sys-red', badge: 'bg-sys-red/10 border-sys-red/20 text-sys-red' }
                    : ins.severity === 'high'
                    ? { border: 'border-sys-amber/30', bg: 'bg-sys-amber/5', icon: 'text-sys-amber', badge: 'bg-sys-amber/10 border-sys-amber/20 text-sys-amber' }
                    : { border: 'border-sys-green/30', bg: 'bg-sys-green/5', icon: 'text-sys-green', badge: 'bg-sys-green/10 border-sys-green/20 text-sys-green' }

                return (
                  <div key={ins.label} className={`p-5 border ${colors.border} ${colors.bg} rounded-lg`}>
                    <div className="flex items-center justify-between mb-3">
                      <ins.icon className={`w-4 h-4 ${colors.icon}`} />
                      <span className={`px-1.5 py-0.5 text-[10px] font-mono border rounded ${colors.badge}`}>
                        {ins.severity.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-sys-text mb-2">{ins.label}</div>
                    <div className="text-xs text-sys-muted leading-relaxed mb-3">{ins.desc}</div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-3 h-3 text-sys-blue shrink-0" />
                      <span className="text-[10px] text-sys-blue">{ins.action}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
