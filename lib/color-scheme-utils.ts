import chroma from 'chroma-js';
import { colord } from 'colord';

// Color Scheme Types
export interface ColorScheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  category: 'modern' | 'classic' | 'vibrant' | 'minimal' | 'nature' | 'corporate';
}

export interface ColorGenerationOptions {
  baseColor: string;
  mode: 'analogous' | 'complementary' | 'triadic' | 'monochromatic' | 'tetradic';
  count: number;
  lightness?: number[];
  saturation?: number[];
}

// Pre-defined Color Schemes
export const DEFAULT_COLOR_SCHEMES: ColorScheme[] = [
  {
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
  {
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
  {
    id: 'nature-green',
    name: 'Nature Green',
    primary: '#059669',
    secondary: '#065f46',
    accent: '#84cc16',
    background: '#ffffff',
    surface: '#f0fdf4',
    text: '#1f2937',
    textSecondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4'
  },
  {
    id: 'warm-orange',
    name: 'Warm Orange',
    primary: '#ea580c',
    secondary: '#fb923c',
    accent: '#f59e0b',
    background: '#ffffff',
    surface: '#fffbeb',
    text: '#1f2937',
    textSecondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4'
  },
  {
    id: 'dark-theme',
    name: 'Dark Professional',
    primary: '#3b82f6',
    secondary: '#6366f1',
    accent: '#06b6d4',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  }
];

// Pre-defined Color Palettes
export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'ocean-blues',
    name: 'Ocean Blues',
    colors: ['#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e'],
    category: 'modern'
  },
  {
    id: 'sunset-warmth',
    name: 'Sunset Warmth',
    colors: ['#f97316', '#ea580c', '#dc2626', '#be123c', '#9f1239'],
    category: 'vibrant'
  },
  {
    id: 'forest-greens',
    name: 'Forest Greens',
    colors: ['#22c55e', '#16a34a', '#15803d', '#166534', '#14532d'],
    category: 'nature'
  },
  {
    id: 'minimal-grays',
    name: 'Minimal Grays',
    colors: ['#f8fafc', '#e2e8f0', '#94a3b8', '#64748b', '#1e293b'],
    category: 'minimal'
  },
  {
    id: 'corporate-blue',
    name: 'Corporate Professional',
    colors: ['#dbeafe', '#93c5fd', '#3b82f6', '#1d4ed8', '#1e3a8a'],
    category: 'corporate'
  }
];

// Color Generation Utilities
export class ColorSchemeGenerator {
  /**
   * Generate a color palette from a base color
   */
  static generatePalette(options: ColorGenerationOptions): string[] {
    const { baseColor, mode, count, lightness, saturation } = options;
    
    try {
      const base = chroma(baseColor);
      let colors: chroma.Color[] = [];

      switch (mode) {
        case 'analogous':
          colors = this.generateAnalogous(base, count);
          break;
        case 'complementary':
          colors = this.generateComplementary(base, count);
          break;
        case 'triadic':
          colors = this.generateTriadic(base, count);
          break;
        case 'monochromatic':
          colors = this.generateMonochromatic(base, count, lightness);
          break;
        case 'tetradic':
          colors = this.generateTetradic(base, count);
          break;
        default:
          colors = this.generateAnalogous(base, count);
      }

      return colors.map(color => color.hex());
    } catch (error) {
      console.error('Error generating color palette:', error);
      return [baseColor];
    }
  }

  /**
   * Generate analogous colors (adjacent on color wheel)
   */
  private static generateAnalogous(base: chroma.Color, count: number): chroma.Color[] {
    const colors = [base];
    const step = 30; // degrees
    
    for (let i = 1; i < count; i++) {
      const hue = (base.get('hsl.h') + (step * i)) % 360;
      colors.push(chroma.hsl(hue, base.get('hsl.s'), base.get('hsl.l')));
    }
    
    return colors;
  }

  /**
   * Generate complementary colors
   */
  private static generateComplementary(base: chroma.Color, count: number): chroma.Color[] {
    const colors = [base];
    const complement = chroma.hsl((base.get('hsl.h') + 180) % 360, base.get('hsl.s'), base.get('hsl.l'));
    colors.push(complement);
    
    // Add variations
    for (let i = 2; i < count; i++) {
      const variation = i % 2 === 0 ? base : complement;
      const lightness = variation.get('hsl.l') * (0.7 + (i * 0.1));
      colors.push(chroma.hsl(variation.get('hsl.h'), variation.get('hsl.s'), Math.min(lightness, 0.9)));
    }
    
    return colors;
  }

  /**
   * Generate triadic colors (120 degrees apart)
   */
  private static generateTriadic(base: chroma.Color, count: number): chroma.Color[] {
    const colors = [base];
    const hue1 = (base.get('hsl.h') + 120) % 360;
    const hue2 = (base.get('hsl.h') + 240) % 360;
    
    colors.push(chroma.hsl(hue1, base.get('hsl.s'), base.get('hsl.l')));
    colors.push(chroma.hsl(hue2, base.get('hsl.s'), base.get('hsl.l')));
    
    // Add variations
    for (let i = 3; i < count; i++) {
      const baseIndex = i % 3;
      const lightness = colors[baseIndex].get('hsl.l') * (0.6 + ((i - 3) * 0.15));
      colors.push(chroma.hsl(
        colors[baseIndex].get('hsl.h'),
        colors[baseIndex].get('hsl.s'),
        Math.min(lightness, 0.95)
      ));
    }
    
    return colors;
  }

  /**
   * Generate monochromatic colors (same hue, different lightness)
   */
  private static generateMonochromatic(base: chroma.Color, count: number, lightness?: number[]): chroma.Color[] {
    const colors = [];
    const hue = base.get('hsl.h');
    const saturation = base.get('hsl.s');
    
    const lightnessValues = lightness || this.generateLightnessSteps(count);
    
    for (let i = 0; i < count; i++) {
      colors.push(chroma.hsl(hue, saturation, lightnessValues[i] || (0.2 + (i * 0.15))));
    }
    
    return colors;
  }

  /**
   * Generate tetradic colors (rectangle on color wheel)
   */
  private static generateTetradic(base: chroma.Color, count: number): chroma.Color[] {
    const colors = [base];
    const baseHue = base.get('hsl.h');
    
    colors.push(chroma.hsl((baseHue + 90) % 360, base.get('hsl.s'), base.get('hsl.l')));
    colors.push(chroma.hsl((baseHue + 180) % 360, base.get('hsl.s'), base.get('hsl.l')));
    colors.push(chroma.hsl((baseHue + 270) % 360, base.get('hsl.s'), base.get('hsl.l')));
    
    // Add variations
    for (let i = 4; i < count; i++) {
      const baseIndex = i % 4;
      const lightness = colors[baseIndex].get('hsl.l') * (0.7 + ((i - 4) * 0.1));
      colors.push(chroma.hsl(
        colors[baseIndex].get('hsl.h'),
        colors[baseIndex].get('hsl.s'),
        Math.min(lightness, 0.9)
      ));
    }
    
    return colors;
  }

  /**
   * Generate lightness steps for monochromatic colors
   */
  private static generateLightnessSteps(count: number): number[] {
    const steps = [];
    for (let i = 0; i < count; i++) {
      steps.push(0.1 + (i * (0.8 / (count - 1))));
    }
    return steps;
  }

  /**
   * Create a complete color scheme from a base color
   */
  static createColorScheme(baseColor: string, name: string): ColorScheme {
    try {
      const base = chroma(baseColor);
      const primary = base.hex();
      
      // Generate secondary color (analogous)
      const secondaryHue = (base.get('hsl.h') + 30) % 360;
      const secondary = chroma.hsl(secondaryHue, base.get('hsl.s') * 0.8, base.get('hsl.l')).hex();
      
      // Generate accent color (complementary)
      const accentHue = (base.get('hsl.h') + 180) % 360;
      const accent = chroma.hsl(accentHue, base.get('hsl.s'), base.get('hsl.l')).hex();
      
      // Generate neutral colors
      const background = '#ffffff';
      const surface = chroma.mix(base, '#ffffff', 0.95).hex();
      const text = '#1f2937';
      const textSecondary = '#6b7280';
      
      // Generate status colors
      const success = '#10b981';
      const warning = '#f59e0b';
      const error = '#ef4444';
      const info = primary;

      return {
        id: `custom-${Date.now()}`,
        name,
        primary,
        secondary,
        accent,
        background,
        surface,
        text,
        textSecondary,
        success,
        warning,
        error,
        info
      };
    } catch (error) {
      console.error('Error creating color scheme:', error);
      return DEFAULT_COLOR_SCHEMES[0];
    }
  }

  /**
   * Analyze color accessibility
   */
  static analyzeAccessibility(foreground: string, background: string): {
    contrast: number;
    wcagAA: boolean;
    wcagAAA: boolean;
  } {
    try {
      const contrast = chroma.contrast(foreground, background);
      return {
        contrast,
        wcagAA: contrast >= 4.5,
        wcagAAA: contrast >= 7
      };
    } catch (error) {
      return {
        contrast: 1,
        wcagAA: false,
        wcagAAA: false
      };
    }
  }

  /**
   * Get color information
   */
  static getColorInfo(color: string): {
    hex: string;
    rgb: [number, number, number];
    hsl: [number, number, number];
    luminance: number;
    temperature: 'warm' | 'cool' | 'neutral';
  } {
    try {
      const colorObj = chroma(color);
      const hsl = colorObj.hsl();
      const hue = hsl[0] || 0;
      
      let temperature: 'warm' | 'cool' | 'neutral' = 'neutral';
      if (hue >= 0 && hue <= 60) temperature = 'warm';
      else if (hue > 60 && hue <= 180) temperature = 'cool';
      else if (hue > 180 && hue <= 300) temperature = 'cool';
      else if (hue > 300 && hue <= 360) temperature = 'warm';

      return {
        hex: colorObj.hex(),
        rgb: colorObj.rgb() as [number, number, number],
        hsl: hsl as [number, number, number],
        luminance: colorObj.luminance(),
        temperature
      };
    } catch (error) {
      return {
        hex: '#000000',
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        luminance: 0,
        temperature: 'neutral'
      };
    }
  }
}

// AI-powered color suggestions (simplified implementation)
export class AIColorSuggestions {
  /**
   * Suggest colors based on brand/industry keywords
   */
  static suggestByKeywords(keywords: string[]): ColorScheme[] {
    const suggestions: { [key: string]: ColorScheme } = {
      'tech': {
        id: 'ai-tech',
        name: 'Tech Innovation',
        primary: '#2563eb',
        secondary: '#1e40af',
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
      'health': {
        id: 'ai-health',
        name: 'Healthcare Trust',
        primary: '#059669',
        secondary: '#047857',
        accent: '#06b6d4',
        background: '#ffffff',
        surface: '#f0fdf4',
        text: '#1f2937',
        textSecondary: '#6b7280',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#06b6d4'
      },
      'finance': {
        id: 'ai-finance',
        name: 'Financial Trust',
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
      'creative': {
        id: 'ai-creative',
        name: 'Creative Energy',
        primary: '#7c3aed',
        secondary: '#a855f7',
        accent: '#ec4899',
        background: '#ffffff',
        surface: '#faf5ff',
        text: '#1f2937',
        textSecondary: '#6b7280',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#7c3aed'
      }
    };

    const results: ColorScheme[] = [];
    keywords.forEach(keyword => {
      const match = Object.keys(suggestions).find(key => 
        keyword.toLowerCase().includes(key) || key.includes(keyword.toLowerCase())
      );
      if (match) {
        results.push(suggestions[match]);
      }
    });

    return results.length > 0 ? results : [DEFAULT_COLOR_SCHEMES[0]];
  }

  /**
   * Generate complementary suggestions for a given color scheme
   */
  static generateComplementarySuggestions(scheme: ColorScheme, count: number = 3): ColorScheme[] {
    const suggestions: ColorScheme[] = [];
    
    for (let i = 0; i < count; i++) {
      const variation = ColorSchemeGenerator.createColorScheme(
        scheme.primary,
        `${scheme.name} Variant ${i + 1}`
      );
      
      // Modify the variation to be different from the original
      const baseColor = chroma(scheme.primary);
      const newHue = (baseColor.get('hsl.h') + (i + 1) * 60) % 360;
      const newPrimary = chroma.hsl(newHue, baseColor.get('hsl.s'), baseColor.get('hsl.l')).hex();
      
      suggestions.push(ColorSchemeGenerator.createColorScheme(newPrimary, variation.name));
    }
    
    return suggestions;
  }
}