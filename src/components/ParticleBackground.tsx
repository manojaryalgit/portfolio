
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const colors = [
      'rgba(0, 243, 255, 0.7)',   // neon blue
      'rgba(155, 48, 255, 0.7)',  // neon purple
      'rgba(255, 0, 240, 0.7)',   // neon pink
      'rgba(0, 255, 143, 0.7)'    // neon green
    ];

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particlesRef.current.forEach((particle, i) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Connect particles within distance
        connectParticles(particle, i);
      });
      
      // Connect to mouse if it has moved
      if (mouseRef.current.x !== 0 || mouseRef.current.y !== 0) {
        particlesRef.current.forEach(particle => {
          const distance = Math.sqrt(
            Math.pow(mouseRef.current.x - particle.x, 2) + 
            Math.pow(mouseRef.current.y - particle.y, 2)
          );
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.2 - distance/600})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        });
      }
    };
    
    const connectParticles = (p: Particle, index: number) => {
      for (let i = index + 1; i < particlesRef.current.length; i++) {
        const p2 = particlesRef.current[i];
        const distance = Math.sqrt(
          Math.pow(p.x - p2.x, 2) + 
          Math.pow(p.y - p2.y, 2)
        );
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 - distance/1000})`;
          ctx.lineWidth = 0.3;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    initParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
