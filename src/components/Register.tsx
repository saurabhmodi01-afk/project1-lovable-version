import { useState } from 'react';
import { User, Mail, Phone, Hash, Users, MessageSquare, Loader2, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useReveal } from '@/hooks/useReveal';

const trackOptions = [
  { value: 'iron-man', label: 'Iron Man — Full-Stack Hackathon' },
  { value: 'hulk', label: 'Hulk — UI/UX Design Battle' },
  { value: 'thor', label: 'Thor — Algorithm Showdown' },
  { value: 'spider-man', label: 'Spider-Man — Bug Hunt & Debug' },
];

const genderOptions = [
  { value: '', label: 'Select gender' },
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
] as const;

type TeamMember = { name: string; gender: string };
const emptyMembers = (): TeamMember[] => Array.from({ length: 5 }, () => ({ name: '', gender: '' }));

const registrationSchema = z.object({
  name: z.string().trim().min(1, 'Team lead name is required.').max(100),
  email: z.string().trim().email('Enter a valid college email.').max(255).refine((value) => value.toLowerCase().endsWith('@bennett.edu.in'), 'Only Bennett University college emails (@bennett.edu.in) are allowed.'),
  phone: z.string().trim().max(20),
  university_id: z.string().trim().min(1, 'Enrollment number is required.').max(50),
  track: z.string().min(1, 'Choose an event track.'),
  team_name: z.string().trim().min(1, 'Team name is required.').max(100),
  message: z.string().trim().max(1000),
  team_members: z.array(z.object({
    name: z.string().trim().min(1).max(100),
    gender: z.enum(['female', 'male', 'other']),
  })).length(5).refine((members) => members.some((member) => member.gender === 'female'), 'Every team must include at least one female member.'),
});

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Register() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', university_id: '', track: '', team_name: '', message: '' });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(emptyMembers);

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const updateMember = (index: number, key: keyof TeamMember, value: string) => {
    setTeamMembers((members) => members.map((member, memberIndex) => memberIndex === index ? { ...member, [key]: value } : member));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = registrationSchema.safeParse({ ...form, team_members: teamMembers });
    if (!parsed.success) {
      const teamIssue = parsed.error.issues.find((issue) => issue.path[0] === 'team_members');
      setStatus('error');
      setErrorMsg(teamIssue?.message === 'Required' ? 'Complete the name and gender for all five team members.' : parsed.error.issues[0]?.message ?? 'Please complete all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    const data = parsed.data;
    const { error } = await supabase.from('event_registrations').insert({
      name: data.name,
      email: data.email.toLowerCase(),
      phone: data.phone || null,
      university_id: data.university_id,
      track: data.track,
      team_name: data.team_name,
      team_members: data.team_members,
      message: data.message || null,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please check the team details and try again.');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', phone: '', university_id: '', track: '', team_name: '', message: '' });
    setTeamMembers(emptyMembers());
  };

  const inputClass = 'w-full bg-marvel-ink-3/50 border border-marvel-steel/30 rounded-lg px-4 py-3.5 text-marvel-bone placeholder-marvel-bone/30 text-sm focus:outline-none focus:border-marvel-red/50 focus:ring-1 focus:ring-marvel-red/30 transition-all';
  const iconInputClass = `${inputClass} pl-11`;

  return (
    <section id="register" className="relative py-24 md:py-32 overflow-hidden bg-marvel-ink-2/30">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div ref={ref} className={`relative max-w-4xl mx-auto px-5 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <span className="section-label mb-4 justify-center"><span className="w-8 h-px bg-marvel-gold" />Join the Ranks<span className="w-8 h-px bg-marvel-gold" /></span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-marvel-bone mb-4">BECOME A <span className="red-gradient">HERO</span></h2>
          <p className="text-marvel-bone/50 max-w-lg mx-auto">Register your five-member team. Every team must include at least one female member.</p>
        </div>

        {status === 'success' ? (
          <div className="glass-card p-10 text-center border-marvel-gold/30 arc-glow">
            <div className="w-20 h-20 rounded-full bg-marvel-gold/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow"><CheckCircle2 className="w-10 h-10 text-marvel-gold" /></div>
            <h3 className="font-display text-3xl text-marvel-bone mb-3">YOUR TEAM IS IN</h3>
            <p className="text-marvel-bone/60 mb-6">Your registration has been received. Check your email for further instructions.</p>
            <button type="button" onClick={() => setStatus('idle')} className="btn-ghost">REGISTER ANOTHER TEAM</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-10 space-y-7" noValidate>
            <fieldset className="space-y-5">
              <legend className="font-display text-2xl text-marvel-bone mb-4">TEAM LEAD</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="relative"><span className="sr-only">Team lead full name</span><User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" /><input required maxLength={100} type="text" placeholder="Team Lead Full Name *" value={form.name} onChange={(event) => update('name', event.target.value)} className={iconInputClass} /></label>
                <label className="relative"><span className="sr-only">College email</span><Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" /><input required maxLength={255} type="email" placeholder="College Email (@bennett.edu.in) *" value={form.email} onChange={(event) => update('email', event.target.value)} className={iconInputClass} /></label>
                <label className="relative"><span className="sr-only">Phone number</span><Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" /><input maxLength={20} type="tel" placeholder="Phone Number" value={form.phone} onChange={(event) => update('phone', event.target.value)} className={iconInputClass} /></label>
                <label className="relative"><span className="sr-only">Enrollment number</span><Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" /><input required maxLength={50} type="text" placeholder="Enrollment No. *" value={form.university_id} onChange={(event) => update('university_id', event.target.value)} className={iconInputClass} /></label>
              </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-marvel-steel/20 pt-7">
              <legend className="font-display text-2xl text-marvel-bone pr-3">TEAM DETAILS</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="relative"><span className="sr-only">Team name</span><Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-marvel-bone/30" /><input required maxLength={100} type="text" placeholder="Team Name *" value={form.team_name} onChange={(event) => update('team_name', event.target.value)} className={iconInputClass} /></label>
                <label><span className="sr-only">Event track</span><select required value={form.track} onChange={(event) => update('track', event.target.value)} className={`${inputClass} appearance-none cursor-pointer ${form.track ? '' : 'text-marvel-bone/30'}`}><option value="" disabled>Select Event Track *</option>{trackOptions.map((track) => <option key={track.value} value={track.value} className="bg-marvel-ink-3 text-marvel-bone">{track.label}</option>)}</select></label>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4"><p className="font-mono text-xs uppercase text-marvel-gold">Five members required</p><p className="text-xs text-marvel-bone/40">At least one female member</p></div>
                {teamMembers.map((member, index) => (
                  <div key={index} className="grid grid-cols-[2rem_1fr] sm:grid-cols-[2rem_1fr_11rem] gap-3 items-center">
                    <span className="font-display text-xl text-marvel-bone/40 text-center">{index + 1}</span>
                    <label><span className="sr-only">Member {index + 1} name</span><input required maxLength={100} type="text" placeholder={`Member ${index + 1} Name *`} value={member.name} onChange={(event) => updateMember(index, 'name', event.target.value)} className={inputClass} /></label>
                    <label className="col-start-2 sm:col-start-auto"><span className="sr-only">Member {index + 1} gender</span><select required value={member.gender} onChange={(event) => updateMember(index, 'gender', event.target.value)} className={`${inputClass} appearance-none cursor-pointer ${member.gender ? '' : 'text-marvel-bone/30'}`}>{genderOptions.map((option) => <option key={option.value || 'empty'} value={option.value} disabled={!option.value} className="bg-marvel-ink-3 text-marvel-bone">{option.label}</option>)}</select></label>
                  </div>
                ))}
              </div>
            </fieldset>

            <label className="relative block"><span className="sr-only">Message</span><MessageSquare className="absolute left-4 top-4 w-4 h-4 text-marvel-bone/30" /><textarea maxLength={1000} placeholder="Battle cry / message (optional)" value={form.message} onChange={(event) => update('message', event.target.value)} rows={3} className={`${iconInputClass} resize-none`} /></label>
            {status === 'error' && <div role="alert" className="flex items-center gap-2 px-4 py-3 rounded-lg bg-marvel-red/10 border border-marvel-red/30 text-marvel-bone text-sm"><AlertCircle className="w-4 h-4 shrink-0 text-marvel-red" />{errorMsg}</div>}
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed group">{status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" />ASSEMBLING...</> : <><Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />ASSEMBLE MY TEAM</>}</button>
            <p className="text-center text-xs text-marvel-bone/30 font-mono">Bennett University students only · Team of 5 · No fee</p>
          </form>
        )}
      </div>
    </section>
  );
}