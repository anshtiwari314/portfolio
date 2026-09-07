import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { skillGroups, education, experience } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import SectionWrapper, { FadeIn } from './SectionWrapper';

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="text-zinc-300">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

function Timeline({ items, type }) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent-purple to-transparent sm:left-1/2" />
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`relative flex sm:w-1/2 ${i % 2 === 0 ? 'sm:mr-auto sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'}`}
        >
          <div
            className={`absolute top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-surface-raised text-accent sm:left-1/2 sm:-translate-x-1/2 ${
              i % 2 === 0 ? 'left-0' : 'left-0 sm:left-1/2'
            }`}
          >
            {type === 'education' ? <FaGraduationCap size={12} /> : <FaBriefcase size={12} />}
          </div>
          <div className="ml-14 glass-card w-full p-5 sm:ml-0">
            <p className="text-xs font-medium uppercase tracking-wider text-accent">{item.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-zinc-300">{item.org}</p>
            <p className="text-sm text-zinc-500">{item.location}</p>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills');
  const { ref, inView } = useInView();

  return (
    <SectionWrapper id="skills">
      <FadeIn>
        <h2 className="section-heading">Skills & Journey</h2>
        <p className="section-sub">Technologies I work with and my professional path.</p>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-8">
        <div className="flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent to-accent-soft text-surface shadow-glow'
                  : 'border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </FadeIn>

      <div ref={ref} className="mt-10">
        <AnimatePresence mode="wait">
          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {skillGroups.map((group, gi) => (
                <div key={group.title} className="glass-card p-6">
                  <h3 className={`mb-5 font-display text-lg font-semibold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                    {group.title}
                  </h3>
                  <div className="space-y-4">
                    {group.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        {...skill}
                        color={group.color}
                        animate={inView}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Timeline items={education} type="education" />
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <Timeline items={experience} type="experience" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
