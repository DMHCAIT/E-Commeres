'use client';

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Settings, 
  Plus, 
  ArrowRight,
  Clock,
  TrendingUp,
  BarChart3,
  Shield,
  Search,
  Filter,
  Star,
  Building,
  Calendar,
  DollarSign,
  Activity,
  Workflow,
  AlertCircle,
  User,
  Target,
  Database,
  Zap,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Home,
  Calculator,
  MessageSquare,
  UserCheck,
  ClipboardList,
  PieChart,
  Layers,
  RefreshCw
} from 'lucide-react';

// HRMS Integration Data
const hrmsIntegrations = [
  {
    id: 'bamboohr',
    name: 'BambooHR',
    description: 'Complete HR software for small and medium businesses',
    logo: '/integrations/bamboohr.png',
    category: 'Core HR',
    status: 'available',
    popularity: 95,
    features: [
      'Employee Records', 'Time Tracking', 'Benefits Management', 
      'Performance Reviews', 'Applicant Tracking', 'Reporting'
    ],
    automations: [
      'Employee Onboarding Workflow',
      'Time-off Request Processing',
      'Performance Review Scheduling',
      'Benefits Enrollment Automation',
      'Offboarding Checklist'
    ],
    pricing: 'Starting at $6.19/employee/month',
    setupTime: '10-15 minutes',
    rating: 4.8,
    users: '25,000+',
    dataSync: 'Real-time',
    security: 'SOC 2 Type II',
    employeeSize: '10-1,000 employees'
  },
  {
    id: 'workday',
    name: 'Workday HCM',
    description: 'Enterprise-grade human capital management suite',
    logo: '/integrations/workday.png',
    category: 'Enterprise HCM',
    status: 'available',
    popularity: 92,
    features: [
      'Core HR', 'Payroll', 'Talent Management', 
      'Workforce Planning', 'Analytics', 'Mobile App'
    ],
    automations: [
      'Talent Acquisition Pipeline',
      'Compensation Planning',
      'Succession Planning Workflows',
      'Learning & Development Paths',
      'Compliance Reporting'
    ],
    pricing: 'Custom enterprise pricing',
    setupTime: '30-60 minutes',
    rating: 4.6,
    users: '5,000+',
    dataSync: 'Real-time',
    security: 'Enterprise-grade',
    employeeSize: '500+ employees'
  },
  {
    id: 'adp',
    name: 'ADP Workforce Now',
    description: 'Comprehensive HR and payroll management platform',
    logo: '/integrations/adp.png',
    category: 'Payroll & HR',
    status: 'available',
    popularity: 90,
    features: [
      'Payroll Processing', 'HR Management', 'Tax Services',
      'Benefits Administration', 'Time & Attendance', 'Compliance'
    ],
    automations: [
      'Payroll Processing Workflow',
      'Tax Filing Automation',
      'Benefits Changes Processing',
      'Compliance Alert System',
      'Employee Data Sync'
    ],
    pricing: 'Starting at $59/month + $4/employee',
    setupTime: '20-30 minutes',
    rating: 4.5,
    users: '50,000+',
    dataSync: 'Daily sync',
    security: 'Bank-level security',
    employeeSize: '50-1,000 employees'
  },
  {
    id: 'gusto',
    name: 'Gusto',
    description: 'Modern payroll, benefits, and HR for small businesses',
    logo: '/integrations/gusto.png',
    category: 'Small Business HR',
    status: 'available',
    popularity: 88,
    features: [
      'Payroll', 'Benefits', 'HR Tools',
      'Time Tracking', 'Compliance', 'Team Management'
    ],
    automations: [
      'New Hire Onboarding',
      'Payroll Run Automation',
      'Benefits Enrollment Flow',
      'Termination Workflow',
      'PTO Balance Updates'
    ],
    pricing: 'Starting at $40/month + $6/employee',
    setupTime: '5-10 minutes',
    rating: 4.7,
    users: '15,000+',
    dataSync: 'Real-time',
    security: 'SOC 2 compliant',
    employeeSize: '1-100 employees'
  },
  {
    id: 'namely',
    name: 'Namely',
    description: 'HR platform designed for mid-sized companies',
    logo: '/integrations/namely.png',
    category: 'Mid-Market HR',
    status: 'available',
    popularity: 82,
    features: [
      'HRIS', 'Payroll', 'Benefits', 
      'Performance Management', 'Compliance', 'Analytics'
    ],
    automations: [
      'Performance Review Cycles',
      'Goal Setting & Tracking',
      'Career Development Plans',
      'Compensation Reviews',
      'Employee Survey Automation'
    ],
    pricing: 'Starting at $12/employee/month',
    setupTime: '15-25 minutes',
    rating: 4.4,
    users: '8,000+',
    dataSync: 'Real-time',
    security: 'ISO 27001',
    employeeSize: '100-1,000 employees'
  },
  {
    id: 'successfactors',
    name: 'SAP SuccessFactors',
    description: 'Comprehensive cloud-based HCM suite',
    logo: '/integrations/successfactors.png',
    category: 'Enterprise HCM',
    status: 'coming-soon',
    popularity: 85,
    features: [
      'Core HR & Payroll', 'Talent Management', 'Analytics',
      'Employee Central', 'Learning Management', 'Workforce Analytics'
    ],
    automations: [
      'Talent Acquisition Workflow',
      'Performance & Goals Management',
      'Learning & Development Tracking',
      'Compensation Management',
      'Employee Experience Journey'
    ],
    pricing: 'Custom enterprise pricing',
    setupTime: '45-90 minutes',
    rating: 4.3,
    users: '3,000+',
    dataSync: 'Real-time',
    security: 'Enterprise-grade',
    employeeSize: '1,000+ employees'
  }
];

// HR Automation Templates
const hrmsTemplates = [
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding Journey',
    description: 'Complete automation from offer acceptance to first-day setup',
    steps: 15,
    timesSaved: '12 hours/new hire',
    popularity: 96,
    difficulty: 'Medium',
    triggers: ['Offer Accepted', 'Start Date Approaching', 'Documents Submitted'],
    actions: ['Send Welcome Email', 'Create Accounts', 'Schedule Meetings', 'Assign Equipment'],
    category: 'Onboarding'
  },
  {
    id: 'performance-review',
    name: 'Performance Review Cycle',
    description: 'Automate quarterly/annual performance review processes',
    steps: 12,
    timesSaved: '8 hours/employee',
    popularity: 89,
    difficulty: 'High',
    triggers: ['Review Period Start', 'Self-Assessment Due', 'Manager Review Due'],
    actions: ['Send Notifications', 'Compile Reports', 'Schedule Meetings', 'Update Records'],
    category: 'Performance'
  },
  {
    id: 'time-off-management',
    name: 'Time-Off Request Processing',
    description: 'Streamline PTO requests, approvals, and calendar updates',
    steps: 8,
    timesSaved: '30 minutes/request',
    popularity: 94,
    difficulty: 'Easy',
    triggers: ['PTO Request', 'Manager Response', 'HR Approval Required'],
    actions: ['Notify Manager', 'Update Calendar', 'Adjust Balance', 'Send Confirmation'],
    category: 'Time & Attendance'
  },
  {
    id: 'benefits-enrollment',
    name: 'Benefits Enrollment Workflow',
    description: 'Guide employees through benefits selection and enrollment',
    steps: 10,
    timesSaved: '2 hours/employee',
    popularity: 85,
    difficulty: 'Medium',
    triggers: ['Enrollment Period', 'Life Event', 'New Hire'],
    actions: ['Send Reminders', 'Provide Options', 'Process Elections', 'Confirm Coverage'],
    category: 'Benefits'
  },
  {
    id: 'offboarding',
    name: 'Employee Offboarding',
    description: 'Ensure smooth departures with automated checklists',
    steps: 14,
    timesSaved: '6 hours/departure',
    popularity: 87,
    difficulty: 'Medium',
    triggers: ['Resignation Notice', 'Last Day Approaching', 'Exit Interview Scheduled'],
    actions: ['Revoke Access', 'Collect Equipment', 'Transfer Knowledge', 'Process Final Pay'],
    category: 'Offboarding'
  },
  {
    id: 'compliance-monitoring',
    name: 'Compliance & Certification Tracking',
    description: 'Monitor certifications, training, and compliance deadlines',
    steps: 9,
    timesSaved: '4 hours/week',
    popularity: 82,
    difficulty: 'Low',
    triggers: ['Certification Expiring', 'Training Due', 'Compliance Deadline'],
    actions: ['Send Alerts', 'Schedule Training', 'Update Records', 'Generate Reports'],
    category: 'Compliance'
  }
];

export default function HRMSIntegrations() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const categories = ['All', 'Core HR', 'Enterprise HCM', 'Payroll & HR', 'Small Business HR', 'Mid-Market HR'];
  const templateCategories = ['All', 'Onboarding', 'Performance', 'Time & Attendance', 'Benefits', 'Offboarding', 'Compliance'];
  const [activeTemplateCategory, setActiveTemplateCategory] = useState('All');

  const filteredIntegrations = hrmsIntegrations.filter(integration => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTemplates = hrmsTemplates.filter(template => {
    return activeTemplateCategory === 'All' || template.category === activeTemplateCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Users className="w-6 h-6 text-emerald-300" />
              <span className="text-white font-medium">HRMS Integrations</span>
              <FileText className="w-5 h-5 text-emerald-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Streamline Your
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                HR Operations
              </span>
            </h1>

            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with 20+ HR management systems to automate employee onboarding, 
              performance reviews, payroll processing, and compliance management.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                <Plus className="w-5 h-5 mr-2" />
                Connect HRMS
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                <Workflow className="w-5 h-5 mr-2" />
                View Templates
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "HR Platforms", icon: Building },
                { number: "100K+", label: "Employees Managed", icon: Users },
                { number: "50K+", label: "Hours Saved/Month", icon: Clock },
                { number: "99.5%", label: "Accuracy Rate", icon: CheckCircle }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-emerald-200 text-sm">{stat.label}</div>
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
                placeholder="Search HR platforms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
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

      {/* HRMS Integrations Grid */}
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
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
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
                        <span className="text-xs text-gray-500">Company Size</span>
                        <Building className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="text-xs font-semibold text-gray-900 mt-1">{integration.employeeSize}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Rating</span>
                        <Star className="w-3 h-3 text-yellow-400" />
                      </div>
                      <div className="text-xs font-semibold text-gray-900 mt-1">{integration.rating}/5.0</div>
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
                      <span className="font-semibold text-gray-900">{integration.pricing.split(' ')[0]} {integration.pricing.split(' ')[1]}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Learn More
                      </Button>
                      {integration.status === 'available' ? (
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
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
              HR Automation Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pre-built workflows for common HR processes that save time and ensure consistency
            </p>

            {/* Template Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {templateCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTemplateCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTemplateCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredTemplates.map((template, index) => (
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

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-emerald-600">{template.steps}</div>
                    <div className="text-xs text-gray-500">Steps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{template.timesSaved}</div>
                    <div className="text-xs text-gray-500">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{template.popularity}%</div>
                    <div className="text-xs text-gray-500">Adoption</div>
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
                      {template.actions.slice(0, 3).map((action, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {action}
                        </Badge>
                      ))}
                      {template.actions.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{template.actions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Workflow className="w-4 h-4 mr-2" />
                  Use This Template
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Automate Your HR Processes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your HR operations with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Save 40+ Hours Weekly",
                description: "Eliminate manual tasks and repetitive processes with smart automation",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: Users,
                title: "Improve Employee Experience",
                description: "Faster onboarding, timely reviews, and seamless HR interactions",
                color: "from-emerald-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Ensure Compliance",
                description: "Automated tracking and reporting for regulatory requirements",
                color: "from-purple-500 to-violet-600"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Real-time analytics and reporting for better HR decisions",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: TrendingUp,
                title: "Scale Operations",
                description: "Handle growing teams without proportional HR overhead",
                color: "from-teal-500 to-cyan-600"
              },
              {
                icon: CheckCircle,
                title: "Reduce Errors",
                description: "Minimize human error in payroll, benefits, and record keeping",
                color: "from-pink-500 to-rose-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Start automating your HR processes today and give your team the tools they deserve
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
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