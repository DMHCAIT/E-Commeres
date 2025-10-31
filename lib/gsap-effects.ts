import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollEffect {
  id: string;
  name: string;
  description: string;
  category: 'parallax' | 'pin' | 'reveal' | 'morph' | 'progress' | 'horizontal';
  setup: (element: HTMLElement, options?: any) => ScrollTrigger | null;
  cleanup?: (trigger: ScrollTrigger) => void;
  options?: Record<string, any>;
}

export const scrollEffects: ScrollEffect[] = [
  // PARALLAX EFFECTS
  {
    id: 'parallaxSlow',
    name: 'Parallax Slow',
    description: 'Background moves slower than scroll',
    category: 'parallax',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.fromTo(element, 
          { yPercent: -50 },
          { yPercent: 50, ease: 'none' }
        ),
        ...options
      });
    }
  },
  {
    id: 'parallaxFast',
    name: 'Parallax Fast',
    description: 'Element moves faster than scroll',
    category: 'parallax',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: gsap.fromTo(element,
          { yPercent: 50 },
          { yPercent: -50, ease: 'none' }
        ),
        ...options
      });
    }
  },
  {
    id: 'parallaxDepth',
    name: 'Parallax 3D Depth',
    description: 'Multi-layer parallax with 3D transform',
    category: 'parallax',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const layers = element.querySelectorAll('[data-parallax-layer]');
      const tl = gsap.timeline();
      
      layers.forEach((layer, index) => {
        const speed = parseFloat((layer as HTMLElement).dataset.parallaxLayer || '1');
        tl.fromTo(layer,
          { yPercent: -100 * speed },
          { yPercent: 100 * speed, ease: 'none' },
          0
        );
      });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        animation: tl,
        ...options
      });
    }
  },

  // PIN EFFECTS
  {
    id: 'pinSection',
    name: 'Pin Section',
    description: 'Pin element while scrolling through content',
    category: 'pin',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        ...options
      });
    }
  },
  {
    id: 'pinWithAnimation',
    name: 'Pin with Animation',
    description: 'Pin element with animated content inside',
    category: 'pin',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const content = element.querySelector('[data-pin-content]');
      if (!content) return null;
      
      const tl = gsap.timeline();
      tl.from(content.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out'
      });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: '+=100%',
        pin: true,
        animation: tl,
        scrub: 1,
        ...options
      });
    }
  },

  // REVEAL EFFECTS
  {
    id: 'revealUp',
    name: 'Reveal Up',
    description: 'Slide up and fade in on scroll',
    category: 'reveal',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      gsap.set(element, { y: 100, opacity: 0 });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        animation: gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        }),
        toggleActions: 'play none none reverse',
        ...options
      });
    }
  },
  {
    id: 'revealMask',
    name: 'Reveal Mask',
    description: 'Mask reveal effect with clip-path',
    category: 'reveal',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      gsap.set(element, { clipPath: 'inset(100% 0 0 0)' });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        animation: gsap.to(element, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.5,
          ease: 'power2.inOut'
        }),
        toggleActions: 'play none none reverse',
        ...options
      });
    }
  },
  {
    id: 'revealStagger',
    name: 'Staggered Reveal',
    description: 'Reveal child elements with stagger',
    category: 'reveal',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const children = element.children;
      gsap.set(children, { y: 50, opacity: 0 });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        animation: gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }),
        toggleActions: 'play none none reverse',
        ...options
      });
    }
  },

  // PROGRESS INDICATORS
  {
    id: 'progressBar',
    name: 'Progress Bar',
    description: 'Animated progress bar based on scroll',
    category: 'progress',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const progressBar = element.querySelector('[data-progress-bar]');
      if (!progressBar) return null;
      
      gsap.set(progressBar, { scaleX: 0, transformOrigin: 'left center' });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        animation: gsap.to(progressBar, {
          scaleX: 1,
          ease: 'none'
        }),
        scrub: true,
        ...options
      });
    }
  },
  {
    id: 'circularProgress',
    name: 'Circular Progress',
    description: 'Circular progress indicator',
    category: 'progress',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const circle = element.querySelector('circle[data-progress-circle]') as SVGCircleElement;
      if (!circle) return null;
      
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      
      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
        transformOrigin: 'center'
      });
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        animation: gsap.to(circle, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out'
        }),
        toggleActions: 'play none none reverse',
        ...options
      });
    }
  },

  // HORIZONTAL SCROLL
  {
    id: 'horizontalScroll',
    name: 'Horizontal Scroll',
    description: 'Horizontal scrolling section',
    category: 'horizontal',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const container = element.querySelector('[data-horizontal-container]');
      if (!container) return null;
      
      const scrollWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: `+=${scrollWidth - containerWidth}`,
        pin: true,
        animation: gsap.to(container, {
          x: -(scrollWidth - containerWidth),
          ease: 'none'
        }),
        scrub: 1,
        ...options
      });
    }
  },

  // MORPHING EFFECTS
  {
    id: 'morphPath',
    name: 'Morph SVG Path',
    description: 'Morph SVG path on scroll',
    category: 'morph',
    setup: (element: HTMLElement, options = {}) => {
      if (typeof window === 'undefined') return null;
      
      const path = element.querySelector('path[data-morph-path]');
      const targetPath = element.dataset.morphTarget;
      
      if (!path || !targetPath) return null;
      
      return ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        animation: gsap.to(path, {
          attr: { d: targetPath },
          duration: 2,
          ease: 'power2.inOut'
        }),
        scrub: 1,
        ...options
      });
    }
  }
];

// GSAP Utility Functions
export class GSAPScrollManager {
  private static triggers: ScrollTrigger[] = [];

  static addEffect(element: HTMLElement, effectId: string, options?: any): ScrollTrigger | null {
    const effect = scrollEffects.find(e => e.id === effectId);
    if (!effect) return null;

    const trigger = effect.setup(element, options);
    if (trigger) {
      this.triggers.push(trigger);
    }
    return trigger;
  }

  static removeEffect(trigger: ScrollTrigger): void {
    const index = this.triggers.indexOf(trigger);
    if (index > -1) {
      this.triggers.splice(index, 1);
      trigger.kill();
    }
  }

  static refreshAll(): void {
    ScrollTrigger.refresh();
  }

  static killAll(): void {
    this.triggers.forEach(trigger => trigger.kill());
    this.triggers = [];
    ScrollTrigger.killAll();
  }

  static batchReveal(elements: NodeListOf<Element> | Element[], stagger: number = 0.2): void {
    if (typeof window === 'undefined') return;

    ScrollTrigger.batch(elements, {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          { opacity: 0, y: 100 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            stagger: stagger,
            ease: 'power2.out' 
          }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, { 
          opacity: 0, 
          y: -100, 
          duration: 0.5, 
          stagger: stagger 
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: stagger 
        });
      },
      start: 'top 80%',
      end: 'bottom 20%'
    });
  }

  static createSmoothScrolling(container?: string): void {
    if (typeof window === 'undefined') return;

    // Enable smooth scrolling with GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Smooth scroll implementation would go here
    // This is a placeholder for advanced smooth scrolling
  }

  static createMagneticEffect(element: HTMLElement, strength: number = 0.3): void {
    if (typeof window === 'undefined') return;

    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    element.addEventListener('mouseleave', () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    });
  }
}

// Performance optimization utilities
export const performanceUtils = {
  // Use transform instead of changing layout properties
  optimizeForGPU: (element: HTMLElement) => {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)'; // Force GPU acceleration
  },

  // Clean up will-change after animation
  cleanupGPU: (element: HTMLElement) => {
    element.style.willChange = 'auto';
  },

  // Batch DOM reads and writes
  batchUpdate: (reads: (() => void)[], writes: (() => void)[]) => {
    // Batch all reads first
    reads.forEach(read => read());
    
    // Then batch all writes
    requestAnimationFrame(() => {
      writes.forEach(write => write());
    });
  }
};

export default GSAPScrollManager;