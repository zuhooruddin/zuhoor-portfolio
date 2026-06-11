'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-cyan-500/20 to-blue-500/5',
    accent: '#22D3EE',
    skills: [
      { name: 'Next.js / React', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Framer Motion', level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-teal-700/20 to-cyan-500/5',
    accent: '#14B8A6',
    skills: [
      { name: 'Node.js / Express', level: 94 },
      { name: 'Django / FastAPI', level: 85 },
      { name: 'REST & GraphQL APIs', level: 90 },
      { name: 'WebSockets', level: 80 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-green-500/20 to-emerald-500/5',
    accent: '#22C55E',
    skills: [
      { name: 'MongoDB', level: 92 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-violet-500/20 to-purple-500/5',
    accent: '#8B5CF6',
    skills: [
      { name: 'Firebase', level: 88 },
      { name: 'Stripe / Payments', level: 91 },
      { name: 'OpenAI API', level: 87 },
      { name: 'Blockchain / Web3', level: 84 },
      { name: 'Docker / CI-CD', level: 78 },
    ],
  },
];

const techBadges = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Django',
  'MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Stripe', 'OpenAI API',
  'WebSockets', 'Docker', 'AWS', 'Celery', 'WooCommerce', 'Tailwind',
  'Framer Motion', 'GraphQL', 'REST API', 'Git', 'Vercel', 'LangChain', 'Blockchain', 'Web3',
];

function SkillBar({
  name, level, accent, delay,
}: {
  name: string; level: number; accent: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[var(--text-secondary)]">{name}</span>
        <span className="text-xs font-mono text-[var(--text-muted)]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(var(--surface-rgb),0.05)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}80, ${accent})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative z-10 section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-teal-500" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">
            Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl sm:text-5xl text-[var(--text-primary)] mb-4"
        >
          Skills &{' '}
          <span className="text-gradient">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[var(--text-muted)] mb-12 max-w-xl"
        >
          A curated stack built for shipping production-grade applications fast.
        </motion.p>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + gi * 0.1 }}
              className={`glass rounded-2xl p-6 border border-[rgba(var(--surface-rgb),0.06)] bg-gradient-to-br ${group.color}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-syne font-semibold text-[var(--text-primary)] text-sm">{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={group.accent}
                  delay={0.4 + gi * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="glass rounded-2xl p-8 border border-[rgba(var(--surface-rgb),0.06)]"
        >
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-widest mb-5 font-medium">
            Full Tech Stack
          </p>
          <div className="flex flex-wrap gap-2.5">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.03 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(240,165,0,0.4)' }}
                className="px-3 py-1.5 rounded-lg glass border border-[rgba(var(--surface-rgb),0.08)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-default transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
