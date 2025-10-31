import { ColorScheme } from './color-scheme-utils';
import { WebsiteTemplate } from './template-utils';

export interface ThemeCustomizations {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
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
  customCSS?: string;
  metadata?: {
    tags: string[];
    category: string;
    isPublic: boolean;
    likes: number;
    downloads: number;
  };
}

export interface ThemeExport {
  theme: ThemeCustomizations;
  cssVariables: Record<string, string>;
  generatedCSS: string;
  assets?: {
    fonts: string[];
    images: string[];
  };
}

export class ThemeManager {
  private static STORAGE_KEY = 'website-builder-themes';
  private static ACTIVE_THEME_KEY = 'website-builder-active-theme';

  /**
   * Save a theme to localStorage
   */
  static saveTheme(theme: Omit<ThemeCustomizations, 'id' | 'createdAt' | 'updatedAt'>): ThemeCustomizations {
    const savedTheme: ThemeCustomizations = {
      ...theme,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const themes = this.getAllThemes();
    themes.push(savedTheme);
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(themes));
    return savedTheme;
  }

  /**
   * Get all saved themes
   */
  static getAllThemes(): ThemeCustomizations[] {
    try {
      const themes = localStorage.getItem(this.STORAGE_KEY);
      return themes ? JSON.parse(themes) : [];
    } catch (error) {
      console.error('Error loading themes:', error);
      return [];
    }
  }

  /**
   * Get a theme by ID
   */
  static getThemeById(id: string): ThemeCustomizations | null {
    const themes = this.getAllThemes();
    return themes.find(theme => theme.id === id) || null;
  }

  /**
   * Update a theme
   */
  static updateTheme(id: string, updates: Partial<ThemeCustomizations>): ThemeCustomizations | null {
    const themes = this.getAllThemes();
    const themeIndex = themes.findIndex(theme => theme.id === id);
    
    if (themeIndex === -1) return null;

    const updatedTheme = {
      ...themes[themeIndex],
      ...updates,
      updatedAt: new Date()
    };

    themes[themeIndex] = updatedTheme;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(themes));
    
    return updatedTheme;
  }

  /**
   * Delete a theme
   */
  static deleteTheme(id: string): boolean {
    const themes = this.getAllThemes();
    const filteredThemes = themes.filter(theme => theme.id !== id);
    
    if (filteredThemes.length === themes.length) return false;

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredThemes));
    return true;
  }

  /**
   * Set active theme
   */
  static setActiveTheme(theme: ThemeCustomizations): void {
    localStorage.setItem(this.ACTIVE_THEME_KEY, JSON.stringify(theme));
    this.applyThemeToDocument(theme);
  }

  /**
   * Get active theme
   */
  static getActiveTheme(): ThemeCustomizations | null {
    try {
      const theme = localStorage.getItem(this.ACTIVE_THEME_KEY);
      return theme ? JSON.parse(theme) : null;
    } catch (error) {
      console.error('Error loading active theme:', error);
      return null;
    }
  }

  /**
   * Apply theme to document
   */
  static applyThemeToDocument(theme: ThemeCustomizations): void {
    const root = document.documentElement;
    const cssVariables = this.generateCSSVariables(theme);

    // Apply CSS variables
    Object.entries(cssVariables).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Apply custom CSS if provided
    if (theme.customCSS) {
      this.injectCustomCSS(theme.customCSS, theme.id);
    }

    // Load Google Fonts if needed
    this.loadGoogleFonts([theme.typography.primaryFont, theme.typography.secondaryFont]);
  }

  /**
   * Generate CSS variables from theme
   */
  static generateCSSVariables(theme: ThemeCustomizations): Record<string, string> {
    const { colorScheme, typography, spacing, borderRadius, animations } = theme;

    return {
      // Colors
      '--color-primary': colorScheme.primary,
      '--color-primary-foreground': this.getContrastColor(colorScheme.primary),
      '--color-secondary': colorScheme.secondary,
      '--color-secondary-foreground': this.getContrastColor(colorScheme.secondary),
      '--color-accent': colorScheme.accent,
      '--color-accent-foreground': this.getContrastColor(colorScheme.accent),
      '--color-background': colorScheme.background,
      '--color-foreground': colorScheme.text,
      '--color-surface': colorScheme.surface,
      '--color-surface-foreground': this.getContrastColor(colorScheme.surface),
      '--color-muted': colorScheme.textSecondary,
      '--color-muted-foreground': this.getContrastColor(colorScheme.textSecondary || '#666666'),
      '--color-success': colorScheme.success,
      '--color-warning': colorScheme.warning,
      '--color-error': colorScheme.error,
      '--color-info': colorScheme.info,

      // Typography
      '--font-family-primary': typography.primaryFont,
      '--font-family-secondary': typography.secondaryFont,
      '--font-size-base': `${typography.baseSize}px`,
      '--line-height-base': typography.lineHeight.toString(),
      '--font-weight-normal': typography.fontWeights.normal.toString(),
      '--font-weight-medium': typography.fontWeights.medium.toString(),
      '--font-weight-bold': typography.fontWeights.bold.toString(),

      // Font sizes (based on modular scale)
      '--font-size-xs': `${typography.baseSize * 0.75}px`,
      '--font-size-sm': `${typography.baseSize * 0.875}px`,
      '--font-size-md': `${typography.baseSize}px`,
      '--font-size-lg': `${typography.baseSize * 1.125}px`,
      '--font-size-xl': `${typography.baseSize * 1.25}px`,
      '--font-size-2xl': `${typography.baseSize * 1.5}px`,
      '--font-size-3xl': `${typography.baseSize * 1.875}px`,
      '--font-size-4xl': `${typography.baseSize * 2.25}px`,

      // Spacing
      '--spacing-scale': spacing.scale.toString(),
      '--container-max-width': spacing.containerMaxWidth,
      '--section-padding': spacing.sectionPadding,
      '--element-spacing': spacing.elementSpacing,

      // Spacing scale (based on base spacing)
      '--spacing-xs': `${spacing.scale * 0.25}rem`,
      '--spacing-sm': `${spacing.scale * 0.5}rem`,
      '--spacing-md': `${spacing.scale * 1}rem`,
      '--spacing-lg': `${spacing.scale * 1.5}rem`,
      '--spacing-xl': `${spacing.scale * 2}rem`,
      '--spacing-2xl': `${spacing.scale * 3}rem`,
      '--spacing-3xl': `${spacing.scale * 4}rem`,

      // Border radius
      '--radius-sm': borderRadius.small,
      '--radius-md': borderRadius.medium,
      '--radius-lg': borderRadius.large,
      '--radius-full': '9999px',

      // Animations
      '--animation-duration': animations.enabled ? animations.duration : '0s',
      '--animation-easing': animations.easing,

      // Shadows (generated from theme colors)
      '--shadow-sm': `0 1px 2px 0 ${colorScheme.text}10`,
      '--shadow-md': `0 4px 6px -1px ${colorScheme.text}10, 0 2px 4px -1px ${colorScheme.text}06`,
      '--shadow-lg': `0 10px 15px -3px ${colorScheme.text}10, 0 4px 6px -2px ${colorScheme.text}05`,
      '--shadow-xl': `0 20px 25px -5px ${colorScheme.text}10, 0 10px 10px -5px ${colorScheme.text}04`,

      // Layout
      '--header-height': theme.layout.headerStyle === 'fixed' ? '4rem' : 'auto',
      '--footer-height': 'auto',
    };
  }

  /**
   * Export theme to JSON
   */
  static exportTheme(theme: ThemeCustomizations): ThemeExport {
    const cssVariables = this.generateCSSVariables(theme);
    const generatedCSS = this.generateCSS(theme, cssVariables);

    return {
      theme,
      cssVariables,
      generatedCSS,
      assets: {
        fonts: this.extractFonts(theme),
        images: [] // Could be expanded to include theme-related images
      }
    };
  }

  /**
   * Import theme from JSON
   */
  static importTheme(themeExport: ThemeExport): ThemeCustomizations {
    const theme = {
      ...themeExport.theme,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.saveTheme(theme);
  }

  /**
   * Generate complete CSS from theme
   */
  private static generateCSS(theme: ThemeCustomizations, cssVariables: Record<string, string>): string {
    const variablesCSS = Object.entries(cssVariables)
      .map(([property, value]) => `  ${property}: ${value};`)
      .join('\n');

    return `
:root {
${variablesCSS}
}

/* Base styles */
* {
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-primary), system-ui, -apple-system, sans-serif;
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--color-foreground);
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin: 0 0 var(--spacing-md) 0;
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-md); }

p {
  margin: 0 0 var(--spacing-md) 0;
}

/* Layout */
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section {
  padding: var(--section-padding) 0;
}

/* Components */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--animation-duration) var(--animation-easing);
  text-decoration: none;
  gap: var(--spacing-xs);
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-secondary-foreground);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
}

.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-muted);
}

/* Responsive */
@media (max-width: ${theme.responsive.breakpoints.tablet}) {
  :root {
    --font-size-base: ${theme.typography.baseSize * theme.responsive.scaling.tablet}px;
  }
}

@media (max-width: ${theme.responsive.breakpoints.mobile}) {
  :root {
    --font-size-base: ${theme.typography.baseSize * theme.responsive.scaling.mobile}px;
  }
  
  .container {
    padding: 0 var(--spacing-sm);
  }
}

/* Animation preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Custom CSS */
${theme.customCSS || ''}
    `.trim();
  }

  /**
   * Get contrast color (simplified version)
   */
  private static getContrastColor(backgroundColor: string): string {
    // Simple contrast calculation - in production, use a proper color library
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.5 ? '#000000' : '#ffffff';
  }

  /**
   * Extract fonts from theme
   */
  private static extractFonts(theme: ThemeCustomizations): string[] {
    const fonts = [theme.typography.primaryFont, theme.typography.secondaryFont];
    if (theme.typography.accentFont) {
      fonts.push(theme.typography.accentFont);
    }
    return [...new Set(fonts)];
  }

  /**
   * Load Google Fonts
   */
  private static loadGoogleFonts(fonts: string[]): void {
    const googleFonts = fonts.filter(font => 
      !['Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana', 'serif', 'sans-serif', 'monospace'].includes(font)
    );

    if (googleFonts.length === 0) return;

    const fontFamilies = googleFonts.map(font => font.replace(' ', '+')).join('|');
    const fontWeights = '300,400,500,600,700';
    const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies}:wght@${fontWeights}&display=swap`;

    // Check if font link already exists
    const existingLink = document.querySelector(`link[href*="fonts.googleapis.com"]`);
    if (existingLink) {
      existingLink.setAttribute('href', fontUrl);
    } else {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = fontUrl;
      document.head.appendChild(link);
    }
  }

  /**
   * Inject custom CSS
   */
  private static injectCustomCSS(css: string, themeId: string): void {
    const styleId = `theme-custom-css-${themeId}`;
    
    // Remove existing custom CSS
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add new custom CSS
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  /**
   * Generate unique ID
   */
  private static generateId(): string {
    return `theme-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Clone a theme
   */
  static cloneTheme(theme: ThemeCustomizations, newName?: string): ThemeCustomizations {
    const clonedTheme = {
      ...theme,
      id: this.generateId(),
      name: newName || `${theme.name} (Copy)`,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return this.saveTheme(clonedTheme);
  }

  /**
   * Search themes
   */
  static searchThemes(query: string): ThemeCustomizations[] {
    const themes = this.getAllThemes();
    const lowercaseQuery = query.toLowerCase();

    return themes.filter(theme =>
      theme.name.toLowerCase().includes(lowercaseQuery) ||
      theme.description?.toLowerCase().includes(lowercaseQuery) ||
      theme.template.name.toLowerCase().includes(lowercaseQuery) ||
      theme.colorScheme.name.toLowerCase().includes(lowercaseQuery) ||
      theme.metadata?.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  /**
   * Get themes by category
   */
  static getThemesByCategory(category: string): ThemeCustomizations[] {
    const themes = this.getAllThemes();
    return themes.filter(theme => 
      theme.template.category === category ||
      theme.metadata?.category === category
    );
  }

  /**
   * Get popular themes (by likes/downloads)
   */
  static getPopularThemes(limit: number = 10): ThemeCustomizations[] {
    const themes = this.getAllThemes();
    return themes
      .sort((a, b) => (b.metadata?.likes || 0) - (a.metadata?.likes || 0))
      .slice(0, limit);
  }

  /**
   * Get recent themes
   */
  static getRecentThemes(limit: number = 10): ThemeCustomizations[] {
    const themes = this.getAllThemes();
    return themes
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
}

export default ThemeManager;