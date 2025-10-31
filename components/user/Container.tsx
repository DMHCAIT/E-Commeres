'use client';

import { useNode } from '@craftjs/core';
import { ReactNode } from 'react';

type ContainerProps = {
  padding?: number;
  background?: string;
  children?: ReactNode;
};

export function Container({ padding = 16, background = '#ffffff', children }: ContainerProps): JSX.Element {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((node) => ({ selected: node.events.selected }));

  return (
    <div
      ref={(ref: any) => ref && connect(drag(ref))}
      style={{ padding, background }}
      className={`rounded-xl border border-slate-200 ${selected ? 'ring-2 ring-slate-500' : ''}`}
    >
      {children}
    </div>
  );
}

Container.craft = {
  props: {
    padding: 32,
    background: '#ffffff'
  },
  related: {}
};
