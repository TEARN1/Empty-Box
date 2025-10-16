/**
 * Configuration file for Empty Box
 * 
 * Customize the content source and other settings here
 */

export const config = {
  // Content URL - change this to your own API endpoint
  contentUrl: 'https://jsonplaceholder.typicode.com/posts/1',
  
  // Fallback content displayed when content fails to load
  fallbackContent: 'Welcome to Empty Box - A minimalist app template',
  
  // App metadata
  appName: 'Empty Box',
  version: '1.0.0',
  
  // Feature flags
  features: {
    enableLogging: true,
    showErrorMessages: true,
  },
};

export default config;
