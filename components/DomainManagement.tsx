'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Plus, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ExternalLink,
  Settings,
  Trash2,
  RefreshCw
} from 'lucide-react';

interface DomainConfiguration {
  id: string;
  domain: string;
  isPrimary: boolean;
  status: 'pending' | 'configuring' | 'active' | 'failed';
  sslEnabled: boolean;
  sslStatus: 'pending' | 'active' | 'expired' | 'error';
  createdAt: string;
  lastChecked?: string;
  statusSummary: {
    statusText: string;
    color: string;
    nextAction?: string;
  };
}

interface DomainManagementProps {
  websiteId: string;
  onDomainAdded?: () => void;
  onDNSSetup?: (domainId: string, domain: string) => void;
}

const DomainManagement: React.FC<DomainManagementProps> = ({ 
  websiteId, 
  onDomainAdded, 
  onDNSSetup 
}) => {
  const [domains, setDomains] = useState<DomainConfiguration[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDomain, setNewDomain] = useState('');
  const [newSubdomain, setNewSubdomain] = useState('');
  const [isPrimary, setIsPrimary] = useState(false);
  const [validating, setValidating] = useState<string | null>(null);

  useEffect(() => {
    fetchDomains();
  }, [websiteId]);

  const fetchDomains = async () => {
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setDomains(data.domains);
      }
    } catch (error) {
      console.error('Error fetching domains:', error);
    } finally {
      setLoading(false);
    }
  };

  const addDomain = async () => {
    if (!newDomain.trim()) return;

    try {
      const response = await fetch(`/api/websites/${websiteId}/domains`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          domain: newDomain.trim(),
          subdomain: newSubdomain.trim() || undefined,
          isPrimary: domains.length === 0 ? true : isPrimary
        })
      });

      if (response.ok) {
        const data = await response.json();
        setDomains([...domains, data.domain]);
        setShowAddModal(false);
        setNewDomain('');
        setNewSubdomain('');
        setIsPrimary(false);
        onDomainAdded?.();
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to add domain');
      }
    } catch (error) {
      console.error('Error adding domain:', error);
      alert('Failed to add domain');
    }
  };

  const verifyDomain = async (domainId: string) => {
    setValidating(domainId);
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/verify`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDomains(domains.map(d => 
          d.id === domainId ? data.domain : d
        ));
      }
    } catch (error) {
      console.error('Error verifying domain:', error);
    } finally {
      setValidating(null);
    }
  };

  const toggleSSL = async (domainId: string, enabled: boolean) => {
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/ssl`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ enabled })
      });

      if (response.ok) {
        const data = await response.json();
        setDomains(domains.map(d => 
          d.id === domainId ? data.domain : d
        ));
      }
    } catch (error) {
      console.error('Error toggling SSL:', error);
    }
  };

  const deleteDomain = async (domainId: string) => {
    if (!confirm('Are you sure you want to delete this domain?')) return;

    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      if (response.ok) {
        setDomains(domains.filter(d => d.id !== domainId));
      }
    } catch (error) {
      console.error('Error deleting domain:', error);
    }
  };

  const getStatusIcon = (status: string, color: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-orange-500" />;
      case 'configuring':
        return <RefreshCw className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="w-6 h-6 animate-spin mr-2" />
        Loading domains...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Globe className="w-6 h-6 mr-2" />
            Domain Management
          </h2>
          <p className="text-gray-600 mt-1">
            Configure custom domains and SSL certificates for your website
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Domain
        </button>
      </div>

      {domains.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No domains configured</h3>
          <p className="text-gray-600 mb-4">
            Add a custom domain to make your website accessible at your own URL
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Your First Domain
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-white border rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex items-center mr-4">
                    {getStatusIcon(domain.status, domain.statusSummary.color)}
                    <span className="text-lg font-semibold ml-2">{domain.domain}</span>
                  </div>
                  {domain.isPrimary && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      Primary
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => verifyDomain(domain.id)}
                    disabled={validating === domain.id}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded"
                    title="Verify DNS"
                  >
                    <RefreshCw className={`w-4 h-4 ${validating === domain.id ? 'animate-spin' : ''}`} />
                  </button>
                  <button
                    onClick={() => deleteDomain(domain.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded"
                    title="Delete domain"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="font-medium">{domain.statusSummary.statusText}</div>
                  {domain.statusSummary.nextAction && (
                    <div className="text-xs text-blue-600">{domain.statusSummary.nextAction}</div>
                  )}
                </div>
                <div>
                  <div className="text-sm text-gray-500">SSL Certificate</div>
                  <div className="flex items-center">
                    <Shield className={`w-4 h-4 mr-1 ${domain.sslEnabled ? 'text-green-500' : 'text-gray-400'}`} />
                    <span className="font-medium">
                      {domain.sslEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Added</div>
                  <div className="font-medium">
                    {new Date(domain.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  {domain.status === 'pending' && (
                    <button
                      onClick={() => onDNSSetup ? onDNSSetup(domain.id, domain.domain) : window.open(`/api/websites/${websiteId}/domains/${domain.id}/dns-instructions`, '_blank')}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      DNS Setup Instructions
                    </button>
                  )}
                  {domain.status === 'active' && !domain.sslEnabled && (
                    <button
                      onClick={() => toggleSSL(domain.id, true)}
                      className="text-green-600 hover:text-green-800 text-sm flex items-center"
                    >
                      <Shield className="w-4 h-4 mr-1" />
                      Enable SSL
                    </button>
                  )}
                  {domain.sslEnabled && (
                    <button
                      onClick={() => toggleSSL(domain.id, false)}
                      className="text-red-600 hover:text-red-800 text-sm flex items-center"
                    >
                      <Shield className="w-4 h-4 mr-1" />
                      Disable SSL
                    </button>
                  )}
                </div>
                {domain.status === 'active' && (
                  <a
                    href={`https://${domain.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Domain Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Add Custom Domain</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subdomain (optional)
                </label>
                <input
                  type="text"
                  value={newSubdomain}
                  onChange={(e) => setNewSubdomain(e.target.value)}
                  placeholder="www, blog, shop..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Domain *
                </label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  placeholder="example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {domains.length > 0 && (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPrimary"
                    checked={isPrimary}
                    onChange={(e) => setIsPrimary(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="isPrimary" className="text-sm text-gray-700">
                    Set as primary domain
                  </label>
                </div>
              )}

              <div className="text-xs text-gray-500">
                Preview: {newSubdomain ? `${newSubdomain}.` : ''}{newDomain || 'your-domain.com'}
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={addDomain}
                disabled={!newDomain.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                Add Domain
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DomainManagement;