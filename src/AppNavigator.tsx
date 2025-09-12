import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PastScoresScreen from '../screens/PastScoresScreen';
import AboutScreen from '../screens/AboutScreen';
import NumberSelectorScreen from '../screens/NumberSelectorScreen';
import ScoreScreen from '../screens/ScoreScreen';
import Number1Screen from '../screens/Number1Screen';
import Number2Screen from '../screens/Number2Screen';
import Number3Screen from '../screens/Number3Screen';
import Number4Screen from '../screens/Number4Screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NumberStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Number Selector" component={NumberSelectorScreen} />
      <Stack.Screen name="Number1" component={Number1Screen} />
      <Stack.Screen name="Number2" component={Number2Screen} />
      <Stack.Screen name="Number3" component={Number3Screen} />
      <Stack.Screen name="Number4" component={Number4Screen} />
      <Stack.Screen name="Score" component={ScoreScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Number Selector" component={NumberStack} />
        <Tab.Screen name="Past Scores" component={PastScoresScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
