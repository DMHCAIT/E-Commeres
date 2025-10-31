'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Shield, 
  Settings, 
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Plus,
  Trash2
} from 'lucide-react';

interface DomainSettingsProps {
  websiteId: string;
  websiteName: string;
  currentDomain?: string;
}

interface Domain {
  id: string;
  domain: string;
  isPrimary: boolean;
  status: 'pending' | 'configuring' | 'active' | 'failed';
  sslEnabled: boolean;
  sslStatus: 'pending' | 'active' | 'expired' | 'error';
  createdAt: string;
}

const DomainSettings: React.FC<DomainSettingsProps> = ({ 
  websiteId, 
  websiteName,
  currentDomain 
}) => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDomain, setNewDomain] = useState('');

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
        setDomains(data.domains || []);
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
          isPrimary: domains.length === 0
        })
      });

      if (response.ok) {
        const data = await response.json();
        setDomains([...domains, data.domain]);
        setNewDomain('');
        setShowAddForm(false);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to add domain');
      }
    } catch (error) {
      console.error('Error adding domain:', error);
    }
  };

  const setPrimaryDomain = async (domainId: string) => {
    try {
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ isPrimary: true })
      });

      if (response.ok) {
        setDomains(domains.map(d => ({
          ...d,
          isPrimary: d.id === domainId
        })));
      }
    } catch (error) {
      console.error('Error setting primary domain:', error);
    }
  };

  const deleteDomain = async (domainId: string) => {
    if (!confirm('Are you sure you want to remove this domain?')) return;

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'configuring':
        return <Settings className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'failed':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'pending':
        return 'DNS Setup Required';
      case 'configuring':
        return 'Configuring...';
      case 'failed':
        return 'Failed';
      default:
        return 'Unknown';
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
            <Globe className="w-5 h-5 mr-2" />
            Custom Domains
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Connect your own domain to make your website accessible at your custom URL
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Domain
        </button>
      </div>

      {/* Add Domain Form */}
      {showAddForm && (
        <div className="bg-gray-50 border rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-3">Add New Domain</h4>
          <div className="flex space-x-3">
            <input
              type="text"
              value={newDomain}
              onChange={(e) => setNewDomain(e.target.value)}
              placeholder="example.com"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addDomain}
              disabled={!newDomain.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              Add
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md border border-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Current Domain */}
      {currentDomain && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-blue-900">Default Domain</h4>
              <p className="text-sm text-blue-700">{currentDomain}</p>
            </div>
            <a
              href={`https://${currentDomain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Visit
            </a>
          </div>
        </div>
      )}

      {/* Custom Domains List */}
      {domains.length > 0 ? (
        <div className="space-y-3">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-white border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className="flex items-center mr-4">
                    {getStatusIcon(domain.status)}
                    <span className="font-medium ml-2">{domain.domain}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    {domain.isPrimary && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Primary
                      </span>
                    )}
                    
                    <span className="text-gray-600">
                      {getStatusText(domain.status)}
                    </span>
                    
                    {domain.sslEnabled && (
                      <div className="flex items-center text-green-600">
                        <Shield className="w-4 h-4 mr-1" />
                        <span>SSL</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {domain.status === 'pending' && (
                    <a
                      href={`/dashboard/${websiteId}/domains`}
                      className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                    >
                      Setup DNS
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  
                  {domain.status === 'active' && !domain.isPrimary && (
                    <button
                      onClick={() => setPrimaryDomain(domain.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Set Primary
                    </button>
                  )}
                  
                  {domain.status === 'active' && (
                    <a
                      href={`https://${domain.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  <button
                    onClick={() => deleteDomain(domain.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Domain Actions */}
              {domain.status === 'pending' && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">
                    Configure DNS records to activate this domain
                  </p>
                  <a
                    href={`/dashboard/${websiteId}/domains`}
                    className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 inline-flex items-center"
                  >
                    Complete Setup
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <Globe className="w-8 h-8 text-gray-400 mx-auto mb-3" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">No custom domains</h4>
          <p className="text-gray-600 mb-4">
            Add a custom domain to make your website accessible at your own URL
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Your First Domain
          </button>
        </div>
      )}

      {/* Advanced Domain Management */}
      {domains.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <a
            href={`/dashboard/${websiteId}/domains`}
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
          >
            <Settings className="w-4 h-4 mr-2" />
            Advanced Domain Management
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      )}
    </div>
  );
};

export default DomainSettings;