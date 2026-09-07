import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { projects } from '../data/portfolioData';
import SectionWrapper, { FadeIn } from './SectionWrapper';

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-card transition hover:border-accent/30 hover:shadow-glow ${
        project.featured ? 'sm:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          <HiExternalLink size={14} />
        </div>
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-surface">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent transition">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="work" className="bg-surface-raised/50">
      <FadeIn>
        <h2 className="section-heading">Latest Works</h2>
        <p className="section-sub">
          A selection of projects — from enterprise apps to creative experiments.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + featured.length} />
        ))}
      </div>
    </SectionWrapper>
  );
}
