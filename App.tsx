import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/AppNavigator';
import { DesignSystemProvider } from './design-system/DesignSystemProvider';

export default function App() {
  return (
    <DesignSystemProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </DesignSystemProvider>
  );
}
