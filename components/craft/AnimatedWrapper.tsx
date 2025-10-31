import React, { useRef, useEffect, useState } from 'react';
import { useNode, UserComponent } from '@craftjs/core';
import { motion, AnimatePresence } from 'framer-motion';
import { animationPresets, getAnimationProps } from '../../lib/animations';
import { GSAPScrollManager } from '../../lib/gsap-effects';

// Enhanced component wrapper with animation capabilities
export interface AnimatedComponentProps {
  children: React.ReactNode;
  animation?: string;
  hoverAnimation?: string;
  scrollAnimation?: string;
  clickAnimation?: string;
  animationDelay?: number;
  animationDuration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedWrapper: UserComponent<AnimatedComponentProps> = ({
  children,
  animation = 'fadeIn',
  hoverAnimation = 'hoverLift',
  scrollAnimation,
  clickAnimation = 'clickPulse',
  animationDelay = 0,
  animationDuration,
  className = '',
  style = {},
  ...props
}) => {
  const {
    connectors: { connect, drag },
    selected,
    dragged,
    actions: { setProp }
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }));

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Get animation configurations
  const enterAnimation = getAnimationProps(animation, {
    initial: 'hidden',
    animate: isVisible ? 'visible' : 'hidden',
    transition: {
      delay: animationDelay,
      duration: animationDuration || undefined
    }
  });

  const hoverProps = hoverAnimation ? getAnimationProps(hoverAnimation, {
    whileHover: 'hover'
  }) : {};

  const clickProps = clickAnimation ? getAnimationProps(clickAnimation, {
    whileTap: 'tap'
  }) : {};

  // Setup scroll animations with GSAP
  useEffect(() => {
    if (scrollAnimation && ref.current) {
      const trigger = GSAPScrollManager.addEffect(ref.current, scrollAnimation);
      
      return () => {
        if (trigger) {
          GSAPScrollManager.removeEffect(trigger);
        }
      };
    }
  }, [scrollAnimation]);

  // Intersection observer for entrance animations
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={(el) => {
        if (el && ref.current !== el) {
          (ref as any).current = el;
          connect(drag(el));
        }
      }}
      className={`
        ${className}
        ${selected ? 'ring-2 ring-blue-500 ring-opacity-70' : ''}
        ${dragged ? 'opacity-50' : ''}
        relative
      `}
      style={style}
      {...enterAnimation}
      {...hoverProps}
      {...clickProps}
      {...props}
    >
      {children}
      
      {/* Editor overlay */}
      {selected && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded">
            Animated Component
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Settings panel for animated components
export const AnimatedWrapperSettings = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({
    props: node.data.props
  }));

  const [selectedCategory, setSelectedCategory] = useState('entrance');

  const categories = [
    { id: 'entrance', name: 'Entrance', description: 'Element enters viewport' },
    { id: 'hover', name: 'Hover', description: 'Mouse hover effects' },
    { id: 'click', name: 'Click', description: 'Click interactions' },
    { id: 'scroll', name: 'Scroll', description: 'Scroll-triggered effects' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Animation Settings</h3>
        
        {/* Category Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${selectedCategory === category.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Animation Options */}
        <div className="space-y-3">
          {selectedCategory === 'entrance' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Entrance Animation
              </label>
              <select
                value={props.animation || 'fadeIn'}
                onChange={(e) => setProp((props: any) => props.animation = e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {animationPresets
                  .filter((preset: any) => preset.category === 'entrance')
                  .map((preset: any) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.name} - {preset.description}
                    </option>
                  ))
                }
              </select>
            </div>
          )}

          {selectedCategory === 'hover' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hover Effect
              </label>
              <select
                value={props.hoverAnimation || 'hoverLift'}
                onChange={(e) => setProp((props: any) => props.hoverAnimation = e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">None</option>
                {animationPresets
                  .filter((preset: any) => preset.category === 'hover')
                  .map((preset: any) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.name} - {preset.description}
                    </option>
                  ))
                }
              </select>
            </div>
          )}

          {selectedCategory === 'click' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Click Animation
              </label>
              <select
                value={props.clickAnimation || 'clickPulse'}
                onChange={(e) => setProp((props: any) => props.clickAnimation = e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">None</option>
                {animationPresets
                  .filter((preset: any) => preset.category === 'click')
                  .map((preset: any) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.name} - {preset.description}
                    </option>
                  ))
                }
              </select>
            </div>
          )}

          {selectedCategory === 'scroll' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scroll Effect
              </label>
              <select
                value={props.scrollAnimation || ''}
                onChange={(e) => setProp((props: any) => props.scrollAnimation = e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">None</option>
                <option value="parallaxSlow">Parallax Slow</option>
                <option value="parallaxFast">Parallax Fast</option>
                <option value="revealUp">Reveal Up</option>
                <option value="revealMask">Reveal Mask</option>
                <option value="progressBar">Progress Bar</option>
              </select>
            </div>
          )}
        </div>

        {/* Timing Controls */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delay (seconds)
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              value={props.animationDelay || 0}
              onChange={(e) => setProp((props: any) => props.animationDelay = parseFloat(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (seconds)
            </label>
            <input
              type="number"
              min="0.1"
              max="3"
              step="0.1"
              value={props.animationDuration || ''}
              placeholder="Auto"
              onChange={(e) => setProp((props: any) => props.animationDuration = e.target.value ? parseFloat(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Register the component
AnimatedWrapper.craft = {
  displayName: 'Animated Wrapper',
  props: {
    animation: 'fadeIn',
    hoverAnimation: 'hoverLift',
    scrollAnimation: '',
    clickAnimation: 'clickPulse',
    animationDelay: 0,
    animationDuration: undefined,
    className: '',
    style: {}
  },
  related: {
    settings: AnimatedWrapperSettings
  }
};

export default AnimatedWrapper;