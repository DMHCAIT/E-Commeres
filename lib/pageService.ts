import apiClient from '@/lib/api';

export interface Page {
  _id: string;
  websiteId: string;
  tenantId: string;
  slug: string;
  title: string;
  metaDescription?: string;
  content: Record<string, any>;
  publishedVersion?: string;
  draftVersion?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePageData {
  slug: string;
  title: string;
  metaDescription?: string;
  content?: Record<string, any>;
}

export interface UpdatePageData {
  title?: string;
  metaDescription?: string;
  content?: Record<string, any>;
}

export class PageService {
  static async getPages(websiteId: string): Promise<Page[]> {
    const response = await apiClient.get(`/api/websites/${websiteId}/pages`);
    return response.data.pages;
  }

  static async getPage(websiteId: string, slug: string): Promise<Page> {
    const response = await apiClient.get(`/api/websites/${websiteId}/pages/${slug}`);
    return response.data.page;
  }

  static async createPage(websiteId: string, data: CreatePageData): Promise<Page> {
    const response = await apiClient.post(`/api/websites/${websiteId}/pages`, data);
    return response.data.page;
  }

  static async updatePage(websiteId: string, slug: string, data: UpdatePageData): Promise<Page> {
    const response = await apiClient.put(`/api/websites/${websiteId}/pages/${slug}`, data);
    return response.data.page;
  }

  static async publishPage(websiteId: string, slug: string): Promise<void> {
    await apiClient.post(`/api/websites/${websiteId}/pages/${slug}/publish`);
  }

  static async deletePage(websiteId: string, slug: string): Promise<void> {
    await apiClient.delete(`/api/websites/${websiteId}/pages/${slug}`);
  }
}