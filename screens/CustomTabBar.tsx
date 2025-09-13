import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DSText from '../design-system/DSText';

const tabs = [
  { name: 'Home', icon: 'home-outline' },
  { name: 'Number Selector', icon: 'grid-outline' },
  { name: 'Past Scores', icon: 'trophy-outline' },
  { name: 'Settings', icon: 'settings-outline' },
  { name: 'About', icon: 'information-circle-outline' },
];

export default function CustomTabBar({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 62, borderTopWidth: 1, borderTopColor: '#e5e7eb', backgroundColor: '#fff', paddingHorizontal: 8 }}>
      {tabs.map(tab => (
        <TouchableOpacity key={tab.name} onPress={() => navigation.navigate(tab.name)} style={{ alignItems: 'center', minWidth: 48 }}>
          <Ionicons name={tab.icon} size={24} color={'#2563eb'} />
          <DSText style={{ fontSize: 12, marginTop: 2 }}>{tab.name}</DSText>
        </TouchableOpacity>
      ))}
    </View>
  );
}
