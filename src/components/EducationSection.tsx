import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Education = {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
  highlight?: boolean;
};

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Physics",
    institution: "Birendra Multiple Campus, Institute of Science & Technology, Tribhuvan University",
    period: "2019 - 2024",
    location: "Bharatpur, Nepal",
    details: [
      "Completed coursework in Mathematics (2 years)",
      "Completed coursework in Statistics (3 years)",
      "Majored in Physics",
      "Focus on computational physics and data analysis",
      "Research in earthquake prediction using machine learning"
    ],
    highlight: true
  },
  {
    id: 2,
    degree: "Python Programming Certification",
    institution: "Sara Academy (Udemy)",
    period: "September 2024",
    location: "Online",
    details: [
      "Completed Python Bootcamp For Beginners",
      "Focused on practical programming skills",
      "Developed foundation in Python programming",
      "Applied learning to data science projects"
    ],
    highlight: false
  },
  {
    id: 3,
    degree: 'Certification in Data Science',
    institution: 'Coursera, IBM Data Science Professional Certificate',
    period: '2023',
    location: 'Online',
    details: [
      'Advanced data analysis techniques and visualization',
      'Machine learning algorithms and applications',
      'Python for scientific computing'
    ]
  },
  {
    id: 4,
    degree: 'Deep Learning Specialization',
    institution: 'Coursera, DeepLearning.AI',
    period: '2023',
    location: 'Online',
    details: [
      'Neural Networks and Deep Learning',
      'Structuring Machine Learning Projects',
      'Convolutional Neural Networks',
      'Sequence Models'
    ]
  },


];

const EducationSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <section id="education" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">EDUCATION</h2>
          <div className="gradient-line"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: edu.id * 0.1 }}
              onMouseEnter={() => setHoveredItem(edu.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className={`cyber-border overflow-hidden transition-all duration-300 ${
                  hoveredItem === edu.id ? 'shadow-[0_0_20px_rgba(0,243,255,0.4)]' : ''
                } ${edu.highlight ? 'border-neon-blue/50' : ''}`}
              >
                <div className="p-6 bg-cyber-dark/50 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-cyber font-bold text-white group-hover:text-neon-blue transition-colors">{edu.degree}</h3>
                    <div className="neon-circle">
                      <div className="w-8 h-8 bg-cyber-dark rounded-full flex items-center justify-center">
                        <span className="text-neon-blue">{edu.id}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-neon-purple font-cyber">{edu.institution}</h4>
                    <span className="text-xs font-code text-white/70">{edu.period}</span>
                  </div>
                  
                  <motion.ul 
                    className="list-disc pl-5 space-y-2 font-code text-white/80 text-sm"
                    animate={{ 
                      opacity: hoveredItem === edu.id ? 1 : 0.8,
                      scale: hoveredItem === edu.id ? 1.02 : 1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {edu.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </motion.ul>
                </div>
              </div>
              
              {/* Holographic effect */}
              <div 
                className={`absolute -inset-px rounded-md bg-gradient-to-r from-neon-blue/0 via-neon-blue/50 to-neon-blue/0 animate-shimmer transition-opacity duration-300 pointer-events-none ${
                  hoveredItem === edu.id ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
