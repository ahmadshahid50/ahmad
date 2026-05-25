'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 lg:px-8">
      <div className="absolute inset-0 opacity-70 bg-hero-gradient" />
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-6 top-44 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl space-y-6 md:pr-10 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <motion.div variants={item} className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm uppercase tracking-[0.36em] text-primary shadow-soft mx-auto md:mx-0">
            Software Engineer / Frontend Developer
          </motion.div>
          <motion.div variants={item}>
            <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] text-text sm:text-6xl lg:text-7xl text-center md:text-left">
              Hi, I&apos;m <span className="text-primary">Ahmad</span>
            </h1>
            <div className="mt-4 text-1xl  text-primary sm:text-4xl">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Mern Enthusiast',
                  2000,
                  'React Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'Next.JS Developer',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </motion.div>
          {/* <motion.p variants={item} className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            I build elegant, performant web applications for fast-moving teams and ambitious products. Clean code, modern interfaces, and meaningful motion are my expertise.
          </motion.p> */}
          <motion.div variants={item} className="hidden md:flex md:flex-row md:items-center md:gap-4">
            <a
              href="/Ahmad.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-cyan-400 px-7 py-3 text-sm font-semibold text-page shadow-soft transition duration-300 hover:scale-[1.02]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-7 py-3 text-sm font-semibold text-text transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </motion.div>
          {/* Mobile image + buttons (visible under 768px) */}
          <motion.div variants={item} className="md:hidden flex flex-col items-center gap-6">
            <div className="relative h-72 w-72 rounded-full overflow-hidden">
              <Image src="/ahmad.png" alt="Ahmad" width={288} height={288} className="object-cover" />
            </div>
            <div className="flex w-full max-w-xs flex-col gap-3">
              <a
                href="/Ahmad.pdf"
                download
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-cyan-400 px-6 py-3 text-sm font-semibold text-page shadow-soft transition duration-300 hover:scale-[1.02]"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="hidden md:flex flex-shrink-0 w-full max-w-[320px] items-center justify-center overflow-hidden rounded-full border border-border/70 bg-surface2/95 p-2 shadow-glow"
        >
          <div className="relative h-80 w-90 rounded-full overflow-hidden">
            <Image
              src="/ahmad.png"
              alt="Ahmad"
              width={320}
              height={320}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
