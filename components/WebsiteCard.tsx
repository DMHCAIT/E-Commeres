'use client';

import { useState } from 'react';
import { ExternalLink, Edit, Trash2, Globe, Eye, MoreVertical } from 'lucide-react';
import Link from 'next/link';

interface Website {
  id: string;
  name: string;
  description: string;
  slug: string;
  domain: string;
  template: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
  pages: any[];
  settings: {
    theme: string;
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
  };
}

interface WebsiteCardProps {
  website: Website;
  onDelete: (websiteId: string) => Promise<void>;
  onPublish: (websiteId: string, status: 'published' | 'draft') => Promise<any>;
}

export default function WebsiteCard({ website, onDelete, onPublish }: WebsiteCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this website? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    try {
      await onDelete(website.id);
    } catch (error) {
      alert('Failed to delete website');
    } finally {
      setLoading(false);
    }
  };

  const handlePublishToggle = async () => {
    setLoading(true);
    try {
      const newStatus = website.status === 'published' ? 'draft' : 'published';
      await onPublish(website.id, newStatus);
    } catch (error) {
      alert('Failed to update website status');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Website Preview/Thumbnail */}
      <div 
        className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center"
        style={{ 
          background: `linear-gradient(135deg, ${website.settings.primaryColor}, ${website.settings.secondaryColor})` 
        }}
      >
        <Globe className="w-8 h-8 text-white" />
      </div>

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 truncate">{website.name}</h3>
            <p className="text-sm text-gray-500 truncate">{website.domain}</p>
          </div>
          
          {/* Status Badge */}
          <div className="relative">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              website.status === 'published' 
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              {website.status}
            </span>
          </div>
        </div>

        {/* Description */}
        {website.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{website.description}</p>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>Created {formatDate(website.createdAt)}</span>
          <span>{website.pages.length} pages</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Link
              href={`/editor?website=${website.id}`}
              className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Edit className="w-3 h-3 mr-1" />
              Edit
            </Link>
            
            {website.status === 'published' && (
              <a
                href={`https://${website.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                View Live
              </a>
            )}
          </div>

          {/* More Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1 text-gray-400 hover:text-gray-600 rounded"
              disabled={loading}
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <button
                  onClick={() => {
                    handlePublishToggle();
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center"
                  disabled={loading}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {website.status === 'published' ? 'Unpublish' : 'Publish'}
                </button>
                
                <button
                  onClick={() => {
                    handleDelete();
                    setShowMenu(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center"
                  disabled={loading}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}