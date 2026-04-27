'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Cpu, CreditCard, Bot, Server, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Terminal,
    title: 'Next.js + Node.js',
    desc: 'Full-stack JS applications with App Router, server components, and REST/GraphQL APIs',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: Server,
    title: 'Django + Celery',
    desc: 'Scalable Python backends with asynchronous task queues and background workers',
    color: 'text-green-400',
    bg: 'from-green-500/10 to-transparent',
  },
  {
    icon: CreditCard,
    title: 'Stripe & Payments',
    desc: 'Complete payment flows — subscriptions, webhooks, custom checkout, and invoicing',
    color: 'text-violet-400',
    bg: 'from-violet-500/10 to-transparent',
  },
  
  {
    icon: Bot,
    title: 'Chatbot & Automation',
    desc: 'GPT-4 powered chatbot builders, automation pipelines, and AI workflow orchestration',
    color: 'text-teal-400',
    bg: 'from-teal-700/10 to-transparent',
  },
  {
    icon: Layers,
    title: 'SaaS Architecture',
    desc: 'Multi-tenant SaaS platforms with role-based access, billing, and scalable infrastructure',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-transparent',
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    desc: 'OpenAI, LangChain, vector databases, embeddings, and intelligent automation systems',
    color: 'text-rose-400',
    bg: 'from-rose-500/10 to-transparent',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative z-10 section-pad px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-teal-500" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">About</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-bold text-4xl sm:text-5xl text-white mb-6"
        >
          Engineering digital
          <br />
          <span className="text-gradient">experiences that scale</span>
        </motion.h2>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Bio column (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8 border border-white/6 h-full">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br from-teal-700/30 to-cyan-500/20 border border-white/10 flex items-center justify-center text-4xl">
                🧑‍💻
              </div>

              <p className="text-[#8896B3] leading-relaxed mb-6">
                I&apos;m a full-stack developer with strong experience building scalable{' '}
                <span className="text-white font-medium">SaaS platforms</span>,{' '}
                <span className="text-white font-medium">eCommerce systems</span>,{' '}
                <span className="text-white font-medium">blockchain solutions</span>, and{' '}
                <span className="text-white font-medium">AI-powered applications</span> that solve real-world problems at scale.
              </p>

              <p className="text-[#6B7A99] leading-relaxed mb-8">
                From architecting production-grade backends to crafting pixel-perfect UIs, I bring a
                product-focused mindset to every project — shipping fast without sacrificing quality.
              </p>

              {/* Quick facts */}
              <div className="space-y-3">
                {[
                  { emoji: '📍', text: 'Available for remote & freelance' },
                  { emoji: '🎯', text: 'Focused on AI, SaaS, and Blockchain products' },
                  { emoji: '⚡', text: 'Fast delivery, clean architecture' },
                ].map((fact) => (
                  <div key={fact.text} className="flex items-center gap-3 text-sm text-[#8896B3]">
                    <span>{fact.emoji}</span>
                    {fact.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights grid (3/5) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass glass-hover rounded-xl p-5 border border-white/6 group cursor-default"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4`}>
                    <Icon size={18} className={item.color} />
                  </div>
                  <h3 className="font-syne font-semibold text-white text-sm mb-2">{item.title}</h3>
                  <p className="text-[#6B7A99] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
