import { useEffect, useState } from 'react';
import { ChevronDown, Zap, Star } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

const NEBULA = 'https://images.pexels.com/photos/37269529/pexels-photo-37269529.jpeg?auto=compress&cs=tinysrgb&w=1920';

function Counter({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 glass-card flex items-center justify-center border-marvel-red/30">
          <span className="font-display text-3xl sm:text-4xl md:text-5xl text-marvel-bone tabular-nums">
            {String(value).padStart(2, '0')}
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
    const id = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background layers */}
      <div className="absolute inset-0 -z-30">
        <img
          src={NEBULA}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marvel-ink/70 via-marvel-ink/80 to-marvel-ink" />
      </div>
      <div className="absolute inset-0 -z-20 grid-bg opacity-40" />
      <div className="absolute inset-0 -z-10 spotlight" />

      {/* Scan line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marvel-red/60 to-transparent animate-scan pointer-events-none" />

      {/* Floating particles */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-marvel-gold/30 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <Star className="w-3.5 h-3.5 text-marvel-gold fill-marvel-gold" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-marvel-gold">
            GeeksforGeeks · Bennett University Presents
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-display tracking-tight leading-[0.85] mb-6 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-marvel-bone">
            ASSEMBLE FOR THE
          </span>
          <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] red-gradient">
            MULTIVERSE
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg text-marvel-bone/60 mb-10 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A Marvel-themed tech fest where heroes are forged in code. Assemble your
          team, choose your track, and enter the multiverse of innovation.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 transition-all duration-1000 delay-300 ${
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

        {/* Countdown */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-marvel-bone/40 mb-4">
            The portal opens in
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <Counter value={t.days} label="Days" />
            <span className="font-display text-2xl text-marvel-red/50">:</span>
            <Counter value={t.hours} label="Hours" />
            <span className="font-display text-2xl text-marvel-red/50">:</span>
            <Counter value={t.minutes} label="Mins" />
            <span className="font-display text-2xl text-marvel-red/50">:</span>
            <Counter value={t.seconds} label="Secs" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-marvel-bone/30">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-marvel-bone/30 animate-bounce" />
      </div>
    </section>
  );
}
