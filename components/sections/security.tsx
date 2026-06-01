'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, Globe, Key, Terminal } from 'lucide-react'

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

const capabilities = [
  {
    icon: Lock,
    label: 'Vaultwarden',
    category: 'Self-Hosted',
    desc: 'Self-hosted password manager deployed on personal infrastructure. Full credential lifecycle management without third-party dependency.',
    tags: ['Docker', 'Self-hosted', 'HTTPS'],
    color: 'text-sys-green',
    borderColor: 'border-sys-green/20',
    bg: 'bg-sys-green/5',
  },
  {
    icon: Globe,
    label: 'ngrok Tunneling',
    category: 'Remote Testing',
    desc: 'Secure tunnel configuration for exposing local development environments to webhook integrations and remote QA sessions.',
    tags: ['Tunneling', 'Dev-Ops', 'Webhook Testing'],
    color: 'text-sys-blue',
    borderColor: 'border-sys-blue/20',
    bg: 'bg-sys-blue/5',
  },
  {
    icon: Server,
    label: 'Certbot / HTTPS',
    category: 'Infrastructure',
    desc: "Let's Encrypt certificate automation via Certbot. HTTPS provisioning and renewal for production deployments.",
    tags: ["Let's Encrypt", 'SSL/TLS', 'Nginx'],
    color: 'text-sys-amber',
    borderColor: 'border-sys-amber/20',
    bg: 'bg-sys-amber/5',
  },
  {
    icon: Shield,
    label: 'CSRF Protection',
    category: 'Application Security',
    desc: 'CSRF token extraction, session handling, and form protection across CodeIgniter and custom backends. Applied in both QA simulation and production code.',
    tags: ['CSRF Tokens', 'Session Security', 'CI4'],
    color: 'text-sys-purple',
    borderColor: 'border-sys-purple/20',
    bg: 'bg-sys-purple/5',
  },
  {
    icon: Key,
    label: 'JWT Authentication',
    category: 'Auth Systems',
    desc: 'Stateless JWT-based auth with role claims, token refresh rotation, and expiry handling — implemented across .NET and Node.js backends.',
    tags: ['JWT', 'Stateless Auth', 'Role Claims'],
    color: 'text-sys-cyan',
    borderColor: 'border-sys-cyan/20',
    bg: 'bg-sys-cyan/5',
  },
]

export default function Security() {
  return (
    <section className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="SEC-001" label="Security & Infrastructure" />

          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-sys-surface border border-sys-border rounded-lg">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-sys-green" />
              <span className="text-sm font-medium">Security-Aware Engineering</span>
            </div>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">
              Self-hosted infra · Application security · HTTPS provisioning · Auth systems
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sys-muted" />
              <span className="font-mono text-xs text-sys-muted">Infrastructure-Capable</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className={`p-5 border ${cap.borderColor} ${cap.bg} rounded-lg`}
              >
                <div className="flex items-center justify-between mb-3">
                  <cap.icon className={`w-5 h-5 ${cap.color}`} />
                  <span className={`font-mono text-[10px] border ${cap.borderColor} ${cap.color} px-1.5 py-0.5 rounded`}>
                    {cap.category}
                  </span>
                </div>
                <div className="text-sm font-semibold text-sys-text mb-2">{cap.label}</div>
                <p className="text-xs text-sys-muted leading-relaxed mb-4">{cap.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[10px] font-mono bg-sys-surface border border-sys-border text-sys-muted rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Summary card */}
            <div className="p-5 bg-sys-surface border border-sys-border rounded-lg flex flex-col justify-between md:col-span-1">
              <div>
                <div className="font-mono text-xs text-sys-muted mb-4 tracking-widest">POSTURE</div>
                <div className="space-y-3">
                  {[
                    { label: 'Self-Hosted Infra', status: 'CAPABLE' },
                    { label: 'HTTPS / TLS', status: 'CONFIGURED' },
                    { label: 'Application Auth', status: 'IMPLEMENTED' },
                    { label: 'CSRF Handling', status: 'TESTED' },
                    { label: 'ISO 27001 Exposure', status: 'EXPERIENCED' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between text-xs">
                      <span className="text-sys-muted">{item.label}</span>
                      <span className="font-mono text-sys-green">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-sys-border">
                <p className="text-xs text-sys-muted leading-relaxed">
                  Security is a cross-cutting concern — not an afterthought bolted on at deployment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
