'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react'

const statusItems = [
  { label: 'SaaS Products', value: '1', status: 'LIVE', color: 'text-sys-green' },
  { label: 'Active Projects', value: '3', status: null, color: 'text-sys-blue' },
  { label: 'QA Pipelines', value: 'RUNNING', status: null, color: 'text-sys-amber' },
  { label: 'Enterprise Exp', value: 'Infinitec MX', status: null, color: 'text-sys-purple' },
  { label: 'Availability', value: 'OPEN', status: null, color: 'text-sys-green' },
]

const logLines = [
  { time: '09:14:02', level: 'INFO', msg: 'SaaS platform nominal — 99.8% uptime' },
  { time: '09:14:08', level: 'INFO', msg: 'QA pipeline complete — 0 regressions' },
  { time: '09:14:15', level: 'WARN', msg: 'Load test report: p95 bottleneck identified' },
  { time: '09:14:21', level: 'INFO', msg: 'Redis caching recommendation filed' },
  { time: '09:14:33', level: 'INFO', msg: 'System ready — accepting connections' },
]

function SystemLog() {
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    logLines.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i])
      }, 600 + i * 400)
    })
  }, [])

  return (
    <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-sys-border bg-sys-surface-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sys-red/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-sys-amber/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-sys-green/60" />
        </div>
        <span className="font-mono text-xs text-sys-muted ml-2">system.log — marvin-os</span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[160px]">
        {logLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={visible.includes(i) ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs flex gap-3"
          >
            <span className="text-sys-subtle shrink-0">{line.time}</span>
            <span className={`shrink-0 w-8 ${line.level === 'WARN' ? 'text-sys-amber' : 'text-sys-green'}`}>
              {line.level}
            </span>
            <span className="text-sys-muted">{line.msg}</span>
          </motion.div>
        ))}
        {visible.length >= logLines.length && (
          <div className="font-mono text-xs text-sys-text flex items-center gap-1 mt-1">
            <span className="text-sys-green">$</span>
            <span className="text-sys-muted">_</span>
            <span className="cursor-blink text-sys-muted">█</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg pt-14">
      {/* Fade overlay bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sys-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* System badge */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sys-green pulse-dot" />
              <span className="font-mono text-xs text-sys-muted tracking-widest uppercase">
                System Online — Cuernavaca, México
              </span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-sys-text">
                Marvin Said
                <br />
                <span className="text-sys-muted">Lagunas López</span>
              </h1>
            </div>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2">
              {[
                'Fullstack Engineer',
                'QA Automation',
                'SaaS Builder',
                'Systems Thinker',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-sys-surface border border-sys-border text-sys-muted rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Headline */}
            <p className="text-sys-muted text-base leading-relaxed max-w-lg">
              I don&apos;t build websites. I build systems that deploy, scale,
              and generate revenue — from QA pipelines to production SaaS.
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sys-subtle">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-sm">Cuernavaca, Mexico · Open to remote</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#systems"
                className="flex items-center gap-2 px-5 py-2.5 bg-sys-text text-sys-bg text-sm font-semibold rounded-md hover:bg-sys-text/90 transition-colors"
              >
                View Systems
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:marvinsaid1803@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 border border-sys-border-b text-sys-text text-sm font-medium rounded-md hover:bg-sys-surface transition-colors"
              >
                Hire Engineer
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right — Status Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Status panel */}
            <div className="bg-sys-surface border border-sys-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-sys-border">
                <span className="font-mono text-xs text-sys-muted tracking-widest">SYSTEM STATUS</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sys-green pulse-dot" />
                  <span className="font-mono text-xs text-sys-green">ALL SYSTEMS GO</span>
                </div>
              </div>
              <div className="divide-y divide-sys-border">
                {statusItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-4 py-3"
                  >
                    <span className="text-xs text-sys-muted">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs font-medium ${item.color}`}>
                        {item.value}
                      </span>
                      {item.status && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium bg-sys-green/10 text-sys-green rounded border border-sys-green/20">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live log */}
            <SystemLog />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
