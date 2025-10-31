'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';

// Import our enhanced Open Pro components
import HeroHome from '@/components/templates/open-pro/hero-home';
import Workflows from '@/components/templates/open-pro/workflows';
import Features from '@/components/templates/open-pro/features';
import Testimonials from '@/components/templates/open-pro/testimonials';
import Cta from '@/components/templates/open-pro/cta';

export default function OpenProTemplatePage() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <Navigation />

      {/* Page Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900 to-black"
          animate={{
            background: [
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(17, 24, 39, 1) 50%, rgba(0, 0, 0, 1) 100%)",
              "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.2) 0%, rgba(17, 24, 39, 1) 50%, rgba(0, 0, 0, 1) 100%)",
              "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(17, 24, 39, 1) 50%, rgba(0, 0, 0, 1) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroHome />
        <Workflows />
        <Features />
        <Testimonials />
        <Cta />
      </div>
    </div>
  );
}