import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';
import DSButton from '../design-system/DSButton';
import { useDS } from '../design-system/DesignSystemProvider';
export default function SettingsScreen({ navigation }) {
  const { theme } = useDS();
  return (
    <View style={[GlobalStyles.container, { backgroundColor: theme.colors.background }]}> 
      <Text style={[GlobalStyles.title, { color: theme.colors.text }]}>Settings</Text>
      <Text style={{ color: theme.colors.text }}>Version: 1.0.0</Text>
      <Text style={{ color: theme.colors.text }}>Developer: Brian</Text>
      <DSButton style={{ marginTop: 24 }} onPress={() => navigation.getParent()?.navigate('AppearanceSettings')}>Appearance Settings</DSButton>
      <Text style={{ marginTop: 24, fontSize: 16, color: theme.colors.text }}>
        Adjust your app preferences here. More settings coming soon!
      </Text>
    </View>
  );
}


