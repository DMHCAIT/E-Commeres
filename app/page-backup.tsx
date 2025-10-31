'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  ArrowRight,
  Star,
  Globe,
  Wand2,
  ShoppingCart,
  Play,
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Smartphone,
  Monitor,
  Palette,
  Code,
  Zap,
  Eye,
  MousePointer,
  Settings,
  Layers,
  Target,
  Award,
  Rocket,
  Shield,
  Headphones,
  Briefcase,
  BookOpen,
  Heart,
  Utensils
} from 'lucide-react';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section - Inspired by WIX main hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-300 rounded-3xl transform rotate-12 opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-40 w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-300 rounded-2xl transform -rotate-12 opacity-25 animate-pulse"></div>
        </div>

        {/* Interactive Design Elements - Similar to WIX's floating elements */}
        <div className="absolute top-1/4 left-16 transform -translate-y-1/2">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 animate-float">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl mb-4 flex items-center justify-center">
              <div className="w-10 h-10 bg-white rounded-xl"></div>
            </div>
            <div className="text-sm text-gray-600 font-medium">Design Tool</div>
          </div>
        </div>

        <div className="absolute top-1/3 right-20 transform -translate-y-1/2">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/20 animate-float-delayed">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-sm text-gray-600 font-medium">AI Builder</div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-6 py-2 text-sm font-medium rounded-full">
              🚀 Create websites without limits
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 tracking-tight leading-tight animate-fade-in-up-delayed">
            Create a website
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 font-light">
              without limits
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up-more-delayed">
            Bring your ideas to life on the leading website builder with ZAYA's powerful platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up-most-delayed">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-16 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-gray-500">Start for free. No credit card required.</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Section - Inspired by WIX's demo sections */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <Badge className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                  ✨ AI-Powered Design
                </Badge>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                  Create your site in minutes
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    with our AI website builder
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Describe what you want and get a unique, business-ready website tailored just for you.
                </p>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Interactive Demo Placeholder */}
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                    <Wand2 className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="text-lg font-medium text-gray-700">AI Website Builder</div>
                  <div className="text-sm text-gray-500">Demo placeholder - Upload your content here</div>
                </div>
                
                {/* Floating animation elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-lg shadow-md animate-float"></div>
                <div className="absolute top-12 right-8 w-6 h-6 bg-purple-200 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-blue-300 rounded-sm animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Showcase - Inspired by WIX's template section */}
      <section className="py-24 bg-gradient-to-br from-teal-900 to-blue-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Or choose a professionally
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                designed template
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Pick from 900+ free website templates, fully customizable and tailored to any business type.
            </p>
            <Button 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 px-8 py-3 rounded-full font-medium"
            >
              Get Started
            </Button>
          </div>

          {/* Template Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: ShoppingCart, label: 'eCommerce' },
              { icon: Users, label: 'Portfolio' },
              { icon: Briefcase, label: 'Business' },
              { icon: BookOpen, label: 'Blog' },
              { icon: Utensils, label: 'Restaurant' },
              { icon: Heart, label: 'Non-Profit' }
            ].map((category, index) => (
              <Link key={index} href="/templates" className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <category.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-sm font-medium text-white">{category.label}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Template Preview Placeholders */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-[4/3] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <div className="text-center">
                      <Monitor className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">Template Preview</div>
                      <div className="text-xs opacity-75">Upload your design</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Dashboard Section - Inspired by WIX's business tools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Dashboard Preview Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Payments</span>
                      <span className="text-lg font-semibold text-gray-900">$7,128.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Net volume</span>
                      <span className="text-lg font-semibold text-gray-900">$6,728.86</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Successful payments</span>
                      <span className="text-lg font-semibold text-gray-900">129</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-xs text-gray-500 mb-2">Recent Transactions</div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Payment #{item}</span>
                          <span className="text-green-600 font-medium">Successful</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Run your business
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  from one dashboard
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Payments</h3>
                    <p className="text-gray-600">Accept payments, send invoices and track it all with ease.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">CRM solution</h3>
                    <p className="text-gray-600">Manage customer relationships and grow your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom automations</h3>
                    <p className="text-gray-600">Automate workflows and save time on repetitive tasks.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-8 py-3 rounded-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Grid - Inspired by WIX's "Made on Wix" section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Made on ZAYA
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Over 15,000 sites are launched with our website builder every day. 
              Dive into our top picks to find your inspiration.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full"
            >
              Explore Sites
            </Button>
          </div>

          {/* Website Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className={`
                  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105
                  ${item % 3 === 0 ? 'lg:col-span-1 lg:row-span-2' : ''}
                  ${item === 1 ? 'bg-gradient-to-br from-orange-200 to-red-300' : ''}
                  ${item === 2 ? 'bg-gradient-to-br from-blue-200 to-indigo-300' : ''}
                  ${item === 3 ? 'bg-gradient-to-br from-emerald-200 to-teal-300' : ''}
                  ${item === 4 ? 'bg-gradient-to-br from-purple-200 to-pink-300' : ''}
                  ${item === 5 ? 'bg-gradient-to-br from-yellow-200 to-orange-300' : ''}
                  ${item === 6 ? 'bg-gradient-to-br from-cyan-200 to-blue-300' : ''}
                `}>
                  <div className={`
                    aspect-[4/3] flex items-center justify-center p-8
                    ${item % 3 === 0 ? 'lg:aspect-[4/6]' : ''}
                  `}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-medium mb-2">Website Showcase #{item}</div>
                      <div className="text-white/80 text-sm">Upload your design here</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to create your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              stunning website?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join millions of users who trust ZAYA to power their online success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-16 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-blue-200 text-sm">
              No credit card required • 14-day free trial
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Navigation Links */}
      <footer className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/templates" className="text-gray-300 hover:text-white transition-colors">Website Builder</Link></li>
                <li><Link href="/ecommerce" className="text-gray-300 hover:text-white transition-colors">eCommerce</Link></li>
                <li><Link href="/marketing" className="text-gray-300 hover:text-white transition-colors">Marketing</Link></li>
                <li><Link href="/analytics" className="text-gray-300 hover:text-white transition-colors">Analytics</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/business" className="text-gray-300 hover:text-white transition-colors">Business</Link></li>
                <li><Link href="/enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise</Link></li>
                <li><Link href="/agencies" className="text-gray-300 hover:text-white transition-colors">Agencies</Link></li>
                <li><Link href="/developers" className="text-gray-300 hover:text-white transition-colors">Developers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 ZAYA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-more-delayed {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-most-delayed {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}