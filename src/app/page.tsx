'use client';

import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
// ... other imports

export default function Home() {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />
        {/* ... other sections */}
      </main>
    </Layout>
  );
} 