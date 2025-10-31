'use client';

import React, { ReactNode } from 'react';
import { useNode } from '@craftjs/core';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedWrapper } from './AnimatedWrapper';

// Component Props Types
interface AnimatedComponentProps {
  animation?: string;
  animationDelay?: number;
  animationDuration?: number;
  hoverAnimation?: string;
  children?: ReactNode;
}

interface ButtonProps extends AnimatedComponentProps {
  text?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

interface CardProps extends AnimatedComponentProps {
  title?: string;
  description?: string;
  content?: string;
}

interface TextProps extends AnimatedComponentProps {
  text?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

interface ContainerProps extends AnimatedComponentProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
}

interface ImageProps extends AnimatedComponentProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

// Enhanced Button Component
export const EnhancedButton = ({ 
  text = 'Button',
  variant = 'default',
  size = 'default',
  animation = 'fadeIn',
  animationDelay = 0,
  animationDuration = 0.3,
  hoverAnimation = 'scale',
  ...props 
}: ButtonProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref: HTMLDivElement | null) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className="relative"
    >
      <AnimatedWrapper
        animation={animation}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        hoverAnimation={hoverAnimation}
      >
        <Button variant={variant} size={size} {...props}>
          {text}
        </Button>
      </AnimatedWrapper>
    </div>
  );
};

// Enhanced Card Component
export const EnhancedCard = ({ 
  title = 'Card Title',
  description = 'Card description',
  content = 'Card content goes here',
  animation = 'fadeIn',
  animationDelay = 0,
  animationDuration = 0.3,
  hoverAnimation = 'scale',
  ...props 
}: CardProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref: HTMLDivElement | null) => { if (ref) { connect(drag(ref)); } }}
      className="relative"
    >
      <AnimatedWrapper
        animation={animation}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        hoverAnimation={hoverAnimation}
      >
        <Card {...props}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
        </Card>
      </AnimatedWrapper>
    </div>
  );
};

// Enhanced Text Component
export const EnhancedText = ({ 
  text = 'Text content',
  tag = 'p',
  animation = 'fadeIn',
  animationDelay = 0,
  animationDuration = 0.3,
  hoverAnimation = 'none',
  ...props 
}: TextProps) => {
  const { connectors: { connect, drag } } = useNode();
  const Tag = tag;

  return (
    <div
      ref={(ref: HTMLDivElement | null) => { if (ref) { connect(drag(ref)); } }}
      className="relative"
    >
      <AnimatedWrapper
        animation={animation}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        hoverAnimation={hoverAnimation}
      >
        <Tag {...props}>{text}</Tag>
      </AnimatedWrapper>
    </div>
  );
};

// Enhanced Container Component
export const EnhancedContainer = ({ 
  padding = '1rem',
  margin = '0',
  backgroundColor = 'transparent',
  animation = 'fadeIn',
  animationDelay = 0,
  animationDuration = 0.3,
  hoverAnimation = 'none',
  children,
  ...props 
}: ContainerProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref: HTMLDivElement | null) => { if (ref) { connect(drag(ref)); } }}
      className="relative"
    >
      <AnimatedWrapper
        animation={animation}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        hoverAnimation={hoverAnimation}
      >
        <div 
          style={{ 
            padding, 
            margin, 
            backgroundColor,
            minHeight: '50px',
            border: '1px dashed #ccc'
          }}
          {...props}
        >
          {children}
        </div>
      </AnimatedWrapper>
    </div>
  );
};

// Enhanced Image Component
export const EnhancedImage = ({ 
  src = '/placeholder.jpg',
  alt = 'Image',
  width = 300,
  height = 200,
  animation = 'fadeIn',
  animationDelay = 0,
  animationDuration = 0.3,
  hoverAnimation = 'scale',
  ...props 
}: ImageProps) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <div
      ref={(ref: HTMLDivElement | null) => { if (ref) { connect(drag(ref)); } }}
      className="relative"
    >
      <AnimatedWrapper
        animation={animation}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        hoverAnimation={hoverAnimation}
      >
        <img 
          src={src} 
          alt={alt} 
          width={width} 
          height={height}
          className="object-cover"
          {...props}
        />
      </AnimatedWrapper>
    </div>
  );
};

// Settings Components
const ButtonSettings = () => {
  const { actions: { setProp }, text, variant, size } = useNode((node) => ({
    text: node.data.props.text,
    variant: node.data.props.variant,
    size: node.data.props.size,
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Button Text</Label>
        <Input
          id="text"
          value={text || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.text = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="variant">Variant</Label>
        <select
          id="variant"
          value={variant || 'default'}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
            setProp((props: any) => props.variant = e.target.value)
          }
          className="w-full p-2 border rounded"
        >
          <option value="default">Default</option>
          <option value="destructive">Destructive</option>
          <option value="outline">Outline</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
      </div>
    </div>
  );
};

const CardSettings = () => {
  const { actions: { setProp }, title, description, content } = useNode((node) => ({
    title: node.data.props.title,
    description: node.data.props.description,
    content: node.data.props.content,
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.title = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={description || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.description = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={content || ''}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
            setProp((props: any) => props.content = e.target.value)
          }
        />
      </div>
    </div>
  );
};

const TextSettings = () => {
  const { actions: { setProp }, text, tag } = useNode((node) => ({
    text: node.data.props.text,
    tag: node.data.props.tag,
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Text</Label>
        <Textarea
          id="text"
          value={text || ''}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
            setProp((props: any) => props.text = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="tag">Tag</Label>
        <select
          id="tag"
          value={tag || 'p'}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
            setProp((props: any) => props.tag = e.target.value)
          }
          className="w-full p-2 border rounded"
        >
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
          <option value="h5">H5</option>
          <option value="h6">H6</option>
          <option value="p">Paragraph</option>
          <option value="span">Span</option>
        </select>
      </div>
    </div>
  );
};

const ContainerSettings = () => {
  const { actions: { setProp }, padding, margin, backgroundColor } = useNode((node) => ({
    padding: node.data.props.padding,
    margin: node.data.props.margin,
    backgroundColor: node.data.props.backgroundColor,
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="padding">Padding</Label>
        <Input
          id="padding"
          value={padding || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.padding = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="margin">Margin</Label>
        <Input
          id="margin"
          value={margin || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.margin = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <Input
          id="backgroundColor"
          type="color"
          value={backgroundColor || '#ffffff'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.backgroundColor = e.target.value)
          }
        />
      </div>
    </div>
  );
};

const ImageSettings = () => {
  const { actions: { setProp }, src, alt, width, height } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="src">Image URL</Label>
        <Input
          id="src"
          value={src || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.src = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="alt">Alt Text</Label>
        <Input
          id="alt"
          value={alt || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.alt = e.target.value)
          }
        />
      </div>
      <div>
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          type="number"
          value={width || 300}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.width = parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          type="number"
          value={height || 200}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setProp((props: any) => props.height = parseInt(e.target.value))
          }
        />
      </div>
    </div>
  );
};

// Craft.js Configuration
EnhancedButton.craft = {
  displayName: 'Button',
  props: {
    text: 'Button',
    variant: 'default',
    size: 'default',
    animation: 'fadeIn',
    animationDelay: 0,
    animationDuration: 0.3,
    hoverAnimation: 'scale',
  },
  related: {
    settings: ButtonSettings,
  },
};

EnhancedCard.craft = {
  displayName: 'Card',
  props: {
    title: 'Card Title',
    description: 'Card description',
    content: 'Card content goes here',
    animation: 'fadeIn',
    animationDelay: 0,
    animationDuration: 0.3,
    hoverAnimation: 'scale',
  },
  related: {
    settings: CardSettings,
  },
};

EnhancedText.craft = {
  displayName: 'Text',
  props: {
    text: 'Text content',
    tag: 'p',
    animation: 'fadeIn',
    animationDelay: 0,
    animationDuration: 0.3,
    hoverAnimation: 'none',
  },
  related: {
    settings: TextSettings,
  },
};

EnhancedContainer.craft = {
  displayName: 'Container',
  props: {
    padding: '1rem',
    margin: '0',
    backgroundColor: 'transparent',
    animation: 'fadeIn',
    animationDelay: 0,
    animationDuration: 0.3,
    hoverAnimation: 'none',
  },
  related: {
    settings: ContainerSettings,
  },
  isCanvas: true,
};

EnhancedImage.craft = {
  displayName: 'Image',
  props: {
    src: '/placeholder.jpg',
    alt: 'Image',
    width: 300,
    height: 200,
    animation: 'fadeIn',
    animationDelay: 0,
    animationDuration: 0.3,
    hoverAnimation: 'scale',
  },
  related: {
    settings: ImageSettings,
  },
};

// Re-export AnimatedWrapper for compatibility
export { AnimatedWrapper } from './AnimatedWrapper';