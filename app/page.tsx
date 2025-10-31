'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight,
  Star,
  Globe,
  Wand2,
  ShoppingCart,
  Play,
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Smartphone,
  Monitor,
  Palette,
  Code,
  Zap,
  Eye,
  MousePointer,
  Settings,
  Layers,
  Target,
  Award,
  Rocket,
  Shield,
  Headphones,
  Briefcase,
  BookOpen,
  Heart,
  Utensils
} from 'lucide-react';

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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const bgGradient = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ]
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const solutions = [
    {
      title: "E-commerce Store",
      description: "Launch your online store with advanced product management",
      icon: ShoppingCart,
      color: "from-blue-400 to-purple-500",
      link: "/ecommerce",
      features: ["Product Catalog", "Payment Processing", "Inventory Management"]
    },
    {
      title: "HR Management",
      description: "Streamline your HR processes with comprehensive tools",
      icon: Briefcase,
      color: "from-green-400 to-blue-500",
      link: "/hr-software",
      features: ["Employee Records", "Payroll System", "Performance Tracking"]
    },
    {
      title: "Learning Platform",
      description: "Create engaging online courses and training programs",
      icon: BookOpen,
      color: "from-purple-400 to-pink-500",
      link: "/lms",
      features: ["Course Creation", "Student Progress", "Certification System"]
    },
    {
      title: "Marketing Hub",
      description: "Boost your marketing efforts with powerful automation",
      icon: TrendingUp,
      color: "from-orange-400 to-red-500",
      link: "/marketing",
      features: ["Email Campaigns", "Social Media", "Analytics Dashboard"]
    },
    {
      title: "Design Studio",
      description: "Professional design tools for creative professionals",
      icon: Palette,
      color: "from-pink-400 to-purple-500",
      link: "/design-studio",
      features: ["Vector Graphics", "Photo Editing", "Brand Assets"]
    },
    {
      title: "Analytics Suite",
      description: "Advanced analytics and reporting capabilities",
      icon: BarChart3,
      color: "from-cyan-400 to-blue-500",
      link: "/analytics",
      features: ["Real-time Data", "Custom Reports", "Data Visualization"]
    }
  ];

  const features = [
    { icon: Globe, title: "Global Reach", description: "Connect with audiences worldwide" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
    { icon: Shield, title: "Secure & Safe", description: "Enterprise-grade security features" },
    { icon: Smartphone, title: "Mobile Ready", description: "Perfect on any device" },
    { icon: Code, title: "Developer Friendly", description: "Easy to customize and extend" },
    { icon: Headphones, title: "24/7 Support", description: "Round-the-clock assistance" }
  ];

  const stats = [
    { number: "10K+", label: "Websites Created" },
    { number: "500+", label: "Templates Available" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-xl"
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
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{
          background: bgGradient,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Welcome to the Future of Web Building</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
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
              Stunning
            </motion.span> Websites
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Create professional websites, e-commerce stores, and web applications with our 
            advanced drag-and-drop builder. No coding required.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform-gpu"
              >
                Start Building Free
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full backdrop-blur-sm transform-gpu"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Stats */}
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
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl transform-gpu"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
              <Wand2 className="w-4 h-4 mr-2" />
              Complete Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From e-commerce to education, our platform provides specialized solutions 
              for every industry and use case.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={scaleIn}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-white border-0 shadow-xl rounded-2xl overflow-hidden transform-gpu transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                  <CardHeader className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <solution.icon className="w-6 h-6" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold ml-4 text-gray-900">
                        {solution.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    <Link href={solution.link}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Explore Solution
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              <Star className="w-4 h-4 mr-2" />
              Why Choose ZAYA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design 
              to deliver exceptional results for your business.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 transform-gpu"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
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
        style={{ background: bgGradient }}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)"
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
              Join thousands of businesses who trust ZAYA to power their digital presence. 
              Start your free trial today and see the difference.
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
                  Start Free Trial
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
                  View Pricing
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
                <span className="text-2xl font-bold text-white ml-2">ZAYA</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building the future of web development with innovative tools and 
                cutting-edge technology.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-3">
                {['E-commerce', 'HR Management', 'Learning Platform', 'Marketing Hub'].map((item) => (
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
                {['Templates', 'Help Center', 'API Docs', 'Blog'].map((item) => (
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
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Contact', 'Privacy'].map((item) => (
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
            <p className="text-gray-400">© 2025 ZAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}