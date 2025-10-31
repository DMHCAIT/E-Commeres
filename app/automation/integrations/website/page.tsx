'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code, 
  CheckCircle, 
  ExternalLink, 
  Settings, 
  Plus, 
  ArrowRight,
  Webhook,
  BarChart3,
  Search,
  Filter,
  Star,
  Building,
  Mail,
  Calendar,
  DollarSign,
  Activity,
  Workflow,
  AlertCircle,
  User,
  Target,
  Database,
  Zap,
  Shield,
  RefreshCw,
  Eye,
  FileText,
  MessageSquare,
  Share2,
  Layers,
  Cloud,
  Smartphone,
  Monitor,
  Link,
  Cpu,
  Server,
  Lock,
  TrendingUp,
  Sparkles,
  Bot,
  Lightbulb,
  Clock,
  MousePointer,
  Palette,
  Image,
  Video,
  Music,
  ShoppingCart,
  CreditCard,
  Package,
  Truck,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';

// Website Integration Categories
const integrationCategories = [
  {
    id: 'webhooks',
    name: 'Webhooks & APIs',
    description: 'Connect your website to external services and APIs',
    icon: Webhook,
    color: 'from-blue-500 to-indigo-600',
    integrations: [
      {
        name: 'Webhook Manager',
        description: 'Receive and send webhooks with custom endpoints',
        features: ['Custom endpoints', 'Payload validation', 'Retry logic', 'Rate limiting'],
        difficulty: 'Medium',
        setup: '10 min',
        popular: true
      },
      {
        name: 'REST API Builder',
        description: 'Create custom APIs for your website data',
        features: ['Custom endpoints', 'Authentication', 'Documentation', 'Testing tools'],
        difficulty: 'High',
        setup: '30 min',
        popular: false
      },
      {
        name: 'GraphQL Integration',
        description: 'Query your data with GraphQL endpoints',
        features: ['Schema builder', 'Query playground', 'Real-time subscriptions', 'Caching'],
        difficulty: 'High',
        setup: '45 min',
        popular: false
      },
      {
        name: 'Third-party API Connector',
        description: 'Connect to popular APIs with pre-built connectors',
        features: ['100+ API connectors', 'OAuth handling', 'Rate limiting', 'Error handling'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      }
    ]
  },
  {
    id: 'forms',
    name: 'Form Automation',
    description: 'Automate form submissions and data processing',
    icon: FileText,
    color: 'from-emerald-500 to-green-600',
    integrations: [
      {
        name: 'Smart Form Builder',
        description: 'Create intelligent forms with conditional logic',
        features: ['Conditional fields', 'Multi-step forms', 'File uploads', 'Validation rules'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      },
      {
        name: 'Form to CRM Sync',
        description: 'Automatically sync form submissions to your CRM',
        features: ['Real-time sync', 'Field mapping', 'Duplicate detection', 'Lead scoring'],
        difficulty: 'Medium',
        setup: '15 min',
        popular: true
      },
      {
        name: 'Email Automation',
        description: 'Send automated emails based on form submissions',
        features: ['Email templates', 'Triggered sends', 'Personalization', 'A/B testing'],
        difficulty: 'Easy',
        setup: '10 min',
        popular: true
      },
      {
        name: 'Payment Integration',
        description: 'Accept payments through forms',
        features: ['Stripe integration', 'PayPal support', 'Subscription billing', 'Invoice generation'],
        difficulty: 'Medium',
        setup: '20 min',
        popular: false
      }
    ]
  },
  {
    id: 'analytics',
    name: 'Analytics & Tracking',
    description: 'Track user behavior and website performance',
    icon: BarChart3,
    color: 'from-purple-500 to-violet-600',
    integrations: [
      {
        name: 'Google Analytics 4',
        description: 'Advanced web analytics and user tracking',
        features: ['Event tracking', 'Conversion goals', 'Audience insights', 'Custom reports'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      },
      {
        name: 'Hotjar Heatmaps',
        description: 'User behavior analysis and heatmaps',
        features: ['Click heatmaps', 'Scroll maps', 'Session recordings', 'Feedback polls'],
        difficulty: 'Easy',
        setup: '3 min',
        popular: true
      },
      {
        name: 'Facebook Pixel',
        description: 'Track conversions and build audiences',
        features: ['Conversion tracking', 'Custom audiences', 'Lookalike audiences', 'Event optimization'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      },
      {
        name: 'Custom Event Tracking',
        description: 'Track custom events and user interactions',
        features: ['Custom events', 'User properties', 'Funnel analysis', 'Cohort analysis'],
        difficulty: 'Medium',
        setup: '15 min',
        popular: false
      }
    ]
  },
  {
    id: 'seo',
    name: 'SEO & Marketing',
    description: 'Optimize your website for search engines and marketing',
    icon: Search,
    color: 'from-orange-500 to-red-600',
    integrations: [
      {
        name: 'SEO Optimizer',
        description: 'Automated SEO optimization and monitoring',
        features: ['Meta tag optimization', 'Schema markup', 'Sitemap generation', 'SEO audits'],
        difficulty: 'Easy',
        setup: '10 min',
        popular: true
      },
      {
        name: 'Google Search Console',
        description: 'Monitor search performance and indexing',
        features: ['Search analytics', 'Index coverage', 'Mobile usability', 'Core web vitals'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      },
      {
        name: 'Social Media Integration',
        description: 'Connect and share content on social platforms',
        features: ['Auto-posting', 'Social login', 'Share buttons', 'Social feeds'],
        difficulty: 'Medium',
        setup: '20 min',
        popular: true
      },
      {
        name: 'Email Marketing',
        description: 'Build email lists and send campaigns',
        features: ['Email capture', 'Automated campaigns', 'Segmentation', 'Analytics'],
        difficulty: 'Medium',
        setup: '15 min',
        popular: true
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Tools',
    description: 'Integrate shopping and payment functionality',
    icon: ShoppingCart,
    color: 'from-pink-500 to-rose-600',
    integrations: [
      {
        name: 'Shopify Integration',
        description: 'Connect your Shopify store to your website',
        features: ['Product sync', 'Inventory management', 'Order tracking', 'Customer sync'],
        difficulty: 'Medium',
        setup: '25 min',
        popular: true
      },
      {
        name: 'WooCommerce Connector',
        description: 'Integrate with WooCommerce stores',
        features: ['Product display', 'Cart integration', 'Checkout flow', 'Order management'],
        difficulty: 'High',
        setup: '40 min',
        popular: false
      },
      {
        name: 'Payment Gateway',
        description: 'Accept payments with multiple providers',
        features: ['Stripe payments', 'PayPal integration', 'Apple Pay', 'Google Pay'],
        difficulty: 'Medium',
        setup: '20 min',
        popular: true
      },
      {
        name: 'Inventory Management',
        description: 'Track and manage product inventory',
        features: ['Stock tracking', 'Low stock alerts', 'Automatic reordering', 'Multi-location'],
        difficulty: 'High',
        setup: '35 min',
        popular: false
      }
    ]
  },
  {
    id: 'communication',
    name: 'Communication Tools',
    description: 'Connect with customers through multiple channels',
    icon: MessageSquare,
    color: 'from-teal-500 to-cyan-600',
    integrations: [
      {
        name: 'Live Chat Widget',
        description: 'Add live chat support to your website',
        features: ['Real-time chat', 'Chatbot integration', 'File sharing', 'Chat history'],
        difficulty: 'Easy',
        setup: '5 min',
        popular: true
      },
      {
        name: 'WhatsApp Business',
        description: 'Connect with customers via WhatsApp',
        features: ['WhatsApp chat', 'Business profile', 'Automated messages', 'Message templates'],
        difficulty: 'Medium',
        setup: '15 min',
        popular: true
      },
      {
        name: 'SMS Integration',
        description: 'Send SMS notifications and marketing messages',
        features: ['SMS campaigns', 'Two-way messaging', 'Automated notifications', 'Delivery reports'],
        difficulty: 'Medium',
        setup: '10 min',
        popular: false
      },
      {
        name: 'Push Notifications',
        description: 'Send push notifications to website visitors',
        features: ['Browser notifications', 'Targeted messaging', 'Scheduled sends', 'Analytics'],
        difficulty: 'Easy',
        setup: '8 min',
        popular: true
      }
    ]
  }
];

// Popular Integrations
const popularIntegrations = [
  { name: 'Google Analytics 4', category: 'Analytics', users: '250M+', icon: BarChart3, setup: '5 min' },
  { name: 'Facebook Pixel', category: 'Marketing', users: '10M+', icon: Facebook, setup: '5 min' },
  { name: 'Mailchimp', category: 'Email Marketing', users: '13M+', icon: Mail, setup: '10 min' },
  { name: 'Stripe Payments', category: 'E-commerce', users: '100M+', icon: CreditCard, setup: '15 min' },
  { name: 'Shopify', category: 'E-commerce', users: '2M+', icon: ShoppingCart, setup: '20 min' },
  { name: 'WhatsApp Business', category: 'Communication', users: '5M+', icon: MessageSquare, setup: '10 min' },
  { name: 'Hotjar', category: 'Analytics', users: '900K+', icon: Eye, setup: '3 min' },
  { name: 'Intercom', category: 'Support', users: '25K+', icon: MessageSquare, setup: '8 min' }
];

// Integration Templates
const integrationTemplates = [
  {
    id: 'contact-form-crm',
    name: 'Contact Form to CRM',
    description: 'Automatically add form submissions to your CRM system',
    category: 'Forms',
    difficulty: 'Easy',
    steps: 5,
    integrations: ['Contact Form', 'Salesforce/HubSpot', 'Email Notifications'],
    benefits: ['No manual data entry', 'Instant lead capture', 'Follow-up automation'],
    setup: '10 minutes'
  },
  {
    id: 'ecommerce-analytics',
    name: 'E-commerce Analytics Setup',
    description: 'Complete analytics tracking for online stores',
    category: 'Analytics',
    difficulty: 'Medium',
    steps: 8,
    integrations: ['Google Analytics 4', 'Facebook Pixel', 'Google Ads', 'Email Marketing'],
    benefits: ['Track conversions', 'Optimize ad spend', 'Customer insights'],
    setup: '25 minutes'
  },
  {
    id: 'social-media-automation',
    name: 'Social Media Auto-posting',
    description: 'Automatically share content across social platforms',
    category: 'Marketing',
    difficulty: 'Medium',
    steps: 6,
    integrations: ['Blog/News', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram'],
    benefits: ['Consistent posting', 'Wider reach', 'Time saving'],
    setup: '20 minutes'
  },
  {
    id: 'customer-support-hub',
    name: 'Customer Support Hub',
    description: 'Unified customer support across multiple channels',
    category: 'Support',
    difficulty: 'High',
    steps: 10,
    integrations: ['Live Chat', 'Email', 'WhatsApp', 'Help Desk', 'Knowledge Base'],
    benefits: ['Unified inbox', 'Faster response', 'Better experience'],
    setup: '45 minutes'
  },
  {
    id: 'lead-scoring-system',
    name: 'AI Lead Scoring System',
    description: 'Automatically score and prioritize leads',
    category: 'AI',
    difficulty: 'High',
    steps: 12,
    integrations: ['Website Analytics', 'CRM', 'Email Tracking', 'AI Engine'],
    benefits: ['Better lead quality', 'Sales efficiency', 'Revenue growth'],
    setup: '60 minutes'
  },
  {
    id: 'abandoned-cart-recovery',
    name: 'Abandoned Cart Recovery',
    description: 'Win back customers who abandoned their shopping cart',
    category: 'E-commerce',
    difficulty: 'Medium',
    steps: 7,
    integrations: ['E-commerce Platform', 'Email Marketing', 'SMS', 'Push Notifications'],
    benefits: ['Recover lost sales', 'Increase revenue', 'Better ROI'],
    setup: '30 minutes'
  }
];

export default function WebsiteIntegrationTools() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('categories');

  const filteredCategories = integrationCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = integrationTemplates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Globe className="w-6 h-6 text-indigo-300" />
              <span className="text-white font-medium">Website Integration Tools</span>
              <Code className="w-5 h-5 text-indigo-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect Your Website
              <span className="block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                To Everything
              </span>
            </h1>

            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate your website with 300+ tools and services. From analytics and marketing 
              to e-commerce and customer support - connect everything in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                <Plus className="w-5 h-5 mr-2" />
                Start Connecting
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                <Workflow className="w-5 h-5 mr-2" />
                Browse Templates
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "300+", label: "Integrations", icon: Zap },
                { number: "50K+", label: "Websites Connected", icon: Globe },
                { number: "1M+", label: "Data Points Synced", icon: Database },
                { number: "99.9%", label: "Uptime", icon: CheckCircle }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-indigo-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Integrations</h2>
            <p className="text-gray-600">Most used integrations by our community</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {popularIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer min-w-[200px]"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <integration.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{integration.name}</div>
                    <div className="text-xs text-gray-500">{integration.category}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{integration.users} users</span>
                  <span>{integration.setup} setup</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Search and Tabs */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search integrations and templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              {['categories', 'templates'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Integration Categories */}
          {activeTab === 'categories' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
                >
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <category.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Integrations Grid */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.integrations.map((integration, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -2, scale: 1.01 }}
                          className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h4 className="font-bold text-gray-900">{integration.name}</h4>
                                {integration.popular && (
                                  <Badge className="bg-orange-100 text-orange-600 text-xs">Popular</Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600">{integration.description}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {integration.features.slice(0, 3).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {integration.features.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{integration.features.length - 3} more
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-600">
                              <span>Setup: {integration.setup}</span>
                              <Badge variant={integration.difficulty === 'Easy' ? 'secondary' : integration.difficulty === 'Medium' ? 'default' : 'destructive'}>
                                {integration.difficulty}
                              </Badge>
                            </div>
                            
                            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                              <Plus className="w-4 h-4 mr-1" />
                              Connect
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Integration Templates */}
          {activeTab === 'templates' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready-to-Use Integration Templates
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Pre-configured integration workflows that you can set up in minutes
                </p>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                          <Badge variant={template.difficulty === 'Easy' ? 'secondary' : template.difficulty === 'Medium' ? 'default' : 'destructive'}>
                            {template.difficulty}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                        <p className="text-gray-600 text-sm">{template.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-indigo-600">{template.steps}</div>
                        <div className="text-xs text-gray-500">Steps</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{template.setup}</div>
                        <div className="text-xs text-gray-500">Setup Time</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Integrations</h4>
                        <div className="flex flex-wrap gap-1">
                          {template.integrations.map((integration, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {template.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <Workflow className="w-4 h-4 mr-2" />
                      Use This Template
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Integration Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for developers and marketers who need reliable, scalable integrations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast Setup",
                description: "Connect most integrations in under 5 minutes with our one-click setup",
                color: "from-yellow-500 to-orange-600"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and SOC 2 compliance for all your data",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: RefreshCw,
                title: "Real-time Sync",
                description: "Data syncs in real-time with automatic retry and error handling",
                color: "from-emerald-500 to-green-600"
              },
              {
                icon: Code,
                title: "Developer Friendly",
                description: "Full API access, webhooks, and custom integrations for developers",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Track integration performance and data flow with detailed analytics",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: TrendingUp,
                title: "Auto Scaling",
                description: "Automatically scales with your business growth and data volume",
                color: "from-teal-500 to-cyan-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6`}>
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
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Connect Everything?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Start integrating your website with the tools you love. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                View All Integrations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}