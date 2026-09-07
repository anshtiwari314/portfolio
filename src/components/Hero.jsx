import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-purple/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-accent/15 blur-[80px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Hello, World 👋
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            I&apos;m{' '}
            <span className="gradient-text">{profile.shortName}</span>
          </h1>
          <h2 className="mt-4 font-display text-xl font-medium text-zinc-300 sm:text-2xl">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="btn-primary">
              More About Me
            </a>
            <a href={profile.resumeUrl} download className="btn-outline">
              <HiDownload size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-purple/30 blur-2xl" />
          <div className="relative animate-float rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-3 shadow-glow-purple">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-square w-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-xs font-medium text-white">
            4+ yrs @ Vitt AI
          </div>
          <div className="absolute -right-2 top-8 glass-card px-4 py-2 text-xs font-medium text-accent">
            Full Stack + AI
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-accent"
        aria-label="Scroll down"
      >
        <HiArrowDown className="animate-bounce" size={22} />
      </motion.a>
    </section>
  );
}
