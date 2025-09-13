import React from 'react';
import { TextInput } from 'react-native';
import { useDS } from './DesignSystemProvider';

export default function DSInput({ style, ...props }) {
  const { theme } = useDS();
  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.colors.surface,
          color: theme.colors.text,
          padding: theme.spacing.md,
          borderRadius: 8,
          fontSize: theme.typography.fontSize,
        },
        style,
      ]}
      {...props}
    />
  );
}
