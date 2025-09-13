import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

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
import WinnersScreen from '../screens/winners';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NumberStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
  <Stack.Screen name="Select Number" component={NumberSelectorScreen} />
      <Stack.Screen name="Number1" component={Number1Screen} />
      <Stack.Screen name="Number2" component={Number2Screen} />
      <Stack.Screen name="Number3" component={Number3Screen} />
      <Stack.Screen name="Number4" component={Number4Screen} />
      <Stack.Screen name="Score" component={ScoreScreen} />
      <Stack.Screen name="Winners" component={WinnersScreen} />
    </Stack.Navigator>
  );
}

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

function TabNavigatorWithInsets() {
  const insets = useSafeAreaInsets();
  // More aggressive minimum padding for devices with tall gesture bars (e.g., S21)
  const MIN_BOTTOM_PAD = Platform.OS === 'android' ? 40 : 32;
  const bottomPad = Math.max(insets.bottom, MIN_BOTTOM_PAD);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const iconNames = {
          Home: 'home',
          'Number Selector': 'grid',
          'Past Scores': 'trophy',
          Settings: 'settings',
          About: 'information-circle',
        } as const;
        const iconOutlineNames = {
          Home: 'home-outline',
          'Number Selector': 'grid-outline',
          'Past Scores': 'trophy-outline',
          Settings: 'settings-outline',
          About: 'information-circle-outline',
        } as const;

        return {
          headerShown: false,
          safeAreaInsets: { bottom: bottomPad },
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#6b7280',
          tabBarLabelStyle: { fontSize: 12, marginBottom: 2 },
          tabBarIcon: ({ color, size, focused }: { color: string; size: number; focused: boolean }) => {
            const name = focused
              ? iconNames[route.name as keyof typeof iconNames]
              : iconOutlineNames[route.name as keyof typeof iconOutlineNames];
            return <Ionicons name={name} size={size ?? 22} color={color} />;
          },
          tabBarStyle:
            Platform.OS === 'web'
              ? {
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  width: '100%',
                  zIndex: 10,
                  minHeight: 62,
                  paddingTop: 6,
                  paddingBottom: bottomPad,
                  borderTopWidth: 1,
                  borderTopColor: '#e5e7eb',
                  backgroundColor: '#ffffff',
                }
              : {
                  position: 'relative',
                  minHeight: 62,
                  paddingTop: 6,
                  paddingBottom: bottomPad,
                  borderTopWidth: 1,
                  borderTopColor: '#e5e7eb',
                  backgroundColor: '#ffffff',
                },
          tabBarHideOnKeyboard: true,
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Number Selector" component={NumberStack} options={{ headerShown: false }} />
      <Tab.Screen name="Past Scores" component={PastScoresScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" translucent={false} backgroundColor="#ffffff" />
      <NavigationContainer theme={AppTheme}>
        <TabNavigatorWithInsets />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
