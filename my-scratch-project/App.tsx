import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import { createIndexController, ContentData } from './src/controllers';
import config from './src/config';

export default function App() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = createIndexController({
      url: config.contentUrl,
      fallbackContent: config.fallbackContent,
    });

    const loadContent = async () => {
      try {
        const data = await controller.fetchContent();
        setContent(data);
      } catch (error) {
        if (config.features.enableLogging) {
          console.error('Failed to load content:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{content?.title || 'Empty Box'}</Text>
      <Text style={styles.message}>{content?.message || 'No content loaded'}</Text>
      {content?.error && config.features.showErrorMessages && (
        <Text style={styles.error}>Error: {content.error}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});
