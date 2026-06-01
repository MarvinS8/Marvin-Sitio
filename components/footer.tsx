import { Terminal } from 'lucide-react'
import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-sys-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm bg-sys-surface-2 border border-sys-border-b flex items-center justify-center">
            <Terminal className="w-2.5 h-2.5 text-sys-green" />
          </div>
          <span className="font-mono text-xs text-sys-muted">
            MARVIN-OS v1.0 — Built with Next.js + TypeScript
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-sys-subtle">Cuernavaca, México</span>
          <span className="font-mono text-xs text-sys-subtle">·</span>
          <a
            href="mailto:marvinsaidlagunaslopez@gmail.com"
            className="font-mono text-xs text-sys-muted hover:text-sys-text transition-colors"
          >
            marvinsaidlagunaslopez@gmail.com
          </a>
          <span className="font-mono text-xs text-sys-subtle">·</span>
          <a
            href="https://github.com/MarvinS8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sys-muted hover:text-sys-text transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/marvin-said-lagunas-lopez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sys-muted hover:text-sys-text transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
