'use client';

import Image from 'next/image';
import { useNode } from '@craftjs/core';

type ImageProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

export function ImageBlock({ src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f', alt = 'Placeholder', width = 600, height = 400 }: ImageProps): JSX.Element {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((node) => ({ selected: node.events.selected }));

  return (
    <div
      ref={(ref: any) => ref && connect(drag(ref))}
      className={`overflow-hidden rounded-xl border border-slate-200 ${selected ? 'ring-2 ring-slate-500' : ''}`}
    >
      <Image alt={alt} height={height} src={src} width={width} />
    </div>
  );
}

ImageBlock.craft = {
  props: {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    alt: 'Default image',
    width: 600,
    height: 400
  }
};
