import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreScreen({ route }: any) {
  const { numPlayers } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score Screen</Text>
      <Text>Number of players selected: {numPlayers}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
