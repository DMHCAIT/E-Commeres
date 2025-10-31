'use client';

import React from 'react';
import { Editor, Frame, Element } from '@craftjs/core';
import { EnhancedButton, EnhancedCard, EnhancedText, EnhancedContainer, EnhancedImage } from '@/components/craft/EnhancedComponents';
import { AnimatedWrapper } from '@/components/craft/AnimatedWrapper';

// Simple test page to verify components work
export default function TestEditorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold p-4">Advanced Visual Editor Test</h1>
      
      <div className="flex">
        {/* Component Palette */}
        <div className="w-64 bg-white shadow-lg p-4">
          <h2 className="font-semibold mb-4">Components</h2>
          <div className="space-y-2">
            <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              Button
            </div>
            <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              Card
            </div>
            <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              Text
            </div>
            <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              Container
            </div>
            <div className="p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
              Image
            </div>
          </div>
        </div>

        {/* Editor Canvas */}
        <div className="flex-1 p-4">
          <Editor
            resolver={{
              EnhancedButton,
              EnhancedCard,
              EnhancedText,
              EnhancedContainer,
              EnhancedImage,
              AnimatedWrapper
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
                <Element
                  is={EnhancedText}
                  tag="h1"
                  text="Welcome to the Advanced Visual Editor"
                  animation="fadeIn"
                />
                <Element
                  is={EnhancedText}
                  tag="p"
                  text="This is a test of the enhanced components with animations."
                  animation="slideUp"
                />
                <Element
                  is={EnhancedButton}
                  text="Click Me!"
                  variant="default"
                  animation="bounceIn"
                />
                <Element
                  is={EnhancedCard}
                  title="Test Card"
                  description="This is a test card"
                  content="Card content with animations"
                  animation="scaleIn"
                />
              </Element>
            </Frame>
          </Editor>
        </div>
      </div>
    </div>
  );
}