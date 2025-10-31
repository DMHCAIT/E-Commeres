'use client';

import { useState } from 'react';
import { X, Plus, FileText } from 'lucide-react';

interface CreatePageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; slug?: string; template?: string; isHomepage?: boolean }) => Promise<void>;
}

const pageTemplates = [
  { 
    id: 'blank', 
    name: 'Blank Page', 
    description: 'Start with an empty page',
    icon: '📄'
  },
  { 
    id: 'business', 
    name: 'Business Landing', 
    description: 'Hero section, features, and call-to-action',
    icon: '🏢'
  },
  { 
    id: 'about', 
    name: 'About Page', 
    description: 'Company story and team information',
    icon: '👥'
  },
  { 
    id: 'contact', 
    name: 'Contact Page', 
    description: 'Contact form and business information',
    icon: '📞'
  },
  { 
    id: 'services', 
    name: 'Services Page', 
    description: 'Service listings and descriptions',
    icon: '⚙️'
  },
  { 
    id: 'portfolio', 
    name: 'Portfolio Page', 
    description: 'Showcase work and projects',
    icon: '🎨'
  }
];

export default function CreatePageModal({ isOpen, onClose, onSubmit }: CreatePageModalProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('blank');
  const [isHomepage, setIsHomepage] = useState(false);
  const [autoGenerateSlug, setAutoGenerateSlug] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    
    if (autoGenerateSlug) {
      const generatedSlug = newTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50);
      setSlug(generatedSlug);
    }
  };

  const handleSlugChange = (newSlug: string) => {
    setSlug(newSlug);
    setAutoGenerateSlug(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Page title is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await onSubmit({
        title: title.trim(),
        slug: slug.trim() || undefined,
        template: selectedTemplate,
        isHomepage
      });
      
      // Reset form
      setTitle('');
      setSlug('');
      setSelectedTemplate('blank');
      setIsHomepage(false);
      setAutoGenerateSlug(true);
      onClose();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Create New Page</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Page Title */}
          <div>
            <label htmlFor="pageTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Page Title *
            </label>
            <input
              id="pageTitle"
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="About Us"
              disabled={loading}
            />
          </div>

          {/* Page Slug */}
          <div>
            <label htmlFor="pageSlug" className="block text-sm font-medium text-gray-700 mb-2">
              URL Slug
            </label>
            <div className="flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                /
              </span>
              <input
                id="pageSlug"
                type="text"
                value={slug}
                onChange={(e) => handleSlugChange(e.target.value)}
                className="flex-1 rounded-r-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="about-us"
                pattern="[a-z0-9-]+"
                disabled={loading}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Leave empty to auto-generate from title. Only lowercase letters, numbers, and hyphens allowed.
            </p>
          </div>

          {/* Homepage Toggle */}
          <div className="flex items-center">
            <input
              id="isHomepage"
              type="checkbox"
              checked={isHomepage}
              onChange={(e) => setIsHomepage(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={loading}
            />
            <label htmlFor="isHomepage" className="ml-2 text-sm text-gray-700">
              Set as homepage
            </label>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose Template
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pageTemplates.map((template) => (
                <div
                  key={template.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedTemplate === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{template.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-500">{template.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedTemplate === template.id && (
                        <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Create Page</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}