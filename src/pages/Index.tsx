import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import NavOrbs from '@/components/NavOrbs';
import MobileNav from '@/components/MobileNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Index = () => {
  const heroRef = useScrollReveal(0.1);
  const aboutRef = useScrollReveal(0.1);
  const projectsRef = useScrollReveal(0.1);
  const contactRef = useScrollReveal(0.1);

  useEffect(() => {
    // Set dark theme for the portfolio
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen bg-[#050113] text-white overflow-x-hidden px-0">
      <NavOrbs />
      <MobileNav />
      <ScrollToTop />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="section-transition min-h-screen flex items-center justify-center"
        >
          <HeroSection />
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef}
          className="section-transition reveal-on-scroll py-20"
        >
          <AboutSection />
        </section>

        {/* Projects Section */}
        <section 
          ref={projectsRef}
          className="section-transition reveal-on-scroll py-20"
        >
          <ProjectsSection />
        </section>

        {/* Contact Section */}
        <section 
          ref={contactRef}
          className="section-transition reveal-on-scroll py-20"
        >
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
