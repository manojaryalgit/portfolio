'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  trailLength: number;
  color: string;
  timestamp: number;
  opacity: number;
}

const NeonCursorTrail: React.FC = () => {
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const lastSpawnTimeRef = useRef(0);
  const lastUpdateTimeRef = useRef(performance.now());
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    '#EC4899', // Pink
    '#9333EA', // Purple
    '#22D3EE', // Cyan
    '#F472B6', // Light Pink
  ];

  const createParticle = (x: number, y: number, baseAngle: number, speed: number): Particle => {
    const angleVariation = (Math.random() - 0.5) * Math.PI / 6;
    const angle = baseAngle + angleVariation;
    const particleSpeed = speed * (Math.random() * 0.5 + 0.75);
    
    return {
      x,
      y,
      vx: Math.cos(angle) * particleSpeed,
      vy: Math.sin(angle) * particleSpeed,
      life: 1,
      maxLife: 1.0, // Reduced from 2.0 to 1.0 for faster fade
      trailLength: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      timestamp: performance.now(),
      opacity: 1
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const currentTime = performance.now();
      const newX = e.clientX;
      const newY = e.clientY;
      
      const dx = newX - prevMouseRef.current.x;
      const dy = newY - prevMouseRef.current.y;
      const moveAngle = Math.atan2(dy, dx);
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      if (speed > 0.5 && currentTime - lastSpawnTimeRef.current > 16) {
        const spawnCount = Math.min(3, Math.floor(speed / 10));
        
        for (let i = 0; i < spawnCount; i++) {
          particlesRef.current.push(createParticle(newX, newY, moveAngle, speed * 0.1));
        }
        
        lastSpawnTimeRef.current = currentTime;
      }
      
      prevMouseRef.current = { x: newX, y: newY };
    };

    const updateParticles = () => {
      const currentTime = performance.now();
      const deltaTime = (currentTime - lastUpdateTimeRef.current) / 1000;
      lastUpdateTimeRef.current = currentTime;

      particlesRef.current = particlesRef.current.filter((particle) => {
        // Continue movement with decay
        particle.x += particle.vx * deltaTime * 60;
        particle.y += particle.vy * deltaTime * 60;
        
        // Gradually slow down
        particle.vx *= 0.96;
        particle.vy *= 0.96;
        
        // Calculate age and fade
        const age = (currentTime - particle.timestamp) / 1000;
        particle.life = Math.max(0, 1 - (age / particle.maxLife));
        
        // Smooth opacity fade
        const targetOpacity = particle.life;
        const fadeSpeed = deltaTime * 4; // Increased from 3 to 4 for faster fade
        particle.opacity += (targetOpacity - particle.opacity) * fadeSpeed;
        
        return particle.opacity > 0.01; // Remove when nearly invisible
      });

      if (containerRef.current) {
        containerRef.current.style.transform = 'translate3d(0,0,0)'; // Force GPU acceleration
      }

      animationFrameRef.current = requestAnimationFrame(updateParticles);
    };

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      animationFrameRef.current = requestAnimationFrame(updateParticles);
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden will-change-transform"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      {particlesRef.current.map((particle, index) => (
        <div
          key={`${index}-${particle.timestamp}`}
          className="particle absolute"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.trailLength,
            height: '2px',
            transform: `translate(-50%, -50%) rotate(${Math.atan2(particle.vy, particle.vx)}rad)`,
            opacity: particle.opacity,
            background: `linear-gradient(90deg, 
              transparent 0%, 
              ${particle.color} 50%,
              ${particle.color}80 80%,
              transparent 100%
            )`,
            boxShadow: `0 0 4px ${particle.color}, 0 0 6px ${particle.color}`,
            filter: 'blur(0.3px)',
            willChange: 'transform, opacity',
            transition: 'opacity 0.2s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default NeonCursorTrail;
