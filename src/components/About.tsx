import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { icon: Users, value: '500+', label: 'Heroes Expected' },
  { icon: Trophy, value: '₹50K', label: 'Prize Pool' },
  { icon: Calendar, value: '24', label: 'Hours of Action' },
  { icon: MapPin, value: '4', label: 'Battle Tracks' },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-marvel-red/5 blur-[120px] rounded-full" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <span className="section-label mb-4">
              <span className="w-8 h-px bg-marvel-gold" />
              The Mission
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone mb-6 leading-tight">
              WHERE <span className="red-gradient">HEROES</span><br />
              ARE FORGED IN CODE
            </h2>
            <p className="text-marvel-bone/60 text-lg leading-relaxed mb-6">
              Welcome to the most epic tech event of the year. GeeksforGeeks
              Student Chapter, Bennett University brings you a Marvel-themed
              hackathon and tech fest that merges the worlds of comic-book
              heroism with cutting-edge technology.
            </p>
            <p className="text-marvel-bone/50 text-base leading-relaxed mb-8">
              Whether you're a Tony Stark of code, a Hulk of design, or a Thor of
              algorithms — there's a track that needs your power. Assemble your
              squad, pick your battle, and prove you have what it takes to save
              the world.
            </p>

            {/* Event meta */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-marvel-bone/70">
                <Calendar className="w-5 h-5 text-marvel-red shrink-0" />
                <span className="text-sm">
                  <span className="font-semibold text-marvel-bone">October 18–19, 2026</span>
                  {'  '}· 9:00 AM IST
                </span>
              </div>
              <div className="flex items-center gap-3 text-marvel-bone/70">
                <MapPin className="w-5 h-5 text-marvel-red shrink-0" />
                <span className="text-sm">
                  <span className="font-semibold text-marvel-bone">Bennett University</span>
                  {'  '}· Greater Noida, UP
                </span>
              </div>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="glass-card p-6 md:p-8 group hover:border-marvel-red/40 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-marvel-red/10 flex items-center justify-center mb-4 group-hover:bg-marvel-red/20 transition-colors">
                    <Icon className="w-6 h-6 text-marvel-red" />
                  </div>
                  <p className="font-display text-4xl md:text-5xl text-marvel-bone mb-1">
                    {s.value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-marvel-bone/40">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
