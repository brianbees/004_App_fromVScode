import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDS } from './DesignSystemProvider';

export default function DSButton({ children, onPress, style, ...props }) {
  const { theme } = useDS();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: theme.colors.primary,
          padding: theme.spacing.md,
          borderRadius: 8,
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      <Text style={{ color: theme.colors.background, fontWeight: 'bold' }}>{children}</Text>
    </TouchableOpacity>
  );
}
