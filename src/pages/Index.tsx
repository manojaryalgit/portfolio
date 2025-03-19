
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

const Index = () => {
  useEffect(() => {
    // Set dark theme for the portfolio
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="min-h-screen bg-[#050113] text-white overflow-x-hidden px-0">
      <NavOrbs />
      <MobileNav />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-16 lg:pt-24" // Add padding top to account for the fixed navigation
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
