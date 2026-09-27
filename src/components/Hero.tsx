import { useEffect, useState } from 'react';
import { ChevronDown, Zap, Star, CalendarDays, MapPin } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import multiverseAsset from '@/assets/Multiverse.jpeg.asset.json';

function Counter({ value, label, ready }: { value: number; label: string; ready: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 glass-card flex items-center justify-center border-marvel-red/30 shadow-[0_0_30px_rgba(0,0,0,0.25)]">
          <span className="font-display text-3xl sm:text-4xl md:text-5xl text-marvel-bone tabular-nums">
            {ready ? String(value).padStart(2, '0') : '--'}
          </span>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-marvel-red/5 blur-xl -z-10" />
      </div>
      <span className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-marvel-bone/50">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const t = useCountdown();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 100);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-14 scroll-mt-20"
    >
      {/* Main hero artwork */}
      <div className="absolute inset-0 -z-30">
        <img
          src={multiverseAsset.url}
          alt="Silhouettes of heroes assembled across the multiverse"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-ink/35 via-marvel-ink/45 to-marvel-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-marvel-ink/80 via-marvel-ink/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(10,10,14,0.12)_55%,rgba(10,10,14,0.72)_100%)]" />
      </div>

      <div className="absolute inset-0 -z-20 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute inset-0 -z-10 spotlight pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marvel-red/70 to-transparent animate-scan pointer-events-none" />

      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-marvel-gold/20 pointer-events-none animate-float"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 8.3) % 100}%`,
            top: `${(i * 13) % 80 + 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + (i % 4)}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-marvel-gold/30 mb-7 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Star className="w-3.5 h-3.5 text-marvel-gold fill-marvel-gold" />
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-marvel-gold">
            GeeksforGeeks · Bennett University Presents
          </span>
        </div>

        <h1
          className={`font-display tracking-tight leading-[0.84] mb-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-marvel-bone drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]">
            ASSEMBLE FOR THE
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] red-gradient drop-shadow-[0_4px_28px_rgba(0,0,0,0.8)]">
            MULTIVERSE
          </span>
        </h1>

        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg text-marvel-bone/75 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A Marvel-themed tech fest where heroes are forged in code. Assemble your
          team, choose your track, and enter the multiverse of innovation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-9 text-xs sm:text-sm font-mono uppercase tracking-wider text-marvel-bone/65">
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass">
            <CalendarDays className="w-4 h-4 text-marvel-red" />
            18–19 Oct 2026
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass">
            <MapPin className="w-4 h-4 text-marvel-red" />
            Bennett University
          </span>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="#register" className="btn-primary group w-full sm:w-auto">
            <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
            ASSEMBLE NOW
          </a>
          <a href="#about" className="btn-ghost w-full sm:w-auto">
            EXPLORE THE FEST
          </a>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-marvel-bone/50 mb-4">
            The portal opens in
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <Counter value={t.days} label="Days" ready={t.ready} />
            <span className="font-display text-2xl text-marvel-red/60">:</span>
            <Counter value={t.hours} label="Hours" ready={t.ready} />
            <span className="font-display text-2xl text-marvel-red/60">:</span>
            <Counter value={t.minutes} label="Mins" ready={t.ready} />
            <span className="font-display text-2xl text-marvel-red/60">:</span>
            <Counter value={t.seconds} label="Secs" ready={t.ready} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-marvel-bone/35">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-marvel-bone/35 animate-bounce" />
      </div>
    </section>
  );
}
