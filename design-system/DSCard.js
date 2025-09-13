import React from 'react';
import { View } from 'react-native';
import { useDS } from './DesignSystemProvider';

export default function DSCard({ children, style, ...props }) {
  const { theme } = useDS();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.lg,
          borderRadius: 16,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 2,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
