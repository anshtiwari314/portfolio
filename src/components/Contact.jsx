import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { HiMail, HiMap, HiPhone } from 'react-icons/hi';
import { contactInfo, profile } from '../data/portfolioData';
import { db } from '../firebase';
import SectionWrapper, { FadeIn } from './SectionWrapper';

const iconMap = {
  mail: HiMail,
  phone: HiPhone,
  map: HiMap,
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.text) setStatus({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', text: 'All fields are required.' });
      return;
    }
    if (subject.trim().split(/\s+/).length < 2) {
      setStatus({ type: 'error', text: 'Subject should be at least two words.' });
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'portfolio-contact'), {
        name,
        email,
        subject,
        msg: message,
        timeStamp: serverTimestamp(),
      });
      setStatus({ type: 'success', text: 'Your message has been sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Failed to send message.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <FadeIn>
        <h2 className="section-heading">Contact Me</h2>
        <p className="section-sub">Have a project in mind? Let&apos;s talk.</p>
      </FadeIn>

      <div className="mt-12 grid gap-10 lg:grid-cols-5">
        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.label} className="glass-card flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-200">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Or email directly at{' '}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              {profile.email}
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 sm:p-8">
            {status.text && (
              <p
                className={`rounded-xl px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-red-500/10 text-red-400'
                }`}
              >
                {status.text}
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-accent/50"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-accent/50"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-accent/50"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-accent/50"
            />
            <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
