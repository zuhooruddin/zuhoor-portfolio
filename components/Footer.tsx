'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code2, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/zuhooruddin',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zuhoor-uddin-916b171ab/',
    color: 'hover:text-cyan-400',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-cyan-400',
  },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/5 px-6 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-650 to-teal-400/60 flex items-center justify-center">
                <Code2 size={16} className="text-[#030812]" />
              </div>
              <span className="font-syne font-bold text-lg text-white">
                Zuhoor<span className="text-teal-400">.</span>
              </span>
            </div>
            <p className="text-sm text-[#6B7A99] leading-relaxed max-w-xs">
              Full-stack developer specializing in AI integrations, SaaS platforms, and modern eCommerce systems.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#6B7A99] mb-4 font-medium">
              Navigation
            </p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-[#6B7A99] hover:text-white transition-colors animated-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#6B7A99] mb-4 font-medium">
              Get in Touch
            </p>
            <p className="text-sm text-[#6B7A99] mb-2">zuhooruddin055@gmail.com</p>
            <p className="text-sm text-[#6B7A99] mb-5">Available for remote work</p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                    className={`w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-[#6B7A99] ${link.color} transition-all duration-200`}
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A5568]">
            © {new Date().getFullYear()} Zuhoor Uddin. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-[#6B7A99] hover:text-teal-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
