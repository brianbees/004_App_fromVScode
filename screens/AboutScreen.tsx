  // Example navigation to Home tab
  // navigation.getParent()?.navigate('MainTabs', { screen: 'Home' });
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';
import { useDS } from '../design-system/DesignSystemProvider';

export default function AboutScreen() {
  const { theme } = useDS();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background, padding: 24 }}>
      <Text style={[GlobalStyles.title, { color: theme.colors.text }]}>About this App</Text>
      <Text style={{ fontSize: 16, textAlign: 'center', color: theme.colors.text }}>
        This app helps you keep track of scores and look back at past winners — designed to be simple, fun, and easy to use.\n\nMy wife and I enjoy watching the programme together, and we wanted a digital way to keep track of our scores.\n\nI had heard it was possible to create an app using AI, so I decided to give it a try.\n\nIt is meant to be a bit of fun, and I hope you enjoy using it as much as we do.\n\n— Brian, September 2025
      </Text>
      <Text style={{ marginTop: 24, fontSize: 16, color: theme.colors.text }}>
        For feedback or suggestions, contact support@example.com
      </Text>
    </ScrollView>
  );
}


