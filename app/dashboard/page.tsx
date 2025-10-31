'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { 
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Globe,
  Calendar,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Plus,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Activity,
  Target,
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Zap,
  Bookmark,
  Star,
  Heart,
  Share2
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
};

export default function DashboardPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null);

  // Subtle parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,856",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Active Users",
      value: "8,429",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Total Orders",
      value: "2,347",
      change: "+15.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      color: "from-orange-500 to-red-600"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "order",
      message: "New order #12547 received",
      time: "2 min ago",
      status: "success"
    },
    {
      id: 2,
      type: "user",
      message: "User John Doe registered",
      time: "5 min ago",
      status: "info"
    },
    {
      id: 3,
      type: "payment",
      message: "Payment of $299 processed",
      time: "12 min ago",
      status: "success"
    },
    {
      id: 4,
      type: "alert",
      message: "Server response time increased",
      time: "18 min ago",
      status: "warning"
    }
  ];

  const recentProjects = [
    {
      id: 1,
      name: "E-commerce Platform",
      progress: 85,
      dueDate: "Dec 15",
      team: 4,
      status: "on-track"
    },
    {
      id: 2,
      name: "Marketing Website",
      progress: 62,
      dueDate: "Dec 22",
      team: 3,
      status: "on-track"
    },
    {
      id: 3,
      name: "Mobile App Design",
      progress: 38,
      dueDate: "Jan 5",
      team: 6,
      status: "at-risk"
    }
  ];

  const timeframes = [
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'order':
        return ShoppingCart;
      case 'user':
        return Users;
      case 'payment':
        return DollarSign;
      case 'alert':
        return AlertTriangle;
      default:
        return Info;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navigation />

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Header Section */}
      <motion.section 
        ref={heroRef}
        className="relative bg-white border-b border-gray-200 py-8"
        style={{ y: heroY }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Dashboard Overview
              </motion.h1>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome back! Here's what's happening with your business today.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="flex bg-gray-100 rounded-lg p-1"
                whileHover={{ scale: 1.02 }}
              >
                {timeframes.map((timeframe) => (
                  <motion.button
                    key={timeframe.value}
                    onClick={() => setSelectedTimeframe(timeframe.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      selectedTimeframe === timeframe.value
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {timeframe.label}
                  </motion.button>
                ))}
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={scaleIn}
                whileHover={{ 
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform-gpu"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      stat.trend === 'up' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {stat.trend === 'up' ? 
                      <ArrowUp className="w-3 h-3" /> : 
                      <ArrowDown className="w-3 h-3" />
                    }
                    {stat.change}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="text-2xl font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Chart Section */}
            <motion.div 
              className="lg:col-span-2"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold">Revenue Analytics</CardTitle>
                    <CardDescription>Track your revenue performance over time</CardDescription>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <RefreshCw className="w-5 h-5 text-gray-500" />
                  </motion.button>
                </CardHeader>
                <CardContent>
                  {/* Simplified Chart Representation */}
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 relative overflow-hidden">
                    {/* Chart Lines */}
                    <motion.div
                      className="absolute inset-0 flex items-end justify-between px-8 pb-8"
                      variants={staggerContainer}
                      initial="initial"
                      animate="animate"
                    >
                      {[65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          variants={scaleIn}
                          className="bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg w-8"
                          style={{ height: `${height}%` }}
                          whileHover={{ 
                            scale: 1.05,
                            background: "linear-gradient(to top, #3b82f6, #8b5cf6, #ec4899)"
                          }}
                          transition={{ delay: index * 0.1 }}
                        />
                      ))}
                    </motion.div>
                    
                    {/* Floating Metrics */}
                    <motion.div
                      className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-lg p-3"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="font-medium">+18.2% vs last period</span>
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Activity Feed */}
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest updates and notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatePresence>
                    {recentActivities.map((activity, index) => {
                      const StatusIcon = getStatusIcon(activity.type);
                      return (
                        <motion.div
                          key={activity.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer"
                        >
                          <motion.div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(activity.status)}`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <StatusIcon className="w-4 h-4" />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 font-medium">
                              {activity.message}
                            </p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View All Activities
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Projects Section */}
          <motion.div 
            className="mt-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="shadow-sm hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold">Recent Projects</CardTitle>
                  <CardDescription>Track progress of your ongoing projects</CardDescription>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                  </Button>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
                      }}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-white rounded-xl transition-all transform-gpu"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <FileText className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{project.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>Due: {project.dueDate}</span>
                            <span>Team: {project.team} members</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">
                            {project.progress}%
                          </div>
                          <Badge 
                            variant={project.status === 'on-track' ? 'default' : 'destructive'}
                            className="text-xs"
                          >
                            {project.status === 'on-track' ? 'On Track' : 'At Risk'}
                          </Badge>
                        </div>
                        
                        <motion.div 
                          className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                          />
                        </motion.div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 hover:bg-gray-200 rounded-lg"
                        >
                          <MoreHorizontal className="w-5 h-5 text-gray-500" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            {/* Background Animation */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to take action?</h3>
                <p className="text-white/90">
                  Explore advanced analytics, manage your team, or create new projects.
                </p>
              </div>
              
              <motion.div 
                className="flex gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold transform-gpu"
                  >
                    View Analytics
                    <BarChart3 className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
                
                <motion.div
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 backdrop-blur-sm transform-gpu"
                  >
                    Manage Team
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}