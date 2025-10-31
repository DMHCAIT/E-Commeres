'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { HexColorPicker, RgbColorPicker } from 'react-colorful';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ColorScheme, 
  ColorPalette, 
  DEFAULT_COLOR_SCHEMES, 
  COLOR_PALETTES,
  ColorSchemeGenerator,
  AIColorSuggestions,
  ColorGenerationOptions
} from '@/lib/color-scheme-utils';
import { 
  Palette, 
  Wand2, 
  Copy, 
  Check, 
  RefreshCw, 
  Eye,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

interface ColorPalettePickerProps {
  selectedScheme?: ColorScheme;
  onSchemeChange: (scheme: ColorScheme) => void;
  onSchemeApply?: (scheme: ColorScheme) => void;
  showPreview?: boolean;
  className?: string;
}

interface ColorPickerState {
  activeColor: string;
  pickerMode: 'hex' | 'rgb' | 'hsl';
  customColors: string[];
}

export const ColorPalettePicker: React.FC<ColorPalettePickerProps> = ({
  selectedScheme,
  onSchemeChange,
  onSchemeApply,
  showPreview = true,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'presets' | 'generator' | 'custom' | 'ai'>('presets');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [generatorOptions, setGeneratorOptions] = useState<ColorGenerationOptions>({
    baseColor: '#2563eb',
    mode: 'analogous',
    count: 5
  });
  const [customScheme, setCustomScheme] = useState<Partial<ColorScheme>>({});
  const [aiKeywords, setAiKeywords] = useState<string>('');
  const [aiSuggestions, setAiSuggestions] = useState<ColorScheme[]>([]);
  const [generatedPalette, setGeneratedPalette] = useState<string[]>([]);
  const [colorPickerState, setColorPickerState] = useState<ColorPickerState>({
    activeColor: '#2563eb',
    pickerMode: 'hex',
    customColors: []
  });

  // Filter color schemes and palettes based on search and category
  const filteredSchemes = DEFAULT_COLOR_SCHEMES.filter(scheme => 
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPalettes = COLOR_PALETTES.filter(palette => 
    palette.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || palette.category === filterCategory)
  );

  // Copy color to clipboard
  const copyColor = useCallback(async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (error) {
      console.error('Failed to copy color:', error);
    }
  }, []);

  // Generate color palette
  const generatePalette = useCallback(() => {
    const colors = ColorSchemeGenerator.generatePalette(generatorOptions);
    setGeneratedPalette(colors);
  }, [generatorOptions]);

  // Generate AI suggestions
  const generateAISuggestions = useCallback(() => {
    if (!aiKeywords.trim()) return;
    
    const keywords = aiKeywords.split(',').map(k => k.trim());
    const suggestions = AIColorSuggestions.suggestByKeywords(keywords);
    setAiSuggestions(suggestions);
  }, [aiKeywords]);

  // Create custom color scheme
  const createCustomScheme = useCallback(() => {
    if (!customScheme.primary) return;
    
    const scheme = ColorSchemeGenerator.createColorScheme(
      customScheme.primary,
      customScheme.name || 'Custom Scheme'
    );
    
    onSchemeChange({
      ...scheme,
      ...customScheme
    });
  }, [customScheme, onSchemeChange]);

  // Color picker component
  const ColorPicker: React.FC<{ 
    color: string; 
    onChange: (color: string) => void;
    label?: string;
  }> = ({ color, onChange, label }) => (
    <div className="space-y-2">
      {label && <Label className="text-sm font-medium">{label}</Label>}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <HexColorPicker color={color} onChange={onChange} />
        </div>
        <div className="space-y-2">
          <div 
            className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => copyColor(color)}
          />
          <Input
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="w-24 text-xs"
          />
        </div>
      </div>
    </div>
  );

  // Color scheme preview component
  const SchemePreview: React.FC<{ scheme: ColorScheme; onClick?: () => void }> = ({ 
    scheme, 
    onClick 
  }) => (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        selectedScheme?.id === scheme.id ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">{scheme.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-1 mb-3">
          {[
            scheme.primary,
            scheme.secondary,
            scheme.accent,
            scheme.success,
            scheme.warning,
            scheme.error
          ].map((color, index) => (
            <div
              key={index}
              className="h-8 rounded cursor-pointer transition-transform hover:scale-110"
              style={{ backgroundColor: color }}
              onClick={(e) => {
                e.stopPropagation();
                copyColor(color);
              }}
              title={color}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            {ColorSchemeGenerator.getColorInfo(scheme.primary).temperature}
          </div>
          {copiedColor === scheme.primary && (
            <Check className="w-4 h-4 text-green-500" />
          )}
        </div>
      </CardContent>
    </Card>
  );

  // Palette preview component
  const PalettePreview: React.FC<{ palette: ColorPalette; onClick?: () => void }> = ({ 
    palette, 
    onClick 
  }) => (
    <Card className="cursor-pointer transition-all hover:shadow-lg" onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-sm">{palette.name}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {palette.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-1 mb-2">
          {palette.colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 h-12 rounded cursor-pointer transition-transform hover:scale-105"
              style={{ backgroundColor: color }}
              onClick={(e) => {
                e.stopPropagation();
                copyColor(color);
              }}
              title={color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  useEffect(() => {
    generatePalette();
  }, [generatePalette]);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Palette className="w-6 h-6 mr-2" />
          Color Scheme Selection
        </h2>
        <p className="text-gray-600">
          Choose from presets, generate custom palettes, or use AI suggestions
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex space-x-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search color schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="vibrant">Vibrant</option>
          <option value="minimal">Minimal</option>
          <option value="nature">Nature</option>
          <option value="corporate">Corporate</option>
        </select>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab as any}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="presets">Presets</TabsTrigger>
          <TabsTrigger value="generator">Generator</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
          <TabsTrigger value="ai">AI Suggestions</TabsTrigger>
        </TabsList>

        {/* Preset Color Schemes */}
        <TabsContent value="presets" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSchemes.map((scheme) => (
              <SchemePreview
                key={scheme.id}
                scheme={scheme}
                onClick={() => {
                  onSchemeChange(scheme);
                  if (onSchemeApply) onSchemeApply(scheme);
                }}
              />
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Color Palettes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPalettes.map((palette) => (
                <PalettePreview
                  key={palette.id}
                  palette={palette}
                  onClick={() => {
                    const scheme = ColorSchemeGenerator.createColorScheme(
                      palette.colors[0],
                      palette.name
                    );
                    onSchemeChange(scheme);
                    if (onSchemeApply) onSchemeApply(scheme);
                  }}
                />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Color Generator */}
        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wand2 className="w-5 h-5 mr-2" />
                Color Palette Generator
              </CardTitle>
              <CardDescription>
                Generate harmonious color palettes from a base color
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <ColorPicker
                    color={generatorOptions.baseColor}
                    onChange={(color) => 
                      setGeneratorOptions(prev => ({ ...prev, baseColor: color }))
                    }
                    label="Base Color"
                  />
                  
                  <div>
                    <Label>Color Harmony</Label>
                    <select
                      value={generatorOptions.mode}
                      onChange={(e) => 
                        setGeneratorOptions(prev => ({ 
                          ...prev, 
                          mode: e.target.value as any 
                        }))
                      }
                      className="w-full mt-1 p-2 border rounded-lg"
                    >
                      <option value="analogous">Analogous</option>
                      <option value="complementary">Complementary</option>
                      <option value="triadic">Triadic</option>
                      <option value="monochromatic">Monochromatic</option>
                      <option value="tetradic">Tetradic</option>
                    </select>
                  </div>

                  <div>
                    <Label>Number of Colors</Label>
                    <Input
                      type="number"
                      min="3"
                      max="10"
                      value={generatorOptions.count}
                      onChange={(e) => 
                        setGeneratorOptions(prev => ({ 
                          ...prev, 
                          count: parseInt(e.target.value) || 5 
                        }))
                      }
                    />
                  </div>

                  <Button onClick={generatePalette} className="w-full">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Generate Palette
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Generated Palette</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {generatedPalette.map((color, index) => (
                      <div
                        key={index}
                        className="group relative h-16 rounded-lg cursor-pointer transition-all hover:scale-105"
                        style={{ backgroundColor: color }}
                        onClick={() => copyColor(color)}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all flex items-center justify-center">
                          <Copy className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="absolute bottom-1 left-1 text-xs text-white bg-black bg-opacity-50 px-1 rounded">
                          {color}
                        </div>
                      </div>
                    ))}
                  </div>

                  {generatedPalette.length > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        const scheme = ColorSchemeGenerator.createColorScheme(
                          generatedPalette[0],
                          'Generated Scheme'
                        );
                        onSchemeChange(scheme);
                        if (onSchemeApply) onSchemeApply(scheme);
                      }}
                      className="w-full"
                    >
                      Apply as Color Scheme
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Custom Color Scheme */}
        <TabsContent value="custom" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Custom Color Scheme</CardTitle>
              <CardDescription>
                Design your own color scheme from scratch
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Scheme Name</Label>
                    <Input
                      placeholder="My Custom Scheme"
                      value={customScheme.name || ''}
                      onChange={(e) => 
                        setCustomScheme(prev => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>

                  <ColorPicker
                    color={customScheme.primary || '#2563eb'}
                    onChange={(color) => 
                      setCustomScheme(prev => ({ ...prev, primary: color }))
                    }
                    label="Primary Color"
                  />

                  <ColorPicker
                    color={customScheme.secondary || '#64748b'}
                    onChange={(color) => 
                      setCustomScheme(prev => ({ ...prev, secondary: color }))
                    }
                    label="Secondary Color"
                  />

                  <ColorPicker
                    color={customScheme.accent || '#06b6d4'}
                    onChange={(color) => 
                      setCustomScheme(prev => ({ ...prev, accent: color }))
                    }
                    label="Accent Color"
                  />
                </div>

                <div className="space-y-4">
                  <ColorPicker
                    color={customScheme.background || '#ffffff'}
                    onChange={(color) => 
                      setCustomScheme(prev => ({ ...prev, background: color }))
                    }
                    label="Background Color"
                  />

                  <ColorPicker
                    color={customScheme.text || '#1f2937'}
                    onChange={(color) => 
                      setCustomScheme(prev => ({ ...prev, text: color }))
                    }
                    label="Text Color"
                  />

                  <Button onClick={createCustomScheme} className="w-full">
                    Create Color Scheme
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Suggestions */}
        <TabsContent value="ai" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                AI Color Suggestions
              </CardTitle>
              <CardDescription>
                Get color scheme suggestions based on your brand or industry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex space-x-2">
                <Input
                  placeholder="e.g., tech, healthcare, creative, finance"
                  value={aiKeywords}
                  onChange={(e) => setAiKeywords(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={generateAISuggestions}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>

              {aiSuggestions.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aiSuggestions.map((scheme) => (
                    <SchemePreview
                      key={scheme.id}
                      scheme={scheme}
                      onClick={() => {
                        onSchemeChange(scheme);
                        if (onSchemeApply) onSchemeApply(scheme);
                      }}
                    />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Selected Scheme Preview */}
      {selectedScheme && showPreview && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Current Color Scheme: {selectedScheme.name}
              </span>
              {onSchemeApply && (
                <Button onClick={() => onSchemeApply(selectedScheme)}>
                  Apply to Design
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(selectedScheme).map(([key, value]) => {
                if (key === 'id' || key === 'name') return null;
                return (
                  <div key={key} className="text-center">
                    <div
                      className="h-16 rounded-lg mb-2 cursor-pointer transition-transform hover:scale-105"
                      style={{ backgroundColor: value }}
                      onClick={() => copyColor(value)}
                    />
                    <div className="text-xs font-medium capitalize">{key}</div>
                    <div className="text-xs text-gray-500">{value}</div>
                    {copiedColor === value && (
                      <Check className="w-4 h-4 text-green-500 mx-auto mt-1" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};