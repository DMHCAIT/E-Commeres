'use client';

import { useEditor } from '@craftjs/core';

export function Viewport({ children }: { children: React.ReactNode }): JSX.Element {
  const { enabled } = useEditor((state) => ({ enabled: state.options.enabled }));

  return (
    <div className="flex min-h-screen justify-center bg-slate-100 p-10">
      <div className={`w-full max-w-4xl rounded-2xl bg-white p-10 shadow ${enabled ? 'cursor-grab' : ''}`}>
        {children}
      </div>
    </div>
  );
}
