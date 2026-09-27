import { useEffect, useState } from 'react';

const EVENT_DATE = new Date('2026-10-18T09:00:00+05:30').getTime();

function calc() {
  const now = Date.now();
  const diff = Math.max(0, EVENT_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useCountdown() {
  const [time, setTime] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
