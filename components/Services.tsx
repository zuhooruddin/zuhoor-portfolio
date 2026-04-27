'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, BrainCircuit, ShoppingCart, Workflow, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'SaaS Development',
    description:
      'End-to-end SaaS product development — from architecture design to multi-tenant systems, subscription billing, and scalable deployment pipelines.',
    items: [
      'Multi-tenant architecture',
      'Subscription & billing systems',
      'Role-based access control',
      'Admin dashboards & analytics',
    ],
    gradient: 'from-teal-700/15 to-cyan-500/5',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-500/15',
    accentColor: '#14B8A6',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description:
      'Seamlessly embed AI into your product — custom GPT chatbots, document intelligence, semantic search, and workflow automation using LLM APIs.',
    items: [
      'OpenAI & LangChain integration',
      'Custom chatbot builders',
      'Vector database & embeddings',
      'AI workflow orchestration',
    ],
    gradient: 'from-cyan-500/15 to-blue-500/5',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15',
    accentColor: '#22D3EE',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    description:
      'High-converting eCommerce solutions with custom checkout flows, payment integration, inventory management, and performance optimization.',
    items: [
      'Headless WooCommerce & Shopify',
      'Stripe & payment gateways',
      'Custom checkout & upsells',
      'Performance-optimized storefronts',
    ],
    gradient: 'from-violet-500/15 to-purple-500/5',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15',
    accentColor: '#8B5CF6',
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    description:
      'Build intelligent automation pipelines that eliminate repetitive tasks — from backend job queues to third-party API orchestration and event-driven workflows.',
    items: [
      'Celery & BullMQ job queues',
      'Webhook & API integrations',
      'Scheduled task automation',
      'Event-driven microservices',
    ],
    gradient: 'from-green-500/15 to-emerald-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/15',
    accentColor: '#22C55E',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" ref={ref} className="relative z-10 section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-teal-500" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">
            Services
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-syne font-bold text-4xl sm:text-5xl text-white"
          >
            What I <span className="text-gradient">Build</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#6B7A99] text-sm max-w-xs text-right"
          >
            Specialized services for modern digital products
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover rounded-2xl p-8 border border-white/6 bg-gradient-to-br ${service.gradient} group`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-6`}>
                  <Icon size={22} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="font-syne font-bold text-xl text-white mb-3">{service.title}</h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed mb-6">{service.description}</p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#8896B3]">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: service.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                  style={{ color: service.accentColor }}
                  whileHover={{ x: 4 }}
                >
                  Start a Project
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-700/10 via-transparent to-cyan-500/5 p-10 text-center"
        >
          <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-[#6B7A99] mb-6 max-w-md mx-auto">
            Let&apos;s collaborate and turn your idea into a high-quality digital product.
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-700 to-teal-400 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300"
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
