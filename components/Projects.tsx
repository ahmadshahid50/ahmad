'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Client Project',
    description: 'A performance-focused analytics dashboard with reusable UI components, server-side charts, and responsive interactions.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    name: 'Product Marketing Site',
    description: 'A polished marketing landing page with motion, custom content sections, and conversion-driven layout.',
    stack: ['React', 'Framer Motion', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Team Collaboration App',
    description: 'A collaborative workspace prototype with modern UI patterns, responsive panels, and rapid workflows.',
    stack: ['Next.js', 'Vite', 'TypeScript', 'CSS'],
    github: '#',
    demo: '#',
  },
  {
    name: 'Design System Kit',
    description: 'A reusable component library built for scalable frontend teams, including tokens, utilities, and dark mode patterns.',
    stack: ['React', 'Storybook', 'Tailwind'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-text">Selected work that demonstrates impact.</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group rounded-[2rem] border border-border/70 bg-surface p-6 shadow-soft transition-all duration-300 hover:border-cyan-400/50 hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-text">{project.name}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Featured</span>
              </div>
              <p className="mb-5 text-sm leading-7 text-muted">{project.description}</p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  className="rounded-full border border-border/70 bg-surface2 px-4 py-2 text-sm text-text transition hover:border-primary/80 hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="rounded-full bg-gradient-to-r from-primary to-cyan-400 px-4 py-2 text-sm font-semibold text-page transition hover:brightness-110"
                >
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
