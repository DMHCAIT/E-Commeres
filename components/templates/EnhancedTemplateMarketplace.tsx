'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  WebsiteTemplate,
  TemplateCategory,
  TemplateStyle,
  TemplateFeature,
  TemplateFilters,
  TemplateSearchOptions,
  TemplateCollection,
  TEMPLATE_CATEGORIES,
  SAMPLE_TEMPLATES,
  TemplateManager
} from '@/lib/template-utils';
import { ColorScheme } from '@/lib/color-scheme-utils';
import {
  Search,
  Filter,
  Grid,
  List,
  Star,
  Download,
  Eye,
  Heart,
  Crown,
  Tag,
  Palette,
  Layout,
  Smartphone,
  Monitor,
  Tablet,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Check,
  X,
  Zap,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
  Users,
  Globe
} from 'lucide-react';

interface TemplateMarketplaceProps {
  onTemplateSelect: (template: WebsiteTemplate) => void;
  onTemplatePreview?: (template: WebsiteTemplate) => void;
  onColorSchemeApply?: (colorScheme: ColorScheme) => void;
  selectedTemplate?: WebsiteTemplate;
  className?: string;
}

interface ViewMode {
  type: 'grid' | 'list';
  columns: number;
}

// Enhanced template data with better visuals
const createTemplatePreviewData = (template: WebsiteTemplate) => {
  const previewImages = {
    'modern-ecommerce-1': '/api/placeholder/400/300',
    'creative-portfolio-1': '/api/placeholder/400/300',
    'corporate-website-1': '/api/placeholder/400/300',
    'minimal-blog-1': '/api/placeholder/400/300',
    'restaurant-site-1': '/api/placeholder/400/300',
    'startup-landing-1': '/api/placeholder/400/300',
    'photography-portfolio-1': '/api/placeholder/400/300',
    'fitness-gym-1': '/api/placeholder/400/300',
    'consulting-firm-1': '/api/placeholder/400/300',
    'fashion-boutique-1': '/api/placeholder/400/300'
  };

  return {
    ...template,
    previewImage: previewImages[template.id as keyof typeof previewImages] || '/api/placeholder/400/300',
    mockupScreens: {
      desktop: `/api/placeholder/800/600`,
      tablet: `/api/placeholder/600/800`,
      mobile: `/api/placeholder/375/667`
    }
  };
};

export const TemplateMarketplace: React.FC<TemplateMarketplaceProps> = ({
  onTemplateSelect,
  onTemplatePreview,
  onColorSchemeApply,
  selectedTemplate,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<TemplateFilters>({
    sortBy: 'popularity',
    sortOrder: 'desc'
  });
  const [viewMode, setViewMode] = useState<ViewMode>({ type: 'grid', columns: 3 });
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteTemplates, setFavoriteTemplates] = useState<Set<string>>(new Set());
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<WebsiteTemplate | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Enhanced templates with better preview data
  const enhancedTemplates = useMemo(() => {
    return SAMPLE_TEMPLATES.map(createTemplatePreviewData);
  }, []);

  // Template collection with filtering and pagination
  const templateCollection: TemplateCollection = useMemo(() => {
    const searchOptions: TemplateSearchOptions = {
      query: searchTerm,
      filters,
      page: currentPage,
      limit: 12
    };
    
    return TemplateManager.searchTemplates(enhancedTemplates, searchOptions);
  }, [enhancedTemplates, searchTerm, filters, currentPage]);

  // Filter handlers
  const handleFilterChange = (key: keyof TemplateFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleCategoryToggle = (category: TemplateCategory) => {
    const currentCategories = filters.category || [];
    const newCategories = currentCategories.includes(category)
      ? currentCategories.filter(c => c !== category)
      : [...currentCategories, category];
    
    handleFilterChange('category', newCategories.length > 0 ? newCategories : undefined);
  };

  const handleStyleToggle = (style: TemplateStyle) => {
    const currentStyles = filters.style || [];
    const newStyles = currentStyles.includes(style)
      ? currentStyles.filter(s => s !== style)
      : [...currentStyles, style];
    
    handleFilterChange('style', newStyles.length > 0 ? newStyles : undefined);
  };

  const handleFeatureToggle = (feature: TemplateFeature) => {
    const currentFeatures = filters.features || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    
    handleFilterChange('features', newFeatures.length > 0 ? newFeatures : undefined);
  };

  const toggleFavorite = (templateId: string) => {
    setFavoriteTemplates(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(templateId)) {
        newFavorites.delete(templateId);
      } else {
        newFavorites.add(templateId);
      }
      return newFavorites;
    });
  };

  const openPreview = (template: WebsiteTemplate) => {
    setPreviewTemplate(template);
    onTemplatePreview?.(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  // Category stats
  const categoryStats = useMemo(() => {
    const stats: Record<TemplateCategory, number> = {} as any;
    TEMPLATE_CATEGORIES.forEach(category => {
      stats[category.value] = enhancedTemplates.filter(t => t.category === category.value).length;
    });
    return stats;
  }, [enhancedTemplates]);

  // Enhanced Template Card Component
  const TemplateCard: React.FC<{ template: WebsiteTemplate; isSelected?: boolean }> = ({ 
    template, 
    isSelected = false 
  }) => {
    const isFavorite = favoriteTemplates.has(template.id);

    return (
      <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer border-2 ${
        isSelected ? 'border-blue-500 shadow-blue-200' : 'border-gray-200 hover:border-blue-300'
      }`}>
        {/* Template Preview Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <div 
            className="absolute inset-0 bg-gradient-to-br opacity-90"
            style={{ 
              background: `linear-gradient(135deg, ${template.colorScheme.primary}20, ${template.colorScheme.secondary}20)` 
            }}
          />
          
          {/* Mock Template Content */}
          <div className="absolute inset-0 p-4">
            {/* Header */}
            <div 
              className="w-full h-8 rounded-md mb-3 flex items-center px-3"
              style={{ backgroundColor: template.colorScheme.primary }}
            >
              <div className="w-16 h-4 bg-white/20 rounded"></div>
              <div className="ml-auto flex space-x-2">
                <div className="w-12 h-3 bg-white/20 rounded"></div>
                <div className="w-12 h-3 bg-white/20 rounded"></div>
                <div className="w-12 h-3 bg-white/20 rounded"></div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="space-y-2">
              <div 
                className="h-6 rounded w-3/4"
                style={{ backgroundColor: template.colorScheme.text, opacity: 0.8 }}
              />
              <div 
                className="h-4 rounded w-1/2"
                style={{ backgroundColor: template.colorScheme.textSecondary, opacity: 0.6 }}
              />
              <div 
                className="h-3 rounded w-2/3"
                style={{ backgroundColor: template.colorScheme.textSecondary, opacity: 0.4 }}
              />
            </div>

            {/* Content Blocks */}
            <div className="absolute bottom-4 right-4 space-y-2">
              <div 
                className="w-20 h-6 rounded"
                style={{ backgroundColor: template.colorScheme.accent }}
              />
            </div>

            {/* Color Palette Preview */}
            <div className="absolute bottom-2 left-4 flex space-x-1">
              {[template.colorScheme.primary, template.colorScheme.secondary, template.colorScheme.accent].map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full border border-white/30"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  openPreview(template);
                }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onTemplateSelect(template);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Check className="w-4 h-4 mr-2" />
                Select
              </Button>
            </div>
          </div>

          {/* Premium Badge */}
          {template.isPremium && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 font-semibold">
                <Crown className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            </div>
          )}

          {/* Favorite Button */}
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(template.id);
            }}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>

        {/* Template Info */}
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {template.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                {template.description}
              </p>
            </div>
            {template.isPremium && template.price && (
              <div className="ml-2 text-right">
                <div className="text-sm font-semibold text-green-600">${template.price}</div>
              </div>
            )}
          </div>

          {/* Template Metadata */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                {template.rating}
              </div>
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                {template.popularity}
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {template.category}
            </Badge>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-3">
            {template.features.slice(0, 3).map(feature => (
              <Badge key={feature} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {template.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{template.features.length - 3} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => openPreview(template)}
              className="flex-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button
              size="sm"
              onClick={() => onTemplateSelect(template)}
              className="flex-1"
            >
              <Zap className="w-4 h-4 mr-2" />
              Use Template
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Filter Sidebar Component
  const FilterSidebar: React.FC = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Categories</h3>
        <div className="space-y-2">
          {TEMPLATE_CATEGORIES.map(category => (
            <div key={category.value} className="flex items-center justify-between">
              <Label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category?.includes(category.value) || false}
                  onChange={() => handleCategoryToggle(category.value)}
                  className="rounded border-gray-300"
                />
                <span className="text-sm">{category.label}</span>
              </Label>
              <Badge variant="secondary" className="text-xs">
                {categoryStats[category.value] || 0}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Styles</h3>
        <div className="flex flex-wrap gap-2">
          {['modern', 'classic', 'minimal', 'bold', 'elegant', 'playful', 'professional'].map(style => (
            <Badge
              key={style}
              variant={filters.style?.includes(style as TemplateStyle) ? "default" : "outline"}
              className="cursor-pointer hover:bg-blue-100 transition-colors"
              onClick={() => handleStyleToggle(style as TemplateStyle)}
            >
              {style}
            </Badge>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Features</h3>
        <div className="space-y-2">
          {['responsive', 'dark-mode', 'animations', 'contact-form', 'gallery', 'blog', 'ecommerce'].map(feature => (
            <Label key={feature} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.features?.includes(feature as TemplateFeature) || false}
                onChange={() => handleFeatureToggle(feature as TemplateFeature)}
                className="rounded border-gray-300"
              />
              <span className="text-sm capitalize">{feature.replace('-', ' ')}</span>
            </Label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Price</h3>
        <div className="space-y-2">
          <Label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="free"
              checked={filters.isPremium === false}
              onChange={() => handleFilterChange('isPremium', false)}
              className="rounded-full"
            />
            <span className="text-sm">Free</span>
          </Label>
          <Label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="premium"
              checked={filters.isPremium === true}
              onChange={() => handleFilterChange('isPremium', true)}
              className="rounded-full"
            />
            <span className="text-sm">Premium</span>
          </Label>
          <Label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="price"
              value="all"
              checked={filters.isPremium === undefined}
              onChange={() => handleFilterChange('isPremium', undefined)}
              className="rounded-full"
            />
            <span className="text-sm">All</span>
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Template Marketplace</h2>
            <p className="text-gray-600">
              Discover {enhancedTemplates.length}+ professional templates to kickstart your website
            </p>
          </div>

          {/* Search and Controls */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            <Button
              variant="outline"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode.type === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode({ type: 'grid', columns: 3 })}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode.type === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode({ type: 'list', columns: 1 })}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <select
              value={filters.sortBy || 'popularity'}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="recent">Recently Added</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">
            Showing {templateCollection.templates.length} of {templateCollection.total} templates
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 lg:block ${isFilterOpen ? 'block' : 'hidden'}`}>
          <div className="sticky top-4">
            <Card className="p-4">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <FilterSidebar />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1">
          {templateCollection.templates.length === 0 ? (
            <div className="text-center py-16">
              <Layout className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No templates found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setFilters({ sortBy: 'popularity', sortOrder: 'desc' });
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className={`grid gap-6 ${
                viewMode.type === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {templateCollection.templates.map(template => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    isSelected={selectedTemplate?.id === template.id}
                  />
                ))}
              </div>

              {/* Pagination */}
              {templateCollection.totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  
                  {Array.from({ length: templateCollection.totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={page === currentPage ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(templateCollection.totalPages, currentPage + 1))}
                    disabled={currentPage === templateCollection.totalPages}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <Dialog open={true} onOpenChange={closePreview}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span>{previewTemplate.name}</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={previewDevice === 'desktop' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewDevice('desktop')}
                  >
                    <Monitor className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewDevice === 'tablet' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewDevice('tablet')}
                  >
                    <Tablet className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={previewDevice === 'mobile' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setPreviewDevice('mobile')}
                  >
                    <Smartphone className="w-4 h-4" />
                  </Button>
                </div>
              </DialogTitle>
              <DialogDescription>
                {previewTemplate.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1 overflow-hidden">
              <div className={`mx-auto bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${
                previewDevice === 'desktop' ? 'max-w-full aspect-video' :
                previewDevice === 'tablet' ? 'max-w-md aspect-[3/4]' :
                'max-w-sm aspect-[9/16]'
              }`}>
                {/* Enhanced Preview Content */}
                <div 
                  className="w-full h-full p-6"
                  style={{ backgroundColor: previewTemplate.colorScheme.background }}
                >
                  {/* Header */}
                  <div 
                    className="w-full h-16 rounded-lg mb-6 flex items-center px-6"
                    style={{ backgroundColor: previewTemplate.colorScheme.primary }}
                  >
                    <div className="w-24 h-8 bg-white/20 rounded-md"></div>
                    <div className="ml-auto flex space-x-4">
                      <div className="w-16 h-6 bg-white/20 rounded"></div>
                      <div className="w-16 h-6 bg-white/20 rounded"></div>
                      <div className="w-16 h-6 bg-white/20 rounded"></div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center mb-8">
                    <div 
                      className="h-12 rounded-lg w-3/4 mx-auto mb-4"
                      style={{ backgroundColor: previewTemplate.colorScheme.text, opacity: 0.9 }}
                    />
                    <div 
                      className="h-6 rounded w-1/2 mx-auto mb-4"
                      style={{ backgroundColor: previewTemplate.colorScheme.textSecondary, opacity: 0.7 }}
                    />
                    <div 
                      className="w-32 h-12 rounded-lg mx-auto"
                      style={{ backgroundColor: previewTemplate.colorScheme.accent }}
                    />
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="space-y-2">
                        <div 
                          className="w-full aspect-square rounded-lg"
                          style={{ backgroundColor: previewTemplate.colorScheme.surface }}
                        />
                        <div 
                          className="h-4 rounded w-full"
                          style={{ backgroundColor: previewTemplate.colorScheme.text, opacity: 0.6 }}
                        />
                        <div 
                          className="h-3 rounded w-2/3"
                          style={{ backgroundColor: previewTemplate.colorScheme.textSecondary, opacity: 0.4 }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div 
                    className="w-full h-16 rounded-lg"
                    style={{ backgroundColor: previewTemplate.colorScheme.surface }}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{previewTemplate.category}</Badge>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">{previewTemplate.rating}</span>
                </div>
                {previewTemplate.isPremium && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900">
                    <Crown className="w-3 h-3 mr-1" />
                    Premium ${previewTemplate.price}
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={closePreview}>
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    onTemplateSelect(previewTemplate);
                    closePreview();
                  }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Use This Template
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};