'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Users,
  Target,
  TrendingUp,
  Share2,
  MessageCircle,
  Calendar,
  BarChart3,
  Megaphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Smartphone,
  Settings,
  Play,
  Camera,
  Edit,
  Sparkles,
  Eye,
  MousePointer,
  PieChart,
  Send,
  Heart,
  ThumbsUp,
  MessageSquare
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

export default function MarketingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const marketingFeatures = [
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create stunning email campaigns with advanced automation",
      color: "from-blue-400 to-blue-600",
      features: ["Drag & Drop Builder", "A/B Testing", "Automation Workflows"],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Manage all your social accounts from one powerful dashboard",
      color: "from-purple-400 to-purple-600",
      features: ["Multi-Platform Posting", "Content Calendar", "Analytics"],
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Reach the right people with precision targeting tools",
      color: "from-pink-400 to-pink-600",
      features: ["Behavioral Targeting", "Custom Audiences", "Lookalike Audiences"],
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track performance with comprehensive analytics dashboard",
      color: "from-green-400 to-green-600",
      features: ["Real-time Reports", "ROI Tracking", "Custom Dashboards"],
    },
    {
      icon: MessageCircle,
      title: "Customer Engagement",
      description: "Build relationships with personalized customer interactions",
      color: "from-orange-400 to-orange-600",
      features: ["Live Chat", "Chatbots", "Customer Journey"],
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Professional content creation tools and templates",
      color: "from-cyan-400 to-cyan-600",
      features: ["Design Studio", "Video Editor", "Template Library"],
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "300% ROI Increase", description: "Average return on investment for our clients" },
    { icon: Users, title: "5M+ Leads Generated", description: "Total leads generated across all campaigns" },
    { icon: Globe, title: "Global Reach", description: "Expand your business to international markets" },
    { icon: Zap, title: "Real-time Automation", description: "Instant responses and automated workflows" },
    { icon: Smartphone, title: "Mobile Optimized", description: "Perfect campaigns for mobile audiences" },
    { icon: Settings, title: "Easy Integration", description: "Seamless integration with existing tools" }
  ];

  const stats = [
    { number: "50K+", label: "Active Campaigns", color: "from-blue-400 to-blue-600" },
    { number: "25M+", label: "Emails Sent Monthly", color: "from-green-400 to-green-600" },
    { number: "95%", label: "Client Satisfaction", color: "from-purple-400 to-purple-600" },
    { number: "24/7", label: "Support Available", color: "from-orange-400 to-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full blur-xl"
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
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-green-600/20 rounded-full blur-xl"
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
        className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 min-h-screen flex items-center"
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
      >
        {/* Morphing background shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '70% 30% 30% 70% / 70% 70% 30% 30%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                whileHover={{ scale: 1.05, backgroundColor: "#fce7f3" }}
              >
                <Megaphone className="w-4 h-4" />
                <span>Marketing Tools</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Grow Your
                <br />
                <motion.span
                  className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
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
                  Audience
                </motion.span>
                <br />
                Drive More Sales
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your marketing strategy with our comprehensive suite of tools. 
                From email campaigns to social media management, we help you connect with 
                your audience and drive meaningful results.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
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
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform-gpu"
                  >
                    Start Free Campaign
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
                    className="border-2 border-gray-300 hover:border-pink-500 hover:bg-pink-50 px-8 py-4 rounded-full text-lg transform-gpu"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl transform-gpu"
                  >
                    <motion.div 
                      className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
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

            {/* Marketing Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative perspective-1000"
            >
              <motion.div
                className="relative transform-gpu"
                animate={{
                  y: [-10, 10, -10],
                  rotateY: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Campaign Dashboard</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Mail className="w-8 h-8 text-pink-600 mb-2" />
                        <div className="text-2xl font-bold text-pink-600">12.5K</div>
                        <div className="text-sm text-gray-600">Emails Sent</div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Eye className="w-8 h-8 text-blue-600 mb-2" />
                        <div className="text-2xl font-bold text-blue-600">94.2%</div>
                        <div className="text-sm text-gray-600">Open Rate</div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="h-32 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden"
                      animate={{
                        background: [
                          "linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)",
                          "linear-gradient(135deg, #dbeafe 0%, #f0fdf4 100%)",
                          "linear-gradient(135deg, #fef3c7 0%, #fce7f3 100%)",
                          "linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)"
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <TrendingUp className="w-16 h-16 text-pink-600" />
                      
                      {/* Floating engagement icons */}
                      <motion.div
                        className="absolute top-4 left-4"
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Heart className="w-4 h-4 text-red-500" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-6 right-6"
                        animate={{ y: [2, -2, 2] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                      >
                        <ThumbsUp className="w-4 h-4 text-blue-500" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-4 right-4"
                        animate={{ y: [-1, 1, -1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <MessageSquare className="w-4 h-4 text-green-500" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
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
              <Star className="w-4 h-4 mr-2" />
              Marketing Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Marketing Toolkit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns 
              across all channels from one powerful platform.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={scaleIn}
                className="group perspective-1000"
              >
                <motion.div
                  whileHover={{ 
                    rotateY: 180,
                    scale: 1.05 
                  }}
                  transition={{ duration: 0.6 }}
                  className="preserve-3d h-80 relative"
                >
                  {/* Front of card */}
                  <div className="backface-hidden absolute inset-0 w-full h-full">
                    <Card className="h-full bg-white border-0 shadow-xl rounded-2xl overflow-hidden transform-gpu">
                      <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                      <CardHeader className="p-6">
                        <motion.div 
                          className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <div className="flex items-center text-pink-600 font-semibold">
                          <MousePointer className="w-4 h-4 mr-2" />
                          Explore Tool
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back of card */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full">
                    <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-xl rounded-2xl overflow-hidden transform-gpu">
                      <CardHeader className="p-6 text-white">
                        <CardTitle className="text-xl font-bold mb-4">
                          Core Features
                        </CardTitle>
                        <div className="space-y-3">
                          {feature.features.map((item, featureIndex) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                          Try Feature
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Drive Real Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our marketing platform delivers measurable results for businesses of all sizes. 
              Join thousands of successful marketers who trust our tools.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-pink-50 hover:to-purple-50 transition-all duration-300 transform-gpu"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Campaign Builder Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Build Campaigns Visually
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our drag-and-drop campaign builder makes it easy to create 
              professional marketing campaigns without any technical skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl"
                >
                  <Edit className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Design</h3>
                  <p className="text-sm text-gray-600">Create beautiful emails with our visual editor</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl"
                >
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Target</h3>
                  <p className="text-sm text-gray-600">Select your audience with precision tools</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"
                >
                  <Send className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Launch</h3>
                  <p className="text-sm text-gray-600">Deploy campaigns and track results in real-time</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 relative overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)"
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
              Ready to Supercharge Your Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers who have increased their ROI by 300% 
              using our comprehensive marketing platform.
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
                <Sparkles className="w-8 h-8 text-pink-500" />
                <span className="text-2xl font-bold text-white ml-2">ZAYA Marketing</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses to reach their full marketing potential 
                with innovative tools and strategies.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">Tools</h4>
              <ul className="space-y-3">
                {['Email Marketing', 'Social Media', 'Analytics', 'Automation'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#ec4899' }}
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
                {['Templates', 'Tutorials', 'Webinars', 'Case Studies'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#ec4899' }}
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
                {['Help Center', 'Contact Us', 'Community', 'Status'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5, color: '#ec4899' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 ZAYA Marketing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}