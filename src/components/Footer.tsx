import React from 'react';
import { Github, Linkedin, BookOpen, GraduationCap, BookMarked } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pb-8 bg-[#050113]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">MANOJ ARYAL</h2>
            <p className="text-white/60 text-sm">Exploring the Universe, One Algorithm at a Time</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/manojaryalgit" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/maryalnp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.researchgate.net/profile/Manoj-Aryal" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <BookMarked className="w-5 h-5" />
            </a>
            <a href="https://scholar.google.com/citations?user=manojaryal" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </a>
            <a href="https://orcid.org/0009-0008-2460-805X" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <GraduationCap className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-white/60 text-sm">
            © {currentYear} Manoj Aryal. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
