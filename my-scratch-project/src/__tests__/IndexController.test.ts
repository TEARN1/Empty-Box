/**
 * Tests for IndexController
 */

import { IndexController, createIndexController } from '../controllers';

describe('IndexController', () => {
  describe('constructor', () => {
    it('should create an instance with valid config', () => {
      const controller = new IndexController({
        url: 'https://example.com/api',
        fallbackContent: 'Fallback text',
      });

      expect(controller).toBeInstanceOf(IndexController);
      expect(controller.getContentUrl()).toBe('https://example.com/api');
    });

    it('should use default fallback content if not provided', () => {
      const controller = new IndexController({
        url: 'https://example.com/api',
      });

      expect(controller).toBeInstanceOf(IndexController);
    });
  });

  describe('setContentUrl', () => {
    it('should update the content URL', () => {
      const controller = new IndexController({
        url: 'https://example.com/api',
      });

      controller.setContentUrl('https://new-url.com/api');
      expect(controller.getContentUrl()).toBe('https://new-url.com/api');
    });
  });

  describe('getContentUrl', () => {
    it('should return the current content URL', () => {
      const url = 'https://example.com/api';
      const controller = new IndexController({ url });

      expect(controller.getContentUrl()).toBe(url);
    });
  });

  describe('fetchContent', () => {
    beforeEach(() => {
      // Mock fetch globally
      global.fetch = jest.fn();
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should fetch and return content successfully', async () => {
      const mockData = {
        title: 'Test Title',
        message: 'Test Message',
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });

      const controller = new IndexController({
        url: 'https://example.com/api',
      });

      const result = await controller.fetchContent();

      expect(result.title).toBe('Test Title');
      expect(result.message).toBe('Test Message');
      expect(result.error).toBeUndefined();
    });

    it('should handle HTTP errors gracefully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
      });

      const controller = new IndexController({
        url: 'https://example.com/api',
        fallbackContent: 'Fallback content',
      });

      const result = await controller.fetchContent();

      expect(result.title).toBe('Empty Box');
      expect(result.message).toBe('Fallback content');
      expect(result.error).toBeDefined();
    });

    it('should handle network errors gracefully', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(
        new Error('Network error')
      );

      const controller = new IndexController({
        url: 'https://example.com/api',
        fallbackContent: 'Fallback content',
      });

      const result = await controller.fetchContent();

      expect(result.title).toBe('Empty Box');
      expect(result.message).toBe('Fallback content');
      expect(result.error).toBe('Network error');
    });

    it('should use default values when response is missing fields', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({}),
      });

      const controller = new IndexController({
        url: 'https://example.com/api',
      });

      const result = await controller.fetchContent();

      expect(result.title).toBe('Empty Box');
      expect(result.message).toBe('');
    });
  });

  describe('createIndexController', () => {
    it('should create an instance using factory function', () => {
      const controller = createIndexController({
        url: 'https://example.com/api',
      });

      expect(controller).toBeInstanceOf(IndexController);
      expect(controller.getContentUrl()).toBe('https://example.com/api');
    });
  });
});
