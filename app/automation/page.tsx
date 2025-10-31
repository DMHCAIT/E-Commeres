'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  GitBranch, 
  Database, 
  Smartphone, 
  Users, 
  ShoppingCart, 
  Mail, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings,
  Play,
  Pause,
  Edit,
  Copy,
  Trash2,
  Plus,
  ArrowRight,
  Workflow,
  Bot,
  Lightbulb,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Filter,
  Search,
  Download,
  Upload,
  Webhook,
  Globe,
  Lock,
  Code,
  Sparkles
} from 'lucide-react';

// Workflow Template Data
const workflowTemplates = [
  {
    id: 1,
    name: "Lead to Customer Journey",
    description: "Automatically nurture leads from website forms to customer conversion",
    category: "CRM",
    integrations: ["Salesforce", "HubSpot", "Email", "SMS"],
    complexity: "Medium",
    saves: "15 hours/week",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    steps: 8,
    rating: 4.9,
    used: 2847
  },
  {
    id: 2,
    name: "Employee Onboarding",
    description: "Streamline new hire process from offer to first day",
    category: "HRMS",
    integrations: ["BambooHR", "Slack", "Google Workspace", "DocuSign"],
    complexity: "High",
    saves: "12 hours/week", 
    icon: FileText,
    color: "from-green-500 to-emerald-600",
    steps: 12,
    rating: 4.8,
    used: 1923
  },
  {
    id: 3,
    name: "E-commerce Order Sync",
    description: "Sync orders between store, inventory, and accounting systems",
    category: "E-commerce",
    integrations: ["Shopify", "WooCommerce", "QuickBooks", "Inventory"],
    complexity: "Low",
    saves: "20 hours/week",
    icon: ShoppingCart,
    color: "from-purple-500 to-pink-600",
    steps: 6,
    rating: 4.7,
    used: 3641
  },
  {
    id: 4,
    name: "Content Publishing Pipeline",
    description: "Automate content creation, approval, and multi-platform publishing",
    category: "Marketing",
    integrations: ["WordPress", "Social Media", "Canva", "Analytics"],
    complexity: "Medium",
    saves: "18 hours/week",
    icon: Globe,
    color: "from-orange-500 to-red-600",
    steps: 10,
    rating: 4.6,
    used: 1567
  },
  {
    id: 5,
    name: "Invoice to Payment",
    description: "Generate, send, and track invoices with automated follow-ups",
    category: "Finance",
    integrations: ["QuickBooks", "Stripe", "PayPal", "Email"],
    complexity: "Low",
    saves: "10 hours/week",
    icon: BarChart3,
    color: "from-teal-500 to-cyan-600",
    steps: 7,
    rating: 4.8,
    used: 2134
  },
  {
    id: 6,
    name: "Support Ticket Resolution",
    description: "AI-powered ticket routing, response, and escalation management",
    category: "Customer Support",
    integrations: ["Zendesk", "Intercom", "Slack", "Knowledge Base"],
    complexity: "High",
    saves: "25 hours/week",
    icon: Bot,
    color: "from-indigo-500 to-purple-600",
    steps: 15,
    rating: 4.9,
    used: 987
  }
];

// Integration Categories
const integrationCategories = [
  {
    name: "CRM Systems",
    icon: Users,
    count: 24,
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Monday.com"]
  },
  {
    name: "HR Management",
    icon: FileText,
    count: 18,
    integrations: ["BambooHR", "Workday", "ADP", "Gusto", "Namely"]
  },
  {
    name: "E-commerce",
    icon: ShoppingCart,
    count: 32,
    integrations: ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Amazon"]
  },
  {
    name: "Communication",
    icon: Mail,
    count: 28,
    integrations: ["Gmail", "Outlook", "Slack", "Teams", "Zoom"]
  },
  {
    name: "Analytics",
    icon: BarChart3,
    count: 21,
    integrations: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar", "Tableau"]
  },
  {
    name: "Productivity",
    icon: Calendar,
    count: 35,
    integrations: ["Google Workspace", "Office 365", "Notion", "Asana", "Trello"]
  }
];

export default function AIAutomationHub() {
  const { scrollYProgress } = useScroll();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  
  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

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

  // Filter workflows
  const filteredWorkflows = workflowTemplates.filter(workflow => {
    const matchesCategory = activeCategory === 'All' || workflow.category === activeCategory;
    const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'CRM', 'HRMS', 'E-commerce', 'Marketing', 'Finance', 'Customer Support'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, scale: heroScale }}
        className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Bot className="w-6 h-6 text-purple-300" />
              <span className="text-white font-medium">AI-Powered Business Automation</span>
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-7xl font-bold text-white mb-6"
            >
              Automate Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Workflows
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Connect your CRM, HRMS, websites, and 200+ business tools with intelligent automation. 
              Let AI suggest optimal workflows and save hundreds of hours every month.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Building Workflows
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                <Lightbulb className="w-5 h-5 mr-2" />
                Get AI Suggestions
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            >
              {[
                { number: "500K+", label: "Hours Saved", icon: Clock },
                { number: "10,000+", label: "Active Workflows", icon: Workflow },
                { number: "200+", label: "Integrations", icon: Zap }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-purple-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-purple-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Connect Everything Your Business Uses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate with 200+ popular business tools and platforms
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {integrationCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.count} integrations available</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.integrations.slice(0, 3).map((integration, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                  {category.integrations.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{category.integrations.length - 3} more
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Templates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pre-built Workflow Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Start with proven automation templates trusted by thousands of businesses
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search workflows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-80 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorkflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${workflow.color} rounded-xl`}>
                    <workflow.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge 
                    variant={workflow.complexity === 'Low' ? 'secondary' : workflow.complexity === 'Medium' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {workflow.complexity}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{workflow.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{workflow.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Time Saved:</span>
                    <span className="font-semibold text-green-600">{workflow.saves}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Steps:</span>
                    <span className="font-semibold">{workflow.steps}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Used by:</span>
                    <span className="font-semibold">{workflow.used.toLocaleString()} businesses</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {workflow.integrations.slice(0, 3).map((integration, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {integration}
                    </Badge>
                  ))}
                  {workflow.integrations.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{workflow.integrations.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{workflow.rating}</span>
                  </div>
                  
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Play className="w-4 h-4 mr-1" />
                    Use Template
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powered by Artificial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let AI optimize your workflows and suggest improvements automatically
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Smart Workflow Suggestions",
                description: "AI analyzes your business patterns and suggests optimal automation workflows"
              },
              {
                icon: TrendingUp,
                title: "Performance Optimization",
                description: "Continuously optimize workflows for better efficiency and cost savings"
              },
              {
                icon: Bot,
                title: "Intelligent Error Handling",
                description: "AI-powered error detection and automatic recovery mechanisms"
              },
              {
                icon: Lightbulb,
                title: "Predictive Analytics",
                description: "Forecast business trends and automate proactive responses"
              },
              {
                icon: Sparkles,
                title: "Auto-Documentation",
                description: "Automatically generate workflow documentation and compliance reports"
              },
              {
                icon: Zap,
                title: "Dynamic Scaling",
                description: "Automatically scale workflows based on business volume and demand"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses saving time and money with intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}