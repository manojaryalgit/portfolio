import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.3,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.2 + 0.1,
        });
      }
    };
    createParticles();

    // Draw grid
    const drawGrid = () => {
      const gridSize = 100; // Main grid size
      const subGridSize = gridSize / 4; // Sub-grid size
      
      // Draw main grid
      ctx.strokeStyle = 'rgba(147, 51, 234, 0.15)'; // Brighter purple for main grid
      ctx.lineWidth = 0.5;

      // Draw vertical lines for main grid
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines for main grid
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw sub-grid with gradient effect
      for (let x = 0; x < canvas.width; x += subGridSize) {
        if (x % gridSize !== 0) { // Skip main grid lines
          const opacity = ((x % gridSize) / gridSize) * 0.08 + 0.04; // Varying opacity
          ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
      }

      for (let y = 0; y < canvas.height; y += subGridSize) {
        if (y % gridSize !== 0) { // Skip main grid lines
          const opacity = ((y % gridSize) / gridSize) * 0.08 + 0.04; // Varying opacity
          ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      // Add subtle glow effect at grid intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4);
          gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
          gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(x - 4, y - 4, 8, 8);
        }
      }
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0D0A14'; // Dark background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid first
      drawGrid();

      // Then draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, `rgba(147, 51, 234, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="background-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: '#0D0A14',
      }}
    />
  );
};

export default BackgroundEffect; 