import { Trophy, Medal, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const prizes = [
  {
    place: '2nd',
    amount: '₹15,000',
    icon: Medal,
    color: 'from-slate-300 to-slate-500',
    glow: 'rgba(148, 163, 184, 0.2)',
    perks: ['Certificate of Valor', 'GFG Premium 3mo', 'Swag Kit', 'Mentor Session'],
  },
  {
    place: '1st',
    amount: '₹25,000',
    icon: Trophy,
    color: 'from-marvel-gold to-amber-600',
    glow: 'rgba(240, 165, 0, 0.3)',
    perks: ['Champion Trophy', 'GFG Premium 6mo', 'Premium Swag', 'Internship Referral', 'Feature on GFG Blog'],
    featured: true,
  },
  {
    place: '3rd',
    amount: '₹10,000',
    icon: Award,
    color: 'from-amber-600 to-amber-800',
    glow: 'rgba(180, 83, 9, 0.2)',
    perks: ['Certificate of Valor', 'GFG Premium 2mo', 'Swag Kit'],
  },
];

export default function Prizes() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="prizes" className="relative py-24 md:py-32 overflow-hidden bg-marvel-ink-2/30">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-marvel-gold/5 blur-[150px] rounded-full" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Spoils of Victory
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            THE <span className="gold-gradient">TREASURE</span>
          </h2>
          <p className="text-marvel-bone/50 mt-4 max-w-xl mx-auto">
            Heroes don't fight for glory alone. Here's what awaits the champions of the multiverse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-end">
          {prizes.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.place}
                className={`relative glass-card p-8 transition-all duration-500 hover:-translate-y-2 ${
                  p.featured ? 'md:scale-110 md:-mb-0 border-marvel-gold/30 arc-glow z-10' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-marvel-gold text-marvel-ink font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                    Champion
                  </div>
                )}

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <Icon className="w-8 h-8 text-marvel-ink" strokeWidth={2} />
                </div>

                <p className="font-mono text-xs uppercase tracking-[0.2em] text-marvel-bone/40 text-center mb-2">
                  {p.place} Place
                </p>
                <p className={`font-display text-5xl text-center mb-6 ${p.featured ? 'gold-gradient' : 'text-marvel-bone'}`}>
                  {p.amount}
                </p>

                <ul className="space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3 text-sm text-marvel-bone/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-marvel-red shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bonus prize banner */}
        <div className="mt-10 glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-marvel-red/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-marvel-red/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-marvel-red" />
            </div>
            <div>
              <p className="font-display text-xl text-marvel-bone tracking-wide">Best Team Name</p>
              <p className="text-sm text-marvel-bone/50">₹2,000 bonus for the most creative Marvel-themed team name</p>
            </div>
          </div>
          <span className="font-display text-2xl text-marvel-gold">+ ₹2,000</span>
        </div>
      </div>
    </section>
  );
}
