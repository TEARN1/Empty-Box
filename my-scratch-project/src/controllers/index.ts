/**
 * IndexController - Core controller for the Empty Box application
 * 
 * The Empty Box concept: A minimalist mobile app template that loads
 * dynamic content from an external URL, allowing for app updates without
 * requiring app store approval.
 */

export interface ContentConfig {
  url: string;
  fallbackContent?: string;
}

export interface ContentData {
  title?: string;
  message?: string;
  content?: any;
  error?: string;
}

/**
 * IndexController handles dynamic content loading for the Empty Box
 */
export class IndexController {
  private contentUrl: string;
  private fallbackContent: string;

  constructor(config: ContentConfig) {
    this.contentUrl = config.url;
    this.fallbackContent = config.fallbackContent || 'No content available';
  }

  /**
   * Fetch dynamic content from the configured URL
   * @returns Promise with content data or error information
   */
  async fetchContent(): Promise<ContentData> {
    try {
      const response = await fetch(this.contentUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        title: data.title || 'Empty Box',
        message: data.message || '',
        content: data,
      };
    } catch (error) {
      console.error('Error fetching content:', error);
      return {
        title: 'Empty Box',
        message: this.fallbackContent,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Update the content URL dynamically
   * @param newUrl - New URL to fetch content from
   */
  setContentUrl(newUrl: string): void {
    this.contentUrl = newUrl;
  }

  /**
   * Get the current content URL
   * @returns Current content URL
   */
  getContentUrl(): string {
    return this.contentUrl;
  }
}

/**
 * Factory function to create an IndexController instance
 * @param config - Configuration for the controller
 * @returns IndexController instance
 */
export function createIndexController(config: ContentConfig): IndexController {
  return new IndexController(config);
}

// Default export for convenience
export default IndexController;
