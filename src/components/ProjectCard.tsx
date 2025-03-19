
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  detailedDescription: string;
  technologies: string[];
  challenges?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  detailedDescription,
  technologies,
  challenges
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div 
      className="perspective-1000 w-full h-[400px] relative cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div 
        className={`w-full h-full transform-style-3d transition-all duration-700 relative ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="backface-hidden absolute w-full h-full glass rounded-xl overflow-hidden">
          <div className="relative h-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
            <img src={image} alt={title} className="w-full h-full object-cover object-center" />
          </div>
          
          <div className="p-6 relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white/70 mb-4 line-clamp-2">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs rounded-full px-3 py-1 bg-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4">
              <span className="text-neon-blue text-sm">Click to view details</span>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="backface-hidden rotate-y-180 absolute w-full h-full glass rounded-xl overflow-hidden p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-neon-purple">{title}</h3>
              <div className="mb-4">
                <h4 className="text-white text-sm mb-1 font-medium">Description:</h4>
                <p className="text-white/80 text-sm custom-scrollbar overflow-y-auto max-h-24 mb-3">
                  {detailedDescription}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-white text-sm mb-1 font-medium">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs rounded-full px-2 py-0.5 bg-neon-blue/20 text-neon-blue border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {challenges && (
                <div className="mb-4">
                  <h4 className="text-white text-sm mb-1 font-medium">Challenges:</h4>
                  <p className="text-white/80 text-xs">{challenges}</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <div className="text-xs text-white/50">Click to flip back</div>
              <div className="flex gap-3">
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} className="text-white" />
                  </a>
                )}
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
