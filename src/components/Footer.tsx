import { Shield, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-marvel-steel/20 py-16 overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-marvel-red/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-marvel-red flex items-center justify-center">
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
            </div>
            <p className="text-marvel-bone/50 text-sm leading-relaxed max-w-sm mb-6">
              A Marvel-themed tech fest by GeeksforGeeks Student Chapter,
              Bennett University. Where heroes are forged in code.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-lg glass flex items-center justify-center text-marvel-bone/50 hover:text-marvel-red hover:border-marvel-red/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-marvel-gold/70 mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Tracks', href: '#tracks' },
                { label: 'Schedule', href: '#schedule' },
                { label: 'Prizes', href: '#prizes' },
                { label: 'Register', href: '#register' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-marvel-bone/50 hover:text-marvel-bone transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-marvel-gold/70 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-marvel-bone/50">
                <MapPin className="w-4 h-4 text-marvel-red shrink-0 mt-0.5" />
                Bennett University, Greater Noida, Uttar Pradesh
              </li>
              <li className="flex items-start gap-2.5 text-sm text-marvel-bone/50">
                <Mail className="w-4 h-4 text-marvel-red shrink-0 mt-0.5" />
                gfg.bennett@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-marvel-steel/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-marvel-bone/30 font-mono">
            © 2026 GeeksforGeeks Student Chapter · Bennett University
          </p>
          <p className="text-xs text-marvel-bone/30 font-mono">
            Built with <span className="text-marvel-red">♥</span> for heroes
          </p>
        </div>
      </div>
    </footer>
  );
}
