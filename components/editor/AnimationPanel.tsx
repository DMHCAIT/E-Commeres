'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wand2, 
  Play, 
  Pause, 
  RotateCcw,
  Eye,
  Settings,
  Sparkles,
  MousePointer,
  Scroll,
  ZoomIn
} from 'lucide-react';
import { animationPresets, animationUtils } from '../../lib/animations';
import { scrollEffects } from '../../lib/gsap-effects';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

interface AnimationPanelProps {
  selectedNodeId?: string;
  onApplyAnimation: (nodeId: string, animationConfig: any) => void;
  onPreviewAnimation: (animationId: string) => void;
}

export const AnimationPanel: React.FC<AnimationPanelProps> = ({
  selectedNodeId,
  onApplyAnimation,
  onPreviewAnimation
}) => {
  const [activeCategory, setActiveCategory] = useState<'entrance' | 'hover' | 'click' | 'scroll'>('entrance');
  const [selectedAnimation, setSelectedAnimation] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const categories = [
    {
      id: 'entrance' as const,
      name: 'Entrance',
      icon: ZoomIn,
      description: 'Animations when element appears',
      color: 'bg-blue-500'
    },
    {
      id: 'hover' as const,
      name: 'Hover',
      icon: MousePointer,
      description: 'Effects on mouse hover',
      color: 'bg-green-500'
    },
    {
      id: 'click' as const,
      name: 'Click',
      icon: Sparkles,
      description: 'Click interaction effects',
      color: 'bg-purple-500'
    },
    {
      id: 'scroll' as const,
      name: 'Scroll',
      icon: Scroll,
      description: 'Scroll-triggered animations',
      color: 'bg-orange-500'
    }
  ];

  const handlePreviewAnimation = (animationId: string) => {
    setSelectedAnimation(animationId);
    setIsPlaying(true);
    onPreviewAnimation(animationId);
    
    // Reset after animation duration
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  const handleApplyAnimation = (animationId: string) => {
    if (!selectedNodeId) return;
    
    const animationConfig = {
      [activeCategory === 'entrance' ? 'animation' : 
       activeCategory === 'hover' ? 'hoverAnimation' :
       activeCategory === 'click' ? 'clickAnimation' : 'scrollAnimation']: animationId
    };
    
    onApplyAnimation(selectedNodeId, animationConfig);
  };

  const getAnimationsByCategory = () => {
    if (activeCategory === 'scroll') {
      return scrollEffects.map(effect => ({
        id: effect.id,
        name: effect.name,
        description: effect.description,
        category: effect.category
      }));
    }
    return animationUtils.getPresetsByCategory(activeCategory);
  };

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold flex items-center">
            <Wand2 className="w-5 h-5 mr-2 text-purple-600" />
            Animations
          </h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={!selectedAnimation}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          {selectedNodeId ? 'Add animations to selected element' : 'Select an element to add animations'}
        </p>
      </div>

      {/* Category Selector */}
      <div className="p-4 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  p-3 rounded-lg border-2 transition-all duration-200 text-left
                  ${activeCategory === category.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }
                `}
              >
                <div className="flex items-center mb-1">
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">{category.name}</span>
                </div>
                <p className="text-xs opacity-75">{category.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Animation List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {getAnimationsByCategory().map((animation) => (
                <Card
                  key={animation.id}
                  className={`
                    cursor-pointer transition-all duration-200 hover:shadow-md
                    ${selectedAnimation === animation.id ? 'ring-2 ring-blue-500' : ''}
                  `}
                  onClick={() => handlePreviewAnimation(animation.id)}
                >
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        {animation.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {animation.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {animation.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviewAnimation(animation.id);
                        }}
                        className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </button>
                      
                      {selectedNodeId && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyAnimation(animation.id);
                          }}
                        >
                          Apply
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Animation Settings */}
      {selectedAnimation && (
        <div className="border-t border-gray-200 p-4">
          <h3 className="font-medium text-sm mb-3 flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Animation Settings
          </h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Duration (seconds)
              </label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                defaultValue="0.6"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Delay (seconds)
              </label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                defaultValue="0"
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Easing
              </label>
              <select className="w-full px-2 py-1 text-xs border border-gray-300 rounded">
                <option value="easeOut">Ease Out</option>
                <option value="easeIn">Ease In</option>
                <option value="easeInOut">Ease In Out</option>
                <option value="linear">Linear</option>
                <option value="bounce">Bounce</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Preview Area */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <motion.div
              className="w-8 h-8 bg-blue-500 rounded-md"
              animate={isPlaying ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
          <p className="text-xs text-gray-600">Animation Preview</p>
        </div>
      </div>
    </div>
  );
};

export default AnimationPanel;