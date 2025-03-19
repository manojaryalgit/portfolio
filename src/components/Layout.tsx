'use client';

import React, { useState } from 'react';
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-foreground">
                  Portfolio
                </a>
              </div>
              <div className="flex items-center gap-6">
                <div className="hidden md:flex items-center gap-6">
                  <a href="/" className="text-foreground hover:text-pink-500 transition-colors">
                    Home
                  </a>
                  <a href="/about" className="text-foreground hover:text-pink-500 transition-colors">
                    About
                  </a>
                  <a href="/projects" className="text-foreground hover:text-pink-500 transition-colors">
                    Projects
                  </a>
                  <a href="/contact" className="text-foreground hover:text-pink-500 transition-colors">
                    Contact
                  </a>
                </div>
                <div className="flex items-center">
                  <ThemeToggle />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-pink-500/10"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
              <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg">
                <div className="flex flex-col space-y-6">
                  <a
                    href="/"
                    className="text-lg text-foreground hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-lg text-foreground hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="/projects"
                    className="text-lg text-foreground hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                    href="/contact"
                    className="text-lg text-foreground hover:text-pink-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <main className="pt-16">
          {children}
        </main>
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Manoj Aryal. All rights reserved.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Layout; 