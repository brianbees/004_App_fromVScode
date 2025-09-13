import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../src/components/GlobalStyles';

export default function ScoreScreen({ route }: any) {
  const { numPlayers } = route.params || {};
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Score Screen</Text>
      <Text>Number of players selected: {numPlayers}</Text>
    </View>
  );
}


