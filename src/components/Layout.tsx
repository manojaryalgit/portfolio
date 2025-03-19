'use client';

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {children}
    </div>
  );
};

export default Layout; 