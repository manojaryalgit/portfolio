
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`block lg:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050113]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-4 py-4">
        <div className="text-xl font-bold">
          <a href="#home" className="text-white hover:text-red-500 transition-colors">
            MANOJ ARYAL
          </a>
        </div>
        
        <button
          onClick={toggleMenu}
          className="p-2 text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-[#050113]/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 p-4 text-white"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col items-center space-y-6 px-4 w-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-xl text-white hover:text-red-500 transition-colors relative group w-full py-3 px-4 rounded-lg border border-white/5 hover:border-pink-500/20 hover:bg-white/5"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
