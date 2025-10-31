'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  Shield,
  Settings,
  Briefcase,
  UserCheck,
  Target,
  Zap,
  Brain,
  BookOpen,
  Smartphone,
  Globe,
  Star,
  Play
} from 'lucide-react';

export default function HRSoftwarePage() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  // Color change effect
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(239, 246, 255)', 'rgb(245, 243, 255)', 'rgb(236, 254, 255)']
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
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const glowEffect = {
    rest: { boxShadow: "0 0 0px rgba(59, 130, 246, 0)" },
    hover: { 
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Parallax & Morphing Shapes */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity, backgroundColor }}
        className="relative overflow-hidden"
      >
        {/* Morphing Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
              borderRadius: ['30% 70% 70% 30%', '70% 30% 30% 70%', '30% 70% 70% 30%']
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, -15, 15, 0],
              borderRadius: ['50% 50% 50% 50%', '30% 70% 30% 70%', '50% 50% 50% 50%']
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-blue-300/30 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content with Text Reveal */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              {/* Badge with Scale Animation */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Briefcase className="w-4 h-4" />
                </motion.div>
                <span>HR Management Software</span>
              </motion.div>
              
              {/* Title with SVG Drawing Effect */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight"
              >
                Modern HR
                <br />
                <motion.span 
                  initial={{ 
                    backgroundPosition: "0% 50%",
                    backgroundSize: "0% 100%"
                  }}
                  animate={{ 
                    backgroundPosition: "100% 50%",
                    backgroundSize: "100% 100%"
                  }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-normal relative"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #2563eb, #4f46e5)',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  Made Simple
                </motion.span>
              </motion.h1>
              
              {/* Description with Fade In */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed"
              >
                Streamline your HR operations with our comprehensive software suite. 
                From recruitment to performance management, we've got you covered.
              </motion.p>
              
              {/* CTA Buttons with Glow Effect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  variants={glowEffect}
                  initial="rest"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg transition-all duration-200 group"
                  >
                    Start Free Trial
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-sm text-gray-500"
                >
                  14-day free trial • No credit card required
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right Side - 3D Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative perspective-1000"
            >
              {/* Floating Dashboard Card with 3D Effect */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="bg-white rounded-2xl p-6 shadow-xl"
                >
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">HR Dashboard</h3>
                    <div className="flex space-x-2">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-blue-600" />
                      </motion.div>
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center"
                      >
                        <BarChart3 className="w-4 h-4 text-indigo-600" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Stats Cards with Stagger Animation */}
                  <motion.div 
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-2 gap-4 mb-6"
                  >
                    <motion.div variants={fadeInUp} className="bg-blue-50 rounded-xl p-4">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                        className="text-2xl font-bold text-blue-600"
                      >
                        124
                      </motion.div>
                      <div className="text-sm text-gray-600">Active Employees</div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-green-50 rounded-xl p-4">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                        className="text-2xl font-bold text-green-600"
                      >
                        98%
                      </motion.div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Recent Activity with Clip Path Reveal */}
                  <div className="space-y-3">
                    <motion.div 
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{ clipPath: "inset(0 0% 0 0)" }}
                      transition={{ duration: 0.8, delay: 2 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
                        >
                          <UserCheck className="w-4 h-4 text-orange-600" />
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">New Hire: Sarah Johnson</div>
                          <div className="text-xs text-gray-500">Marketing Department</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Completed</Badge>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{ clipPath: "inset(0 0% 0 0)" }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center"
                        >
                          <Award className="w-4 h-4 text-purple-600" />
                        </motion.div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">Performance Review Due</div>
                          <div className="text-xs text-gray-500">5 employees</div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700">Pending</Badge>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Flip Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete HR Management Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently and effectively
            </p>
          </motion.div>

          {/* Feature Cards with 3D Flip Effect */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Employee Management",
                description: "Complete employee lifecycle management from onboarding to offboarding.",
                color: "from-blue-500 to-indigo-600",
                bgColor: "bg-blue-50",
                features: ["Employee profiles", "Document management", "Org chart visualization"]
              },
              {
                icon: DollarSign,
                title: "Payroll & Benefits",
                description: "Automated payroll processing with tax calculations and compliance.",
                color: "from-green-500 to-emerald-600",
                bgColor: "bg-green-50",
                features: ["Automated payroll", "Tax calculations", "Benefits administration"]
              },
              {
                icon: Clock,
                title: "Time & Attendance",
                description: "Track work hours, manage schedules, and monitor attendance patterns.",
                color: "from-purple-500 to-pink-600",
                bgColor: "bg-purple-50",
                features: ["Time tracking", "Schedule management", "Attendance reports"]
              },
              {
                icon: TrendingUp,
                title: "Performance Management",
                description: "Set goals, conduct reviews, and track employee development progress.",
                color: "from-orange-500 to-red-600",
                bgColor: "bg-orange-50",
                features: ["Goal setting", "Performance reviews", "Development plans"]
              },
              {
                icon: UserCheck,
                title: "Recruitment & Hiring",
                description: "Streamline your hiring process with applicant tracking and onboarding.",
                color: "from-cyan-500 to-blue-600",
                bgColor: "bg-cyan-50",
                features: ["Applicant tracking", "Interview scheduling", "Digital onboarding"]
              },
              {
                icon: Shield,
                title: "Compliance & Reporting",
                description: "Ensure regulatory compliance with automated reporting and alerts.",
                color: "from-violet-500 to-purple-600",
                bgColor: "bg-violet-50",
                features: ["Compliance tracking", "Automated reports", "Audit trails"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group perspective-1000 h-80"
              >
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="relative w-full h-full transform-gpu preserve-3d cursor-pointer"
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 flex-grow">{feature.description}</p>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                          className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6`}
                        />
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                    <Card className={`${feature.bgColor} border-2 border-opacity-20 h-full`}>
                      <CardContent className="p-8 flex flex-col h-full">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                        <ul className="space-y-3 flex-grow">
                          {feature.features.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center text-sm text-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 text-white rounded-full mt-4`}>
                            Learn More
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

      {/* CTA Section with Gradient Shift */}
      <motion.section 
        style={{ 
          background: useTransform(
            scrollYProgress,
            [0.7, 0.9, 1],
            [
              'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
              'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'
            ]
          )
        }}
        className="py-24 text-white relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light mb-6"
          >
            Ready to Transform Your HR?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of companies using our HR software to streamline operations and boost productivity
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full shadow-lg transition-all duration-200"
              >
                Start Free Trial
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
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
            className="text-sm text-blue-200"
          >
            No credit card required • 14-day free trial • Cancel anytime
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services with Horizontal Scroll */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate HR with other ZAYA solutions for comprehensive business management
            </p>
          </motion.div>

          {/* Horizontal Scrolling Cards */}
          <div className="overflow-x-auto pb-4">
            <motion.div 
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex space-x-8 min-w-max px-4"
            >
              {[
                { href: "/lms", icon: BookOpen, title: "Learning Management", color: "from-emerald-500 to-teal-600", description: "Train and develop your workforce" },
                { href: "/analytics", icon: BarChart3, title: "HR Analytics", color: "from-purple-500 to-pink-600", description: "Data-driven HR insights" },
                { href: "/templates", icon: Globe, title: "Company Portal", color: "from-cyan-500 to-blue-600", description: "Employee self-service portal" }
              ].map((service, index) => (
                <Link key={index} href={service.href} className="group block">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className="w-80 bg-white rounded-2xl p-8 shadow-lg border-0 transform-gpu"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-600 font-medium"
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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full text-lg">
                  Back to Home
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
      `}</style>
    </div>
  );
}