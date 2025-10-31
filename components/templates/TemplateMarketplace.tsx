'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Check,
  X
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

  // Template collection with filtering and pagination
  const templateCollection: TemplateCollection = useMemo(() => {
    const searchOptions: TemplateSearchOptions = {
      query: searchTerm,
      filters,
      page: currentPage,
      limit: 12
    };
    
    return TemplateManager.searchTemplates(SAMPLE_TEMPLATES, searchOptions);
  }, [searchTerm, filters, currentPage]);

  // Filter handlers
  const handleFilterChange = (key: keyof TemplateFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filters change
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

  // Favorite template toggle
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

  // Template preview
  const openPreview = (template: WebsiteTemplate) => {
    setPreviewTemplate(template);
    if (onTemplatePreview) onTemplatePreview(template);
  };

  // Template card component
  const TemplateCard: React.FC<{ 
    template: WebsiteTemplate; 
    isSelected?: boolean;
    viewMode: 'grid' | 'list';
  }> = ({ template, isSelected, viewMode }) => {
    const isFavorite = favoriteTemplates.has(template.id);

    if (viewMode === 'list') {
      return (
        <Card 
          className={`flex flex-row cursor-pointer transition-all hover:shadow-lg ${
            isSelected ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <div className="w-48 relative">
            <img
              src={template.previewImage}
              alt={template.name}
              className="w-full h-32 object-cover rounded-l-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/api/placeholder/400/300';
              }}
            />
            {template.isPremium && (
              <Crown className="absolute top-2 left-2 w-5 h-5 text-yellow-500" />
            )}
          </div>
          
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold">{template.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{template.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(template.id);
                  }}
                >
                  <Heart 
                    className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
                  />
                </Button>
                {template.isPremium && (
                  <Badge variant="secondary">
                    ${template.price}
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-1 mb-3">
              <Badge variant="outline">{template.category}</Badge>
              <Badge variant="outline">{template.style}</Badge>
              {template.features.slice(0, 3).map(feature => (
                <Badge key={feature} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  {template.rating}
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {template.downloads}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    openPreview(template);
                  }}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Preview
                </Button>
                <Button
                  size="sm"
                  onClick={() => onTemplateSelect(template)}
                >
                  Use Template
                </Button>
              </div>
            </div>
          </div>
        </Card>
      );
    }

    return (
      <Card 
        className={`cursor-pointer transition-all hover:shadow-lg ${
          isSelected ? 'ring-2 ring-blue-500' : ''
        }`}
        onClick={() => onTemplateSelect(template)}
      >
        <div className="relative">
          <img
            src={template.previewImage}
            alt={template.name}
            className="w-full h-48 object-cover rounded-t-lg"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/api/placeholder/400/300';
            }}
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100">
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  openPreview(template);
                }}
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
              {template.demoUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(template.demoUrl, '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Premium badge */}
          {template.isPremium && (
            <div className="absolute top-2 left-2">
              <Crown className="w-5 h-5 text-yellow-500" />
            </div>
          )}

          {/* Favorite button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(template.id);
            }}
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} 
            />
          </Button>
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{template.name}</CardTitle>
            {template.isPremium && (
              <Badge variant="secondary">
                ${template.price}
              </Badge>
            )}
          </div>
          <CardDescription className="text-sm">
            {template.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-1 mb-3">
            <Badge variant="outline" className="text-xs">{template.category}</Badge>
            <Badge variant="outline" className="text-xs">{template.style}</Badge>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {template.features.slice(0, 4).map(feature => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              {template.rating}
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              {template.downloads}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  // Filter sidebar component
  const FilterSidebar: React.FC = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {TEMPLATE_CATEGORIES.map(({ value, label }) => (
            <label key={value} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.category?.includes(value) || false}
                onChange={() => handleCategoryToggle(value)}
                className="mr-2"
              />
              <span className="text-sm">{label}</span>
              <span className="text-xs text-gray-500 ml-auto">
                ({templateCollection.categories.find(c => c.category === value)?.count || 0})
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Style</h3>
        <div className="space-y-2">
          {['modern', 'classic', 'minimal', 'bold', 'elegant', 'playful', 'professional'].map(style => (
            <label key={style} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.style?.includes(style as TemplateStyle) || false}
                onChange={() => handleStyleToggle(style as TemplateStyle)}
                className="mr-2"
              />
              <span className="text-sm capitalize">{style}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Features</h3>
        <div className="space-y-2">
          {['responsive', 'dark-mode', 'animations', 'contact-form', 'gallery', 'blog', 'ecommerce'].map(feature => (
            <label key={feature} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.features?.includes(feature as TemplateFeature) || false}
                onChange={() => handleFeatureToggle(feature as TemplateFeature)}
                className="mr-2"
              />
              <span className="text-sm">{feature.replace('-', ' ')}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              checked={filters.isPremium === false}
              onChange={() => handleFilterChange('isPremium', false)}
              className="mr-2"
            />
            <span className="text-sm">Free</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              checked={filters.isPremium === true}
              onChange={() => handleFilterChange('isPremium', true)}
              className="mr-2"
            />
            <span className="text-sm">Premium</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="price"
              checked={filters.isPremium === undefined}
              onChange={() => handleFilterChange('isPremium', undefined)}
              className="mr-2"
            />
            <span className="text-sm">All</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Rating</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map(rating => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => handleFilterChange('rating', rating)}
                className="mr-2"
              />
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm">{rating}+ & up</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Template Marketplace</h2>
        <p className="text-gray-600">
          Choose from professional templates and customize them to your needs
        </p>
      </div>

      {/* Search and Controls */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>

          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="popularity">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>

          <div className="flex border rounded-lg">
            <Button
              variant={viewMode.type === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode({ type: 'grid', columns: 3 })}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode.type === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode({ type: 'list', columns: 1 })}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filter Sidebar */}
        <div className={`w-64 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <Card className="p-4">
            <FilterSidebar />
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Summary */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">
              Showing {templateCollection.templates.length} of {templateCollection.total} templates
            </p>
          </div>

          {/* Template Grid/List */}
          <div className={`grid gap-6 ${
            viewMode.type === 'grid' 
              ? `grid-cols-1 md:grid-cols-2 lg:grid-cols-${viewMode.columns}` 
              : 'grid-cols-1'
          }`}>
            {templateCollection.templates.map(template => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={selectedTemplate?.id === template.id}
                viewMode={viewMode.type}
              />
            ))}
          </div>

          {/* Pagination */}
          {templateCollection.totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-1">
                {Array.from({ length: templateCollection.totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                disabled={currentPage === templateCollection.totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  {previewTemplate.name}
                  {previewTemplate.isPremium && (
                    <Crown className="w-5 h-5 text-yellow-500 ml-2" />
                  )}
                </CardTitle>
                <CardDescription>{previewTemplate.description}</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewTemplate(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={previewTemplate.previewImage}
                    alt={previewTemplate.name}
                    className="w-full rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/api/placeholder/800/600';
                    }}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Template Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {previewTemplate.features.map(feature => (
                        <Badge key={feature} variant="secondary">
                          {feature.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Color Scheme</h3>
                    <div className="flex space-x-2">
                      {[
                        previewTemplate.colorScheme.primary,
                        previewTemplate.colorScheme.secondary,
                        previewTemplate.colorScheme.accent
                      ].map((color, index) => (
                        <div
                          key={index}
                          className="w-8 h-8 rounded-full border"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    {onColorSchemeApply && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => onColorSchemeApply(previewTemplate.colorScheme)}
                      >
                        <Palette className="w-4 h-4 mr-2" />
                        Apply Color Scheme
                      </Button>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Statistics</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
                        {previewTemplate.rating} rating
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {previewTemplate.downloads} downloads
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button
                      onClick={() => {
                        onTemplateSelect(previewTemplate);
                        setPreviewTemplate(null);
                      }}
                      className="flex-1"
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Use This Template
                    </Button>
                    {previewTemplate.demoUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(previewTemplate.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};