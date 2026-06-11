'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronRight, Car, BookOpen, ShoppingBag, Coins, UtensilsCrossed, Globe2, Brain } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Car Advisers',
    category: 'Automotive',
    icon: Car,
    tagline: 'Digital platform for automotive advisory services',
    description:
      'A production platform focused on vehicle-related consulting, user guidance, and service workflows with a responsive web experience.',
    tech: ['Next.js', 'React', 'Node.js', 'API Integrations'],
    features: [
      'Service-focused user flows',
      'Responsive frontend interface',
      'Scalable project structure',
      'Performance-focused implementation',
    ],
    gradient: 'from-teal-700/20 via-cyan-500/10 to-transparent',
    accent: '#14B8A6',
    accentBg: 'bg-teal-500/10',
    link: 'https://caradvisers.com',
    featured: true,
  },
  {
    id: 2,
    name: 'Idris Book Bank',
    category: 'Education',
    icon: BookOpen,
    tagline: 'Book sharing and educational resource platform',
    description:
      'A platform designed to improve access to books and learning resources with structured cataloging and user-friendly browsing.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST API'],
    features: [
      'Resource catalog management',
      'Optimized search and browsing',
      'Accessible design for learners',
      'Clean admin and content flows',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accent: '#22D3EE',
    accentBg: 'bg-cyan-500/10',
    link: 'https://idrisbookbank.com',
    featured: true,
  },
  {
    id: 3,
    name: 'Hunars.com',
    category: 'Marketplace',
    icon: ShoppingBag,
    tagline: 'Skills and services discovery platform',
    description:
      'A modern marketplace experience connecting users with skilled professionals and service offerings through streamlined interactions.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: [
      'Service discovery workflows',
      'Modern responsive UI',
      'Scalable backend services',
      'Real-world production deployment',
    ],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accent: '#8B5CF6',
    accentBg: 'bg-violet-500/10',
    link: 'https://hunars.com',
    featured: false,
  },
  {
    id: 4,
    name: 'Allcoin',
    category: 'Blockchain',
    icon: Coins,
    tagline: 'Crypto and blockchain focused web platform',
    description:
      'A blockchain-oriented project supporting crypto-focused workflows and web interfaces for decentralized ecosystem users.',
    tech: ['React', 'Web3', 'JavaScript', 'API Integrations'],
    features: [
      'Web3 integration foundations',
      'Blockchain product interface',
      'Secure frontend architecture',
      'Production-ready codebase',
    ],
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    accent: '#22C55E',
    accentBg: 'bg-green-500/10',
    link: 'https://allcoin.braav.co',
    featured: false,
  },
  {
    id: 5,
    name: 'Saborly.es',
    category: 'eCommerce',
    icon: UtensilsCrossed,
    tagline: 'Restaurant eCommerce platform with 6 language options',
    description:
      'An eCommerce solution for restaurants with multilingual customer journeys, localized content, and streamlined online ordering workflows.',
    tech: ['Next.js', 'React', 'Node.js', 'i18n'],
    features: [
      '6-language internationalization support',
      'Restaurant-focused ordering experience',
      'Localized content and UX',
      'Production-ready responsive storefront',
    ],
    gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    accent: '#F43F5E',
    accentBg: 'bg-rose-500/10',
    link: 'https://saborly.es',
    featured: false,
  },
  {
    id: 6,
    name: 'Braav',
    category: 'Platform',
    icon: Globe2,
    tagline: 'Modern web platform for digital solutions',
    description:
      'A production web platform focused on modern business workflows and strong technical execution across frontend and backend layers.',
    tech: ['Next.js', 'React', 'Node.js', 'Cloud Services'],
    features: [
      'Modern UI/UX system',
      'Scalable web architecture',
      'Optimized performance',
      'Reliable production deployment',
    ],
    gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    accent: '#0EA5E9',
    accentBg: 'bg-sky-500/10',
    link: 'https://braav.co',
    featured: false,
  },
  {
    id: 7,
    name: 'Sharp Logicians',
    category: 'Software',
    icon: Brain,
    tagline: 'Digital product and development platform',
    description:
      'A software-focused platform delivering modern development solutions with clean engineering and maintainable architecture.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'Cloud Deployment'],
    features: [
      'Client-focused delivery process',
      'Robust code architecture',
      'Cross-platform responsive UI',
      'Scalable deployment practices',
    ],
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent',
    accent: '#D946EF',
    accentBg: 'bg-fuchsia-500/10',
    link: 'https://sharplogicians.com',
    featured: false,
  },
];

const moreProjects = [
  { name: 'Sharp Logicians', link: 'https://sharplogicians.com' },
  { name: 'Meerabs', link: 'https://meerabs.com' },
  { name: 'Nameratailer', link: 'https://nameratailer.com' },
  { name: 'Chitral Hive', link: 'https://chitralhive.com' },
  { name: 'Aik Bank', link: null },
  { name: 'Zindagi App', link: null },
  { name: 'JS Bank', link: null },
  { name: 'And more...', link: null },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl border border-[rgba(var(--surface-rgb),0.06)] overflow-hidden cursor-default group ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${project.accent}15, transparent)`
          : 'rgba(var(--surface-rgb),0.03)',
        borderColor: hovered ? `${project.accent}30` : 'rgba(var(--surface-rgb),0.06)',
        transition: 'all 0.4s ease',
        boxShadow: hovered ? `0 20px 60px ${project.accent}15` : 'none',
      }}
    >
      {/* Top gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <div className="relative p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl ${project.accentBg} flex items-center justify-center border border-[rgba(var(--surface-rgb),0.08)]`}
            >
              <project.icon size={20} style={{ color: project.accent }} />
            </div>
            <div>
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ background: `${project.accent}20`, color: project.accent }}
              >
                {project.category}
              </span>
            </div>
          </div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-lg glass border border-[rgba(var(--surface-rgb),0.08)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Title */}
        <h3 className="font-syne font-bold text-xl text-[var(--text-primary)] mb-1.5">{project.name}</h3>
        <p className="text-sm mb-3" style={{ color: project.accent }}>{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{project.description}</p>

        {/* Key Features */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-2.5 font-medium">
            Key Features
          </p>
          <ul className="space-y-1.5">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <ChevronRight size={10} style={{ color: project.accent }} />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-md text-xs text-[var(--text-secondary)] border border-[rgba(var(--surface-rgb),0.06)]"
              style={{ background: `${project.accent}08` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Demo button */}
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 border transition-all duration-300"
          style={{
            background: hovered ? `${project.accent}20` : 'transparent',
            borderColor: hovered ? `${project.accent}50` : 'rgba(var(--surface-rgb),0.08)',
            color: hovered ? project.accent : 'var(--text-muted)',
          }}
        >
          <ExternalLink size={13} />
          View Demo
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [showMore, setShowMore] = useState(false);
  const visibleProjects = projects.slice(0, 6);

  return (
    <section id="projects" ref={ref} className="relative z-10 section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-teal-500" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">Work</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-5xl text-[var(--text-primary)]"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-muted)] text-sm max-w-xs"
          >
            Production-grade projects across AI, SaaS, and eCommerce
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-4 gap-5">
          {visibleProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowMore((prev) => !prev)}
            className="px-6 py-3 rounded-xl text-sm font-medium glass border border-[rgba(var(--surface-rgb),0.10)] text-[var(--text-primary)] hover:border-teal-500/30 hover:bg-[rgba(var(--surface-rgb),0.06)] transition-all duration-300"
          >
            {showMore ? 'Show Less' : 'View More'}
          </motion.button>
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35 }}
              className="mt-6 glass rounded-2xl p-6 border border-[rgba(var(--surface-rgb),0.06)]"
            >
              <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mb-4 font-medium">
                Remaining Projects
              </p>
              <div className="flex flex-wrap gap-2.5">
                {moreProjects.map((project) => (
                  project.link ? (
                    <a
                      key={project.name}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg glass border border-[rgba(var(--surface-rgb),0.08)] text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-teal-500/30 transition-colors"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span
                      key={project.name}
                      className="px-3 py-1.5 rounded-lg glass border border-[rgba(var(--surface-rgb),0.08)] text-xs text-[var(--text-muted)]"
                    >
                      {project.name}
                    </span>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
