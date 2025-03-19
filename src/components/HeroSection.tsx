import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <motion.div 
            className="text-center lg:text-left max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h4 
              className="inline-block bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-white/50 text-[20px] mb-4 px-[10px] py-2 font-bold tracking-[0.8px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                backgroundImage: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)'
              }}
            >
              Welcome to my Portfolio
            </motion.h4>
            
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              Hi! I'm Manoj Aryal!
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Exploring the Universe, One Algorithm at a Time
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.a 
                href="#contact" 
                className="primary-button group relative overflow-hidden text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-blue))]/20 to-[hsl(var(--neon-pink))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
              
              <motion.a 
                href="#projects" 
                className="px-6 py-3 glass border border-white/10 hover:border-[hsl(var(--neon-blue))]/30 text-white transition-all duration-300 group relative overflow-hidden text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-blue))]/10 to-[hsl(var(--neon-pink))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>

              <motion.a 
                href="/cv/Manoj_Aryal_CV.pdf" 
                download
                className="px-6 py-3 glass border border-white/10 hover:border-[hsl(var(--neon-pink))]/30 text-white transition-all duration-300 group relative overflow-hidden text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Download CV</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 relative z-10" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--neon-pink))]/10 to-[hsl(var(--neon-blue))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Physics-themed decorative elements */}
            
            {/* Atom Orbit 1 */}
            <motion.div
              className="absolute w-full h-full -inset-10 z-0 opacity-40"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <ellipse cx="100" cy="100" rx="80" ry="40" 
                  fill="none" 
                  stroke="rgba(147, 51, 234, 0.5)" 
                  strokeWidth="1" 
                  transform="rotate(30, 100, 100)"
                />
              </svg>
            </motion.div>
            
            {/* Atom Orbit 2 */}
            <motion.div
              className="absolute w-full h-full -inset-10 z-0 opacity-40"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <ellipse cx="100" cy="100" rx="75" ry="30" 
                  fill="none" 
                  stroke="rgba(236, 72, 153, 0.5)" 
                  strokeWidth="1" 
                  transform="rotate(75, 100, 100)"
                />
              </svg>
            </motion.div>
            
            {/* Quantum Particles */}
            {[...Array(5)].map((_, i) => {
              const angle = (i * 72) * (Math.PI / 180); // 5 particles evenly distributed
              const radius = 90 + (i % 2) * 15; // Alternating radius for variation
              const x = 100 + radius * Math.cos(angle);
              const y = 100 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute z-10"
                  style={{
                    left: `${(x / 200) * 100}%`,
                    top: `${(y / 200) * 100}%`,
                    marginLeft: '-10px',
                    marginTop: '-10px',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm" />
                </motion.div>
              );
            })}
            
            {/* Molecule Structure */}
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 opacity-50 z-10"
              animate={{
                y: [0, -5, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="30" r="6" fill="rgba(147, 51, 234, 0.8)" />
                <circle cx="30" cy="70" r="6" fill="rgba(147, 51, 234, 0.8)" />
                <circle cx="70" cy="70" r="6" fill="rgba(147, 51, 234, 0.8)" />
                <line x1="50" y1="30" x2="30" y2="70" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                <line x1="50" y1="30" x2="70" y2="70" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
                <line x1="30" y1="70" x2="70" y2="70" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="2" />
              </svg>
            </motion.div>
            
            {/* Math Symbols */}
            <motion.div 
              className="absolute -top-4 -left-4 w-20 h-20 opacity-50 z-10"
              animate={{
                y: [0, 8, 0],
                x: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <text x="10" y="40" fill="rgba(236, 72, 153, 0.8)" fontSize="20">∑</text>
                <text x="40" y="35" fill="rgba(147, 51, 234, 0.8)" fontSize="16">∫</text>
                <text x="65" y="55" fill="rgba(236, 72, 153, 0.8)" fontSize="24">Δ</text>
                <text x="35" y="70" fill="rgba(147, 51, 234, 0.8)" fontSize="18">∞</text>
              </svg>
            </motion.div>

            {/* Python Libraries */}
            <motion.div 
              className="absolute -top-8 right-0 w-32 opacity-60 z-10"
              animate={{
                y: [0, 5, 0],
                x: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 120 40" className="w-full">
                <text x="5" y="15" fill="rgba(147, 51, 234, 0.8)" fontSize="12">import numpy</text>
                <text x="10" y="30" fill="rgba(236, 72, 153, 0.8)" fontSize="12">import pandas</text>
              </svg>
            </motion.div>

            {/* Seismic Wave */}
            <motion.div
              className="absolute -left-12 top-1/2 w-24 opacity-40 z-10"
              animate={{
                x: [-10, 10, -10],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 100 30" className="w-full">
                <path
                  d="M 0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15"
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.8)"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>

            {/* Array Grid */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 opacity-30 z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <g key={`grid-row-${i}`}>
                    {[...Array(5)].map((_, j) => (
                      <rect
                        key={`grid-${i}-${j}`}
                        x={j * 20}
                        y={i * 20}
                        width="18"
                        height="18"
                        fill="none"
                        stroke="rgba(147, 51, 234, 0.5)"
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                ))}
              </svg>
            </motion.div>

            {/* Earthquake Magnitude Circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={`magnitude-${i}`}
                className="absolute"
                style={{
                  left: `${85 + i * 5}%`,
                  top: `${60 + i * 10}%`,
                  width: `${30 + i * 10}px`,
                  height: `${30 + i * 10}px`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2 + i,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <div className="w-full h-full rounded-full border border-pink-500/30 backdrop-blur-sm" />
              </motion.div>
            ))}

            {/* Data Points with Lines */}
            <motion.svg
              className="absolute -right-12 top-1/4 w-16 opacity-40"
              viewBox="0 0 60 100"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {[...Array(5)].map((_, i) => (
                <g key={`data-point-${i}`}>
                  <circle
                    cx="30"
                    cy={20 + i * 15}
                    r="3"
                    fill="rgba(236, 72, 153, 0.8)"
                  />
                  {i < 4 && (
                    <line
                      x1="30"
                      y1={20 + i * 15}
                      x2="30"
                      y2={35 + i * 15}
                      stroke="rgba(236, 72, 153, 0.5)"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                  )}
                </g>
              ))}
            </motion.svg>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />
            
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-border-glow" />
            
            {/* Main Image Container */}
            <motion.div
              className="relative rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm aspect-square w-full"
              animate={{
                y: [0, -10, 0],
                rotate: [0, -1, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <motion.div 
                className="absolute -inset-x-1/4 -top-1/4"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 200 200" className="w-full opacity-30">
                  <path
                    fill="rgba(147, 51, 234, 0.5)"
                    d="M 100 100 L 150 50 A 50 50 0 1 1 50 50 Z"
                  />
                </svg>
              </motion.div>

              <img
                src="/lovable-uploads/852dc021-e443-4e09-b003-87218d6977e1.png"
                alt="Manoj Aryal"
                className="w-full h-full object-cover object-center relative z-10 mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent mix-blend-overlay" />
            </motion.div>

            {/* Data Points */}
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-2 h-2 bg-purple-500 rounded-full"
                style={{
                  top: `${15 + i * 20}%`,
                  right: `${-5 - (i % 3) * 5}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + (i * 0.5),
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll Button */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(170,54,124,1)] to-[rgba(74,47,189,1)] font-semibold text-base mb-2">Scroll</p>
          <div className="w-[2px] h-8 bg-gradient-to-b from-[rgba(170,54,124,0.8)] to-[rgba(74,47,189,0.8)] mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
