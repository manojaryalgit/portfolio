import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, FileText, Github, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });

      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const socialLinks = [{
    name: 'ORCID',
    icon: <FileText className="w-5 h-5" />,
    url: 'https://orcid.org/0009-0008-2460-805X',
    username: '0009-0008-2460-805X',
    color: 'bg-gradient-to-r from-neon-green to-neon-blue'
  }, {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com/in/maryalnp',
    username: 'maryalnp',
    color: 'bg-gradient-to-r from-neon-purple to-neon-blue'
  }, {
    name: 'ResearchGate',
    icon: <FileText className="w-5 h-5" />,
    url: 'https://www.researchgate.net/profile/Manoj-Aryal',
    username: 'manojaryal',
    color: 'bg-gradient-to-r from-neon-green to-neon-blue'
  }, {
    name: 'Google Scholar',
    icon: <FileText className="w-5 h-5" />,
    url: 'https://scholar.google.com/citations?user=manojaryal',
    username: 'manojaryal',
    color: 'bg-gradient-to-r from-neon-blue to-neon-green'
  }, {
    name: 'GitHub',
    icon: <Github className="w-5 h-5" />,
    url: 'https://github.com/manojaryalgit',
    username: 'manojaryalgit',
    color: 'bg-gradient-to-r from-neon-purple to-neon-pink'
  }];

  
  return <section id="contact" className="min-h-screen py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 cyber-grid opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="section-heading">CONTACT ME</h2>
          <div className="gradient-line"></div>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Let's connect to discuss research opportunities, collaborations, or any questions about 
            my work in physics and data science.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="cyber-border glass bg-black/40 p-8">
            <h3 className="text-2xl font-cyber text-white mb-6 flex items-center gap-2">
              <Send className="w-6 h-6 text-[#00F0FF]" />
              <span>Get In Touch</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input type="text" name="name" value={formState.name} onChange={handleChange} onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)} placeholder="Your Name" required className="w-full bg-cyber-dark/70 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none z-10 relative font-code" />
                <div className={`absolute inset-0 border border-neon-blue rounded-md transition-opacity duration-300 pointer-events-none animate-pulse-slow ${activeField === 'name' || formState.name ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <div className="relative">
                <input type="email" name="email" value={formState.email} onChange={handleChange} onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)} placeholder="Your Email" required className="w-full bg-cyber-dark/70 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none z-10 relative font-code" />
                <div className={`absolute inset-0 border border-neon-purple rounded-md transition-opacity duration-300 pointer-events-none animate-pulse-slow ${activeField === 'email' || formState.email ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <div className="relative">
                <textarea name="message" value={formState.message} onChange={handleChange} onFocus={() => setActiveField('message')} onBlur={() => setActiveField(null)} placeholder="Your Message" required rows={5} className="w-full bg-cyber-dark/70 border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none z-10 relative font-code"></textarea>
                <div className={`absolute inset-0 border border-neon-green rounded-md transition-opacity duration-300 pointer-events-none animate-pulse-slow ${activeField === 'message' || formState.message ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
              
              <button type="submit" disabled={isSubmitting || isSubmitted} className={`group relative overflow-hidden px-6 py-3 font-cyber text-white bg-cyber-dark border ${isSubmitted ? 'border-neon-green/70 bg-neon-green/10' : 'border-neon-blue/30 hover:border-neon-blue/70'} transition-all duration-300 rounded-md w-full sm:w-auto flex items-center justify-center gap-2`}>
                <span className="relative z-10">
                  {isSubmitting ? 'SENDING...' : isSubmitted ? 'MESSAGE SENT!' : 'SEND MESSAGE'}
                </span>
                {!isSubmitting && !isSubmitted && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                {isSubmitting && <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>}
                {isSubmitted && <span className="text-neon-green">✓</span>}
                <div className={`absolute inset-0 opacity-0 ${isSubmitted ? 'bg-gradient-to-r from-neon-green/20 to-neon-blue/20' : 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20'} group-hover:opacity-100 transition-opacity duration-300`}></div>
              </button>
            </form>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            
            <h3 className="text-2xl font-cyber text-white mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6 text-[#D946EF]" />
              <span>Connect With Me</span>
            </h3>
            
            <div className="cyber-border glass bg-black/40 overflow-hidden mb-8">
              <div className="p-6">
                <p className="font-code text-white/80 mb-6">I'm always open to discussing research opportunities, collaboration on projects, or questions about my work in physics, data science, machine learning, and other projects.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F0FF]/20 to-[#D946EF]/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <a href="mailto:manojaryal@example.com" className="font-code text-white/80 hover:text-white transition-colors">maryalnp@gmail.com</a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D946EF]/20 to-[#FF2A6D]/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-code text-white/80">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-cyber text-white mb-4 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#FF2A6D]"></div>
              <span>Social Profiles</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link, index) => <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-lg hover:border-[#00F0FF]/30 hover:bg-black/20 transition-all duration-300 flex items-center gap-3" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5 + index * 0.1
            }}>
                  <div className={`w-10 h-10 rounded-full ${link.color} flex items-center justify-center`}>
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <span className="font-cyber text-white block">{link.name}</span>
                    <span className="text-white/60 text-xs text-left">@{link.username}</span>
                  </div>
                </motion.a>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
