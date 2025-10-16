# Empty-Box
Simplified App development 

## The Empty Box Concept

Empty Box is a minimalist mobile application framework that revolutionizes app development by separating the app shell from its content. The core idea: deploy a minimal "empty" app to app stores that loads all its content dynamically from external URLs.

### Key Benefits

1. **Bypass App Store Updates**: Update content without resubmitting to app stores
2. **Rapid Development**: Focus on content, not app structure
3. **Multiple Variants**: Create different apps by changing the content URL
4. **Simplified Testing**: Test content changes instantly without rebuilding

### Project Structure

```
Empty-Box/
└── my-scratch-project/     # Expo/React Native project
    ├── src/
    │   ├── controllers/    # IndexController for dynamic content
    │   ├── config.ts       # Configuration file
    │   └── __tests__/      # Test suite
    ├── App.tsx             # Main application component
    └── eas.json            # EAS Build configuration
```

### Quick Start

```bash
cd my-scratch-project
npm install
npm start
```

### Building APKs

```bash
npm install -g eas-cli
eas build --platform android --profile preview
```

For detailed documentation, see [my-scratch-project/README.md](my-scratch-project/README.md).

### Architecture

The Empty Box uses a controller-based architecture:
- **IndexController**: Manages dynamic content loading
- **Config**: Centralizes all configuration
- **App Component**: Renders content from the controller

This approach allows you to change what your app displays by simply updating a JSON endpoint, no app update required.

