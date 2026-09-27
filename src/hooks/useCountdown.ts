import { useEffect, useState } from 'react';

const EVENT_DATE = new Date('2026-10-18T09:00:00+05:30').getTime();

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EMPTY: Countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function calc(): Countdown {
  const diff = Math.max(0, EVENT_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Keep the SSR/initial render deterministic, but never show misleading 00s
// while the client is hydrating.
export function useCountdown() {
  const [time, setTime] = useState<Countdown>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(calc());
      setReady(true);
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return { ...time, ready };
}
