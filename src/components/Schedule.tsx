import { useReveal } from '@/hooks/useReveal';

const schedule = [
  {
    day: 'Day 01',
    date: 'Oct 18',
    items: [
      { time: '09:00', title: 'Assembly & Check-in', desc: 'Heroes gather. Badges distributed.', tag: 'Opening' },
      { time: '10:00', title: 'Opening Ceremony', desc: 'The portal opens. Rules of engagement revealed.', tag: 'Ceremony' },
      { time: '11:00', title: 'Hackathon Kicks Off', desc: '24-hour coding marathon begins. Build, deploy, conquer.', tag: 'Iron Man' },
      { time: '13:00', title: 'Algorithm Round 1', desc: 'First wave of competitive programming challenges.', tag: 'Thor' },
      { time: '16:00', title: 'Design Sprint', desc: 'UI/UX battle begins. 3 hours to create magic.', tag: 'Hulk' },
      { time: '20:00', title: 'Bug Hunt Arena', desc: 'Live debugging competition. Spot. Squash. Win.', tag: 'Spider-Man' },
    ],
  },
  {
    day: 'Day 02',
    date: 'Oct 19',
    items: [
      { time: '09:00', title: 'Mid-Hack Mentorship', desc: 'Industry mentors review projects. Pivot or persevere.', tag: 'Mentoring' },
      { time: '11:00', title: 'Algorithm Finals', desc: 'Top coders face off in the championship round.', tag: 'Thor' },
      { time: '14:00', title: 'Project Submissions', desc: 'Final push. Deploy and submit your builds.', tag: 'Deadline' },
      { time: '15:00', title: 'Judging & Showcase', desc: 'Live demos. Judges deliberate. Heroes hold their breath.', tag: 'Judging' },
      { time: '17:00', title: 'Award Ceremony', desc: 'Victors crowned. Prizes distributed. Multiverse saved.', tag: 'Awards' },
      { time: '18:00', title: 'Closing & Networking', desc: 'Celebrate, connect, and plan your next adventure.', tag: 'Closing' },
    ],
  },
];

export default function Schedule() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="schedule" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-marvel-red/5 blur-[120px] rounded-full" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-16">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Battle Plan
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            THE <span className="red-gradient">TIMELINE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, di) => (
            <div key={day.day} className="relative">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-display text-3xl text-marvel-red">{day.day}</span>
                <span className="font-mono text-sm text-marvel-bone/40">{day.date}</span>
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-marvel-red/50 before:via-marvel-steel/30 before:to-transparent">
                {day.items.map((item, i) => (
                  <div
                    key={i}
                    className="relative group"
                    style={{ animationDelay: `${(di * 6 + i) * 80}ms` }}
                  >
                    {/* Dot */}
                    <div className="absolute -left-[27px] top-4 w-3 h-3 rounded-full bg-marvel-ink border-2 border-marvel-red group-hover:bg-marvel-red group-hover:scale-125 transition-all duration-300" />

                    <div className="glass-card p-4 group-hover:border-marvel-red/30 transition-all duration-300">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <span className="font-mono text-sm text-marvel-gold tabular-nums">{item.time}</span>
                        <span className="px-2 py-0.5 rounded-md bg-marvel-red/10 text-[10px] font-mono uppercase tracking-wider text-marvel-red/80 whitespace-nowrap">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="font-display text-lg text-marvel-bone tracking-wide mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-marvel-bone/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
