import React from 'react';
import { View, Switch, Text } from 'react-native';
import { useDS } from '../design-system/DesignSystemProvider';
import DSText from '../design-system/DSText';
import DSButton from '../design-system/DSButton';
import CustomTabBar from './CustomTabBar';

export default function AppearanceSettingsScreen({ navigation }) {
  const { theme, setTheme } = useDS();
  const isDark = theme.colors.background === '#18181b';

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DSText style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Appearance Settings</DSText>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32 }}>
          <DSText style={{ marginRight: 12 }}>Dark Theme</DSText>
          <Switch
            value={isDark}
            onValueChange={() => setTheme(isDark ? 'light' : 'dark')}
            thumbColor={isDark ? theme.colors.primary : theme.colors.surface}
          />
        </View>
        <DSButton style={{ marginTop: 16 }} onPress={() => setTheme(isDark ? 'light' : 'dark')}>
          Switch to {isDark ? 'Light' : 'Dark'} Theme
        </DSButton>
        <View style={{ marginTop: 32, width: '100%', alignItems: 'center' }}>
          <DSText style={{ fontSize: 18, marginBottom: 12 }}>Go to:</DSText>
          <DSButton style={{ marginVertical: 4, width: 180 }} onPress={() => {
            navigation.navigate('MainTabs', { screen: 'Home' });
          }}>Home</DSButton>
        </View>
      </View>
    </View>
  );
}
