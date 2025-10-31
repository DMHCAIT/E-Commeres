'use client';

import { Editor, Frame, Element, useEditor } from '@craftjs/core';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Toolbox } from '@/components/editor/Toolbox';
import { SettingsPanel } from '@/components/editor/SettingsPanel';
import { Viewport } from '@/components/editor/Viewport';
import { Container } from '@/components/user/Container';
import { Text } from '@/components/user/Text';
import { Button } from '@/components/user/Button';
import { ImageBlock } from '@/components/user/ImageBlock';
import { useAuth } from '@/contexts/AuthContext';
import { usePage } from '@/hooks/usePages';
import { ArrowLeft, Save, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// Top toolbar component for save/load actions
function EditorToolbar({ websiteId, slug, onBack }: { websiteId?: string; slug?: string; onBack?: () => void }) {
  const { query, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const { page, savePage } = usePage(websiteId || 'demo', slug || 'home');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const serialized = query.serialize();
      if (websiteId && slug) {
        await savePage(JSON.parse(serialized));
      } else {
        // For demo mode, just save to localStorage
        localStorage.setItem('demo-page-content', serialized);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleLoad = () => {
    if (page?.content) {
      const contentString = typeof page.content === 'string' 
        ? page.content 
        : JSON.stringify(page.content);
      actions.deserialize(contentString);
    } else {
      // For demo mode, load from localStorage
      const saved = localStorage.getItem('demo-page-content');
      if (saved) {
        actions.deserialize(saved);
      }
    }
  };

  useEffect(() => {
    // Auto-load content when page data is available
    if (page?.content) {
      handleLoad();
    }
  }, [page?.content]);

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">
          {websiteId ? `Editing: ${slug}` : 'Demo Editor'}
        </h1>
        {!websiteId && (
          <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded">
            Demo Mode - Changes saved locally
          </span>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => actions.history.undo()}
          className="px-3 py-1 text-sm border rounded hover:bg-slate-50"
        >
          Undo
        </button>
        <button
          onClick={() => actions.history.redo()}
          className="px-3 py-1 text-sm border rounded hover:bg-slate-50"
        >
          Redo
        </button>
        <button
          onClick={handleLoad}
          className="px-3 py-1 text-sm border rounded hover:bg-slate-50"
        >
          Load
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`px-4 py-1 text-sm rounded text-white ${
            saved 
              ? 'bg-green-600' 
              : saving 
                ? 'bg-slate-400' 
                : 'bg-slate-900 hover:bg-slate-700'
          }`}
        >
          {saved ? 'Saved!' : saving ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}

function EditorContent(): JSX.Element {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const websiteId = searchParams?.get('website');
  const pageSlug = searchParams?.get('page') || 'home';
  
  const handleBack = () => {
    if (websiteId) {
      router.push('/dashboard');
    } else {
      router.push('/dashboard');
    }
  };
  
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-100">
      <Editor
        resolver={{ Container, Text, Button, ImageBlock }}
      >
        <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </button>
            
            <div className="h-6 border-l border-gray-300" />
            
            <h1 className="text-lg font-semibold text-gray-900">
              {websiteId ? `Editing Website` : 'Demo Editor'}
            </h1>
            
            {!websiteId && (
              <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                Demo Mode - Changes saved locally
              </span>
            )}
          </div>
          
          <EditorActions websiteId={websiteId || undefined} slug={pageSlug} />
        </div>
        
        <div className="flex flex-1 overflow-hidden">
          <aside className="w-72 border-r bg-white shadow-sm">
            <Toolbox />
          </aside>

          <main className="flex-1 overflow-auto bg-gray-50">
            <Viewport>
              <Frame>
                <Element is={Container} canvas padding={32}>
                  <Text text="Welcome to the Website Builder!" />
                  <Text text="Drag components from the left panel to build your page" fontSize={14} />
                  <Button label="Get Started" />
                </Element>
              </Frame>
            </Viewport>
          </main>

          <aside className="w-80 border-l bg-white shadow-sm">
            <SettingsPanel />
          </aside>
        </div>
      </Editor>
    </div>
  );
}

// Separate component for editor actions
function EditorActions({ websiteId, slug }: { websiteId?: string; slug?: string }) {
  const { query, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));

  const { page, savePage } = usePage(websiteId || 'demo', slug || 'home');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const serialized = query.serialize();
      if (websiteId && slug) {
        await savePage(JSON.parse(serialized));
      } else {
        // For demo mode, just save to localStorage
        localStorage.setItem('demo-page-content', serialized);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleLoad = () => {
    if (page?.content) {
      const contentString = typeof page.content === 'string' 
        ? page.content 
        : JSON.stringify(page.content);
      actions.deserialize(contentString);
    } else {
      // For demo mode, load from localStorage
      const saved = localStorage.getItem('demo-page-content');
      if (saved) {
        actions.deserialize(saved);
      }
    }
  };

  useEffect(() => {
    // Auto-load content when page data is available
    if (page?.content) {
      handleLoad();
    }
  }, [page?.content]);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => actions.history.undo()}
        className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        disabled={!query.history.canUndo()}
      >
        Undo
      </button>
      <button
        onClick={() => actions.history.redo()}
        className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
        disabled={!query.history.canRedo()}
      >
        Redo
      </button>
      <button
        onClick={handleLoad}
        className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <RefreshCw className="w-3 h-3" />
        <span>Load</span>
      </button>
      <button
        onClick={handleSave}
        disabled={saving}
        className={`flex items-center space-x-1 px-4 py-1.5 text-sm rounded-md text-white transition-colors ${
          saved 
            ? 'bg-green-600' 
            : saving 
              ? 'bg-gray-400' 
              : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <Save className="w-3 h-3" />
        <span>{saved ? 'Saved!' : saving ? 'Saving...' : 'Save'}</span>
      </button>
    </div>
  );
}

export default function EditorPage(): JSX.Element {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}
