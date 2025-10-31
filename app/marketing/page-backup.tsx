'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Edit
} from 'lucide-react';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                <span>Marketing Tools</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Grow Your
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Audience</span>
                <br />Drive More Sales
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Complete marketing suite with email campaigns, social media management, 
                SEO tools, and analytics to scale your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link href="/templates?category=marketing">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg">
                    Start Marketing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="/design-studio">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-pink-500" />
                  <span>AI-powered campaigns</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-pink-500" />
                  <span>Multi-channel marketing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Campaign Performance</h3>
                    <Badge className="bg-pink-100 text-pink-700">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">45.2K</div>
                      <div className="text-sm text-gray-500">Reach</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">12.8%</div>
                      <div className="text-sm text-gray-500">CTR</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-pink-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Email Campaign</div>
                        <div className="bg-pink-200 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
                      <Share2 className="w-5 h-5 text-purple-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Social Media</div>
                        <div className="bg-purple-200 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</div>
                  <div className="text-sm text-gray-500">Track performance across all channels</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Tools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Marketing Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to attract, engage, and convert customers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Email Marketing */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Email Marketing</CardTitle>
                <CardDescription className="text-base">
                  Create stunning email campaigns that convert
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
                    <span>Automated Sequences</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>A/B Testing</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Campaign
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Social Media</CardTitle>
                <CardDescription className="text-base">
                  Manage all your social channels in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-Platform Posting</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Content Calendar</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Engagement Analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Schedule Posts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* SEO & Analytics */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">SEO & Analytics</CardTitle>
                <CardDescription className="text-base">
                  Optimize for search engines and track performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Keyword Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Performance Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Competitor Analysis</span>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Boost SEO
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Ad Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Create targeted ads across Google, Facebook & more</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <MessageCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Engage visitors in real-time with chat widgets</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Event Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Promote events and manage registrations</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-lg">CRM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Sync leads and manage customer relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Templates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Marketing Templates
            </h2>
            <p className="text-xl text-gray-600">
              Pre-built campaigns ready to customize and launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-700 mb-3">Email Template</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Welcome Series</h3>
                <p className="text-gray-600 mb-4">
                  Onboard new subscribers with a 5-email welcome sequence
                </p>
                <Button variant="outline" className="w-full">
                  Use Template
                  <Edit className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Share2 className="w-12 h-12 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-700 mb-3">Social Media</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Launch</h3>
                <p className="text-gray-600 mb-4">
                  Complete social media campaign for new product launches
                </p>
                <Button variant="outline" className="w-full">
                  Use Template
                  <Edit className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-green-600 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="bg-green-100 text-green-700 mb-3">SEO Campaign</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business</h3>
                <p className="text-gray-600 mb-4">
                  Boost local search rankings and attract nearby customers
                </p>
                <Button variant="outline" className="w-full">
                  Use Template
                  <Edit className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Marketing Results That Matter
            </h2>
            <p className="text-xl text-gray-600">
              See the impact our tools have on real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">250%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150K+</div>
              <div className="text-gray-600">New Leads Generated</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">45%</div>
              <div className="text-gray-600">Email Open Rate</div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Campaign Success Rate</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b08c?w=50&h=50&fit=crop&crop=face" 
                    alt="Customer" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Emma Wilson</div>
                    <div className="text-gray-600 text-sm">Marketing Director</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "Our email campaigns now have 3x higher engagement rates. The automation tools saved us 20 hours per week."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                    alt="Customer" 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">David Chen</div>
                    <div className="text-gray-600 text-sm">Small Business Owner</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic">
                  "Went from 100 to 5,000 social media followers in 6 months. The content calendar feature is a game-changer."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start your marketing journey with powerful tools that deliver results
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link href="/templates?category=marketing">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Megaphone className="w-5 h-5 mr-2" />
                Start Marketing
              </Button>
            </Link>
            
            <Link href="/design-studio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </Link>
          </div>

          <div className="text-sm opacity-80">
            14-day free trial • All features included • No credit card required
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Your Digital Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine marketing tools with other ZAYA solutions for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/ecommerce" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">eCommerce Store</h3>
                  <p className="text-gray-600 mb-6">
                    Convert your marketing efforts into sales with a powerful online store.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full">
                    Build Store
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/analytics" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
                  <p className="text-gray-600 mb-6">
                    Measure campaign performance and optimize your marketing strategy.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full">
                    View Analytics
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/templates" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Website Builder</h3>
                  <p className="text-gray-600 mb-6">
                    Create stunning landing pages that convert visitors into customers.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full">
                    Browse Templates
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