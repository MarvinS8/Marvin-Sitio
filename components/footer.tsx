import { Terminal } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-sys-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm bg-sys-surface-2 border border-sys-border-b flex items-center justify-center shrink-0">
            <Terminal className="w-2.5 h-2.5 text-sys-green" />
          </div>
          <span className="font-mono text-xs text-sys-muted">
            MARVIN-OS v1.0 — Next.js + TypeScript
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="font-mono text-xs text-sys-subtle">Cuernavaca, México</span>
          {/* Email hidden on xs, shown on sm+ */}
          <a
            href="mailto:marvinsaidlagunaslopez@gmail.com"
            className="hidden sm:inline font-mono text-xs text-sys-muted hover:text-sys-text transition-colors"
          >
            marvinsaidlagunaslopez@gmail.com
          </a>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MarvinS8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sys-muted hover:text-sys-text transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/marvin-said-lagunas-lopez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sys-muted hover:text-sys-text transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            {/* Email icon on xs only */}
            <a
              href="mailto:marvinsaidlagunaslopez@gmail.com"
              className="sm:hidden text-sys-muted hover:text-sys-text transition-colors text-xs font-mono"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
