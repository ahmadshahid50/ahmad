'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="rounded-3xl border border-border/70 bg-surface p-8 shadow-soft"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-text">A focused Developer building delightful frontend experiences.</h2>
          </div>
          {/* <div className="h-16 w-16 rounded-3xl bg-white/5 ring-1 ring-cyan-400/15" /> */}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-8 text-muted">
            <p>
              I partner with product teams to translate complex ideas into performant, intuitive interfaces. My work blends thoughtful UI, scalable React architecture, and subtle motion for a professional digital presence.
            </p>
            <p>
              I enjoy creating polished applications using Next.js, TypeScript, Tailwind CSS, and modern frontend patterns. I bring precision, clarity, and a strong sense of product craft.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-border/70 bg-surface2 p-6 text-sm text-text/80">
            <div className="flex items-center justify-between rounded-2xl bg-surface/80 p-4">
              <span className="text-muted">Experience</span>
              <strong className="text-text">2+ years</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-surface/80 p-4">
              <span className="text-muted">Specialty</span>
              <strong className="text-text">Frontend Engineer</strong>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-surface/80 p-4">
              <span className="text-muted">Preferred stack</span>
              <strong className="text-text">Next.JS * React * JavaScript ES6</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
