import { useEffect, useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Register', href: '#register' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-marvel-ink/90 backdrop-blur-xl border-b border-marvel-steel/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg bg-marvel-red flex items-center justify-center transition-transform group-hover:rotate-12">
            <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-none">
            <p className="font-display text-xl tracking-wider text-marvel-bone">
              MULTIVERSE
            </p>
            <p className="font-mono text-[9px] tracking-[0.2em] text-marvel-gold/70 uppercase">
              GFG · Bennett
            </p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-marvel-bone/70 hover:text-marvel-bone transition-colors relative group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-marvel-red transition-all duration-300 group-hover:w-1/2" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#register"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-display tracking-wider text-white bg-marvel-red rounded-lg hover:bg-marvel-red-dark transition-colors"
        >
          ASSEMBLE
        </a>

        <button
          className="lg:hidden text-marvel-bone p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-5 py-4 space-y-1 bg-marvel-ink-2/95 backdrop-blur-xl border-t border-marvel-steel/20 mt-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-marvel-bone/80 hover:text-marvel-red transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
