import { useState } from 'react';
import { Cpu, Code2, Brain, Bug, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const tracks = [
  {
    id: 'iron-man',
    name: 'IRON MAN',
    subtitle: 'Full-Stack Hackathon',
    icon: Cpu,
    image: '/images/iron-man.jpeg',
    imageAlt: 'Iron Man illuminated by his arc reactor',
    accentText: 'text-marvel-red',
    accentBg: 'bg-marvel-red',
    accentSoft: 'bg-marvel-red/15',
    border: 'border-marvel-red/40',
    panel: 'bg-marvel-ink-2',
    description:
      'Build a production-ready web app in 48 hours. Suit up with your favorite stack and deploy a solution that could save the world.',
    skills: ['React', 'Node.js', 'Lovable Cloud', 'Deployment'],
    prize: '₹20,000',
  },
  {
    id: 'hulk',
    name: 'HULK',
    subtitle: 'UI/UX Design Battle',
    icon: Code2,
    image: '/images/hulk.jpeg',
    imageAlt: 'Hulk fists clenched together',
    accentText: 'text-hero-green',
    accentBg: 'bg-hero-green',
    accentSoft: 'bg-hero-green/15',
    border: 'border-hero-green/40',
    panel: 'bg-marvel-ink-2',
    description:
      'Smash the competition with breathtaking design. Create a Marvel-themed experience that would make even Bruce Banner jealous.',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'Animation'],
    prize: '₹10,000',
  },
  {
    id: 'thor',
    name: 'THOR',
    subtitle: 'Algorithm Showdown',
    icon: Brain,
    image: '/images/thor.jpeg',
    imageAlt: 'Thor surrounded by blue lightning with Mjolnir',
    accentText: 'text-lightning-blue',
    accentBg: 'bg-lightning-blue',
    accentSoft: 'bg-lightning-blue/15',
    border: 'border-lightning-blue/50',
    panel: 'bg-lightning-blue/10',
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
    image: '/images/spider-man.jpeg',
    imageAlt: 'Black venom-inspired Spider-Man emblem',
    accentText: 'text-venom-light',
    accentBg: 'bg-venom-light',
    accentSoft: 'bg-venom-light/10',
    border: 'border-venom-light/40',
    panel: 'bg-venom',
    description:
      'With great code comes great responsibility. Spot, squash, and fix bugs faster than a spider-sense can tingle.',
    skills: ['Debugging', 'Testing', 'Code Review', 'CI/CD'],
    prize: '₹8,000',
  },
];

export default function Tracks() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  const track = tracks[active] ?? tracks[0];
  if (!track) return null;
  const Icon = track.icon;

  return (
    <section id="tracks" className="relative py-24 md:py-32 overflow-hidden bg-marvel-ink-2/30">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />Choose Your Hero<span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            FOUR <span className="red-gradient">TRACKS</span>. ONE MISSION.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Event tracks">
          {tracks.map((item, index) => {
            const TabIcon = item.icon;
            const selected = active === index;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                key={item.id}
                onClick={() => setActive(index)}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-lg font-display text-lg transition-all duration-300 ${
                  selected ? `${item.accentBg} text-marvel-ink scale-105` : 'glass text-marvel-bone/60 hover:text-marvel-bone'
                }`}
              >
                <TabIcon className="w-4 h-4" />{item.name}
              </button>
            );
          })}
        </div>

        <div key={track.id} className={`relative overflow-hidden rounded-lg border animate-fade-in ${track.panel} ${track.border}`}>
          <img src={track.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover scale-110 blur-sm" />
          <div className="absolute inset-0 bg-marvel-ink/75" />
          <div className="relative grid md:grid-cols-[0.9fr_1.1fr] min-h-[520px]">
            <div className="relative min-h-80 md:min-h-full overflow-hidden">
              <img src={track.image} alt={track.imageAlt} className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-marvel-ink/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-marvel-ink/80" />
            </div>
            <div className="relative p-8 md:p-12 flex flex-col justify-center">
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${track.accentSoft}`}>
                <Icon className={`w-8 h-8 ${track.accentText}`} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-marvel-bone mb-1">{track.name}</h3>
              <p className={`font-mono text-sm uppercase text-marvel-bone/60 mb-4 ${track.accentText}`}>{track.subtitle}</p>
              <p className="text-marvel-bone/70 text-lg leading-relaxed mb-6">{track.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {track.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-md bg-marvel-ink-3/70 border border-marvel-steel/30 text-xs font-mono text-marvel-bone/60">{skill}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase text-marvel-bone/40 mb-1">Prize Pool</p>
                  <p className={`font-display text-5xl ${track.accentText}`}>{track.prize}</p>
                </div>
                <a href="#register" className={`group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-display text-lg text-marvel-ink transition-transform hover:scale-105 ${track.accentBg}`}>
                  JOIN {track.name}<ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
