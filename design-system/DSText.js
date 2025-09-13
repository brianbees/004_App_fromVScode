import React from 'react';
import { Text } from 'react-native';
import { useDS } from './DesignSystemProvider';

export default function DSText({ children, style, ...props }) {
  const { theme } = useDS();
  return (
    <Text
      style={[
        {
          color: theme.colors.text,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.fontSize,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
