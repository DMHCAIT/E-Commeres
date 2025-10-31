'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Palette,
  Layers,
  Type,
  Image,
  Square,
  Circle,
  Triangle,
  Wand2,
  Download,
  Upload,
  Undo2,
  Redo2,
  Eye,
  EyeOff,
  Grid,
  Ruler,
  MousePointer,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Save,
  Share,
  Settings,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  Brush,
  Droplet,
  Scissors,
  Copy,
  Trash2,
  Lock,
  Unlock,
  AlignCenter
} from 'lucide-react';

// Animation Variants
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function DesignStudioPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const canvasY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tools = [
    { id: 'select', icon: MousePointer, name: 'Select' },
    { id: 'text', icon: Type, name: 'Text' },
    { id: 'rectangle', icon: Square, name: 'Rectangle' },
    { id: 'circle', icon: Circle, name: 'Circle' },
    { id: 'image', icon: Image, name: 'Image' },
    { id: 'brush', icon: Brush, name: 'Brush' }
  ];

  const colors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f59e0b',
    '#10b981', '#06b6d4', '#ef4444', '#6b7280'
  ];

  const layers = [
    { id: 1, name: 'Header Section', visible: true, locked: false },
    { id: 2, name: 'Navigation Menu', visible: true, locked: false },
    { id: 3, name: 'Hero Image', visible: true, locked: true },
    { id: 4, name: 'Content Block', visible: true, locked: false },
    { id: 5, name: 'Footer', visible: false, locked: false }
  ];

  const designElements = [
    {
      type: 'rectangle',
      x: 120,
      y: 80,
      width: 200,
      height: 120,
      color: '#6366f1',
      rotation: 0
    },
    {
      type: 'circle',
      x: 350,
      y: 150,
      width: 80,
      height: 80,
      color: '#ec4899',
      rotation: 0
    },
    {
      type: 'text',
      x: 180,
      y: 300,
      content: 'Design Studio',
      color: '#1f2937',
      fontSize: 24
    }
  ];

  const features = [
    {
      icon: Palette,
      title: "Visual Design Tools",
      description: "Drag-and-drop interface with professional design tools"
    },
    {
      icon: Layers,
      title: "Layer Management",
      description: "Organize your design with advanced layer controls"
    },
    {
      icon: Wand2,
      title: "Smart Suggestions",
      description: "AI-powered design recommendations and auto-layouts"
    },
    {
      icon: Share,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-600/20 rounded-full blur-xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16"
        style={{ y: heroY }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
            >
              <Palette className="w-4 h-4" />
              <span>Design Studio</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Create 
              <motion.span
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                {" "}Stunning
              </motion.span>
              <br />
              Designs Visually
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional design tools with drag-and-drop simplicity. 
              Create beautiful layouts, graphics, and interactive elements without coding.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform-gpu"
                >
                  Start Designing
                  <Wand2 className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 rounded-full text-lg transform-gpu"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Design Studio Interface */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Live Design Interface
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Like a Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our intuitive design interface with real-time preview and advanced editing tools.
            </p>
          </motion.div>

          {/* Studio Interface */}
          <motion.div 
            className="bg-gray-50 rounded-3xl p-6 shadow-2xl"
            style={{ y: canvasY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Toolbar */}
            <motion.div 
              className="flex items-center justify-between mb-6 p-4 bg-white rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-blue-100 text-blue-600 rounded-lg"
                >
                  <Undo2 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg"
                >
                  <Redo2 className="w-5 h-5" />
                </motion.button>
                <div className="h-6 w-px bg-gray-300"></div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg"
                >
                  <ZoomIn className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-100 text-gray-600 rounded-lg"
                >
                  <ZoomOut className="w-5 h-5" />
                </motion.button>
              </div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  onClick={() => setIsPlaying(!isPlaying)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-lg ${isPlaying ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-12 gap-6 h-96">
              {/* Left Toolbar */}
              <motion.div 
                className="col-span-2 bg-white rounded-2xl p-4 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Tools</h3>
                <div className="space-y-2">
                  {tools.map((tool) => (
                    <motion.button
                      key={tool.id}
                      onClick={() => setSelectedTool(tool.id)}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                        selectedTool === tool.id
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <tool.icon className="w-5 h-5" />
                      <span className="text-sm">{tool.name}</span>
                    </motion.button>
                  ))}
                </div>

                <h4 className="text-sm font-semibold text-gray-700 mt-6 mb-3">Colors</h4>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <motion.button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-8 h-8 rounded-lg border-2 ${
                        selectedColor === color ? 'border-gray-400' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Canvas Area */}
              <motion.div 
                className="col-span-8 bg-white rounded-2xl p-6 shadow-sm relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-grid-gray-100 opacity-30"></div>
                <div className="relative z-10 h-full">
                  <AnimatePresence>
                    {designElements.map((element, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="absolute cursor-move group"
                        style={{
                          left: element.x,
                          top: element.y,
                          transform: `rotate(${element.rotation}deg)`
                        }}
                        whileHover={{ scale: 1.05 }}
                        drag
                        dragMomentum={false}
                      >
                        {element.type === 'rectangle' && (
                          <div
                            className="border-2 border-dashed border-transparent group-hover:border-blue-400 transition-all"
                            style={{
                              width: element.width,
                              height: element.height,
                              backgroundColor: element.color
                            }}
                          />
                        )}
                        {element.type === 'circle' && (
                          <div
                            className="rounded-full border-2 border-dashed border-transparent group-hover:border-blue-400 transition-all"
                            style={{
                              width: element.width,
                              height: element.height,
                              backgroundColor: element.color
                            }}
                          />
                        )}
                        {element.type === 'text' && (
                          <div
                            className="border-2 border-dashed border-transparent group-hover:border-blue-400 transition-all p-2"
                            style={{
                              color: element.color,
                              fontSize: element.fontSize
                            }}
                          >
                            {element.content}
                          </div>
                        )}
                        
                        {/* Selection handles */}
                        <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full cursor-nw-resize"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full cursor-ne-resize"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full cursor-sw-resize"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full cursor-se-resize"></div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Floating Action Buttons */}
                  <motion.div
                    className="absolute bottom-4 right-4 flex gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-purple-500 text-white rounded-full shadow-lg"
                    >
                      <Wand2 className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-pink-500 text-white rounded-full shadow-lg"
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Panel - Layers */}
              <motion.div 
                className="col-span-2 bg-white rounded-2xl p-4 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-sm font-semibold text-gray-700 mb-4">Layers</h3>
                <div className="space-y-2">
                  {layers.map((layer) => (
                    <motion.div
                      key={layer.id}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        {layer.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                      </motion.button>
                      <span className="text-sm flex-1 truncate">{layer.name}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        {layer.locked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Design Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional designs, from basic shapes to advanced animations and interactive elements.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="text-center p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform-gpu"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Creating Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of designers who use our studio to create stunning visuals. 
              No design experience required.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform-gpu"
                >
                  Launch Design Studio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm transform-gpu"
                >
                  View Examples
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Design Elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-white/20 rounded-xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-12 h-12 bg-pink-400/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <Palette className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white ml-2">ZAYA Studio</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional design tools for everyone. Create stunning visuals 
                with our intuitive drag-and-drop interface.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Tools</h4>
              <ul className="space-y-3">
                {['Design Studio', 'Template Library', 'Asset Manager', 'Export Tools'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#3b82f6' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {['Tutorials', 'Design Guide', 'Community', 'Blog'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#3b82f6' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {['Help Center', 'Contact', 'Feature Requests', 'Updates'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#3b82f6' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 ZAYA Design Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}