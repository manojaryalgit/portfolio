import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'next-themes';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import NeonCursorTrail from './components/NeonCursorTrail';
import BackgroundEffect from './components/BackgroundEffect';
import { motion } from 'framer-motion';

function App() {
  // Disable cursor on touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    
    document.body.classList.toggle('no-cursor-effects', isTouchDevice());
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen overflow-x-hidden">
        <BackgroundEffect />
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <NeonCursorTrail />
        </div>
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
