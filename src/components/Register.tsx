import { useState } from 'react';
import { User, Mail, Phone, Hash, Users, MessageSquare, Loader2, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

const trackOptions = [
  { value: 'iron-man', label: 'Iron Man — Full-Stack Hackathon' },
  { value: 'hulk', label: 'Hulk — UI/UX Design Battle' },
  { value: 'thor', label: 'Thor — Algorithm Showdown' },
  { value: 'spider-man', label: 'Spider-Man — Bug Hunt & Debug' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Register() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    university_id: '',
    track: '',
    team_name: '',
    message: '',
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.university_id.trim() || !form.track) {
      setStatus('error');
      setErrorMsg('Please fill in your name, college email, enrollment no., and choose a track.');
      return;
    }
    if (!form.email.trim().toLowerCase().endsWith('@bennett.edu.in')) {
      setStatus('error');
      setErrorMsg('Only Bennett University college emails (@bennett.edu.in) are allowed.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('event_registrations').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      university_id: form.university_id.trim() || null,
      track: form.track,
      team_name: form.team_name.trim() || null,
      message: form.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', phone: '', university_id: '', track: '', team_name: '', message: '' });
  };

  const inputClass =
    'w-full bg-marvel-ink-3/50 border border-marvel-steel/30 rounded-xl pl-11 pr-4 py-3.5 text-marvel-bone placeholder-marvel-bone/30 text-sm focus:outline-none focus:border-marvel-red/50 focus:ring-1 focus:ring-marvel-red/30 transition-all';

  return (
    <section id="register" className="relative py-24 md:py-32 overflow-hidden bg-marvel-ink-2/30">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-marvel-red/8 blur-[120px] rounded-full" />

      <div ref={ref} className={`relative max-w-3xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <span className="section-label mb-4 justify-center">
            <span className="w-8 h-px bg-marvel-gold" />
            Join the Ranks
            <span className="w-8 h-px bg-marvel-gold" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone mb-4">
            BECOME A <span className="red-gradient">HERO</span>
          </h2>
          <p className="text-marvel-bone/50 max-w-lg mx-auto">
            Fill out the form below to secure your spot. The portal closes soon.
          </p>
        </div>

        {status === 'success' ? (
          <div className="glass-card p-10 text-center border-marvel-gold/30 arc-glow">
            <div className="w-20 h-20 rounded-full bg-marvel-gold/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <CheckCircle2 className="w-10 h-10 text-marvel-gold" />
            </div>
            <h3 className="font-display text-3xl text-marvel-bone mb-3 tracking-wide">
              YOU'RE IN, HERO
            </h3>
            <p className="text-marvel-bone/60 mb-6">
              Your registration has been received. Check your email for further
              instructions. Suit up — we'll see you on the battlefield.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-ghost"
            >
              REGISTER ANOTHER HERO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" />
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass}
                />
              </div>
              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" />
                <input
                  type="email"
                  placeholder="College Email (@bennett.edu.in) *"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass}
                />
              </div>
              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass}
                />
              </div>
              {/* University ID */}
              <div className="relative">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" />
                <input
                  type="text"
                  placeholder="Enrollment No. *"
                  value={form.university_id}
                  onChange={(e) => update('university_id', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Track select */}
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30 pointer-events-none" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <select
                value={form.track}
                onChange={(e) => update('track', e.target.value)}
                className={`${inputClass} appearance-none cursor-pointer ${form.track ? '' : 'text-marvel-bone/30'}`}
              >
                <option value="" disabled>Select Your Track *</option>
                {trackOptions.map((t) => (
                  <option key={t.value} value={t.value} className="bg-marvel-ink-3 text-marvel-bone">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Team name */}
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" />
              <input
                type="text"
                placeholder="Team Name (optional)"
                value={form.team_name}
                onChange={(e) => update('team_name', e.target.value)}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-marvel-bone/30" />
              <textarea
                placeholder="Battle cry / message (optional)"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  ASSEMBLING...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  ASSEMBLE MY SPOT
                </>
              )}
            </button>

            <p className="text-center text-xs text-marvel-bone/30 font-mono">
              Bennett University students only · No fee · Just heroics
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
