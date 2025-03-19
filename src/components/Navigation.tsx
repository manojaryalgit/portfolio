import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle theme mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-pink-500/10 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-0 sm:px-4">
        <div className="flex items-center justify-between px-4 sm:px-0">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient font-space-grotesk tracking-wide">MANOJ ARYAL</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-600 dark:text-white/70 hover:text-pink-600 dark:hover:text-white transition-colors relative group text-sm font-medium rounded-full hover:bg-pink-50 dark:hover:bg-white/5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 dark:from-[hsl(var(--neon-blue))] dark:to-[hsl(var(--neon-pink))] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-pink-100 dark:hover:bg-white/10 transition-colors ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-pink-600" />
                )}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-pink-100 dark:hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-pink-600" />
                )}
              </motion.button>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-white p-2 focus:outline-none bg-gray-100 dark:bg-white/5 rounded-full hover:bg-pink-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-background/95 backdrop-blur-xl border-b border-pink-500/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-white/70 hover:text-pink-600 dark:hover:text-white py-3 px-4 rounded-lg border border-gray-200 dark:border-white/5 hover:border-pink-200 dark:hover:border-pink-500/20 hover:bg-pink-50 dark:hover:bg-white/5 transition-all"
                    onClick={toggleMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
