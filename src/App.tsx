import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { LearningJourney } from './components/LearningJourney';
import { DeveloperSection } from './components/DeveloperSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'certifications',
      'exploring',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-[#e2e8f0] flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      <Navbar activeSection={activeSection} />
      
      <main id="portfolio-main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <LearningJourney />
        <DeveloperSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
