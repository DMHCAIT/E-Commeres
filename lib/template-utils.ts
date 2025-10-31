import { ColorScheme } from './color-scheme-utils';

// Template Categories and Types
export type TemplateCategory = 
  | 'ecommerce' 
  | 'portfolio' 
  | 'blog' 
  | 'corporate' 
  | 'event' 
  | 'community' 
  | 'creative' 
  | 'landing-page'
  | 'restaurant'
  | 'real-estate'
  | 'health'
  | 'education'
  | 'non-profit';

export type TemplateStyle = 
  | 'modern' 
  | 'classic' 
  | 'minimal' 
  | 'bold' 
  | 'elegant' 
  | 'playful' 
  | 'professional';

export type TemplateFeature = 
  | 'responsive' 
  | 'dark-mode' 
  | 'animations' 
  | 'contact-form' 
  | 'gallery' 
  | 'blog' 
  | 'ecommerce' 
  | 'booking' 
  | 'multi-language'
  | 'seo-optimized';

// Template Interface
export interface WebsiteTemplate {
  id: string;
  name: string;
  description: string;
  category: TemplateCategory;
  style: TemplateStyle;
  features: TemplateFeature[];
  previewImage: string;
  thumbnails: string[];
  demoUrl?: string;
  tags: string[];
  popularity: number;
  rating: number;
  isPremium: boolean;
  price?: number;
  
  // Design specifications
  colorScheme: ColorScheme;
  fonts: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
  
  // Template structure
  pages: TemplatePageStructure[];
  components: TemplateComponent[];
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  author: string;
  downloads: number;
  version: string;
}

export interface TemplatePageStructure {
  id: string;
  name: string;
  slug: string;
  isHomePage: boolean;
  sections: TemplateSectionStructure[];
  seoSettings: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface TemplateSectionStructure {
  id: string;
  type: 'hero' | 'about' | 'services' | 'portfolio' | 'testimonials' | 'contact' | 'footer' | 'navbar' | 'features' | 'pricing' | 'team' | 'blog' | 'cta';
  name: string;
  order: number;
  isRequired: boolean;
  props: Record<string, any>;
  content: Record<string, any>;
}

export interface TemplateComponent {
  id: string;
  name: string;
  type: string;
  category: string;
  props: Record<string, any>;
  craftJsConfig: any;
}

// Template Filter Options
export interface TemplateFilters {
  category?: TemplateCategory[];
  style?: TemplateStyle[];
  features?: TemplateFeature[];
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  isPremium?: boolean;
  sortBy?: 'popularity' | 'rating' | 'newest' | 'name' | 'price';
  sortOrder?: 'asc' | 'desc';
}

export interface TemplateSearchOptions {
  query?: string;
  filters?: TemplateFilters;
  page?: number;
  limit?: number;
}

// Template Collection Interface
export interface TemplateCollection {
  templates: WebsiteTemplate[];
  total: number;
  page: number;
  totalPages: number;
  categories: { category: TemplateCategory; count: number }[];
  styles: { style: TemplateStyle; count: number }[];
  features: { feature: TemplateFeature; count: number }[];
}

// Pre-defined Template Data
export const TEMPLATE_CATEGORIES: { value: TemplateCategory; label: string; description: string }[] = [
  {
    value: 'ecommerce',
    label: 'E-commerce',
    description: 'Online stores, product catalogs, shopping carts'
  },
  {
    value: 'portfolio',
    label: 'Portfolio',
    description: 'Showcases for photographers, artists, designers'
  },
  {
    value: 'blog',
    label: 'Blog & Magazine',
    description: 'News sites, personal blogs, content platforms'
  },
  {
    value: 'corporate',
    label: 'Corporate & Business',
    description: 'Company websites, professional services'
  },
  {
    value: 'event',
    label: 'Event & Booking',
    description: 'Conferences, weddings, hotel bookings'
  },
  {
    value: 'community',
    label: 'Community',
    description: 'Forums, social groups, educational platforms'
  },
  {
    value: 'creative',
    label: 'Creative & Agency',
    description: 'Marketing agencies, design studios, personal brands'
  },
  {
    value: 'landing-page',
    label: 'Landing Pages',
    description: 'Product launches, campaigns, lead generation'
  },
  {
    value: 'restaurant',
    label: 'Restaurant & Food',
    description: 'Restaurants, cafes, food delivery services'
  },
  {
    value: 'real-estate',
    label: 'Real Estate',
    description: 'Property listings, real estate agencies'
  },
  {
    value: 'health',
    label: 'Health & Wellness',
    description: 'Medical practices, fitness, wellness centers'
  },
  {
    value: 'education',
    label: 'Education',
    description: 'Schools, online courses, educational institutions'
  },
  {
    value: 'non-profit',
    label: 'Non-Profit',
    description: 'Charities, foundations, community organizations'
  }
];

// Sample Templates (for demonstration)
export const SAMPLE_TEMPLATES: WebsiteTemplate[] = [
  {
    id: 'modern-ecommerce-1',
    name: 'ModernShop Pro',
    description: 'A sleek and modern e-commerce template with product galleries, shopping cart, and checkout functionality.',
    category: 'ecommerce',
    style: 'modern',
    features: ['responsive', 'ecommerce', 'animations', 'seo-optimized'],
    previewImage: '/templates/modern-ecommerce-1/preview.jpg',
    thumbnails: [
      '/templates/modern-ecommerce-1/thumb1.jpg',
      '/templates/modern-ecommerce-1/thumb2.jpg',
      '/templates/modern-ecommerce-1/thumb3.jpg'
    ],
    demoUrl: 'https://demo.modernshop-pro.com',
    tags: ['fashion', 'electronics', 'modern', 'clean'],
    popularity: 95,
    rating: 4.8,
    isPremium: true,
    price: 49,
    colorScheme: {
      id: 'modern-blue',
      name: 'Modern Blue',
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#06b6d4',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6'
    },
    fonts: {
      primary: 'Inter',
      secondary: 'Roboto',
      accent: 'Playfair Display'
    },
    pages: [
      {
        id: 'home',
        name: 'Home',
        slug: '/',
        isHomePage: true,
        sections: [
          {
            id: 'navbar',
            type: 'navbar',
            name: 'Navigation',
            order: 0,
            isRequired: true,
            props: { logo: 'ModernShop', menuItems: ['Shop', 'About', 'Contact'] },
            content: {}
          },
          {
            id: 'hero',
            type: 'hero',
            name: 'Hero Section',
            order: 1,
            isRequired: true,
            props: { 
              title: 'Discover Amazing Products', 
              subtitle: 'Shop the latest trends with confidence',
              ctaText: 'Shop Now'
            },
            content: {}
          }
        ],
        seoSettings: {
          title: 'ModernShop Pro - Premium E-commerce Template',
          description: 'A modern, responsive e-commerce template perfect for online stores',
          keywords: ['ecommerce', 'shop', 'modern', 'responsive']
        }
      }
    ],
    components: [],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-03-01T14:30:00Z',
    author: 'TemplateStudio',
    downloads: 1250,
    version: '2.1.0'
  },
  {
    id: 'creative-portfolio-1',
    name: 'ArtisticVision',
    description: 'A stunning portfolio template for photographers and creative professionals.',
    category: 'portfolio',
    style: 'elegant',
    features: ['responsive', 'gallery', 'animations', 'dark-mode'],
    previewImage: '/templates/creative-portfolio-1/preview.jpg',
    thumbnails: [
      '/templates/creative-portfolio-1/thumb1.jpg',
      '/templates/creative-portfolio-1/thumb2.jpg'
    ],
    demoUrl: 'https://demo.artisticvision.com',
    tags: ['photography', 'creative', 'portfolio', 'elegant'],
    popularity: 87,
    rating: 4.9,
    isPremium: false,
    colorScheme: {
      id: 'elegant-purple',
      name: 'Elegant Purple',
      primary: '#7c3aed',
      secondary: '#a855f7',
      accent: '#ec4899',
      background: '#ffffff',
      surface: '#faf5ff',
      text: '#1f2937',
      textSecondary: '#6b7280',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      info: '#2563eb'
    },
    fonts: {
      primary: 'Playfair Display',
      secondary: 'Source Sans Pro'
    },
    pages: [
      {
        id: 'home',
        name: 'Home',
        slug: '/',
        isHomePage: true,
        sections: [
          {
            id: 'hero',
            type: 'hero',
            name: 'Hero Gallery',
            order: 0,
            isRequired: true,
            props: { 
              title: 'Creative Vision', 
              subtitle: 'Capturing moments that matter',
              galleryImages: []
            },
            content: {}
          }
        ],
        seoSettings: {
          title: 'ArtisticVision - Creative Portfolio Template',
          description: 'Showcase your creative work with this elegant portfolio template',
          keywords: ['portfolio', 'photography', 'creative', 'gallery']
        }
      }
    ],
    components: [],
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-02-28T16:20:00Z',
    author: 'CreativeTemplates',
    downloads: 850,
    version: '1.3.0'
  },
  {
    id: 'corporate-business-1',
    name: 'BusinessPro Elite',
    description: 'Professional corporate template perfect for consulting firms and business services.',
    category: 'corporate',
    style: 'professional',
    features: ['responsive', 'contact-form', 'blog', 'seo-optimized'],
    previewImage: '/templates/corporate-business-1/preview.jpg',
    thumbnails: [
      '/templates/corporate-business-1/thumb1.jpg',
      '/templates/corporate-business-1/thumb2.jpg',
      '/templates/corporate-business-1/thumb3.jpg'
    ],
    demoUrl: 'https://demo.businesspro-elite.com',
    tags: ['corporate', 'business', 'professional', 'consulting'],
    popularity: 92,
    rating: 4.7,
    isPremium: true,
    price: 39,
    colorScheme: {
      id: 'corporate-blue',
      name: 'Corporate Professional',
      primary: '#1d4ed8',
      secondary: '#1e40af',
      accent: '#059669',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1f2937',
      textSecondary: '#6b7280',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#2563eb'
    },
    fonts: {
      primary: 'Roboto',
      secondary: 'Open Sans'
    },
    pages: [
      {
        id: 'home',
        name: 'Home',
        slug: '/',
        isHomePage: true,
        sections: [
          {
            id: 'hero',
            type: 'hero',
            name: 'Hero Section',
            order: 0,
            isRequired: true,
            props: { 
              title: 'Professional Business Solutions', 
              subtitle: 'Driving growth through strategic consulting',
              ctaText: 'Get Started'
            },
            content: {}
          }
        ],
        seoSettings: {
          title: 'BusinessPro Elite - Corporate Website Template',
          description: 'Professional corporate template for business services and consulting',
          keywords: ['corporate', 'business', 'consulting', 'professional']
        }
      }
    ],
    components: [],
    createdAt: '2024-01-20T11:30:00Z',
    updatedAt: '2024-03-05T13:45:00Z',
    author: 'ProTemplates',
    downloads: 920,
    version: '1.8.0'
  }
];

// Template Management Utilities
export class TemplateManager {
  /**
   * Search and filter templates
   */
  static searchTemplates(
    templates: WebsiteTemplate[],
    options: TemplateSearchOptions = {}
  ): TemplateCollection {
    const { query = '', filters = {}, page = 1, limit = 12 } = options;
    
    let filteredTemplates = [...templates];

    // Text search
    if (query) {
      const searchTerm = query.toLowerCase();
      filteredTemplates = filteredTemplates.filter(template => 
        template.name.toLowerCase().includes(searchTerm) ||
        template.description.toLowerCase().includes(searchTerm) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Category filter
    if (filters.category && filters.category.length > 0) {
      filteredTemplates = filteredTemplates.filter(template =>
        filters.category!.includes(template.category)
      );
    }

    // Style filter
    if (filters.style && filters.style.length > 0) {
      filteredTemplates = filteredTemplates.filter(template =>
        filters.style!.includes(template.style)
      );
    }

    // Features filter
    if (filters.features && filters.features.length > 0) {
      filteredTemplates = filteredTemplates.filter(template =>
        filters.features!.some(feature => template.features.includes(feature))
      );
    }

    // Price filter
    if (filters.priceRange) {
      filteredTemplates = filteredTemplates.filter(template => {
        const price = template.price || 0;
        return price >= filters.priceRange!.min && price <= filters.priceRange!.max;
      });
    }

    // Premium filter
    if (filters.isPremium !== undefined) {
      filteredTemplates = filteredTemplates.filter(template =>
        template.isPremium === filters.isPremium
      );
    }

    // Rating filter
    if (filters.rating) {
      filteredTemplates = filteredTemplates.filter(template =>
        template.rating >= filters.rating!
      );
    }

    // Sorting
    if (filters.sortBy) {
      filteredTemplates.sort((a, b) => {
        let aValue: any, bValue: any;
        
        switch (filters.sortBy) {
          case 'popularity':
            aValue = a.popularity;
            bValue = b.popularity;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'newest':
            aValue = new Date(a.createdAt).getTime();
            bValue = new Date(b.createdAt).getTime();
            break;
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'price':
            aValue = a.price || 0;
            bValue = b.price || 0;
            break;
          default:
            return 0;
        }

        if (filters.sortOrder === 'desc') {
          return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
        } else {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        }
      });
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTemplates = filteredTemplates.slice(startIndex, endIndex);

    // Generate statistics
    const categories = this.generateCategoryStats(templates);
    const styles = this.generateStyleStats(templates);
    const features = this.generateFeatureStats(templates);

    return {
      templates: paginatedTemplates,
      total: filteredTemplates.length,
      page,
      totalPages: Math.ceil(filteredTemplates.length / limit),
      categories,
      styles,
      features
    };
  }

  /**
   * Generate category statistics
   */
  private static generateCategoryStats(templates: WebsiteTemplate[]): { category: TemplateCategory; count: number }[] {
    const categoryMap = new Map<TemplateCategory, number>();
    
    templates.forEach(template => {
      const current = categoryMap.get(template.category) || 0;
      categoryMap.set(template.category, current + 1);
    });

    return Array.from(categoryMap.entries()).map(([category, count]) => ({
      category,
      count
    }));
  }

  /**
   * Generate style statistics
   */
  private static generateStyleStats(templates: WebsiteTemplate[]): { style: TemplateStyle; count: number }[] {
    const styleMap = new Map<TemplateStyle, number>();
    
    templates.forEach(template => {
      const current = styleMap.get(template.style) || 0;
      styleMap.set(template.style, current + 1);
    });

    return Array.from(styleMap.entries()).map(([style, count]) => ({
      style,
      count
    }));
  }

  /**
   * Generate feature statistics
   */
  private static generateFeatureStats(templates: WebsiteTemplate[]): { feature: TemplateFeature; count: number }[] {
    const featureMap = new Map<TemplateFeature, number>();
    
    templates.forEach(template => {
      template.features.forEach(feature => {
        const current = featureMap.get(feature) || 0;
        featureMap.set(feature, current + 1);
      });
    });

    return Array.from(featureMap.entries()).map(([feature, count]) => ({
      feature,
      count
    }));
  }

  /**
   * Get recommended templates based on user preferences
   */
  static getRecommendedTemplates(
    templates: WebsiteTemplate[],
    userPreferences: {
      categories?: TemplateCategory[];
      styles?: TemplateStyle[];
      features?: TemplateFeature[];
    },
    limit: number = 6
  ): WebsiteTemplate[] {
    // Score templates based on user preferences
    const scoredTemplates = templates.map(template => {
      let score = 0;

      // Category match
      if (userPreferences.categories?.includes(template.category)) {
        score += 3;
      }

      // Style match
      if (userPreferences.styles?.includes(template.style)) {
        score += 2;
      }

      // Feature matches
      if (userPreferences.features) {
        const featureMatches = template.features.filter(feature =>
          userPreferences.features!.includes(feature)
        ).length;
        score += featureMatches;
      }

      // Add popularity and rating to score
      score += (template.popularity / 100) * 2;
      score += template.rating;

      return { template, score };
    });

    // Sort by score and return top templates
    return scoredTemplates
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.template);
  }

  /**
   * Apply color scheme to template
   */
  static applyColorSchemeToTemplate(
    template: WebsiteTemplate,
    colorScheme: ColorScheme
  ): WebsiteTemplate {
    return {
      ...template,
      colorScheme,
      // Update component props with new colors
      components: template.components.map(component => ({
        ...component,
        props: {
          ...component.props,
          primaryColor: colorScheme.primary,
          secondaryColor: colorScheme.secondary,
          accentColor: colorScheme.accent,
          backgroundColor: colorScheme.background,
          textColor: colorScheme.text
        }
      }))
    };
  }

  /**
   * Customize template with user preferences
   */
  static customizeTemplate(
    template: WebsiteTemplate,
    customizations: {
      name?: string;
      colorScheme?: ColorScheme;
      fonts?: {
        primary?: string;
        secondary?: string;
        accent?: string;
      };
      content?: Record<string, any>;
    }
  ): WebsiteTemplate {
    const customized = { ...template };

    if (customizations.name) {
      customized.name = customizations.name;
    }

    if (customizations.colorScheme) {
      customized.colorScheme = customizations.colorScheme;
    }

    if (customizations.fonts) {
      customized.fonts = {
        ...customized.fonts,
        ...customizations.fonts
      };
    }

    if (customizations.content) {
      // Update page content
      customized.pages = customized.pages.map(page => ({
        ...page,
        sections: page.sections.map(section => ({
          ...section,
          content: {
            ...section.content,
            ...customizations.content
          }
        }))
      }));
    }

    return customized;
  }
}