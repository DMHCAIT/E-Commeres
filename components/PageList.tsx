'use client';

import { useState } from 'react';
import { Plus, Edit, Trash2, Copy, Home, Globe, MoreVertical, FileText } from 'lucide-react';
import Link from 'next/link';

interface Page {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  isHomepage: boolean;
  createdAt: string;
  updatedAt: string;
  metaTitle?: string;
  metaDescription?: string;
}

interface PageListProps {
  websiteId: string;
  pages: Page[];
  onCreatePage: () => void;
  onEditPage: (pageId: string) => void;
  onDeletePage: (pageId: string) => Promise<void>;
  onDuplicatePage: (pageId: string) => Promise<void>;
  onUpdatePage: (pageId: string, data: Partial<Page>) => Promise<void>;
  loading?: boolean;
}

export default function PageList({
  websiteId,
  pages,
  onCreatePage,
  onEditPage,
  onDeletePage,
  onDuplicatePage,
  onUpdatePage,
  loading = false
}: PageListProps) {
  const [actionMenuOpen, setActionMenuOpen] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDelete = async (pageId: string, pageTitle: string) => {
    if (confirm(`Are you sure you want to delete "${pageTitle}"? This action cannot be undone.`)) {
      try {
        await onDeletePage(pageId);
        setActionMenuOpen(null);
      } catch (error) {
        alert('Failed to delete page');
      }
    }
  };

  const handleDuplicate = async (pageId: string) => {
    try {
      await onDuplicatePage(pageId);
      setActionMenuOpen(null);
    } catch (error) {
      alert('Failed to duplicate page');
    }
  };

  const handleSetHomepage = async (pageId: string) => {
    try {
      await onUpdatePage(pageId, { isHomepage: true });
      setActionMenuOpen(null);
    } catch (error) {
      alert('Failed to set as homepage');
    }
  };

  if (loading && pages.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Pages</h2>
          <p className="text-sm text-gray-500">Manage the pages in your website</p>
        </div>
        <button
          onClick={onCreatePage}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Page
        </button>
      </div>

      {/* Pages List */}
      {pages.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {pages.map((page) => (
            <div key={page.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {page.title}
                        </h3>
                        {page.isHomepage && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Home className="w-3 h-3 mr-1" />
                            Homepage
                          </span>
                        )}
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          page.status === 'published' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {page.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 mt-1">
                        <p className="text-sm text-gray-500">/{page.slug}</p>
                        <p className="text-xs text-gray-400">
                          Updated {formatDate(page.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link
                    href={`/editor?website=${websiteId}&page=${page.id}`}
                    className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Edit className="w-3 h-3 mr-1" />
                    Edit
                  </Link>

                  {page.status === 'published' && (
                    <a
                      href={`#`} // In real app, this would be the live URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      View
                    </a>
                  )}

                  {/* More Actions Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setActionMenuOpen(actionMenuOpen === page.id ? null : page.id)}
                      className="p-1.5 text-gray-400 hover:text-gray-600 rounded"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {actionMenuOpen === page.id && (
                      <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleDuplicate(page.id)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Duplicate
                          </button>
                          
                          {!page.isHomepage && (
                            <button
                              onClick={() => handleSetHomepage(page.id)}
                              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                            >
                              <Home className="w-4 h-4 mr-2" />
                              Set as Homepage
                            </button>
                          )}
                          
                          <hr className="my-1" />
                          
                          <button
                            onClick={() => handleDelete(page.id, page.title)}
                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="px-6 py-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No pages</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by creating your first page.</p>
          <div className="mt-6">
            <button
              onClick={onCreatePage}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
}