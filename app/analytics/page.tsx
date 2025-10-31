'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Play,
  Target,
  Activity,
  Calendar,
  Filter,
  Download,
  Share2
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4" />
                <span>Analytics & Insights</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Understand Your
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"> Data</span>
                <br />Make Smart Decisions
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Comprehensive analytics platform with real-time insights, 
                advanced reporting, and AI-powered recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link href="/templates?category=analytics">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
                    View Analytics
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="/design-studio">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                    <Play className="w-5 h-5 mr-2" />
                    Live Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-indigo-500" />
                  <span>Real-time tracking</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-indigo-500" />
                  <span>Custom dashboards</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Live Dashboard</h3>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">Page Views</div>
                      <div className="text-2xl font-bold text-gray-900">24,891</div>
                      <div className="text-xs text-green-600">↑ 12.5%</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-500 mb-1">Conversion</div>
                      <div className="text-2xl font-bold text-gray-900">3.42%</div>
                      <div className="text-xs text-green-600">↑ 8.3%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Traffic Sources</span>
                        <PieChart className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span>Organic Search</span>
                          <span>45%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>Direct</span>
                          <span>28%</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>Social Media</span>
                          <span>27%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</div>
                  <div className="text-sm text-gray-500">Track every interaction and optimize performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Analytics Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get deep insights into your website performance and user behavior
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Real-time Analytics */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Real-time Tracking</CardTitle>
                <CardDescription className="text-base">
                  Monitor your website activity as it happens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Live Visitor Count</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Active Page Views</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Event Tracking</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View Live Data
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* User Behavior */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MousePointer className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">User Behavior</CardTitle>
                <CardDescription className="text-base">
                  Understand how visitors interact with your site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Click Heatmaps</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>User Journey Maps</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Session Recordings</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Analyze Behavior
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Custom Reports */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Custom Reports</CardTitle>
                <CardDescription className="text-base">
                  Create detailed reports tailored to your needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Drag & Drop Builder</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Automated Scheduling</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Export & Share</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Build Reports
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Track page load times, bounce rates, and more</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Goal Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Set and monitor conversion goals and KPIs</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Filter className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Advanced Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Segment data by demographics, behavior & more</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg">Data Export</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Export data in multiple formats for analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Dashboard
            </h2>
            <p className="text-xl text-gray-600">
              All your data in one beautifully designed interface
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">127,459</div>
                  <div className="text-sm text-gray-600">Total Page Views</div>
                  <div className="text-xs text-green-600 mt-1">↑ 15.2% from last month</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">8,247</div>
                  <div className="text-sm text-gray-600">Unique Visitors</div>
                  <div className="text-xs text-green-600 mt-1">↑ 22.1% from last month</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">4:32</div>
                  <div className="text-sm text-gray-600">Avg. Session Duration</div>
                  <div className="text-xs text-green-600 mt-1">↑ 8.7% from last month</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">3.8%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                  <div className="text-xs text-green-600 mt-1">↑ 12.4% from last month</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>Traffic Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <div className="text-gray-600">Interactive Chart Visualization</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span>Device Breakdown</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-gray-600" />
                        <span>Desktop</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-3/5"></div>
                        </div>
                        <span className="text-sm font-medium">58%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <span>Mobile</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-1/3"></div>
                        </div>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Monitor className="w-5 h-5 text-gray-600" />
                        <span>Tablet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full w-1/12"></div>
                        </div>
                        <span className="text-sm font-medium">7%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Data-Driven Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how analytics insights transformed these businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=50&h=50&fit=crop&crop=face" 
                    alt="Customer" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">James Rodriguez</div>
                    <div className="text-gray-600 text-sm">SaaS Founder</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "Analytics helped us identify our best-performing features. We increased user engagement by 180% by optimizing based on the data insights."
                </blockquote>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">180%</div>
                      <div className="text-sm text-gray-600">Engagement Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$50K</div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=50&h=50&fit=crop&crop=face" 
                    alt="Customer" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Lisa Thompson</div>
                    <div className="text-gray-600 text-sm">E-commerce Owner</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">
                  "The heatmap analysis revealed exactly where customers were dropping off. We redesigned those pages and conversions doubled overnight."
                </blockquote>
                <div className="bg-white rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">2x</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">$125K</div>
                      <div className="text-sm text-gray-600">Annual Revenue</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Making Data-Driven Decisions
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the insights you need to grow your business with confidence
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link href="/templates?category=analytics">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
            </Link>
            
            <Link href="/design-studio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            </Link>
          </div>

          <div className="text-sm opacity-80">
            Start tracking today • Real-time insights • No setup required
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Power Your Growth Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use analytics insights to optimize all aspects of your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/ecommerce" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">eCommerce Optimization</h3>
                  <p className="text-gray-600 mb-6">
                    Use conversion insights to optimize your online store and increase sales.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full">
                    Optimize Store
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/marketing" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Campaigns</h3>
                  <p className="text-gray-600 mb-6">
                    Create data-driven marketing campaigns that deliver measurable results.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white rounded-full">
                    Launch Campaigns
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/templates" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-violet-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Website Optimization</h3>
                  <p className="text-gray-600 mb-6">
                    Build high-converting websites based on user behavior insights.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-full">
                    Optimize Website
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full text-lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}