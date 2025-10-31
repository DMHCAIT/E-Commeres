'use client';

import { useNode } from '@craftjs/core';
import { useState } from 'react';

export function Text({ text = 'Edit me', color = '#0f172a', fontSize = 18, align = 'left' }): JSX.Element {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp }
  } = useNode((node) => ({ 
    selected: node.events.selected
  }));

  const [value, setValue] = useState(text);

  const handleBlur = () => {
    setProp((props: any) => {
      props.text = value;
    });
  };

  return (
    <div
      ref={(ref: any) => ref && connect(drag(ref))}
      className={`relative ${selected ? 'ring-2 ring-slate-500' : ''}`}
      contentEditable
      onBlur={handleBlur}
      onInput={(event) => setValue((event.target as HTMLElement).innerText)}
      style={{ color, fontSize, textAlign: align as any }}
      suppressContentEditableWarning
    >
      {value}
    </div>
  );
}

Text.craft = {
  props: {
    text: 'Start typing...?',
    color: '#0f172a',
    fontSize: 20,
    align: 'left'
  }
};
