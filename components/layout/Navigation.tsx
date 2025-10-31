'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Sparkles,
  Layout,
  Palette,
  Wand2,
  Users,
  Crown,
  Play,
  ShoppingCart,
  Calendar,
  Utensils,
  CreditCard,
  BarChart3,
  Mail,
  Search,
  Smartphone,
  Building,
  Code,
  Briefcase,
  BookOpen
} from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">ZAYA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('product')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                <span>Product</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              
              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-3 w-[1200px] bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8 z-50">
                  <div className="grid grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">CREATION</h3>
                      <div className="space-y-2">
                        <Link href="/design-studio" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Palette className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">Website design</div>
                            <div className="text-sm text-gray-500">Create your site with intuitive design features</div>
                          </div>
                        </Link>
                        <Link href="/templates" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Layout className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="font-medium text-gray-900">Website templates</div>
                            <div className="text-sm text-gray-500">Choose from 900+ website templates</div>
                          </div>
                        </Link>
                        <Link href="/open-pro-template" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Crown className="w-5 h-5 text-indigo-600" />
                          <div>
                            <div className="font-medium text-gray-900">Open Pro Template</div>
                            <div className="text-sm text-gray-500">Premium animated template with AI features</div>
                          </div>
                        </Link>
                        <Link href="/ai-builder" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Wand2 className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">AI website builder</div>
                            <div className="text-sm text-gray-500">Create your site in no time with AI</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">BUSINESS</h3>
                      <div className="space-y-2">
                        <Link href="/ecommerce" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <ShoppingCart className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">eCommerce</div>
                            <div className="text-sm text-gray-500">Run & grow your eCommerce website</div>
                          </div>
                        </Link>
                        <Link href="/scheduling" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">Scheduling</div>
                            <div className="text-sm text-gray-500">Manage appointments, staff & clients</div>
                          </div>
                        </Link>
                        <Link href="/restaurant" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Utensils className="w-5 h-5 text-orange-600" />
                          <div>
                            <div className="font-medium text-gray-900">Restaurant</div>
                            <div className="text-sm text-gray-500">Manage your menus, orders, and reservations</div>
                          </div>
                        </Link>
                        <Link href="/hr-software" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">HR Software</div>
                            <div className="text-sm text-gray-500">Manage employees, payroll & recruitment</div>
                          </div>
                        </Link>
                        <Link href="/lms" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <BookOpen className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="font-medium text-gray-900">Learning Management</div>
                            <div className="text-sm text-gray-500">Create courses & manage online learning</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">AUTOMATION</h3>
                      <div className="space-y-2">
                        <Link href="/automation" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Sparkles className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="font-medium text-gray-900">AI Automation Hub</div>
                            <div className="text-sm text-gray-500">Automate your business workflows with AI</div>
                          </div>
                        </Link>
                        <Link href="/automation/builder" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Code className="w-5 h-5 text-indigo-600" />
                          <div>
                            <div className="font-medium text-gray-900">Workflow Builder</div>
                            <div className="text-sm text-gray-500">Drag-and-drop automation workflows</div>
                          </div>
                        </Link>
                        <Link href="/automation/integrations/crm" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">CRM Integrations</div>
                            <div className="text-sm text-gray-500">Connect Salesforce, HubSpot & more</div>
                          </div>
                        </Link>
                        <Link href="/automation/integrations/hrms" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Briefcase className="w-5 h-5 text-emerald-600" />
                          <div>
                            <div className="font-medium text-gray-900">HRMS Integrations</div>
                            <div className="text-sm text-gray-500">Automate HR with BambooHR, Workday & more</div>
                          </div>
                        </Link>
                        <Link href="/automation/integrations/website" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Globe className="w-5 h-5 text-cyan-600" />
                          <div>
                            <div className="font-medium text-gray-900">Website Integrations</div>
                            <div className="text-sm text-gray-500">Connect 300+ tools & services</div>
                          </div>
                        </Link>
                        <Link href="/automation/ai-suggestions" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Wand2 className="w-5 h-5 text-violet-600" />
                          <div>
                            <div className="font-medium text-gray-900">AI Workflow Suggestions</div>
                            <div className="text-sm text-gray-500">Get AI-powered automation insights</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">ESSENTIALS</h3>
                      <div className="space-y-2">
                        <Link href="/domains" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Globe className="w-5 h-5 text-indigo-600" />
                          <div>
                            <div className="font-medium text-gray-900">Domain names</div>
                            <div className="text-sm text-gray-500">Buy & register a domain for your website</div>
                          </div>
                        </Link>
                        <Link href="/hosting" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Building className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">Web hosting</div>
                            <div className="text-sm text-gray-500">Get secure & reliable website hosting</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('solutions')}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-3 w-[1000px] bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 p-8 z-50">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">MANAGEMENT</h3>
                      <div className="space-y-2">
                        <Link href="/payments" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <CreditCard className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">Payment solutions</div>
                            <div className="text-sm text-gray-500">Accept & manage payments online</div>
                          </div>
                        </Link>
                        <Link href="/crm" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-900">CRM system</div>
                            <div className="text-sm text-gray-500">Build & manage customer relationships</div>
                          </div>
                        </Link>
                        <Link href="/mobile-app" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Smartphone className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="font-medium text-gray-900">Mobile app</div>
                            <div className="text-sm text-gray-500">Run your business on the go from your mobile</div>
                          </div>
                        </Link>
                        <Link href="/hr-solutions" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Briefcase className="w-5 h-5 text-orange-600" />
                          <div>
                            <div className="font-medium text-gray-900">HR Solutions</div>
                            <div className="text-sm text-gray-500">Complete HR management & automation</div>
                          </div>
                        </Link>
                        <Link href="/learning-platform" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <BookOpen className="w-5 h-5 text-cyan-600" />
                          <div>
                            <div className="font-medium text-gray-900">Learning Platform</div>
                            <div className="text-sm text-gray-500">Build & deliver online training programs</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">GROWTH</h3>
                      <div className="space-y-2">
                        <Link href="/marketing" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Mail className="w-5 h-5 text-pink-600" />
                          <div>
                            <div className="font-medium text-gray-900">Email marketing</div>
                            <div className="text-sm text-gray-500">Create email marketing campaigns</div>
                          </div>
                        </Link>
                        <Link href="/analytics" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <BarChart3 className="w-5 h-5 text-indigo-600" />
                          <div>
                            <div className="font-medium text-gray-900">Website analytics</div>
                            <div className="text-sm text-gray-500">Get reports with actionable data & insights</div>
                          </div>
                        </Link>
                        <Link href="/seo" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Search className="w-5 h-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">SEO tools</div>
                            <div className="text-sm text-gray-500">Optimize your website for search engines</div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">WIX STUDIO</h3>
                      <div className="space-y-2">
                        <Link href="/agencies" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Building className="w-5 h-5 text-orange-600" />
                          <div>
                            <div className="font-medium text-gray-900">Agencies & freelancers</div>
                            <div className="text-sm text-gray-500">Deliver exceptional client websites at scale</div>
                          </div>
                        </Link>
                        <Link href="/developers" className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                          <Code className="w-5 h-5 text-purple-600" />
                          <div>
                            <div className="font-medium text-gray-900">Developers</div>
                            <div className="text-sm text-gray-500">Build sites & apps and offer dev services</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('resources')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-6 z-50">
                  <div className="space-y-4">
                    <Link href="/learn" className="block p-2 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">Learn</div>
                      <div className="text-sm text-gray-500">Tutorials and guides</div>
                    </Link>
                    <Link href="/blog" className="block p-2 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">Blog</div>
                      <div className="text-sm text-gray-500">Tips and insights</div>
                    </Link>
                    <Link href="/support" className="block p-2 hover:bg-gray-50 rounded-lg">
                      <div className="font-medium text-gray-900">Support</div>
                      <div className="text-sm text-gray-500">Get help and support</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>

            <Link href="/wixel" className="text-gray-700 hover:text-blue-600 font-medium">
              Wixel
            </Link>

            <Link href="/studio" className="text-gray-700 hover:text-blue-600 font-medium">
              Wix Studio
            </Link>

            <Link href="/enterprise" className="text-gray-700 hover:text-blue-600 font-medium">
              Enterprise
            </Link>
          </div>

                    {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium px-6">
                Log In
              </Button>
            </Link>
            
            <Link href="/auth/signup">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4">
            <div className="space-y-4">
              <Link href="/templates" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Website Templates
              </Link>
              <Link href="/design-studio" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Design Studio
              </Link>
              <Link href="/ecommerce" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                eCommerce
              </Link>
              <Link href="/automation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                AI Automation
              </Link>
              <Link href="/automation/ai-suggestions" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                AI Workflow Suggestions
              </Link>
              <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 px-4">
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}