'use client';

import { useState, useEffect } from 'react';
import apiClient from '@/lib/api';

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
  content?: any;
  template?: string;
}

interface CreatePageData {
  title: string;
  slug?: string;
  template?: string;
  isHomepage?: boolean;
}

export function useWebsitePages(websiteId: string) {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPages = async () => {
    if (!websiteId) return;
    
    try {
      setLoading(true);
      const response = await apiClient.get(`/api/websites/${websiteId}/pages`);
      setPages(response.data.pages);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch pages');
    } finally {
      setLoading(false);
    }
  };

  const createPage = async (data: CreatePageData): Promise<Page> => {
    try {
      const response = await apiClient.post(`/api/websites/${websiteId}/pages`, data);
      const newPage = response.data.page;
      setPages(prev => [newPage, ...prev]);
      return newPage;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to create page');
    }
  };

  const updatePage = async (pageId: string, data: Partial<Page>): Promise<Page> => {
    try {
      const response = await apiClient.put(`/api/websites/${websiteId}/pages/${pageId}`, data);
      const updatedPage = response.data.page;
      setPages(prev => 
        prev.map(p => p.id === pageId ? updatedPage : p)
      );
      return updatedPage;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to update page');
    }
  };

  const deletePage = async (pageId: string): Promise<void> => {
    try {
      await apiClient.delete(`/api/websites/${websiteId}/pages/${pageId}`);
      setPages(prev => prev.filter(p => p.id !== pageId));
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to delete page');
    }
  };

  const duplicatePage = async (pageId: string): Promise<Page> => {
    try {
      const response = await apiClient.post(`/api/websites/${websiteId}/pages/${pageId}/duplicate`);
      const duplicatedPage = response.data.page;
      setPages(prev => [duplicatedPage, ...prev]);
      return duplicatedPage;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to duplicate page');
    }
  };

  const getPage = async (pageId: string): Promise<Page> => {
    try {
      const response = await apiClient.get(`/api/websites/${websiteId}/pages/${pageId}`);
      return response.data.page;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to fetch page');
    }
  };

  const getPageVersions = async (pageId: string) => {
    try {
      const response = await apiClient.get(`/api/websites/${websiteId}/pages/${pageId}/versions`);
      return response.data.versions;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to fetch page versions');
    }
  };

  const restorePageVersion = async (pageId: string, version: number): Promise<Page> => {
    try {
      const response = await apiClient.post(`/api/websites/${websiteId}/pages/${pageId}/versions/${version}/restore`);
      const restoredPage = response.data.page;
      setPages(prev => 
        prev.map(p => p.id === pageId ? { ...p, updatedAt: restoredPage.updatedAt } : p)
      );
      return restoredPage;
    } catch (err: any) {
      throw new Error(err.response?.data?.error || 'Failed to restore page version');
    }
  };

  useEffect(() => {
    if (websiteId) {
      fetchPages();
    }
  }, [websiteId]);

  return {
    pages,
    loading,
    error,
    createPage,
    updatePage,
    deletePage,
    duplicatePage,
    getPage,
    getPageVersions,
    restorePageVersion,
    refetch: fetchPages
  };
}