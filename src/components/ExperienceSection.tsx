import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Experience = {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  details: string[];
};

const experiences = [
  {
    id: 1,
    title: "Research Presenter",
    company: "Nepal Academy of Science and Technology - NAST",
    location: "Lalitpur, Nepal",
    period: "September 2024",
    type: "Research",
    details: [
      "Presented research on 'Prediction of Earthquakes in Nepal and the adjoining regions using LSTM' at the 12th National Science Day",
      "Demonstrated the application of machine learning in geophysical research",
      "Engaged with the scientific community and received valuable feedback",
      "Contributed to the advancement of earthquake prediction research in Nepal"
    ]
  },
  {
    id: 2,
    title: "Workshop Participant",
    company: "ORION Space Pvt. Ltd.",
    location: "Bhaktapur, Nepal",
    period: "March 2023",
    type: "Technical",
    details: [
      "Participated in CanSat-based capacity-building workshop",
      "Learned about satellite systems and scientific data collection",
      "Developed practical skills in handling satellite data",
      "Collaborated with space technology professionals"
    ]
  },
  {
    id: 3,
    title: "Enumerator",
    company: "Central Bureau of Statistics (CBS)",
    location: "Nepal",
    period: "October 2021 - November 2021",
    type: "Professional",
    details: [
      "Worked as an Enumerator in National Census 2021 of Nepal",
      "Collected and validated demographic data",
      "Ensured accurate data collection and reporting",
      "Contributed to national statistical database"
    ]
  }
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">EXPERIENCE</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>
        
        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-px bg-white/10 transform md:-translate-x-px z-0">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue"
              style={{ height: lineHeight }}
            ></motion.div>
          </div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:pr-10'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`absolute top-0 ${index % 2 === 0 ? 'md:-left-4 left-0' : 'md:-right-4 left-0'} timeline-node z-10`}></div>
              
              <div className="cyber-border h-full">
                <div className="p-5 bg-cyber-dark/50 h-full">
                  <div className="mb-2">
                    <span className="text-xs font-code text-neon-blue">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-cyber font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-neon-purple font-cyber mb-3">{exp.company}</h4>
                  <p className="text-white/80 font-code text-sm">{exp.details.join('\n')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
