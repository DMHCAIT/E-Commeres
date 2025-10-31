'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Download, 
  Eye, 
  Heart, 
  Star, 
  ShoppingCart, 
  User, 
  Search,
  Menu,
  Play,
  Truck,
  Shield,
  RefreshCw
} from 'lucide-react';

interface TemplatePreviewProps {
  templateId: string;
  templateName: string;
  category: string;
}

export default function EcommercePreview() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Preview Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/templates">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Templates
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">E-commerce Pro Template</h1>
                <p className="text-sm text-gray-600">Professional online store template</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </motion.button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Use This Template
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Mock Browser Header */}
          <div className="bg-gray-100 px-4 py-3 border-b flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="bg-white px-4 py-1 rounded-md text-sm text-gray-600 ml-4">
                ecommerce-pro-demo.com
              </div>
            </div>
            <div className="text-xs text-gray-500">Live Preview</div>
          </div>

          {/* E-commerce Template Content */}
          <div className="bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div className="text-2xl font-bold text-purple-600">ShopPro</div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
                      <a href="#" className="text-gray-700 hover:text-purple-600">Products</a>
                      <a href="#" className="text-gray-700 hover:text-purple-600">Categories</a>
                      <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
                      <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
                    </nav>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 text-gray-600" />
                    <User className="w-5 h-5 text-gray-600" />
                    <div className="relative">
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                      <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h1 className="text-5xl font-bold mb-6">
                      Discover Amazing Products
                    </h1>
                    <p className="text-xl mb-8 text-purple-100">
                      Shop the latest trends with our curated collection of premium products. 
                      Fast shipping, easy returns, and unbeatable prices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                        Shop Now
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="bg-white/20 rounded-lg p-4 text-center">
                            <div className="w-12 h-12 bg-white/30 rounded-lg mx-auto mb-3"></div>
                            <div className="h-2 bg-white/30 rounded mb-2"></div>
                            <div className="h-2 bg-white/30 rounded w-2/3 mx-auto"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We provide exceptional service and quality products with these amazing benefits
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Truck, title: "Free Shipping", desc: "Free delivery on orders over $50" },
                    { icon: Shield, title: "Secure Payment", desc: "100% secure payment processing" },
                    { icon: RefreshCw, title: "Easy Returns", desc: "30-day return policy" }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Product Grid */}
            <section className="py-16">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                  <p className="text-xl text-gray-600">Discover our best-selling items</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
                    <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-square bg-gray-200 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-indigo-200"></div>
                        <div className="absolute top-3 right-3">
                          <Heart className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Product Name {product}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-purple-600">${(product * 19.99).toFixed(2)}</div>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-2xl font-bold mb-4">ShopPro</div>
                    <p className="text-gray-400">Your trusted online shopping destination</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white">Home</a></li>
                      <li><a href="#" className="hover:text-white">Products</a></li>
                      <li><a href="#" className="hover:text-white">About Us</a></li>
                      <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white">Electronics</a></li>
                      <li><a href="#" className="hover:text-white">Fashion</a></li>
                      <li><a href="#" className="hover:text-white">Home & Garden</a></li>
                      <li><a href="#" className="hover:text-white">Sports</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-white">Help Center</a></li>
                      <li><a href="#" className="hover:text-white">Shipping Info</a></li>
                      <li><a href="#" className="hover:text-white">Returns</a></li>
                      <li><a href="#" className="hover:text-white">Size Guide</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; 2025 ShopPro. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Template Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">About This Template</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Responsive design</li>
                <li>• Shopping cart functionality</li>
                <li>• Product catalog</li>
                <li>• Payment integration</li>
                <li>• User accounts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Next.js 14</li>
                <li>• React 18</li>
                <li>• Tailwind CSS</li>
                <li>• TypeScript</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Includes</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15+ page templates</li>
                <li>• Component library</li>
                <li>• Documentation</li>
                <li>• Design files</li>
                <li>• Free updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}