'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'NextClick IT Solutions',
    duration: '2023 - Present',
    bullets: [
      'Led frontend architecture for a mission-critical SaaS platform used by enterprise teams.',
      'Implemented component-driven design systems with Tailwind and reusable React patterns.',
      'Improved page performance and accessibility across key product flows.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Bin Yousaf',
    duration: '2023 - 2023',
    bullets: [
      'Ship polished landing pages and user dashboards for high-growth startups.',
      'Built interactive UI modules using Next.js, TypeScript, and motion design.',
      'Collaborated with designers to refine UI/UX across web products.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-text">Work history with impact-driven outcomes.</h2>
        </motion.div>

        <div className="relative border-l border-border/50 pl-6">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10 last:mb-0"
            >
              <div className="absolute -left-4 top-2 h-3 w-3 rounded-full bg-cyan-400 ring-8 ring-surface2" />
              <div className="rounded-3xl border border-border/70 bg-surface p-6 shadow-soft">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-text">{item.role}</p>
                    <p className="text-sm text-muted">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-surface2 px-4 py-2 text-sm text-text/70">{item.duration}</span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
