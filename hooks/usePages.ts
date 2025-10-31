'use client';

import { useState, useEffect } from 'react';
import { PageService, Page, CreatePageData, UpdatePageData } from '@/lib/pageService';

export function usePages(websiteId: string) {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPages = async () => {
    if (!websiteId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const fetchedPages = await PageService.getPages(websiteId);
      setPages(fetchedPages);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, [websiteId]);

  const createPage = async (data: CreatePageData) => {
    try {
      const newPage = await PageService.createPage(websiteId, data);
      setPages(prev => [...prev, newPage]);
      return newPage;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  const updatePage = async (slug: string, data: UpdatePageData) => {
    try {
      const updatedPage = await PageService.updatePage(websiteId, slug, data);
      setPages(prev => prev.map(page => 
        page.slug === slug ? updatedPage : page
      ));
      return updatedPage;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  const publishPage = async (slug: string) => {
    try {
      await PageService.publishPage(websiteId, slug);
      // Refresh pages to get updated published status
      await fetchPages();
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  return {
    pages,
    loading,
    error,
    createPage,
    updatePage,
    publishPage,
    refetch: fetchPages
  };
}

export function usePage(websiteId: string, slug: string) {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPage = async () => {
    if (!websiteId || !slug) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const fetchedPage = await PageService.getPage(websiteId, slug);
      setPage(fetchedPage);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, [websiteId, slug]);

  const savePage = async (content: Record<string, any>) => {
    if (!page) return;
    
    try {
      const updatedPage = await PageService.updatePage(websiteId, slug, { content });
      setPage(updatedPage);
      return updatedPage;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    }
  };

  return {
    page,
    loading,
    error,
    savePage,
    refetch: fetchPage
  };
}