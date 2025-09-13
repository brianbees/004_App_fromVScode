import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

export default function WinnersScreen() {
  const navigation = useNavigation();
  type WinnersParams = {
    winnerName: string;
    scores: number[];
    playerNames: string[];
  };
  const route = useRoute<RouteProp<{ params: WinnersParams }, 'params'>>();
  const winnerName = route.params?.winnerName ?? '';
  const scores = route.params?.scores ?? [];
  const playerNames = route.params?.playerNames ?? [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Winner</Text>
      <Text style={styles.winner}>{winnerName ? winnerName : 'No winner calculated.'}</Text>
      <Text style={styles.subtitle}>Scores:</Text>
      {Array.isArray(playerNames) && Array.isArray(scores) && playerNames.map((name, idx) => (
        <Text key={idx} style={styles.scoreLine}>{name}: {scores[idx]}</Text>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  winner: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4dd0e1',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  scoreLine: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    marginTop: 32,
    backgroundColor: '#4dd0e1',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
