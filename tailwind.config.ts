import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.2), 0 20px 60px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(59,130,246,0.16), transparent 25%), radial-gradient(circle at 20% 90%, rgba(6,182,212,0.12), transparent 18%), linear-gradient(180deg, #0B1220 0%, #0F172A 100%)',
        'section-pattern': 'linear-gradient(180deg, rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)',
      },
      colors: {
        page: '#0B1220',
        surface: '#111827',
        surface2: '#0F172A',
        border: '#1F2937',
        primary: '#3B82F6',
        accent: '#06B6D4',
        text: '#F9FAFB',
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
