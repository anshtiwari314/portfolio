import { FaDribbble, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { profile } from '../data/portfolioData';
import SectionWrapper, { FadeIn } from './SectionWrapper';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  dribbble: FaDribbble,
};

export default function About() {
  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
  };

  return (
    <SectionWrapper id="about">
      <FadeIn>
        <h2 className="section-heading">About Me</h2>
        <p className="section-sub">Who I am and what drives me.</p>
      </FadeIn>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-5">
        <FadeIn delay={0.1} className="lg:col-span-2">
          <div className="relative mx-auto max-w-xs">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/40 to-accent-purple/40 blur-lg" />
            <img
              src={profile.aboutImage}
              alt={profile.name}
              className="relative w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />
            <div className="mt-6 flex justify-center gap-3">
              {profile.socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-accent/50 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="lg:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-zinc-400">
            {profile.about.map((para, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    <span className="font-semibold text-white">{para.split('—')[0]}—</span>
                    {para.split('—').slice(1).join('—')}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <HiDownload size={18} />
              Download Resume
            </a>
            <button type="button" onClick={copyEmail} className="btn-outline">
              Hire Me — Copy Email
            </button>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
