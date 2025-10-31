'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useEditor } from '@craftjs/core';
import {
  Type,
  Square,
  Image,
  Circle as ButtonIcon,
  Layout,
  Sparkles,
  MousePointer,
  Scroll,
  Play,
  Grid,
  Maximize as FlexGrow
} from 'lucide-react';

// Import our enhanced components
import { 
  EnhancedButton, 
  EnhancedCard, 
  EnhancedText, 
  EnhancedContainer, 
  EnhancedImage 
} from '../craft/EnhancedComponents';

interface ComponentPaletteProps {
  onComponentSelect?: (componentName: string) => void;
}

export const ComponentPalette: React.FC<ComponentPaletteProps> = ({
  onComponentSelect
}) => {
  const { connectors } = useEditor();
  const [activeCategory, setActiveCategory] = useState('basic');
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  const categories = [
    {
      id: 'basic',
      name: 'Basic',
      icon: Layout,
      components: [
        {
          id: 'text',
          name: 'Text',
          icon: Type,
          component: EnhancedText,
          preview: 'Aa',
          description: 'Add headings, paragraphs, and text content'
        },
        {
          id: 'button',
          name: 'Button',
          icon: ButtonIcon,
          component: EnhancedButton,
          preview: 'BTN',
          description: 'Interactive buttons with hover effects'
        },
        {
          id: 'image',
          name: 'Image',
          icon: Image,
          component: EnhancedImage,
          preview: '🖼️',
          description: 'Images with animation support'
        },
        {
          id: 'container',
          name: 'Container',
          icon: Square,
          component: EnhancedContainer,
          preview: '□',
          description: 'Flexible layout containers'
        }
      ]
    },
    {
      id: 'layout',
      name: 'Layout',
      icon: Grid,
      components: [
        {
          id: 'flex-container',
          name: 'Flex Container',
          icon: FlexGrow,
          component: EnhancedContainer,
          props: { layout: 'flex' },
          preview: '⟷',
          description: 'Flexbox layout container'
        },
        {
          id: 'grid-container',
          name: 'Grid Container',
          icon: Grid,
          component: EnhancedContainer,
          props: { layout: 'grid', gridCols: 2 },
          preview: '⊞',
          description: 'CSS Grid layout container'
        }
      ]
    },
    {
      id: 'content',
      name: 'Content',
      icon: Type,
      components: [
        {
          id: 'card',
          name: 'Card',
          icon: Square,
          component: EnhancedCard,
          preview: '📄',
          description: 'Content cards with headers and footers'
        },
        {
          id: 'hero-text',
          name: 'Hero Text',
          icon: Type,
          component: EnhancedText,
          props: { tagName: 'h1', children: 'Hero Title' },
          preview: 'H1',
          description: 'Large hero headings'
        }
      ]
    }
  ];

  const animationPresets = [
    { id: 'fadeIn', name: 'Fade In', icon: Sparkles },
    { id: 'slideUp', name: 'Slide Up', icon: MousePointer },
    { id: 'scaleIn', name: 'Scale In', icon: Play },
    { id: 'scrollFadeUp', name: 'Scroll Fade', icon: Scroll }
  ];

  const handleDragStart = (component: any) => {
    return (e: React.DragEvent) => {
      e.dataTransfer.setData('component', JSON.stringify({
        type: component.id,
        component: component.component,
        props: component.props || {}
      }));
    };
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold flex items-center">
          <Layout className="w-5 h-5 mr-2 text-blue-600" />
          Components
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Drag components to the canvas
        </p>
      </div>

      {/* Category Tabs */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center justify-center
                  ${activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                <Icon className="w-4 h-4 mr-1" />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Component List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {categories
            .find(cat => cat.id === activeCategory)
            ?.components.map((component) => (
              <div
                key={component.id}
                ref={(ref) => {
                  if (ref) {
                    connectors.create(ref, component.component as any, (component as any).props || {});
                  }
                }}
                className={`
                  relative group cursor-move bg-white border-2 border-dashed border-gray-300 
                  rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200
                  ${hoveredComponent === component.id ? 'border-blue-500 bg-blue-50 shadow-md' : ''}
                `}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
                onClick={() => onComponentSelect?.(component.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                      {typeof component.preview === 'string' ? (
                        <span className="text-sm font-mono">{component.preview}</span>
                      ) : (
                        <component.icon className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{component.name}</h3>
                      <p className="text-xs text-gray-500">{component.description}</p>
                    </div>
                  </div>
                </div>

                {/* Animation Preview on Hover */}
                {hoveredComponent === component.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 pt-3 border-t border-gray-200"
                  >
                    <p className="text-xs text-gray-600 mb-2">Quick Animations:</p>
                    <div className="flex flex-wrap gap-1">
                      {animationPresets.slice(0, 3).map((preset) => (
                        <motion.button
                          key={preset.id}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Apply animation preset
                          }}
                        >
                          {preset.name}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Drag Indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v.01M12 12v.01M12 18v.01"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Quick Templates Section */}
        <div className="mt-8">
          <h3 className="font-medium text-sm text-gray-700 mb-3">Quick Templates</h3>
          <div className="space-y-2">
            {[
              { name: 'Hero Section', components: ['hero-text', 'button'], preview: '🦸' },
              { name: 'Feature Card', components: ['card', 'image'], preview: '✨' },
              { name: 'CTA Block', components: ['text', 'button'], preview: '📢' }
            ].map((template) => (
              <div
                key={template.name}
                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">{template.preview}</span>
                  <div>
                    <p className="text-sm font-medium">{template.name}</p>
                    <p className="text-xs text-gray-500">
                      {template.components.join(' + ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Quick Actions */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <h4 className="font-medium text-sm text-gray-700 mb-2">Animation Presets</h4>
        <div className="grid grid-cols-2 gap-2">
          {animationPresets.map((preset) => {
            const Icon = preset.icon;
            return (
              <motion.button
                key={preset.id}
                className="p-2 text-xs bg-white border border-gray-200 rounded hover:border-blue-300 hover:bg-blue-50 transition-colors flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-3 h-3 mr-1" />
                {preset.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentPalette;