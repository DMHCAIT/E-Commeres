'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ColorPalettePicker } from '@/components/color/ColorPalettePicker';
import { TemplateMarketplace } from '@/components/templates/TemplateMarketplace';
import { 
  ColorScheme, 
  ColorSchemeGenerator,
  DEFAULT_COLOR_SCHEMES 
} from '@/lib/color-scheme-utils';
import { 
  WebsiteTemplate, 
  TemplateManager,
  SAMPLE_TEMPLATES 
} from '@/lib/template-utils';
import { ThemeCustomizations } from '@/lib/theme-manager';
import {
  Palette,
  Layout,
  Type,
  Smartphone,
  Monitor,
  Tablet,
  Eye,
  Save,
  Download,
  RefreshCw,
  Settings,
  Wand2,
  Layers,
  Image as ImageIcon,
  Grid,
  Sliders
} from 'lucide-react';

interface ThemeCustomizerProps {
  selectedTemplate?: WebsiteTemplate;
  onTemplateChange: (template: WebsiteTemplate) => void;
  onThemeApply: (customizations: ThemeCustomizations) => void;
  className?: string;
}

interface ThemeCustomizationData {
  template: WebsiteTemplate;
  colorScheme: ColorScheme;
  typography: {
    primaryFont: string;
    secondaryFont: string;
    accentFont?: string;
    baseSize: number;
    lineHeight: number;
    fontWeights: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
  spacing: {
    scale: number;
    containerMaxWidth: string;
    sectionPadding: string;
    elementSpacing: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  animations: {
    enabled: boolean;
    duration: string;
    easing: string;
    reducedMotion: boolean;
  };
  layout: {
    headerStyle: 'fixed' | 'static' | 'sticky';
    footerStyle: 'minimal' | 'standard' | 'expanded';
    sidebarPosition?: 'left' | 'right' | 'none';
  };
  responsive: {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    scaling: {
      mobile: number;
      tablet: number;
      desktop: number;
    };
  };
}

const FONT_OPTIONS = [
  { name: 'Inter', category: 'Sans-serif', preview: 'Aa' },
  { name: 'Roboto', category: 'Sans-serif', preview: 'Aa' },
  { name: 'Open Sans', category: 'Sans-serif', preview: 'Aa' },
  { name: 'Source Sans Pro', category: 'Sans-serif', preview: 'Aa' },
  { name: 'Poppins', category: 'Sans-serif', preview: 'Aa' },
  { name: 'Playfair Display', category: 'Serif', preview: 'Aa' },
  { name: 'Merriweather', category: 'Serif', preview: 'Aa' },
  { name: 'Georgia', category: 'Serif', preview: 'Aa' },
  { name: 'Times New Roman', category: 'Serif', preview: 'Aa' },
  { name: 'JetBrains Mono', category: 'Monospace', preview: 'Aa' },
  { name: 'Fira Code', category: 'Monospace', preview: 'Aa' }
];

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  selectedTemplate,
  onTemplateChange,
  onThemeApply,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'template' | 'colors' | 'typography' | 'layout' | 'advanced'>('template');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [customizations, setCustomizations] = useState<ThemeCustomizationData>({
    template: selectedTemplate || SAMPLE_TEMPLATES[0],
    colorScheme: selectedTemplate?.colorScheme || DEFAULT_COLOR_SCHEMES[0],
    typography: {
      primaryFont: 'Inter',
      secondaryFont: 'Roboto',
      baseSize: 16,
      lineHeight: 1.6,
      fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700
      }
    },
    spacing: {
      scale: 1,
      containerMaxWidth: '1200px',
      sectionPadding: '4rem',
      elementSpacing: '2rem'
    },
    borderRadius: {
      small: '0.375rem',
      medium: '0.5rem',
      large: '0.75rem'
    },
    animations: {
      enabled: true,
      duration: '0.3s',
      easing: 'ease-out',
      reducedMotion: false
    },
    layout: {
      headerStyle: 'sticky',
      footerStyle: 'standard'
    },
    responsive: {
      breakpoints: {
        mobile: '640px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1280px'
      },
      scaling: {
        mobile: 0.875,
        tablet: 0.9375,
        desktop: 1
      }
    }
  });

  // Update customizations when template changes
  useEffect(() => {
    if (selectedTemplate) {
      setCustomizations((prev: ThemeCustomizationData) => ({
        ...prev,
        template: selectedTemplate,
        colorScheme: selectedTemplate.colorScheme
      }));
    }
  }, [selectedTemplate]);

  // Handle template selection
  const handleTemplateSelect = useCallback((template: WebsiteTemplate) => {
    const updatedCustomizations = {
      ...customizations,
      template,
      colorScheme: template.colorScheme
    };
    setCustomizations(updatedCustomizations);
    onTemplateChange(template);
  }, [customizations, onTemplateChange]);

  // Handle color scheme change
  const handleColorSchemeChange = useCallback((colorScheme: ColorScheme) => {
    const updatedCustomizations = {
      ...customizations,
      colorScheme,
      template: TemplateManager.applyColorSchemeToTemplate(customizations.template, colorScheme)
    };
    setCustomizations(updatedCustomizations);
  }, [customizations]);

  // Handle customization updates
  const updateCustomization = useCallback((
    section: keyof ThemeCustomizationData,
    updates: Partial<ThemeCustomizationData[typeof section]>
  ) => {
    setCustomizations((prev: ThemeCustomizationData) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        ...updates
      }
    }));
  }, []);

  // Apply customizations
  const applyCustomizations = useCallback(() => {
    const themeToApply: ThemeCustomizations = {
      ...customizations,
      id: `theme-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: `Custom Theme ${Date.now()}`,
      description: 'Applied from customizer',
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: {
        tags: [],
        category: customizations.template.category,
        isPublic: false,
        likes: 0,
        downloads: 0
      }
    };
    onThemeApply(themeToApply);
  }, [customizations, onThemeApply]);

  // Generate CSS variables from customizations
  const generateCSSVariables = useCallback(() => {
    const { colorScheme, typography, spacing, borderRadius } = customizations;
    
    return {
      // Colors
      '--color-primary': colorScheme.primary,
      '--color-secondary': colorScheme.secondary,
      '--color-accent': colorScheme.accent,
      '--color-background': colorScheme.background,
      '--color-surface': colorScheme.surface,
      '--color-text': colorScheme.text,
      '--color-text-secondary': colorScheme.textSecondary,
      '--color-success': colorScheme.success,
      '--color-warning': colorScheme.warning,
      '--color-error': colorScheme.error,
      '--color-info': colorScheme.info,
      
      // Typography
      '--font-primary': typography.primaryFont,
      '--font-secondary': typography.secondaryFont,
      '--font-size-base': `${typography.baseSize}px`,
      '--line-height': typography.lineHeight,
      '--font-weight-normal': typography.fontWeights.normal,
      '--font-weight-medium': typography.fontWeights.medium,
      '--font-weight-bold': typography.fontWeights.bold,
      
      // Spacing
      '--spacing-scale': spacing.scale,
      '--container-max-width': spacing.containerMaxWidth,
      '--section-padding': spacing.sectionPadding,
      '--element-spacing': spacing.elementSpacing,
      
      // Border Radius
      '--radius-small': borderRadius.small,
      '--radius-medium': borderRadius.medium,
      '--radius-large': borderRadius.large,
    };
  }, [customizations]);

  // Preview component
  const ThemePreview: React.FC = () => {
    const cssVariables = generateCSSVariables();
    
    return (
      <div 
        className="border rounded-lg overflow-hidden bg-white"
        style={cssVariables as React.CSSProperties}
      >
        <div className="aspect-video bg-gray-100 relative">
          {/* Preview content based on selected template */}
          <div className="absolute inset-0 p-4">
            <div 
              className="w-full h-8 rounded mb-4"
              style={{ backgroundColor: customizations.colorScheme.primary }}
            />
            <div className="space-y-2">
              <div 
                className="h-4 rounded w-3/4"
                style={{ backgroundColor: customizations.colorScheme.text, opacity: 0.8 }}
              />
              <div 
                className="h-4 rounded w-1/2"
                style={{ backgroundColor: customizations.colorScheme.textSecondary, opacity: 0.6 }}
              />
            </div>
            <div 
              className="absolute bottom-4 right-4 w-20 h-8 rounded"
              style={{ backgroundColor: customizations.colorScheme.accent }}
            />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold mb-2" style={{ color: customizations.colorScheme.text }}>
            {customizations.template.name}
          </h3>
          <p className="text-sm" style={{ color: customizations.colorScheme.textSecondary }}>
            Preview with {customizations.colorScheme.name} color scheme
          </p>
          
          <div className="flex items-center space-x-2 mt-3">
            <div 
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: customizations.colorScheme.primary }}
            />
            <div 
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: customizations.colorScheme.secondary }}
            />
            <div 
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: customizations.colorScheme.accent }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Theme Customizer</h2>
        <p className="text-gray-600">
          Customize your template with colors, fonts, and layout options
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Customization Panel */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab as any}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="template">Template</TabsTrigger>
              <TabsTrigger value="colors">Colors</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            {/* Template Selection */}
            <TabsContent value="template" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layout className="w-5 h-5 mr-2" />
                    Choose Template
                  </CardTitle>
                  <CardDescription>
                    Select a template as the foundation for your website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TemplateMarketplace
                    onTemplateSelect={handleTemplateSelect}
                    selectedTemplate={customizations.template}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Color Customization */}
            <TabsContent value="colors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Color Scheme
                  </CardTitle>
                  <CardDescription>
                    Customize the color palette for your website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ColorPalettePicker
                    selectedScheme={customizations.colorScheme}
                    onSchemeChange={handleColorSchemeChange}
                    onSchemeApply={handleColorSchemeChange}
                    showPreview={false}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Typography */}
            <TabsContent value="typography" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Type className="w-5 h-5 mr-2" />
                    Typography
                  </CardTitle>
                  <CardDescription>
                    Customize fonts and text styling
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Primary Font</Label>
                      <select
                        value={customizations.typography.primaryFont}
                        onChange={(e) => updateCustomization('typography', {
                          primaryFont: e.target.value
                        })}
                        className="w-full mt-1 p-2 border rounded-lg"
                      >
                        {FONT_OPTIONS.map(font => (
                          <option key={font.name} value={font.name}>
                            {font.name} ({font.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label>Secondary Font</Label>
                      <select
                        value={customizations.typography.secondaryFont}
                        onChange={(e) => updateCustomization('typography', {
                          secondaryFont: e.target.value
                        })}
                        className="w-full mt-1 p-2 border rounded-lg"
                      >
                        {FONT_OPTIONS.map(font => (
                          <option key={font.name} value={font.name}>
                            {font.name} ({font.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Base Font Size</Label>
                      <Input
                        type="number"
                        min="12"
                        max="24"
                        value={customizations.typography.baseSize}
                        onChange={(e) => updateCustomization('typography', {
                          baseSize: parseInt(e.target.value) || 16
                        })}
                      />
                    </div>

                    <div>
                      <Label>Line Height</Label>
                      <Input
                        type="number"
                        min="1.2"
                        max="2"
                        step="0.1"
                        value={customizations.typography.lineHeight}
                        onChange={(e) => updateCustomization('typography', {
                          lineHeight: parseFloat(e.target.value) || 1.6
                        })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Font Weights</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div>
                        <Label className="text-xs">Normal</Label>
                        <Input
                          type="number"
                          min="100"
                          max="900"
                          step="100"
                          value={customizations.typography.fontWeights.normal}
                          onChange={(e) => updateCustomization('typography', {
                            fontWeights: {
                              ...customizations.typography.fontWeights,
                              normal: parseInt(e.target.value) || 400
                            }
                          })}
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Medium</Label>
                        <Input
                          type="number"
                          min="100"
                          max="900"
                          step="100"
                          value={customizations.typography.fontWeights.medium}
                          onChange={(e) => updateCustomization('typography', {
                            fontWeights: {
                              ...customizations.typography.fontWeights,
                              medium: parseInt(e.target.value) || 500
                            }
                          })}
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Bold</Label>
                        <Input
                          type="number"
                          min="100"
                          max="900"
                          step="100"
                          value={customizations.typography.fontWeights.bold}
                          onChange={(e) => updateCustomization('typography', {
                            fontWeights: {
                              ...customizations.typography.fontWeights,
                              bold: parseInt(e.target.value) || 700
                            }
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Layout */}
            <TabsContent value="layout" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="w-5 h-5 mr-2" />
                    Layout Settings
                  </CardTitle>
                  <CardDescription>
                    Configure layout and spacing options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Header Style</Label>
                      <select
                        value={customizations.layout.headerStyle}
                        onChange={(e) => updateCustomization('layout', {
                          headerStyle: e.target.value as any
                        })}
                        className="w-full mt-1 p-2 border rounded-lg"
                      >
                        <option value="static">Static</option>
                        <option value="sticky">Sticky</option>
                        <option value="fixed">Fixed</option>
                      </select>
                    </div>

                    <div>
                      <Label>Footer Style</Label>
                      <select
                        value={customizations.layout.footerStyle}
                        onChange={(e) => updateCustomization('layout', {
                          footerStyle: e.target.value as any
                        })}
                        className="w-full mt-1 p-2 border rounded-lg"
                      >
                        <option value="minimal">Minimal</option>
                        <option value="standard">Standard</option>
                        <option value="expanded">Expanded</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Container Max Width</Label>
                      <Input
                        value={customizations.spacing.containerMaxWidth}
                        onChange={(e) => updateCustomization('spacing', {
                          containerMaxWidth: e.target.value
                        })}
                        placeholder="1200px"
                      />
                    </div>

                    <div>
                      <Label>Section Padding</Label>
                      <Input
                        value={customizations.spacing.sectionPadding}
                        onChange={(e) => updateCustomization('spacing', {
                          sectionPadding: e.target.value
                        })}
                        placeholder="4rem"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Border Radius</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div>
                        <Label className="text-xs">Small</Label>
                        <Input
                          value={customizations.borderRadius.small}
                          onChange={(e) => updateCustomization('borderRadius', {
                            small: e.target.value
                          })}
                          placeholder="0.375rem"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Medium</Label>
                        <Input
                          value={customizations.borderRadius.medium}
                          onChange={(e) => updateCustomization('borderRadius', {
                            medium: e.target.value
                          })}
                          placeholder="0.5rem"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Large</Label>
                        <Input
                          value={customizations.borderRadius.large}
                          onChange={(e) => updateCustomization('borderRadius', {
                            large: e.target.value
                          })}
                          placeholder="0.75rem"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advanced */}
            <TabsContent value="advanced" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Advanced Settings
                  </CardTitle>
                  <CardDescription>
                    Fine-tune animations and responsive behavior
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={customizations.animations.enabled}
                        onChange={(e) => updateCustomization('animations', {
                          enabled: e.target.checked
                        })}
                        className="mr-2"
                      />
                      Enable Animations
                    </Label>
                  </div>

                  {customizations.animations.enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Animation Duration</Label>
                        <Input
                          value={customizations.animations.duration}
                          onChange={(e) => updateCustomization('animations', {
                            duration: e.target.value
                          })}
                          placeholder="0.3s"
                        />
                      </div>

                      <div>
                        <Label>Animation Easing</Label>
                        <select
                          value={customizations.animations.easing}
                          onChange={(e) => updateCustomization('animations', {
                            easing: e.target.value
                          })}
                          className="w-full mt-1 p-2 border rounded-lg"
                        >
                          <option value="ease">ease</option>
                          <option value="ease-in">ease-in</option>
                          <option value="ease-out">ease-out</option>
                          <option value="ease-in-out">ease-in-out</option>
                          <option value="linear">linear</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <Label>Responsive Breakpoints</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {Object.entries(customizations.responsive.breakpoints).map(([key, value]) => (
                        <div key={key}>
                          <Label className="text-xs capitalize">{key}</Label>
                          <Input
                            value={value as string}
                            onChange={(e) => updateCustomization('responsive', {
                              breakpoints: {
                                ...customizations.responsive.breakpoints,
                                [key]: e.target.value
                              }
                            })}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Live Preview
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={previewMode === 'desktop' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewMode('desktop')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewMode === 'tablet' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewMode('tablet')}
                  >
                    <Tablet className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewMode === 'mobile' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewMode('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`transition-all duration-300 ${
                previewMode === 'mobile' ? 'max-w-sm mx-auto' :
                previewMode === 'tablet' ? 'max-w-md mx-auto' :
                'max-w-full'
              }`}>
                <ThemePreview />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={applyCustomizations} className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Apply Theme
              </Button>
              
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export Theme
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  // Reset to template defaults
                  setCustomizations((prev: ThemeCustomizationData) => ({
                    ...prev,
                    colorScheme: prev.template.colorScheme
                  }));
                }}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset to Default
              </Button>
            </CardContent>
          </Card>

          {/* Current Theme Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Theme Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-xs text-gray-500">Template</Label>
                <p className="font-medium">{customizations.template.name}</p>
              </div>
              
              <div>
                <Label className="text-xs text-gray-500">Color Scheme</Label>
                <p className="font-medium">{customizations.colorScheme.name}</p>
                <div className="flex space-x-1 mt-1">
                  {[
                    customizations.colorScheme.primary,
                    customizations.colorScheme.secondary,
                    customizations.colorScheme.accent
                  ].map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-xs text-gray-500">Primary Font</Label>
                <p className="font-medium">{customizations.typography.primaryFont}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};