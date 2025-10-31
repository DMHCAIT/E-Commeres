import { useState, useEffect, useCallback } from 'react';

export interface Domain {
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

export interface UseDomainManagementOptions {
  websiteId: string;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export interface UseDomainManagementReturn {
  domains: Domain[];
  loading: boolean;
  error: string | null;
  stats: {
    total: number;
    active: number;
    pending: number;
    sslEnabled: number;
  };
  actions: {
    fetchDomains: () => Promise<void>;
    addDomain: (domainData: { domain: string; subdomain?: string; isPrimary?: boolean }) => Promise<Domain | null>;
    updateDomain: (domainId: string, updates: Partial<Domain>) => Promise<Domain | null>;
    deleteDomain: (domainId: string) => Promise<boolean>;
    verifyDomain: (domainId: string) => Promise<Domain | null>;
    toggleSSL: (domainId: string, enabled: boolean) => Promise<Domain | null>;
    setPrimaryDomain: (domainId: string) => Promise<boolean>;
  };
}

export const useDomainManagement = ({
  websiteId,
  autoRefresh = false,
  refreshInterval = 30000
}: UseDomainManagementOptions): UseDomainManagementReturn => {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAuthHeaders = () => ({
    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    'Content-Type': 'application/json'
  });

  const fetchDomains = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains`, {
        headers: getAuthHeaders()
      });
      
      if (response.ok) {
        const data = await response.json();
        setDomains(data.domains || []);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch domains');
      }
    } catch (err) {
      setError('Network error while fetching domains');
      console.error('Error fetching domains:', err);
    } finally {
      setLoading(false);
    }
  }, [websiteId]);

  const addDomain = useCallback(async (domainData: { 
    domain: string; 
    subdomain?: string; 
    isPrimary?: boolean 
  }): Promise<Domain | null> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(domainData)
      });

      if (response.ok) {
        const data = await response.json();
        const newDomain = data.domain;
        setDomains(prev => [...prev, newDomain]);
        return newDomain;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add domain');
        return null;
      }
    } catch (err) {
      setError('Network error while adding domain');
      console.error('Error adding domain:', err);
      return null;
    }
  }, [websiteId]);

  const updateDomain = useCallback(async (domainId: string, updates: Partial<Domain>): Promise<Domain | null> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(updates)
      });

      if (response.ok) {
        const data = await response.json();
        const updatedDomain = data.domain;
        setDomains(prev => prev.map(d => d.id === domainId ? updatedDomain : d));
        return updatedDomain;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to update domain');
        return null;
      }
    } catch (err) {
      setError('Network error while updating domain');
      console.error('Error updating domain:', err);
      return null;
    }
  }, [websiteId]);

  const deleteDomain = useCallback(async (domainId: string): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (response.ok) {
        setDomains(prev => prev.filter(d => d.id !== domainId));
        return true;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to delete domain');
        return false;
      }
    } catch (err) {
      setError('Network error while deleting domain');
      console.error('Error deleting domain:', err);
      return false;
    }
  }, [websiteId]);

  const verifyDomain = useCallback(async (domainId: string): Promise<Domain | null> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/verify`, {
        method: 'POST',
        headers: getAuthHeaders()
      });

      if (response.ok) {
        const data = await response.json();
        const verifiedDomain = data.domain;
        setDomains(prev => prev.map(d => d.id === domainId ? verifiedDomain : d));
        return verifiedDomain;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to verify domain');
        return null;
      }
    } catch (err) {
      setError('Network error while verifying domain');
      console.error('Error verifying domain:', err);
      return null;
    }
  }, [websiteId]);

  const toggleSSL = useCallback(async (domainId: string, enabled: boolean): Promise<Domain | null> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}/ssl`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ enabled })
      });

      if (response.ok) {
        const data = await response.json();
        const updatedDomain = data.domain;
        setDomains(prev => prev.map(d => d.id === domainId ? updatedDomain : d));
        return updatedDomain;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to toggle SSL');
        return null;
      }
    } catch (err) {
      setError('Network error while toggling SSL');
      console.error('Error toggling SSL:', err);
      return null;
    }
  }, [websiteId]);

  const setPrimaryDomain = useCallback(async (domainId: string): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`/api/websites/${websiteId}/domains/${domainId}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ isPrimary: true })
      });

      if (response.ok) {
        setDomains(prev => prev.map(d => ({
          ...d,
          isPrimary: d.id === domainId
        })));
        return true;
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to set primary domain');
        return false;
      }
    } catch (err) {
      setError('Network error while setting primary domain');
      console.error('Error setting primary domain:', err);
      return false;
    }
  }, [websiteId]);

  // Calculate stats
  const stats = {
    total: domains.length,
    active: domains.filter(d => d.status === 'active').length,
    pending: domains.filter(d => d.status === 'pending').length,
    sslEnabled: domains.filter(d => d.sslEnabled).length
  };

  // Initial fetch
  useEffect(() => {
    fetchDomains();
  }, [fetchDomains]);

  // Auto-refresh
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchDomains();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [autoRefresh, refreshInterval, fetchDomains]);

  return {
    domains,
    loading,
    error,
    stats,
    actions: {
      fetchDomains,
      addDomain,
      updateDomain,
      deleteDomain,
      verifyDomain,
      toggleSSL,
      setPrimaryDomain
    }
  };
};

// Utility functions for domain management
export const domainUtils = {
  validateDomainFormat: (domain: string): boolean => {
    const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return domainRegex.test(domain) && domain.length <= 253;
  },

  formatDomainWithSubdomain: (domain: string, subdomain?: string): string => {
    if (!subdomain || subdomain.trim() === '') {
      return domain;
    }
    return `${subdomain.trim()}.${domain}`;
  },

  getStatusColor: (status: string): string => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'pending':
        return 'text-orange-600';
      case 'configuring':
        return 'text-blue-600';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  },

  getSSLStatusColor: (status: string): string => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'pending':
        return 'text-orange-600';
      case 'expired':
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  },

  formatLastChecked: (lastChecked?: string): string => {
    if (!lastChecked) return 'Never';
    
    const date = new Date(lastChecked);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    
    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  }
};