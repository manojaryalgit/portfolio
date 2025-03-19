import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Brain, Compass, Database, Beaker, Lightbulb, Target, Waves, Zap } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.5, 1]);

  const passions = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: "Machine Learning",
      description: "Developing innovative algorithms that identify patterns in complex datasets."
    },
    { 
      icon: <Waves className="w-6 h-6" />, 
      title: "Geophysics",
      description: "Analyzing Earth's physical properties to predict geological events."
    },
    { 
      icon: <Beaker className="w-6 h-6" />, 
      title: "Research",
      description: "Conducting in-depth analysis of complex phenomena using scientific methods."
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quantum Computing",
      description: "Exploring quantum mechanics for solving computational challenges."
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      title: "Data Science",
      description: "Extracting meaningful insights from large-scale datasets."
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Academic Excellence",
      description: "Pursuing the highest standards in research and publications."
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-24 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-background/90 z-0"></div>
      <div className="absolute inset-0 cyber-grid opacity-5 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">ABOUT ME</h2>
          <div className="gradient-line"></div>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            A physics graduate with a growing passion for programming and data science, 
            eager to apply scientific principles to real-world problems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Modern profile card - 5 columns on large screens */}
          <motion.div 
            className="lg:col-span-5 glass rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
              
              <motion.div 
                className="relative z-0 aspect-[4/3]"
                initial={{ scale: 1.05 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
              >
                {/* Minimal image effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-[#FF2A6D]/5"></div>
                <img 
                  src="/lovable-uploads/852dc021-e443-4e09-b003-87218d6977e1.png" 
                  alt="Manoj Aryal" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 className="text-3xl font-bold text-white">Manoj Aryal</h3>
                <p className="text-neon-blue text-lg mt-1">Physics Graduate & Tech Enthusiast</p>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <p className="text-white/90 leading-relaxed text-lg">
                  I am an enthusiastic <span className="text-neon-blue font-semibold">physics graduate</span> with a growing passion for <span className="text-neon-purple font-semibold">programming and data analysis</span>. I love exploring how technology can help us understand the world around us.
                </p>
                
                <p className="text-white/90 leading-relaxed">
                  Having completed my BSc in Physics from Tribhuvan University, I'm excited to combine my physics knowledge with programming skills. I'm particularly interested in applying computational methods to solve physics problems and analyze scientific data.
                </p>
                
                <div className="bg-white/5 p-4 rounded-lg border-l-2 border-neon-green">
                  <p className="text-white/90 leading-relaxed">
                    I'm currently working on an exciting project about <span className="text-neon-green font-semibold">Earthquake Data Analysis</span>, where I'm applying Python and machine learning concepts to study seismic patterns and their potential implications.
                  </p>
                </div>
              </div>
              
              <motion.div 
                className="mt-4 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Current Goal</h4>
                  <p className="text-white/70">Building expertise in data science and its applications in physics</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side content - 7 columns on large screens */}
          <motion.div 
            className="lg:col-span-7 grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Modern card layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="glass rounded-xl overflow-hidden p-6 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-neon-blue mb-4 border-b border-white/10 pb-2">Current Focus</h3>
                <ul className="space-y-3">
                  {["Advanced Python Programming", 
                    "Machine Learning Applications", 
                    "Scientific Computing and Visualization", 
                    "Physics-based Data Analysis"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex-shrink-0 mt-1"></div>
                      <span className="text-white/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="glass rounded-xl overflow-hidden p-6 backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-neon-purple mb-4 border-b border-white/10 pb-2">Developing Skills</h3>
                <ul className="space-y-3">
                  {["Data Analysis & Visualization", 
                    "Statistical Methods in Physics", 
                    "Computational Modeling", 
                    "Scientific Programming"].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                    >
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex-shrink-0 mt-1"></div>
                      <span className="text-white/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Interests/passions section with modern cards */}
            <motion.div 
              className="glass rounded-xl overflow-hidden p-6 backdrop-blur-md"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-neon-pink mb-6 border-b border-white/10 pb-2">My Passions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {passions.map((passion, index) => (
                  <motion.div 
                    key={passion.title}
                    className="p-4 bg-gradient-to-br from-white/5 to-white/10 rounded-lg border border-white/10 hover:border-neon-blue/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    whileHover={{ y: -5, borderColor: 'rgba(0, 240, 255, 0.5)' }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                      {passion.icon}
                    </div>
                    <h4 className="text-white font-medium text-base mb-1">{passion.title}</h4>
                    <p className="text-white/70 text-sm">{passion.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Quote section now in a separate full-width row */}
        <motion.div
          className="glass rounded-xl overflow-hidden p-6 backdrop-blur-xl border-l-2 border-neon-green mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Lightbulb className="w-8 h-8 text-neon-green flex-shrink-0" />
            <div>
              <p className="text-lg md:text-xl italic text-white/90">
                "I believe that combining my physics education with programming skills will open up exciting opportunities to solve interesting problems and make meaningful contributions."
              </p>
              <p className="text-right text-neon-green mt-2 text-sm">— My Learning Journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
