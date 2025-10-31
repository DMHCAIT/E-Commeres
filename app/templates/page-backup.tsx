'use client';

import React, { useState, useEffect } from 'react';
import { TemplateMarketplace } from '@/components/templates/EnhancedTemplateMarketplace';
import { WebsiteTemplate, SAMPLE_TEMPLATES } from '@/lib/template-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Palette, 
  Layout, 
  Zap,
  Star,
  Crown,
  Globe
} from 'lucide-react';

export default function TemplateShowcasePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | null>(null);

  const handleTemplateSelect = (template: WebsiteTemplate) => {
    setSelectedTemplate(template);
    console.log('Selected template:', template);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Professional Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our collection of {SAMPLE_TEMPLATES.length}+ professionally designed templates. 
            Each template is fully customizable with advanced theming capabilities.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{SAMPLE_TEMPLATES.length}+</div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">13+</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Responsive</div>
            </div>
          </div>
        </div>

        {/* Selected Template Display */}
        {selectedTemplate && (
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Layout className="w-6 h-6 mr-3 text-blue-600" />
                  Selected: {selectedTemplate.name}
                </span>
                <div className="flex items-center space-x-2">
                  {selectedTemplate.isPremium && (
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                  <Badge variant="secondary">{selectedTemplate.category}</Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4">{selectedTemplate.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTemplate.features.map(feature => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature.replace('-', ' ')}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Rating & Popularity</h4>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{selectedTemplate.rating}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {selectedTemplate.popularity} downloads
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Scheme</h4>
                  <div className="flex items-center space-x-3 mb-4">
                    {[
                      { color: selectedTemplate.colorScheme.primary, label: 'Primary' },
                      { color: selectedTemplate.colorScheme.secondary, label: 'Secondary' },
                      { color: selectedTemplate.colorScheme.accent, label: 'Accent' }
                    ].map(({ color, label }) => (
                      <div key={label} className="flex items-center space-x-2">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: color }}
                        />
                        <div>
                          <div className="text-xs text-gray-500">{label}</div>
                          <div className="text-xs font-mono">{color}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Zap className="w-4 h-4 mr-2" />
                      Customize This Template
                    </Button>
                    <Button variant="outline">
                      <Globe className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Template Marketplace */}
        <Card className="bg-white/70 backdrop-blur-sm">
          <CardContent className="p-6">
            <TemplateMarketplace
              onTemplateSelect={handleTemplateSelect}
              selectedTemplate={selectedTemplate || undefined}
            />
          </CardContent>
        </Card>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Theming</h3>
              <p className="text-gray-600">
                Customize colors, fonts, spacing, and more with our professional theming system.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layout className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                All templates are mobile-first and look perfect on any device or screen size.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Setup</h3>
              <p className="text-gray-600">
                Get started instantly with our optimized templates and customization tools.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation to Other Services */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Explore More ZAYA Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">eCommerce Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Build powerful online stores with integrated payment processing
                </p>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
                  onClick={() => window.location.href = '/ecommerce'}
                >
                  Explore eCommerce
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Marketing Tools</h3>
                <p className="text-gray-600 mb-4">
                  Grow your audience with email marketing, SEO, and social tools
                </p>
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
                  onClick={() => window.location.href = '/marketing'}
                >
                  Explore Marketing
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                <p className="text-gray-600 mb-4">
                  Track performance and optimize your website with detailed analytics
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                  onClick={() => window.location.href = '/analytics'}
                >
                  Explore Analytics
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full text-lg"
              onClick={() => window.location.href = '/'}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}