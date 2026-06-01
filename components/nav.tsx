'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'

const links = [
  { label: 'Systems', href: '#systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Timeline', href: '#timeline' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sys-bg/90 backdrop-blur-md border-b border-sys-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-sm bg-sys-surface-2 border border-sys-border-b flex items-center justify-center">
            <Terminal className="w-3 h-3 text-sys-green" />
          </div>
          <span className="font-mono text-xs font-medium text-sys-text tracking-wider">
            MARVIN-OS
          </span>
          <span className="font-mono text-xs text-sys-muted">v1.0</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-sys-muted hover:text-sys-text transition-colors rounded-md hover:bg-sys-surface"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sys-green pulse-dot" />
            <span className="font-mono text-xs text-sys-green">AVAILABLE</span>
          </div>
          <a
            href="mailto:marvinsaid1803@gmail.com"
            className="px-3 py-1.5 text-xs font-semibold bg-sys-text text-sys-bg rounded-md hover:bg-sys-text/90 transition-colors"
          >
            Hire Engineer
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-sys-muted hover:text-sys-text"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-sys-border bg-sys-bg/95 backdrop-blur-md"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-sys-muted hover:text-sys-text transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:marvinsaid1803@gmail.com"
                className="mt-2 py-2 px-4 text-sm font-semibold bg-sys-text text-sys-bg rounded-md text-center"
              >
                Hire Engineer
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
