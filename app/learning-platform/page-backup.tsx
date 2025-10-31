'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen,
  Play,
  Award,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Video,
  FileText,
  Target,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Settings,
  TrendingUp,
  Calendar,
  Brain,
  Briefcase,
  Layers,
  Monitor,
  CloudLightning
} from 'lucide-react';

export default function LearningPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Learning Platform Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Build & Deliver
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-normal">
                Training Programs
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete learning platform solutions for enterprises, educational institutions, and training providers. 
              Scale your learning initiatives with our comprehensive suite of tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Your Platform
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-12 py-4 text-lg font-medium rounded-full"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Platform Preview Dashboard */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Platform Overview</h3>
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">150+</div>
                    <div className="text-sm text-gray-600">Learning Paths</div>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">25K+</div>
                    <div className="text-sm text-gray-600">Active Learners</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-600">Completion Rate</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">4.9★</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Leadership Development Program</div>
                        <div className="text-sm text-gray-500">12 modules • 450 enrolled</div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">95% complete</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <Monitor className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Digital Skills Certification</div>
                        <div className="text-sm text-gray-500">8 modules • 780 enrolled</div>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Comprehensive Learning Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small teams to enterprise-wide deployments, we have the right learning platform solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enterprise Solution */}
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="bg-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Enterprise Platform</h3>
                  <p className="text-blue-100 mb-6">
                    Complete learning ecosystem for large organizations with advanced features and integrations.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span className="text-sm">Unlimited courses & learners</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span className="text-sm">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span className="text-sm">SSO & API integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span className="text-sm">Custom branding & white-label</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    <span className="text-sm">24/7 premium support</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-full">
                  Get Enterprise Demo
                </Button>
              </CardContent>
            </Card>

            {/* Educational Institution */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-indigo-200 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Education Platform</h3>
                  <p className="text-gray-600 mb-6">
                    Designed for schools, universities, and educational institutions with student-focused features.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Student information system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Grade book & assessments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Parent/guardian portals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Virtual classroom tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Educational analytics</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-full">
                  Explore Education
                </Button>
              </CardContent>
            </Card>

            {/* Training Provider */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-2 border-orange-200 transform hover:-translate-y-2">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Platform</h3>
                  <p className="text-gray-600 mb-6">
                    Perfect for training companies and consultants who create and sell professional courses.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Course marketplace features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Payment & subscription management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Instructor management tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Marketing & promotional tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">Revenue analytics</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 rounded-full">
                  Start Training Business
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Platform Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features that make learning effective, engaging, and scalable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-tenant Architecture</h3>
              <p className="text-gray-600 text-sm">Separate organizations with dedicated spaces and branding</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-600 text-sm">Scalable, secure, and globally distributed platform</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">API-First Design</h3>
              <p className="text-gray-600 text-sm">Integrate with existing systems and build custom workflows</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">SOC 2, GDPR compliant with advanced security features</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations worldwide trust ZAYA to deliver exceptional learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">TechCorp Global</h3>
                  <p className="text-sm text-gray-600">Fortune 500 Technology Company</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Reduced training costs by 60% while increasing completion rates to 95%. The platform scales beautifully across our global workforce."
              </p>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>25,000+ employees</span>
                <span>•</span>
                <span>40+ countries</span>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Metropolitan University</h3>
                  <p className="text-sm text-gray-600">Leading Educational Institution</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Transformed our distance learning capabilities. Student engagement increased by 40% and administrative workload decreased significantly."
              </p>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>50,000+ students</span>
                <span>•</span>
                <span>500+ courses</span>
              </div>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">SkillMaster Academy</h3>
                  <p className="text-sm text-gray-600">Professional Training Provider</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                "Grew from 1,000 to 50,000 learners in 18 months. The platform's scalability and monetization features were game-changing."
              </p>
              <div className="flex space-x-4 text-sm text-gray-600">
                <span>500% growth</span>
                <span>•</span>
                <span>200+ courses</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Build Your Learning Platform?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join thousands of organizations using ZAYA to create impactful learning experiences. 
            Get started today with our comprehensive platform solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Your Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-12 py-4 text-lg font-medium rounded-full"
            >
              Schedule Demo
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="text-sm text-blue-200">
            Free consultation • Custom implementation • Enterprise support
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Platform Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate your learning platform with other ZAYA solutions for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/lms" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">LMS Core Features</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Essential learning management system features for course delivery.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full">
                    Explore LMS
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/hr-software" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">HR Integration</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect learning data with HR systems for workforce development.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full">
                    View HR Tools
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/analytics" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Deep insights into learning effectiveness and ROI measurement.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full">
                    Explore Analytics
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