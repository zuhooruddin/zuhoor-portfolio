'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'zuhooruddin055@gmail.com', href: 'mailto:zuhooruddin055@gmail.com', color: 'text-teal-400' },
  { icon: Phone, label: 'Phone', value: '03239119309', href: 'tel:03239119309', color: 'text-cyan-400' },
  { icon: MessageCircle, label: 'WhatsApp', value: '03239119309', href: 'https://wa.me/923239119309', color: 'text-green-400' },
  { icon: MapPin, label: 'Location', value: 'Available Worldwide (Remote)', color: 'text-cyan-400' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', color: 'text-violet-400' },
];

type FormState = 'idle' | 'loading' | 'success';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    await new Promise((r) => setTimeout(r, 1800));
    setFormState('success');
    setTimeout(() => {
      setFormState('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative z-10 section-pad px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-teal-500" />
          <span className="text-teal-400 text-xs font-medium tracking-widest uppercase">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-syne font-bold text-4xl sm:text-5xl text-white mb-4"
        >
          Let&apos;s Build Something{' '}
          <span className="text-gradient">Great</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#6B7A99] mb-12 max-w-lg"
        >
          Have a project, an idea, or just want to connect? I&apos;d love to hear from you.
          Let&apos;s make something great together.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="glass rounded-xl p-5 border border-white/6 flex items-center gap-4"
                >
                  <div className={`w-10 h-10 rounded-lg glass flex items-center justify-center flex-shrink-0`}>
                    <Icon size={16} className={info.color} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7A99] mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={info.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className="text-sm text-white hover:text-teal-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Availability card */}
            <div className="glass rounded-xl p-6 border border-green-500/20 bg-gradient-to-br from-green-500/8 to-transparent">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Currently Available</span>
              </div>
              <p className="text-[#6B7A99] text-sm leading-relaxed">
                Open to freelance projects, long-term collaborations, and full-time opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border border-white/6">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-green-500/15 flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-[#6B7A99] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-[#6B7A99] mb-2 uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-[#4A5568] text-sm focus:outline-none focus:border-teal-500/40 focus:bg-white/6 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#6B7A99] mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-[#4A5568] text-sm focus:outline-none focus:border-teal-500/40 focus:bg-white/6 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-[#6B7A99] mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — what are you building? What's the timeline? Any specific requirements?"
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder:text-[#4A5568] text-sm focus:outline-none focus:border-teal-500/40 focus:bg-white/6 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={formState === 'loading'}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-teal-400 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 disabled:opacity-70"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[#4A5568]">
                    Your information is kept private and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
