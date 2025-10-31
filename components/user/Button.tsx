'use client';

import { useNode } from '@craftjs/core';

type ButtonProps = {
  label?: string;
  href?: string;
};

export function Button({ label = 'Button', href = '#' }: ButtonProps): JSX.Element {
  const {
    connectors: { connect, drag },
    selected
  } = useNode((node) => ({ selected: node.events.selected }));

  return (
    <a
      ref={(ref: any) => ref && connect(drag(ref))}
      className={`inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-slate-700 ${selected ? 'ring-2 ring-slate-500' : ''}`}
      href={href}
    >
      {label}
    </a>
  );
}

Button.craft = {
  props: {
    label: 'Call to Action',
    href: '#'
  }
};
