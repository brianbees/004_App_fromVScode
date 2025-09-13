import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0', padding: 24 }}>
      <Text style={GlobalStyles.title}>About this App</Text>
      <Text style={{ fontSize: 16, textAlign: 'center' }}>
        This app helps you keep track of scores and look back at past winners — designed to be simple, fun, and easy to use.\n\nMy wife and I enjoy watching the programme together, and we wanted a digital way to keep track of our scores.\n\nI had heard it was possible to create an app using AI, so I decided to give it a try.\n\nIt is meant to be a bit of fun, and I hope you enjoy using it as much as we do.\n\n— Brian, September 2025
      </Text>
      <Text style={{ marginTop: 24, fontSize: 16, color: '#555' }}>
        For feedback or suggestions, contact support@example.com
      </Text>
    </ScrollView>
  );
}


