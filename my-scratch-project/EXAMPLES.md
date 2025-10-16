# Empty Box Usage Examples

This document provides examples of how to use the Empty Box template for various use cases.

## Example 1: Simple Blog Post Display

Update `src/config.ts`:

```typescript
export const config = {
  contentUrl: 'https://api.example.com/blog/latest',
  fallbackContent: 'Loading latest blog post...',
  appName: 'My Blog',
  version: '1.0.0',
};
```

Expected JSON response:
```json
{
  "title": "Latest Blog Post",
  "message": "This is the content of the latest blog post...",
  "author": "John Doe",
  "date": "2025-10-16"
}
```

## Example 2: Product Showcase

Update `src/config.ts`:

```typescript
export const config = {
  contentUrl: 'https://api.example.com/products/featured',
  fallbackContent: 'Showing featured products...',
  appName: 'Product Showcase',
  version: '1.0.0',
};
```

Expected JSON response:
```json
{
  "title": "Featured Product",
  "message": "Check out our latest offering!",
  "price": "$99.99",
  "image_url": "https://example.com/product.jpg"
}
```

## Example 3: News Feed

Update `src/config.ts`:

```typescript
export const config = {
  contentUrl: 'https://api.example.com/news/breaking',
  fallbackContent: 'Fetching latest news...',
  appName: 'News Feed',
  version: '1.0.0',
};
```

Expected JSON response:
```json
{
  "title": "Breaking News",
  "message": "Latest developments in technology...",
  "category": "Technology",
  "timestamp": "2025-10-16T10:00:00Z"
}
```

## Example 4: Multiple Apps from One Codebase

Create different apps by only changing the content URL:

### App 1: Company Blog
```typescript
contentUrl: 'https://myblog.com/api/latest'
```

### App 2: Product Catalog
```typescript
contentUrl: 'https://mystore.com/api/featured'
```

### App 3: News Aggregator
```typescript
contentUrl: 'https://mynews.com/api/breaking'
```

Each URL returns the same JSON structure but different content, resulting in different apps from the same codebase!

## Example 5: Dynamic Content Updates

The power of Empty Box: update your app content without app store approval!

1. Deploy app to app store with content URL: `https://api.example.com/content`
2. Users download and install the app
3. Update content on your server at `https://api.example.com/content`
4. Users see new content immediately when they open the app
5. No app update required!

## Custom Content Structure

You can extend the IndexController to handle more complex content structures:

```typescript
// In your App.tsx or custom component
const data = await controller.fetchContent();

// Access custom fields from your content
const customField = data.content.customField;
const images = data.content.images;
const metadata = data.content.metadata;
```

## Testing Different Content Sources

Use the IndexController's `setContentUrl()` method to switch between different content sources:

```typescript
const controller = createIndexController({
  url: 'https://api.example.com/content1',
});

// Later, switch to different content
controller.setContentUrl('https://api.example.com/content2');
const newContent = await controller.fetchContent();
```

## Best Practices

1. **Always provide fallback content**: Ensure good UX when network is unavailable
2. **Use HTTPS**: Secure your content endpoints
3. **Handle errors gracefully**: The IndexController already does this
4. **Keep JSON responses consistent**: Maintain the same structure across updates
5. **Test with different network conditions**: Use slow connections to verify UX
6. **Cache content locally**: Consider adding caching for offline access (future enhancement)

## Advanced: Multiple Content Endpoints

You can create multiple controllers for different types of content:

```typescript
const mainController = createIndexController({
  url: 'https://api.example.com/main',
});

const sidebarController = createIndexController({
  url: 'https://api.example.com/sidebar',
});

const mainContent = await mainController.fetchContent();
const sidebarContent = await sidebarController.fetchContent();
```
