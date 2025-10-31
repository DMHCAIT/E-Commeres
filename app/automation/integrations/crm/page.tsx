'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Users, 
  Database, 
  CheckCircle, 
  ExternalLink, 
  Settings, 
  Plus, 
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  BarChart3,
  Globe,
  Shield,
  RefreshCw,
  Search,
  Filter,
  Star,
  Building,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  FileText,
  Activity,
  Workflow,
  AlertCircle,
  CheckSquare,
  User,
  Target
} from 'lucide-react';

// CRM Integration Data
const crmIntegrations = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'World\'s #1 CRM platform for sales, service, and marketing',
    logo: '/integrations/salesforce.png',
    category: 'Enterprise CRM',
    status: 'available',
    popularity: 98,
    features: [
      'Lead Management', 'Opportunity Tracking', 'Contact Sync', 
      'Custom Fields', 'Workflow Automation', 'Reporting'
    ],
    automations: [
      'Lead to Opportunity Conversion',
      'Contact Sync with Marketing',
      'Deal Stage Notifications',
      'Custom Object Updates',
      'Report Generation'
    ],
    pricing: 'Starting at $25/user/month',
    setupTime: '5-10 minutes',
    rating: 4.9,
    users: '150,000+',
    dataSync: 'Real-time',
    security: 'Enterprise-grade'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'All-in-one inbound marketing, sales, and service platform',
    logo: '/integrations/hubspot.png',
    category: 'Marketing & Sales',
    status: 'available',
    popularity: 95,
    features: [
      'Contact Management', 'Deal Pipeline', 'Email Marketing', 
      'Landing Pages', 'Analytics', 'Ticket Management'
    ],
    automations: [
      'Marketing Qualified Lead Routing',
      'Email Sequence Automation',
      'Deal Won Celebrations',
      'Contact Property Updates',
      'Service Ticket Creation'
    ],
    pricing: 'Free tier available',
    setupTime: '3-5 minutes',
    rating: 4.8,
    users: '100,000+',
    dataSync: 'Real-time',
    security: 'SOC 2 Type II'
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    description: 'Sales CRM designed to help small teams manage leads and deals',
    logo: '/integrations/pipedrive.png',
    category: 'Sales CRM',
    status: 'available',
    popularity: 85,
    features: [
      'Visual Pipeline', 'Activity Management', 'Deal Tracking',
      'Email Integration', 'Mobile App', 'Sales Reporting'
    ],
    automations: [
      'Deal Stage Automation',
      'Activity Creation Rules',
      'Email Follow-up Sequences',
      'Lead Distribution',
      'Pipeline Health Alerts'
    ],
    pricing: 'Starting at $14.90/user/month',
    setupTime: '2-3 minutes',
    rating: 4.7,
    users: '50,000+',
    dataSync: 'Near real-time',
    security: 'GDPR Compliant'
  },
  {
    id: 'zoho',
    name: 'Zoho CRM',
    description: 'Comprehensive CRM with sales automation and analytics',
    logo: '/integrations/zoho.png',
    category: 'Business Suite',
    status: 'available',
    popularity: 80,
    features: [
      'Sales Automation', 'Marketing Automation', 'Customer Support',
      'Analytics', 'Social CRM', 'Mobile CRM'
    ],
    automations: [
      'Lead Scoring Automation',
      'Sales Process Workflows',
      'Customer Journey Mapping',
      'Revenue Forecasting',
      'Territory Management'
    ],
    pricing: 'Starting at $14/user/month',
    setupTime: '5-8 minutes',
    rating: 4.6,
    users: '75,000+',
    dataSync: 'Real-time',
    security: 'ISO 27001'
  },
  {
    id: 'monday',
    name: 'Monday.com CRM',
    description: 'Visual project management platform with CRM capabilities',
    logo: '/integrations/monday.png',
    category: 'Project Management',
    status: 'available',
    popularity: 75,
    features: [
      'Visual Boards', 'Custom Workflows', 'Time Tracking',
      'Team Collaboration', 'Automation', 'Integrations'
    ],
    automations: [
      'Status Change Notifications',
      'Task Assignment Rules',
      'Deadline Reminders',
      'Progress Updates',
      'Client Communication'
    ],
    pricing: 'Starting at $8/seat/month',
    setupTime: '3-5 minutes',
    rating: 4.5,
    users: '40,000+',
    dataSync: 'Real-time',
    security: 'SOC 2 Type II'
  },
  {
    id: 'freshworks',
    name: 'Freshworks CRM',
    description: 'Full-suite CRM with built-in phone, email, and chat',
    logo: '/integrations/freshworks.png',
    category: 'Customer Experience',
    status: 'coming-soon',
    popularity: 70,
    features: [
      'Lead Management', 'Deal Management', 'Contact Management',
      'Email Marketing', 'Phone Integration', 'Analytics'
    ],
    automations: [
      'Lead Lifecycle Management',
      'Deal Probability Updates',
      'Contact Enrichment',
      'Sales Sequence Automation',
      'Revenue Attribution'
    ],
    pricing: 'Starting at $15/user/month',
    setupTime: '5-7 minutes',
    rating: 4.4,
    users: '30,000+',
    dataSync: 'Real-time',
    security: 'GDPR & SOC 2'
  }
];

// Automation Templates
const crmTemplates = [
  {
    id: 'lead-to-customer',
    name: 'Lead to Customer Journey',
    description: 'Automate the entire process from lead capture to customer conversion',
    steps: 8,
    timesSaved: '15 hours/week',
    popularity: 95,
    difficulty: 'Medium',
    triggers: ['New Lead', 'Lead Score Change', 'Deal Stage Update'],
    actions: ['Send Email', 'Update CRM', 'Assign Tasks', 'Create Activities']
  },
  {
    id: 'deal-won-celebration',
    name: 'Deal Won Celebration',
    description: 'Automatically celebrate wins and set up customer success',
    steps: 6,
    timesSaved: '8 hours/week',
    popularity: 88,
    difficulty: 'Easy',
    triggers: ['Deal Won', 'Contract Signed'],
    actions: ['Send Celebration Email', 'Create Onboarding Tasks', 'Notify Team']
  },
  {
    id: 'lead-nurturing',
    name: 'Lead Nurturing Sequence',
    description: 'Automated email sequences based on lead behavior and score',
    steps: 12,
    timesSaved: '20 hours/week',
    popularity: 92,
    difficulty: 'High',
    triggers: ['Lead Score Threshold', 'Email Engagement', 'Website Activity'],
    actions: ['Send Targeted Emails', 'Update Lead Status', 'Schedule Calls']
  },
  {
    id: 'customer-health-score',
    name: 'Customer Health Monitoring',
    description: 'Track customer engagement and trigger retention activities',
    steps: 10,
    timesSaved: '12 hours/week',
    popularity: 85,
    difficulty: 'Medium',
    triggers: ['Activity Decrease', 'Support Tickets', 'Usage Metrics'],
    actions: ['Alert Account Manager', 'Schedule Check-in', 'Send Resources']
  }
];

export default function CRMIntegrations() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const categories = ['All', 'Enterprise CRM', 'Marketing & Sales', 'Sales CRM', 'Business Suite', 'Project Management'];

  const filteredIntegrations = crmIntegrations.filter(integration => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Users className="w-6 h-6 text-blue-300" />
              <span className="text-white font-medium">CRM Integrations</span>
              <Database className="w-5 h-5 text-blue-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Connect Your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                CRM Systems
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate with 25+ CRM platforms to automate lead management, deal tracking, 
              and customer relationships. Sync data in real-time and eliminate manual work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                <Plus className="w-5 h-5 mr-2" />
                Connect CRM
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                <Workflow className="w-5 h-5 mr-2" />
                View Templates
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "25+", label: "CRM Platforms", icon: Database },
                { number: "150K+", label: "Active Users", icon: Users },
                { number: "500K+", label: "Records Synced", icon: Activity },
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
                    <stat.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search CRM platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CRM Integrations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{integration.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {integration.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {integration.status === 'available' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Clock className="w-5 h-5 text-orange-500" />
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{integration.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Users</span>
                        <Users className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">{integration.users}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Rating</span>
                        <Star className="w-3 h-3 text-yellow-400" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mt-1">{integration.rating}/5.0</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {integration.features.slice(0, 4).map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {integration.features.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{integration.features.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Setup Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                    <div>
                      <span className="text-gray-500">Setup Time:</span>
                      <div className="font-medium text-gray-900">{integration.setupTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Data Sync:</span>
                      <div className="font-medium text-gray-900">{integration.dataSync}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">From </span>
                      <span className="font-semibold text-gray-900">{integration.pricing}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Learn More
                      </Button>
                      {integration.status === 'available' ? (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" disabled>
                          <Clock className="w-4 h-4 mr-1" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Templates */}
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
              Ready-to-Use CRM Automations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started instantly with proven automation templates designed for CRM workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {crmTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm">{template.description}</p>
                  </div>
                  <Badge variant={template.difficulty === 'Easy' ? 'secondary' : template.difficulty === 'Medium' ? 'default' : 'destructive'}>
                    {template.difficulty}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{template.steps}</div>
                    <div className="text-xs text-gray-500">Steps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{template.timesSaved}</div>
                    <div className="text-xs text-gray-500">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{template.popularity}%</div>
                    <div className="text-xs text-gray-500">Popularity</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Triggers</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.triggers.map((trigger, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {trigger}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Actions</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.actions.map((action, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {action}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Workflow className="w-4 h-4 mr-2" />
                  Use This Template
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Supercharge Your CRM?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect your CRM today and start automating lead management, deal tracking, and customer relationships
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}