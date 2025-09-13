import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';

export default function SettingsScreen() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Settings</Text>
      <Text>Version: 1.0.0</Text>
      <Text>Developer: Brian</Text>
      <Text style={{ marginTop: 24, fontSize: 16, color: '#555' }}>
        Adjust your app preferences here. More settings coming soon!
      </Text>
    </View>
  );
}


