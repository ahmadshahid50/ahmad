import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Cursor from '../components/Cursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-text selection:bg-primary selection:text-page">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-section-pattern bg-[length:28px_28px] opacity-25" />
        <Hero />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 pb-20 pt-24 lg:px-8">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Cursor />
        </div>
      </main>
    </div>
  );
}
