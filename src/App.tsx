import React, { useState, useEffect } from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'projects',
      'about',
      'skills',
      'experience',
      'education',
      'certifications',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-electric-purple/30 selection:text-white">
      {/* Subtle interactive constellation & neural particle canvas */}
      <NetworkBackground />

      {/* Fixed Sidebar on Desktop */}
      <Sidebar activeSection={activeSection} />

      {/* Top Navigation on Mobile & Tablet */}
      <MobileNav activeSection={activeSection} />

      {/* Main Content Area: Offset by desktop sidebar width */}
      <main className="lg:pl-72 xl:pl-80 relative z-10 transition-all duration-300">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
