'use client';

import React, { useState, useEffect } from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Settings, 
  Eye, 
  Smartphone, 
  Tablet, 
  Monitor,
  Undo,
  Redo,
  Save,
  Play,
  Wand2
} from 'lucide-react';

// Import components
import ComponentPalette from './ComponentPalette';
import AnimationPanel from './AnimationPanel';
import { 
  EnhancedButton, 
  EnhancedCard, 
  EnhancedText, 
  EnhancedContainer, 
  EnhancedImage,
  AnimatedWrapper
} from '../craft/EnhancedComponents';
import { Button } from '../ui/button';

interface AdvancedVisualEditorProps {
  websiteId: string;
  pageId: string;
  initialContent?: string;
  onSave: (content: string) => void;
  onPreview: () => void;
}

export const AdvancedVisualEditor: React.FC<AdvancedVisualEditorProps> = ({
  websiteId,
  pageId,
  initialContent,
  onSave,
  onPreview
}) => {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showLayers, setShowLayers] = useState(true);
  const [showAnimations, setShowAnimations] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [editorContent, setEditorContent] = useState(initialContent || '');

  // Viewport dimensions
  const viewportDimensions = {
    desktop: { width: '100%', height: '100%' },
    tablet: { width: '768px', height: '1024px' },
    mobile: { width: '375px', height: '812px' }
  };

  const handleSave = () => {
    // Get editor content from Craft.js
    // This would be implemented with the useEditor hook
    onSave(editorContent);
  };

  const handleApplyAnimation = (nodeId: string, animationConfig: any) => {
    // Apply animation to selected node
    console.log('Applying animation to node:', nodeId, animationConfig);
  };

  const handlePreviewAnimation = (animationId: string) => {
    // Preview animation in the editor
    console.log('Previewing animation:', animationId);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold">Visual Editor</h1>
          
          {/* Viewport Selector */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'desktop', icon: Monitor, label: 'Desktop' },
              { id: 'tablet', icon: Tablet, label: 'Tablet' },
              { id: 'mobile', icon: Smartphone, label: 'Mobile' }
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setViewport(id as any)}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center
                  ${viewport === id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
                title={label}
              >
                <Icon className="w-4 h-4 mr-1" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Editor Actions */}
          <div className="flex items-center space-x-1 mr-4">
            <Button variant="outline" size="sm" className="p-2">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" className="p-2">
              <Redo className="w-4 h-4" />
            </Button>
          </div>

          {/* Panel Toggles */}
          <Button
            variant={showLayers ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowLayers(!showLayers)}
          >
            <Layers className="w-4 h-4 mr-2" />
            Layers
          </Button>
          
          <Button
            variant={showAnimations ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowAnimations(!showAnimations)}
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Animations
          </Button>

          {/* Preview & Save */}
          <Button
            variant="outline"
            onClick={() => {
              setIsPreviewMode(!isPreviewMode);
              if (!isPreviewMode) onPreview();
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            {isPreviewMode ? 'Edit' : 'Preview'}
          </Button>
          
          <Button onClick={handleSave}>
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Component Palette */}
        <AnimatePresence>
          {showLayers && (
            <motion.div
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -320, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-80 border-r border-gray-200"
            >
              <ComponentPalette />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Canvas Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-gray-100 p-8 overflow-auto">
            <div className="flex justify-center">
              <motion.div
                className="bg-white shadow-lg overflow-hidden transition-all duration-300"
                style={{
                  width: viewportDimensions[viewport].width,
                  height: viewportDimensions[viewport].height,
                  minHeight: '600px',
                  borderRadius: viewport !== 'desktop' ? '12px' : '0px'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Editor
                  resolver={{
                    EnhancedButton,
                    EnhancedCard,
                    EnhancedText,
                    EnhancedContainer,
                    EnhancedImage,
                    AnimatedWrapper
                  }}
                  onRender={({ render }) => (
                    <Frame>
                      <Element
                        canvas
                        is={EnhancedContainer}
                        id="root"
                        padding="2rem"
                        backgroundColor="white"
                      >
                        {/* Default content */}
                        <Element
                          is={EnhancedText}
                          tag="h1"
                          text="Welcome to your website"
                          animation="fadeIn"
                        >
                        </Element>
                        <Element
                          is={EnhancedText}
                          tag="p"
                          text="Start building your amazing website"
                          animation="slideUp"
                        />
                        <Element
                          is={EnhancedButton}
                          text="Get Started"
                          animation="bounceIn"
                          hoverAnimation="hoverLift"
                        />
                      </Element>
                    </Frame>
                  )}
                  onNodesChange={(query) => {
                    // Update editor content when nodes change
                    setEditorContent(query.serialize());
                  }}
                >
                  <Frame>
                    <Element
                      canvas
                      is={EnhancedContainer}
                      id="root"
                      padding="2rem"
                      backgroundColor="white"
                    >
                      {/* Canvas content will be rendered here */}
                    </Element>
                  </Frame>
                </Editor>
              </motion.div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="bg-white border-t border-gray-200 px-4 py-2 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span>Canvas: {viewport}</span>
              <span>•</span>
              <span>Zoom: 100%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Auto-save: ✓</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Animation Panel */}
        <AnimatePresence>
          {showAnimations && (
            <motion.div
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-80 border-l border-gray-200"
            >
              <AnimationPanel
                selectedNodeId={selectedNode || undefined}
                onApplyAnimation={handleApplyAnimation}
                onPreviewAnimation={handlePreviewAnimation}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Preview Mode Overlay */}
      <AnimatePresence>
        {isPreviewMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-lg shadow-2xl overflow-hidden"
                style={{
                  width: viewportDimensions[viewport].width,
                  height: viewportDimensions[viewport].height,
                  maxWidth: '90vw',
                  maxHeight: '90vh'
                }}
              >
                {/* Preview content would be rendered here */}
                <div className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Preview Mode</h2>
                  <p className="text-gray-600">Your website preview would appear here</p>
                </div>
              </motion.div>
              
              <button
                onClick={() => setIsPreviewMode(false)}
                className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedVisualEditor;