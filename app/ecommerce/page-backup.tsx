'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Globe,
  Shield,
  Truck,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  Smartphone,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export default function ECommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4" />
                <span>eCommerce Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build Your
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Online Store</span>
                <br />Start Selling Today
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Complete eCommerce solution with secure payments, inventory management, 
                and powerful analytics. Everything you need to succeed online.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link href="/templates?category=ecommerce">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Start Your Store
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link href="/design-studio">
                  <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2">
                    <Settings className="w-5 h-5 mr-2" />
                    Customize Design
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure payments included</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Mobile-optimized checkout</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Your Store Dashboard</h3>
                    <Badge className="bg-green-100 text-green-700">Live</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">$12.5K</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-gray-900">247</div>
                      <div className="text-sm text-gray-500">Orders</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
                      <Package className="w-5 h-5 text-green-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Product Management</div>
                        <div className="bg-green-200 h-2 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Payment Processing</div>
                        <div className="bg-blue-200 h-2 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 mb-2">Real Store Analytics</div>
                  <div className="text-sm text-gray-500">Track sales, inventory & customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Sell Online
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional eCommerce tools designed to help you succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Payment Processing */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Secure Payments</CardTitle>
                <CardDescription className="text-base">
                  Accept payments worldwide with industry-leading security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Credit & Debit Cards</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>PayPal & Digital Wallets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SSL Encryption</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Setup Payments
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Inventory Management */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Inventory Control</CardTitle>
                <CardDescription className="text-base">
                  Manage products, track stock, and automate reordering
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time Stock Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Low Stock Alerts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Product Variants</span>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Manage Inventory
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Analytics & Reports */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Sales Analytics</CardTitle>
                <CardDescription className="text-base">
                  Detailed reports and insights to grow your business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Revenue Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customer Insights</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Performance Metrics</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Analytics
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Shipping Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Connect with major carriers for real-time shipping rates</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Mobile Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Perfect shopping experience on all devices</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Customer Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Track customer orders, preferences, and history</p>
              </CardContent>
            </Card>

            <Card className="bg-white border hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Fraud Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Advanced security to protect your business</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses grow with our eCommerce platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Store Owner" 
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "Increased sales by 400% in the first 6 months. The platform is incredibly easy to use and the support is outstanding."
                </blockquote>
                <div className="font-semibold text-gray-900">Alex Thompson</div>
                <div className="text-gray-500">Fashion Boutique Owner</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                    alt="Store Owner" 
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "The mobile optimization and payment integration made all the difference. Our conversion rate doubled overnight."
                </blockquote>
                <div className="font-semibold text-gray-900">Sarah Kim</div>
                <div className="text-gray-500">Electronics Store</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                    alt="Store Owner" 
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "From zero to $50K in monthly revenue in 8 months. The analytics helped us understand our customers better."
                </blockquote>
                <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                <div className="text-gray-500">Home Goods Store</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-2">Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Up to 100 products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unlimited orders</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-2">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Up to 1,000 products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Abandoned cart recovery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <CardDescription className="mt-2">For large-scale operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Unlimited products</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>White-label options</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Selling?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful online stores powered by our platform
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <Link href="/templates?category=ecommerce">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Create Your Store
              </Button>
            </Link>
            
            <Link href="/design-studio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Zap className="w-5 h-5 mr-2" />
                See Demo
              </Button>
            </Link>
          </div>

          <div className="text-sm opacity-80">
            14-day free trial • No setup fees • Cancel anytime
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Grow Your Business Further
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine eCommerce with other ZAYA solutions for maximum growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/marketing" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Marketing Tools</h3>
                  <p className="text-gray-600 mb-6">
                    Drive traffic and increase sales with email marketing, SEO tools, and social media integration.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-full">
                    Explore Marketing
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
                    Track sales performance, customer behavior, and optimize your store for better conversions.
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
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Website Builder</h3>
                  <p className="text-gray-600 mb-6">
                    Create beautiful landing pages and content to complement your online store.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
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