'use client';

import { useNode, useEditor } from '@craftjs/core';
import { useEffect, useState } from 'react';

export function SettingsPanel(): JSX.Element {
  const { actions, selected } = useEditor((state) => {
    const [current] = state.events.selected;
    return {
      selected: current ? state.nodes[current] : null
    };
  });

  const [localState, setLocalState] = useState({});

  useEffect(() => {
    if (!selected) {
      setLocalState({});
      return;
    }

    setLocalState(selected.data.props ?? {});
  }, [selected]);

  if (!selected) {
    return (
      <div className="p-4 text-sm text-slate-500">
        Select a component to edit its properties.
      </div>
    );
  }

  const handleChange = (key: string, value: unknown) => {
    setLocalState((prev) => ({ ...prev, [key]: value }));
    actions.setProp(selected.id, (props: Record<string, unknown>) => {
      props[key] = value;
    });
  };

  return (
    <div className="space-y-4 p-4 text-sm">
      <h2 className="text-lg font-semibold text-slate-900">Settings</h2>
      {Object.entries(localState).map(([key, value]) => (
        <label className="block" key={key}>
          <span className="text-xs uppercase tracking-wide text-slate-500">
            {key}
          </span>
          <input
            className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
            value={String(value ?? '')}
            onChange={(event) => handleChange(key, event.target.value)}
          />
        </label>
      ))}
    </div>
  );
}
