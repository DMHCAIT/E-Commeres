'use client';

import { useState, useEffect } from 'react';
import apiClient from '@/lib/api';

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

interface CreateWebsiteData {
  name: string;
  description?: string;
  template?: string;
  domain?: string;
}

export function useWebsites() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWebsites = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/api/websites');
      setWebsites(response.data.websites);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch websites');
    } finally {
      setLoading(false);
    }
  };

  const createWebsite = async (data: CreateWebsiteData): Promise<Website> => {
    try {
      const response = await apiClient.post('/api/websites', data);
      const newWebsite = response.data.website;
      setWebsites(prev => [newWebsite, ...prev]);
      return newWebsite;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to create website');
    }
  };

  const updateWebsite = async (websiteId: string, data: Partial<Website>): Promise<Website> => {
    try {
      const response = await apiClient.put(`/api/websites/${websiteId}`, data);
      const updatedWebsite = response.data.website;
      setWebsites(prev => 
        prev.map(w => w.id === websiteId ? updatedWebsite : w)
      );
      return updatedWebsite;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update website');
    }
  };

  const deleteWebsite = async (websiteId: string): Promise<void> => {
    try {
      await apiClient.delete(`/api/websites/${websiteId}`);
      setWebsites(prev => prev.filter(w => w.id !== websiteId));
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to delete website');
    }
  };

  const publishWebsite = async (websiteId: string, status: 'published' | 'draft'): Promise<Website> => {
    try {
      const response = await apiClient.post(`/api/websites/${websiteId}/publish`, { status });
      const updatedWebsite = response.data.website;
      setWebsites(prev => 
        prev.map(w => w.id === websiteId ? updatedWebsite : w)
      );
      return updatedWebsite;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update website status');
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  return {
    websites,
    loading,
    error,
    createWebsite,
    updateWebsite,
    deleteWebsite,
    publishWebsite,
    refetch: fetchWebsites
  };
}