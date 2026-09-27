import { useState } from 'react';
import { Cpu, Code2, Brain, Bug, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const tracks = [
  {
    id: 'iron-man',
    name: 'IRON MAN',
    subtitle: 'Full-Stack Hackathon',
    icon: Cpu,
    color: 'red',
    accent: '#ED1D24',
    description:
      'Build a production-ready web app in 24 hours. Suit up with your favorite stack and deploy a solution that could save the world.',
    skills: ['React', 'Node.js', 'Supabase', 'Deployment'],
    prize: '₹20,000',
  },
  {
    id: 'hulk',
    name: 'HULK',
    subtitle: 'UI/UX Design Battle',
    icon: Code2,
    color: 'green',
    accent: '#16A34A',
    description:
      'Smash the competition with breathtaking design. Create a Marvel-themed landing page that would make even Bruce Banner jealous.',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'Animation'],
    prize: '₹10,000',
  },
  {
    id: 'thor',
    name: 'THOR',
    subtitle: 'Algorithm Showdown',
    icon: Brain,
    color: 'gold',
    accent: '#F0A500',
    description:
      'Wield Mjolnir-level problem-solving. Compete in a live competitive programming arena against the sharpest minds in the multiverse.',
    skills: ['DSA', 'Competitive Programming', 'Optimization', 'Speed'],
    prize: '₹12,000',
  },
  {
    id: 'spider-man',
    name: 'SPIDER-MAN',
    subtitle: 'Bug Hunt & Debug',
    icon: Bug,
    color: 'blue',
    accent: '#3B82F6',
    description:
      'With great code comes great responsibility. Spot, squash, and fix bugs faster than a spider-sense can tingle.',
    skills: ['Debugging', 'Testing', 'Code Review', 'CI/CD'],
    prize: '₹8,000',
  },
];

export default function Tracks() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const track = tracks[active];
  const Icon = track.icon;

  return (
    <section id="tracks" className="relative py-24 md:py-32 overflow-hidden bg-marvel-ink-2/30">
      <div className="absolute inset-0 dots-bg opacity-20" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Choose Your Hero
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            FOUR <span className="red-gradient">TRACKS</span>. ONE MISSION.
          </h2>
        </div>

        {/* Track selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tracks.map((t, i) => {
            const TabIcon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl font-display text-lg tracking-wider transition-all duration-300 ${
                  active === i
                    ? 'bg-marvel-red text-white scale-105 shadow-lg shadow-marvel-red/30'
                    : 'glass text-marvel-bone/60 hover:text-marvel-bone hover:border-marvel-steel/50'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {t.name}
              </button>
            );
          })}
        </div>

        {/* Active track detail */}
        <div
          key={track.id}
          className="glass-card p-8 md:p-12 animate-fade-in relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 transition-colors duration-500"
            style={{ background: track.accent }}
          />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500"
                style={{ background: `${track.accent}20` }}
              >
                <Icon className="w-8 h-8 transition-colors duration-500" style={{ color: track.accent }} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-marvel-bone mb-1">
                {track.name}
              </h3>
              <p className="font-mono text-sm uppercase tracking-wider text-marvel-bone/40 mb-4">
                {track.subtitle}
              </p>
              <p className="text-marvel-bone/60 text-lg leading-relaxed mb-6">
                {track.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {track.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-marvel-ink-3/50 border border-marvel-steel/30 text-xs font-mono text-marvel-bone/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="text-right">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-marvel-bone/40 mb-2">
                  Prize Pool
                </p>
                <p
                  className="font-display text-6xl md:text-7xl transition-colors duration-500"
                  style={{ color: track.accent }}
                >
                  {track.prize}
                </p>
              </div>
              <a
                href="#register"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display text-lg tracking-wider text-marvel-ink transition-all duration-300 hover:scale-105"
                style={{ background: track.accent }}
              >
                JOIN {track.name}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
