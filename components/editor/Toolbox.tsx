// @ts-nocheck
'use client';

import { useEditor } from '@craftjs/core';
import { Container } from '@/components/user/Container';
import { Text } from '@/components/user/Text';
import { Button } from '@/components/user/Button';
import { ImageBlock } from '@/components/user/ImageBlock';

export function Toolbox(): JSX.Element {
  const { connectors } = useEditor();

  return (
    <div className="space-y-3 p-4">
      <h2 className="text-lg font-semibold">Components</h2>
      
      <div
        ref={(ref) => connectors.create(ref, <Container />)}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
      >
        Container
      </div>
      
      <div
        ref={(ref) => connectors.create(ref, <Text />)}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
      >
        Text
      </div>
      
      <div
        ref={(ref) => connectors.create(ref, <Button />)}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
      >
        Button
      </div>
      
      <div
        ref={(ref) => connectors.create(ref, <ImageBlock />)}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer"
      >
        Image
      </div>
    </div>
  );
}
