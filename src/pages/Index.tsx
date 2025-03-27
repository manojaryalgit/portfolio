import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#050113] text-white overflow-x-hidden px-0"
    >
      <NavOrbs />
      <MobileNav />
      <ScrollToTop />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-transition min-h-screen flex items-center justify-center"
        >
          <HeroSection />
        </motion.section>

        {/* About Section */}
        <motion.section 
          ref={aboutRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-transition reveal-on-scroll py-20"
        >
          <AboutSection />
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          ref={projectsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-transition reveal-on-scroll py-20"
        >
          <ProjectsSection />
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-transition reveal-on-scroll py-20"
        >
          <ContactSection />
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
