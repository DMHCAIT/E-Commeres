'use client';

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Sparkles, 
  Target, 
  Users, 
  BarChart3,
  Clock,
  Globe
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching and CDN distribution."
    },
    {
      icon: Shield,
      title: "Enterprise Security", 
      description: "Bank-grade security with end-to-end encryption and compliance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for seamless teamwork."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights with detailed performance metrics."
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Worldwide infrastructure supporting millions of users."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support from our expert team."
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background decorations */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[760px] h-[668px] bg-gradient-to-r from-gray-500/5 to-indigo-500/10 rounded-full blur-3xl" />
      </motion.div>
      
      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        animate={{ 
          rotate: [360, 180, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[760px] h-[668px] bg-gradient-to-l from-purple-500/5 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <motion.div 
            className="mx-auto max-w-3xl pb-16 text-center md:pb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-3 pb-3 font-medium text-indigo-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>Features</span>
            </motion.div>
            <motion.h2 
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Everything you need to succeed
            </motion.h2>
            <motion.p 
              className="text-lg text-indigo-200/65"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Powerful features designed to help your team build better products faster.
            </motion.p>
          </motion.div>

          {/* Main illustration */}
          <motion.div 
            className="pb-16 md:pb-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Background glow */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-900 via-indigo-900/50 to-purple-900/30 p-8 shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Mock dashboard interface */}
                <div className="h-full grid grid-cols-12 gap-6">
                  {/* Sidebar */}
                  <div className="col-span-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="space-y-3">
                      <motion.div 
                        className="h-8 bg-indigo-500/20 rounded-lg"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="h-6 bg-purple-500/15 rounded-lg"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <motion.div 
                        className="h-6 bg-blue-500/15 rounded-lg"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-9 space-y-4">
                    {/* Top bar */}
                    <motion.div 
                      className="h-12 bg-white/5 rounded-xl backdrop-blur-sm flex items-center px-4"
                      animate={{ 
                        background: [
                          "rgba(255, 255, 255, 0.05)",
                          "rgba(99, 102, 241, 0.1)",
                          "rgba(255, 255, 255, 0.05)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    {/* Content grid */}
                    <div className="grid grid-cols-3 gap-4 h-32">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="bg-gradient-to-br from-white/10 to-indigo-500/5 rounded-lg p-4 backdrop-blur-sm"
                          animate={{ 
                            y: [0, -8, 0],
                            scale: [1, 1.02, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.5,
                            ease: "easeInOut"
                          }}
                        >
                          <motion.div 
                            className="w-full h-4 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded mb-2"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <div className="space-y-2">
                            <div className="h-2 bg-white/20 rounded w-3/4"></div>
                            <div className="h-2 bg-white/15 rounded w-1/2"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-6 right-6 w-4 h-4 bg-indigo-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 w-3 h-3 bg-purple-400 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div 
            className="mx-auto max-w-sm items-start gap-8 sm:max-w-none sm:grid sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex h-full flex-col items-center rounded-2xl border border-transparent bg-gradient-to-b from-gray-800/50 to-gray-900/25 p-6 text-center backdrop-blur-sm group-hover:border-indigo-500/50 group-hover:from-indigo-500/10"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                  }}
                >
                  <motion.div 
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2 font-nacelle text-[1rem] font-semibold text-gray-200">
                    {feature.title}
                  </h3>
                  <p className="text-indigo-200/65">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}