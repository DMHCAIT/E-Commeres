'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  BookOpen,
  Play,
  Award,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Video,
  FileText,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Settings,
  TrendingUp,
  Calendar,
  Brain,
  Briefcase
} from 'lucide-react';

export default function LMSPageAnimated() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax and transform effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  // Background color progression
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ['rgb(236, 253, 245)', 'rgb(240, 253, 244)', 'rgb(209, 250, 229)', 'rgb(187, 247, 208)']
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const flipCard = {
    rest: { rotateY: 0, scale: 1 },
    hover: { 
      rotateY: 10, 
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Advanced Parallax */}
      <motion.section 
        style={{ y: heroY, scale: heroScale, backgroundColor }}
        className="relative overflow-hidden"
      >
        {/* SVG Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.svg
            className="absolute top-20 right-20 w-64 h-64 text-emerald-200/30"
            viewBox="0 0 200 200"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.path
              d="M50 100 Q100 50 150 100 Q100 150 50 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1 }}
            />
          </motion.svg>
          
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
              borderRadius: ['20% 80% 80% 20%', '80% 20% 20% 80%', '20% 80% 80% 20%']
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-emerald-300/20 to-teal-400/20 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Advanced Text Animations */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-left"
            >
              {/* Animated Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 150 }}
                className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <BookOpen className="w-4 h-4" />
                </motion.div>
                <span>Learning Management System</span>
              </motion.div>
              
              {/* Title with Morphing Text Effect */}
              <motion.h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Create & Deliver
                </motion.span>
                <br />
                <motion.span 
                  initial={{ 
                    backgroundSize: "0% 100%",
                    backgroundPosition: "left center"
                  }}
                  animate={{ 
                    backgroundSize: "100% 100%",
                    backgroundPosition: "right center"
                  }}
                  transition={{ duration: 1.8, delay: 1.4, ease: "easeInOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-normal"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #059669, #0d9488)',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  Online Learning
                </motion.span>
              </motion.h1>
              
              {/* Description with Stagger Effect */}
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                Build engaging courses, track student progress, and deliver certifications with 
                our comprehensive learning management platform.
              </motion.p>
              
              {/* CTA Buttons with Magnetic Effect */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="button-magnetic"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg transition-all duration-200 group"
                  >
                    Start Free Trial
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="text-sm text-gray-500"
                >
                  14-day free trial • Create unlimited courses
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Interactive 3D Dashboard */}
            <motion.div 
              initial={{ opacity: 0, x: 60, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative perspective-1000"
            >
              {/* Floating Dashboard with Complex Animations */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateX: [0, 3, 0],
                  rotateZ: [0, 1, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
                className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 transform-gpu"
              >
                <motion.div 
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 8,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="bg-white rounded-2xl p-6 shadow-xl"
                >
                  {/* Dashboard Header with Pulse Animation */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-lg font-semibold text-gray-900"
                    >
                      Learning Dashboard
                    </motion.h3>
                    <div className="flex space-x-2">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center"
                      >
                        <BookOpen className="w-4 h-4 text-emerald-600" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Stats with Number Counter Animation */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                      className="bg-emerald-50 rounded-xl p-4"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                        className="text-2xl font-bold text-emerald-600"
                      >
                        24
                      </motion.div>
                      <div className="text-sm text-gray-600">Active Courses</div>
                    </motion.div>
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.7, type: "spring", stiffness: 200 }}
                      className="bg-blue-50 rounded-xl p-4"
                    >
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.2 }}
                        className="text-2xl font-bold text-blue-600"
                      >
                        1,248
                      </motion.div>
                      <div className="text-sm text-gray-600">Total Students</div>
                    </motion.div>
                  </div>
                  
                  {/* Course List with Skew Animation */}
                  <div className="space-y-3">
                    <motion.div 
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{ clipPath: "inset(0 0% 0 0)" }}
                      transition={{ duration: 0.8, delay: 3.5 }}
                      whileHover={{ skewX: -2, x: 5 }}
                      className="flex items-center justify-between transition-transform"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
                        >
                          <Play className="w-4 h-4 text-orange-600" />
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">React Development</div>
                          <div className="text-xs text-gray-500">85% completion</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{ clipPath: "inset(0 0% 0 0)" }}
                      transition={{ duration: 0.8, delay: 3.7 }}
                      whileHover={{ skewX: -2, x: 5 }}
                      className="flex items-center justify-between transition-transform"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
                        >
                          <Brain className="w-4 h-4 text-purple-600" />
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Digital Marketing</div>
                          <div className="text-xs text-gray-500">92% completion</div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Popular</Badge>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with 3D Flip Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Learning Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and deliver engaging online learning experiences
            </p>
          </motion.div>

          {/* Feature Cards with Enhanced Flip Animation */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: BookOpen,
                title: "Course Creation",
                description: "Build interactive courses with videos, quizzes, assignments, and multimedia content.",
                color: "from-emerald-500 to-teal-600",
                bgColor: "bg-emerald-50",
                features: ["Drag & drop course builder", "Video & multimedia support", "Interactive assessments"]
              },
              {
                icon: Users,
                title: "Student Management",
                description: "Manage enrollments, track progress, and communicate with learners effectively.",
                color: "from-blue-500 to-indigo-600",
                bgColor: "bg-blue-50",
                features: ["Bulk enrollment & groups", "Progress tracking", "Communication tools"]
              },
              {
                icon: Target,
                title: "Assessments & Quizzes",
                description: "Create comprehensive assessments with automatic grading and detailed feedback.",
                color: "from-purple-500 to-pink-600",
                bgColor: "bg-purple-50",
                features: ["Multiple question types", "Automatic grading", "Detailed analytics"]
              },
              {
                icon: Award,
                title: "Certifications",
                description: "Issue digital certificates and badges to recognize learner achievements.",
                color: "from-orange-500 to-red-600",
                bgColor: "bg-orange-50",
                features: ["Custom certificate design", "Digital badges", "Verification system"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                description: "Track learning outcomes with comprehensive analytics and reporting tools.",
                color: "from-cyan-500 to-blue-600",
                bgColor: "bg-cyan-50",
                features: ["Learning analytics", "Completion reports", "Performance insights"]
              },
              {
                icon: Smartphone,
                title: "Mobile Learning",
                description: "Deliver learning experiences across all devices with responsive design.",
                color: "from-violet-500 to-purple-600",
                bgColor: "bg-violet-50",
                features: ["Mobile-responsive design", "Offline learning support", "Push notifications"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group perspective-1000 h-80"
              >
                <motion.div
                  variants={flipCard}
                  initial="rest"
                  whileHover="hover"
                  className="relative w-full h-full transform-gpu preserve-3d cursor-pointer"
                >
                  {/* Front Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <Card className="bg-white hover:shadow-xl transition-all duration-500 border-0 shadow-lg h-full group-hover:shadow-2xl">
                      <CardContent className="p-8 flex flex-col h-full">
                        <motion.div 
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6 }
                          }}
                          className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 flex-grow">{feature.description}</p>
                        
                        {/* Animated Progress Bar */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                          className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 origin-left`}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back Card with Bounce Animation */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <Card className={`${feature.bgColor} border-2 border-opacity-20 h-full overflow-hidden`}>
                      <CardContent className="p-8 flex flex-col h-full relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                          className="absolute top-4 right-4"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                        </motion.div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                        <ul className="space-y-3 flex-grow">
                          {feature.features.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 + 0.2 }}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, delay: idx * 0.3 }}
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              </motion.div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 text-white rounded-full mt-4`}>
                            Explore Feature
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Morphing Background */}
      <motion.section 
        className="py-24 text-white relative overflow-hidden"
        style={{ 
          background: useTransform(
            scrollYProgress,
            [0.6, 0.8, 1],
            [
              'linear-gradient(135deg, #059669 0%, #0d9488 50%, #14b8a6 100%)',
              'linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #059669 100%)',
              'linear-gradient(135deg, #14b8a6 0%, #059669 50%, #0d9488 100%)'
            ]
          )
        }}
      >
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Start Your Learning Journey
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of organizations using ZAYA LMS to deliver exceptional learning experiences
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <motion.div
              whileHover={{ 
                scale: 1.08, 
                y: -5,
                boxShadow: "0 25px 50px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full shadow-lg transition-all duration-200"
              >
                Start Free Trial
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-12 py-4 text-lg font-medium rounded-full"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-emerald-200"
          >
            14-day free trial • Unlimited courses • No setup fees
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services with Horizontal Scroll Snap */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Enhance Your Learning Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine LMS with other ZAYA solutions for a complete digital learning ecosystem
            </p>
          </motion.div>

          <div className="overflow-x-auto horizontal-scroll pb-4">
            <motion.div 
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex space-x-8 min-w-max px-4 horizontal-scroll-item"
            >
              {[
                { href: "/hr-software", icon: Briefcase, title: "HR Software", color: "from-blue-500 to-indigo-600" },
                { href: "/analytics", icon: BarChart3, title: "Learning Analytics", color: "from-purple-500 to-pink-600" },
                { href: "/templates", icon: Globe, title: "Training Websites", color: "from-cyan-500 to-teal-600" }
              ].map((service, index) => (
                <Link key={index} href={service.href} className="group block">
                  <motion.div
                    whileHover={{ 
                      scale: 1.08, 
                      rotateY: 15,
                      y: -10,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
                    }}
                    className="w-80 bg-white rounded-2xl p-8 shadow-lg border-0 transform-gpu scale-hover"
                  >
                    <motion.div 
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.8 }
                      }}
                      className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.title === "HR Software" && "Integrate learning data with HR systems for comprehensive employee development."}
                      {service.title === "Learning Analytics" && "Get advanced analytics and insights into learning effectiveness and ROI."}
                      {service.title === "Training Websites" && "Create dedicated training websites and portals for your learning programs."}
                    </p>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="flex items-center text-emerald-600 font-medium"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/">
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full text-lg">
                  Back to Home
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}