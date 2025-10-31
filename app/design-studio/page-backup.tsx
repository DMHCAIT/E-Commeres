'use client';

import React, { useState } from 'react';
import { AdvancedDesignStudio } from '@/components/design/AdvancedDesignStudio';
import { ThemeCustomizations } from '@/lib/theme-manager';
import { WebsiteTemplate } from '@/lib/template-utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Layout, 
  Sparkles, 
  Code, 
  Eye, 
  Download,
  Share2,
  Settings 
} from 'lucide-react';

export default function DesignStudioPage() {
  const [appliedTheme, setAppliedTheme] = useState<ThemeCustomizations | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleThemeApply = (theme: ThemeCustomizations) => {
    setAppliedTheme(theme);
    console.log('Theme applied:', theme);
  };

  const generatePreviewCSS = () => {
    if (!appliedTheme) return '';
    
    const { colorScheme, typography, spacing, borderRadius } = appliedTheme;
    
    return `
      .preview-container {
        font-family: ${typography.primaryFont}, system-ui, sans-serif;
        font-size: ${typography.baseSize}px;
        line-height: ${typography.lineHeight};
        color: ${colorScheme.text};
        background-color: ${colorScheme.background};
        padding: ${spacing.sectionPadding};
        border-radius: ${borderRadius.large};
      }
      
      .preview-header {
        background-color: ${colorScheme.primary};
        color: white;
        padding: 2rem;
        border-radius: ${borderRadius.medium};
        margin-bottom: ${spacing.elementSpacing};
      }
      
      .preview-card {
        background-color: ${colorScheme.surface};
        border: 1px solid ${colorScheme.textSecondary}20;
        border-radius: ${borderRadius.medium};
        padding: 1.5rem;
        margin-bottom: 1rem;
      }
      
      .preview-button {
        background-color: ${colorScheme.accent};
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: ${borderRadius.small};
        font-weight: ${typography.fontWeights.medium};
        cursor: pointer;
      }
      
      .preview-secondary-button {
        background-color: ${colorScheme.secondary};
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: ${borderRadius.small};
        font-weight: ${typography.fontWeights.medium};
        cursor: pointer;
        margin-left: 1rem;
      }
    `;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Website Builder - Design Studio
                </h1>
                <p className="text-gray-600">
                  Professional theme customization and template marketplace
                </p>
              </div>
            </div>
            
            {appliedTheme && (
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="flex items-center">
                  <Palette className="w-4 h-4 mr-1" />
                  {appliedTheme.name}
                </Badge>
                
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? 'Hide' : 'Show'} Preview
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Feature Overview */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Layout className="w-5 h-5 mr-2 text-blue-600" />
                  Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  13+ categories including eCommerce, Portfolio, Blog, and Corporate templates
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-green-600" />
                  Color Schemes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered color suggestions with 20+ harmony algorithms and accessibility analysis
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-600" />
                  Customization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Typography, spacing, animations, and responsive design controls
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Code className="w-5 h-5 mr-2 text-orange-600" />
                  Export
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate CSS, save themes, and export complete customizations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Applied Theme Preview */}
        {appliedTheme && showPreview && (
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Live Theme Preview
                </CardTitle>
                <CardDescription>
                  See how your customized theme looks in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <style dangerouslySetInnerHTML={{ __html: generatePreviewCSS() }} />
                
                <div className="preview-container border rounded-lg">
                  <div className="preview-header">
                    <h2 style={{ 
                      fontSize: `${appliedTheme.typography.baseSize * 1.5}px`,
                      fontWeight: appliedTheme.typography.fontWeights.bold,
                      margin: 0
                    }}>
                      {appliedTheme.template.name}
                    </h2>
                    <p style={{ 
                      fontSize: `${appliedTheme.typography.baseSize * 0.9}px`,
                      opacity: 0.9,
                      margin: '0.5rem 0 0 0'
                    }}>
                      Powered by {appliedTheme.colorScheme.name} color scheme
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="preview-card">
                      <h3 style={{ 
                        fontSize: `${appliedTheme.typography.baseSize * 1.25}px`,
                        fontWeight: appliedTheme.typography.fontWeights.bold,
                        margin: '0 0 1rem 0',
                        color: appliedTheme.colorScheme.text
                      }}>
                        Sample Content
                      </h3>
                      <p style={{ 
                        margin: '0 0 1rem 0',
                        color: appliedTheme.colorScheme.textSecondary
                      }}>
                        This is how your content will look with the selected theme. 
                        Typography, colors, and spacing are all customized according to your preferences.
                      </p>
                      <button className="preview-button">Primary Action</button>
                      <button className="preview-secondary-button">Secondary</button>
                    </div>
                    
                    <div className="preview-card">
                      <h3 style={{ 
                        fontSize: `${appliedTheme.typography.baseSize * 1.25}px`,
                        fontWeight: appliedTheme.typography.fontWeights.bold,
                        margin: '0 0 1rem 0',
                        color: appliedTheme.colorScheme.text
                      }}>
                        Color Palette
                      </h3>
                      <div className="flex space-x-3 mb-4">
                        {[
                          { name: 'Primary', color: appliedTheme.colorScheme.primary },
                          { name: 'Secondary', color: appliedTheme.colorScheme.secondary },
                          { name: 'Accent', color: appliedTheme.colorScheme.accent },
                          { name: 'Success', color: appliedTheme.colorScheme.success },
                        ].map((item, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-12 h-12 rounded-lg border mb-2"
                              style={{ backgroundColor: item.color }}
                            />
                            <p style={{ 
                              fontSize: `${appliedTheme.typography.baseSize * 0.75}px`,
                              color: appliedTheme.colorScheme.textSecondary,
                              margin: 0
                            }}>
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm">
                        <span style={{ color: appliedTheme.colorScheme.textSecondary }}>
                          Font: {appliedTheme.typography.primaryFont}
                        </span>
                        <span style={{ color: appliedTheme.colorScheme.textSecondary }}>
                          Size: {appliedTheme.typography.baseSize}px
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Design Studio */}
        <AdvancedDesignStudio onThemeApply={handleThemeApply} />

        {/* Development Info */}
        <div className="mt-12 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Implementation Details
              </CardTitle>
              <CardDescription>
                Technical overview of the advanced design system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Core Features Implemented</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Color Scheme Generation with Chroma.js</li>
                    <li>✅ AI-Powered Color Suggestions</li>
                    <li>✅ Template Marketplace with 13+ Categories</li>
                    <li>✅ Advanced Filtering & Search</li>
                    <li>✅ Typography Customization</li>
                    <li>✅ Responsive Design Controls</li>
                    <li>✅ Theme Export/Import System</li>
                    <li>✅ Real-time Preview</li>
                    <li>✅ CSS Variable Generation</li>
                    <li>✅ Local Storage Persistence</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technology Stack</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Framework:</strong> Next.js 14 with TypeScript</li>
                    <li><strong>UI Components:</strong> Shadcn/ui + Radix UI</li>
                    <li><strong>Color Management:</strong> Chroma.js, Colord, React-colorful</li>
                    <li><strong>State Management:</strong> React Hooks + Local Storage</li>
                    <li><strong>Styling:</strong> Tailwind CSS + CSS Variables</li>
                    <li><strong>Icons:</strong> Lucide React</li>
                    <li><strong>Font Loading:</strong> Google Fonts API</li>
                    <li><strong>Export Format:</strong> JSON + CSS</li>
                  </ul>
                </div>
              </div>
              
              {appliedTheme && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Current Theme Configuration</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Template:</span>
                      <p className="font-medium">{appliedTheme.template.name}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Color Scheme:</span>
                      <p className="font-medium">{appliedTheme.colorScheme.name}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Font:</span>
                      <p className="font-medium">{appliedTheme.typography.primaryFont}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Base Size:</span>
                      <p className="font-medium">{appliedTheme.typography.baseSize}px</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}