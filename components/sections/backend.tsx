'use client'

import { motion } from 'framer-motion'
import { Server, Key, FileCode, Database, BookOpen } from 'lucide-react'

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

const endpoints = [
  { method: 'POST', path: '/api/v1/auth/login', desc: 'JWT token issuance', auth: false },
  { method: 'GET', path: '/api/v1/auth/refresh', desc: 'Token refresh', auth: true },
  { method: 'GET', path: '/api/v1/products', desc: 'Product catalog', auth: true },
  { method: 'POST', path: '/api/v1/products', desc: 'Create product', auth: true },
  { method: 'PUT', path: '/api/v1/products/{id}', desc: 'Update product', auth: true },
  { method: 'GET', path: '/api/v1/orders', desc: 'Order list', auth: true },
  { method: 'POST', path: '/api/v1/orders', desc: 'Create order', auth: true },
  { method: 'GET', path: '/api/v1/orders/{id}', desc: 'Order detail', auth: true },
]

const methodColors: Record<string, string> = {
  GET: 'text-sys-green',
  POST: 'text-sys-blue',
  PUT: 'text-sys-amber',
  DELETE: 'text-sys-red',
  PATCH: 'text-sys-purple',
}

const archDecisions = [
  { icon: Key, label: 'JWT Authentication', desc: 'Stateless tokens · Role claims · Refresh rotation', color: 'text-sys-amber' },
  { icon: Server, label: 'API Versioning', desc: '/api/v1/* · Backward-compatible evolution', color: 'text-sys-blue' },
  { icon: Database, label: 'Entity Framework', desc: 'Code-first migrations · SQL Server · Repository pattern', color: 'text-sys-purple' },
  { icon: BookOpen, label: 'Swagger Docs', desc: 'OpenAPI 3.0 · Auto-generated from annotations', color: 'text-sys-green' },
]

export default function Backend() {
  return (
    <section className="py-24 border-t border-sys-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel id="API-001" label="Refaccionaria API" />

          <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-sys-surface border border-sys-border rounded-lg">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-sys-blue" />
              <span className="text-sm font-medium">.NET REST API</span>
            </div>
            <span className="font-mono text-xs text-sys-subtle">|</span>
            <span className="text-xs text-sys-muted">Auto-parts management backend · SQL Server · Swagger</span>
            <div className="ml-auto flex gap-2">
              {['.NET', 'C#', 'SQL Server', 'JWT'].map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 bg-sys-blue/10 border border-sys-blue/20 text-sys-blue rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Endpoint list */}
            <div className="lg:col-span-3 bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="px-5 py-3.5 border-b border-sys-border flex items-center justify-between">
                <span className="text-sm font-medium">Endpoint Registry</span>
                <div className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-sys-muted" />
                  <span className="font-mono text-xs text-sys-muted">{endpoints.length} routes</span>
                </div>
              </div>
              <div className="divide-y divide-sys-border overflow-x-auto">
                {endpoints.map((ep) => (
                  <div
                    key={ep.path}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-sys-surface-2 transition-colors min-w-0"
                  >
                    <span
                      className={`font-mono text-xs font-semibold w-10 shrink-0 ${
                        methodColors[ep.method] ?? 'text-sys-muted'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="font-mono text-xs text-sys-text flex-1 truncate min-w-0">
                      {ep.path}
                    </span>
                    <span className="text-xs text-sys-muted hidden md:block truncate max-w-[160px] shrink-0">
                      {ep.desc}
                    </span>
                    {ep.auth && (
                      <div className="shrink-0">
                        <Key className="w-3 h-3 text-sys-amber" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="px-5 py-2 border-t border-sys-border flex items-center gap-2">
                <Key className="w-3 h-3 text-sys-amber" />
                <span className="font-mono text-[10px] text-sys-muted">= JWT required</span>
              </div>
            </div>

            {/* Architecture decisions */}
            <div className="lg:col-span-2 space-y-3">
              {archDecisions.map((d) => (
                <div
                  key={d.label}
                  className="p-4 bg-sys-surface border border-sys-border rounded-lg flex gap-3"
                >
                  <d.icon className={`w-4 h-4 ${d.color} mt-0.5 shrink-0`} />
                  <div>
                    <div className="text-xs font-semibold text-sys-text">{d.label}</div>
                    <div className="text-xs text-sys-muted mt-0.5 leading-relaxed">{d.desc}</div>
                  </div>
                </div>
              ))}

              <div className="p-4 bg-sys-surface border border-sys-border rounded-lg">
                <div className="font-mono text-xs text-sys-muted mb-3">SWAGGER ROUTE</div>
                <div className="font-mono text-xs text-sys-blue bg-sys-surface-2 border border-sys-border px-3 py-2 rounded">
                  GET /swagger/index.html
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
