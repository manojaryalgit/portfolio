import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink, Github, LayoutList } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  color: string;
  category: string;
  image: string;
  links: {
    paper?: string;
    github?: string;
    liveDemo?: string;
  };
  details: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Prediction of Earthquakes in Nepal",
    description: "Developed an LSTM-based model using time-series seismic data to predict earthquake events in Nepal's Himalayan region. Published in a peer-reviewed journal.",
    longDescription: "A comprehensive system that uses deep neural networks to analyze historical seismic data and predict potential earthquake events. The model incorporates multivariate time series analysis and anomaly detection algorithms to identify patterns preceding seismic activities.",
    technologies: ["Python", "TensorFlow", "LSTM", "Seismic Data Analysis"],
    category: "research",
    image: "/project-1.jpg",
    color: "from-[#00F0FF] via-[#D946EF] to-[#FF2A6D]",
    links: {
      paper: "https://doi.org/10.3126/bmcjsr.v7i1.73058",
      github: "#"
    },
    details: [
      "Implemented LSTM architecture for time-series prediction",
      "Analyzed seismic data from Nepal's Himalayan region",
      "Published findings in BMC Journal of Scientific Research",
      "Collaborated with experienced researchers in the field"
    ]
  },
  {
    id: 2,
    title: "Neural Networks for Earthquake Magnitude Prediction",
    description: "Comparative study of different neural network models for earthquake magnitude prediction, including LSTM, Random Forest, XG Boost, and GP Model.",
    longDescription: "Comprehensive research comparing various machine learning approaches for earthquake magnitude prediction. The study evaluates the performance of different models and identifies the most effective approach for seismic prediction.",
    technologies: ["Python", "Machine Learning", "Neural Networks", "Data Analysis"],
    category: "research",
    image: "/project-2.jpg",
    color: "from-[#00F0FF] via-[#D946EF] to-[#FF2A6D]",
    links: {
      paper: "#",
      github: "#"
    },
    details: [
      "Developed multiple machine learning models for comparison",
      "Implemented LSTM, Random Forest, XG Boost, and GP Model",
      "Conducted comparative analysis of model accuracies",
      "Paper currently under peer review"
    ]
  },
  {
    id: 3,
    title: "CanSat Data Analysis System",
    description: "Developed data analysis system for satellite-based scientific data collection during the CanSat workshop by ORION Space Pvt. Ltd.",
    longDescription: "Created a comprehensive data analysis system for processing and analyzing satellite data collected during the CanSat workshop. The system includes data processing pipelines and visualization tools.",
    technologies: ["Python", "Data Analysis", "Satellite Systems"],
    category: "workshop",
    image: "/project-3.jpg",
    color: "from-[#00F0FF] via-[#D946EF] to-[#FF2A6D]",
    links: {
      github: "#"
    },
    details: [
      "Participated in CanSat-based capacity-building workshop",
      "Worked with satellite systems and scientific data collection",
      "Developed data analysis pipelines",
      "Collaborated with space technology experts"
    ]
  },
  {
    id: 4,
    title: "Environmental Data Analysis Platform",
    description: "Developed a comprehensive platform for analyzing environmental data using Python and machine learning techniques.",
    longDescription: "A sophisticated environmental data analysis platform that processes and visualizes complex datasets. Incorporates statistical analysis and machine learning models to identify patterns and trends in environmental data.",
    technologies: ["Python", "Pandas", "NumPy", "Data Visualization", "Machine Learning"],
    category: "research",
    image: "/project-4.jpg",
    color: "from-[#00F0FF] via-[#D946EF] to-[#FF2A6D]",
    links: {
      github: "#",
      liveDemo: "#"
    },
    details: [
      "Built data processing pipelines using Python",
      "Implemented statistical analysis methods",
      "Created interactive data visualizations",
      "Applied machine learning for pattern recognition"
    ]
  }
];

const ProjectsSection = () => {
  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (id: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="section-container relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">RESEARCH PROJECTS</h2>
          <div className="gradient-line"></div>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Exploring the intersection of physics, machine learning, and geophysical phenomena
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative h-[300px] perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
            >
              <div 
                className={`flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${flippedCards[project.id] ? 'rotate-y-180' : ''}`}
                onClick={() => toggleCard(project.id)}
              >
                {/* Card Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden red-border glass rounded-xl overflow-hidden shadow-lg card-hover p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                    <motion.div 
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-[#00F0FF]" />
                    </motion.div>
                  </div>
                  
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] via-[#D946EF] to-[#FF2A6D] mb-4"></div>
                  
                  <p className="text-white/80 mb-6 text-lg">{project.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="text-sm text-white/90 mb-2 font-semibold">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 rounded glass text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Card Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 red-border glass rounded-xl overflow-hidden shadow-lg p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                    <ArrowUpRight className="w-6 h-6 text-[#00F0FF] rotate-180" />
                  </div>
                  
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00F0FF] via-[#D946EF] to-[#FF2A6D] mb-4"></div>
                  
                  <div className="flex-grow overflow-y-auto text-white/80 mb-4 custom-scrollbar pr-2">
                    <p className="text-md">{project.longDescription}</p>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3 mt-auto pt-3 border-t border-white/10">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-2 glass rounded-full">
                        <Github className="w-5 h-5 text-white hover:text-[#00F0FF] transition-colors" />
                      </a>
                    )}
                    
                    {project.links.liveDemo && (
                      <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="p-2 glass rounded-full">
                        <ExternalLink className="w-5 h-5 text-white hover:text-[#D946EF] transition-colors" />
                      </a>
                    )}
                    
                    <span className="text-xs text-white/50 flex-grow text-right mr-2">Click to flip back</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
