import { useReveal } from '@/hooks/useReveal';

const sponsors = [
  { name: 'GeeksforGeeks', tier: 'Title Partner' },
  { name: 'Bennett University', tier: 'Host Institution' },
  { name: 'Supabase', tier: 'Tech Partner' },
  { name: 'Devfolio', tier: 'Platform Partner' },
  { name: 'GitHub', tier: 'Community Partner' },
  { name: 'Reskilll', tier: 'Community Partner' },
];

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Only students of Bennett University. First-year to final-year — all are welcome to assemble. You must register with your college email (@bennett.edu.in).',
  },
  {
    q: 'Do I need a team?',
    a: 'You can participate solo or in a team of up to 4 members. For the Iron Man hackathon track, teams of 2–4 are recommended.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No. Participation is completely free. You just need to register before the deadline and show up ready to save the multiverse.',
  },
  {
    q: 'What should I bring?',
    a: 'Your laptop, charger, college ID, and your hero spirit. Food, swag, and high-speed Wi-Fi will be provided throughout the event.',
  },
  {
    q: 'Will there be certificates?',
    a: 'Yes. Every participant receives a digital certificate of participation. Winners get special certificates of achievement.',
  },
  {
    q: 'Can I participate in multiple tracks?',
    a: 'You can register for one primary track, but you are free to spectate and join community events across all tracks.',
  },
];

export default function Sponsors() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sponsors" className="relative py-24 md:py-32 overflow-hidden">
      <div ref={ref} className={`relative max-w-7xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        {/* Sponsors */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Powered By
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            THE <span className="red-gradient">ALLIANCE</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {sponsors.map((s, i) => (
            <div
              key={s.name}
              className={`glass-card p-6 md:p-8 text-center group hover:border-marvel-red/30 transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? 'md:col-span-3 border-marvel-gold/20' : ''
              }`}
            >
              <p className={`font-display tracking-wide mb-1 transition-colors group-hover:text-marvel-gold ${
                i === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
              } text-marvel-bone`}>
                {s.name}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-marvel-bone/40">
                {s.tier}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="text-center mb-12">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Intelligence Briefing
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone">
            FREQUENTLY <span className="red-gradient">ASKED</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group glass-card overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                <span className="font-display text-lg tracking-wide text-marvel-bone">{f.q}</span>
                <span className="w-6 h-6 rounded-full bg-marvel-red/10 flex items-center justify-center shrink-0 group-open:rotate-45 transition-transform duration-300">
                  <svg className="w-3 h-3 text-marvel-red" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-5 text-marvel-bone/60 text-sm leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
