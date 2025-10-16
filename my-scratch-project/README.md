# Empty Box - Minimalist App Template

## Overview

Empty Box is a minimalist mobile application template built with Expo and React Native. It implements a unique concept where the app loads dynamic content from an external URL, enabling app updates without requiring app store approval.

## Key Features

- **Dynamic Content Loading**: Fetches content from configurable external URLs
- **Minimal Footprint**: Lightweight app structure
- **EAS Build Support**: Easy APK generation for Android
- **TypeScript**: Full type safety and better developer experience
- **Flexible Architecture**: Easy to extend and customize

## Architecture

### IndexController

The core of the Empty Box is the `IndexController` located in `src/controllers/index.ts`. It handles:

- Fetching content from external URLs
- Error handling with fallback content
- Dynamic URL configuration
- Type-safe content management

### Content Loading

By default, the app loads content from a JSON API endpoint. You can change the content URL in `App.tsx`:

```typescript
const DEFAULT_CONTENT_URL = 'https://your-content-api.com/content';
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI

### Installation

```bash
cd my-scratch-project
npm install
```

### Running the App

```bash
# Start the development server
npm start

# Run on Android
npm run android

# Run on iOS (macOS only)
npm run ios

# Run on web
npm run web
```

## Building for Production

### Using EAS Build

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure the project:
```bash
eas build:configure
```

4. Build APK:
```bash
eas build --platform android --profile preview
```

## Customization

### Changing Content Source

Edit `App.tsx` to point to your content API:

```typescript
const controller = createIndexController({
  url: 'https://your-api.com/endpoint',
  fallbackContent: 'Your fallback message',
});
```

### Content Format

The controller expects JSON responses with the following structure:

```json
{
  "title": "Your Title",
  "message": "Your Message",
  "content": { /* additional data */ }
}
```

## Strategic Benefits

1. **Bypass App Store Updates**: Update content without resubmitting to app stores
2. **Rapid Iteration**: Test and deploy content changes instantly
3. **Platform for Variations**: Create multiple apps with different content URLs
4. **Simplified Development**: Focus on content, not app structure

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
