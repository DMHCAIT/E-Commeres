'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Shield, 
  Settings, 
  Info,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import DomainManagement from './DomainManagement';
import DNSSetup from './DNSSetup';
import SSLManagement from './SSLManagement';

interface DomainDashboardProps {
  websiteId: string;
}

type TabType = 'domains' | 'dns' | 'ssl';

const DomainDashboard: React.FC<DomainDashboardProps> = ({ websiteId }) => {
  const [activeTab, setActiveTab] = useState<TabType>('domains');
  const [domains, setDomains] = useState<any[]>([]);
  const [selectedDomainForDNS, setSelectedDomainForDNS] = useState<{id: string, domain: string} | null>(null);
  const [domainStats, setDomainStats] = useState({
    total: 0,
    active: 0,
    pending: 0,
    sslEnabled: 0
  });

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
        
        // Calculate stats
        const stats = data.domains.reduce((acc: any, domain: any) => {
          acc.total++;
          if (domain.status === 'active') acc.active++;
          if (domain.status === 'pending') acc.pending++;
          if (domain.sslEnabled) acc.sslEnabled++;
          return acc;
        }, { total: 0, active: 0, pending: 0, sslEnabled: 0 });
        
        setDomainStats(stats);
      }
    } catch (error) {
      console.error('Error fetching domains:', error);
    }
  };

  const handleSSLStatusChange = (domainId: string, enabled: boolean) => {
    setDomains(domains.map(d => 
      d.id === domainId ? { ...d, sslEnabled: enabled } : d
    ));
    
    // Update stats
    setDomainStats(prev => ({
      ...prev,
      sslEnabled: enabled 
        ? prev.sslEnabled + 1 
        : Math.max(0, prev.sslEnabled - 1)
    }));
  };

  const openDNSSetup = (domainId: string, domain: string) => {
    setSelectedDomainForDNS({ id: domainId, domain });
    setActiveTab('dns');
  };

  const closeDNSSetup = () => {
    setSelectedDomainForDNS(null);
    setActiveTab('domains');
    fetchDomains(); // Refresh domains after DNS setup
  };

  const tabs = [
    {
      id: 'domains' as TabType,
      name: 'Domain Management',
      icon: Globe,
      description: 'Add and manage custom domains'
    },
    {
      id: 'dns' as TabType,
      name: 'DNS Setup',
      icon: Settings,
      description: 'Configure DNS records'
    },
    {
      id: 'ssl' as TabType,
      name: 'SSL Certificates',
      icon: Shield,
      description: 'Manage SSL security'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Stats */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Domain & SSL Management</h1>
              <p className="text-gray-600 mt-2">
                Configure custom domains and SSL certificates for your website
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-center">
                <Globe className="w-8 h-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Domains</p>
                  <p className="text-2xl font-bold text-gray-900">{domainStats.total}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Domains</p>
                  <p className="text-2xl font-bold text-gray-900">{domainStats.active}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-center">
                <Clock className="w-8 h-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Pending Setup</p>
                  <p className="text-2xl font-bold text-gray-900">{domainStats.pending}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-center">
                <Shield className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">SSL Enabled</p>
                  <p className="text-2xl font-bold text-gray-900">{domainStats.sslEnabled}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Setup Guide */}
          {domainStats.total === 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-blue-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Get Started with Custom Domains
                  </h3>
                  <div className="text-blue-800 space-y-2">
                    <p>Follow these steps to connect your custom domain:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                      <li>Add your domain using the "Add Domain" button</li>
                      <li>Configure DNS records with your domain provider</li>
                      <li>Wait for DNS propagation (up to 48 hours)</li>
                      <li>Enable SSL certificate for secure connections</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'domains' && (
              <DomainManagement 
                websiteId={websiteId}
                onDomainAdded={fetchDomains}
                onDNSSetup={openDNSSetup}
              />
            )}

            {activeTab === 'dns' && (
              <div>
                {selectedDomainForDNS ? (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold">
                        DNS Setup for {selectedDomainForDNS.domain}
                      </h3>
                      <button
                        onClick={closeDNSSetup}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ← Back to Domains
                      </button>
                    </div>
                    <DNSSetup
                      websiteId={websiteId}
                      domainId={selectedDomainForDNS.id}
                      domain={selectedDomainForDNS.domain}
                      onVerificationComplete={closeDNSSetup}
                    />
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No Domain Selected
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Select a domain from the Domain Management tab to configure DNS
                    </p>
                    <button
                      onClick={() => setActiveTab('domains')}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      Go to Domain Management
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'ssl' && (
              <SSLManagement
                websiteId={websiteId}
                domains={domains}
                onSSLStatusChange={handleSSLStatusChange}
              />
            )}
          </div>
        </div>

        {/* Status Summary */}
        {domains.length > 0 && (
          <div className="bg-white rounded-lg border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Summary</h3>
            <div className="space-y-3">
              {domains.map((domain) => (
                <div key={domain.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <span className="font-medium">{domain.domain}</span>
                    {domain.isPrimary && (
                      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {domain.status === 'active' ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      ) : domain.status === 'pending' ? (
                        <Clock className="w-4 h-4 text-orange-500 mr-1" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                      )}
                      <span className="text-sm capitalize">{domain.status}</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className={`w-4 h-4 mr-1 ${domain.sslEnabled ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className="text-sm">
                        SSL {domain.sslEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainDashboard;