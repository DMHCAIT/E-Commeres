'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Palette, 
  Layout, 
  Zap,
  ArrowRight,
  Star,
  Globe,
  Wand2,
  ShoppingCart,
  Camera,
  BookOpen,
  Heart,
  Briefcase,
  Utensils,
  Play,
  CheckCircle,
  Megaphone,
  BarChart3,
  Shield,
  Headphones,
  MousePointer,
  Layers,
  Rocket,
  Eye,
  Code,
  Award
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
              {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              Create a website
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-normal">
                without limits
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Start with AI, build your brand and grow your business online. Create a website, 
              online store or blog with ZAYA — for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-16 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started for Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-gray-200 text-gray-700 hover:bg-gray-50 px-16 py-4 text-lg font-medium rounded-full hover:border-gray-300 transition-all duration-200"
              >
                View Templates
              </Button>
            </div>
          </div>
        </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-6">
              Whatever you do,
              <br />
              do it with ZAYA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose what you need and get a website with all the features to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Website Builder */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layout className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Create a website</h3>
                <p className="text-gray-600 mb-6">
                  Design and customize your site with flexible layouts, professional features, and amazing templates.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>900+ designer-made templates</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Advanced design features</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Mobile optimized</span>
                  </div>
                </div>
                <Link href="/templates">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Website Builder */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Wand2 className="w-16 h-16 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600 text-white">AI Powered</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Create with AI</h3>
                <p className="text-gray-600 mb-6">
                  Get a personalized website with AI. Answer a few questions and get a tailored website in minutes.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Personalized for your business</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>AI-generated content & images</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Built-in business tools</span>
                  </div>
                </div>
                <Link href="/ai-builder">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full">
                    Create with AI
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* ZAYA Studio */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">Advanced</Badge>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">ZAYA Studio</h3>
                <p className="text-gray-600 mb-6">
                  For agencies and enterprises. The platform to build exceptional websites that meet the highest standards.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Advanced developer tools</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom code capabilities</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Team collaboration</span>
                  </div>
                </div>
                <Link href="/studio">
                  <Button className="w-full bg-gradient-to-r from-slate-900 to-indigo-900 hover:from-slate-800 hover:to-indigo-800 text-white py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                    Explore Studio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">230M+</div>
              <div className="text-gray-500 font-light">Users worldwide</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">900+</div>
              <div className="text-gray-500 font-light">Templates</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">190</div>
              <div className="text-gray-500 font-light">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-light text-gray-900 mb-3">24/7</div>
              <div className="text-gray-500 font-light">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Grow your business
              <br />
              with the right tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              From online stores to marketing campaigns, get everything you need to scale
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {/* Website Creation */}
            <Card className="bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:border-blue-200">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Website Creation</CardTitle>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  Professional websites made easy with drag-and-drop builder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">500+ Professional Templates</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">Mobile-Responsive Design</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">SEO Optimization Tools</span>
                  </div>
                </div>
                <Link href="/templates">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                    Browse Templates
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* eCommerce */}
            <Card className="bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:border-green-200">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">eCommerce Store</CardTitle>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  Complete online store solution with payment processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">Secure Payment Gateway</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">Inventory Management</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">Analytics & Reports</span>
                  </div>
                </div>
                <Link href="/ecommerce">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                    Start Selling
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Design Studio */}
            <Card className="bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 group hover:border-purple-200">
              <CardHeader className="pb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">Design Studio</CardTitle>
                <CardDescription className="text-gray-600 font-light leading-relaxed">
                  Advanced design tools with AI-powered features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">AI Color Palette Generator</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">20+ Design Algorithms</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-light">Real-time Preview</span>
                  </div>
                </div>
                <Link href="/design-studio">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                    Launch Studio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Industry Templates */}
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Templates for Every Industry
              </h3>
              <p className="text-lg text-gray-600">
                Professional designs crafted for your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <Link href="/templates?category=business" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="font-medium text-gray-900">Business</div>
                  <div className="text-sm text-gray-500 mt-1">45 Templates</div>
                </div>
              </Link>

              <Link href="/templates?category=ecommerce" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200">
                    <ShoppingCart className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="font-medium text-gray-900">eCommerce</div>
                  <div className="text-sm text-gray-500 mt-1">38 Templates</div>
                </div>
              </Link>

              <Link href="/templates?category=portfolio" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200">
                    <Camera className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="font-medium text-gray-900">Portfolio</div>
                  <div className="text-sm text-gray-500 mt-1">29 Templates</div>
                </div>
              </Link>

              <Link href="/templates?category=restaurant" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200">
                    <Utensils className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="font-medium text-gray-900">Restaurant</div>
                  <div className="text-sm text-gray-500 mt-1">22 Templates</div>
                </div>
              </Link>

              <Link href="/templates?category=healthcare" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="font-medium text-gray-900">Healthcare</div>
                  <div className="text-sm text-gray-500 mt-1">18 Templates</div>
                </div>
              </Link>

              <Link href="/templates?category=education" className="group">
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="font-medium text-gray-900">Education</div>
                  <div className="text-sm text-gray-500 mt-1">15 Templates</div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link href="/templates">
                <Button size="lg" variant="outline" className="px-8 py-3">
                  View All Templates
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Powerful Business Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to grow your business online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Track visitor behavior and website performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Real-time visitor tracking</li>
                  <li>• Conversion analytics</li>
                  <li>• SEO performance metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Marketing Suite</CardTitle>
                <CardDescription>
                  Email campaigns, social media, and SEO tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Email marketing automation</li>
                  <li>• Social media integration</li>
                  <li>• SEO optimization tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Security & Backup</CardTitle>
                <CardDescription>
                  Enterprise-grade security and automatic backups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• SSL certificates included</li>
                  <li>• Daily automated backups</li>
                  <li>• Malware protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Expert support whenever you need it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Live chat support</li>
                  <li>• Phone & email support</li>
                  <li>• Video tutorials & guides</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MousePointer className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>No-Code Editor</CardTitle>
                <CardDescription>
                  Intuitive drag-and-drop interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Visual editing interface</li>
                  <li>• Real-time preview</li>
                  <li>• Mobile responsive design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>App Integrations</CardTitle>
                <CardDescription>
                  Connect with your favorite tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 500+ app integrations</li>
                  <li>• API access</li>
                  <li>• Custom webhooks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of creators who trust our platform to build their online presence
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link href="/templates">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Start Building Now
              </Button>
            </Link>
            
            <Link href="/design-studio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Eye className="w-5 h-5 mr-2" />
                Try Demo
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">WebBuilder</span>
              </div>
              <p className="text-gray-400 mb-6">
                Create stunning websites with our advanced no-code platform. 
                Trusted by millions worldwide.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  Next.js 14
                </Badge>
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  TypeScript
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/templates" className="hover:text-white">Website Templates</Link></li>
                <li><Link href="/design-studio" className="hover:text-white">Design Studio</Link></li>
                <li><Link href="/ecommerce" className="hover:text-white">eCommerce</Link></li>
                <li><Link href="/domains" className="hover:text-white">Domains</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/tutorials" className="hover:text-white">Tutorials</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/community" className="hover:text-white">Community</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12 text-center text-gray-400">
            <p>&copy; 2025 WebBuilder. All rights reserved. Built with Next.js and modern web technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}