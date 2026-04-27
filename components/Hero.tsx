'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Zap, Globe } from 'lucide-react';

const floatingTags = [
  { label: 'AWS', icon: '☁️', color: 'from-white/10 to-white/5', delay: 0 },
  { label: 'OpenAI API', icon: '🤖', color: 'from-teal-700/15 to-teal-400/5', delay: 0.3 },
  { label: 'Node.js', icon: '🚀', color: 'from-cyan-500/15 to-cyan-400/5', delay: 0.6 },
  { label: 'MongoDB', icon: '🗄️', color: 'from-green-500/10 to-green-400/5', delay: 0.9 },
  { label: 'Stripe', icon: '💳', color: 'from-violet-500/10 to-violet-400/5', delay: 1.1 },
  { label: 'Firebase', icon: '🔥', color: 'from-orange-500/10 to-orange-400/5', delay: 1.3 },
];

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '5+', label: 'Years Experience' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-6 z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-teal-500/20 text-teal-400 text-xs font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Available for new projects
              <Sparkles size={12} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-syne text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              <span className="text-white">Zuhoor</span>
              <br />
              <span className="text-gradient">Uddin</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-syne text-lg sm:text-xl text-[#8896B3] font-medium mb-4"
            >
              Full Stack Developer
              <span className="mx-2 text-teal-500">|</span>
              AI & SaaS Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#6B7A99] text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
            >
              Building scalable web apps, AI tools, and modern digital products
              — from concept to production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-teal-700 to-teal-400 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300"
              >
                <Zap size={15} />
                View Projects
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm glass border border-white/10 text-white hover:border-teal-500/30 hover:bg-white/6 transition-all duration-300"
              >
                <Globe size={15} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-syne font-bold text-xl sm:text-2xl text-gradient-subtle mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#6B7A99] leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Tech orbit visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Center element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-72 h-72"
            >
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-teal-500/10"
                style={{ animation: 'spin 25s linear infinite' }}
              />
              <div
                className="absolute inset-8 rounded-full border border-cyan-500/8"
                style={{ animation: 'spin 18s linear infinite reverse' }}
              />

              {/* Center card */}
              <div className="absolute inset-16 rounded-2xl glass border border-white/10 flex flex-col items-center justify-center gap-2">
                <div className="text-3xl">👨‍💻</div>
                <span className="font-syne font-bold text-xs text-white/80 text-center">
                  Full Stack
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-teal-700 to-cyan-400 rounded" />
              </div>

              {/* Orbiting tech tags */}
              {floatingTags.map((tag, i) => {
                const angle = (i / floatingTags.length) * 2 * Math.PI - Math.PI / 2;
                const r = 130;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <motion.div
                    key={tag.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + tag.delay, type: 'spring', stiffness: 200 }}
                    style={{
                      position: 'absolute',
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-md border border-white/8 text-xs font-medium text-white/90 whitespace-nowrap`}
                  >
                    <span>{tag.icon}</span>
                    {tag.label}
                  </motion.div>
                );
              })}

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-teal-500/5 blur-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-[#6B7A99] hover:text-teal-400 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
