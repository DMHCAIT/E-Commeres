'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
  Shield,
  Settings,
  Briefcase,
  UserCheck,
  Target,
  Zap,
  Brain,
  BookOpen,
  Smartphone,
  Globe,
  CloudLightning,
  Lock
} from 'lucide-react';

export default function HRSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              <span>HR Solutions & Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Complete HR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-normal">
                Management Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Streamline your entire HR operations with our comprehensive suite of solutions. 
              From recruitment to retirement, manage your workforce with intelligent automation and data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get HR Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 text-blue-600 hover:bg-blue-50 px-12 py-4 text-lg font-medium rounded-full"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              End-to-End HR Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR management solutions designed to optimize every aspect of your human resources operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Talent Acquisition */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Talent Acquisition</h3>
                <p className="text-gray-600 mb-6">
                  Streamline your recruitment process from job posting to onboarding with AI-powered tools.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered candidate matching
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated interview scheduling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Digital onboarding workflows
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Performance Management */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Management</h3>
                <p className="text-gray-600 mb-6">
                  Drive employee performance with continuous feedback, goal tracking, and development plans.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    360-degree feedback system
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Goal setting & OKR tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Employee Development */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Employee Development</h3>
                <p className="text-gray-600 mb-6">
                  Foster growth with personalized learning paths, skill assessments, and career planning.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Skills gap analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Learning path recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Career progression planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compensation & Benefits */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compensation & Benefits</h3>
                <p className="text-gray-600 mb-6">
                  Manage competitive compensation packages and comprehensive benefits administration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Market salary benchmarking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Benefits enrollment automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Equity & bonus management
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* HR Analytics */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">HR Analytics & Insights</h3>
                <p className="text-gray-600 mb-6">
                  Make data-driven HR decisions with advanced analytics and predictive insights.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Workforce analytics dashboard
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive turnover modeling
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    DEI metrics & reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Compliance & Risk */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="p-8">
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance & Risk Management</h3>
                <p className="text-gray-600 mb-6">
                  Ensure regulatory compliance and mitigate HR risks with automated monitoring.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Regulatory compliance tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Policy management system
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Risk assessment tools
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Industry-Specific HR Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored HR solutions designed for the unique challenges and requirements of different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CloudLightning className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-sm">Fast-paced hiring, remote work management, and technical skill assessment</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Finance & Banking</h3>
              <p className="text-gray-600 text-sm">Regulatory compliance, risk management, and specialized certifications</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Credential management, shift scheduling, and patient safety protocols</p>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600 text-sm">Safety training, union management, and operational workforce planning</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful HR solution deployment with minimal disruption to your operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment & Planning</h3>
              <p className="text-gray-600">
                Analyze current HR processes and design a customized solution roadmap aligned with your business goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuration & Setup</h3>
              <p className="text-gray-600">
                Configure the HR solution to match your organizational structure, policies, and workflow requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training & Migration</h3>
              <p className="text-gray-600">
                Comprehensive team training and seamless data migration from existing systems with zero data loss.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Go-Live & Support</h3>
              <p className="text-gray-600">
                Launch your new HR system with dedicated support and ongoing optimization to ensure maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Calculate Your HR ROI
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              See how much you can save and gain with our HR solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">65%</div>
              <div className="text-blue-100 text-lg">Reduction in HR Admin Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100 text-lg">Faster Hiring Process</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-blue-100 text-lg">Improvement in Employee Engagement</div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get ROI Assessment
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Transform Your HR Operations Today
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of organizations that have revolutionized their HR processes with ZAYA solutions
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100 px-12 py-4 text-lg font-medium rounded-full"
            >
              Contact Sales
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            Free consultation • Custom implementation • Enterprise support
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Complete Workforce Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrate HR solutions with other ZAYA platforms for comprehensive workforce management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/hr-software" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Core HR Software</h3>
                  <p className="text-gray-600 mb-6">
                    Essential HR management tools for daily operations and employee lifecycle management.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full">
                    Explore HR Software
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/learning-platform" className="group">
              <Card className="bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Platform</h3>
                  <p className="text-gray-600 mb-6">
                    Develop your workforce with comprehensive training and development programs.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full">
                    View Learning Solutions
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
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Workforce Analytics</h3>
                  <p className="text-gray-600 mb-6">
                    Make data-driven decisions with advanced workforce analytics and predictive insights.
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}