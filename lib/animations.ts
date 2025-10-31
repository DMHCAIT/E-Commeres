import { Variants, Transition } from 'framer-motion';

export interface AnimationPreset {
  id: string;
  name: string;
  description: string;
  category: 'entrance' | 'hover' | 'scroll' | 'click' | 'exit';
  variants: Variants;
  transition?: Transition;
  dependencies?: string[];
}

// GPU-optimized animations using transform properties
export const animationPresets: AnimationPreset[] = [
  // ENTRANCE ANIMATIONS
  {
    id: 'fadeIn',
    name: 'Fade In',
    description: 'Smooth opacity transition',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  {
    id: 'slideUp',
    name: 'Slide Up',
    description: 'Slide in from bottom',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'translateY(50px)' },
      visible: { opacity: 1, transform: 'translateY(0px)' }
    },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'slideDown',
    name: 'Slide Down',
    description: 'Slide in from top',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'translateY(-50px)' },
      visible: { opacity: 1, transform: 'translateY(0px)' }
    },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'slideLeft',
    name: 'Slide Left',
    description: 'Slide in from right',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'translateX(50px)' },
      visible: { opacity: 1, transform: 'translateX(0px)' }
    },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'slideRight',
    name: 'Slide Right',
    description: 'Slide in from left',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'translateX(-50px)' },
      visible: { opacity: 1, transform: 'translateX(0px)' }
    },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'scaleIn',
    name: 'Scale In',
    description: 'Scale up from center',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'scale(0.8)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'zoomIn',
    name: 'Zoom In',
    description: 'Dramatic zoom entrance',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'scale(0.3)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
  {
    id: 'bounceIn',
    name: 'Bounce In',
    description: 'Playful bouncing entrance',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'scale(0.3)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
      opacity: { duration: 0.3 }
    }
  },
  {
    id: 'rotateIn',
    name: 'Rotate In',
    description: 'Rotate while fading in',
    category: 'entrance',
    variants: {
      hidden: { opacity: 0, transform: 'rotate(-180deg) scale(0.5)' },
      visible: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
    },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },

  // HOVER ANIMATIONS
  {
    id: 'hoverLift',
    name: 'Hover Lift',
    description: 'Subtle lift effect on hover',
    category: 'hover',
    variants: {
      initial: { transform: 'translateY(0px)' },
      hover: { transform: 'translateY(-8px)' }
    },
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  {
    id: 'hoverScale',
    name: 'Hover Scale',
    description: 'Scale up on hover',
    category: 'hover',
    variants: {
      initial: { transform: 'scale(1)' },
      hover: { transform: 'scale(1.05)' }
    },
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  {
    id: 'hoverGlow',
    name: 'Hover Glow',
    description: 'Glowing effect on hover',
    category: 'hover',
    variants: {
      initial: { boxShadow: '0 0 0 rgba(59, 130, 246, 0)' },
      hover: { boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }
    },
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  {
    id: 'hoverTilt',
    name: 'Hover Tilt',
    description: 'Slight rotation on hover',
    category: 'hover',
    variants: {
      initial: { transform: 'rotate(0deg)' },
      hover: { transform: 'rotate(2deg)' }
    },
    transition: { duration: 0.3, ease: 'easeOut' }
  },

  // CLICK ANIMATIONS
  {
    id: 'clickPulse',
    name: 'Click Pulse',
    description: 'Pulse effect on click',
    category: 'click',
    variants: {
      initial: { transform: 'scale(1)' },
      tap: { transform: 'scale(0.95)' }
    },
    transition: { duration: 0.1, ease: 'easeInOut' }
  },
  {
    id: 'clickBounce',
    name: 'Click Bounce',
    description: 'Bouncy click feedback',
    category: 'click',
    variants: {
      initial: { transform: 'scale(1)' },
      tap: { transform: 'scale(1.1)' }
    },
    transition: { duration: 0.2, ease: [0.68, -0.55, 0.265, 1.55] }
  },

  // SCROLL ANIMATIONS
  {
    id: 'scrollFadeUp',
    name: 'Scroll Fade Up',
    description: 'Fade and slide up on scroll',
    category: 'scroll',
    variants: {
      hidden: { opacity: 0, transform: 'translateY(100px)' },
      visible: { opacity: 1, transform: 'translateY(0px)' }
    },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    dependencies: ['scroll']
  },
  {
    id: 'scrollParallax',
    name: 'Scroll Parallax',
    description: 'Parallax scrolling effect',
    category: 'scroll',
    variants: {
      initial: { transform: 'translateY(0px)' },
      scroll: { transform: 'translateY(-50px)' }
    },
    transition: { duration: 0, ease: 'linear' },
    dependencies: ['scroll', 'gsap']
  },
  {
    id: 'scrollRotate',
    name: 'Scroll Rotate',
    description: 'Rotate on scroll progress',
    category: 'scroll',
    variants: {
      initial: { transform: 'rotate(0deg)' },
      scroll: { transform: 'rotate(360deg)' }
    },
    transition: { duration: 0, ease: 'linear' },
    dependencies: ['scroll', 'gsap']
  },

  // EXIT ANIMATIONS
  {
    id: 'fadeOut',
    name: 'Fade Out',
    description: 'Smooth fade out',
    category: 'exit',
    variants: {
      visible: { opacity: 1 },
      exit: { opacity: 0 }
    },
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  {
    id: 'slideOut',
    name: 'Slide Out',
    description: 'Slide out to bottom',
    category: 'exit',
    variants: {
      visible: { opacity: 1, transform: 'translateY(0px)' },
      exit: { opacity: 0, transform: 'translateY(50px)' }
    },
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
];

// Performance-optimized custom transitions
export const customTransitions = {
  spring: {
    type: 'spring',
    damping: 25,
    stiffness: 300
  },
  smooth: {
    type: 'tween',
    ease: [0.22, 1, 0.36, 1],
    duration: 0.6
  },
  bounce: {
    type: 'spring',
    damping: 10,
    stiffness: 400
  },
  gentle: {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.4
  }
};

// Animation utility functions
export const animationUtils = {
  getPresetsByCategory: (category: AnimationPreset['category']) => {
    return animationPresets.filter(preset => preset.category === category);
  },

  getPresetById: (id: string) => {
    return animationPresets.find(preset => preset.id === id);
  },

  createStaggeredAnimation: (baseAnimation: AnimationPreset, staggerDelay: number = 0.1) => {
    return {
      ...baseAnimation,
      transition: {
        ...baseAnimation.transition,
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    };
  },

  createScrollTriggeredAnimation: (
    animation: AnimationPreset, 
    triggerOptions: {
      start?: string;
      end?: string;
      scrub?: boolean;
    } = {}
  ) => {
    return {
      ...animation,
      scrollTrigger: {
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...triggerOptions
      }
    };
  }
};

// Component animation helpers
export const getAnimationProps = (presetId: string, additionalProps?: any) => {
  const preset = animationUtils.getPresetById(presetId);
  if (!preset) return {};

  return {
    variants: preset.variants,
    transition: preset.transition,
    ...additionalProps
  };
};

export const createAnimationSequence = (animations: string[], delay: number = 0.2) => {
  return animations.map((presetId, index) => {
    const preset = animationUtils.getPresetById(presetId);
    if (!preset) return null;

    return {
      ...preset,
      transition: {
        ...preset.transition,
        delay: index * delay
      }
    };
  }).filter(Boolean);
};