'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Styling',
    items: ['Tailwind', 'CSS Modules', 'SASS', 'Bootstrap'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Vite', 'npm', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-text">Core strengths and tools I rely on.</h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="rounded-3xl border border-border/70 bg-surface p-6 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-text">{category.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {category.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl border border-border/70 bg-surface2/90 px-4 py-3 text-sm text-text transition hover:border-primary/70 hover:bg-primary/5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
