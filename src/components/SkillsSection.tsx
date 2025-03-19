import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Skill = {
  name: string;
  level: number;
  category: 'programming' | 'data' | 'physics' | 'tools' | 'machine_learning' | 'data_science';
  color: string;
  icon?: string;
};

const skills: Skill[] = [
  // Programming Skills
  {
    name: "Python",
    level: 90,
    category: "programming",
    color: "from-cyan-500/80 via-blue-600/80 to-purple-600/80"
  },
  {
    name: "JavaScript",
    level: 85,
    category: "programming",
    color: "from-yellow-500/80 via-amber-600/80 to-orange-600/80"
  },
  {
    name: "HTML/CSS",
    level: 85,
    category: "programming",
    color: "from-red-500/80 via-pink-600/80 to-rose-600/80"
  },
  
  // Machine Learning Tools
  {
    name: "TensorFlow",
    level: 88,
    category: "machine_learning",
    color: "from-orange-500/80 via-red-600/80 to-pink-600/80"
  },
  {
    name: "Keras",
    level: 85,
    category: "machine_learning",
    color: "from-red-500/80 via-rose-600/80 to-pink-600/80"
  },
  {
    name: "Scikit-learn",
    level: 85,
    category: "machine_learning",
    color: "from-blue-500/80 via-indigo-600/80 to-violet-600/80"
  },
  
  // Data Science Tools
  {
    name: "Pandas",
    level: 90,
    category: "data_science",
    color: "from-blue-500/80 via-purple-600/80 to-indigo-600/80"
  },
  {
    name: "NumPy",
    level: 88,
    category: "data_science",
    color: "from-cyan-500/80 via-blue-600/80 to-indigo-600/80"
  },
  {
    name: "Matplotlib",
    level: 85,
    category: "data_science",
    color: "from-green-500/80 via-emerald-600/80 to-teal-600/80"
  },
  {
    name: "PyGMT",
    level: 80,
    category: "data_science",
    color: "from-teal-500/80 via-cyan-600/80 to-blue-600/80"
  },
  {
    name: "Contextily",
    level: 80,
    category: "data_science",
    color: "from-indigo-500/80 via-purple-600/80 to-violet-600/80"
  },
  
  // Version Control
  {
    name: "Git",
    level: 85,
    category: "tools",
    color: "from-orange-500/80 via-red-600/80 to-rose-600/80"
  },
  {
    name: "GitHub",
    level: 85,
    category: "tools",
    color: "from-gray-500/80 via-slate-600/80 to-zinc-600/80"
  }
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skills);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = [
    {
      id: "all",
      name: "All Skills",
      color: "from-cyan-500/80 via-blue-600/80 to-purple-600/80"
    },
    {
      id: "programming",
      name: "Programming",
      color: "from-blue-500/80 via-indigo-600/80 to-violet-600/80"
    },
    {
      id: "machine_learning",
      name: "Machine Learning",
      color: "from-purple-500/80 via-pink-600/80 to-rose-600/80"
    },
    {
      id: "data_science",
      name: "Data Science",
      color: "from-green-500/80 via-emerald-600/80 to-teal-600/80"
    },
    {
      id: "tools",
      name: "Tools",
      color: "from-orange-500/80 via-amber-600/80 to-yellow-600/80"
    }
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden py-24">
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">TECHNICAL SKILLS</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[hsl(var(--neon-blue))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-pink))] mx-auto"></div>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Specialized in machine learning, data science, and physics simulation with expertise in various programming languages and tools.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 relative group overflow-hidden ${
                activeCategory === category.id
                  ? 'bg-black/50 text-white shadow-lg border border-white/10'
                  : 'border border-white/10 text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{category.name}</span>
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                  activeCategory === category.id ? 'opacity-30' : ''
                }`}
              />
              {activeCategory === category.id && (
                <motion.div 
                  className="absolute inset-0 border-2 rounded-full"
                  style={{
                    borderImage: `linear-gradient(to right, ${category.color.split(' ')[0].replace('from-', '')}, ${category.color.split(' ')[1].replace('to-', '')}) 1`
                  }}
                  layoutId="activeBorder"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
            exit="hidden"
            key={activeCategory}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                layout
                className="relative group"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div 
                  className="bg-black/40 backdrop-blur-sm p-6 rounded-lg h-full relative overflow-hidden border border-white/5"
                  whileHover={{ y: -5 }}
                >
                  {/* Animated border */}
                  <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 rounded-lg" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-500 transition-all duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-right text-white/70 text-sm font-mono">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                      <motion.div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.2)_20%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.2)_80%,transparent_100%)] animate-shimmer" />
                        <div className="absolute inset-0 border-r border-white/20" />
                      </motion.div>
                    </div>
                    
                    {hoveredSkill === skill.name && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center backdrop-blur-md rounded-lg bg-gradient-to-br from-black/90 via-black/95 to-black/90"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-center p-4 relative">
                          <div className={`bg-gradient-to-r ${skill.color} text-transparent bg-clip-text font-bold mb-3 text-2xl`}>
                            {skill.name}
                          </div>
                          <div className="text-sm text-white/90 font-mono mb-2">Proficiency: {skill.level}%</div>
                          <div className="text-xs text-white/60 capitalize font-mono">Category: {skill.category}</div>
                          <div className="absolute -inset-4 border border-white/10 rounded-lg" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${skill.color} rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
