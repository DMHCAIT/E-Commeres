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
  Layout,
  Smartphone,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Eye,
  Download,
  Filter,
  Search,
  Grid,
  List,
  Sparkles,
  MousePointer,
  Play,
  Zap,
  Settings,
  TrendingUp,
  Users,
  Award,
  Crown,
  Heart,
  Bookmark
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

export default function TemplatesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('grid');
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const categories = [
    'All', 'Business', 'E-commerce', 'Portfolio', 'Blog', 'Landing Page', 'Restaurant', 'Agency'
  ];

  const templates = [
    {
      id: 1,
      title: "Modern Business",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=top",
      preview: "/open-pro-template",
      rating: 4.8,
      downloads: "12.5K",
      isPremium: false,
      tags: ["Professional", "Clean", "Modern"]
    },
    {
      id: 2,
      title: "E-commerce Pro",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=top",
      preview: "/templates/ecommerce-preview",
      rating: 4.9,
      downloads: "8.2K",
      isPremium: true,
      tags: ["Shop", "Product", "Cart"]
    },
    {
      id: 3,
      title: "Creative Portfolio",
      category: "Portfolio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=top",
      preview: "/open-pro-template",
      rating: 4.7,
      downloads: "15.1K",
      isPremium: false,
      tags: ["Creative", "Portfolio", "Gallery"]
    },
    {
      id: 4,
      title: "Food & Restaurant",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=top",
      preview: "/open-pro-template",
      rating: 4.6,
      downloads: "6.8K",
      isPremium: true,
      tags: ["Food", "Menu", "Booking"]
    },
    {
      id: 5,
      title: "Tech Startup",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=top",
      preview: "/lms",
      rating: 4.8,
      downloads: "9.3K",
      isPremium: false,
      tags: ["Tech", "Startup", "SaaS"]
    },
    {
      id: 6,
      title: "Fashion Blog",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=top",
      preview: "/open-pro-template",
      rating: 4.5,
      downloads: "4.7K",
      isPremium: false,
      tags: ["Blog", "Fashion", "Lifestyle"]
    },
    {
      id: 7,
      title: "Digital Agency",
      category: "Agency",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=top",
      preview: "/hr-software",
      rating: 4.9,
      downloads: "11.2K",
      isPremium: true,
      tags: ["Agency", "Services", "Team"]
    },
    {
      id: 8,
      title: "Fitness Gym",
      category: "Business",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=top",
      preview: "/analytics",
      rating: 4.4,
      downloads: "3.9K",
      isPremium: false,
      tags: ["Fitness", "Gym", "Health"]
    }
  ];

  const filteredTemplates = filter === 'All' 
    ? templates 
    : templates.filter(template => template.category === filter);

  const stats = [
    { number: "500+", label: "Templates", icon: Layout },
    { number: "50K+", label: "Downloads", icon: Download },
    { number: "4.8/5", label: "Rating", icon: Star },
    { number: "24/7", label: "Support", icon: Settings }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "All templates are fully responsive and mobile-optimized"
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed with lightweight, clean code"
    },
    {
      icon: Palette,
      title: "Easy Customization",
      description: "Customize colors, fonts, and layouts with simple clicks"
    },
    {
      icon: Globe,
      title: "SEO Friendly",
      description: "Built with SEO best practices for better rankings"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20"
        style={{ y: heroY }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "#f3e8ff" }}
            >
              <Layout className="w-4 h-4" />
              <span>Premium Templates</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Beautiful 
              <motion.span
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
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
                {" "}Templates
              </motion.span>
              <br />
              Ready to Use
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Choose from hundreds of professionally designed templates. 
              Perfect for any business, industry, or personal project.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform-gpu"
                >
                  Browse Templates
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 hover:border-purple-500 hover:bg-purple-50 px-8 py-4 rounded-full text-lg transform-gpu"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Preview Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl transform-gpu"
                >
                  <motion.div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-purple-600" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-gray-900 mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Categories Filter */}
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  variants={slideInLeft}
                  onClick={() => setFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform-gpu ${
                    filter === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>

            {/* View Toggle */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex bg-white rounded-lg p-1 border">
                <motion.button
                  onClick={() => setView('grid')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-2 rounded-md transition-all ${
                    view === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setView('list')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-2 rounded-md transition-all ${
                    view === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Templates Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className={`grid gap-8 ${view === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  variants={scaleIn}
                  layout
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg transform-gpu"
                >
                  {/* Template Preview */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                    {/* Template Screenshot */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-purple-50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        {/* Template Preview Mockup */}
                        <div className="w-full max-w-32 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                          <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-2 flex items-center justify-start px-2">
                            <div className="flex space-x-1">
                              <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                              <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                              <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="p-3">
                            <div className="text-xs font-semibold text-purple-600 mb-1">{template.title}</div>
                            <div className="space-y-1">
                              <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                              <div className="h-1 bg-purple-200 rounded w-2/3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Subtle overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    
                    {/* Mock Browser */}
                    <div className="absolute top-3 left-3 right-3">
                      <div className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 bg-gray-100 rounded px-2 py-1 text-xs text-gray-500">
                            {template.title.toLowerCase().replace(/\s+/g, '')}.com
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Premium Badge */}
                    {template.isPremium && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="absolute top-3 right-3"
                      >
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      </motion.div>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex gap-3">
                        <Link href={template.preview || '#'}>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                            title={`Preview ${template.title}`}
                          >
                            <Eye className="w-5 h-5" />
                          </motion.button>
                        </Link>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                          title={`Use ${template.title} Template`}
                        >
                          <Download className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>

                  {/* Template Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {template.title}
                      </h3>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Heart className="w-5 h-5" />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{template.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{template.downloads}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transform-gpu"
                      >
                        Use Template
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Template Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Quality Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every template is crafted with attention to detail, modern design principles, 
              and optimized for performance across all devices.
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
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform-gpu"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
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
        className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 relative overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)"
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose from hundreds of professional templates and launch your 
              website in minutes, not months.
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
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform-gpu"
                >
                  Browse All Templates
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
                  className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm transform-gpu"
                >
                  Get Premium Access
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
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
                <Sparkles className="w-8 h-8 text-purple-500" />
                <span className="text-2xl font-bold text-white ml-2">ZAYA Templates</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Beautiful, professional templates for every business and industry. 
                Start building your dream website today.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-3">
                {['Business', 'E-commerce', 'Portfolio', 'Blog'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#a855f7' }}
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
                {['Design Guide', 'Customization', 'Support', 'Updates'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#a855f7' }}
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
                {['Help Center', 'Contact', 'Community', 'Feedback'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#a855f7' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 ZAYA Templates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}