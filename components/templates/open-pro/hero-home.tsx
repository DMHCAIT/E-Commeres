'use client';

import React from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

// Import the video thumbnail (you'll need to copy this from the original template)
// import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from './modal-video';

export default function HeroHome() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.section 
      className="relative overflow-hidden"
      style={{ y }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <motion.h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AI-driven tools for product teams
            </motion.h1>
            <div className="mx-auto max-w-3xl">
              <motion.p
                className="mb-8 text-xl text-indigo-200/65"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </motion.p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white shadow-xl sm:mb-0 sm:w-auto transform-gpu"
                    >
                      <span className="relative inline-flex items-center">
                        Start Building
                        <motion.span 
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 border-gray-700 hover:bg-gray-700 sm:ml-4 sm:w-auto transform-gpu"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Schedule Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <motion.div 
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear" 
                }}
              />
              
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-8 shadow-2xl">
                  {/* Mock video player */}
                  <div className="h-full w-full rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-600/10 flex items-center justify-center relative overflow-hidden">
                    {/* Play button overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/20 flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    >
                      <motion.div
                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0 0 rgba(255, 255, 255, 0.4)",
                            "0 0 0 20px rgba(255, 255, 255, 0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Play className="w-8 h-8 text-indigo-600 ml-1" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Background elements */}
                    <motion.div 
                      className="absolute top-4 left-4 w-16 h-16 bg-indigo-500/20 rounded-xl"
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute bottom-4 right-4 w-12 h-12 bg-purple-500/20 rounded-full"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 pointer-events-none"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-[760px] h-[668px] bg-gradient-to-r from-indigo-500/5 to-purple-600/5 rounded-full blur-3xl" />
      </motion.div>
    </motion.section>
  );
}