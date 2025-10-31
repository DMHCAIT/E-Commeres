'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ThemeCustomizer } from '@/components/theme/ThemeCustomizer';
import { ColorPalettePicker } from '@/components/color/ColorPalettePicker';
import { TemplateMarketplace } from '@/components/templates/EnhancedTemplateMarketplace';
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
import ThemeManager, { ThemeCustomizations } from '@/lib/theme-manager';
import {
  Palette,
  Layout,
  Wand2,
  Save,
  Download,
  Upload,
  Search,
  Filter,
  Heart,
  Share2,
  Copy,
  Trash2,
  Settings,
  Eye,
  Grid,
  List,
  Star,
  Clock,
  Tag,
  Sparkles
} from 'lucide-react';

interface AdvancedDesignStudioProps {
  onThemeApply?: (theme: ThemeCustomizations) => void;
  initialTemplate?: WebsiteTemplate;
  className?: string;
}

type ViewMode = 'gallery' | 'customizer' | 'library';
type LibraryView = 'grid' | 'list';
type LibrarySort = 'recent' | 'popular' | 'name' | 'category';

export const AdvancedDesignStudio: React.FC<AdvancedDesignStudioProps> = ({
  onThemeApply,
  initialTemplate,
  className = ''
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('gallery');
  const [selectedTemplate, setSelectedTemplate] = useState<WebsiteTemplate | undefined>(initialTemplate);
  const [selectedTheme, setSelectedTheme] = useState<ThemeCustomizations | null>(null);
  const [savedThemes, setSavedThemes] = useState<ThemeCustomizations[]>([]);
  const [libraryView, setLibraryView] = useState<LibraryView>('grid');
  const [librarySort, setLibrarySort] = useState<LibrarySort>('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSaveThemeDialog, setShowSaveThemeDialog] = useState(false);
  const [themeName, setThemeName] = useState('');
  const [themeDescription, setThemeDescription] = useState('');

  // Load saved themes on mount
  useEffect(() => {
    setSavedThemes(ThemeManager.getAllThemes());
  }, []);

  // Handle template selection
  const handleTemplateSelect = useCallback((template: WebsiteTemplate) => {
    setSelectedTemplate(template);
    setViewMode('customizer');
  }, []);

  // Handle theme customization apply
  const handleThemeApply = useCallback((customizations: ThemeCustomizations) => {
    ThemeManager.setActiveTheme(customizations);
    onThemeApply?.(customizations);
  }, [onThemeApply]);

  // Handle theme save
  const handleThemeSave = useCallback((customizations: Omit<ThemeCustomizations, 'id' | 'createdAt' | 'updatedAt'>) => {
    const savedTheme = ThemeManager.saveTheme({
      ...customizations,
      name: themeName || `Custom Theme ${Date.now()}`,
      description: themeDescription,
      metadata: {
        tags: [],
        category: customizations.template.category,
        isPublic: false,
        likes: 0,
        downloads: 0
      }
    });

    setSavedThemes(ThemeManager.getAllThemes());
    setShowSaveThemeDialog(false);
    setThemeName('');
    setThemeDescription('');
    
    return savedTheme;
  }, [themeName, themeDescription]);

  // Handle theme load
  const handleThemeLoad = useCallback((theme: ThemeCustomizations) => {
    setSelectedTheme(theme);
    setSelectedTemplate(theme.template);
    setViewMode('customizer');
    ThemeManager.setActiveTheme(theme);
  }, []);

  // Handle theme export
  const handleThemeExport = useCallback((theme: ThemeCustomizations) => {
    const themeExport = ThemeManager.exportTheme(theme);
    const blob = new Blob([JSON.stringify(themeExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, '-')}-theme.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  // Handle theme import
  const handleThemeImport = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const themeExport = JSON.parse(e.target?.result as string);
        const importedTheme = ThemeManager.importTheme(themeExport);
        setSavedThemes(ThemeManager.getAllThemes());
        handleThemeLoad(importedTheme);
      } catch (error) {
        console.error('Error importing theme:', error);
        alert('Invalid theme file');
      }
    };
    reader.readAsText(file);
  }, [handleThemeLoad]);

  // Handle theme deletion
  const handleThemeDelete = useCallback((themeId: string) => {
    if (confirm('Are you sure you want to delete this theme?')) {
      ThemeManager.deleteTheme(themeId);
      setSavedThemes(ThemeManager.getAllThemes());
    }
  }, []);

  // Handle theme cloning
  const handleThemeClone = useCallback((theme: ThemeCustomizations) => {
    const clonedTheme = ThemeManager.cloneTheme(theme);
    setSavedThemes(ThemeManager.getAllThemes());
    handleThemeLoad(clonedTheme);
  }, [handleThemeLoad]);

  // Filter and sort themes
  const filteredThemes = savedThemes
    .filter(theme => {
      const matchesSearch = searchQuery === '' || 
        theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        theme.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        theme.template.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
        theme.template.category === selectedCategory ||
        theme.metadata?.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (librarySort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'popular':
          return (b.metadata?.likes || 0) - (a.metadata?.likes || 0);
        case 'category':
          return a.template.category.localeCompare(b.template.category);
        case 'recent':
        default:
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

  // Get unique categories from themes
  const categories = ['all', ...new Set(savedThemes.map(theme => theme.template.category))];

  return (
    <div className={`w-full max-w-7xl mx-auto ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center">
              <Sparkles className="w-8 h-8 mr-3 text-purple-600" />
              Advanced Design Studio
            </h1>
            <p className="text-gray-600">
              Professional-grade theme customization and template marketplace
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'gallery' ? 'default' : 'outline'}
              onClick={() => setViewMode('gallery')}
            >
              <Layout className="w-4 h-4 mr-2" />
              Templates
            </Button>
            <Button
              variant={viewMode === 'customizer' ? 'default' : 'outline'}
              onClick={() => setViewMode('customizer')}
              disabled={!selectedTemplate}
            >
              <Palette className="w-4 h-4 mr-2" />
              Customize
            </Button>
            <Button
              variant={viewMode === 'library' ? 'default' : 'outline'}
              onClick={() => setViewMode('library')}
            >
              <Save className="w-4 h-4 mr-2" />
              My Themes
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="file"
              accept=".json"
              onChange={handleThemeImport}
              className="hidden"
              id="theme-import"
            />
            <Button
              variant="outline"
              onClick={() => document.getElementById('theme-import')?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              Import Theme
            </Button>
          </div>

          {selectedTemplate && (
            <Button
              variant="outline"
              onClick={() => setShowSaveThemeDialog(true)}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Current
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      {viewMode === 'gallery' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Marketplace</CardTitle>
              <CardDescription>
                Choose from our collection of professionally designed templates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TemplateMarketplace
                onTemplateSelect={handleTemplateSelect}
                selectedTemplate={selectedTemplate}
              />
            </CardContent>
          </Card>
        </div>
      )}

      {viewMode === 'customizer' && selectedTemplate && (
        <ThemeCustomizer
          selectedTemplate={selectedTemplate}
          onTemplateChange={setSelectedTemplate}
          onThemeApply={handleThemeApply}
        />
      )}

      {viewMode === 'library' && (
        <div className="space-y-6">
          {/* Library Controls */}
          <Card>
            <CardHeader>
              <CardTitle>My Theme Library</CardTitle>
              <CardDescription>
                Manage your saved themes and customizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search themes..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={librarySort}
                    onChange={(e) => setLibrarySort(e.target.value as LibrarySort)}
                    className="px-3 py-2 border rounded-lg"
                  >
                    <option value="recent">Recent</option>
                    <option value="popular">Popular</option>
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                  </select>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLibraryView(libraryView === 'grid' ? 'list' : 'grid')}
                  >
                    {libraryView === 'grid' ? <List className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Theme Grid/List */}
              {filteredThemes.length === 0 ? (
                <div className="text-center py-12">
                  <Palette className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No themes found</h3>
                  <p className="text-gray-500">
                    {searchQuery || selectedCategory !== 'all' 
                      ? 'Try adjusting your search or filters'
                      : 'Create your first theme by customizing a template'
                    }
                  </p>
                </div>
              ) : (
                <div className={
                  libraryView === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }>
                  {filteredThemes.map(theme => (
                    <Card key={theme.id} className="relative group hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{theme.name}</CardTitle>
                            <CardDescription className="mt-1">
                              {theme.description || 'Custom theme'}
                            </CardDescription>
                          </div>
                          
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleThemeLoad(theme)}
                              title="Edit theme"
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleThemeClone(theme)}
                              title="Clone theme"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleThemeExport(theme)}
                              title="Export theme"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleThemeDelete(theme.id)}
                              title="Delete theme"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {/* Theme Preview */}
                          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                            <div 
                              className="absolute inset-0 p-3"
                              style={{
                                backgroundColor: theme.colorScheme.background,
                                color: theme.colorScheme.text
                              }}
                            >
                              <div 
                                className="w-full h-6 rounded mb-2"
                                style={{ backgroundColor: theme.colorScheme.primary }}
                              />
                              <div className="space-y-1">
                                <div 
                                  className="h-3 rounded w-3/4"
                                  style={{ backgroundColor: theme.colorScheme.text, opacity: 0.8 }}
                                />
                                <div 
                                  className="h-3 rounded w-1/2"
                                  style={{ backgroundColor: theme.colorScheme.textSecondary, opacity: 0.6 }}
                                />
                              </div>
                              <div 
                                className="absolute bottom-3 right-3 w-16 h-6 rounded"
                                style={{ backgroundColor: theme.colorScheme.accent }}
                              />
                            </div>
                          </div>

                          {/* Theme Info */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-3">
                              <Badge variant="secondary">
                                {theme.template.category}
                              </Badge>
                              <span className="text-gray-500 flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {new Date(theme.updatedAt).toLocaleDateString()}
                              </span>
                            </div>

                            {theme.metadata && (
                              <div className="flex items-center space-x-2 text-gray-500">
                                {theme.metadata.likes > 0 && (
                                  <span className="flex items-center">
                                    <Heart className="w-3 h-3 mr-1" />
                                    {theme.metadata.likes}
                                  </span>
                                )}
                                {theme.metadata.downloads > 0 && (
                                  <span className="flex items-center">
                                    <Download className="w-3 h-3 mr-1" />
                                    {theme.metadata.downloads}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Color Palette */}
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">Colors:</span>
                            {[
                              theme.colorScheme.primary,
                              theme.colorScheme.secondary,
                              theme.colorScheme.accent
                            ].map((color, index) => (
                              <div
                                key={index}
                                className="w-5 h-5 rounded-full border border-gray-200"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            ))}
                          </div>

                          {/* Quick Actions */}
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleThemeLoad(theme)}
                              className="flex-1"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                ThemeManager.setActiveTheme(theme);
                                onThemeApply?.(theme);
                              }}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Save Theme Dialog */}
      <Dialog open={showSaveThemeDialog} onOpenChange={setShowSaveThemeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Custom Theme</DialogTitle>
            <DialogDescription>
              Give your theme a name and description to save it to your library
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="theme-name">Theme Name</Label>
              <Input
                id="theme-name"
                value={themeName}
                onChange={(e) => setThemeName(e.target.value)}
                placeholder="My Custom Theme"
              />
            </div>
            
            <div>
              <Label htmlFor="theme-description">Description (Optional)</Label>
              <Input
                id="theme-description"
                value={themeDescription}
                onChange={(e) => setThemeDescription(e.target.value)}
                placeholder="A brief description of your theme"
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowSaveThemeDialog(false)}>
                Cancel
              </Button>
              <Button 
                onClick={() => {
                  if (selectedTemplate) {
                    // Create theme object from current state
                    const themeToSave = {
                      name: themeName || `Custom Theme ${Date.now()}`,
                      description: themeDescription,
                      template: selectedTemplate,
                      colorScheme: selectedTemplate.colorScheme,
                      typography: {
                        primaryFont: 'Inter',
                        secondaryFont: 'Roboto',
                        baseSize: 16,
                        lineHeight: 1.6,
                        fontWeights: { normal: 400, medium: 500, bold: 700 }
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
                        headerStyle: 'sticky' as const,
                        footerStyle: 'standard' as const
                      },
                      responsive: {
                        breakpoints: {
                          mobile: '640px',
                          tablet: '768px',
                          desktop: '1024px',
                          wide: '1280px'
                        },
                        scaling: { mobile: 0.875, tablet: 0.9375, desktop: 1 }
                      }
                    };
                    
                    handleThemeSave(themeToSave);
                  }
                }}
                disabled={!themeName.trim()}
              >
                Save Theme
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};