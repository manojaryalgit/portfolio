
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

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

const NavOrbs = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentActive = "#home";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
        currentActive = `#${section.id}`;
      }
    });

    setActiveLink(currentActive);
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 top-0 z-50 hidden lg:block w-full transition-all duration-300 ${scrolled ? 'bg-[#050113]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          <a href="#home" className="text-2xl font-bold text-white hover:text-red-500 transition-colors">
            MANOJ ARYAL
          </a>
          
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-white hover:text-red-500 transition-colors",
                  activeLink === link.href && "text-red-500"
                )}
              >
                {link.name}
                {activeLink === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavOrbs;
