import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Light mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-transparent dark:to-transparent" />
      
      {/* Dark mode gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-0 dark:opacity-100 transition-opacity duration-300" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-white/10" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-900/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Accent colors */}
      <div className="absolute -left-[20%] top-0 h-[500px] w-[500px] rounded-full bg-pink-200/20 dark:bg-pink-900/20 blur-3xl" />
      <div className="absolute -right-[20%] top-1/3 h-[500px] w-[500px] rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl" />
    </div>
  );
};

export default BackgroundEffect; 