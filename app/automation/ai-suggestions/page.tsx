'use client';

import React, { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  BarChart3,
  Shield,
  Search,
  Filter,
  Star,
  Building,
  Mail,
  Users,
  ShoppingCart,
  Calendar,
  FileText,
  Activity,
  Workflow,
  AlertCircle,
  Target,
  Database,
  Globe,
  RefreshCw,
  Eye,
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
  Sparkles,
  MousePointer,
  Palette,
  Image,
  Video,
  Music,
  CreditCard,
  Package,
  Truck,
  MapPin,
  Phone,
  Play,
  Pause,
  Settings,
  Plus,
  Download,
  Upload,
  Code,
  Brain,
  Wand2,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  Briefcase,
  Heart,
  Award,
  Gem,
  Rocket,
  LineChart,
  DollarSign
} from 'lucide-react';

// AI Suggestion Categories
const suggestionCategories = [
  {
    id: 'revenue-optimization',
    name: 'Revenue Optimization',
    description: 'AI suggestions to increase sales and revenue',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-600',
    count: 24
  },
  {
    id: 'customer-experience',
    name: 'Customer Experience',
    description: 'Improve customer satisfaction and retention',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    count: 18
  },
  {
    id: 'operational-efficiency',
    name: 'Operational Efficiency',
    description: 'Streamline operations and reduce costs',
    icon: Zap,
    color: 'from-blue-500 to-indigo-600',
    count: 32
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    description: 'Boost marketing ROI with smart automation',
    icon: Target,
    color: 'from-purple-500 to-violet-600',
    count: 28
  },
  {
    id: 'data-insights',
    name: 'Data & Analytics',
    description: 'Turn data into actionable insights',
    icon: BarChart3,
    color: 'from-orange-500 to-red-600',
    count: 21
  },
  {
    id: 'security-compliance',
    name: 'Security & Compliance',
    description: 'Protect your business with automated security',
    icon: Shield,
    color: 'from-cyan-500 to-teal-600',
    count: 15
  }
];

// AI Generated Workflow Suggestions
const aiSuggestions = [
  {
    id: 'abandoned-cart-ml',
    title: 'AI-Powered Abandoned Cart Recovery',
    description: 'Machine learning algorithm predicts the best time and channel to re-engage customers who abandoned their cart',
    category: 'revenue-optimization',
    confidence: 94,
    potentialImpact: 'High',
    estimatedROI: '340%',
    timeToImplement: '2-3 hours',
    difficulty: 'Medium',
    aiInsight: 'Your current cart abandonment rate is 68%. Our AI identified that customers who abandon carts on mobile devices respond better to SMS reminders, while desktop users prefer email with personalized product recommendations.',
    suggestedTriggers: [
      'Cart abandoned for 1 hour (mobile users)',
      'Cart abandoned for 3 hours (desktop users)',
      'High-value cart abandoned (>$200)'
    ],
    suggestedActions: [
      'Send personalized SMS with discount code',
      'Email with product recommendations',
      'Retargeting ads with cart items',
      'Push notification if app installed'
    ],
    expectedResults: [
      '25-30% recovery rate improvement',
      '$50,000+ additional monthly revenue',
      '15% increase in customer lifetime value'
    ],
    dataPoints: [
      'Customer browsing behavior',
      'Purchase history',
      'Device preferences',
      'Time-based patterns'
    ],
    trending: true,
    newSuggestion: false
  },
  {
    id: 'lead-scoring-ai',
    title: 'Intelligent Lead Scoring System',
    description: 'AI analyzes 50+ data points to score leads and predict conversion probability in real-time',
    category: 'marketing-automation',
    confidence: 91,
    potentialImpact: 'High',
    estimatedROI: '280%',
    timeToImplement: '4-6 hours',
    difficulty: 'High',
    aiInsight: 'Analysis shows your sales team spends 60% of time on low-quality leads. Our AI model can identify high-converting leads with 91% accuracy based on behavioral patterns and demographic data.',
    suggestedTriggers: [
      'New lead enters system',
      'Lead behavior changes',
      'Engagement threshold reached'
    ],
    suggestedActions: [
      'Auto-assign to senior sales rep (score >80)',
      'Add to nurture sequence (score 50-80)',
      'Flag for manual review (score <50)',
      'Send immediate alert for hot leads'
    ],
    expectedResults: [
      '45% increase in conversion rates',
      '60% reduction in sales cycle time',
      '35% improvement in sales productivity'
    ],
    dataPoints: [
      'Website engagement patterns',
      'Email interaction data',
      'Company information',
      'Social media activity'
    ],
    trending: false,
    newSuggestion: true
  },
  {
    id: 'customer-churn-prediction',
    title: 'Predictive Customer Churn Prevention',
    description: 'AI predicts which customers are likely to churn and triggers personalized retention campaigns',
    category: 'customer-experience',
    confidence: 87,
    potentialImpact: 'Very High',
    estimatedROI: '420%',
    timeToImplement: '6-8 hours',
    difficulty: 'High',
    aiInsight: 'Customer churn costs you approximately $125,000 monthly. Our AI identified 7 key behavioral indicators that predict churn with 87% accuracy, allowing proactive intervention 30 days before typical churn events.',
    suggestedTriggers: [
      'Login frequency decreases by 50%',
      'Support tickets increase by 200%',
      'Feature usage drops significantly',
      'Payment method issues'
    ],
    suggestedActions: [
      'Personal call from customer success',
      'Targeted discount or upgrade offer',
      'Priority support escalation',
      'Feature training session invitation'
    ],
    expectedResults: [
      '40% reduction in churn rate',
      '25% increase in customer lifetime value',
      '$150,000+ annual revenue retention'
    ],
    dataPoints: [
      'Usage analytics',
      'Support interaction history',
      'Billing patterns',
      'Feature adoption rates'
    ],
    trending: true,
    newSuggestion: false
  },
  {
    id: 'dynamic-pricing-optimization',
    title: 'AI Dynamic Pricing Optimization',
    description: 'Automatically adjust prices based on demand, competition, and customer behavior to maximize revenue',
    category: 'revenue-optimization',
    confidence: 89,
    potentialImpact: 'High',
    estimatedROI: '265%',
    timeToImplement: '8-12 hours',
    difficulty: 'Very High',
    aiInsight: 'Your current static pricing model leaves money on the table. AI analysis suggests dynamic pricing could increase revenue by 15-20% while maintaining customer satisfaction through intelligent price optimization.',
    suggestedTriggers: [
      'Inventory levels change',
      'Competitor price updates',
      'Demand spike detected',
      'Customer segment identified'
    ],
    suggestedActions: [
      'Adjust product prices automatically',
      'Create personalized offers',
      'Implement surge pricing',
      'Launch flash sales for slow movers'
    ],
    expectedResults: [
      '15-20% revenue increase',
      '30% improvement in profit margins',
      '25% better inventory turnover'
    ],
    dataPoints: [
      'Competitor pricing data',
      'Customer price sensitivity',
      'Inventory levels',
      'Market demand patterns'
    ],
    trending: false,
    newSuggestion: true
  },
  {
    id: 'content-optimization-ai',
    title: 'AI Content Performance Optimizer',
    description: 'Analyze content performance and automatically optimize titles, descriptions, and CTAs for better engagement',
    category: 'marketing-automation',
    confidence: 85,
    potentialImpact: 'Medium',
    estimatedROI: '185%',
    timeToImplement: '3-4 hours',
    difficulty: 'Medium',
    aiInsight: 'Content analysis reveals that 40% of your blog posts underperform. AI can optimize headlines, meta descriptions, and CTAs to improve click-through rates by up to 35%.',
    suggestedTriggers: [
      'New content published',
      'Low engagement detected',
      'A/B test completion',
      'SEO score below threshold'
    ],
    suggestedActions: [
      'Optimize headlines for CTR',
      'Rewrite meta descriptions',
      'Suggest content improvements',
      'Auto-generate social media posts'
    ],
    expectedResults: [
      '35% increase in organic traffic',
      '25% improvement in engagement',
      '20% boost in conversion rates'
    ],
    dataPoints: [
      'Content engagement metrics',
      'SEO performance data',
      'Social sharing patterns',
      'User behavior analytics'
    ],
    trending: false,
    newSuggestion: false
  },
  {
    id: 'inventory-demand-forecasting',
    title: 'AI Inventory Demand Forecasting',
    description: 'Predict product demand and automate inventory management to prevent stockouts and overstock',
    category: 'operational-efficiency',
    confidence: 92,
    potentialImpact: 'High',
    estimatedROI: '310%',
    timeToImplement: '5-7 hours',
    difficulty: 'High',
    aiInsight: 'Inventory inefficiencies cost you $75,000 annually. AI forecasting can reduce stockouts by 85% and overstock by 60% while improving cash flow by optimizing reorder points.',
    suggestedTriggers: [
      'Stock level reaches reorder point',
      'Demand pattern changes',
      'Seasonal trend detected',
      'Supplier lead time updates'
    ],
    suggestedActions: [
      'Auto-create purchase orders',
      'Adjust reorder points dynamically',
      'Alert for demand anomalies',
      'Optimize safety stock levels'
    ],
    expectedResults: [
      '85% reduction in stockouts',
      '60% decrease in overstock',
      '25% improvement in cash flow'
    ],
    dataPoints: [
      'Historical sales data',
      'Seasonal patterns',
      'Supplier performance',
      'Market trends'
    ],
    trending: true,
    newSuggestion: false
  }
];

// AI Insights Dashboard Data
const aiInsights = {
  totalSuggestions: 47,
  implementedSuggestions: 12,
  avgROI: '285%',
  totalRevenuePotential: '$2.4M',
  topOpportunities: [
    { area: 'Cart Recovery', potential: '$450K', confidence: 94 },
    { area: 'Lead Scoring', potential: '$380K', confidence: 91 },
    { area: 'Churn Prevention', potential: '$290K', confidence: 87 },
    { area: 'Price Optimization', potential: '$320K', confidence: 89 }
  ],
  businessMetrics: {
    conversionRate: { current: 2.4, predicted: 3.8, improvement: 58 },
    customerLifetimeValue: { current: 1250, predicted: 1850, improvement: 48 },
    operationalEfficiency: { current: 67, predicted: 89, improvement: 33 },
    customerSatisfaction: { current: 4.2, predicted: 4.7, improvement: 12 }
  }
};

export default function AIWorkflowSuggestions() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('confidence');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Simulate AI analysis
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 2000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredSuggestions = aiSuggestions.filter(suggestion => {
    const matchesCategory = selectedCategory === 'all' || suggestion.category === selectedCategory;
    const matchesSearch = suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         suggestion.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedSuggestions = [...filteredSuggestions].sort((a, b) => {
    switch (sortBy) {
      case 'confidence':
        return b.confidence - a.confidence;
      case 'roi':
        return parseInt(b.estimatedROI) - parseInt(a.estimatedROI);
      case 'impact':
        const impactOrder: { [key: string]: number } = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
        return (impactOrder[b.potentialImpact] || 0) - (impactOrder[a.potentialImpact] || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Bot className="w-6 h-6 text-violet-300" />
              <span className="text-white font-medium">AI Workflow Suggestions</span>
              <Lightbulb className="w-5 h-5 text-violet-300" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Business
              <span className="block bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>

            <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let artificial intelligence analyze your business data and suggest optimal automation 
              workflows that can increase revenue by up to 400% and save hundreds of hours monthly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                <Brain className="w-5 h-5 mr-2" />
                Analyze My Business
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                <Lightbulb className="w-5 h-5 mr-2" />
                View AI Insights
              </Button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: aiInsights.totalSuggestions, label: "AI Suggestions", icon: Lightbulb },
                { number: aiInsights.avgROI, label: "Average ROI", icon: TrendingUp },
                { number: aiInsights.totalRevenuePotential, label: "Revenue Potential", icon: DollarSign },
                { number: "99.2%", label: "Accuracy Rate", icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-violet-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-violet-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Analysis Status */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-violet-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-3">
              <div className="animate-spin">
                <Brain className="w-5 h-5" />
              </div>
              <span className="font-medium">AI is analyzing your business data...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Insights Dashboard */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI Business Intelligence Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time insights and optimization opportunities identified by our AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Top Opportunities */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Top Revenue Opportunities</h3>
              <div className="space-y-4">
                {aiInsights.topOpportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{opportunity.area}</h4>
                      <Badge className="bg-green-100 text-green-700">
                        {opportunity.confidence}% confidence
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-violet-600">{opportunity.potential}</span>
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                        Implement
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Business Metrics Improvement */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Predicted Improvements</h3>
              <div className="space-y-4">
                {Object.entries(aiInsights.businessMetrics).map(([key, metric], index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <Badge className="bg-emerald-100 text-emerald-700">
                        +{metric.improvement}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Current: {metric.current}</span>
                      <span className="font-semibold text-emerald-600">Target: {metric.predicted}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Filters */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search AI suggestions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              >
                <option value="confidence">Sort by Confidence</option>
                <option value="roi">Sort by ROI</option>
                <option value="impact">Sort by Impact</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-violet-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Categories ({aiSuggestions.length})
            </button>
            {suggestionCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Suggestions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {sortedSuggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-2xl font-bold text-gray-900">{suggestion.title}</h3>
                            {suggestion.trending && (
                              <Badge className="bg-orange-100 text-orange-600">🔥 Trending</Badge>
                            )}
                            {suggestion.newSuggestion && (
                              <Badge className="bg-blue-100 text-blue-600">✨ New</Badge>
                            )}
                          </div>
                          <p className="text-gray-600">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-violet-600">{suggestion.confidence}%</div>
                        <div className="text-sm text-gray-500">AI Confidence</div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-emerald-50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-emerald-600">{suggestion.estimatedROI}</div>
                      <div className="text-sm text-gray-600">Estimated ROI</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-blue-600">{suggestion.potentialImpact}</div>
                      <div className="text-sm text-gray-600">Impact Level</div>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-purple-600">{suggestion.timeToImplement}</div>
                      <div className="text-sm text-gray-600">Implementation</div>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4 text-center">
                      <div className="text-lg font-bold text-orange-600">{suggestion.difficulty}</div>
                      <div className="text-sm text-gray-600">Difficulty</div>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-violet-900 mb-2">AI Insight</h4>
                        <p className="text-violet-800 text-sm leading-relaxed">{suggestion.aiInsight}</p>
                      </div>
                    </div>
                  </div>

                  {/* Implementation Details */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-violet-600 mr-2" />
                        Suggested Triggers
                      </h4>
                      <ul className="space-y-2">
                        {suggestion.suggestedTriggers.map((trigger, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{trigger}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                        <Workflow className="w-5 h-5 text-violet-600 mr-2" />
                        Recommended Actions
                      </h4>
                      <ul className="space-y-2">
                        {suggestion.suggestedActions.map((action, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expected Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 text-violet-600 mr-2" />
                      Expected Results
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {suggestion.expectedResults.map((result, idx) => (
                        <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <span className="text-sm font-medium text-green-800">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Database className="w-5 h-5 text-violet-600 mr-2" />
                      AI Analysis Based On
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.dataPoints.map((point, idx) => (
                        <Badge key={idx} variant="outline" className="text-sm">
                          {point}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                      <Button variant="outline" size="sm">
                        <Code className="w-4 h-4 mr-2" />
                        View Technical Details
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <ThumbsDown className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <Button className="bg-violet-600 hover:bg-violet-700">
                        <Rocket className="w-4 h-4 mr-2" />
                        Implement Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              How Our AI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced machine learning algorithms analyze your business 24/7 to identify optimization opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Deep Learning Analysis",
                description: "AI analyzes 50+ business metrics and patterns to identify optimization opportunities"
              },
              {
                icon: Lightbulb,
                title: "Predictive Insights",
                description: "Machine learning models predict future trends and suggest proactive workflows"
              },
              {
                icon: Target,
                title: "ROI Optimization",
                description: "AI calculates potential ROI for each suggestion with 99.2% accuracy"
              },
              {
                icon: Zap,
                title: "Real-time Monitoring",
                description: "Continuous analysis of performance data to suggest improvements in real-time"
              },
              {
                icon: Shield,
                title: "Privacy Protection",
                description: "All analysis happens securely with enterprise-grade data protection"
              },
              {
                icon: RefreshCw,
                title: "Self-Improving AI",
                description: "AI learns from implementation results to provide better suggestions over time"
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6">
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
      <section className="py-20 bg-gradient-to-br from-violet-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let AI Optimize Your Business
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
              Start your AI-powered transformation today and unlock millions in revenue potential
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full">
                Start AI Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                Schedule AI Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}