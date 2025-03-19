
/**
 * Neon Cursor Trail Effect
 * Created from React component and converted to vanilla JS
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create cursor dot
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  // Trail properties
  const trailLength = 20;
  let trails = [];
  
  // Update cursor position
  function updateCursorPosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    // Update dot position
    cursorDot.style.left = `${x}px`;
    cursorDot.style.top = `${y}px`;
    
    // Add new trail point
    const now = Date.now();
    const newTrail = { x, y, timestamp: now };
    
    // Add to beginning and limit length
    trails.unshift(newTrail);
    trails = trails.slice(0, trailLength);
    
    // Update or create trail elements
    updateTrailElements();
  }
  
  // Create or update trail elements
  function updateTrailElements() {
    // Remove extra elements if trails array got shorter
    const existingTrails = document.querySelectorAll('.cursor-trail');
    if (existingTrails.length > trails.length) {
      for (let i = trails.length; i < existingTrails.length; i++) {
        existingTrails[i].remove();
      }
    }
    
    // Update existing or create new trail elements
    trails.forEach((trail, index) => {
      let trailElement = document.getElementById(`trail-${index}`);
      
      // Create if doesn't exist
      if (!trailElement) {
        trailElement = document.createElement('div');
        trailElement.className = 'cursor-trail';
        trailElement.id = `trail-${index}`;
        document.body.appendChild(trailElement);
      }
      
      // Calculate properties
      const opacity = 1 - (index / trailLength);
      const size = 18 - (index * 0.8);
      const hue = (index * 12) % 360;
      
      // Set styles
      trailElement.style.left = `${trail.x}px`;
      trailElement.style.top = `${trail.y}px`;
      trailElement.style.opacity = opacity;
      trailElement.style.width = `${size}px`;
      trailElement.style.height = `${size}px`;
      trailElement.style.transform = `scale(${1 - index * 0.05})`;
      trailElement.style.background = `linear-gradient(45deg, #00F0FF, #D946EF, #FF2A6D)`;
      trailElement.style.boxShadow = `0 0 8px 2px rgba(0, 240, 255, ${opacity * 0.5})`;
    });
  }
  
  // Add mouse move listener
  document.addEventListener('mousemove', updateCursorPosition);
  
  // Clean up function (optional, use if you need to remove the effect)
  window.removeNeonCursor = function() {
    document.removeEventListener('mousemove', updateCursorPosition);
    cursorDot.remove();
    document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
  };
});
